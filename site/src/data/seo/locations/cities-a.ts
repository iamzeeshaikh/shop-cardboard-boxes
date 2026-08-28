import type { LocationPage } from './types';
import { specTable } from '../../../lib/seo/blocks';

export const newYorkCity: LocationPage = {
  slug: 'new-york-city', kind: 'city', name: 'New York City', stateName: 'New York', stateSlug: 'new-york', region: 'Northeast',
  title: 'Cardboard Boxes in New York City | Food Service & Delivery',
  description: 'Cardboard packaging for New York City businesses — restaurant and delivery boxes built for multi-stop routes, jewellery packaging, and small-batch runs.',
  h1: 'Cardboard Packaging for New York City',
  eyebrow: 'City',
  summary: 'Packaging for the densest delivery environment in the country, plus jewellery boxes and short-run work for small studios.',
  lede: `<p>A takeaway box in Manhattan gets handled more times per mile than almost anywhere else on earth. It goes into a bag, onto a bike, up a stairwell, and it is the ninth stop on a route. That is a harder test than a long-haul freight journey, and it is not the test most food packaging is designed for.</p>`,
  layout: 'form-in-hero',
  facts: [
    { label: 'Minimum', value: '100 boxes' },
    { label: 'Production', value: '8–10 days' },
    { label: 'Delivery', value: 'Free, US-wide' },
  ],
  sections: [
    {
      h2: 'Packaging for multi-stop delivery',
      html: `<p>Three failures dominate delivery packaging in dense urban routes, and none of them appears in a laboratory test.</p>
<ol>
  <li><strong>Steam softening.</strong> A sealed hot box condenses on the lid, the moisture drips back, and by stop nine the board has lost its rigidity. Vents high on the side walls fix it — placement matters more than count.</li>
  <li><strong>Stacking inside the bag.</strong> Boxes are stacked in an insulated bag and carried at an angle. A box that will not take the weight of two others crushes the order underneath it.</li>
  <li><strong>Grease.</strong> Untreated board absorbs fat within minutes, and a soft, stained box is what the customer actually sees.</li>
</ol>
<p>A water-based dispersion coating handles the grease while staying recyclable in most streams. For the heaviest items a greaseproof liner does better, and separates cleanly at the sorting stage.</p>
<p>Nine stops into a route the failure is structural rather than cosmetic, which is why <a href="/product/cardboard-takeout-box/">takeout boxes with vented side walls</a> are specified for the steam before they are specified for the grease.</p>
<p>Pizza is the extreme version of the same problem, carried flat and stacked while still releasing steam. <a href="/product/cardboard-pizza-boxes/">Pizza boxes with corner vents</a> are cut for it.</p>
<p>Which barrier belongs on which product depends on fat content and dwell time, and <a href="/resources/food-packaging-box-guide/">the food packaging guide</a> compares them directly.</p>`,
    },
    {
      h2: 'Jewellery and small high-value goods',
      html: `<p>The other end of the scale is a genuinely different problem: very small boxes where the presentation is most of the value. These are usually rigid rather than folded, with a foam or card insert that holds the piece without pressing on it.</p>
<p>Rings are the tightest case, where a millimetre of movement reads as cheapness, so <a href="/product/cardboard-ring-boxes/">ring boxes with a slotted pad</a> grip the band rather than surrounding it.</p>
<p>For chains and larger pieces the insert has to stop tangling instead. <a href="/product/cardboard-boxes-for-jewellery/">Jewellery boxes with fitted inserts</a> are built around the piece they carry.</p>
<p>Below roughly 1 × 1 × 3 inches the constraint stops being design and becomes the folding and gluing equipment, which is why very small formats are often rigid or sleeve constructions instead.</p>`,
    },
    {
      h2: 'Small runs from small spaces',
      html: `<p>A hundred boxes is a real order here. Studios and single-location restaurants order at that scale constantly, and digital printing makes it economic — no plate cost, and the artwork can change for the next run.</p>
<p>Where storage is the constraint rather than the budget, scheduled call-off delivery gets you the volume price without taking the pallet at once. That arrangement is set out in more detail on the <a href="/locations/new-york/">New York state page</a>.</p>
<p>Exactly where the quantity breaks fall, and what changes above them, is covered on the <a href="/product-category/wholesale-cardboard-boxes/">wholesale cardboard boxes page</a>.</p>`,
    },
  ],
  faqHeading: 'New York City questions',
  faqs: [
    { q: 'What makes a good delivery box for a multi-stop route?', a: 'Vents high on the side walls so steam escapes without heat dumping out of the top, a grease-resistant coating, and enough rigidity to take the weight of two boxes stacked above it in a delivery bag.' },
    { q: 'Do you deliver to Manhattan addresses with restricted access?', a: 'We ship nationwide, but buildings with dock booking, freight elevator scheduling or hand-ball requirements need arranging with the carrier in advance. Tell us at quote stage rather than on the day.' },
    { q: 'Is there a New York City pickup point?', a: 'No. We produce to order and ship to you; there is no local warehouse, showroom or collection point anywhere in the city.' },
    { q: 'How small can a jewellery box be?', a: 'Small enough for a single ring. Below about 1 × 1 × 3 inches, folding and gluing equipment becomes the limit, so very small formats are usually rigid or sleeve constructions instead.' },
    { q: 'Can a single restaurant order at a sensible price?', a: 'Yes. Minimum order is 100 boxes and digital printing carries no plate cost, so a single-location run is economic and the artwork can change next time.' },
  ],
  shop: [
    { path: '/product/cardboard-takeout-box/', label: 'Takeout boxes' },
    { path: '/product/cardboard-ring-boxes/', label: 'Ring and jewellery boxes' },
    { path: '/product-category/food-related-cardboard-boxes/', label: 'All food packaging' },
  ],
  guides: [
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods' },
  ],
  cta: { heading: 'Price a New York City order', body: 'Tell us the food and the route. Steam, grease and stacking each change the specification.', label: 'Request pricing' },
};

export const losAngeles: LocationPage = {
  slug: 'los-angeles', kind: 'city', name: 'Los Angeles', stateName: 'California', stateSlug: 'california', region: 'West',
  title: 'Cardboard Boxes in Los Angeles | Apparel, Studios & Food',
  description: 'Cardboard packaging for Los Angeles businesses — garment district apparel boxes, production and studio packaging, and food service across the city.',
  h1: 'Cardboard Boxes for Los Angeles',
  eyebrow: 'City',
  summary: 'Garment district apparel packaging, short-run studio and production work, and food service across a spread-out city.',
  lede: `<p>Los Angeles buys packaging in two very different rhythms. Apparel runs on seasons and volumes. Production and studio work runs on deadlines measured in days, for quantities that would not interest most manufacturers.</p>
<p>We do both, and the answers are not similar.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'Apparel and the garment district',
      html: `<p>Apparel packaging is a flat-goods problem, and the single most useful thing to get right is the box proportion. A shallow rectangle beats a cube for folded garments on fit and on dimensional weight — carriers bill on volume, and a cube wastes it.</p>
<p>Around 12 × 9 × 4 inches covers a large share of single-garment orders. For multi-item orders, going up in depth rather than in footprint keeps the billable volume down.</p>
<p>The second thing is returns. Apparel has the highest return rate in ecommerce, and a taped carton the customer has to cut open cannot be resealed. A <a href="/product/cardboard-mailing-boxes/">mailer with a second adhesive strip</a> costs very little more and removes a recurring support cost.</p>`,
    },
    {
      h2: 'Production, studio and promotional runs',
      html: `<p>Press kits, cast gifts, promotional send-outs — small quantities, fixed dates, and artwork that arrives late. Digital printing is the right process for all of it: no plate cost at 100 units, and the file can change until the last moment.</p>
<p>The structure that does this work best is a <a href="/product/cardboard-pr-kit-boxes/">PR kit box with a fitted insert</a>, where the arrangement survives the courier and still reads as deliberate on camera.</p>
<p>Where the opening itself is the point, <a href="/product/cardboard-luxury-magnet-boxes/">magnetic closure boxes</a> deliver it — but they ship assembled rather than flat, so allow for the freight volume in the timeline.</p>`,
    },
    {
      h2: 'Food service across a spread-out city',
      html: `<p>Los Angeles delivery routes are long rather than dense, which changes the packaging problem from handling to time. Food spends longer in the box, so steam management and grease resistance matter more than crush strength.</p>
<p>Vents high on the side walls and a water-based dispersion coating cover most of it. <a href="/product/cardboard-catering-trays/">Catering trays with reinforced bases</a> carry the weight of a full service without flexing in the middle.</p>
<p>Meal prep is the same food on a different schedule, sitting refrigerated for days rather than travelling hot for minutes. <a href="/product/cardboard-meal-prep-boxes/">Meal prep boxes</a> are specified for that dwell time instead.</p>`,
    },
  ],
  faqHeading: 'Los Angeles packaging questions',
  faqs: [
    { q: 'What box size suits folded apparel?', a: 'A shallow rectangle — around 12 × 9 × 4 inches covers a large share of single-garment orders. Going deeper rather than wider keeps the billable volume down on multi-item orders.' },
    { q: 'Can you turn around a small promotional run quickly?', a: 'Production runs 8–10 business days from artwork approval. Digital printing means no plate stage, so a 100-unit run moves as fast as the artwork does. Tell us the date at quote stage.' },
    { q: 'Do magnetic closure boxes ship flat?', a: 'No — the rigid frame cannot fold, so they arrive assembled. Budget for more inbound freight volume and a slightly longer delivery leg than a folding carton.' },
    { q: 'What packaging works for long delivery routes?', a: 'Ventilation and grease resistance matter more than strength when food sits in the box longer. Vents high on the side walls stop condensation without dumping heat out of the top.' },
    { q: 'Is there a Los Angeles warehouse or pickup?', a: 'No. Boxes are produced to order and shipped to you, with delivery included anywhere in the United States.' },
  ],
  shop: [
    { path: '/product/cardboard-mailing-boxes/', label: 'Apparel mailers' },
    { path: '/product/cardboard-pr-kit-boxes/', label: 'PR and press kit boxes' },
    { path: '/product/cardboard-catering-trays/', label: 'Catering trays' },
  ],
  guides: [
    { path: '/resources/ecommerce-packaging-guide/', label: 'Ecommerce packaging guide' },
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods' },
  ],
  cta: { heading: 'Start an LA order', body: 'Apparel volume or a hundred press kits on a deadline — both are normal. Tell us which.', label: 'Send a brief' },
};

export const chicago: LocationPage = {
  slug: 'chicago', kind: 'city', name: 'Chicago', stateName: 'Illinois', stateSlug: 'illinois', region: 'Midwest',
  title: 'Cardboard Boxes in Chicago | Restaurants, Events & Retail',
  description: 'Cardboard packaging for Chicago businesses — restaurant and deep-dish shipping boxes, event and convention packaging, and retail cartons.',
  h1: 'Cardboard Boxes for Chicago',
  eyebrow: 'City',
  summary: 'Restaurant packaging including shipped food, event and convention work, and retail cartons for a competitive shelf.',
  lede: `<p>Chicago has an unusual food packaging requirement: a meaningful number of restaurants here ship their food, not just deliver it. A deep-dish pizza going to another state is a cold chain problem, a structural problem and a brand problem at once, and almost nothing off the shelf solves all three.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Shipping food, not just delivering it',
      html: `<p>Food that travels overnight by carrier needs a completely different specification from food that travels three miles in a bag.</p>
${specTable('Delivery box against shipping box', ['', 'Local delivery', 'Overnight shipping'], [
  ['<strong>Temperature</strong>', 'Hold heat for 30 minutes', 'Hold chill for 24–48 hours'],
  ['<strong>Structure</strong>', 'Stack in a bag', 'Survive a parcel network'],
  ['<strong>Barrier</strong>', 'Grease resistance', 'Grease plus moisture, both directions'],
  ['<strong>Ventilation</strong>', 'Essential — steam escapes', 'Counterproductive — heat escapes'],
])}
<p>The vent line is the one people get wrong. A vented takeaway box is exactly the wrong thing for a shipped frozen product, because the airflow that keeps hot food crisp is the airflow that lets a frozen load warm.</p>
<p>For anything travelling with coolant, <a href="/product/cardboard-insulated-cold-boxes/">insulated cold boxes</a> hold temperature rather than releasing it.</p>
<p>For retail freezer cases the demand is different again — a board that survives condensation cycle after cycle, which <a href="/product/cardboard-frozen-food-boxes/">frozen food boxes</a> are graded for.</p>
<p>The barrier choice underneath all of it is compared in <a href="/resources/food-packaging-box-guide/">the food packaging guide</a>.</p>`,
    },
    {
      h2: 'Event, convention and trade show packaging',
      html: `<p>Trade show material has a distinctive requirement: it has to arrive intact after being handled by people who did not pack it, then survive being repacked by people in a hurry. Reusability matters more than in almost any other application.</p>
<p>That points at a separate lift-off lid rather than a taped carton — it reopens indefinitely, and it can be reclosed without tape at the end of a show. For display material, <a href="/product/cardboard-pop-display-boxes/">POP display boxes</a> that ship flat and assemble on site avoid the freight cost of shipping air.</p>`,
    },
    {
      h2: 'Retail cartons',
      html: `<p>Chicago's grocery and specialty retail is competitive shelf space, and the print decision matters more than the structure. Litho lamination gives photographic quality on corrugated; direct flexo is cheaper and suits bold flat artwork. <a href="/resources/retail-packaging-guide/">The retail packaging guide</a> covers what buyers usually specify.</p>`,
    },
  ],
  faqHeading: 'Chicago packaging questions',
  faqs: [
    { q: 'What packaging suits shipping food overnight?', a: 'An insulated box with a moisture barrier and coolant sized to the journey — and crucially no vents, which are right for hot delivery and wrong for shipped chilled or frozen product.' },
    { q: 'Can a box work for both delivery and shipping?', a: 'Rarely well. The ventilation requirement is opposite, and so is the temperature goal. Most operations that do both end up with two specifications rather than one compromise.' },
    { q: 'What packaging works for trade shows?', a: 'A box with a separate lift-off lid, so it reopens and recloses without tape after the show. Display material is best shipped flat and assembled on site to avoid freighting empty volume.' },
    { q: 'Litho lamination or flexo for a retail carton?', a: 'Litho lamination if the artwork is photographic or the brand colour must be exact. Flexo if the design is bold flat colour and simple type — it looks nearly as good for noticeably less.' },
    { q: 'How long does a Chicago order take?', a: 'Production runs 8–10 business days from artwork approval, with delivery included. If you have a fixed event date, tell us at quote stage and we will confirm it before you commit.' },
  ],
  shop: [
    { path: '/product/cardboard-insulated-cold-boxes/', label: 'Insulated shipping boxes' },
    { path: '/product/cardboard-pop-display-boxes/', label: 'POP display boxes' },
    { path: '/product/cardboard-pizza-boxes/', label: 'Pizza boxes' },
  ],
  guides: [
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
    { path: '/resources/retail-packaging-guide/', label: 'Retail packaging guide' },
  ],
  cta: { heading: 'Quote a Chicago order', body: 'Tell us whether the food is delivered or shipped. It changes almost every part of the specification.', label: 'Request a quote' },
};

export const houston: LocationPage = {
  slug: 'houston', kind: 'city', name: 'Houston', stateName: 'Texas', stateSlug: 'texas', region: 'Southwest',
  title: 'Cardboard Boxes in Houston | Medical, Energy & Import Food',
  description: 'Cardboard packaging for Houston businesses — medical and laboratory shipping, energy sector parts crates, and food packaging for importers and distributors.',
  h1: 'Cardboard Boxes for Houston',
  eyebrow: 'City',
  summary: 'Medical and laboratory shipping, energy sector crates, and packaging for food importers and distributors.',
  lede: `<p>Houston's packaging demand comes from three places that rarely appear on the same quote: the medical centre, the energy sector, and a food import and distribution trade serving one of the most diverse food scenes in the country.</p>`,
  layout: 'form-in-hero',
  sections: [
    {
      h2: 'Medical and laboratory shipping',
      html: `<p>Medical shipping is specified against a protocol. Temperature range, shock tolerance and documentation are given rather than chosen, and the packaging has to reproduce that specification identically every time.</p>
<p>We hold approved dielines on file so a reorder matches what was validated rather than what was convenient. For temperature-controlled material, an <a href="/product/cardboard-insulated-cold-boxes/">insulated box with route-sized coolant</a> is the specification.</p>
<p>Shock-sensitive instruments need geometry instead of insulation: an inner box suspended inside an outer with a measured cushioning gap. <a href="/product/cardboard-medical-device-packaging/">Medical device packaging</a> is built to that arrangement.</p>`,
    },
    {
      h2: 'Energy sector components',
      html: `<p>Oilfield and industrial components are dense, irregular and often exported. Three things follow:</p>
<ul>
  <li><strong>Load concentration.</strong> A dense part rests on a fraction of the base, so a box rated for the total weight still fails. An insert that spreads the load across the base is the fix.</li>
  <li><strong>Protrusions.</strong> Fittings and threads puncture walls that flat faces would never trouble. The insert has to account for them specifically.</li>
  <li><strong>Export compliance.</strong> A <a href="/product/cardboard-heavy-duty-shipping-crates/">corrugated crate</a> avoids the ISPM 15 heat treatment and marking required for solid wood, which removes a cost and a step.</li>
</ul>`,
    },
    {
      h2: 'Food import and distribution',
      html: `<p>Houston's food distributors handle an unusually wide range of products, which usually means an unusually wide range of box sizes — and that is where the money leaks. Seven sizes ordered in small quantities each miss the volume break.</p>
<p>Consolidating to four sizes that each cover about a quarter of shipments normally saves more than any negotiation on unit price, and it speeds up the packing bench. <a href="/resources/cardboard-box-sizes-guide/">The sizes guide</a> covers how to draw the cut lines.</p>`,
    },
  ],
  faqHeading: 'Houston packaging questions',
  faqs: [
    { q: 'How do you keep a medical pack identical between orders?', a: 'The approved dieline and board specification stay on file against your account, so a reorder reproduces the pack that was validated rather than being re-derived. You supply a quantity; nothing else changes.' },
    { q: 'Why does a heavy part fail in a box rated for its weight?', a: 'Because the rating assumes even distribution. A dense component resting on one corner concentrates the load onto a fraction of the base. An insert that spreads it is the fix.' },
    { q: 'Do corrugated crates work for oilfield export?', a: 'For a great many shipments, yes. They are lighter, cheaper to freight, recyclable at the destination, and exempt from the heat-treatment rules that apply to solid wood packaging.' },
    { q: 'How many box sizes should a distributor carry?', a: 'Usually three or four, each covering roughly a quarter of shipments. More than that and fragmented purchasing plus packer decision time cost more than the closer fit saves.' },
    { q: 'Is food-grade board available for importers?', a: 'Yes, with food-safe inks, and the specification is written on the quote so it is documented rather than assumed.' },
  ],
  shop: [
    { path: '/product/cardboard-medical-device-packaging/', label: 'Medical device packaging' },
    { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Heavy duty crates' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale ordering' },
  ],
  guides: [
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Building a size ladder' },
  ],
  cta: { heading: 'Quote a Houston order', body: 'Medical, industrial or food distribution — tell us which and we will start from the right specification.', label: 'Request a quote' },
};

export const phoenix: LocationPage = {
  slug: 'phoenix', kind: 'city', name: 'Phoenix', stateName: 'Arizona', stateSlug: 'arizona', region: 'Southwest',
  title: 'Cardboard Boxes in Phoenix | Hospitality, Delivery & Seasonal',
  description: 'Cardboard packaging for Phoenix businesses — restaurant and delivery boxes for extreme heat, seasonal demand planning, and last-mile distribution.',
  h1: 'Cardboard Boxes for Phoenix',
  eyebrow: 'City',
  summary: 'Food packaging that works at 110°F, ordering around a seasonal population swing, and last-mile distribution.',
  lede: `<p>Most food packaging is designed for a delivery vehicle that is warm. Phoenix delivery vehicles in July are considerably hotter than that, and it changes which part of the box fails first — usually the tape or the glued joint, not the board.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'Food packaging in extreme heat',
      html: `<p>Three heat-specific issues, in the order they cause trouble:</p>
<ol>
  <li><strong>Adhesive softening.</strong> Crash-lock bases and glued joints rely on adhesive that softens at sustained high temperature. A base that holds indoors can release in a vehicle. Specify a heat-tolerant adhesive if boxes will see it.</li>
  <li><strong>Tape failure.</strong> Pressure-sensitive tape loses adhesion in heat long before board loses strength. On heavier boxes, an H-pattern rather than a single centre strip is worth the extra second.</li>
  <li><strong>Cold chain in reverse.</strong> An insulated box designed to hold cold against a mild ambient will not hold it against 110°F. Coolant here has to be sized to the actual ambient, not to a national average.</li>
</ol>
<p>Heat is the variable that changes everything here. A box that sits in a vehicle at forty degrees needs its coolant sized for the ambient temperature rather than the journey length, which is how <a href="/product/cardboard-insulated-cold-boxes/">insulated cold boxes</a> are specified for this climate.</p>
<p>Hot food faces the opposite failure, where condensation softens the board before the customer opens it. <a href="/product/cardboard-takeout-box/">Takeout boxes with vented lids</a> release it instead of trapping it.</p>`,
    },
    {
      h2: 'Ordering around a seasonal swing',
      html: `<p>Phoenix hospitality demand moves substantially between winter and summer, and packaging orders often follow the demand instead of leading it — which means paying small-order prices exactly when margins are thinnest.</p>
<p>Committing to an annual quantity and taking it on a call-off schedule fixes that: the volume price applies to the whole year, and delivery is heavy before the season and light after it. <a href="/product-category/wholesale-cardboard-boxes/">Wholesale ordering</a> covers how it works.</p>`,
    },
    {
      h2: 'Last-mile distribution',
      html: `<p>Phoenix's role as a western distribution point means a lot of packaging is specified here for delivery somewhere else. Where stock sits palletised before it moves, Edge Crush Test is the number that matters, and stacking lower is often a cheaper answer than upgrading the board.</p>`,
    },
  ],
  faqHeading: 'Phoenix packaging questions',
  faqs: [
    { q: 'What fails first on a box in extreme heat?', a: 'Usually the adhesive or the tape, not the board. Glued joints soften and pressure-sensitive tape loses adhesion well before the corrugated itself is affected.' },
    { q: 'Which structures are most at risk in the heat?', a: 'Anything held together by glue rather than by folding — crash-lock bases and glued manufacturer\'s joints. Tell us the boxes will see sustained high temperatures and we specify an adhesive rated for it.' },
    { q: 'How is coolant sized for Phoenix summer conditions?', a: 'To the actual ambient temperature and journey length, not to a national average. A box that holds chill through a mild day will not hold it through a Phoenix afternoon on the same coolant.' },
    { q: 'How do I avoid small-order prices in a slow season?', a: 'Commit to an annual quantity for the volume price and take delivery on a call-off schedule — heavy before the season, light after it. The stock stays with us until you need it.' },
    { q: 'Can stock go straight to a distribution centre?', a: 'Yes. Most receiving sites have their own dock booking, pallet height limit and labelling format — send those with the enquiry and the shipment is built to them rather than corrected afterwards.' },
  ],
  shop: [
    { path: '/product/cardboard-insulated-cold-boxes/', label: 'Insulated cold boxes' },
    { path: '/product/cardboard-takeout-box/', label: 'Takeout boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale and call-off' },
  ],
  guides: [
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
    { path: '/resources/corrugated-box-strength-guide/', label: 'Board strength guide' },
  ],
  cta: { heading: 'Plan a Phoenix order', body: 'Tell us the season and the temperature the boxes will see. Both change what we specify.', label: 'Talk to us' },
};
