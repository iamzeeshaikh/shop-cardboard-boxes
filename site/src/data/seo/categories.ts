import type { CategoryContent } from './types';
import { functionality, materialStrength, sizeAndShape } from './categories-core';
import { specificUses, cosmeticGift, foodRelated, specificItems } from './categories-more';
import { shipping, retailDisplay, wholesale } from './categories-new';

/** Categories that already existed as WordPress archives and are enhanced in place. */
export const EXISTING_CATEGORIES: CategoryContent[] = [
  functionality,
  materialStrength,
  sizeAndShape,
  specificUses,
  cosmeticGift,
  foodRelated,
  specificItems,
];

/** Categories added in this pass, rendered from Astro rather than from a snapshot. */
export const NEW_CATEGORIES: CategoryContent[] = [shipping, retailDisplay, wholesale];

export const ALL_CATEGORIES: CategoryContent[] = [...EXISTING_CATEGORIES, ...NEW_CATEGORIES];

export const categoryByPath = new Map(ALL_CATEGORIES.map((category) => [category.path, category]));
export const newCategoryByPath = new Map(NEW_CATEGORIES.map((category) => [category.path, category]));

/** Navigation order used by the header, footer and homepage hub links. */
export const CATEGORY_NAV: { path: string; label: string }[] = [
  { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping & Mailing' },
  { path: '/product-category/cardboard-boxes-by-material-strength/', label: 'By Strength' },
  { path: '/product-category/cardboard-boxes-by-size-and-shape/', label: 'By Size & Shape' },
  { path: '/product-category/cardboard-boxes-by-functionality/', label: 'By Function' },
  { path: '/product-category/food-related-cardboard-boxes/', label: 'Food Packaging' },
  { path: '/product-category/cosmetic-and-gift-cardboard-boxes/', label: 'Cosmetic & Gift' },
  { path: '/product-category/retail-and-display-packaging/', label: 'Retail & Display' },
  { path: '/product-category/cardboard-boxes-for-specific-uses/', label: 'Specific Uses' },
  { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale & Bulk' },
  { path: '/product-category/packaging-for-specific-items/', label: 'Specific Items' },
];
