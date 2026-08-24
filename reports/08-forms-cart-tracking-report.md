# Forms, cart, checkout and tracking report

- Captured form occurrences across recovered routes: 445
- Forms retain their rendered labels/options/content; unsafe WordPress nonces and server actions are not reused.
- Local handlers add product name, product URL, page title, and source URL attribution per submission.
- File inputs are handled through a size-limited server endpoint; localhost accepts them in mock mode without persistence or email.
- The production form adapter is implemented. Its webhook, bearer secret, attribution and multipart file-upload contract passed against an isolated local receiver; no real email was sent.
- Add-to-cart uses local storage, renders the recovered product identity, and emits debug events.
- Anonymous checkout preserves the live 302 redirect to cart. A local cart cookie allows the isolated mock checkout.
- Recovered payment state is preserved: PayPal disabled; Cash on Delivery enabled with the original title/description. The COD order endpoint validates products, quantities and totals server-side; localhost does not persist or email orders.
- Header/mobile menu, search, product gallery selection, phone/email clicks, forms, cart and checkout have clean client-side implementations.
- GA4 `G-TQY5FTRRCG`, GTM `GTM-PHZL97TG`, and Google Ads `AW-16674273427` were recovered. They remain disabled on localhost.
- Production-like form/order adapter checks: 9/9 passed; live deliveries created: 0.

Browser interaction automation could not be run because the required in-app browser runtime was unavailable in this session. HTTP behavior and JavaScript syntax were tested; interactive browser QA remains a release gate.

Machine-readable files: `analysis/forms-inventory.csv` and `analysis/production-integration-test.json`.
