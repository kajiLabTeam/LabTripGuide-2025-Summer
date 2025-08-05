// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 4321,
      hmr: {
        port: 4321,
      },
    },
  }
});