export interface LinkRef { path: string; label: string }

export interface ProductExtra {
  /** Replaces the generic "keep looking" sentence with something page-specific. */
  note?: string;
  related?: LinkRef[];
  resources?: LinkRef[];
}

/**
 * Guides offered by default on every product in a collection. A product with its own
 * entry in PRODUCT_EXTRAS overrides this, so the highest-traffic pages get links
 * chosen for them rather than for their category.
 */
export const RESOURCE_LINKS_BY_CATEGORY: Record<string, LinkRef[]> = {
  'cardboard-boxes-by-material-strength': [
    { path: '/resources/corrugated-box-strength-guide/', label: 'ECT and Mullen ratings explained' },
    { path: '/resources/single-wall-vs-double-wall/', label: 'Single, double and triple wall compared' },
    { path: '/resources/cardboard-flute-types/', label: 'Flute types and what each one cushions' },
  ],
  'cardboard-boxes-by-size-and-shape': [
    { path: '/resources/how-to-measure-a-cardboard-box/', label: 'How to measure a cardboard box' },
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Choosing a box size ladder' },
    { path: '/resources/box-styles-explained/', label: 'Box styles: RSC, mailer, rigid and tuck-end' },
  ],
  'cardboard-boxes-by-functionality': [
    { path: '/resources/custom-box-printing-methods/', label: 'Custom box printing methods compared' },
    { path: '/resources/cardboard-packaging-materials/', label: 'Cardboard, kraft and SBS materials' },
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Specifying inserts and dividers' },
  ],
  'cardboard-boxes-for-specific-uses': [
    { path: '/resources/cardboard-boxes-with-lids-guide/', label: 'Lid and closure styles compared' },
    { path: '/resources/box-styles-explained/', label: 'The structural box styles explained' },
    { path: '/resources/ecommerce-packaging-guide/', label: 'Packaging for ecommerce orders' },
  ],
  'cosmetic-and-gift-cardboard-boxes': [
    { path: '/resources/retail-packaging-guide/', label: 'Retail and shelf packaging guide' },
    { path: '/resources/custom-box-printing-methods/', label: 'Print finishes and what they cost' },
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Inserts for gift and multi-item sets' },
  ],
  'food-related-cardboard-boxes': [
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging: grease, heat and cold' },
    { path: '/resources/recyclable-cardboard-packaging/', label: 'Recyclable and compostable options' },
    { path: '/resources/cardboard-packaging-materials/', label: 'Food-grade board and coatings' },
  ],
  'packaging-for-specific-items': [
    { path: '/resources/cardboard-box-inserts-guide/', label: 'How fitted inserts are specified' },
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
  ],
};

const SIZE = '/product-category/cardboard-boxes-by-size-and-shape/';
const STRENGTH = '/product-category/cardboard-boxes-by-material-strength/';
const SHIPPING = '/product-category/cardboard-shipping-boxes/';
const RETAIL = '/product-category/retail-and-display-packaging/';
const WHOLESALE = '/product-category/wholesale-cardboard-boxes/';
const GIFT = '/product-category/cosmetic-and-gift-cardboard-boxes/';
const FOOD = '/product-category/food-related-cardboard-boxes/';
const USES = '/product-category/cardboard-boxes-for-specific-uses/';

/**
 * Page-specific onward links for the products carrying the most search demand. These
 * exist so the highest-impression pages route visitors to a genuinely adjacent option
 * rather than to whatever WooCommerce picked as "related products".
 */
export const PRODUCT_EXTRAS: Record<string, ProductExtra> = {
  '/product/round-cardboard-boxes/': {
    note: 'Round boxes are our most requested shape. If you need the same look with better pallet efficiency, a hexagon is usually the answer; if you need a taller profile, look at cylindrical tubes.',
    related: [
      { path: '/product/hexagon-cardboard-boxes/', label: 'Hexagon cardboard boxes' },
      { path: '/product/cardboard-cylindrical-boxes/', label: 'Cylindrical boxes and tubes' },
      { path: '/product/cardboard-boxes-with-lid/', label: 'Boxes with lift-off lids' },
      { path: SIZE, label: 'All shapes and sizes' },
    ],
    resources: [
      { path: '/resources/how-to-measure-a-cardboard-box/', label: 'Measuring a round box: diameter and height' },
      { path: '/resources/cardboard-boxes-with-lids-guide/', label: 'Lid styles for round and rigid boxes' },
      { path: '/resources/custom-box-printing-methods/', label: 'Printing on a curved surface' },
    ],
  },
  '/product/cardboard-shoe-boxes/': {
    note: 'Shoe boxes get opened repeatedly, so the lid style matters more than the board grade. These are the closest alternatives if you need a different closure or a window.',
    related: [
      { path: '/product/cardboard-storage-boxes/', label: 'Lidded storage boxes' },
      { path: '/product/cardboard-boxes-with-lid/', label: 'All boxes with lids' },
      { path: '/product/cardboard-boxes-with-window/', label: 'Window boxes' },
      { path: USES, label: 'Boxes for specific uses' },
    ],
  },
  '/product/corrugated-cardboard-boxes/': {
    note: 'Corrugated is a board type rather than a single product. Which wall count you need depends on the weight going in and how high the boxes stack.',
    related: [
      { path: '/product/double-wall-cardboard-boxes/', label: 'Double wall boxes' },
      { path: '/product/triple-wall-corrugated-cardboard-boxes/', label: 'Triple wall boxes' },
      { path: SHIPPING, label: 'Shipping and mailing boxes' },
      { path: WHOLESALE, label: 'Bulk and wholesale pricing' },
    ],
  },
  '/product/single-cardboard-boxes/': {
    note: 'Buying singles suits occasional senders. If you ship regularly, the same box in a bulk order costs considerably less per piece.',
    related: [
      { path: WHOLESALE, label: 'Buy the same boxes in bulk' },
      { path: '/product/custom-cardboard-shipping-boxes/', label: 'Custom shipping boxes' },
      { path: '/product/cardboard-mailing-boxes/', label: 'Self-seal mailing boxes' },
      { path: SHIPPING, label: 'All shipping boxes' },
    ],
  },
  '/product/cardboard-box-inserts/': {
    note: 'Inserts and dividers solve the same problem from different directions: an insert holds one product, a divider grid holds many.',
    related: [
      { path: '/product/cardboard-divider-packaging/', label: 'Divider packaging' },
      { path: '/product/cardboard-partitioned-insert-boxes/', label: 'Partitioned insert boxes' },
      { path: '/product/cardboard-multi-compartment-boxes/', label: 'Multi-compartment boxes' },
      { path: '/product/cardboard-boxes-for-bottles/', label: 'Bottle packaging with dividers' },
    ],
    resources: [
      { path: '/resources/cardboard-box-inserts-guide/', label: 'How insert cell sizes are calculated' },
      { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
    ],
  },
  '/product/cardboard-corrugated-pallet-boxes/': {
    related: [
      { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Heavy duty shipping crates' },
      { path: '/product/cardboard-bulk-shipping-trays/', label: 'Bulk shipping trays' },
      { path: '/product/triple-wall-cardboard-boxes/', label: 'Triple wall boxes' },
      { path: SHIPPING, label: 'Shipping and freight packaging' },
    ],
    resources: [
      { path: '/resources/boxes-for-heavy-products/', label: 'Choosing boxes for heavy products' },
      { path: '/resources/corrugated-box-strength-guide/', label: 'ECT ratings and stacking strength' },
    ],
  },
  '/product/pink-cardboard-boxes/': {
    note: 'Colour is achieved either with dyed board or with full-coverage print. Which one suits you depends on whether the inside of the box needs to match.',
    related: [
      { path: '/product/colored-cardboard-boxes/', label: 'All coloured cardboard boxes' },
      { path: '/product/black-cardboard-boxes/', label: 'Black boxes' },
      { path: '/product/white-cardboard-boxes/', label: 'White boxes' },
      { path: '/product/cardboard-mailing-boxes/', label: 'Coloured mailers' },
    ],
  },
  '/product/large-cardboard-boxes/': {
    note: 'Above about 24 inches, the limit stops being the board and starts being what one person can lift. Handles and double wall board usually enter the conversation together.',
    related: [
      { path: '/product/medium-cardboard-boxes/', label: 'Medium boxes' },
      { path: '/product/double-wall-cardboard-boxes/', label: 'Double wall for heavy loads' },
      { path: '/product/cardboard-boxes-with-handle/', label: 'Boxes with handles' },
      { path: SIZE, label: 'The full size ladder' },
    ],
  },
  '/product/cardboard-pizza-boxes/': {
    related: [
      { path: '/product/cardboard-burger-boxes/', label: 'Burger boxes' },
      { path: '/product/cardboard-takeout-box/', label: 'Takeout boxes' },
      { path: '/product/cardboard-catering-trays/', label: 'Catering trays' },
      { path: FOOD, label: 'All food packaging' },
    ],
  },
  '/product/cardboard-boxes-with-lid/': {
    related: [
      { path: '/product/cardboard-shoe-boxes/', label: 'Shoe boxes' },
      { path: '/product/cardboard-storage-boxes/', label: 'Storage boxes' },
      { path: '/product/cardboard-rigid-lid-base-boxes/', label: 'Rigid lid and base boxes' },
      { path: '/product/cardboard-luxury-magnet-boxes/', label: 'Magnetic closure boxes' },
    ],
    resources: [{ path: '/resources/cardboard-boxes-with-lids-guide/', label: 'Every lid style, compared on cost and reuse' }],
  },
  '/product/cardboard-divider-packaging/': {
    related: [
      { path: '/product/cardboard-box-inserts/', label: 'Box inserts' },
      { path: '/product/cardboard-partitioned-insert-boxes/', label: 'Partitioned boxes' },
      { path: '/product/cardboard-boxes-for-bottles/', label: 'Bottle dividers' },
      { path: '/product/cardboard-multi-compartment-boxes/', label: 'Multi-compartment boxes' },
    ],
  },
  '/product/decorative-cardboard-boxes/': {
    related: [
      { path: '/product/cardboard-storage-boxes/', label: 'Storage boxes' },
      { path: '/product/cardboard-gift-boxes/', label: 'Gift boxes' },
      { path: '/product/luxury-cardboard-boxes/', label: 'Luxury rigid boxes' },
      { path: GIFT, label: 'Cosmetic and gift packaging' },
    ],
  },
  '/product/cardboard-insulated-cold-boxes/': {
    related: [
      { path: '/product/cardboard-thermal-food-boxes/', label: 'Thermal food boxes' },
      { path: '/product/cardboard-frozen-food-boxes/', label: 'Frozen food boxes' },
      { path: '/product/cardboard-seafood-packaging-boxes/', label: 'Seafood packaging' },
      { path: STRENGTH, label: 'Specialist board grades' },
    ],
  },
  '/product/cardboard-counter-display-units/': {
    related: [
      { path: '/product/cardboard-pop-display-boxes/', label: 'POP display boxes' },
      { path: '/product/cardboard-shelf-ready-packaging/', label: 'Shelf ready packaging' },
      { path: '/product/cardboard-retail-display-trays/', label: 'Retail display trays' },
      { path: RETAIL, label: 'All retail and display packaging' },
    ],
  },
  '/product/cardboard-sleeve-packaging/': {
    note: 'A sleeve is the cheapest way to version artwork across a range, because only the sleeve changes and the inner tray stays the same.',
    related: [
      { path: '/product/cardboard-perfume-sleeve-boxes/', label: 'Perfume sleeve boxes' },
      { path: '/product/cardboard-soap-packaging/', label: 'Soap sleeves' },
      { path: '/product/cardboard-book-sleeve-packaging/', label: 'Book sleeve packaging' },
      { path: RETAIL, label: 'Retail packaging' },
    ],
  },
  '/product/rectangle-cardboard-boxes/': {
    related: [
      { path: '/product/cube-cardboard-boxes/', label: 'Cube boxes' },
      { path: '/product/custom-size-cardboard-boxes/', label: 'Custom size boxes' },
      { path: '/product/medium-cardboard-boxes/', label: 'Medium boxes' },
      { path: SIZE, label: 'All sizes and shapes' },
    ],
  },
  '/product/4x4-cardboard-boxes/': {
    related: [
      { path: '/product/small-cardboard-boxes/', label: 'Small boxes' },
      { path: '/product/cube-cardboard-boxes/', label: 'Cube boxes' },
      { path: '/product/tiny-cardboard-boxes/', label: 'Tiny boxes' },
      { path: WHOLESALE, label: 'Bulk pricing on small boxes' },
    ],
  },
  '/product/cardboard-boxes-for-bottles/': {
    related: [
      { path: '/product/cardboard-liquor-gift-boxes/', label: 'Liquor gift boxes' },
      { path: '/product/cardboard-juice-bottle-carriers/', label: 'Juice bottle carriers' },
      { path: '/product/cardboard-divider-packaging/', label: 'Divider packaging' },
      { path: '/product/cardboard-partitioned-insert-boxes/', label: 'Partitioned boxes' },
    ],
  },
};
