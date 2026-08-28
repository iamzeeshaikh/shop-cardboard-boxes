import type { CategoryContent } from './types';
import { specTable, linkRow, linkCards } from '../../lib/seo/blocks';

const HOME = { name: 'Home', path: '/' };
const SHOP = { name: 'All cardboard boxes', path: '/products/' };

export const specificUses: CategoryContent = {
  path: '/product-category/cardboard-boxes-for-specific-uses/',
  title: 'Cardboard Boxes for Specific Uses | Storage, Shoes, Lids',
  description: 'Cardboard boxes built around a job: storage, shoe boxes, lidded boxes, handled carriers, window boxes, postal cartons, sleeves and counter displays.',
  crumbs: [HOME, SHOP, { name: 'Boxes for specific uses', path: '/product-category/cardboard-boxes-for-specific-uses/' }],
  intro: `<p class="scb-lede">Everything in this collection was designed around a task rather than a shape. A shoe box has to stack in a stockroom and reopen a hundred times. A handled carrier has to survive being swung. A window box has to show the product without letting it move.</p>
<p>It is the most practical part of the catalogue, and the one where a five-minute conversation usually beats browsing. If your job is on the list below, the matching product page has the detail.</p>`,
  quote: {
    heading: 'Describe the job, not the box',
    note: 'Tell us what the box has to survive — a stockroom, a courier, a shop shelf, a customer opening it weekly — and we will spec it.',
    boxType: 'Cardboard boxes for specific uses',
    buttonLabel: 'Get a recommendation',
  },
  sections: `
<section class="scb-section">
  <h2>Four jobs this collection is built for</h2>

  <h3>Storing and reopening</h3>
  <p>Boxes that get opened again and again need a closure that survives the cycle. That rules out tuck flaps and points towards a separate lid. <a href="/product/cardboard-storage-boxes/">Storage boxes</a> and <a href="/product/cardboard-shoe-boxes/">shoe boxes</a> both use lift-off or hinged lids for exactly this reason, and both are usually specified with a slightly heavier board than a single-use transit box because the wear is cumulative rather than one journey.</p>

  <h3>Carrying by hand</h3>
  <p>A <a href="/product/cardboard-boxes-with-handle/">handled box</a> puts the entire load through two small die-cut holes, so the board around the handle is reinforced and the handle is positioned to keep the box level. Get either wrong and the handle tears on the first lift. Gable boxes and <a href="/product/cardboard-tote-boxes/">tote boxes</a> solve the same problem with a folded carry top instead.</p>

  <h3>Showing the product</h3>
  <p>A <a href="/product/cardboard-boxes-with-window/">window box</a> trades structural strength for visibility — the die-cut aperture removes board from the face, so the panel around it usually needs to be heavier. <a href="/product/cardboard-sleeve-packaging/">Sleeve packaging</a> takes the opposite approach: the sleeve carries the branding and slides off, leaving a plain inner tray.</p>

  <h3>Posting and presenting</h3>
  <p><a href="/product/cardboard-postal-boxes/">Postal boxes</a> and <a href="/product/cardboard-mailing-boxes/">mailing boxes</a> are built to go through an automated sorting network without a separate outer. <a href="/product/cardboard-presentation-boxes/">Presentation boxes</a> are built for the moment after that — the opening. It is worth being honest about which one you actually need, because a box that tries to be both is usually mediocre at each.</p>
</section>

<section class="scb-section scb-tinted">
  <h2>Closure styles, and what each one costs you</h2>
  <p>Closure is the detail that most affects both cost and how the box feels. This is the shortlist we quote from.</p>
  ${specTable('Closures used across this collection', ['Closure', 'Reopens well', 'Cost', 'Typical use'], [
    ['<strong>Tuck end</strong>', 'A few times', 'Lowest', 'Retail cartons, single-use consumer packs'],
    ['<strong>Lift-off lid</strong>', 'Indefinitely', 'Medium', 'Shoe boxes, storage, gift presentation'],
    ['<strong>Hinged / clamshell</strong>', 'Indefinitely', 'Medium', 'Food service, display boxes'],
    ['<strong>Tape-sealed RSC</strong>', 'Once', 'Lowest per volume', 'Shipping and transit outers'],
    ['<strong>Magnetic</strong>', 'Indefinitely', 'Highest', 'Luxury and premium retail'],
  ])}
  <p>If you want to compare the underlying structures rather than the closures, <a href="/resources/box-styles-explained/">the box styles guide</a> covers RSC, FOL, mailer, tuck-end and rigid construction with diagrams.</p>
</section>

<section class="scb-section">
  <h2>Related collections</h2>
  <p>Several of the boxes here also appear in more specialised collections, where the surrounding products are more closely matched.</p>
  ${linkRow([
    { path: '/product-category/retail-and-display-packaging/', label: 'Retail and display packaging' },
    { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping and mailing boxes' },
    { path: '/product-category/cosmetic-and-gift-cardboard-boxes/', label: 'Cosmetic and gift boxes' },
    { path: '/resources/cardboard-boxes-with-lids-guide/', label: 'Lid styles compared' },
  ])}
</section>`,
  faqHeading: 'Practical questions about these boxes',
  ctaHeading: 'Describe the job the box has to do',
  ctaBody: 'Whether it is reopened weekly, carried by hand or shown on a shelf, the job decides the structure. Tell us the job.',
  faqs: [
    { q: 'Which boxes here survive repeated opening?', a: 'Anything with a separate lift-off lid or a hinged clamshell. Storage boxes, shoe boxes and presentation boxes are all built for repeated access. Tuck-end cartons will start to tear at the flap after a handful of cycles.' },
    { q: 'How much weight can a handled box carry?', a: 'It depends far more on how the handle is reinforced than on the board grade. A die-cut handle in plain single wall starts to tear at around 8–10 lb. With a reinforcing patch or a rope handle, the same box comfortably carries 20 lb or more.' },
    { q: 'Can a window box still be shipped on its own?', a: 'It can, but the aperture is a weak point and the film scuffs. For anything travelling on a parcel network we usually recommend the window box as the retail pack and a plain outer for transit.' },
    { q: 'Do you supply the window film, or is it an open cut-out?', a: 'Both are available. Clear PET film is standard and keeps dust out; an open die-cut aperture is cheaper, fully recyclable and common on bakery and produce boxes where airflow is wanted.' },
    { q: 'What is the difference between a postal box and a mailing box?', a: 'In practice they overlap. Postal boxes are usually sized to postal service dimension bands to keep the rate down. Mailing boxes are more often self-sealing crash-lock formats chosen for speed of packing. We size either to your carrier\'s bands on request.' },
    { q: 'Can sleeves be ordered separately from the inner tray?', a: 'Yes, and it is often the cheaper route. A plain inner tray in a single size with several printed sleeve versions lets you run seasonal or multi-SKU artwork without reprinting the structural part.' },
    { q: 'Are shoe boxes made to a standard size?', a: 'There is no universal standard — sizes vary by footwear type and by brand. Send the largest shoe you need to fit and we will build the dieline around it, allowing for tissue and any insert.' },
  ],
};

export const cosmeticGift: CategoryContent = {
  path: '/product-category/cosmetic-and-gift-cardboard-boxes/',
  title: 'Cosmetic & Gift Cardboard Boxes | Custom Printed, Wholesale',
  description: 'Rigid, magnetic and printed cardboard boxes for cosmetics, skincare, gifting and PR kits. Foil, spot UV and soft-touch finishes with free design support.',
  crumbs: [HOME, SHOP, { name: 'Cosmetic and gift boxes', path: '/product-category/cosmetic-and-gift-cardboard-boxes/' }],
  intro: `<p class="scb-lede">This is the part of the catalogue where the box is part of the product. A serum carton, a hamper, a PR send-out — the packaging is the first thing anyone photographs, and it does a job the product cannot do for itself.</p>
<p>Which means the specification conversation is different here. Board grade still matters, but finish, weight in the hand and how the lid releases matter more.</p>`,
  quote: {
    heading: 'Start a gift packaging brief',
    note: 'Share the product, the price point and whether artwork exists. We will come back with structures and finishes that suit the shelf you are aiming for.',
    boxType: 'Cosmetic and gift cardboard boxes',
    buttonLabel: 'Start my brief',
  },
  sections: `
<section class="scb-section">
  <h2>Finishes, and what each one signals</h2>
  <p>Finish is the cheapest way to move a box up a price tier, and the easiest to overdo. A rule that holds up well: pick one hero finish and let the rest of the box stay quiet.</p>
  ${specTable('Finishes available across the gift and cosmetic range', ['Finish', 'Feel', 'Cost impact', 'Reads as'], [
    ['<strong>Matte lamination</strong>', 'Smooth, non-reflective', 'Low', 'Considered, modern, clean'],
    ['<strong>Soft touch</strong>', 'Velvety, slightly grippy', 'Medium', 'Premium skincare and fragrance'],
    ['<strong>Gloss lamination</strong>', 'Reflective, wipeable', 'Low', 'Bright, colourful, mass retail'],
    ['<strong>Spot UV</strong>', 'Raised gloss over matte', 'Medium', 'Detail and craft — best on a logo only'],
    ['<strong>Foil stamping</strong>', 'Metallic, pressed', 'Higher', 'Luxury and celebration'],
    ['<strong>Embossing</strong>', 'Raised, tactile', 'Higher', 'Heritage and quality without colour'],
  ])}
  <p>Finishes are specified per surface, so a matte outer with an uncoated printed interior is entirely normal and often the most satisfying combination to open. <a href="/resources/custom-box-printing-methods/">The printing methods guide</a> covers what each process can and cannot hold.</p>
</section>

<section class="scb-section scb-tinted">
  <h2>Structures that suit gifting</h2>
  ${linkCards([
    { path: '/product/cardboard-luxury-magnet-boxes/', title: 'Magnetic closure boxes', blurb: 'A rigid box with concealed magnets in the flap. The closing action is most of what people mean by "premium packaging". Ships assembled.' },
    { path: '/product/cardboard-gift-hamper-boxes/', title: 'Hamper boxes', blurb: 'Larger rigid or corrugated boxes with inserts that hold several items in a fixed arrangement, so the arrangement survives the journey.' },
    { path: '/product/cardboard-pop-up-gift-boxes/', title: 'Pop-up gift boxes', blurb: 'Flat-packed structures that spring into shape. Cheaper to store and ship than a rigid box while still opening with some theatre.' },
    { path: '/product/cardboard-heart-shaped-boxes/', title: 'Heart-shaped boxes', blurb: 'Seasonal confectionery and gifting. A wrapped rigid construction, usually with a lift-off lid and a moulded or die-cut insert.' },
    { path: '/product/cardboard-flower-boxes/', title: 'Flower and bouquet boxes', blurb: 'Tall cylindrical or hat-box structures with a moisture-resistant liner, sized around a wrapped stem arrangement.' },
    { path: '/product/cardboard-pr-kit-boxes/', title: 'PR and influencer boxes', blurb: 'Send-out kits built for a single photographed moment: a printed inner, a fitted insert and usually a card or booklet slot.' },
  ])}
</section>

<section class="scb-section">
  <h2>Planning around seasons</h2>
  <p>Gift packaging is unusually seasonal, and lead times compress exactly when demand peaks. Production and delivery normally run 8–10 business days, but the weeks before a major retail season are the ones where that slips if artwork arrives late.</p>
  <ul>
    <li><strong>Christmas.</strong> Artwork approved by mid-September leaves room for a reprint if a proof comes back wrong. See <a href="/product/christmas-cardboard-gift-boxes/">Christmas gift boxes</a>.</li>
    <li><strong>Valentine's.</strong> Heart-shaped and confectionery formats are typically locked in early December.</li>
    <li><strong>Mother's Day and spring gifting.</strong> Flower and hamper boxes peak sharply; the insert is usually the long pole, not the box.</li>
    <li><strong>Seasonal versioning.</strong> If artwork changes but structure does not, a plain inner with printed <a href="/product/cardboard-perfume-sleeve-boxes/">sleeve packaging</a> is far cheaper than reprinting the whole box.</li>
  </ul>
  ${linkRow([
    { path: '/product-category/retail-and-display-packaging/', label: 'Retail and display packaging' },
    { path: '/product-category/cardboard-boxes-by-size-and-shape/', label: 'Rigid and shaped formats' },
    { path: '/resources/retail-packaging-guide/', label: 'Retail packaging guide' },
    { path: '/design-your-box/', label: 'Configure a gift box' },
  ])}
</section>`,
  faqHeading: 'Gift and cosmetic packaging questions',
  ctaHeading: 'Start a gift packaging brief',
  ctaBody: 'Share the product, the price point and whether artwork exists. We will suggest structures and finishes that fit the shelf you are aiming for.',
  faqs: [
    { q: 'What is the difference between a rigid box and a folding carton?', a: 'A folding carton is cut and creased from one sheet of board and folds flat. A rigid box is built on a thick chipboard frame and wrapped in printed paper, so it holds its shape permanently. Rigid feels considerably more substantial and costs several times more per unit.' },
    { q: 'Can you match a specific Pantone for our brand colour?', a: 'Yes. PMS spot colours are matched on offset and flexo runs. On digital printing we simulate the Pantone in CMYK, which gets close but is not an exact match — for a signature brand colour, offset is the safer route.' },
    { q: 'Do magnetic boxes ship flat?', a: 'No. The rigid frame cannot fold, so they arrive assembled. Budget for more inbound freight volume than a folding carton of the same finished size.' },
    { q: 'Is soft touch lamination recyclable?', a: 'Standard soft touch films complicate recycling. If recyclability is a firm requirement, an uncoated or water-based matte varnish gives a similar restrained look while keeping the box in the paper stream. We will flag the trade-off at quote stage.' },
    { q: 'What insert options work for a multi-item gift set?', a: 'Die-cut corrugated inserts are the most economical and the most recyclable. Moulded pulp suits curved products. Foam gives the tightest hold for fragile glass. Our <a href="/resources/cardboard-box-inserts-guide/">insert guide</a> compares them on cost and protection.' },
    { q: 'Can we print the inside of the box as well as the outside?', a: 'Yes, and for gift and PR packaging it is one of the highest-impact decisions available. A printed interior costs noticeably less than a second finish on the outside and is what people actually photograph.' },
    { q: 'What quantity do we need for a foil-stamped box?', a: 'Foil carries a die cost, so it starts to make sense from around 500 units. Below that, a metallic digital print or a metallic board gives a similar effect without the tooling.' },
    { q: 'How small can a cosmetic carton be?', a: 'Small enough for a single 10 ml serum vial. Below about 1 × 1 × 3 in the limits become the folding and gluing equipment rather than the design, and we would usually suggest a sleeve or a rigid mini box instead.' },
    { q: 'Do you keep our dieline on file for repeat orders?', a: 'Yes. Once a structure is approved, repeat orders reference the stored dieline, so a reorder needs only a quantity and any artwork change.' },
  ],
};

export const foodRelated: CategoryContent = {
  path: '/product-category/food-related-cardboard-boxes/',
  title: 'Food Packaging Boxes | Bakery, Pizza, Takeaway & Produce',
  description: 'Food-grade cardboard boxes for bakery, pizza, takeaway, catering, produce and frozen goods. Grease-resistant coatings, vented options and food-safe inks.',
  crumbs: [HOME, SHOP, { name: 'Food-related cardboard boxes', path: '/product-category/food-related-cardboard-boxes/' }],
  intro: `<p class="scb-lede">Food packaging has to solve problems the rest of the catalogue never meets: grease bleeding through board, steam turning a lid soggy, a cold chain that has to hold for three days, and inks that must never migrate into what is being eaten.</p>
<p>Everything in this collection is specified on food-grade board with food-safe inks as standard. What varies is the barrier, the ventilation and the temperature range — and those are the three questions worth answering before anything else.</p>`,
  quote: {
    heading: 'Tell us what goes inside',
    note: 'Hot, cold, greasy, frozen or fresh — the answer changes the board and the coating. Describe the food and we will spec it correctly.',
    boxType: 'Food-related cardboard boxes',
    buttonLabel: 'Request food packaging pricing',
  },
  sections: `
<section class="scb-section scb-tinted">
  <h2>Three questions that decide the specification</h2>
  <h3>1. Is there grease or moisture?</h3>
  <p>Untreated board absorbs fat within minutes. Anything fried, buttery or oily needs a grease-resistant barrier — a PE coating, a water-based dispersion coating or a greaseproof liner. <a href="/product/cardboard-burger-boxes/">Burger boxes</a> and <a href="/product/cardboard-pizza-boxes/">pizza boxes</a> are always specified this way; a <a href="/product/cardboard-bakery-boxes/">bakery box</a> for dry goods often does not need it at all.</p>
  <h3>2. Is it hot, cold or ambient?</h3>
  <p>Hot food produces steam, and steam trapped in a sealed box collapses both the board and the food. That is why takeaway formats are vented. At the other end, <a href="/product/cardboard-insulated-cold-boxes/">insulated cold boxes</a> and <a href="/product/cardboard-frozen-food-boxes/">frozen food boxes</a> pair a moisture barrier with an insulating liner to hold temperature through a multi-day shipping window.</p>
  <h3>3. Does it need to breathe?</h3>
  <p>Fresh produce respires and rots faster in a sealed box. <a href="/product/cardboard-vegetable-packaging-boxes/">Vegetable packaging</a> and <a href="/product/cardboard-fruit-packaging-boxes/">fruit boxes</a> use die-cut vents and hand holes that double as airflow, which is also why they stack well on a pallet without crushing.</p>
</section>

<section class="scb-section">
  <h2>Barrier options compared</h2>
  ${specTable('Coatings and liners used on food boxes', ['Barrier', 'Resists', 'Recyclable', 'Typical products'], [
    ['<strong>Uncoated food-grade board</strong>', 'Nothing — dry contact only', 'Yes', 'Bakery, confectionery, dry snacks, tea'],
    ['<strong>Water-based dispersion</strong>', 'Grease, light moisture', 'Yes, in most streams', 'Burger boxes, sandwich wedges, pastry boxes'],
    ['<strong>PE coating</strong>', 'Grease and liquid', 'Harder to recycle', 'Wet foods, salads, meal prep'],
    ['<strong>Greaseproof liner</strong>', 'Grease', 'Yes, liner separates', 'Fried food, catering trays'],
    ['<strong>Insulated liner</strong>', 'Temperature loss', 'Liner separates', 'Cold chain, frozen, seafood'],
  ])}
  <div class="scb-callout"><p><strong>Worth knowing:</strong> "food safe" and "recyclable" pull against each other. The stronger the barrier, the harder the box is to recycle. Most operators end up with a coated box for wet lines and an uncoated one for dry, rather than one compromise box for everything.</p></div>
</section>

<section class="scb-section">
  <h2>Formats by service type</h2>
  <ul>
    <li><strong>Takeaway and delivery.</strong> <a href="/product/cardboard-takeout-box/">Takeout boxes</a>, <a href="/product/cardboard-noodle-boxes/">noodle boxes</a> and <a href="/product/cardboard-salad-boxes/">salad boxes</a> — vented, stackable in a delivery bag and rigid enough to survive a moped.</li>
    <li><strong>Bakery and patisserie.</strong> <a href="/product/cardboard-muffin-boxes/">Muffin boxes</a>, <a href="/product/cardboard-macaron-boxes/">macaron boxes</a> and <a href="/product/cardboard-cupcake-carrier-boxes/">cupcake carriers</a> use fitted inserts so nothing tips in transit.</li>
    <li><strong>Catering and events.</strong> <a href="/product/cardboard-catering-trays/">Catering trays</a> and <a href="/product/lunch-cardboard-boxes/">lunch boxes</a>, sized around a portion count rather than a single item.</li>
    <li><strong>Produce and protein.</strong> <a href="/product/cardboard-meat-packaging-boxes/">Meat</a>, <a href="/product/cardboard-seafood-packaging-boxes/">seafood</a> and <a href="/product/cardboard-egg-trays/">egg trays</a>, where leak resistance and cold-chain performance decide the spec.</li>
    <li><strong>Grocery and shelf.</strong> <a href="/product/cardboard-coffee-packaging-boxes/">Coffee</a>, <a href="/product/cardboard-tea-packaging-boxes/">tea</a>, <a href="/product/cardboard-biscuit-packaging-boxes/">biscuits</a> and <a href="/product/cardboard-chocolate-packaging-boxes/">chocolate</a> — printed retail cartons where the barrier requirement is usually minimal.</li>
  </ul>
  ${linkRow([
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging box guide' },
    { path: '/product-category/retail-and-display-packaging/', label: 'Shelf-ready food displays' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Bulk and wholesale ordering' },
  ])}
</section>`,
  faqHeading: 'Food packaging questions',
  ctaHeading: 'Tell us what goes inside',
  ctaBody: 'Hot, cold, greasy, frozen or fresh — each changes the board and the coating. Describe the food and we will specify it properly.',
  faqIntro: 'Food packaging carries obligations the rest of the catalogue does not. These are the points customers check most often.',
  faqs: [
    { q: 'Are your food boxes made with food-grade board and inks?', a: 'Yes. Food-contact orders are produced on food-grade board with food-safe inks as standard, and the specification is stated on the quote so it is documented rather than assumed.' },
    { q: 'Which coating should I choose for fried food?', a: 'A water-based dispersion coating handles most fried items and keeps the box recyclable in the majority of paper streams. For heavily saturated items such as chips in their own oil, a greaseproof liner performs better and separates cleanly for recycling.' },
    { q: 'Do hot food boxes need vents?', a: 'Almost always. Without vents, steam condenses on the inside of the lid, drips back onto the food and softens the board. Vent placement matters as much as vent count — high on the side walls works better than in the lid.' },
    { q: 'How long will an insulated cold box hold temperature?', a: 'A cold box with an insulating liner and an appropriate coolant typically holds a chilled range through a two to three day shipping window. The performance depends on coolant mass and ambient temperature, so we size the coolant to your route rather than to the box.' },
    { q: 'Can I print full colour on a food box?', a: 'Yes, using food-safe inks. On coated boards print quality is close to standard retail packaging. On uncoated kraft the colours sit back noticeably, which many bakery and artisan brands choose deliberately.' },
    { q: 'Are these boxes microwave or oven safe?', a: 'Plain uncoated board is generally microwave tolerant for short reheating. PE-coated board is not oven safe. If reheating in packaging is part of your service, tell us at quote stage so we specify a board rated for it rather than assuming.' },
    { q: 'Do you supply produce boxes with hand holes?', a: 'Yes. Hand holes are standard on produce and catering formats and are usually die-cut to double as ventilation, which is why they sit high on the side wall rather than in the middle.' },
    { q: 'What is the minimum order for food packaging?', a: 'Digitally printed food boxes start at 100 units. Coated and vented formats that need a custom die are more economic from 500 units upwards, and most food service customers order in the low thousands.' },
    { q: 'Can boxes be branded per outlet or per season?', a: 'Yes. A common approach is one structural spec with several printed versions, or a plain box with a printed band. Both avoid retooling when only the artwork changes.' },
    { q: 'Are compostable options available?', a: 'Uncoated food-grade board and water-based coatings are broadly compostable in industrial facilities. Fully home-compostable claims depend on the coating and the local scheme, so we describe what the material is rather than making a blanket claim.' },
  ],
};

export const specificItems: CategoryContent = {
  path: '/product-category/packaging-for-specific-items/',
  title: 'Packaging for Specific Items | Bottle & Paper Box Packaging',
  description: 'Cardboard packaging built around a named product — bottle carriers with fitted dividers and plain paper boxes. Custom-fitted alternatives across the catalogue.',
  crumbs: [HOME, SHOP, { name: 'Packaging for specific items', path: '/product-category/packaging-for-specific-items/' }],
  intro: `<p class="scb-lede">A small, deliberately narrow collection: packaging designed around one named product rather than a size band or a board grade. Two products sit here, and both are fitted rather than general purpose.</p>`,
  quote: {
    heading: 'Need packaging fitted to one product?',
    note: 'Send the product dimensions — or the product itself — and we will build the dieline and insert around it.',
    boxType: 'Packaging for a specific item',
    buttonLabel: 'Ask for a fitted quote',
  },
  sections: `
<section class="scb-section">
  <h2>What "fitted" changes</h2>
  <p>General-purpose boxes are sized to a band and made to work by adding void fill. Fitted packaging removes the void instead. For bottles that is the difference between a box that survives a courier and one that arrives with glass in the corner — <a href="/product/cardboard-boxes-for-bottles/">bottle packaging</a> uses corrugated dividers that hold each neck and base independently, so bottles never touch each other or the outer wall.</p>
  <p>The trade-off is that a fitted box only fits one thing. If your range spans several bottle heights, it is usually cheaper to run one outer with two insert variants than two complete boxes.</p>
</section>

<section class="scb-section scb-tinted">
  <h2>Fitted packaging elsewhere in the catalogue</h2>
  <p>Most product-specific packaging lives in the collections built around its category rather than here. If you arrived looking for packaging for a particular item, these are the likely destinations.</p>
  ${linkCards([
    { path: '/product/cardboard-partitioned-insert-boxes/', title: 'Partitioned insert boxes', blurb: 'Grid inserts that turn one outer into a set of protected cells — glassware, jars, cosmetics sets and multipacks.' },
    { path: '/product/cardboard-box-inserts/', title: 'Box inserts', blurb: 'Die-cut corrugated, moulded pulp and foam inserts specified from your product dimensions.' },
    { path: '/product/cardboard-juice-bottle-carriers/', title: 'Juice bottle carriers', blurb: 'Handled carriers for multi-bottle takeaway and delivery, with dividers sized to the bottle diameter.' },
    { path: '/product/cardboard-milk-bottle-holders/', title: 'Milk bottle holders', blurb: 'Rigid holders sized to standard bottle footprints for doorstep and grocery delivery.' },
    { path: '/product/cardboard-paper-boxes/', title: 'Plain paper boxes', blurb: 'Unprinted paperboard boxes used as a neutral inner pack or for resellers applying their own branding.' },
    { path: '/product/custom-size-cardboard-boxes/', title: 'Custom size boxes', blurb: 'The general answer when nothing standard fits — a dieline cut to your exact internal dimensions.' },
  ])}
  ${linkRow([
    { path: '/resources/cardboard-box-inserts-guide/', label: 'How inserts are specified' },
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
    { path: '/design-your-box/', label: 'Configure a fitted box' },
  ])}
</section>`,
  faqHeading: 'Questions about fitted packaging',
  ctaHeading: 'Send us the product itself',
  ctaBody: 'Fitted packaging starts from real measurements. Post us the item or send its dimensions and we will build the dieline around it.',
  faqs: [
    { q: 'How many bottles can one box hold?', a: 'Common configurations are 3, 6 and 12, with the divider grid built to the bottle diameter. Anything is possible — the practical ceiling is the gross weight, since twelve full glass bottles is already a double wall job.' },
    { q: 'Do the dividers come assembled?', a: 'Dividers ship flat as interlocking strips and slot together in seconds. Assembled shipping would multiply the inbound volume for no benefit.' },
    { q: 'Can one outer box take different insert configurations?', a: 'Yes, and it is usually the cheaper route across a range. One outer size with two or three insert variants avoids holding several complete box SKUs.' },
    { q: 'What do you need from me to build a fitted box?', a: 'Length, width and height of the product at its widest points, its weight, and whether anything protrudes. A photograph against a ruler is enough to start; a physical sample makes the first dieline more accurate.' },
    { q: 'Is fitted packaging more expensive than adding void fill?', a: 'Per box, usually yes. Across a year it is often cheaper, because it cuts the box size, the dimensional weight charge and the damage rate at the same time.' },
    { q: 'Why are there only two products in this collection?', a: 'Because most product-specific packaging is filed under the collection that matches its market — food, cosmetics, electronics. This collection holds the items that do not belong to any of those, and the links above point to the fitted options elsewhere.' },
  ],
};
