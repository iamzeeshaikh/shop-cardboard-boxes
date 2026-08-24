# Shop Cardboard Boxes — local Astro migration

This project is a clean, local-only Astro reconstruction of `https://shopcardboardboxes.com/`. WordPress/PHP backup material is stored outside this directory and is not required at runtime.

## Development

```bash
npm install
npm run dev -- --host 127.0.0.1
```

Astro will print the local URL. Local responses are protected with `noindex, nofollow`; canonicals continue to reference the production domain.

## Production-like local build

```bash
npm run check
npm run build
HOST=127.0.0.1 PORT=4333 npm run start
```

The build copies recovered public response snapshots into `dist/server-data`, so the standalone server has no WordPress or PHP dependency.

## Configuration

Copy `.env.example` only when configuring a later approved environment. Production analytics require both the production hostname and `PUBLIC_ENABLE_PRODUCTION_TRACKING=true`. Form delivery and Cash-on-Delivery order adapters are implemented; localhost uses their non-persistent mock mode, while a later approved production environment must provide the delivery endpoints and secrets.

See `../reports/README.md` for audit results, known release blockers and the post-approval checklist.
