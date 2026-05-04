#!/usr/bin/env python3
"""
Genera UN articulo para el blog de CashCafe.
Inserta como objeto JS en blog-data.jsx dentro del array BLOG_ARTICLES.
"""

import json
import logging
import os
import re
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from ai_client import call_ai
from topic_planner import plan_topic

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
log = logging.getLogger(__name__)

DATA_FILE = Path(__file__).parent.parent / "blog-data.jsx"
AUTHORS = ["ana", "marcos", "lucia", "david"]
AMAZON_TAG = os.getenv("AMAZON_TAG", "vladys-21")


def research_topic(category: str, formula: str, existing_titles: list[str]) -> dict:
    existing_str = "\n".join(f"- {t}" for t in existing_titles[:20]) if existing_titles else "Ninguno"

    prompt = f"""Eres editor jefe de Cash Cafe, un blog bilingue (ES/EN) sobre CAFE DE ESPECIALIDAD.
ENFOQUE: mejores cafeterias, metodos de preparacion, ciencia del cafe, equipamiento, cultura cafetera.
Tu lector quiere APRENDER sobre cafe, descubrir cafeterias y mejorar su cafe en casa.

Tu trabajo: elegir UN tema para un articulo que sea REALMENTE UTIL.

TIPO DE ARTICULO: {formula}
CATEGORIA: {category}

ARTICULOS QUE YA EXISTEN (elige algo DIFERENTE):
{existing_str}

INSTRUCCIONES:
1. Tema MUY ESPECIFICO. Malo: "beneficios del cafe". Bueno: "Por que el agua filtrada cambia el sabor de tu V60 segun la SCA".
2. Titulo: lo que alguien escribiria en Google, 3-6 palabras clave, max 65 chars.
3. 5-6 secciones con informacion concreta en cada una.
4. NO promocionar productos concretos, solo tips reales y datos curiosos.

Responde JSON:
{{
  "title_es": "titulo en espanol max 65 chars",
  "title_en": "titulo en ingles max 65 chars",
  "description_es": "max 150 chars, genera curiosidad",
  "description_en": "max 150 chars en ingles",
  "keyword": "keyword long-tail de 3-6 palabras",
  "sections": [
    {{
      "heading_es": "Titulo seccion ES",
      "heading_en": "Titulo seccion EN",
      "what_to_cover": "Que informacion concreta va aqui"
    }}
  ]
}}"""

    return call_ai(prompt, temperature=0.8)


def write_article(topic: dict, category: str) -> dict:
    sections_guide = "\n".join(
        f"## {s['heading_es']}\n({s['what_to_cover']})"
        for s in topic.get("sections", [])
    )

    prompt = f"""Escribe un articulo completo para el blog de Cash Cafe en formato de bloques JSON.
BILINGUE: genera body_es Y body_en.

TITULO: {topic['title_es']}
PLAN:
{sections_guide}

FORMATO: Array de bloques, cada uno con "kind" y contenido:
- {{"kind": "lede", "text": "parrafo introductorio"}}
- {{"kind": "h2", "text": "titulo seccion"}}
- {{"kind": "p", "text": "parrafo"}}
- {{"kind": "ul", "items": ["item1", "item2"]}}
- {{"kind": "ol", "items": ["paso1", "paso2"]}}
- {{"kind": "blockquote", "text": "cita", "cite": "fuente"}}
- {{"kind": "ad"}} (colocar 1 vez, a mitad del articulo)

REGLAS:
- Todo REAL y VERIFICABLE. Nombres de estudios, universidades, cifras.
- NO promocionar productos ni gadgets concretos.
- 6-10 bloques por idioma.
- Tono: experto pero accesible, como un barista que te explica en la barra.
- La version en ingles NO es traduccion literal, adaptala culturalmente.

Responde JSON:
{{
  "body_es": [...bloques...],
  "body_en": [...bloques...],
  "excerpt_es": "resumen 1-2 frases para la preview",
  "excerpt_en": "resumen en ingles"
}}"""

    return call_ai(prompt, temperature=0.7)


def insert_article_into_jsx(article_js: str) -> bool:
    """Inserta un objeto de articulo antes del cierre del array BLOG_ARTICLES."""
    content = DATA_FILE.read_text(encoding="utf-8")

    # Buscar el ultimo ]; del array BLOG_ARTICLES
    # El patron es: ultima ocurrencia de "];" antes de "window.BLOG_"
    marker = "window.BLOG_CATEGORIES"
    marker_pos = content.find(marker)
    if marker_pos == -1:
        log.error("No se encontro marker window.BLOG_CATEGORIES en blog-data.jsx")
        return False

    # Buscar el "];" mas cercano antes del marker
    search_area = content[:marker_pos]
    last_close = search_area.rfind("];")
    if last_close == -1:
        log.error("No se encontro cierre de array BLOG_ARTICLES")
        return False

    # Insertar antes del ];
    new_content = content[:last_close] + "\n" + article_js + ",\n" + content[last_close:]
    DATA_FILE.write_text(new_content, encoding="utf-8")
    return True


def main():
    plan = plan_topic()
    log.info("Categoria: %s | Articulos existentes: %d", plan["category"], plan["existing_count"])

    # Paso 1: Research
    topic = research_topic(plan["category"], plan["formula"], plan["existing_titles"])
    log.info("Tema: %s", topic.get("title_es", "?"))

    # Paso 2: Write
    article = write_article(topic, plan["category"])

    # Paso 3: Build JS object
    import random
    hue = random.choice([14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38])
    author = random.choice(AUTHORS)
    today = date.today().isoformat()

    # Estimar readTime
    total_text = " ".join(
        b.get("text", "") + " ".join(b.get("items", []))
        for b in article.get("body_es", [])
    )
    read_time = max(3, round(len(total_text.split()) / 200))

    # Generar slug
    slug = re.sub(r'[^a-z0-9]+', '-', topic["title_es"].lower())
    slug = slug.strip('-')[:80]

    # ID unico
    article_id = f"post-auto-{today}-{random.randint(100,999)}"

    # Construir objeto JS como string
    body_es_json = json.dumps(article["body_es"], ensure_ascii=False, indent=4)
    body_en_json = json.dumps(article["body_en"], ensure_ascii=False, indent=4)

    js_obj = f"""  {{ id: "{article_id}", slug: "{slug}",
    category: "{plan['category']}", hue: {hue}, date: "{today}", readTime: {read_time}, author: "{author}",
    title_es: {json.dumps(topic['title_es'], ensure_ascii=False)},
    title_en: {json.dumps(topic['title_en'], ensure_ascii=False)},
    excerpt_es: {json.dumps(article.get('excerpt_es', topic.get('description_es', '')), ensure_ascii=False)},
    excerpt_en: {json.dumps(article.get('excerpt_en', topic.get('description_en', '')), ensure_ascii=False)},
    body_es: {body_es_json},
    body_en: {body_en_json},
  }}"""

    # Paso 4: Insert into blog-data.jsx
    if insert_article_into_jsx(js_obj):
        log.info("Articulo insertado en blog-data.jsx: %s", topic["title_es"])
    else:
        log.error("No se pudo insertar el articulo")
        sys.exit(1)


if __name__ == "__main__":
    main()
