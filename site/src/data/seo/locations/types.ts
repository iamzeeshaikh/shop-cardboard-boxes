import type { Faq } from '../../../lib/seo/util';

export interface LocationLink { path: string; label: string }

export interface LocationSection {
  h2: string;
  html: string;
}

/**
 * A location page is authored, not generated. There is no shared sentence template and
 * no name substitution: `sections` differ in count, order and subject from page to
 * page, and every heading, example and question is written for that place.
 *
 * These pages describe where our packaging is bought and used. They never claim a
 * local warehouse, office, phone number, delivery fleet or pickup point, and they
 * carry no LocalBusiness schema, because none of those things exist.
 */
export interface LocationPage {
  slug: string;
  kind: 'state' | 'city';
  /** Display name — "California", "Los Angeles". */
  name: string;
  /** For cities: the state it sits in, used for breadcrumbs and cross-links. */
  stateName?: string;
  /** Slug of the state page, where one exists in this set. */
  stateSlug?: string;
  /** US Census region, used to group the hub. */
  region: 'West' | 'Southwest' | 'Midwest' | 'Southeast' | 'Northeast';
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  /** Opening paragraphs. Written per page; length deliberately varies. */
  lede: string;
  /** Optional figures. Omitted on pages where they would be filler. */
  facts?: { label: string; value: string }[];
  /** Where the quote form sits. Varying this stops the 40 pages sharing a skeleton. */
  layout: 'form-in-hero' | 'form-after-first-section' | 'form-at-end';
  sections: LocationSection[];
  faqs: Faq[];
  faqHeading: string;
  shop: LocationLink[];
  guides: LocationLink[];
  /** One line for the hub card. */
  summary: string;
  cta: { heading: string; body: string; label: string };
}

export type { Faq };
