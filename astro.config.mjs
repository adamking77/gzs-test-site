import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://adamking77.github.io',
  base: '/genzen-solutions',
  integrations: [ sitemap()]
});