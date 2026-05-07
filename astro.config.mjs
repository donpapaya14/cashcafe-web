// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://cash-cafe.org',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/legal-notice') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/cookies-policy'),
      i18n: { defaultLocale: 'en', locales: { en: 'en-US' } },
    }),
    mdx(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
});
