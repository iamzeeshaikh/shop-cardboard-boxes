# Metadata, content, internal-link and structured-data parity

- Routes compared: 264
- Exact captured main-content HTML matches: 264
- Exact captured style-block/link matches: 264
- Exact captured JSON-LD matches: 264
- Title/description/canonical/content/style/schema route failures: 0
- Unique internal links tested: 283
- Unexpected broken internal links: 0
- Live-source broken internal links preserved as 404: 0
- Compatibility response bodies compared byte-for-byte: 633; failures: 0

The Astro output uses production-domain canonicals even on localhost. Local HTML/API responses return `noindex, nofollow` and an `X-Robots-Tag` header. Production tracking is disabled unless both the hostname is exactly `shopcardboardboxes.com` and the production tracking environment variable is enabled.

Machine-readable files: `analysis/metadata-parity.csv`, `analysis/structured-data-report.csv`, and `analysis/internal-link-report.csv`.
