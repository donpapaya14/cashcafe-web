#!/usr/bin/env python3
"""
Generate ONE high-quality SEO article in English with real data and Amazon links.
Priority: useful real content > volume.
"""

import json
import logging
import os
import re
import sys
from datetime import date
from pathlib import Path

import requests
from dotenv import load_dotenv

sys.path.insert(0, str(Path(__file__).parent))

from ai_client import call_ai
from topic_planner import plan_topic
from seo_utils import generate_slug, estimate_reading_time, clean_markdown

load_dotenv()
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
log = logging.getLogger(__name__)

BLOG_DIR = Path(__file__).parent.parent / "src" / "content" / "blog"
CATEGORY_NAMES = {
    "guides": "Buying Guides",
    "recipes": "Recipes",
    "culture": "Culture",
    "gear": "Gear",
    "brewing": "Brewing",
    "espresso": "Espresso",
}

AMAZON_TAG = os.getenv("AMAZON_TAG", "vds96-20")
SITE_URL = os.getenv("SITE_URL", "https://cash-cafe.org")
BRAND = os.getenv("BRAND", "CashCafe")
AUTHOR = "Vladys Z."


def research_topic(category: str, formula: str, existing_titles: list[str], preplanned: dict | None) -> dict:
    """Step 1: Pick a topic with long-tail keyword and detailed plan."""
    existing_str = "\n".join(f"- {t}" for t in existing_titles[:20]) if existing_titles else "None"

    if preplanned:
        # Use the preplanned topic — only ask AI to confirm and produce sections
        prompt = f"""You are the editor-in-chief of CashCafe, an English coffee blog.
FOCUS: brewing science, espresso, gear reviews, recipes, cafe culture.
Your reader wants to brew better coffee at home.
NO content about non-coffee topics.

Use this PRE-PLANNED topic exactly:
TITLE: {preplanned.get('title')}
PRIMARY KEYWORD: {preplanned.get('primary_keyword')}
SECONDARY KEYWORDS: {', '.join(preplanned.get('secondary_keywords', []))}
SEARCH INTENT: {preplanned.get('search_intent', 'informational')}
PRE-PLANNED OUTLINE: {preplanned.get('outline', [])}
KEY POINTS TO COVER: {preplanned.get('key_points', [])}

Return JSON for the article plan:
{{
  "title": "{preplanned.get('title')}",
  "description": "max 150 chars meta description with curiosity",
  "keyword": "{preplanned.get('primary_keyword')}",
  "secondary_keywords": {json.dumps(preplanned.get('secondary_keywords', []))},
  "sections": [
    {{
      "heading": "section H2",
      "what_to_cover": "specific data, methods, or recommendations to include",
      "source_to_cite": "real source name (SCA, Specialty Coffee Association, peer-reviewed study, named barista) with year"
    }}
  ],
  "amazon_product": "ONE Amazon product name relevant to the topic (or null if culture/recipes only)"
}}"""
        return call_ai(prompt, temperature=0.6)

    prompt = f"""You are the editor-in-chief of CashCafe, an English coffee blog.
FOCUS: brewing science, espresso, gear reviews, recipes, cafe culture.
Your reader wants to brew better coffee at home.

Your job: pick ONE topic for an article that is GENUINELY USEFUL.

ARTICLE TYPE: {formula}

ARTICLES THAT ALREADY EXIST (pick something DIFFERENT):
{existing_str}

INSTRUCTIONS:
1. Topic must be SPECIFIC. Bad: "coffee brewing tips". Good: "How to dial in a Hario V60 with 15g coffee for a daily cup".
2. The title should match what someone would Google. 4-7 keyword words.
3. 5-6 sections where EACH adds concrete information the reader doesn't know.
4. For each section, write WHAT specific data or practical advice goes in.

Respond JSON:
{{
  "title": "title max 65 chars, keyword included",
  "description": "max 150 chars, real curiosity",
  "keyword": "long-tail keyword 3-6 words",
  "secondary_keywords": ["kw2", "kw3", "kw4"],
  "sections": [
    {{
      "heading": "Section title",
      "what_to_cover": "What CONCRETE and USEFUL info goes here",
      "source_to_cite": "Real source name with year (SCA, peer-reviewed paper, barista, manufacturer spec)"
    }}
  ],
  "amazon_product": "ONE relevant Amazon product (or null if not applicable)"
}}"""

    return call_ai(prompt, temperature=0.8)


def generate_content(category: str, topic_data: dict) -> dict:
    """Step 2: Generate full high-quality article in English."""
    sections = json.dumps(topic_data.get("sections", []), ensure_ascii=False, indent=2)
    amazon_product = topic_data.get("amazon_product")
    secondary_kws = ", ".join(topic_data.get("secondary_keywords", []))

    prompt = f"""Write a PROFESSIONAL, COMPLETE SEO blog article in ENGLISH.

TITLE: {topic_data['title']}
CATEGORY: {CATEGORY_NAMES.get(category, category)}
PRIMARY KEYWORD: {topic_data['keyword']}
SECONDARY KEYWORDS: {secondary_kws}

SECTION PLAN:
{sections}

=== QUALITY RULES (MANDATORY) ===

1. ZERO filler. Every sentence adds new data or actionable advice.
   - BAD: "Coffee is very important for our morning routine"
   - GOOD: "SCA standards target an extraction yield of 18-22% for balanced espresso (Specialty Coffee Association, Brewing Standard 2018)"

2. REAL DATA with full source. Minimum 5 sourced data points across the article.
   - Source name (SCA, manufacturer, peer-reviewed paper, named barista) + year + concrete number/percentage
   - BAD: "Studies show this works"
   - GOOD: "James Hoffmann's 2020 ratio test (One Step Espresso Workflow) found 1:2 yields landed in the 25-30 second pull window 87% of the time"

3. PRACTICAL ADVICE with numbered steps.
   - Include exact amounts (grams, ml, seconds, °C/°F)
   - At least 2 numbered lists or comparison tables

4. EXTERNAL AUTHORITY LINKS (minimum 3):
   - Link real sources when citing data: SCA, Barista Hustle, peer-reviewed journals, manufacturer pages
   - Format: [source name](real domain URL)
   - Use only real top-level domains, do NOT invent specific paper URLs

5. FAQ SECTION: "## Frequently Asked Questions" with 5-6 real Google questions.
   - Each ### question with a 4-6 line answer using real data
   - Start with a direct sentence that answers the question (good for featured snippets / AI citation)

6. FORMAT:
   - Paragraphs of 2-3 lines maximum
   - ## for main sections, ### for subsections
   - **Bold** for key terms and important figures
   - Markdown lists and tables when comparing options
   - Do NOT include H1 (it is added automatically by the layout)
   - End with "## Practical Summary" — 6-8 concrete action bullets

7. SEO/GEO:
   - Primary keyword in first paragraph and at least 2 H2 titles
   - Secondary keywords used naturally
   - First paragraph: direct answer to the search intent
   - FAQ: direct answers (for featured snippets and AI citation)

8. PERSONAL TOUCH: Include a "## My Take" section (after the FAQ) with 2-3 first-person paragraphs by the author Vladys Z. — app developer and trained chef who brews coffee daily. Share a personal reflection or anecdote tied to the topic. This is MANDATORY — Google penalises content with no human voice.

9. LENGTH: 2000-2800 words of REAL useful content.

{f'10. AMAZON PRODUCTS: Mention "{amazon_product}" and 1-2 related products naturally. Use [AMAZON:product name] for each.' if amazon_product else '10. AMAZON PRODUCTS: If relevant products exist, mention 2-3 naturally with [AMAZON:product name]. Only when it fits organically.'}

Respond JSON:
{{
  "content": "full article in markdown (no H1)",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8"],
  "sources": [
    "Author A. et al. (year). Study title. Journal",
    "Institution (year). Report name"
  ],
  "amazon_keywords": ["product1", "product2", "product3"]
}}"""

    return call_ai(prompt, temperature=0.5)


def fetch_pexels_image(query: str) -> tuple[str, str]:
    api_key = os.getenv("PEXELS_API_KEY")
    if not api_key:
        return "", ""
    try:
        resp = requests.get(
            "https://api.pexels.com/v1/search",
            headers={"Authorization": api_key},
            params={"query": f"coffee {query}", "per_page": 3, "orientation": "landscape", "size": "medium"},
            timeout=10,
        )
        resp.raise_for_status()
        photos = resp.json().get("photos", [])
        if photos:
            return photos[0]["src"]["medium"], photos[0].get("alt", query)[:100]
    except Exception as e:
        log.warning("Pexels: %s", e)
    return "", ""


def inject_amazon_links(content: str, amazon_keywords: list[str]) -> str:
    def replace_amazon(match):
        product = match.group(1)
        search_query = product.replace(" ", "+")
        return f"[{product} on Amazon](https://www.amazon.com/s?k={search_query}&tag={AMAZON_TAG})"

    content = re.sub(r'\[AMAZON:([^\]]+)\]', replace_amazon, content)

    if amazon_keywords and "amazon.com" not in content:
        content += "\n\n---\n\n"
        content += "*This article contains affiliate links. If you buy through them you help us keep CashCafe free, at no extra cost to you.*\n\n"
        for kw in amazon_keywords[:2]:
            search = kw.replace(" ", "+")
            content += f"- [{kw}](https://www.amazon.com/s?k={search}&tag={AMAZON_TAG})\n"

    return content


def add_internal_links(content: str, current_slug: str) -> str:
    """Add 4-6 internal links: a few contextual + a dedicated section."""
    import random
    existing = []
    for md in BLOG_DIR.glob("*.md"):
        if md.stem == current_slug:
            continue
        text = md.read_text(encoding="utf-8")
        title_match = re.search(r'^title:\s*"?([^"\n]+)"?\s*$', text, re.MULTILINE)
        cat_match = re.search(r'^category:\s*"?(\w+)"?\s*$', text, re.MULTILINE)
        if title_match:
            existing.append({
                "slug": md.stem,
                "title": title_match.group(1).strip(),
                "category": cat_match.group(1) if cat_match else "",
            })

    if not existing:
        return content

    shuffled = existing[:]
    random.shuffle(shuffled)
    contextual_count = 0
    paragraphs = content.split("\n\n")
    for i, para in enumerate(paragraphs):
        if contextual_count >= 2:
            break
        if para.startswith("#") or len(para) < 80 or "[" in para:
            continue
        if i > 2 and i < len(paragraphs) - 3 and shuffled:
            link = shuffled.pop(0)
            paragraphs[i] = para + f"\n\n> Related: [{link['title']}](/blog/{link['slug']})"
            contextual_count += 1
    content = "\n\n".join(paragraphs)

    remaining = shuffled[:4] if shuffled else random.sample(existing, min(4, len(existing)))
    section = "\n\n### You might also like\n\n"
    for link in remaining:
        section += f"- [{link['title']}](/blog/{link['slug']})\n"

    if "## Practical Summary" in content:
        content = content.replace("## Practical Summary", section + "\n## Practical Summary")
    else:
        content += section

    return content


def sanitize(text: str, max_len: int) -> str:
    text = text.replace('"', "'").strip()
    if len(text) <= max_len:
        return text
    return text[:max_len].rsplit(" ", 1)[0]


def write_markdown(category: str, topic_data: dict, content_data: dict) -> Path:
    title = sanitize(topic_data.get("title", "Untitled"), 115)
    description = sanitize(topic_data.get("description", ""), 240)
    slug = generate_slug(title)
    content = clean_markdown(content_data.get("content", ""))

    if len(content.split()) < 600:
        log.warning("Article too short (%d words). Skipping.", len(content.split()))
        raise ValueError(f"Article too short: {len(content.split())} words")

    content = inject_amazon_links(content, content_data.get("amazon_keywords", []))
    content = add_internal_links(content, slug)

    image_url, image_alt = fetch_pexels_image(topic_data.get("keyword", title))

    reading_time = estimate_reading_time(content)

    sources = content_data.get("sources", [])
    if not sources:
        sources = [f"{BRAND} (2026). Internal research"]

    valid_cats = list(CATEGORY_NAMES.keys())
    if category not in valid_cats:
        category = valid_cats[0]

    tags = content_data.get("tags", [])
    if not tags:
        tags = [category, "coffee"]
    today = date.today().isoformat()

    sources_yaml = "\n".join(f'  - "{sanitize(s, 200)}"' for s in sources)
    tags_yaml = json.dumps(tags[:8], ensure_ascii=False)

    image_lines = ""
    if image_url:
        image_lines = f'image: "{image_url}"\nimageAlt: "{sanitize(image_alt, 100)}"'

    frontmatter = f"""---
title: "{title}"
description: "{description}"
pubDate: {today}
category: "{category}"
tags: {tags_yaml}
author: "{AUTHOR}"
readingTime: {reading_time}
{image_lines}
sources:
{sources_yaml}
draft: false
---"""

    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    file_path = BLOG_DIR / f"{slug}.md"
    if file_path.exists():
        file_path = BLOG_DIR / f"{slug}-{today}.md"

    author_bio = f"\n\n---\n\n*Written by **{AUTHOR}** — app developer and trained chef. CashCafe is editorial coffee content built on real testing and cited science. Affiliate disclosure on the [legal notice](/legal-notice).*\n"
    content = content + author_bio

    file_path.write_text(f"{frontmatter}\n\n{content}", encoding="utf-8")
    log.info("Wrote: %s (%d words)", file_path.name, len(content.split()))
    return file_path


def notify_telegram(message: str):
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        return
    try:
        requests.post(
            f"https://api.telegram.org/bot{token}/sendMessage",
            json={"chat_id": chat_id, "text": message, "parse_mode": "HTML"},
            timeout=30,
        )
    except Exception:
        pass


def main():
    log.info("=== %s: generating quality article ===", BRAND)

    plan = plan_topic()
    category = plan["category"]
    formula = plan["formula"]
    preplanned = plan.get("preplanned")
    log.info("Category: %s", category)

    topic_data = research_topic(category, formula, plan["existing_titles"], preplanned)
    log.info("Topic: %s", topic_data.get("title", "?"))

    content_data = generate_content(category, topic_data)
    word_count = len(content_data.get("content", "").split())
    log.info("Generated: %d words", word_count)

    file_path = write_markdown(category, topic_data, content_data)

    notify_telegram(
        f"<b>{BRAND}</b>\n"
        f"{topic_data['title']}\n"
        f"{word_count} words | {category}"
    )

    log.info("=== Done ===")
    return str(file_path)


if __name__ == "__main__":
    main()
