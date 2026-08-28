import webpMap from '../../data/webp-map.json';
import { ALT_BY_FILE, DECORATIVE_FILES } from '../../data/seo/image-alt';

const WEBP: Record<string, string> = webpMap;

const fileOf = (url: string): string => url.split('?')[0].split('/').pop() || '';

/**
 * Intrinsic sizes for the only two images the export left without width and height.
 * Without them the browser cannot reserve space, which is a layout shift on every
 * product page.
 */
const INTRINSIC: Record<string, [number, number]> = {
  '/wp-content/uploads/elementor/thumbs/SSL-Badge-qvyxxdi1dmxwe8mat1oothv59ygbkdma0mzm4kni80.png': [70, 70],
  '/wp-content/uploads/woocommerce-placeholder.png': [1200, 1200],
};

/**
 * Translate a srcset to its WebP equivalents. Candidates without a rendition are
 * dropped rather than invented. The result is only used when a suitably small
 * candidate survives, so the browser can never be pushed onto a larger file than the
 * JPEG it would otherwise have picked.
 */
function webpSrcset(srcset: string, displayWidth: number): string {
  const mapped: { entry: string; width: number }[] = [];
  for (const part of srcset.split(',')) {
    const [url, descriptor] = part.trim().split(/\s+/);
    const webp = WEBP[url];
    if (!webp) continue;
    const width = /^(\d+)w$/.test(descriptor || '') ? Number(descriptor.slice(0, -1)) : 0;
    mapped.push({ entry: descriptor ? `${webp} ${descriptor}` : webp, width });
  }
  if (!mapped.length) return '';
  const widths = mapped.map((candidate) => candidate.width).filter(Boolean);
  // Without a candidate near the rendered size, serving WebP could cost more bytes.
  if (widths.length && displayWidth && Math.min(...widths) > displayWidth * 1.6) return '';
  return mapped.map((candidate) => candidate.entry).join(', ');
}

const attr = (tag: string, name: string): string | undefined => {
  const match = new RegExp(`\\s${name}="([^"]*)"`, 'i').exec(tag);
  return match ? match[1] : undefined;
};

const setAttr = (tag: string, name: string, value: string): string => (
  new RegExp(`\\s${name}="[^"]*"`, 'i').test(tag)
    ? tag.replace(new RegExp(`\\s${name}="[^"]*"`, 'i'), ` ${name}="${value}"`)
    : tag.replace(/\/?>$/, ` ${name}="${value}"$&`).replace(/ >$/, '>')
);

export interface ImageOptions {
  /** src of the image that should load eagerly as the largest contentful paint. */
  lcpSrc?: string;
}

/**
 * Rewrite the <img> tags in a block of recovered HTML:
 *  - wrap them in <picture> with a WebP source, keeping the original file as the src
 *    so indexed image URLs and Product schema images never change;
 *  - fill in the alt text the migration dropped;
 *  - mark the hero image as eager/high priority and everything else as lazy.
 */
export function upgradeImages(html: string, options: ImageOptions = {}): string {
  let firstContentImage = true;
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    // The transform runs on composed HTML, so it has to be idempotent.
    if (/\sdata-scb-img=/i.test(tag)) return tag;
    const src = attr(tag, 'src');
    if (!src || !src.startsWith('/wp-content/')) return tag;
    const file = fileOf(src);

    let next = setAttr(tag, 'data-scb-img', '1');

    // Intrinsic dimensions, so the browser reserves the space before the image loads.
    const intrinsic = INTRINSIC[src];
    if (intrinsic && (!/\swidth=/i.test(next) || !/\sheight=/i.test(next))) {
      next = setAttr(next, 'width', String(intrinsic[0]));
      next = setAttr(next, 'height', String(intrinsic[1]));
    }

    // Alt text: only touch images the migration left empty.
    const alt = attr(next, 'alt');
    if (alt !== undefined && !alt.trim() && !DECORATIVE_FILES.has(file)) {
      const replacement = ALT_BY_FILE[file];
      if (replacement) next = setAttr(next, 'alt', replacement);
    }

    // Loading priority. The hero keeps its bytes on the critical path; the rest defer.
    const isLcp = options.lcpSrc ? src === options.lcpSrc : false;
    if (isLcp) {
      next = setAttr(next, 'loading', 'eager');
      next = setAttr(next, 'fetchpriority', 'high');
      next = setAttr(next, 'decoding', 'async');
    } else if (!/loading="/i.test(next)) {
      next = setAttr(next, 'loading', 'lazy');
      next = setAttr(next, 'decoding', 'async');
    } else if (firstContentImage && !options.lcpSrc) {
      firstContentImage = false;
    }

    const webp = WEBP[src];
    if (!webp) return next;

    const srcset = attr(next, 'srcset');
    const displayWidth = Number(attr(next, 'width') || 0);
    const sourceSrcset = srcset ? webpSrcset(srcset, displayWidth) : webp;
    if (!sourceSrcset) return next;
    const sizes = attr(next, 'sizes');
    const source = `<source type="image/webp" srcset="${sourceSrcset}"${sizes ? ` sizes="${sizes}"` : ''} />`;
    return `<picture>${source}${next}</picture>`;
  });
}

/** WebP rendition for a known image, used when authoring new markup. */
export const webpFor = (url: string): string | undefined => WEBP[url];
