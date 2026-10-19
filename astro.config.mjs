import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://verdanthearth.example.com',
  integrations: [sitemap()],
  image: {
    domains: ['images.unsplash.com']
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
