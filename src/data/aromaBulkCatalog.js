/**
 * Aroma bulk catalogue — A1–A56 bulk shots first, then 15ML retail bottle line at the end.
 * If a label on the bottle differs, edit name / tagline / cat for that index only.
 */

function bulkImg(filename) {
  return `images/${encodeURIComponent(filename)}`;
}

function encodeWaProductName(name) {
  return name.replace(/ /g, '%20').replace(/&/g, '%26');
}

/** Homepage collection line — same visuals, bulk / wholesale CTAs */
const RETAIL_LINE_BULK = [
  {
    img: bulkImg('Floral fresh Aroma1.png'),
    alt: 'Floral Fresh Aroma — Amor Exotic Aroma of Paris',
    name: 'Floral Fresh Aroma',
    tagline: 'Aroma brings delight to soul and vitality — garden-fresh blooms and white florals in our signature 15ML bottle.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: `Hello%20I%20am%20interested%20in%20bulk%20order%20for%20${encodeWaProductName('Floral Fresh Aroma')}`,
    delay: '0s',
  },
  {
    img: bulkImg('updated.webp'),
    alt: 'Lavender Aroma — Amor Exotic Aroma of Paris',
    name: 'Lavender Aroma',
    tagline: 'Pure & natural oil — calming lavender fields and soft herbal depth for serene spaces.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: `Hello%20I%20am%20interested%20in%20bulk%20order%20for%20${encodeWaProductName('Lavender Aroma')}`,
    delay: '0.05s',
  },
  {
    img: bulkImg('ocean_breeze.webp'),
    alt: 'Ocean Breeze Aroma — Amor Exotic Aroma of Paris',
    name: 'Ocean Breeze Aroma',
    tagline: 'Premium essential oil — sea salt, coastal breeze, and bright citrus for a crisp marine ambience.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: `Hello%20I%20am%20interested%20in%20bulk%20order%20for%20${encodeWaProductName('Ocean Breeze Aroma')}`,
    delay: '0.1s',
  },
  {
    img: bulkImg('fruity_exotica.webp'),
    alt: 'Fruit Exotica Aroma — Amor Exotic Aroma of Paris',
    name: 'Fruit Exotica Aroma',
    tagline: 'Premium essential oil — tropical fruits and sun-ripe sweetness for an uplifting, exotic atmosphere.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: `Hello%20I%20am%20interested%20in%20bulk%20order%20for%20${encodeWaProductName('Fruit Exotica Aroma')}`,
    delay: '0.15s',
  },
  {
    img: bulkImg('aqua_aroma.webp'),
    alt: 'Aqua Aroma — Amor Exotic Aroma of Paris',
    name: 'Aqua Aroma',
    tagline: 'Aroma of Paris — cool water, white musk, and lotus for a clean, airy 15ML signature.',
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: `Hello%20I%20am%20interested%20in%20bulk%20order%20for%20${encodeWaProductName('Aqua Aroma')}`,
    delay: '0.2s',
  },
];

const FILENAMES = [
  'A1 - Copy.webp',
  'A2 - Copy.webp',
  ...Array.from({ length: 54 }, (_, i) => {
    const num = i + 3;
    if (num === 41) return 'silver_b.webp';
    if (num === 15) return 'A1555.webp';
    if (num === 20) return 'AA20.webp';
    if (num === 24) return 'AA24.webp';
    if (num === 26) return 'A266.webp';
    if (num === 29) return 'AA2999.webp';
    if (num === 36) return 'AAAAAA.webp';
    if (num === 42) return 'AA42.webp';
    if (num === 53) return 'reeeeeeeeeeeeeeeeeeeeeeeeeeeeee nameeeeeeeeeeee.webp';
    return `A${num}.webp`;
  }),
];

/** Label-aligned copy for A1–A56 (from bottle art + OCR); `cat` = grid badge */
const ENTRIES = [
  { name: 'Fruity Exotica', tagline: 'Crystalline water notes and cool mint — Parisian aqua signature in a 1 litre premium pour for large-scale diffusion.' },
  { name: 'Ocean Aroma', tagline: 'Deep marine breeze and salt-kissed air — bold ocean identity crafted for statement lobbies and retail displays.' },
  { name: 'Floral Fresh Aroma', tagline: 'Let desire linger in the air — gardenia, jasmine, and soft white petals in our iconic floral fresh 1 litre oil.' },
  { name: 'Green Tea Aroma', tagline: 'Refresh your senses with nature’s elegance — steamed green tea, soft herbs, and a peaceful spa-like finish.' },
  { name: 'Lavender Aroma', tagline: 'Unwind with the essence of lavender — pure fields, herbal calm, and a powdery dry-down for bedrooms and salons.' },
  { name: 'Lemongrass Aroma', tagline: 'Invigorate your senses with nature’s zest — bright citrus herbs and clean green lift for kitchens and workspaces.' },
  { name: 'Mogra Aroma', tagline: 'Celebrate the fragrance of jasmine — lush Indian mogra, creamy white florals, and romantic depth.' },
  { name: 'Rose Aroma', tagline: 'Let romance blossom — crimson rose absolutes and soft spice for a passionate floral signature.' },
  { name: 'Nargis Aroma', tagline: 'Cheerful narcissus and spring daffodil facets — bright botanical energy with an uplifting aura.' },
  { name: 'Tropical Lily Aroma', tagline: 'Intoxicating tropical lily and rare blooms — elite floral depth for luxury gifting and hospitality.' },
  { name: 'Vista Aroma', tagline: 'Experience the tranquil essence of the sea — soft marine horizon, coastal florals, and serene escape.' },
  { name: 'White Oudh Aroma', tagline: 'Refined pale oudh woods — luminous smoke, soft amber resin, and modern oriental polish.' },
  { name: 'Aqua Aroma', tagline: 'Let desire linger in the air — cool water, blue florals, and sheer musk in a 1 litre Parisian blend.' },
  { name: 'Pink Fairy Gumdrop Aroma', tagline: 'Indulge in the sweet enchantment of candyland — playful sugar, berry gloss, and gourmand sparkle.' },
  { name: 'Pumpkin Spice Aroma', tagline: 'Let desire linger in the air — warm pumpkin, baking spice, and autumn comfort in a premium poured oil.' },
  { name: 'Princess Rose Aroma', tagline: 'Immerse in the luxurious essence of roses — velvet petals, soft honey, and fairy-tale romance.' },
  { name: 'Rose Saffron Aroma', tagline: 'Let desire linger in the air — damask rose threads with golden saffron and warm resinous depth.' },
  { name: 'Baccarat Aroma', tagline: 'High-jewellery amber florals — radiant saffron, jasmine, and cedarwood for a red-carpet ambience.' },
  { name: 'Orange Cinnamon Aroma', tagline: 'Let desire linger in the air — sparkling orange zest folded into warm cinnamon and holiday spice.' },
  { name: 'Dark Amber & Charged Birch Aroma', tagline: 'Let desire linger in the air — smoky birch, molten amber, and midnight woods in a luxury oil.' },
  { name: 'Rose Oudh Aroma', tagline: 'Let desire linger in the air — velvety rose married to deep agarwood for a royal oriental accord.' },
  { name: 'Spicy Mountain Air Aroma', tagline: 'Let desire linger in the air — alpine wind, crisp pine, and a kick of peppered spice.' },
  { name: 'Talisman Oudh Aroma', tagline: 'Mystical agarwood talisman — rare oudh, smoked incense, and gold resin for signature spaces.' },
  { name: 'Cedar & Balsam Aroma', tagline: 'Let desire linger in the air — frosted cedar, Canadian balsam, and evergreen cabin warmth.' },
  { name: 'Geranium Lavender Aroma', tagline: 'Let desire linger in the air — leafy geranium, French lavender, and a clean botanical heart.' },
  { name: 'Apple Cinnamon Aroma', tagline: 'Let desire linger in the air — oven-warm apple, Ceylon cinnamon, and cozy gourmand glow.' },
  { name: 'Cherry Blossom Aroma', tagline: 'Let desire linger in the air — sakura petals, pale wood, and delicate spring rain.' },
  { name: 'Geranium & Bergamot Aroma', tagline: 'Let desire linger in the air — rose geranium leaves with Italian bergamot sparkle.' },
  { name: 'Gracious Aroma', tagline: 'Let desire linger in the air — gracious white florals, soft musk, and effortless Parisian poise.' },
  { name: 'Marine Aroma', tagline: 'Let desire linger in the air — deep marine accord, sea spray, and breezy coastal clarity.' },
  { name: 'Citrus Grove Aroma', tagline: 'Let desire linger in the air — sunlit citrus grove, leafy greens, and sparkling peel.' },
  { name: 'Jasmine Lemongrass Oil', tagline: 'Let desire linger in the air — night-blooming jasmine layered over zesty lemongrass for balance.' },
  { name: 'Parisian Blue Aroma', tagline: 'Let desire linger in the air — airy blue florals, cool musk, and a clean couture diffusion profile.' },
  { name: 'Sabré Aroma', tagline: 'Let desire linger in the air — sharp woods, metallic sage, and modern masculine-luxe edge.' },
  { name: 'Lavender Aromatic Aroma', tagline: 'Pure and calming aromatic oil — high-altitude lavender for sleep, spa, and serene retail.' },
  { name: 'Fresh Linen Aroma', tagline: 'Pure and calming aromatic ambience — sun-dried cotton, soft powder, and crisp clean sheets.' },
  { name: 'Gingerbread Aroma', tagline: 'Warm gingerbread spice — molasses, ginger snap, and holiday bakery comfort.' },
  { name: 'Chamomile Aromatic Oil', tagline: 'Pure and calming aromatic oil — Roman chamomile, hay, and honeyed herbal rest.' },
  { name: 'Amor Reserve Blend', tagline: 'House reserve Parisian blend — versatile 1 litre diffusion oil for bespoke hospitality programs.' },
  { name: 'WoodRize Aroma', tagline: 'Crackling wood-inspired warmth — embered logs, smoked vetiver, and forest at dusk.' },
  { name: 'Silver Birch Aroma', tagline: 'Silver birch bark and cool sap — Nordic forest minimalism with a silver-green breeze.' },
  { name: 'Vanilla Aroma', tagline: 'Creamy Madagascar vanilla bean — gourmand glow with a soft wax pool and long throw.' },
  { name: 'Musk Aroma', tagline: 'Clean skin musk and soft powder — intimate sillage that elevates bedrooms and boutiques.' },
  { name: 'Coffee Aroma', tagline: 'Freshly roasted arabica and caramelized sugar — bold café energy for lounges and studios.' },
  { name: 'Saffron Kiwi Aroma', tagline: 'Let desire linger in the air — golden saffron threads with juicy kiwi and tropical lift.' },
  { name: 'Sea Salt & Lime Aroma', tagline: 'Let desire linger in the air — coastal sea salt, Mexican lime, and breezy driftwood.' },
  { name: 'Honey Aroma', tagline: 'Let desire linger in the air — wildflower honey, beeswax, and golden amber comfort.' },
  { name: 'Strawberry Aroma', tagline: 'Let desire linger in the air — ripe field strawberries, green leaf, and jammy sweetness.' },
  { name: 'Vanilla Aroma', tagline: 'Let desire linger in the air — bourbon vanilla, soft tonka, and silky gourmand warmth.' },
  { name: 'Green Apple Aroma', tagline: 'Let desire linger in the air — crisp Granny Smith, dewy peel, and sparkling orchard air.' },
  { name: 'Floral Fresh — Essence of Flowers', tagline: 'Experience the essence of flowers — layered bouquet absolutes in a 1 litre premium botanical oil.' },
  { name: 'Linen & Sage Aromatic Oil', tagline: 'Pure aromatic oil — sun-bleached linen, clary sage, and quiet spa calm.' },
  { name: 'Floral Fresh Premium Botanical Oil', tagline: 'Aroma strong enough to steal a kiss — premium botanical ambience oil, collection no. 1, in a full litre pour.' },
  { name: 'Aqua Aroma — Bulk', tagline: 'Cool water signature — crystalline aqua accord scaled for bulk diffusers and retail refill.' },
  { name: 'Black Oudh Aroma', tagline: 'Light me, love me, lose yourself — deep agarwood smoke, amber, and commanding oriental power.' },
  { name: 'Ocean Breeze Aroma', tagline: 'Caution: may cause unexpected romance — salt-kissed palms, turquoise waves, and sun-drenched coast.' },
];

const bulkCatalogFromImages = FILENAMES.map((file, i) => {
  const entry = ENTRIES[i] ?? {
    name: `Aroma Product ${i + 1}`,
    cat: 'Signature Collection',
    tagline: 'Premium bulk aroma oil for professional diffusion.',
  };
  const { name, tagline, cat } = entry;
  const delay = `${0.05 + (i % 6) * 0.05}s`;
  return {
    img: `images/${encodeURIComponent(file)}`,
    alt: `${name} — Amor Exotic bulk aroma oil`,
    cat,
    name,
    tagline,
    variants: ['15ML Luxury Pack', '1 Ltr. Bulk Supply', 'Wholesale Bulk Pack'],
    waText: `Hello%20I%20am%20interested%20in%20bulk%20order%20for%20${encodeWaProductName(name)}`,
    delay,
  };
});

export const aromaBulkProducts = [...bulkCatalogFromImages.filter(p => !p.img.includes('AA42')), ...RETAIL_LINE_BULK];
