"""
Plans coffee topics from prebuilt SEO topic file (topics/cashcafe_seo_3months.json).
Falls back to formula-based generation if topic file unavailable.
Avoids duplicates by reading existing markdown in src/content/blog/.
"""

import json
import random
import re
from pathlib import Path

BLOG_DIR = Path(__file__).parent.parent / "src" / "content" / "blog"
TOPICS_FILE = Path(__file__).parent.parent / "topics" / "cashcafe_seo_3months.json"
# Registro de temas YA usados (por título ORIGINAL del topic, en inglés). El dedup
# por título de artículo no sirve porque los artículos se publican en español y el
# topics file está en inglés -> nunca casaban. Esto deduplica por la identidad del topic.
USED_TOPICS_FILE = Path(__file__).parent.parent / "topics" / "used_topics.txt"

CATEGORIES = ["guides", "recipes", "culture", "gear", "brewing", "espresso"]

ARTICLE_FORMULAS = {
    "guides": [
        "Detailed buying guide for one coffee category at multiple price tiers, with measured comparisons",
        "Comparison of two popular brewers (e.g. V60 vs Chemex) with extraction data and use cases",
        "What to look for when buying a grinder, with feature explanations and tier picks",
        "Coffee subscription comparison or one-bag-fits-all guide for daily drinkers",
    ],
    "recipes": [
        "Step-by-step recipe for one classic coffee drink with ratios, temperature and timing",
        "Iced coffee variant with cold brew or Japanese-iced method, with measurements",
        "Espresso-based cocktail or dessert recipe with technique and ingredient sourcing",
        "Seasonal latte recipe with the science of foam, syrups and milk choice",
    ],
    "culture": [
        "Origin region deep dive (Ethiopia, Colombia, Honduras) with flavor profile and history",
        "Coffee shop scene tour for a specific city, with notable cafes and what to order",
        "First/second/third wave history with key figures, dates and shifts in technique",
        "Coffee in a specific country (Italy, Japan, Australia) — culture, customs, signature drinks",
    ],
    "gear": [
        "Tested review of one machine, grinder or accessory at a specific price tier",
        "Best espresso machine under $X with feature comparison and head-to-head test notes",
        "Manual vs electric grinder analysis with grind consistency and price tradeoffs",
        "Essential accessories for the home barista (tamper, scale, WDT, kettle) with picks",
    ],
    "brewing": [
        "Pour-over technique guide for one brewer with grind, ratio, agitation and pour pattern",
        "Immersion brewing (French press, AeroPress) with timing, ratio and clarity tradeoffs",
        "How to dial in a recipe by adjusting one variable at a time with tasting cues",
        "Water for coffee — TDS, mineral content, filtration impact on taste",
    ],
    "espresso": [
        "How to dial in an espresso shot for beginners — three variables and their fix",
        "Latte art technique with milk steaming, pour height and pattern walkthroughs",
        "Espresso troubleshooting — sour, bitter, channeling, clogging and how to fix each",
        "Single boiler vs dual boiler vs heat exchanger for home espresso, with tradeoffs",
    ],
}


def load_topics() -> list:
    if not TOPICS_FILE.exists():
        return []
    try:
        return json.loads(TOPICS_FILE.read_text(encoding="utf-8"))
    except Exception:
        return []


def load_used_topics() -> set:
    if not USED_TOPICS_FILE.exists():
        return set()
    return {ln.strip().lower() for ln in USED_TOPICS_FILE.read_text(encoding="utf-8").splitlines() if ln.strip()}


def mark_topic_used(title: str):
    """Marca el tema (por su título original) como usado, para no repetirlo."""
    if not title:
        return
    USED_TOPICS_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(USED_TOPICS_FILE, "a", encoding="utf-8") as f:
        f.write(title.strip().lower() + "\n")


def get_existing_titles() -> set[str]:
    titles = set()
    if not BLOG_DIR.exists():
        return titles
    for md_file in BLOG_DIR.glob("*.md"):
        text = md_file.read_text(encoding="utf-8")
        m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', text, re.MULTILINE)
        if m:
            titles.add(m.group(1).lower().strip())
    return titles


def get_existing_keywords() -> set[str]:
    keywords = set()
    for md_file in BLOG_DIR.glob("*.md"):
        text = md_file.read_text(encoding="utf-8")
        m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', text, re.MULTILINE)
        if m:
            keywords.add(m.group(1).lower().strip())
    return keywords


def get_category_counts() -> dict[str, int]:
    counts = {cat: 0 for cat in CATEGORIES}
    if not BLOG_DIR.exists():
        return counts
    for md_file in BLOG_DIR.glob("*.md"):
        text = md_file.read_text(encoding="utf-8")
        m = re.search(r'^category:\s*["\']?([^"\'\n]+)["\']?\s*$', text, re.MULTILINE)
        if m and m.group(1).strip() in counts:
            counts[m.group(1).strip()] += 1
    return counts


def map_topic_category(topic: dict) -> str:
    """Best-guess mapping from topic intent/title to a CashCafe category."""
    title = (topic.get("title", "") + " " + topic.get("primary_keyword", "")).lower()
    intent = topic.get("search_intent", "").lower()
    if any(w in title for w in ["espresso machine", "grinder", "tamper", "wdt", "kettle", "scale"]):
        if "espresso" in title and "shot" in title:
            return "espresso"
        return "gear"
    if any(w in title for w in ["recipe", "drink", "latte", "cappuccino", "macchiato", "iced"]):
        return "recipes"
    if any(w in title for w in ["history", "origin", "ethiopia", "colombia", "city", "cafes in", "shops in"]):
        return "culture"
    if any(w in title for w in ["dial", "shot", "espresso pull", "espresso ratio"]):
        return "espresso"
    if any(w in title for w in ["pour over", "v60", "chemex", "aeropress", "french press", "method", "brew"]):
        return "brewing"
    if "guide" in title or intent == "transactional":
        return "guides"
    return "brewing"


def pick_category() -> str:
    counts = get_category_counts()
    min_count = min(counts.values())
    least_covered = [cat for cat, count in counts.items() if count == min_count]
    return random.choice(least_covered)


def pick_formula(category: str) -> str:
    formulas = ARTICLE_FORMULAS.get(category, list(ARTICLE_FORMULAS.values())[0])
    return random.choice(formulas)


def plan_topic() -> dict:
    """Try the SEO topics file first, fall back to formula generation."""
    existing = get_existing_titles()
    used = load_used_topics()
    topics = load_topics()
    if topics:
        random.shuffle(topics)
        for topic in topics:
            tt = topic.get("title", "").lower().strip()
            if tt and tt not in used and tt not in existing:
                cat = map_topic_category(topic)
                return {
                    "category": cat,
                    "formula": (
                        f"Pre-planned: {topic.get('title')} | keyword: {topic.get('primary_keyword')} | "
                        f"key points: {', '.join(topic.get('key_points', [])[:5])}"
                    ),
                    "preplanned": topic,
                    "existing_titles": list(existing)[:20],
                    "existing_count": len(existing),
                }

    # No preplanned topic available -> use formula
    category = pick_category()
    formula = pick_formula(category)
    return {
        "category": category,
        "formula": formula,
        "preplanned": None,
        "existing_titles": list(existing)[:20],
        "existing_count": len(existing),
    }
