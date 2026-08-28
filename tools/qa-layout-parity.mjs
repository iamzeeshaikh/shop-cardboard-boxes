/**
 * Layout parity against the live site.
 *
 * The recovered theme sizes its content column from a CSS custom property that is
 * redefined inside media-scoped <style> blocks. A change that drops or reorders those
 * scopes produces a page that is not broken in any way an HTML check would notice —
 * it simply renders at the wrong width. This measures the widths that matter and
 * compares them with production.
 */
import puppeteer from 'puppeteer-core';

const CHROME = process.env.CHROME_PATH || '/Users/sajjadahmad/.cache/puppeteer/chrome-headless-shell/mac_arm-151.0.7922.47/chrome-headless-shell-mac-arm64/chrome-headless-shell';
const LOCAL = process.env.QA_BASE || 'http://127.0.0.1:4333';
const LIVE = 'https://shopcardboardboxes.com';

const PATHS = [
  '/',
  '/products/',
  '/product/round-cardboard-boxes/',
  '/product-category/cardboard-boxes-by-size-and-shape/',
  '/contact-us/',
];
const SELECTORS = ['.rishi-container', '.site-content', '.wholewrapper', 'ul.products', '.woocommerce-tabs'];
const WIDTHS = [390, 1280];

const measure = async (browser, base, path, width) => {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900, isMobile: width < 700, hasTouch: width < 700 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36');
  try {
    await page.goto(`${base}${path}`, { waitUntil: 'networkidle2', timeout: 90000 });
  } catch { await page.close(); return null; }
  const result = await page.evaluate((selectors) => Object.fromEntries(selectors.map((selector) => {
    const element = document.querySelector(selector);
    return [selector, element ? Math.round(element.getBoundingClientRect().width) : null];
  })), SELECTORS);
  await page.close();
  return result;
};

const browser = await puppeteer.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
let mismatches = 0;
console.log(`${'page @ width'.padEnd(58)}${'selector'.padEnd(30)}${'live'.padStart(7)}${'local'.padStart(8)}`);
for (const path of PATHS) {
  for (const width of WIDTHS) {
    const [live, local] = await Promise.all([measure(browser, LIVE, path, width), measure(browser, LOCAL, path, width)]);
    if (!live || !local) { console.log(`${(path + ' @ ' + width).padEnd(58)} could not load one side`); continue; }
    for (const selector of SELECTORS) {
      if (live[selector] === null || local[selector] === null) continue;
      const drift = Math.abs(live[selector] - local[selector]);
      // Allow a few pixels for scrollbar and font-loading differences.
      if (drift > 8) {
        mismatches++;
        console.log(`${(path + ' @ ' + width).padEnd(58)}${selector.padEnd(30)}${String(live[selector]).padStart(7)}${String(local[selector]).padStart(8)}  <-- drift ${drift}px`);
      }
    }
  }
}
console.log(`\nwidth mismatches beyond 8px: ${mismatches}`);
await browser.close();
