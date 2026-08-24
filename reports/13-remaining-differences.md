# Remaining differences and release blockers

1. Browser-rendered visual parity and pixel-difference testing were not possible in this session; 1440/768/390/320 viewport checks remain open.
2. Browser interaction automation for navigation, galleries, forms, file upload, cart and checkout remains open, although the clean local implementations and HTTP behavior are present.
3. The 29 source-broken July 2024 thumbnail filenames are restored locally from their matching recovered originals; 29 broken product references now use direct, no-chain 301 repairs.
4. GMC Merchant ID `cardboard-flower-boxes` now uses the live rendered authoritative starting price recorded in the commercial evidence override; the feed validates locally.
5. The WordPress source backup is compromised. The clean Astro public tree scanned clean and an exact guarded remediation runner is ready, but it cannot change the live host without authenticated WordPress/hosting shell access.
6. Production form/file-upload and Cash-on-Delivery webhook contracts pass end-to-end against an isolated receiver. Real provider endpoints and rotated secrets are still unavailable, so no customer email or live order was sent.
7. The future `*.vercel.app` static-asset noindex rule is implemented and locally validated; the actual edge response can only be smoke-tested after an approved preview deployment exists.

Recommendation: the clean Astro source is suitable for review and, after confirming ignored evidence remains excluded, for a future Git commit. It is not safe to deploy or cut over until visual/browser QA, production integration configuration, and staging-host header validation pass.
