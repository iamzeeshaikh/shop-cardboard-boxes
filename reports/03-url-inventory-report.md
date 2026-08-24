# URL inventory and redirect report

- Definitive inventory rows: 1,557
- Live crawl results: 1,496 HTTP 200, 60 HTTP 404, 1 HTTP 405
- Sitemap URLs: 210
- Recovered HTML route snapshots: 264
- Static compatibility responses for feeds, REST/oEmbed discovery, sitemaps, robots and XML-RPC GET behavior: 633
- Preserved redirect cases tested: 216; failures: 0
- Inventory represented locally: 1497
- Source 404s deliberately preserved as 404: 60
- Silently omitted inventory rows: 0
- Sitemap destinations tested: 216; unresolved: 0

The compatibility layer serves captured public JSON/RSS/XML responses as static data; it does not restore WordPress or PHP. Shortlink redirects, case-sensitive aliases, `/page/1/` redirects, trailing-slash behavior, and the anonymous `/checkout/` → `/cart/` redirect are preserved.

Machine-readable files: `analysis/url-inventory.csv` and `analysis/url-inventory.json`.
