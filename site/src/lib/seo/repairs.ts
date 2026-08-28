import routeIndex from '../../data/route-index.json';

const knownPaths = new Set(routeIndex.map((route) => route.path));

/**
 * The refund, terms and privacy pages are excluded from every repair in this file.
 * They are to be served exactly as recovered — content, headings, markup, metadata and
 * schema — so not even a site-wide accessibility improvement is applied to them.
 */
const PROTECTED_PATHS = new Set(['/refund_returns/', '/terms-conditions/', '/privacy-policy/']);

/** Lowercase category slugs that a case-variant link should point at directly. */
const lowercaseCategory = new Map<string, string>();
for (const route of routeIndex) {
  if (!route.path.startsWith('/product-category/')) continue;
  const lower = route.path.toLowerCase();
  if (lower !== route.path && knownPaths.has(lower)) lowercaseCategory.set(route.path, lower);
}

/**
 * Defects carried over from the WordPress export. Each one is repaired in the served
 * HTML rather than by editing the recovered snapshot, so the original capture stays
 * intact as the reference for what the live site used to do.
 */
export function repairContent(path: string, html: string): string {
  if (PROTECTED_PATHS.has(path)) return html;
  let result = html;

  // 1. Links to the case-variant category archives. Those URLs now 301 to the
  //    lowercase slug, so pointing at them costs every visitor a redirect hop.
  result = result.replace(/href="(\/product-category\/[^"]*)"/g, (match, href: string) => {
    const withSlash = href.endsWith('/') ? href : `${href}/`;
    const direct = lowercaseCategory.get(withSlash) ?? (knownPaths.has(withSlash) ? withSlash : undefined);
    if (!direct) {
      // page/1/ is the first page of a paginated archive and has no URL of its own.
      const pageOne = withSlash.replace(/page\/1\/$/, '');
      if (knownPaths.has(pageOne)) return `href="${pageOne}"`;
      const lowered = withSlash.toLowerCase();
      if (knownPaths.has(lowered)) return `href="${lowered}"`;
      return match;
    }
    return `href="${direct}"`;
  });

  // 2. One product link in the recovered copy had its slug truncated with an ellipsis.
  result = result.replaceAll('/product/cardboard-heavy-…-shipping-crates/', '/product/cardboard-heavy-duty-shipping-crates/');

  // 3. The shop archive carried a WooCommerce category description containing raw
  //    Elementor CSS as visible body text, a second <h1>, and twenty-nine links to
  //    burger-box products that have never existed on this site. All of it is removed.
  if (path === '/products/') {
    const start = result.indexOf('<div class="page-description">');
    if (start >= 0) {
      let depth = 0;
      let cursor = start;
      const tag = /<(\/?)div\b/g;
      tag.lastIndex = start;
      let match: RegExpExecArray | null;
      while ((match = tag.exec(result))) {
        depth += match[1] ? -1 : 1;
        if (depth === 0) { cursor = result.indexOf('>', match.index) + 1; break; }
      }
      if (cursor > start) result = result.slice(0, start) + result.slice(cursor);
    }
  }

  // 4. Seven product pages carry a second <h1> inside the description tab, left over
  //    from copy pasted with its own top-level heading. The WooCommerce product title
  //    stays the page H1; every other H1 in the body is demoted to H2 so the outline
  //    has a single top level.
  if (path.startsWith('/product/')) {
    let kept = false;
    result = result.replace(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/gi, (match, attrs, inner) => {
      if (!kept && /product_title/.test(attrs)) { kept = true; return match; }
      return `<h2${attrs}>${inner}</h2>`;
    });
  }

  // 5. The shop archive links back to page/1/, which is the archive root and has no
  //    URL of its own.
  result = result.replaceAll('href="/products/page/1/"', 'href="/products/"');

  // 6. The recovered quote forms label their fields with a placeholder only, so a
  //    screen reader announces nothing once the field has a value. The placeholder
  //    text is promoted to an accessible name, the upload field is named explicitly,
  //    and the hidden anti-spam field is taken out of the accessibility tree.
  result = result.replace(/<(input|textarea)\b([^>]*\bplaceholder="([^"]+)"[^>]*)>/gi, (match, tag, attrs, placeholder) => (
    /\saria-label=/i.test(attrs) ? match : `<${tag}${attrs} aria-label="${placeholder}">`
  ));
  result = result.replace(
    /<input([^>]*\belementor-upload-field[^>]*)>/gi,
    (match, attrs) => (/\saria-label=/i.test(attrs) ? match : `<input${attrs} aria-label="Attach artwork or a reference file">`),
  );
  result = result.replace(
    /<input([^>]*style="display:none !important;"[^>]*)>/gi,
    (match, attrs) => (/\saria-hidden=/i.test(attrs) ? match : `<input${attrs} aria-hidden="true" tabindex="-1" autocomplete="off">`),
  );

  // 7. The contact page opens its two sections at H4 with nothing between them and
  //    the page title, which leaves a gap in the outline. They become H2s, matching
  //    the two H2s further down the same page.
  if (path === '/contact-us/') {
    result = result
      .replace(/<h4([^>]*)>(\s*How to Reach Us\s*)<\/h4>/i, '<h2$1>$2</h2>')
      .replace(/<h4([^>]*)>(\s*Get in Touch\s*)<\/h4>/i, '<h2$1>$2</h2>');
  }

  // 8. Sixty-nine recovered pages contain a second <main id="primary"> inside the
  //    one the layout provides — nested landmarks and a duplicate id, both present on
  //    the live site. The inner element becomes a div and keeps its .site-main class,
  //    which is what the theme's layout rules actually match on.
  result = result.replace(/<main\s+id="primary"\s+class="site-main"([^>]*)>/gi, '<div class="site-main"$1>');
  if (result.includes('<div class="site-main"')) {
    // Close the matching </main>. The recovered markup has exactly one per page.
    result = result.replace(/<\/main>/i, '</div>');
  }

  return result;
}
