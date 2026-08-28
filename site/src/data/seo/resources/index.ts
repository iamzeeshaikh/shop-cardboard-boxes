import type { Resource } from './types';
import { boxSizes, howToMeasure, fluteTypes, strengthGuide, styles } from './specification';
import { wallComparison, chooseShippingBox, heavyProducts, fragileProducts, reduceCosts } from './shipping';
import { materials, printing, inserts, lids } from './design';
import { ecommerce, foodGuide, retail, recyclable } from './industry';

export const RESOURCES: Resource[] = [
  boxSizes,
  howToMeasure,
  strengthGuide,
  fluteTypes,
  wallComparison,
  styles,
  materials,
  chooseShippingBox,
  reduceCosts,
  inserts,
  fragileProducts,
  heavyProducts,
  printing,
  lids,
  ecommerce,
  foodGuide,
  retail,
  recyclable,
];

export const resourceBySlug = new Map(RESOURCES.map((resource) => [resource.slug, resource]));

export const RESOURCE_TOPICS = [
  'Specification',
  'Materials',
  'Shipping',
  'Design and print',
  'By industry',
  'Sustainability',
] as const;

export type { Resource };
