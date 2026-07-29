#!/usr/bin/env python3
"""
Genera UN artículo SEO de alta calidad en ESPAÑOL con datos reales y enlaces de Amazon.
Prioridad: contenido real y útil > volumen.
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
    "guides": "Guías de compra",
    "recipes": "Recetas",
    "culture": "Cultura",
    "gear": "Equipo",
    "brewing": "Métodos",
    "espresso": "Espresso",
}

AMAZON_TAG = os.getenv("AMAZON_TAG", "vladys-21")
AMAZON_DOMAIN = os.getenv("AMAZON_DOMAIN", "amazon.es")
SITE_URL = os.getenv("SITE_URL", "https://cash-cafe.org")
BRAND = os.getenv("BRAND", "Cash Café")
AUTHOR = "Cash Café"


def research_topic(category: str, formula: str, existing_titles: list[str], preplanned: dict | None) -> dict:
    """Step 1: Pick a topic with long-tail keyword and detailed plan."""
    existing_str = "\n".join(f"- {t}" for t in existing_titles[:20]) if existing_titles else "None"

    if preplanned:
        # Use the preplanned topic — only ask AI to confirm and produce sections
        prompt = f"""Eres el redactor jefe de Cash Café, un blog de café EN ESPAÑOL DE ESPAÑA.
FOCO: ciencia de la preparación, espresso, reseñas de equipo, recetas y cultura del café.
Tu lector quiere preparar mejor café en casa. NADA de temas que no sean café.

Usa este tema PRE-PLANIFICADO (puede venir en inglés: ADÁPTALO a un título natural en español):
TÍTULO ORIGINAL: {preplanned.get('title')}
KEYWORD PRINCIPAL: {preplanned.get('primary_keyword')}
KEYWORDS SECUNDARIAS: {', '.join(preplanned.get('secondary_keywords', []))}
INTENCIÓN DE BÚSQUEDA: {preplanned.get('search_intent', 'informational')}
ESQUEMA: {preplanned.get('outline', [])}
PUNTOS CLAVE A CUBRIR: {preplanned.get('key_points', [])}

TODO el resultado debe estar EN ESPAÑOL natural: título, descripción y secciones.

Devuelve JSON con el plan del artículo:
{{
  "title": "título en ESPAÑOL natural, máx 65 caracteres, con la keyword",
  "description": "descripción meta en español, máx 150 caracteres, con curiosidad",
  "keyword": "{preplanned.get('primary_keyword')}",
  "secondary_keywords": {json.dumps(preplanned.get('secondary_keywords', []))},
  "sections": [
    {{
      "heading": "H2 de la sección, en español",
      "what_to_cover": "datos, métodos o recomendaciones concretas a incluir",
      "source_to_cite": "fuente real (SCA, Specialty Coffee Association, estudio revisado, barista con nombre) con año"
    }}
  ],
  "amazon_product": "UN producto de Amazon relevante (o null si es solo cultura/recetas)"
}}"""
        return call_ai(prompt, temperature=0.6)

    prompt = f"""Eres el redactor jefe de Cash Café, un blog de café EN ESPAÑOL DE ESPAÑA.
FOCO: ciencia de la preparación, espresso, reseñas de equipo, recetas y cultura del café.
Tu lector quiere preparar mejor café en casa.

Tu tarea: elige UN tema para un artículo GENUINAMENTE ÚTIL.

TIPO DE ARTÍCULO: {formula}

ARTÍCULOS QUE YA EXISTEN (elige algo DISTINTO):
{existing_str}

INSTRUCCIONES:
1. El tema debe ser ESPECÍFICO. Mal: "trucos para hacer café". Bien: "Cómo ajustar un Hario V60 con 15 g de café para tu taza diaria".
2. El título debe coincidir con lo que alguien buscaría en Google. 4-7 palabras clave.
3. 5-6 secciones donde CADA UNA aporte información concreta que el lector no sabe.
4. En cada sección, escribe QUÉ dato o consejo práctico específico va dentro.
5. TODO en ESPAÑOL natural de España.

Responde JSON:
{{
  "title": "título en español, máx 65 caracteres, con la keyword",
  "description": "máx 150 caracteres, curiosidad real, en español",
  "keyword": "keyword long-tail de 3-6 palabras en español",
  "secondary_keywords": ["kw2", "kw3", "kw4"],
  "sections": [
    {{
      "heading": "Título de la sección, en español",
      "what_to_cover": "Qué información CONCRETA y ÚTIL va aquí",
      "source_to_cite": "Fuente real con año (SCA, estudio revisado, barista, ficha del fabricante)"
    }}
  ],
  "amazon_product": "UN producto de Amazon relevante (o null si no aplica)"
}}"""

    return call_ai(prompt, temperature=0.8)


def generate_content(category: str, topic_data: dict) -> dict:
    """Paso 2: Genera el artículo completo de alta calidad en español."""
    sections = json.dumps(topic_data.get("sections", []), ensure_ascii=False, indent=2)
    amazon_product = topic_data.get("amazon_product")
    secondary_kws = ", ".join(topic_data.get("secondary_keywords", []))

    prompt = f"""Escribe un artículo de blog SEO PROFESIONAL y COMPLETO EN ESPAÑOL DE ESPAÑA.

TÍTULO: {topic_data['title']}
CATEGORÍA: {CATEGORY_NAMES.get(category, category)}
KEYWORD PRINCIPAL: {topic_data['keyword']}
KEYWORDS SECUNDARIAS: {secondary_kws}

PLAN DE SECCIONES:
{sections}

=== REGLAS DE CALIDAD (OBLIGATORIAS) ===

1. CERO relleno. Cada frase aporta un dato nuevo o un consejo aplicable.
   - MAL: "El café es muy importante en nuestra rutina de la mañana"
   - BIEN: "La SCA fija un rendimiento de extracción del 18-22 % para un espresso equilibrado (Specialty Coffee Association, Brewing Standard 2018)"

2. DATOS REALES con fuente completa. Mínimo 5 datos con fuente en todo el artículo.
   - Nombre de la fuente (SCA, fabricante, estudio revisado, barista con nombre) + año + número/porcentaje concreto.
   - MAL: "Los estudios demuestran que funciona"
   - BIEN: "El test de ratios de James Hoffmann (2020) encontró que un 1:2 caía en la ventana de 25-30 segundos el 87 % de las veces"

3. CONSEJO PRÁCTICO con pasos numerados.
   - Incluye cantidades exactas (gramos, ml, segundos, °C).
   - Al menos 2 listas numeradas o tablas comparativas.

4. ENLACES DE AUTORIDAD EXTERNA (mínimo 3):
   - Enlaza fuentes reales al citar datos: SCA, Barista Hustle, revistas científicas, páginas de fabricantes.
   - Formato: [nombre de la fuente](URL del dominio real)
   - Usa solo dominios reales; NO inventes URLs concretas de estudios.

5. SECCIÓN DE FAQ: "## Preguntas frecuentes" con 5-6 preguntas reales de Google.
   - Cada ### pregunta con una respuesta de 4-6 líneas usando datos reales.
   - Empieza con una frase directa que responda la pregunta (bueno para fragmentos destacados / citación por IA).

6. FORMATO:
   - Párrafos de 2-3 líneas máximo.
   - ## para secciones principales, ### para subsecciones.
   - **Negrita** para términos clave y cifras importantes.
   - Listas y tablas markdown al comparar opciones.
   - NO incluyas H1 (lo añade la plantilla automáticamente).
   - Termina con "## Resumen práctico" — 6-8 puntos de acción concretos.

7. SEO/GEO:
   - Keyword principal en el primer párrafo y en al menos 2 títulos H2.
   - Keywords secundarias usadas con naturalidad.
   - Primer párrafo: respuesta directa a la intención de búsqueda.
   - FAQ: respuestas directas (para fragmentos destacados y citación por IA).

8. VOZ HUMANA: Incluye una sección "## Lo que pensamos en Cash Café" (después de la FAQ) con 2-3 párrafos en primera persona del plural, desde la perspectiva de Cash Café, una cafetería real de Beniel (Murcia) que prepara café a diario. Comparte una reflexión o anécdota ligada al tema. Es OBLIGATORIO — Google penaliza el contenido sin voz humana. NO inventes personas ni credenciales concretas; habla como la cafetería.

9. EXTENSIÓN: 2000-2800 palabras de contenido REAL y útil.

{f'10. PRODUCTOS DE AMAZON: Menciona "{amazon_product}" y 1-2 productos relacionados con naturalidad. Usa [AMAZON:nombre del producto] en cada uno.' if amazon_product else '10. PRODUCTOS DE AMAZON: Si hay productos relevantes, menciona 2-3 con naturalidad usando [AMAZON:nombre del producto]. Solo cuando encaje de forma orgánica.'}

Responde JSON (todo el texto en ESPAÑOL):
{{
  "content": "artículo completo en markdown (sin H1)",
  "tags": ["tag en español 1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8"],
  "sources": [
    "Autor A. et al. (año). Título del estudio. Revista",
    "Institución (año). Nombre del informe"
  ],
  "amazon_keywords": ["producto1", "producto2", "producto3"]
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
    base = f"https://www.{AMAZON_DOMAIN}/s"

    def replace_amazon(match):
        product = match.group(1)
        search_query = product.replace(" ", "+")
        return f"[{product} en Amazon]({base}?k={search_query}&tag={AMAZON_TAG})"

    content = re.sub(r'\[AMAZON:([^\]]+)\]', replace_amazon, content)

    if amazon_keywords and AMAZON_DOMAIN not in content:
        content += "\n\n---\n\n"
        content += "*Como afiliado de Amazon, Cash Café gana por las compras adscritas que cumplan los requisitos aplicables. Si compras a través de estos enlaces nos ayudas a mantener el blog, sin coste extra para ti.*\n\n"
        for kw in amazon_keywords[:2]:
            search = kw.replace(" ", "+")
            content += f"- [{kw}]({base}?k={search}&tag={AMAZON_TAG})\n"

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
            paragraphs[i] = para + f"\n\n> Relacionado: [{link['title']}](/blog/{link['slug']})"
            contextual_count += 1
    content = "\n\n".join(paragraphs)

    remaining = shuffled[:4] if shuffled else random.sample(existing, min(4, len(existing)))
    section = "\n\n### También te puede interesar\n\n"
    for link in remaining:
        section += f"- [{link['title']}](/blog/{link['slug']})\n"

    if "## Resumen práctico" in content:
        content = content.replace("## Resumen práctico", section + "\n## Resumen práctico")
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
        sources = [f"{BRAND} (2026). Investigación propia"]

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
        # Republishing the same topic with the date appended to the slug created
        # 547 duplicate URLs competing against each other across the group
        # (295 clusters). Abort instead; the workflow retries with another topic.
        raise SystemExit(f"DUPLICATE: '{slug}' already exists, not republishing")

    author_bio = f"\n\n---\n\n*Escrito por el equipo de **{AUTHOR}**, cafetería en Beniel (Murcia). Contenido editorial sobre café basado en práctica real y fuentes citadas. Información de afiliados en el [aviso legal](/legal-notice).*\n"
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

    # Dedup robusto: marca el tema (título original del topic) como usado para no repetirlo
    if preplanned:
        try:
            from topic_planner import mark_topic_used
            mark_topic_used(preplanned.get("title", ""))
        except Exception:
            pass

    notify_telegram(
        f"<b>{BRAND}</b>\n"
        f"{topic_data['title']}\n"
        f"{word_count} words | {category}"
    )

    log.info("=== Done ===")
    return str(file_path)


if __name__ == "__main__":
    main()
