# Post-approval Git and deployment checklist

No step below was performed.

1. Reconfirm `.gitignore` excludes `*.wpress`, SQL, `evidence/`, extracted databases, credential files, analysis caches and temporary restoration data.
2. Review the clean Astro source and reports; do not add quarantined WordPress files.
3. Reconfirm the recorded GMC commercial evidence override and rerun the feed validator.
4. Run browser interaction and 1440/768/390/320 visual-diff suites; fix genuine parity defects only.
5. Configure production form/email/payment services in test mode, validate attribution and success/error paths, then supply secrets only through platform environment variables.
6. Initialize Git only after explicit approval; inspect the staged file list and secret scan before the first commit.
7. Configure the approved deployment adapter and hostname-based preview noindex headers.
8. Deploy to a protected preview, repeat full route/GSC/GMC/schema/form/cart/checkout audits, and confirm zero production analytics/conversions from preview.
9. Obtain explicit cutover approval before domain, DNS, GMC feed activation, GSC sitemap submission or production tracking changes.
10. After cutover, validate Merchant Center diagnostics/item IDs, Search Console coverage, logs, forms, conversions, 404s and rankings before retiring WordPress.
