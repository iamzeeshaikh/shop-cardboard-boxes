// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

const onVercel = Boolean(process.env.VERCEL);

// https://astro.build/config
export default defineConfig({
  site: 'https://shopcardboardboxes.com',
  output: 'server',
  adapter: onVercel
    ? vercel({
      includeFiles: ['src/data/snapshots', 'src/data/http-snapshots'],
      maxDuration: 30,
    })
    : node({ mode: 'standalone' }),
  trailingSlash: 'ignore',
  build: {
    assets: '_astro',
  },
  security: {
    checkOrigin: true,
  },
});
