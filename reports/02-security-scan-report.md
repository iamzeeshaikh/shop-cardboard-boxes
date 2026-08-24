# Security scan report

Status: the WordPress backup is compromised and must remain quarantined.

Confirmed findings:

- Persistent obfuscated must-use plugin: `evidence/wpress-extracted/mu-plugins/aero-handler-plus.php`, SHA-256 `7507952ee1a96cbd5d002eed1a9bfe1b37853710312c30c61358888296676185`.
- The file impersonates “Metro Archiver Snap” and references `loganking.com`.
- Database option `sc_persist_manifest` explicitly persists that MU plugin.
- Duplicate archive `evidence/wpress-extracted/56489040.zip`, SHA-256 `6371479e1f2b407150381ba5ceaa46d65f05f5e58653d7310e7d7912a591430b`.
- Unexpected administrator `administrator_69a021`, registered 2026-06-13, plus orphan administrator capability metadata for user ID 4.
- Elementor submissions contain 1,956 submissions and 11,392 values, including historical casino/pharma spam. They were not imported or exposed.
- Uploads contained only two executable PHP index guards; neither was copied into Astro public output.

Clean-output checks:

- Public PHP/SQL/.wpress/archive/backup/private-key files: 0
- Sensitive-pattern matches in public text assets: 0
- WordPress PHP runtime dependencies: 0
- The uploaded backdoor archive `wp-content/uploads/2026/08/56489040.zip` is explicitly denied by the content builder, absent from public/build output, and returns local HTTP 404.
- A non-executable PHP mailer example recovered inside an HTML comment was stripped from generated page data and rendered output.
- Unused PHP_CodeSniffer test fixtures containing PHP markers were excluded from the copied theme assets.
- Suspicious source files were treated as evidence only and never executed on the host.

An exact guarded incident-response runner is available at `tools/live-wordpress-incident-response.sh`. Its default mode is read-only; apply mode verifies the production hostname, creates a restricted database backup, quarantines the confirmed malicious files, removes the persistence option and unauthorized account/orphan metadata, then reruns checksums. It was not executed because no authenticated live WordPress/hosting shell is available in this local project. Provider-side credential rotation and log review still require account access.
