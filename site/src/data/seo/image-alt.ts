/**
 * Alt text for the images the recovered WordPress markup left with alt="".
 * Only 57 distinct files were affected. Badges and logos describe what they certify;
 * the four looping animations beside the "how it works" copy stay decorative with an
 * empty alt, because the sentence next to them already carries the meaning.
 */
export const ALT_BY_FILE: Record<string, string> = {
  // Trust and payment badges repeated in the page footer.
  'payment-image.jpeg': 'Accepted card payments: Visa, Mastercard, American Express and Discover',
  'payment-methods.png': 'Accepted payment methods for wholesale cardboard box orders',
  'payments.png': 'Card and online payment options accepted at checkout',
  'secure-icons.png': 'Secure checkout badges for encrypted online payment',
  'fedex-logo.png': 'FedEx logo — orders ship on FedEx across the United States',
  'ISO.webp': 'ISO certified packaging production badge',
  'dmca-badge-w250-2x1-01.png': 'DMCA protected badge for shopcardboardboxes.com',
  'check-mark-gree.jpg': 'Green tick confirming the enquiry was received',

  // Full-size product photography that lost its alt attribute in the migration.
  'Cardboard-Paper-Boxes-1-1024x1024.jpg': 'Plain cardboard paper boxes stacked with lids folded open',
  'Custom-Cardboard-Soap-Packaging-1-1024x1024.jpg': 'Printed cardboard soap packaging sleeves in a row',
  'Custom-Cardboard-Cosmetic-Boxes-1-1024x1024.jpg': 'Custom printed cardboard cosmetic boxes with a gloss finish',
  'Custom-Cardboard-Gift-Boxes-1-1024x1024.jpg': 'Custom cardboard gift boxes with ribbon closures',
  'Cardboard-Burger-Packaging-1-1024x1024.jpg': 'Cardboard burger clamshell packaging closed and open',
  'Brown-Cardboard-Boxes-1-1024x1024.jpg': 'Brown kraft cardboard boxes with folded top flaps',
  'Custom-Decorative-Cardboard-Packaging-1.jpg': 'Decorative cardboard boxes printed with a patterned wrap',
  'Custom-Decorative-Cardboard-Packaging-1-360x240.jpg': 'Decorative cardboard packaging shown as a product thumbnail',
  'Cardboard-Soap-Boxes-1.jpg': 'Cardboard soap boxes with a tuck-end closure',
  'Cardboard-Box-Inserts-1.jpg': 'Fitted cardboard box insert holding a product in place',
  'Cardboard-Boxes-With-Window-1.jpg': 'Cardboard box with a clear window panel showing the product inside',
  'Triple-Wall-Cardboard-Boxes-1.jpg': 'Triple wall cardboard box showing three layers of fluting at the edge',
  'Luxury-Cardboard-Boxes-1.jpg': 'Rigid luxury cardboard box with a lift-off lid',
  '2-77.jpg': 'Printed cardboard packaging shown from the front',
  '1-59.jpg': 'Cardboard box photographed on a plain background',
  '1-46.jpg': 'Cardboard packaging box with a printed lid',
};

/** Filenames whose emptiness is correct: they sit beside text that already says it. */
export const DECORATIVE_FILES = new Set([
  'boxes-gif-unscreen.gif',
  'gif-boxes.gif',
  'Offset-Press.gif',
  'Delivery-Icon-Giff.gif',
]);

/**
 * Burger thumbnails on one legacy listing page. Each one names its own variant so a
 * gallery of twenty-six boxes does not repeat a single sentence twenty-six times.
 */
const BURGER_VARIANTS: Record<string, string> = {
  'Red-Burger-Boxes-1-300x300.jpg': 'Red printed burger box',
  'Corrugated-Burger-Boxes-1-300x300.jpg': 'Corrugated burger box with a ventilated lid',
  'Tall-Burger-Boxes-1-300x300.jpg': 'Tall burger box sized for a stacked build',
  'Custom-Styrofoam-Burger-Boxes-1-300x300.jpg': 'Insulated burger clamshell box',
  'Brown-Burger-Boxes-1-300x300.jpg': 'Brown kraft burger box',
  'Burger-Parcel-Boxes-1-300x300.jpg': 'Burger parcel box closed for delivery',
  'Double-Burger-Boxes-1-300x300.jpg': 'Double burger box with a centre divider',
  'White-Burger-Boxes-1-300x300.jpg': 'White burger box with a plain finish',
  'Polystyrene-Burger-Boxes-1-300x300.jpg': 'Foam-lined burger box for hot food',
  'Cheap-Burger-Boxes-1-300x300.jpg': 'Budget burger box in plain board',
  'Printed-Burger-Boxes-1-300x300.jpg': 'Burger box printed with a full-colour design',
  'Custom-Burger-And-Chip-Boxes-1-300x300.jpg': 'Combined burger and chip box with two compartments',
  'Disposable-Burger-Boxes-1-300x300.jpg': 'Disposable burger box for takeaway service',
  'Large-Burger-Boxes-1-1-300x300.jpg': 'Large burger box for oversized patties',
  'Premium-Burger-Boxes-1-300x300.jpg': 'Premium burger box with a matte laminated finish',
  'Branded-Burger-Boxes-1-300x300.jpg': 'Burger box printed with a restaurant logo',
  'Paper-Burger-Boxes-1-300x300.jpg': 'Lightweight paper burger box',
  'Slider-Burger-Boxes-1-300x300.jpg': 'Small slider burger box',
  'Pink-Burger-Boxes-1-300x300.jpg': 'Pink burger box for a themed menu',
  'Burger-Patty-Boxes-1-300x300.jpg': 'Burger patty box for raw portions',
  'Frozen-Burger-Boxes-1-300x300.jpg': 'Freezer-grade burger box',
  'Bagasse-Burger-Boxes-1-300x300.jpg': 'Bagasse burger box made from plant fibre',
  'Cardboard-Burger-Boxes-1-300x300.jpg': 'Cardboard burger box with a tuck-in lid',
  'Takeaway-Burger-Boxes-1-300x300.jpg': 'Takeaway burger box ready for a delivery bag',
  'Clamshell-Burger-Boxes-1-300x300.jpg': 'Hinged clamshell burger box',
  'Personalised-Burger-Boxes-2-300x300.jpg': 'Personalised burger box printed to order',
  'Mini-Burger-Boxes-1-300x300.jpg': 'Mini burger box for bite-sized servings',
  'Black-Burger-Boxes-1-300x300.jpg': 'Black burger box with a matte surface',
  'Kraft-Burger-Boxes-1-300x300.jpg': 'Kraft burger box in unbleached board',
};

Object.assign(ALT_BY_FILE, BURGER_VARIANTS);
