"""SEO helpers: slugs, reading time, markdown cleanup."""

import re
from slugify import slugify


def generate_slug(title: str) -> str:
    """Slug SEO-friendly. Transliterar acentos a ASCII (café -> cafe, Berlín -> berlin)
    para evitar slugs rotos cuando el título está en español."""
    import unicodedata
    title = unicodedata.normalize("NFKD", title).encode("ascii", "ignore").decode("ascii")
    return slugify(title, max_length=80, word_boundary=True)


def estimate_reading_time(text: str) -> int:
    """Estimate minutes (250 words/min for English)."""
    words = len(text.split())
    return max(1, round(words / 250))


def clean_markdown(text: str) -> str:
    """Strip code fences from AI output and normalize newlines."""
    if text.startswith("```"):
        text = text.split("\n", 1)[1] if "\n" in text else text[3:]
    if text.endswith("```"):
        text = text.rsplit("```", 1)[0]
    text = re.sub(r'\n{3,}', '\n\n', text)
    if not text.endswith('\n'):
        text += '\n'
    return text
