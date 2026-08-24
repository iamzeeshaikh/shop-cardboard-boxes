# Local development, production build and environment

Development:

```bash
cd "/Users/sajjadahmad/Documents/shop cardboard boxes/site"
npm install
npm run dev -- --host 127.0.0.1
```

Production-like local build:

```bash
cd "/Users/sajjadahmad/Documents/shop cardboard boxes/site"
npm run check
npm run build
HOST=127.0.0.1 PORT=4333 npm run start
```

Required later-production variables are documented in `site/.env.example`: production tracking enablement, form endpoint/secret, SMTP settings, recipient/sender email, and the Cash-on-Delivery order-delivery endpoint/secret. No secret values are present.

Canonical URLs always use `https://shopcardboardboxes.com/`. Local page/API responses are hostname-protected with noindex. `site/vercel.json` now adds `X-Robots-Tag: noindex, nofollow` to every `*.vercel.app` response, including static assets, using a hostname suffix condition that excludes both production hostnames. The rule validates locally; its real edge response must still be smoke-tested after a preview deployment exists.
