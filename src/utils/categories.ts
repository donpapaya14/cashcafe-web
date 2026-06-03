export const CATEGORIES = {
  'guides':   { name: 'Guías de compra', slug: 'guides',   description: 'Accesorios y equipo de café, explicados' },
  'recipes':  { name: 'Recetas',         slug: 'recipes',  description: 'Bebidas y métodos para preparar en casa' },
  'culture':  { name: 'Cultura',         slug: 'culture',  description: 'Orígenes, historia y cafeterías del mundo' },
  'gear':     { name: 'Equipo',          slug: 'gear',     description: 'Cafeteras, molinillos y herramientas' },
  'brewing':  { name: 'Métodos',         slug: 'brewing',  description: 'Filtrado, inmersión y métodos de espresso' },
  'espresso': { name: 'Espresso',        slug: 'espresso', description: 'Extracción, ajuste y leche vaporizada' },
} as const;

export type Category = keyof typeof CATEGORIES;

export function getCategoryName(cat: Category): string {
  return CATEGORIES[cat].name;
}

export function getCategoryBadgeClass(cat: Category): string {
  return `badge badge--${cat}`;
}
