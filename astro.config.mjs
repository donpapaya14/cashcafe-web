// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://cash-cafe.org',
  output: 'static',
  trailingSlash: 'never',
  // GitHub Pages no permite redirects de servidor, así que Astro genera la
  // página puente. Consolidación de duplicados (mismo tema republicado con la
  // fecha pegada al slug).
  redirects: {
    '/blog/solucionar-problemas-de-espresso-2026-06-27': '/blog/solucionar-problemas-de-espresso',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/legal-notice') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/cookie-policy'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES' } },
    }),
    mdx(),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
});
