import type { Faq } from '../../../lib/seo/util';

export interface ResourceLink { path: string; label: string }

export interface Resource {
  slug: string;
  /** <title>. */
  title: string;
  h1: string;
  description: string;
  /** One sentence for the hub card. */
  summary: string;
  /** Hub grouping. */
  topic: 'Specification' | 'Materials' | 'Shipping' | 'Design and print' | 'Sustainability' | 'By industry';
  updated: string;
  readingMinutes: number;
  /** Full article HTML. Deliberately different from article to article. */
  body: string;
  /** Optional — only where a topic genuinely raises repeat questions. */
  faqs?: Faq[];
  faqHeading?: string;
  /** Commercial links shown in the sidebar. */
  shop: ResourceLink[];
  /** Onward reading shown in the sidebar. */
  next: ResourceLink[];
}

export type { Faq };
