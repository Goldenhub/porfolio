// @ts-check
import process from 'node:process';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Set PUBLIC_SITE_URL when a custom domain is connected, e.g. https://example.com
  site: process.env.PUBLIC_SITE_URL || undefined,
  vite: {
    plugins: [tailwindcss()]
  }
});