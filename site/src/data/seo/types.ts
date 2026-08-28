import type { Crumb, Faq } from '../../lib/seo/util';
import type { QuoteFormOptions } from '../../lib/seo/blocks';

export interface CategoryContent {
  /** Existing archive path, or the path of a category authored here. */
  path: string;
  /** Replaces the WordPress "… Archives - Shop Cardboard Boxes" title. */
  title: string;
  description: string;
  crumbs: Crumb[];
  /** Short orientation copy shown above the product grid. */
  intro: string;
  quote: QuoteFormOptions;
  /** Everything shown below the grid. Section order deliberately differs per category. */
  sections: string;
  faqs: Faq[];
  faqHeading: string;
  faqIntro?: string;
  /** Closing call to action, written per collection so no two pages share it. */
  ctaHeading: string;
  ctaBody: string;
  /** Set only for categories that are authored here rather than replayed from a snapshot. */
  authored?: {
    h1: string;
    eyebrow: string;
    lede: string;
    facts: { label: string; value: string }[];
    productIds: number[];
    /** Extra products pulled in from elsewhere in the catalogue. */
    extraProductPaths?: string[];
  };
}

export type { Crumb, Faq, QuoteFormOptions };
