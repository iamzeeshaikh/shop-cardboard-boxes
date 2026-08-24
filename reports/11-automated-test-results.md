# Automated test results

Passing:

- `astro check`: 0 errors, 0 warnings, 0 hints
- Production Astro server build: passed
- Recovered HTML routes: 264/264 passed metadata/content/style/schema checks
- Static compatibility responses: 633/633 passed status/content-type/byte checks
- Redirect cases: 216/216 matched
- GSC URLs: 640/640 accounted for
- Sitemap destinations: 216/216 resolve without 4xx/5xx
- Public prohibited files: 0
- Public sensitive-pattern findings: 0
- GMC feed duplicate IDs: 0; invalid product links: 0
- Production-like form/file-upload/COD webhook contract: 9/9 passed
- Future `*.vercel.app` hostname-only static-asset noindex rule: locally configured and validated
- Client JavaScript syntax check: included in final verification command

Known/non-passing release gates:

- Browser interaction suite: not run
- Screenshot/pixel-difference matrix: not run
- GMC activation validation: passed locally; activation was not performed
- Recovered source-image filename repairs: 29; direct broken-link repair redirects: 29.
