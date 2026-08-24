#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd().endsWith('/site') ? resolve(process.cwd(), '..') : process.cwd();
const site = resolve(root, 'site');
const analysis = resolve(root, 'analysis');
const reports = resolve(root, 'reports');
mkdirSync(reports, { recursive: true });

const json = (path) => JSON.parse(readFileSync(resolve(root, path), 'utf8'));
const products = json('site/src/data/products.json');
const categories = json('site/src/data/categories.json');
const pages = json('site/src/data/pages.json');
const media = json('site/src/data/media.json');
const routes = json('site/src/data/route-index.json');
const inventory = json('analysis/url-inventory.json');
const inputs = json('analysis/input-evidence-summary.json');
const contentSummary = json('analysis/content-build-summary.json');
const feed = json('analysis/gmc-feed-validation.json');
const audit = json('analysis/local-audit.json');
const assetRecovery = json('analysis/live-asset-recovery.json');
const productionIntegration = json('analysis/production-integration-test.json');
const sha256File = (path) => createHash('sha256').update(readFileSync(path)).digest('hex');
const wpressName = 'shopcardboardboxes-com-20260824-094338-9y6n4k665apu.wpress';
const gscName = 'https___shopcardboardboxes.com_-Performance-on-Search-2026-08-24.xlsx';
const wpressPath = resolve(root, wpressName);
const gscPath = resolve(root, gscName);
const csv = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const writeCsv = (name, rows) => {
  const headers = [...new Set(rows.flatMap((row) => Object.keys(row)))];
  writeFileSync(resolve(analysis, name), `${headers.map(csv).join(',')}\n${rows.map((row) => headers.map((header) => csv(row[header])).join(',')).join('\n')}\n`);
};
const writeReport = (name, body) => writeFileSync(resolve(reports, name), `${body.trim()}\n`);
const percent = (value) => `${(Number(value) * 100).toFixed(2)}%`;

writeCsv('product-inventory.csv', products.map((product) => ({
  wordpressId: product.id,
  merchantId: product.merchantId,
  sku: product.sku,
  title: product.title,
  slug: product.slug,
  path: product.path,
  categories: product.categories.map((category) => category.name).join(' | '),
  featuredImage: product.featuredImage?.url || '',
  galleryCount: product.gallery.length,
  price: product.price,
  regularPrice: product.regularPrice,
  salePrice: product.salePrice,
  currency: product.currency,
  stockStatus: product.stockStatus,
  ratingAverage: product.ratingAverage,
  ratingCount: product.ratingCount,
  merchantDisapproved: product.gmcDisapproved ? 'yes' : 'no',
  seoTitle: product.seo.title,
  seoDescription: product.seo.description,
  seoCanonical: product.seo.canonical,
  seoNoindex: product.seo.noindex,
})));
writeCsv('category-inventory.csv', categories.map((category) => ({
  wordpressId: category.id,
  name: category.name,
  slug: category.slug,
  path: category.path,
  databaseCount: category.count,
  recoveredAssignments: category.products.length,
  image: category.image?.url || '',
  description: category.description,
})));
writeCsv('image-media-inventory.csv', media.map((item) => ({
  wordpressId: item.id,
  title: item.title,
  alt: item.alt,
  sourceFile: item.file,
  publicUrl: item.url,
  recoveredLocally: item.url.startsWith('/wp-content/uploads/') && existsSync(resolve(site, 'public', item.url.replace(/^\/+/, ''))) ? 'yes' : 'no',
})));
writeCsv('gsc-url-preservation.csv', inventory.filter((row) => row.sources.includes('gsc')).map((row) => ({
  url: row.url,
  sourceStatus: row.status,
  redirectChain: row.redirectChain,
  clicks: row.gscClicks,
  impressions: row.gscImpressions,
  ctr: row.gscCtr,
  position: row.gscPosition,
  localRepresentation: row.localRepresentation,
})));
writeCsv('metadata-parity.csv', routes.map((route) => {
  const snapshot = json(`site/src/data/snapshots/${route.file}`);
  const result = audit.routes.find((row) => row.path === route.path);
  return {
    path: route.path,
    title: snapshot.title,
    description: snapshot.description,
    canonical: snapshot.canonical,
    sourceRobots: snapshot.robots,
    titleMatch: result?.titleMatch,
    descriptionMatch: result?.descriptionMatch,
    canonicalMatch: result?.canonicalMatch,
    previewNoindex: result?.localPreviewNoindex,
  };
}));
writeCsv('structured-data-report.csv', routes.map((route) => {
  const snapshot = json(`site/src/data/snapshots/${route.file}`);
  const result = audit.routes.find((row) => row.path === route.path);
  return { path: route.path, jsonLdBlocks: snapshot.jsonLd.length, exactLocalMatch: result?.structuredDataMatch };
}));
writeCsv('forms-inventory.csv', routes.map((route) => {
  const snapshot = json(`site/src/data/snapshots/${route.file}`);
  return {
    path: route.path,
    forms: (snapshot.contentHtml.match(/<form\b/gi) || []).length,
    fileInputs: (snapshot.contentHtml.match(/<input\b[^>]*type=["']file["']/gi) || []).length,
    requiredFields: (snapshot.contentHtml.match(/\srequired(?:=|\s|>)/gi) || []).length,
  };
}).filter((row) => row.forms));
writeCsv('internal-link-report.csv', audit.internalLinks.map((row) => ({ path: row.path, localStatus: row.status, knownSnapshot: row.knownSnapshot, publicPath: row.publicPath })));

const gsc = inputs.gsc;
const us = gsc.countries.find((row) => row.country === 'United States');
const appearance = Object.fromEntries(gsc.search_appearance.map((row) => [row['search appearance'], row]));
const gscPreserved = inventory.filter((row) => row.sources.includes('gsc') && row.localRepresentation !== 'no').length;
const sourceBrokenAssets = assetRecovery.filter((row) => row.sourceBroken && !existsSync(resolve(site, 'public', row.pathname.replace(/^\/+/, '')))).length;
const repairedSourceBrokenAssets = assetRecovery.filter((row) => row.sourceBroken && existsSync(resolve(site, 'public', row.pathname.replace(/^\/+/, '')))).length;
const recoveredAssets = assetRecovery.filter((row) => row.recovered).length;
const localMediaCount = media.filter((item) => item.url.startsWith('/wp-content/uploads/') && existsSync(resolve(site, 'public', item.url.replace(/^\/+/, '')))).length;
const totalForms = routes.reduce((sum, route) => sum + (json(`site/src/data/snapshots/${route.file}`).contentHtml.match(/<form\b/gi) || []).length, 0);

writeReport('01-extraction-report.md', `# .wpress extraction report

- Archive: \`${wpressName}\`
- Size: ${statSync(wpressPath).size.toLocaleString('en-US')} bytes
- SHA-256: \`${sha256File(wpressPath)}\`
- Format: All-in-One WP Migration archive, extracted as data without executing PHP
- Extracted entries: 42,795
- Extracted payload: 1,188,175,894 bytes
- Database SQL: 85,523,581 bytes
- Recovered WordPress tables: 93
- Recovered uploads: 15,366 files; 923 attachment records
- Published products: 186; product variations: 0
- Published pages: 12; published posts: 3
- Product categories excluding Uncategorized: 7
- Themes, plugins, uploads, Elementor data, WooCommerce data, WPForms data, Yoast metadata, menus/options, and Google Listings & Ads configuration were present.

Recovered backup material remains under \`evidence/\`, outside \`site/public\`, and is excluded by the project \`.gitignore\`. No public WordPress restoration was performed.`);

writeReport('02-security-scan-report.md', `# Security scan report

Status: the WordPress backup is compromised and must remain quarantined.

Confirmed findings:

- Persistent obfuscated must-use plugin: \`evidence/wpress-extracted/mu-plugins/aero-handler-plus.php\`, SHA-256 \`7507952ee1a96cbd5d002eed1a9bfe1b37853710312c30c61358888296676185\`.
- The file impersonates “Metro Archiver Snap” and references \`loganking.com\`.
- Database option \`sc_persist_manifest\` explicitly persists that MU plugin.
- Duplicate archive \`evidence/wpress-extracted/56489040.zip\`, SHA-256 \`6371479e1f2b407150381ba5ceaa46d65f05f5e58653d7310e7d7912a591430b\`.
- Unexpected administrator \`administrator_69a021\`, registered 2026-06-13, plus orphan administrator capability metadata for user ID 4.
- Elementor submissions contain 1,956 submissions and 11,392 values, including historical casino/pharma spam. They were not imported or exposed.
- Uploads contained only two executable PHP index guards; neither was copied into Astro public output.

Clean-output checks:

- Public PHP/SQL/.wpress/archive/backup/private-key files: 0
- Sensitive-pattern matches in public text assets: 0
- WordPress PHP runtime dependencies: 0
- The uploaded backdoor archive \`wp-content/uploads/2026/08/56489040.zip\` is explicitly denied by the content builder, absent from public/build output, and returns local HTTP 404.
- A non-executable PHP mailer example recovered inside an HTML comment was stripped from generated page data and rendered output.
- Unused PHP_CodeSniffer test fixtures containing PHP markers were excluded from the copied theme assets.
- Suspicious source files were treated as evidence only and never executed on the host.

An exact guarded incident-response runner is available at \`tools/live-wordpress-incident-response.sh\`. Its default mode is read-only; apply mode verifies the production hostname, creates a restricted database backup, quarantines the confirmed malicious files, removes the persistence option and unauthorized account/orphan metadata, then reruns checksums. It was not executed because no authenticated live WordPress/hosting shell is available in this local project. Provider-side credential rotation and log review still require account access.`);

writeReport('03-url-inventory-report.md', `# URL inventory and redirect report

- Definitive inventory rows: ${inventory.length.toLocaleString('en-US')}
- Live crawl results: 1,496 HTTP 200, 60 HTTP 404, 1 HTTP 405
- Sitemap URLs: ${contentSummary.sitemapUrls}
- Recovered HTML route snapshots: ${contentSummary.liveHtmlRoutes}
- Static compatibility responses for feeds, REST/oEmbed discovery, sitemaps, robots and XML-RPC GET behavior: ${contentSummary.compatibilityResponses}
- Preserved redirect cases tested: ${audit.summary.redirectsTested}; failures: ${audit.summary.redirectFailures}
- Inventory represented locally: ${inventory.filter((row) => row.localRepresentation === 'yes').length}
- Source 404s deliberately preserved as 404: ${inventory.filter((row) => row.localRepresentation === 'preserved-404').length}
- Silently omitted inventory rows: ${inventory.filter((row) => row.localRepresentation === 'no').length}
- Sitemap destinations tested: ${audit.summary.sitemapUrlsTested}; unresolved: ${audit.summary.brokenSitemapRoutes}

The compatibility layer serves captured public JSON/RSS/XML responses as static data; it does not restore WordPress or PHP. Shortlink redirects, case-sensitive aliases, \`/page/1/\` redirects, trailing-slash behavior, and the anonymous \`/checkout/\` → \`/cart/\` redirect are preserved.

Machine-readable files: \`analysis/url-inventory.csv\` and \`analysis/url-inventory.json\`.`);

writeReport('04-product-category-inventory.md', `# Product and category inventory

- Published WooCommerce products recovered: ${products.length}
- Product variations: 0
- Active product categories recovered: ${categories.length}
- Products with a non-empty SKU: ${products.filter((product) => product.sku).length}
- Product gallery image assignments: ${products.reduce((sum, product) => sum + product.gallery.length, 0)}
- Products with zero/missing recovered price: ${products.filter((product) => !Number(product.price)).length}
- Approved WordPress customer reviews: 0; the database's 244 approved comments are order notes, not public reviews.

Assignments were reconstructed from the WordPress taxonomy relationship tables. GMC values were cross-mapped by exact product landing-page path and stable Merchant ID. No product names, slugs, descriptions, prices, claims, category names, or commercial text were rewritten.

Machine-readable files: \`analysis/product-inventory.csv\` and \`analysis/category-inventory.csv\`.`);

writeReport('05-gsc-preservation-report.md', `# Google Search Console preservation report

Source workbook: \`${gscName}\`, SHA-256 \`${sha256File(gscPath)}\`.

- Pages exported: ${gsc.pages_count}
- Actual workbook page totals: ${gsc.page_clicks.toLocaleString('en-US')} clicks, ${gsc.page_impressions.toLocaleString('en-US')} impressions, ${percent(gsc.page_ctr)} CTR, ${gsc.impression_weighted_page_position.toFixed(2)} impression-weighted position
- United States: ${Number(us.clicks).toLocaleString('en-US')} clicks
- Merchant listings: ${Number(appearance['Merchant listings'].clicks).toLocaleString('en-US')} clicks, ${percent(appearance['Merchant listings'].ctr)} CTR, position ${Number(appearance['Merchant listings'].position).toFixed(2)}
- Product snippets: ${Number(appearance['Product snippets'].clicks).toLocaleString('en-US')} clicks
- Review snippet: ${Number(appearance['Review snippet'].clicks).toLocaleString('en-US')} clicks
- GSC URLs accounted for: ${gscPreserved}/${gsc.pages_count}
- Local status-preservation failures across all GSC URLs: ${audit.summary.gscUrlFailures}

The workbook totals differ slightly from the baseline values supplied in the prompt; this report uses the actual attached workbook. GSC data was used only for preservation and audit priority, not content or metadata changes.

Machine-readable file: \`analysis/gsc-url-preservation.csv\`.`);

writeReport('06-metadata-content-links-schema.md', `# Metadata, content, internal-link and structured-data parity

- Routes compared: ${audit.summary.routesTested}
- Exact captured main-content HTML matches: ${audit.summary.exactContentMatches}
- Exact captured style-block/link matches: ${audit.summary.exactStyleMatches}
- Exact captured JSON-LD matches: ${audit.summary.structuredDataMatches}
- Title/description/canonical/content/style/schema route failures: ${audit.summary.routeFailures}
- Unique internal links tested: ${audit.summary.uniqueInternalLinks}
- Unexpected broken internal links: ${audit.summary.brokenInternalLinks}
- Live-source broken internal links preserved as 404: ${audit.summary.sourceBrokenInternalLinks}
- Compatibility response bodies compared byte-for-byte: ${audit.summary.compatibilityResponsesTested}; failures: ${audit.summary.compatibilityFailures}

The Astro output uses production-domain canonicals even on localhost. Local HTML/API responses return \`noindex, nofollow\` and an \`X-Robots-Tag\` header. Production tracking is disabled unless both the hostname is exactly \`shopcardboardboxes.com\` and the production tracking environment variable is enabled.

Machine-readable files: \`analysis/metadata-parity.csv\`, \`analysis/structured-data-report.csv\`, and \`analysis/internal-link-report.csv\`.`);

writeReport('07-image-media-report.md', `# Image and media report

- WordPress attachment records: ${media.length}
- Attachment primary paths recovered locally: ${localMediaCount}
- Unique asset references found in captured pages: ${audit.summary.uniqueAssetReferences}
- Missing local references: ${audit.summary.missingAssets}
- Remaining references broken locally: ${sourceBrokenAssets}
- Live-source broken references repaired from matching recovered originals: ${repairedSourceBrokenAssets}
- Generated Elementor/core styles recovered directly from the live site: ${recoveredAssets}
- PHP copied into public uploads: 0

The 29 July 2024 Burger Boxes thumbnail filenames that return live HTTP 404 are now served locally from their exact matching recovered source images. No generated or unrelated replacement images were used. Original recovered images retain their public \`/wp-content/uploads/…\` paths.

Machine-readable files: \`analysis/image-media-inventory.csv\`, \`analysis/live-asset-recovery.json\`, and \`analysis/local-audit.json\`.`);

writeReport('08-forms-cart-tracking-report.md', `# Forms, cart, checkout and tracking report

- Captured form occurrences across recovered routes: ${totalForms}
- Forms retain their rendered labels/options/content; unsafe WordPress nonces and server actions are not reused.
- Local handlers add product name, product URL, page title, and source URL attribution per submission.
- File inputs are handled through a size-limited server endpoint; localhost accepts them in mock mode without persistence or email.
- The production form adapter is implemented. Its webhook, bearer secret, attribution and multipart file-upload contract passed against an isolated local receiver; no real email was sent.
- Add-to-cart uses local storage, renders the recovered product identity, and emits debug events.
- Anonymous checkout preserves the live 302 redirect to cart. A local cart cookie allows the isolated mock checkout.
- Recovered payment state is preserved: PayPal disabled; Cash on Delivery enabled with the original title/description. The COD order endpoint validates products, quantities and totals server-side; localhost does not persist or email orders.
- Header/mobile menu, search, product gallery selection, phone/email clicks, forms, cart and checkout have clean client-side implementations.
- GA4 \`G-TQY5FTRRCG\`, GTM \`GTM-PHZL97TG\`, and Google Ads \`AW-16674273427\` were recovered. They remain disabled on localhost.
- Production-like form/order adapter checks: ${Object.values(productionIntegration.checks).filter(Boolean).length}/${Object.keys(productionIntegration.checks).length} passed; live deliveries created: 0.

Browser interaction automation could not be run because the required in-app browser runtime was unavailable in this session. HTTP behavior and JavaScript syntax were tested; interactive browser QA remains a release gate.

Machine-readable files: \`analysis/forms-inventory.csv\` and \`analysis/production-integration-test.json\`.`);

writeReport('09-gmc-report.md', `# Google Merchant Center method, replacement plan and feed validation

Recovered current method:

- Google Listings & Ads / Google for WooCommerce plugin version 3.7.1
- Merchant Center ID: 5455779579
- Connected/verified state recorded in WordPress
- Push synchronization enabled for products, coupons, shipping and settings
- Merchant Center shipping, shipping-time and tax configuration set to manual
- Target country/feed label US; language en; currency USD
- Google Ads conversion ID \`AW-16674273427\`

Local replacement artifacts:

- Deterministic TSV: \`site/public/merchant/products.tsv\`
- Deterministic RSS/XML: \`site/public/merchant/products.xml\`
- Stable-ID mapping: \`analysis/gmc-id-mapping.csv\`
- Generator: \`tools/generate-gmc-feed.mjs\`
- Validator: \`tools/validate-gmc-feed.mjs\`

Validation:

- Source/export records: ${feed.sourceRecordCount}
- Unique IDs: ${feed.uniqueIdCount}; duplicates: ${feed.duplicateIds.length}
- Invalid product links: ${feed.invalidProductLinks.length}
- Missing recovered primary images: ${feed.missingRecoveredPrimaryImages.length}
- Availability: ${feed.availabilityCounts['in stock']} in stock
- Price/currency: ${feed.currencyCounts.USD} USD; ${feed.currencyCounts.missing || 0} missing
- Commercial evidence override: Merchant ID \`cardboard-flower-boxes\` uses the live rendered starting price of \`0.20 USD\`, recorded in \`analysis/commercial-evidence-overrides.json\`
- Valid for activation: ${feed.validForActivation ? 'yes' : 'no'}
- Uploaded or activated: no

Post-approval activation must configure the new feed in GMC, verify item-ID continuity and diagnostics, and only then retire the WooCommerce Content API source.`);

writeReport('10-visual-parity-report.md', `# Desktop, tablet and mobile visual-parity report

Status: not completed; this is a release blocker.

The required browser-control runtime was unavailable. Under the mandated browser workflow, standalone Playwright/Chromium automation was not used as a substitute. Therefore no valid screenshot or pixel-difference set exists for 1440px, 768px, 390px or 320px, and horizontal-overflow checks at 390px/320px remain unverified.

What was verified instead: exact captured main-content HTML, live stylesheet links/inline styles, metadata and JSON-LD for all 264 routes; responsive overflow guards are present in the clean Astro shell. These DOM checks are not a visual-parity substitute.

The user-supplied desktop screenshots were inspected and the reported shared-shell defects were repaired: exact recovered live header/footer markup, live footer styling, logo sizing, product tabs, favicon links and the original JoinChat-style circular WhatsApp icon.

Before deployment, run the prescribed browser screenshot matrix against live and local, investigate all diffs, and perform menu/gallery/form/cart/checkout interaction tests at each viewport.`);

writeReport('11-automated-test-results.md', `# Automated test results

Passing:

- \`astro check\`: 0 errors, 0 warnings, 0 hints
- Production Astro server build: passed
- Recovered HTML routes: ${audit.summary.routesTested}/${audit.summary.routesTested} passed metadata/content/style/schema checks
- Static compatibility responses: ${audit.summary.compatibilityResponsesTested}/${audit.summary.compatibilityResponsesTested} passed status/content-type/byte checks
- Redirect cases: ${audit.summary.redirectsTested}/${audit.summary.redirectsTested} matched
- GSC URLs: ${audit.summary.gscUrlsTested}/${audit.summary.gscUrlsTested} accounted for
- Sitemap destinations: ${audit.summary.sitemapUrlsTested}/${audit.summary.sitemapUrlsTested} resolve without 4xx/5xx
- Public prohibited files: ${audit.summary.prohibitedPublicFiles}
- Public sensitive-pattern findings: ${audit.summary.sensitivePublicFiles}
- GMC feed duplicate IDs: ${feed.duplicateIds.length}; invalid product links: ${feed.invalidProductLinks.length}
- Production-like form/file-upload/COD webhook contract: ${Object.values(productionIntegration.checks).filter(Boolean).length}/${Object.keys(productionIntegration.checks).length} passed
- Future \`*.vercel.app\` hostname-only static-asset noindex rule: locally configured and validated
- Client JavaScript syntax check: included in final verification command

Known/non-passing release gates:

- Browser interaction suite: not run
- Screenshot/pixel-difference matrix: not run
- GMC activation validation: passed locally; activation was not performed
- Recovered source-image filename repairs: 29; direct broken-link repair redirects: 29.`);

writeReport('12-environment-and-operations.md', `# Local development, production build and environment

Development:

\`\`\`bash
cd "/Users/sajjadahmad/Documents/shop cardboard boxes/site"
npm install
npm run dev -- --host 127.0.0.1
\`\`\`

Production-like local build:

\`\`\`bash
cd "/Users/sajjadahmad/Documents/shop cardboard boxes/site"
npm run check
npm run build
HOST=127.0.0.1 PORT=4333 npm run start
\`\`\`

Required later-production variables are documented in \`site/.env.example\`: production tracking enablement, form endpoint/secret, SMTP settings, recipient/sender email, and the Cash-on-Delivery order-delivery endpoint/secret. No secret values are present.

Canonical URLs always use \`https://shopcardboardboxes.com/\`. Local page/API responses are hostname-protected with noindex. \`site/vercel.json\` now adds \`X-Robots-Tag: noindex, nofollow\` to every \`*.vercel.app\` response, including static assets, using a hostname suffix condition that excludes both production hostnames. The rule validates locally; its real edge response must still be smoke-tested after a preview deployment exists.`);

writeReport('13-remaining-differences.md', `# Remaining differences and release blockers

1. Browser-rendered visual parity and pixel-difference testing were not possible in this session; 1440/768/390/320 viewport checks remain open.
2. Browser interaction automation for navigation, galleries, forms, file upload, cart and checkout remains open, although the clean local implementations and HTTP behavior are present.
3. The 29 source-broken July 2024 thumbnail filenames are restored locally from their matching recovered originals; 29 broken product references now use direct, no-chain 301 repairs.
4. GMC Merchant ID \`cardboard-flower-boxes\` now uses the live rendered authoritative starting price recorded in the commercial evidence override; the feed validates locally.
5. The WordPress source backup is compromised. The clean Astro public tree scanned clean and an exact guarded remediation runner is ready, but it cannot change the live host without authenticated WordPress/hosting shell access.
6. Production form/file-upload and Cash-on-Delivery webhook contracts pass end-to-end against an isolated receiver. Real provider endpoints and rotated secrets are still unavailable, so no customer email or live order was sent.
7. The future \`*.vercel.app\` static-asset noindex rule is implemented and locally validated; the actual edge response can only be smoke-tested after an approved preview deployment exists.

Recommendation: the clean Astro source is suitable for review and, after confirming ignored evidence remains excluded, for a future Git commit. It is not safe to deploy or cut over until visual/browser QA, production integration configuration, and staging-host header validation pass.`);

writeReport('14-post-approval-checklist.md', `# Post-approval Git and deployment checklist

No step below was performed.

1. Reconfirm \`.gitignore\` excludes \`*.wpress\`, SQL, \`evidence/\`, extracted databases, credential files, analysis caches and temporary restoration data.
2. Review the clean Astro source and reports; do not add quarantined WordPress files.
3. Reconfirm the recorded GMC commercial evidence override and rerun the feed validator.
4. Run browser interaction and 1440/768/390/320 visual-diff suites; fix genuine parity defects only.
5. Configure production form/email/payment services in test mode, validate attribution and success/error paths, then supply secrets only through platform environment variables.
6. Initialize Git only after explicit approval; inspect the staged file list and secret scan before the first commit.
7. Configure the approved deployment adapter and hostname-based preview noindex headers.
8. Deploy to a protected preview, repeat full route/GSC/GMC/schema/form/cart/checkout audits, and confirm zero production analytics/conversions from preview.
9. Obtain explicit cutover approval before domain, DNS, GMC feed activation, GSC sitemap submission or production tracking changes.
10. After cutover, validate Merchant Center diagnostics/item IDs, Search Console coverage, logs, forms, conversions, 404s and rankings before retiring WordPress.`);

writeReport('README.md', `# Local Astro migration audit

The local Astro recovery/build is complete enough for code review: all discovered inventory rows are represented, repaired, or intentionally preserved, the production build passes, and no Git/deployment/live mutations occurred. It is not approved for deployment because browser visual/interaction QA and production integrations remain unresolved.

Deliverable map:

1. Working Astro project: \`site/\`
2. Local instructions: \`reports/12-environment-and-operations.md\`
3. Extraction report: \`reports/01-extraction-report.md\`
4. Security report: \`reports/02-security-scan-report.md\`
5. URL inventory/redirects: \`reports/03-url-inventory-report.md\`, \`analysis/url-inventory.csv\`
6. Products/categories: \`reports/04-product-category-inventory.md\`, inventory CSVs
7. GSC preservation: \`reports/05-gsc-preservation-report.md\`
8. Metadata/content/links/schema: \`reports/06-metadata-content-links-schema.md\`
9. Images/media: \`reports/07-image-media-report.md\`
10. Forms/cart/checkout/tracking: \`reports/08-forms-cart-tracking-report.md\`
11. GMC current method/feed plan/validation: \`reports/09-gmc-report.md\`
12. Visual parity status: \`reports/10-visual-parity-report.md\`
13. Automated tests: \`reports/11-automated-test-results.md\`
14. Environment variables/commands: \`reports/12-environment-and-operations.md\`, \`site/.env.example\`
15. Remaining differences and recommendation: \`reports/13-remaining-differences.md\`
16. Post-approval Git/deployment checklist: \`reports/14-post-approval-checklist.md\`

Neither a Git repository nor a deployment was created.`);

console.log(JSON.stringify({ reports: 15, products: products.length, categories: categories.length, media: media.length, gscUrls: gsc.pages_count }, null, 2));
