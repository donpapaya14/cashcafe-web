export const CATEGORIES = {
  'guides':   { name: 'Buying Guides', slug: 'guides',   description: 'Coffee gear and accessories explained' },
  'recipes':  { name: 'Recipes',       slug: 'recipes',  description: 'Drinks, methods, and creations to try at home' },
  'culture':  { name: 'Culture',       slug: 'culture',  description: 'Coffee origins, history, and shop tours' },
  'gear':     { name: 'Gear',          slug: 'gear',     description: 'Espresso machines, grinders, and brewing tools' },
  'brewing':  { name: 'Brewing',       slug: 'brewing',  description: 'Pour over, immersion and espresso methods' },
  'espresso': { name: 'Espresso',      slug: 'espresso', description: 'Pulling shots, dialing in, and steaming milk' },
} as const;

export type Category = keyof typeof CATEGORIES;

export function getCategoryName(cat: Category): string {
  return CATEGORIES[cat].name;
}

export function getCategoryBadgeClass(cat: Category): string {
  return `badge badge--${cat}`;
}
