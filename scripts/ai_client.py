"""
AI client: round-robin Groq / GitHub / NVIDIA.
Distributes load across providers to maximise free tokens.
Immediate fallback if one fails — per-call timeout, no SDK retries.
"""

import json
import logging
import os
import re as _re
import time

from groq import Groq
from openai import OpenAI

log = logging.getLogger(__name__)

GROQ_MODEL = "llama-3.3-70b-versatile"
# GitHub Models rate-limit tiers: "high" models (DeepSeek-V3) allow 8 requests
# per DAY on the free plan, "low" ones allow 1000.
GITHUB_MODEL = "openai/gpt-4.1-mini"
GITHUB_BASE_URL = "https://models.github.ai/inference"
NVIDIA_FAST = "meta/llama-3.1-8b-instruct"
NVIDIA_STABLE = "meta/llama-3.3-70b-instruct"

PROVIDERS = ["groq", "github", "nvidia"]
_call_count = 0


def _parse_json(text: str) -> dict:
    text = text.strip()
    if "<think>" in text:
        text = _re.sub(r"<think>.*?</think>", "", text, flags=_re.DOTALL).strip()
    if text.startswith("```"):
        text = text.split("\n", 1)[1] if "\n" in text else text[3:]
    if text.endswith("```"):
        text = text.rsplit("```", 1)[0]
    # Control characters only. The previous r"[\x00--]" was a \x00→'-' range that
    # ate the double quotes and spaces, breaking every JSON reply.
    text = _re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", text)
    try:
        return json.loads(text.strip())
    except json.JSONDecodeError:
        return json.loads(text.strip(), strict=False)


def _call_groq(prompt: str, temperature: float = 0.7) -> dict:
    key = os.getenv("GROQ_API_KEY")
    if not key:
        raise ValueError("GROQ_API_KEY not configured")
    client = Groq(api_key=key, timeout=60.0, max_retries=0)
    response = client.chat.completions.create(
        model=GROQ_MODEL,
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"},
        temperature=temperature,
        max_tokens=8192,
    )
    return json.loads(response.choices[0].message.content)


def _call_github(prompt: str, temperature: float = 0.7) -> dict:
    token = os.getenv("GITHUB_TOKEN")
    if not token:
        raise ValueError("GITHUB_TOKEN not configured")
    client = OpenAI(
        base_url=GITHUB_BASE_URL,
        api_key=token,
        timeout=120.0,
        max_retries=0,
    )
    response = client.chat.completions.create(
        model=GITHUB_MODEL,
        messages=[{"role": "user", "content": prompt}],
        temperature=temperature,
        max_tokens=8192,
    )
    return _parse_json(response.choices[0].message.content)


def _call_nvidia(prompt: str, temperature: float = 0.7) -> dict:
    key = os.getenv("NVIDIA_API_KEY")
    if not key:
        raise ValueError("NVIDIA_API_KEY not configured")
    client = OpenAI(
        base_url="https://integrate.api.nvidia.com/v1",
        api_key=key,
        timeout=90.0,
        max_retries=0,
    )
    try:
        response = client.chat.completions.create(
            model=NVIDIA_FAST,
            messages=[{"role": "user", "content": prompt}],
            temperature=temperature,
            max_tokens=8192,
        )
        return _parse_json(response.choices[0].message.content)
    except Exception as e:
        log.warning("NVIDIA fast: %s -> trying llama-3.3", str(e)[:60])

    response = client.chat.completions.create(
        model=NVIDIA_STABLE,
        messages=[{"role": "user", "content": prompt}],
        temperature=temperature,
        max_tokens=8192,
    )
    return _parse_json(response.choices[0].message.content)


_PROVIDER_MAP = {
    "groq": _call_groq,
    "github": _call_github,
    "nvidia": _call_nvidia,
}

# Retries against the SAME provider before moving to the next one. Groq's 429 is
# a tokens-per-minute limit (12k), so waiting a few seconds clears it; hopping
# providers instantly burned all three in a row and killed the article.
RETRIES_PER_PROVIDER = 2
MAX_WAIT_SECONDS = 60

_TRANSIENT_MARKS = ("429", "rate limit", "500", "502", "503", "504",
                    "timed out", "timeout", "service is unavailable", "overloaded")


def _seconds_from_header(raw: str) -> float:
    """Turns '20', '7.5s', '1m26.4s' or '250ms' into seconds. 0 if unparseable."""
    if not raw:
        return 0.0
    raw = str(raw).strip()
    try:
        return float(raw)  # standard retry-after: plain seconds
    except ValueError:
        pass
    match = _re.fullmatch(r"(?:(\d+)m)?(?:([\d.]+)s)?|([\d.]+)ms", raw)
    if not match:
        return 0.0
    minutes, seconds, millis = match.groups()
    if millis:
        return float(millis) / 1000
    return int(minutes or 0) * 60 + float(seconds or 0)


def _wait_before_retry(error: Exception, attempt: int) -> float:
    """How long to wait: whatever the provider asks for, else exponential backoff."""
    headers = getattr(getattr(error, "response", None), "headers", None) or {}
    asked = max(
        _seconds_from_header(headers.get("retry-after", "")),
        _seconds_from_header(headers.get("x-ratelimit-reset-tokens", "")),
    )
    if asked > MAX_WAIT_SECONDS:
        return 0.0  # daily quota gone: waiting is pointless, move to another provider
    delay = asked + 1 if asked else 10 * (2 ** attempt)
    return min(delay, MAX_WAIT_SECONDS)


def _is_transient(error: Exception) -> bool:
    """True when retrying makes sense (rate limit or passing outage)."""
    err = str(error).lower()
    return any(mark in err for mark in _TRANSIENT_MARKS)


def _call_provider(name: str, prompt: str, temperature: float) -> dict:
    """Calls one provider, retrying while the failure looks transient."""
    func = _PROVIDER_MAP[name]
    for attempt in range(RETRIES_PER_PROVIDER + 1):
        try:
            return func(prompt, temperature)
        except Exception as e:
            if attempt == RETRIES_PER_PROVIDER or not _is_transient(e):
                raise
            delay = _wait_before_retry(e, attempt)
            if delay <= 0:
                raise
            log.warning("retry %s: %s -> attempt %d/%d in %.0fs",
                        name, str(e)[:80], attempt + 1, RETRIES_PER_PROVIDER, delay)
            time.sleep(delay)


def call_ai(prompt: str, temperature: float = 0.7, **kwargs) -> dict:
    global _call_count
    article_idx = int(os.getenv("ARTICLE_INDEX", "1")) - 1
    rotation = (article_idx * 2 + _call_count) % len(PROVIDERS)
    _call_count += 1

    order = PROVIDERS[rotation:] + PROVIDERS[:rotation]

    errors = []
    for provider_name in order:
        try:
            result = _call_provider(provider_name, prompt, temperature)
            log.info("ok %s", provider_name)
            return result
        except Exception as e:
            err = str(e)
            errors.append(f"{provider_name}: {err[:100]}")
            log.warning("fail %s: %s", provider_name, err[:100])
            time.sleep(3)

    raise RuntimeError(f"All providers failed: {'; '.join(errors)}")
