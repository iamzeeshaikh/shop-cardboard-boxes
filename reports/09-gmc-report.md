# Google Merchant Center method, replacement plan and feed validation

Recovered current method:

- Google Listings & Ads / Google for WooCommerce plugin version 3.7.1
- Merchant Center ID: 5455779579
- Connected/verified state recorded in WordPress
- Push synchronization enabled for products, coupons, shipping and settings
- Merchant Center shipping, shipping-time and tax configuration set to manual
- Target country/feed label US; language en; currency USD
- Google Ads conversion ID `AW-16674273427`

Local replacement artifacts:

- Deterministic TSV: `site/public/merchant/products.tsv`
- Deterministic RSS/XML: `site/public/merchant/products.xml`
- Stable-ID mapping: `analysis/gmc-id-mapping.csv`
- Generator: `tools/generate-gmc-feed.mjs`
- Validator: `tools/validate-gmc-feed.mjs`

Validation:

- Source/export records: 185
- Unique IDs: 185; duplicates: 0
- Invalid product links: 0
- Missing recovered primary images: 0
- Availability: 185 in stock
- Price/currency: 185 USD; 0 missing
- Commercial evidence override: Merchant ID `cardboard-flower-boxes` uses the live rendered starting price of `0.20 USD`, recorded in `analysis/commercial-evidence-overrides.json`
- Valid for activation: yes
- Uploaded or activated: no

Post-approval activation must configure the new feed in GMC, verify item-ID continuity and diagnostics, and only then retire the WooCommerce Content API source.
