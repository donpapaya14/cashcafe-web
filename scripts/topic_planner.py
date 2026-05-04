"""
Planifica temas de artículos para CashCafe — rotación de categorías cafe.
Lee blog-data.jsx para evitar duplicados.
"""

import os
import random
import re
from pathlib import Path

DATA_FILE = Path(__file__).parent.parent / "blog-data.jsx"

CATEGORIES = ["guides", "recipes", "culture", "gear"]

ARTICLE_FORMULAS = {
    "guides": [
        "Guia completa de cafeterias de especialidad en una ciudad espanola concreta con nombres, direcciones y que pedir",
        "Guia de compra de un equipo de cafe concreto (cafetera, molinillo, etc.) con comparativa de 3 opciones y precios reales",
        "Como elegir el mejor cafe en grano: guia con criterios concretos, marcas reales y precios",
        "Guia para principiantes en cafe de especialidad: primer equipo, primer cafe, primera receta",
        "Errores comunes al comprar cafe y como evitarlos con datos reales de la industria",
        "Guia de cafeterias de especialidad en una gran ciudad europea (Londres, Paris, Berlin, etc.)",
    ],
    "recipes": [
        "Receta paso a paso de un metodo de cafe concreto (chemex, sifon, clever dripper) con tiempos y gramos exactos",
        "Receta de bebida de cafe creativa (affogato, cafe tonic, espresso martini sin alcohol) con ingredientes y pasos",
        "Comparativa de 3 recetas del mismo metodo de cafe con variables diferentes y resultado final",
        "Receta de cafe para una estacion concreta (verano: cold brew; invierno: irish coffee casero) con variantes",
        "Receta de reposteria con cafe (tiramisu, brownies de espresso, galletas de moka) con datos nutricionales",
        "Receta de cafe para trabajar mejor: ratio optimo, temperatura, metodo y ciencia detras",
    ],
    "culture": [
        "Historia del cafe en un pais o region concreta con fechas, nombres y datos verificables",
        "Perfil de un tostador o cafeteria legendaria con su historia, filosofia y que la hace unica",
        "Diferencias culturales en como se bebe cafe alrededor del mundo con datos concretos de consumo",
        "La ciencia detras de un aspecto concreto del cafe (cafeina, tostado, extraccion) con estudios reales",
        "Tendencias del cafe en 2026: que esta cambiando en la industria con datos y ejemplos",
        "Cafe y productividad: que dice la ciencia sobre el momento optimo, la dosis y el tipo de cafe",
    ],
    "gear": [
        "Review honesta de un equipo de cafe concreto con pros, contras y para quien es ideal",
        "Comparativa de molinillos en un rango de precio concreto con pruebas de consistencia",
        "Guia de mantenimiento de cafeteras: como limpiar cada tipo con productos caseros y frecuencia",
        "Accesorios de cafe que merecen la pena vs los que no: analisis con precio y utilidad real",
        "Como montar un rincon de cafe en casa con presupuesto limitado (100/300/500 euros)",
        "Filtros de agua para cafe: tipos, precios y cual necesitas segun tu zona",
    ],
}


def get_existing_titles() -> set[str]:
    """Lee titulos de articulos del blog-data.jsx."""
    titles = set()
    if not DATA_FILE.exists():
        return titles
    content = DATA_FILE.read_text(encoding="utf-8")
    for match in re.finditer(r'title_es:\s*"(.+?)"', content):
        titles.add(match.group(1).lower().strip())
    return titles


def get_category_counts() -> dict[str, int]:
    """Cuenta articulos por categoria en blog-data.jsx."""
    counts = {cat: 0 for cat in CATEGORIES}
    if not DATA_FILE.exists():
        return counts
    content = DATA_FILE.read_text(encoding="utf-8")
    for match in re.finditer(r'category:\s*"(\w+)"', content):
        cat = match.group(1)
        if cat in counts:
            counts[cat] += 1
    return counts


def pick_category() -> str:
    counts = get_category_counts()
    min_count = min(counts.values())
    least_covered = [cat for cat, count in counts.items() if count == min_count]
    return random.choice(least_covered)


def pick_formula(category: str) -> str:
    formulas = ARTICLE_FORMULAS.get(category, ARTICLE_FORMULAS["guides"])
    return random.choice(formulas)


def plan_topic() -> dict:
    category = pick_category()
    formula = pick_formula(category)
    existing = get_existing_titles()
    return {
        "category": category,
        "formula": formula,
        "existing_titles": list(existing)[:20],
        "existing_count": len(existing),
    }
