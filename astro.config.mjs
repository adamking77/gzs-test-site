import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), alpinejs()],
  site: 'https://adamking77.github.io/genzen-solutions',
  base: '/genzen-solutions',
  output: 'static',
  build: {
    assets: 'astro'
  }
});