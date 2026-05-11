// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://xavierlee98.github.io',
  base: '/PhysioLanding',
  integrations: [tailwind()]
});