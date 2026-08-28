import { abs } from '../../lib/seo/util';

const articleJsonLd = (path: string, headline: string, description: string, published: string): string => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${abs(path)}#article`,
  headline,
  description,
  url: abs(path),
  datePublished: published,
  author: { '@type': 'Organization', name: 'Shop Cardboard Boxes', url: abs('/') },
  publisher: { '@type': 'Organization', name: 'Shop Cardboard Boxes', url: abs('/') },
  mainEntityOfPage: abs(path),
});

export interface MetaOverride {
  title?: string;
  description?: string;
  robots?: string;
  extraJsonLd?: () => string[];
}

/**
 * Title and description rewrites, chosen from Search Console rather than from a
 * template. Every entry here is a page with real impressions and either a weak
 * click-through rate at a decent position, a missing description, or a title that
 * spends its first words on a verb instead of the term people search for.
 *
 * PROTECTED — never listed here, by instruction and by design:
 *   /refund_returns/  /terms-conditions/  /privacy-policy/
 * Their titles, descriptions, content and schema are left exactly as recovered.
 */
export const META_OVERRIDES: Record<string, MetaOverride> = {
  // ---- Homepage. 27,568 impressions, 0.2% CTR at position 10.2. The old title led
  // with the brand; "cardboard boxes" is the query that has to be first. ----
  '/': {
    title: 'Cardboard Boxes — Custom & Wholesale | Shop Cardboard Boxes',
    description: 'Custom cardboard boxes made to your size, from 100 units. Shipping, food, gift and retail packaging with free design, wholesale pricing and US-wide delivery.',
    extraJsonLd: () => [JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${abs('/')}#website`,
      url: abs('/'),
      name: 'Shop Cardboard Boxes',
      description: 'Custom and wholesale cardboard boxes, shipping cartons and printed packaging.',
      publisher: { '@id': `${abs('/')}#organization` },
    })],
  },

  // ---- Shop and informational pages that had no description at all. ----
  '/products/': {
    title: 'All Cardboard Boxes | 186 Styles, Custom Sizes, Wholesale',
    description: 'Browse every cardboard box we make — 186 styles across shipping, food, gift, retail and specialist packaging. Custom sizes from 100 units with free design.',
  },
  '/about-us/': {
    title: 'About Shop Cardboard Boxes | Custom Packaging Manufacturer',
    description: 'Who we are, how we make custom cardboard boxes, and what to expect from a quote — board options, free design support and 8–10 day production.',
  },
  '/contact-us/': {
    title: 'Contact Shop Cardboard Boxes | Quotes & Packaging Advice',
    description: 'Talk to a packaging specialist about custom cardboard boxes. Send dimensions and a quantity for pricing, or call +1 (503) 358-0443.',
  },
  '/category/information/': {
    title: 'Cardboard Packaging Articles | Shop Cardboard Boxes',
    description: 'Articles on cardboard box options, corrugated packaging design and choosing the right box for ecommerce, retail and food businesses.',
  },
  '/thank-you/': {
    title: 'Thank You — We Have Your Enquiry | Shop Cardboard Boxes',
    description: 'Your packaging enquiry has reached our team. Expect a reply with pricing and board options, usually within one working day.',
  },

  // ---- Priority product pages. Ordered by impressions. ----
  '/product/cardboard-sandwich-boxes/': {
    title: 'Cardboard Sandwich Boxes | Food-Grade, Custom Printed',
    description: 'Food-grade sandwich boxes with grease-resistant board, sized to your wrap or baguette. Window and lid options, printed with your branding, from 100 units.',
  },
  '/product/cardboard-photo-frames-packaging/': {
    title: 'Cardboard Photo Frame Packaging | Corner Protection, Custom Sizes',
    description: 'Packaging built around the frame: corner protection and an insert that holds it still, so glass arrives intact. Made to your frame size from 100 units.',
  },
  '/product/cardboard-gift-hamper-boxes/': {
    title: 'Cardboard Gift Hamper Boxes | Custom Sizes, Wholesale',
    description: 'Deep hamper boxes with lift-off lids, sized to your basket and printed inside and out. Inserts and window options available. Custom made from 100 units.',
  },
  '/product/cardboard-document-mailers/': {
    title: 'Cardboard Document Mailers | Flat, Rigid, Custom Sizes',
    description: 'Rigid mailers that keep certificates, prints and contracts flat in transit, with corner protection and inserts. Made to your document size from 100 units.',
  },
  '/product/cardboard-poster-shipping-tubes/': {
    title: 'Cardboard Poster Shipping Tubes | Any Length, Wholesale',
    description: 'Rigid tubes with end caps for posters, prints and drawings. Any length and internal diameter, printed or plain, custom made from 100 units.',
  },
  '/product/cardboard-bulk-shipping-trays/': {
    title: 'Cardboard Bulk Shipping Trays | Stackable, Pallet-Ready',
    description: 'Open trays that stack on a pallet without crushing the layer beneath. Board grade chosen for your gross weight and sized to your pallet footprint.',
  },
  '/product/cardboard-biscuit-packaging-boxes/': {
    title: 'Cardboard Biscuit Packaging Boxes | Custom Printed, Wholesale',
    description: 'Biscuit boxes sized to your count per pack, with window and lid options and corner protection for stacking. Printed with your branding from 100 units.',
  },
  '/product/round-cardboard-boxes/': {
    title: 'Round Cardboard Boxes With Lids | Custom Sizes, Wholesale',
    description: 'Round cardboard boxes in every diameter, with lift-off lids and printing inside and out. Extra large sizes available. Custom made from 100 units.',
  },
  '/product/cardboard-shoe-boxes/': {
    title: 'Cardboard Shoe Boxes With Lids | Custom Sizes, Wholesale',
    description: 'Sturdy cardboard shoe boxes with lift-off lids, sized to your footwear. Stackable, printable and made to order at wholesale prices.',
  },
  '/product/corrugated-cardboard-boxes/': {
    title: 'Corrugated Cardboard Boxes | Single to Triple Wall, Bulk',
    description: 'Corrugated boxes in 32 to 90+ ECT board — single, double and triple wall. Any size, plain or printed, bought in bulk with free US shipping.',
  },
  '/product/cardboard-corrugated-pallet-boxes/': {
    title: 'Corrugated Pallet Boxes | Heavy Duty Bulk Containers',
    description: 'Double and triple wall corrugated pallet boxes on standard pallet footprints. Built for bulk, industrial and export freight. Custom sizes available.',
  },
  '/product/cardboard-insulated-cold-boxes/': {
    title: 'Insulated Shipping Boxes | Cold Chain Cardboard Packaging',
    description: 'Insulated cardboard cold boxes that hold temperature through a two to three day shipping window. Sized around your product and coolant.',
  },
  '/product/single-cardboard-boxes/': {
    title: 'Single Cardboard Boxes | Buy Individual Shipping Boxes',
    description: 'Buy cardboard boxes as singles rather than by the pallet. Individual shipping boxes in small, medium and large, with custom sizes on request.',
  },
  '/product/cardboard-box-inserts/': {
    title: 'Cardboard Box Inserts & Dividers | Made to Your Product',
    description: 'Die-cut cardboard inserts, dividers and partitions cut to your product dimensions. Stops movement in transit without extra void fill.',
  },
  '/product/decorative-cardboard-boxes/': {
    title: 'Decorative Cardboard Boxes | Printed Storage & Gift Boxes',
    description: 'Decorative cardboard boxes for storage, display and gifting, printed inside and out. Lidded, patterned and custom sizes from 100 units.',
  },
  '/product/cardboard-divider-packaging/': {
    title: 'Cardboard Dividers & Divider Packaging | Custom Cell Sizes',
    description: 'Interlocking cardboard dividers that turn one box into protected cells for bottles, glassware and multipacks. Cell sizes cut to your product.',
  },
  '/product/pink-cardboard-boxes/': {
    title: 'Pink Cardboard Boxes | Pink Shipping & Packaging Boxes',
    description: 'Pink cardboard boxes for ecommerce, beauty and gifting — printed or dyed board in mailer, shipping and lidded formats. Custom sizes available.',
  },
  '/product/large-cardboard-boxes/': {
    title: 'Large Cardboard Boxes | Extra Large Moving & Storage Boxes',
    description: 'Large and extra large cardboard boxes for moving, storage and bulk shipping. Double wall board for heavy loads, in stock sizes or made to measure.',
  },
  '/product/colored-cardboard-boxes/': {
    title: 'Colored Cardboard Boxes | Coloured Shipping & Gift Boxes',
    description: 'Coloured cardboard boxes in pink, black, white, brown and full-colour print. Mailer, shipping and lidded formats, custom sized from 100 units.',
  },
  '/product/rectangle-cardboard-boxes/': {
    title: 'Rectangle Cardboard Boxes | Rectangular Boxes, Any Size',
    description: 'Rectangular cardboard boxes cut to your exact length, width and height. The most space-efficient shape for mixed loads and shelf stacking.',
  },
  '/product/4x4-cardboard-boxes/': {
    title: '4x4 Cardboard Boxes | 4x4x4 Small Square Shipping Boxes',
    description: 'Small 4x4 cardboard boxes in single and double wall board. Our most requested fixed size, sold plain or printed and available in bulk.',
  },
  '/product/cardboard-pizza-boxes/': {
    title: 'Cardboard Pizza Boxes | Vented, Printed, Bulk Wholesale',
    description: 'Corrugated pizza boxes with vented lids and grease-resistant board, from 8 to 18 inch. Plain or printed with your logo, bought in bulk.',
  },
  '/product/cardboard-boxes-with-lid/': {
    title: 'Cardboard Boxes With Lids | Lift-Off & Hinged Lid Boxes',
    description: 'Cardboard boxes with lids in lift-off, hinged and magnetic styles. Built to reopen repeatedly, in any size, plain or fully printed.',
  },
  '/product/blank-cardboard-boxes/': {
    title: 'Blank Cardboard Boxes | Unprinted Plain Boxes in Bulk',
    description: 'Plain unprinted cardboard boxes for resellers and fulfilment. Kraft or white board in every size, ready for your own labels. Bulk pricing.',
  },
  '/product/cardboard-vegetable-packaging-boxes/': {
    title: 'Vegetable & Produce Boxes | Vented Cardboard Packaging',
    description: 'Ventilated cardboard produce boxes for vegetables and fresh crops. Die-cut airflow, hand holes and stackable on a pallet. Wholesale pricing.',
  },
  '/product/cardboard-boxes-for-bottles/': {
    title: 'Cardboard Bottle Boxes | Fitted Dividers for 3, 6 or 12',
    description: 'Bottle boxes with corrugated dividers that hold each neck and base separately. Configurations for 3, 6 and 12 bottles, or built to your range.',
  },
  '/product/cardboard-bakery-boxes/': {
    title: 'Bakery Boxes Wholesale | Cake, Pastry & Cupcake Boxes',
    description: 'Food-grade bakery boxes for cakes, pastries and cupcakes, with window and insert options. Printed with your branding, bought in bulk.',
  },
  '/product/folding-cardboard-boxes/': {
    title: 'Folding Cardboard Boxes | Flat-Pack Folding Cartons',
    description: 'Folding cardboard boxes that ship flat and assemble in seconds. Tuck-end, crash-lock and mailer styles in any size, plain or printed.',
  },
  '/product/double-wall-cardboard-boxes/': {
    title: 'Double Wall Cardboard Boxes | 48 ECT, 30–65 lb Loads',
    description: 'Double wall corrugated boxes in 48 ECT BC-flute board for palletised freight and heavy goods. Any size, bought in bulk with free US shipping.',
  },
  '/product/triple-wall-corrugated-cardboard-boxes/': {
    title: 'Triple Wall Boxes | Heavy Duty Corrugated, 90+ ECT',
    description: 'Triple wall corrugated boxes for machinery, industrial parts and export freight. Carries 65–300 lb, lighter and cheaper than a timber crate.',
  },
  '/product/cardboard-sleeve-packaging/': {
    title: 'Cardboard Sleeves | Printed Sleeve Packaging, Any Size',
    description: 'Printed cardboard sleeves that slide over a plain inner tray — the cheapest way to run seasonal or multi-SKU artwork without retooling.',
  },
  '/product/cardboard-boxes-with-holes/': {
    title: 'Cardboard Boxes With Holes | Vented & Hand Hole Boxes',
    description: 'Cardboard boxes with die-cut holes for ventilation and carrying. Used for produce, livestock transport and anything that needs airflow.',
  },
  '/product/hexagon-cardboard-boxes/': {
    title: 'Hexagon Cardboard Boxes | Hexagonal Gift & Hamper Boxes',
    description: 'Hexagon cardboard boxes with lift-off lids — distinctive on a shelf and, unlike round boxes, they still stack efficiently on a pallet.',
  },
  '/product/cardboard-ring-boxes/': {
    title: 'Cardboard Ring Boxes | Small Jewellery Boxes, Wholesale',
    description: 'Small cardboard ring and jewellery boxes with foam or card inserts. Rigid and folding styles, printed or plain, from 100 units.',
  },
  '/product/cardboard-liquor-gift-boxes/': {
    title: 'Liquor Gift Boxes | Cardboard Bottle Presentation Boxes',
    description: 'Rigid and folding liquor gift boxes sized to spirit and wine bottles, with fitted inserts and premium print finishes. Wholesale pricing.',
  },
  '/product/tiny-cardboard-boxes/': {
    title: 'Tiny Cardboard Boxes | Mini Boxes for Samples & Jewellery',
    description: 'Tiny cardboard boxes under 4 x 4 x 2 inches for samples, jewellery, USB drives and single cosmetics. Custom sizes from 100 units.',
  },
  '/product/cardboard-counter-display-units/': {
    title: 'Counter Display Units | Cardboard CDUs for Retail Tills',
    description: 'Printed cardboard counter display units for till-point and impulse sales. Ship flat, assemble in store, and stay upright when half empty.',
  },
  '/product/cardboard-appliance-packaging-boxes/': {
    title: 'Appliance Boxes | Heavy Duty Cardboard Appliance Packaging',
    description: 'Double and triple wall appliance boxes with fitted corner protection for white goods and small equipment. Built to your product dimensions.',
  },
  '/product/cardboard-fruit-packaging-boxes/': {
    title: 'Fruit Packaging Boxes | Vented Cardboard Produce Trays',
    description: 'Ventilated fruit packaging boxes and trays that stack on a pallet without crushing. Die-cut airflow and hand holes, wholesale quantities.',
  },
  '/product/cardboard-cylindrical-boxes/': {
    title: 'Cylindrical Cardboard Boxes | Circular Tube Packaging',
    description: 'Cylindrical cardboard boxes and circular tubes with fitted end caps, for candles, cosmetics, confectionery and rolled goods. Any diameter.',
  },
  '/product/cardboard-gift-boxes/': {
    title: 'Cardboard Gift Boxes | Printed & Rigid Gift Packaging',
    description: 'Cardboard gift boxes in rigid, magnetic and folding styles with foil, matte and spot UV finishes. Free design support, from 100 units.',
  },
  '/product/cardboard-soap-boxes/': {
    title: 'Soap Boxes Wholesale | Custom Printed Cardboard Sleeves',
    description: 'Cardboard soap boxes and sleeves in kraft, white and printed board. Sized to your bar, with window options. Wholesale from 100 units.',
  },
  '/product/foldable-cardboard-boxes/': {
    title: 'Foldable Cardboard Boxes | Collapsible Flat-Pack Boxes',
    description: 'Foldable cardboard boxes that collapse flat for storage and reassemble without tape. Useful where storage space costs more than the box.',
  },
  '/product/small-cardboard-boxes/': {
    title: 'Small Cardboard Boxes | 4x4 to 8x6, Plain or Printed',
    description: 'Small cardboard boxes from 4 x 4 x 4 to 8 x 6 x 4 inches for single-item ecommerce, samples and small goods. Bulk pricing, custom sizes.',
  },
  '/product/black-cardboard-boxes/': {
    title: 'Black Cardboard Boxes | Matte Black Gift & Mailer Boxes',
    description: 'Black cardboard boxes in matte and gloss finishes, from rigid gift boxes to printed mailers. Foil and spot UV work particularly well on black.',
  },
  '/product/lunch-cardboard-boxes/': {
    title: 'Cardboard Lunch Boxes | Catering & Packed Lunch Boxes',
    description: 'Food-grade cardboard lunch boxes for catering, events and meal deals. Vented, compartmented and printed options, bought in bulk.',
  },
  '/product/cardboard-boxes-with-window/': {
    title: 'Cardboard Boxes With Windows | Clear PET or Open Cut-Out',
    description: 'Window boxes with clear PET film or open die-cut apertures, so the product shows without moving. Any size, printed to your artwork.',
  },
  '/product/medium-cardboard-boxes/': {
    title: 'Medium Cardboard Boxes | 10x8x6 to 14x12x10 Shipping',
    description: 'Medium cardboard boxes from 10 x 8 x 6 to 14 x 12 x 10 inches — the most common ecommerce band. Single or double wall, bulk pricing.',
  },
  '/product/cardboard-ornament-boxes/': {
    title: 'Cardboard Ornament Boxes | Compartment Storage for Baubles',
    description: 'Ornament boxes with fitted cardboard compartments that protect fragile decorations year after year. Custom cell sizes and lidded formats.',
  },
  '/product/cardboard-meat-packaging-boxes/': {
    title: 'Meat Packaging Boxes | Leak-Resistant Cardboard, Cold Chain',
    description: 'Food-grade meat packaging boxes with moisture barriers and insulated liner options for chilled and frozen distribution. Wholesale quantities.',
  },
  '/product/luxury-cardboard-boxes/': {
    title: 'Luxury Cardboard Boxes | Rigid, Magnetic & Foil Finished',
    description: 'Rigid luxury cardboard boxes with magnetic closures, foil stamping and soft-touch lamination. Built on a chipboard frame and wrapped to order.',
  },
  '/product/cardboard-storage-boxes/': {
    title: 'Cardboard Storage Boxes With Lids | Stackable, Any Size',
    description: 'Lidded cardboard storage boxes built to reopen repeatedly and stack without crushing. Heavier board than a transit box, in any dimension.',
  },
  '/product/cube-cardboard-boxes/': {
    title: 'Cube Cardboard Boxes | Square Boxes, 4x4x4 to 18x18x18',
    description: 'Cube cardboard boxes from 4 to 18 inches. The strongest geometry for a given board grade, and the easiest shape to stack on a pallet.',
  },
  '/product/cardboard-shelf-ready-packaging/': {
    title: 'Shelf Ready Packaging | Retail-Ready Cardboard Cases',
    description: 'Shelf-ready cases with perforated tear strips that open into a printed display tray in one movement. Built to your retailer specification.',
  },
  '/product/cardboard-rigid-drawer-boxes/': {
    title: 'Rigid Drawer Boxes | Sliding Cardboard Presentation Boxes',
    description: 'Rigid drawer boxes with a wrapped chipboard frame and a sliding inner tray, for premium retail, jewellery and technology packaging.',
  },
  '/product/cardboard-cosmetic-packaging/': {
    title: 'Cosmetic Packaging Boxes | Custom Printed Cardboard Cartons',
    description: 'Cardboard cosmetic packaging for serums, creams and colour ranges. Small-format cartons with soft-touch, foil and spot UV finishes.',
  },
  '/product/cardboard-food-packaging/': {
    title: 'Cardboard Food Packaging | Food-Grade Boxes & Coatings',
    description: 'Food-grade cardboard packaging with grease-resistant coatings, vented lids and cold-chain liners. Printed with food-safe inks, in bulk.',
  },
  '/product/cardboard-magazine-storage-boxes/': {
    title: 'Magazine Storage Boxes | Cardboard Magazine Files',
    description: 'Cardboard magazine files and storage boxes that hold their shape on a shelf. Open-front and lidded formats, plain or printed.',
  },
  '/product/cardboard-muffin-boxes/': {
    title: 'Muffin Boxes | Cardboard Boxes With Muffin Inserts',
    description: 'Muffin and cupcake boxes with fitted cardboard inserts so nothing tips in transit. Window options and food-grade board, wholesale pricing.',
  },
  '/product/cardboard-mailing-boxes/': {
    title: 'Cardboard Mailing Boxes | Self-Seal Mailers, No Tape',
    description: 'Crash-lock and self-sealing cardboard mailing boxes that pack in one motion. Faster on a packing bench than a taped carton, and no tape cost.',
  },
  '/product/custom-cardboard-shipping-boxes/': {
    title: 'Custom Shipping Boxes | Cardboard Cartons, Your Size',
    description: 'Custom cardboard shipping boxes cut to your internal dimensions, so you stop paying dimensional weight on empty space. From 100 units.',
  },

  // ---- Legacy blog posts. Real content, but no description, an over-long title and
  // no Article markup. Dates are taken from the bylines already on the pages. ----
  '/from-round-to-decorative-your-complete-guide-to-cardboard-box-options/': {
    title: 'Cardboard Box Options: Round, Decorative & Specialty Shapes',
    description: 'A tour of the cardboard box shapes and styles available beyond the plain square carton — round, decorative, rigid and window formats, and what each one suits.',
    extraJsonLd: () => [articleJsonLd(
      '/from-round-to-decorative-your-complete-guide-to-cardboard-box-options/',
      'From Round to Decorative: Your Complete Guide to Cardboard Box Options',
      'A guide to the cardboard box shapes and styles available beyond the plain square carton.',
      '2025-12-30',
    )],
  },
  '/key-features-of-using-corrugated-cardboard-in-modern-packaging-design/': {
    title: 'Corrugated Cardboard in Packaging Design | Key Features',
    description: 'What corrugated board brings to packaging design — strength for its weight, printability, recyclability, and where its limits show in retail applications.',
    extraJsonLd: () => [articleJsonLd(
      '/key-features-of-using-corrugated-cardboard-in-modern-packaging-design/',
      'Key Features of Using Corrugated Cardboard in Modern Packaging Design',
      'What corrugated board brings to packaging design, and where its limits show.',
      '2025-12-09',
    )],
  },
  '/why-small-cardboard-boxes-are-essential-for-e-commerce-success/': {
    title: 'Why Small Cardboard Boxes Matter for Ecommerce',
    description: 'Why box size drives ecommerce shipping cost more than board price does, and how right-sizing cuts dimensional weight charges, void fill and damage rates.',
    extraJsonLd: () => [articleJsonLd(
      '/why-small-cardboard-boxes-are-essential-for-e-commerce-success/',
      'Why Small Cardboard Boxes Are Essential for E-commerce Success',
      'Why box size drives ecommerce shipping cost more than board price does.',
      '2025-11-18',
    )],
  },
  // The author archive lists the same three articles as /category/information/ and
  // exposes an email address in its URL. It has no clicks and no impressions in twelve
  // months, so it is removed from the index rather than left as a thin duplicate.
  '/author/shanimazhar82gmail-com/': {
    title: 'Articles by the Shop Cardboard Boxes team',
    description: 'Packaging articles published by the Shop Cardboard Boxes team. The full list lives in our articles archive.',
    robots: 'noindex, follow',
  },

  // ---- Two pairs of product pages shipped with a description copied from the wrong
  // product. Both are rewritten to describe what the page actually sells. ----
  '/product/cardboard-pop-up-gift-boxes/': {
    description: 'Flat-packed pop-up gift boxes that spring into shape without assembly. Cheaper to store and ship than rigid boxes, printed inside and out.',
  },
  '/product/cardboard-multi-compartment-boxes/': {
    description: 'Multi-compartment cardboard boxes with interlocking dividers that turn one box into protected cells. Cell sizes cut to your product dimensions.',
  },
};
