# Shop Cardboard Boxes — Astro Migration

Clean Astro migration of `https://shopcardboardboxes.com/`, recovered from the production site and a quarantined WordPress/WooCommerce backup.

## Local development

```bash
cd site
npm install
npm run dev -- --host 127.0.0.1
```

## Production-like local build

```bash
cd site
npm run check
npm run build
HOST=127.0.0.1 PORT=4333 npm run start
```

Migration and security reports are in `reports/`. The original `.wpress`, extracted WordPress evidence, databases, credentials, Search Console export, and analysis caches are intentionally excluded from Git. Do not copy quarantined WordPress/PHP material into `site/public`.
