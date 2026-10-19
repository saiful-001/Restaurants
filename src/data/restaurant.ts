/**
 * Master Restaurant Data Registry for Verdant Hearth (Multi-Page Edition)
 * All metrics, prices, reviews, and operational numbers are sample demo content.
 */

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  category: 'starters' | 'mains' | 'seasonal' | 'desserts' | 'drinks' | 'brunch';
  price: number;
  shortDescription: string;
  longDescription: string;
  dietary: ('GF' | 'VG' | 'V' | 'DF' | 'spicy' | 'CHEF')[];
  ingredients: string[];
  allergens: string[];
  cookingMethod: string;
  pairing: string;
  nutritionNote: string;
  image: string;
  gallery: string[];
  highlight?: boolean;
  seasonal?: boolean;
  chefPick?: boolean;
}

export interface MenuCategoryMeta {
  id: 'starters' | 'mains' | 'seasonal' | 'desserts' | 'drinks' | 'brunch';
  name: string;
  tagline: string;
  servingHours: string;
  bannerImage: string;
}

export interface WhyDineReason {
  id: string;
  slug: string;
  num: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullStory: string;
  heroImage: string;
  gallery: string[];
  highlights: { label: string; value: string; description: string }[];
  quote: { text: string; author: string; role: string };
  relatedSlugs: string[];
}

export interface ArtisanProfile {
  id: string;
  slug: string;
  name: string;
  role: string;
  craft: string;
  biography: string;
  process: string;
  quote: string;
  avatar: string;
  heroImage: string;
  gallery: string[];
  linkedDishSlugs: string[];
  accolades: string[];
}

export interface SeasonalHarvestInfo {
  seasonTitle: string;
  seasonLabel: string;
  subtitle: string;
  story: string;
  farms: { name: string; region: string; focus: string }[];
  ingredients: { name: string; tag: string; description: string }[];
  featuredDishSlug: string;
  dishSlugs: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  publication: string;
  rating: number;
  quote: string;
  date: string;
  dishLoved: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface SupplierItem {
  name: string;
  location: string;
  specialty: string;
  partnershipYears: number;
  description: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  tagline: string;
  schedule: string;
  priceNote: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'reservations' | 'dining' | 'private-events' | 'general';
}

export const RESTAURANT_INFO = {
  name: 'Verdant Hearth',
  tagline: 'Where Flames & Earth Meet',
  shortDesc: 'An award-winning dining sanctuary devoted to live-fire hearth cooking, organic botanical agriculture, and natural biodynamic wines in Portland, Oregon.',
  foundedYear: 2012,
  rating: 4.9,
  totalReviews: '1,450+',
  address: {
    street: '428 Botanical Way, Hearth Quarter',
    city: 'Portland',
    state: 'OR',
    zip: '97201',
    country: 'United States',
    mapLink: 'https://maps.google.com/?q=428+Botanical+Way+Portland+OR'
  },
  phone: '+1 (503) 847-2910',
  email: 'concierge@verdanthearth.com',
  reservationEmail: 'reservations@verdanthearth.com',
  instagram: '@verdant.hearth',
  hours: [
    { days: 'Monday – Wednesday', service: 'Dinner Service', hours: '5:00 PM – 10:00 PM', openHour: 17, closeHour: 22 },
    { days: 'Thursday – Friday', service: 'Dinner & Late Botanical Bar', hours: '5:00 PM – 11:30 PM', openHour: 17, closeHour: 23.5 },
    { days: 'Saturday', service: 'Weekend Hearth Brunch & Dinner', hours: '10:00 AM – 11:30 PM', openHour: 10, closeHour: 23.5 },
    { days: 'Sunday', service: 'Wood-Fired Sunday Feast', hours: '10:30 AM – 9:00 PM', openHour: 10.5, closeHour: 21 }
  ],
  stats: [
    { value: '14', label: 'Years of Live Hearth Craft', suffix: '+' },
    { value: '42', label: 'Biodynamic Partner Farms', suffix: '' },
    { value: '180K', label: 'Guests Gathered', suffix: '+' },
    { value: '98%', label: 'Closed-Loop Composting', suffix: '' }
  ]
};

export const HERO_ROTATING_WORDS = ['Savor', 'Gather', 'Celebrate', 'Linger', 'Discover'] as const;

export const ANNOUNCEMENT = {
  badge: 'Spring Botanical Harvest',
  text: 'Wild morels, wood-fired hearth lamb, and flowering elderflower pairings are now being served.',
  ctaText: 'Reserve Table',
  ctaLink: '/reservation'
};

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reservation', href: '/reservation' },
  { label: 'Contact', href: '/contact' },
  { label: 'Docs', href: '/docs' }
] as const;

export const HIGHLIGHTS_STRIP = [
  { title: 'Oak & Alder Wood Hearth', subtitle: '100% sustainable Oregon hardwood' },
  { title: '42 Partner Farms', subtitle: 'Picked at dawn, served by dusk' },
  { title: 'Living Botanical Cellar', subtitle: '320+ natural & low-intervention wines' },
  { title: 'In-House Stone Mill', subtitle: 'Heritage grains milled fresh each dawn' },
  { title: 'Zero Food-Waste Certified', subtitle: 'Closed-loop compost & fermentation' },
  { title: 'Open Culinary Fireplace', subtitle: 'Witness every flame-kissed creation' }
] as const;

export const MENU_CATEGORIES: MenuCategoryMeta[] = [
  {
    id: 'starters',
    name: 'Starters & Broths',
    tagline: 'Ember-roasted small plates and slow-simmered botanicals',
    servingHours: 'Available all evening services',
    bannerImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'mains',
    name: 'Hearth Mains',
    tagline: 'Cooked over fragrant alder and oak coals at 700°F',
    servingHours: 'Nightly 5:00 PM – Close',
    bannerImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'seasonal',
    name: 'Spring Harvest Specials',
    tagline: 'Wild morels, fiddlehead ferns, ramps & cedar-smoked lamb',
    servingHours: 'March to May Exclusive',
    bannerImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'desserts',
    name: 'Botanical Desserts',
    tagline: 'Crafted with ancient flours, mountain honey, and wild fruits',
    servingHours: 'Available all services',
    bannerImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'drinks',
    name: 'Botanical Cocktails & Cellar',
    tagline: 'Low-intervention natural wines and foraged spirits',
    servingHours: 'Full bar service nightly',
    bannerImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'brunch',
    name: 'Weekend Hearth Brunch',
    tagline: 'Wood-fired skillets, heritage sourdough, and garden spritzes',
    servingHours: 'Saturdays & Sundays 10:00 AM – 2:30 PM',
    bannerImage: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80'
  }
];

export const FULL_MENU: MenuItem[] = [
  // --------------------------------------------------------------------------
  // 1. STARTERS & BROTHS (6 items)
  // --------------------------------------------------------------------------
  {
    id: 'm-s1',
    slug: 'charred-heirloom-beets-smoked-labneh',
    name: 'Charred Heirloom Beets & Smoked Labneh',
    category: 'starters',
    price: 18,
    shortDescription: 'Ember-roasted golden beets, whipped pistachio labneh, pickled elderberries, and za’atar crisp.',
    longDescription: 'Heirloom Chioggia and golden beets buried directly in glowing embers until caramelized, paired with house-whipped labneh infused with applewood smoke, pickled wild elderberries, and hand-ground pistachios with stone-ground za’atar flatbread shards.',
    dietary: ['VG', 'GF'],
    ingredients: ['Heirloom golden beets', 'Cultured sheep labneh', 'Pickled elderberries', 'Raw pistachios', 'Za’atar herbs', 'Cold-pressed olive oil'],
    allergens: ['Milk (dairy)', 'Tree nuts (pistachios)'],
    cookingMethod: 'Buried in white embers at 550°F',
    pairing: 'Dry Mosel Riesling Kabinett 2021',
    nutritionNote: 'Approx. 320 kcal · 14g Protein · 18g Healthy Fats',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-s2',
    slug: 'wild-forest-morel-broth',
    name: 'Wild Forest Morel Mushroom Broth',
    category: 'starters',
    price: 21,
    shortDescription: 'Slow-steeped botanical broth, spring morels, roasted sunchoke crisps, and hazelnut oil.',
    longDescription: 'Simmered for twelve hours with roasted root vegetables, wild thyme, and toasted kombu. Poured tableside over freshly harvested Oregon spring morels, crispy Jerusalem artichoke shavings, and Oregon cold-pressed hazelnut oil.',
    dietary: ['V', 'GF', 'CHEF'],
    ingredients: ['Oregon wild morels', 'Roasted sunchokes', 'Double-steeped vegetable consommé', 'Cold-pressed hazelnut oil', 'Garden thyme'],
    allergens: ['Tree nuts (hazelnut)'],
    cookingMethod: '12-hour low-simmer reduction & fast ember sear',
    pairing: 'Jura Savagnin Nature 2020',
    nutritionNote: 'Approx. 210 kcal · 8g Protein · Rich in Beta-Glucans',
    image: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
    ],
    chefPick: true,
    seasonal: true
  },
  {
    id: 'm-s3',
    slug: 'pan-seared-hokkaido-scallops',
    name: 'Pan-Seared Hokkaido Scallops',
    category: 'starters',
    price: 26,
    shortDescription: 'Day-boat scallops seared over alderwood coals, sweet corn velouté, sage brown butter, samphire.',
    longDescription: 'Jumbo diver-caught Hokkaido scallops seared over red-hot alder coals in hand-forged carbon steel pans. Plated over velvety roasted sweet corn velouté with crispy coastal samphire and garden sage brown butter.',
    dietary: ['GF', 'CHEF'],
    ingredients: ['Hokkaido diver scallops', 'Roasted sweet corn', 'Coastal samphire', 'Cultured brown butter', 'Fresh garden sage', 'Chive oil'],
    allergens: ['Molluscan shellfish', 'Milk (dairy)'],
    cookingMethod: 'Fast hard sear over 750°F alder coals',
    pairing: 'Chablis Premier Cru 2021',
    nutritionNote: 'Approx. 380 kcal · 28g Protein · 16g Fats',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true,
    chefPick: true
  },
  {
    id: 'm-s4',
    slug: 'hearth-smoked-duck-liver-pate',
    name: 'Hearth-Smoked Duck Liver Pâté',
    category: 'starters',
    price: 22,
    shortDescription: 'Apple-quince mostarda, pickled mustard seeds, and toasted heritage sourdough pain de campagne.',
    longDescription: 'Silky pasture duck liver mousse gently cold-smoked over apple orchard wood. Accompanied by house-made spiced quince mostarda, tangy pickled golden mustard seeds, and thick slices of 36-hour fermented sourdough.',
    dietary: ['DF'],
    ingredients: ['Pasture-raised duck liver', 'Apple orchard smoke', 'Quince preserve', 'Pickled mustard seeds', 'Heritage grain sourdough'],
    allergens: ['Gluten (wheat)', 'Mustard'],
    cookingMethod: 'Cold smoke followed by gentle water-bath poaching',
    pairing: 'Vouvray Demi-Sec Chenin Blanc',
    nutritionNote: 'Approx. 440 kcal · 18g Protein · 32g Fats',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-s5',
    slug: 'garden-crudite-green-emulsion',
    name: 'Garden Crudité & Green Fermented Emulsion',
    category: 'starters',
    price: 16,
    shortDescription: 'Baby carrots, Romanesco florets, and radishes with fermented botanical green goddess.',
    longDescription: 'Harvested daily at 6:00 AM from our Willamette Valley partner farm: tender Romanesco, purple haze carrots, French breakfast radishes, and sugar snap peas. Served over crushed river ice with an umami-rich fermented green goddess dip.',
    dietary: ['VG', 'GF'],
    ingredients: ['Romanesco florets', 'Heirloom baby carrots', 'Breakfast radishes', 'Fermented herb emulsion', 'Watercress oil'],
    allergens: ['Milk (dairy)'],
    cookingMethod: 'Raw farm-fresh & ice-crisped',
    pairing: 'Sancerre Sauvignon Blanc 2022',
    nutritionNote: 'Approx. 180 kcal · 5g Fiber · Raw Enzymes',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-s6',
    slug: 'spiced-ember-roasted-bone-marrow',
    name: 'Spiced Ember-Roasted Bone Marrow',
    category: 'starters',
    price: 24,
    shortDescription: 'Grass-fed beef marrow roasted with shallot jam, charred sourdough toast, and mountain herb salad.',
    longDescription: 'Center-cut beef bones roasted horizontally over white alder embers with caramelized shallot jam, caperberry gremolata, and mountain herb salad to cut the decadence. Served with grilled garlic-rubbed toast.',
    dietary: ['DF', 'spicy'],
    ingredients: ['Grass-fed beef marrow bones', 'Caramelized shallot jam', 'Caperberry gremolata', 'Charred sourdough', 'Parsley mint salad'],
    allergens: ['Gluten (wheat)'],
    cookingMethod: 'Direct live coal roasting at 650°F',
    pairing: 'Northern Rhône Syrah (Saint-Joseph)',
    nutritionNote: 'Approx. 520 kcal · 14g Protein · 46g Fats',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // --------------------------------------------------------------------------
  // 2. HEARTH MAINS (6 items)
  // --------------------------------------------------------------------------
  {
    id: 'm-m1',
    slug: 'ember-roasted-heritage-short-rib',
    name: 'Ember-Roasted Heritage Short Rib',
    category: 'mains',
    price: 46,
    shortDescription: '14-hour wood-smoked grass-fed beef short rib, bone marrow jus, roasted parsnip mousseline.',
    longDescription: 'Pasture-raised Pacific Northwest beef short rib marinated in red wine and rosemary, smoked for 14 hours over oak and alderwood until fork-tender. Glazed in rich marrow bone jus and balanced by silky roasted parsnip purée.',
    dietary: ['GF', 'CHEF'],
    ingredients: ['Grass-fed beef short rib', 'Parsnip mousseline', 'Bone marrow reduction', 'Glazed spring baby leeks', 'Fresh bay laurel'],
    allergens: ['Milk (dairy)'],
    cookingMethod: '14-hour alder & oak wood smoke braise',
    pairing: 'Barolo DOCG Nebbiolo 2019',
    nutritionNote: 'Approx. 760 kcal · 48g Protein · 52g Fats',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true,
    chefPick: true
  },
  {
    id: 'm-m2',
    slug: 'wood-fired-wild-king-salmon',
    name: 'Wood-Fired Wild King Salmon',
    category: 'mains',
    price: 42,
    shortDescription: 'Cedar-plank roasted salmon, charred tender asparagus, lemon verbena butter, and crispy sea beans.',
    longDescription: 'Hook-and-line Columbia River Chinook salmon pinned to untreated red cedar planks and positioned alongside the hearth flames. Basted with botanical lemon verbena butter and served with blistered wild asparagus and crunchy sea beans.',
    dietary: ['GF', 'DF'],
    ingredients: ['Wild King Salmon', 'Red cedar planks', 'Tender green asparagus', 'Lemon verbena glaze', 'Coastal sea beans'],
    allergens: ['Fish (salmon)'],
    cookingMethod: 'Radiant wood-fire cedar plank roasting',
    pairing: 'Willamette Valley Pinot Noir 2021',
    nutritionNote: 'Approx. 560 kcal · 42g Protein · High Omega-3',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true
  },
  {
    id: 'm-m3',
    slug: 'hearth-burrata-mission-fig-flatbread',
    name: 'Hearth Burrata & Mission Fig Flatbread',
    category: 'mains',
    price: 26,
    shortDescription: '36-hour fermented heritage dough, creamy burrata, roasted figs, mountain thyme, forest honey.',
    longDescription: 'Milled in-house from Rouge de Bordeaux heritage wheat, fermented cold for 36 hours. Baked at 800°F with roasted Black Mission figs, artisanal Willamette burrata, fresh thyme leaves, and a finishing swirl of raw mountain wildflower honey.',
    dietary: ['VG', 'CHEF'],
    ingredients: ['House stone-milled flour', 'Fresh artisanal burrata', 'Black Mission figs', 'Raw mountain honey', 'Wild thyme', 'Extra virgin olive oil'],
    allergens: ['Gluten (wheat)', 'Milk (dairy)'],
    cookingMethod: '800°F wood-fired stone oven floor',
    pairing: 'Lambrusco di Sorbara Frizzante',
    nutritionNote: 'Approx. 620 kcal · 22g Protein · 68g Carbs',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
    ],
    chefPick: true
  },
  {
    id: 'm-m4',
    slug: 'pasture-raised-wood-roasted-chicken',
    name: 'Pasture-Raised Wood-Roasted Chicken',
    category: 'mains',
    price: 38,
    shortDescription: 'Organic half chicken brined with bay laurel, spit-roasted over alder coals, garlic confit jus.',
    longDescription: 'Half pasture-raised chicken brined for 24 hours in salt, juniper, and fresh bay leaves, then slowly turned on our hearth rotisserie until the skin is blistered and golden. Accompanied by whole roasted garlic cloves and natural jus.',
    dietary: ['GF', 'DF'],
    ingredients: ['Organic pastured chicken', 'Bay laurel brine', 'Garlic confit', 'Hearth-roasted fingerling potatoes', 'Poultry jus'],
    allergens: [],
    cookingMethod: 'Spit-rotisserie roasting over alder coals',
    pairing: 'Chenin Blanc Loire Valley',
    nutritionNote: 'Approx. 640 kcal · 52g Protein · 28g Fats',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-m5',
    slug: 'spiced-wood-fired-cauliflower-steak',
    name: 'Spiced Wood-Fired Cauliflower Steak',
    category: 'mains',
    price: 28,
    shortDescription: 'Caramelized cauliflower head, smoked romesco sauce, toasted marcona almonds, pomegranate mint salad.',
    longDescription: 'A whole thick-cut cauliflower steak steam-roasted over fruitwood embers, charred until sweet and nut-brown. Plated atop smoky roasted pepper and hazelnut romesco sauce with pomegranate seeds, fresh mint, and toasted marcona almonds.',
    dietary: ['V', 'GF', 'DF', 'spicy'],
    ingredients: ['Heirloom cauliflower', 'Smoked red pepper romesco', 'Toasted marcona almonds', 'Pomegranate arils', 'Fresh mint', 'Sumac'],
    allergens: ['Tree nuts (almonds)'],
    cookingMethod: 'Cast-iron hearth press & ember finish',
    pairing: 'Skin-Contact Orange Malvasia 2022',
    nutritionNote: 'Approx. 340 kcal · 12g Protein · 18g Healthy Fats',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-m6',
    slug: 'dry-aged-bone-in-ribeye-foraged-butter',
    name: '45-Day Dry-Aged Ribeye & Foraged Pine Butter',
    category: 'mains',
    price: 68,
    shortDescription: '18oz prime ribeye grilled over white oak embers, wild pine needle compound butter, charred shallots.',
    longDescription: 'Locally sourced Oregon prime beef aged for 45 days in our temperature-controlled Himalayan salt chamber. Grilled directly over glowing white oak embers at 750°F to form an intense aromatic crust, finished with hand-churned spruce and pine compound butter.',
    dietary: ['GF', 'CHEF'],
    ingredients: ['45-day dry-aged beef ribeye', 'White oak fire', 'Spruce needle compound butter', 'Charred French shallots', 'Maldon smoked salt'],
    allergens: ['Milk (dairy)'],
    cookingMethod: 'White oak live-fire open grill',
    pairing: 'Napa Valley Cabernet Sauvignon 2018',
    nutritionNote: 'Approx. 890 kcal · 64g Protein · 68g Fats',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true,
    chefPick: true
  },

  // --------------------------------------------------------------------------
  // 3. SEASONAL SPECIALS (Spring Harvest, 6 items)
  // --------------------------------------------------------------------------
  {
    id: 'm-sp1',
    slug: 'hearth-braised-morel-risotto',
    name: 'Hearth-Braised Morel Risotto',
    category: 'seasonal',
    price: 34,
    shortDescription: 'Acquerello carnaroli rice, foraged spring morels, 30-month Parmigiano, black summer truffle.',
    longDescription: 'Slowly stirred with roasted mushroom broth and finished over the gentle hearth embers. Packed with hand-foraged Cascade morels, rich cultured butter, 30-month Parmigiano-Reggiano, and freshly shaved black spring truffles.',
    dietary: ['VG', 'GF', 'CHEF'],
    ingredients: ['Acquerello Carnaroli rice', 'Hand-foraged spring morels', 'Parmigiano-Reggiano 30M', 'Black summer truffle', 'Cultured farm butter'],
    allergens: ['Milk (dairy)'],
    cookingMethod: 'Gentle wood-fire pot braise & emulsification',
    pairing: 'Etna Bianco Carricante 2022',
    nutritionNote: 'Approx. 490 kcal · 14g Protein · 22g Fats',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true,
    seasonal: true,
    chefPick: true
  },
  {
    id: 'm-sp2',
    slug: 'spring-lamb-rack-fava-beans',
    name: 'Ember-Smoked Oregon Spring Lamb Rack',
    category: 'seasonal',
    price: 52,
    shortDescription: 'Grass-fed lamb chops, braised English peas, crushed fava beans, wild ramp chimichurri.',
    longDescription: 'Pasture-born Willamette Valley spring lamb, marinated in wild mint and roasted garlic. Smoked over applewood coals to medium-rare, served alongside sweet butter-braised English peas, crushed tender fava beans, and a vibrant foraged ramp chimichurri.',
    dietary: ['GF', 'DF', 'CHEF'],
    ingredients: ['Willamette grass-fed lamb rack', 'Braised English peas', 'Fresh fava beans', 'Foraged ramp chimichurri', 'Wild field mint'],
    allergens: [],
    cookingMethod: 'Applewood ember roast & flame sear',
    pairing: 'Rioja Gran Reserva Tempranillo 2016',
    nutritionNote: 'Approx. 680 kcal · 46g Protein · 48g Fats',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true,
    seasonal: true,
    chefPick: true
  },
  {
    id: 'm-sp3',
    slug: 'pan-roasted-halibut-fiddlehead-ferns',
    name: 'Pan-Roasted Halibut & Fiddlehead Ferns',
    category: 'seasonal',
    price: 44,
    shortDescription: 'Pacific halibut fillet, sautéed fiddleheads, green garlic emulsion, crispy leeks.',
    longDescription: 'Line-caught Pacific halibut pan-roasted in cast iron with browned butter until flakey and tender. Nested on a bed of sautéed wild Oregon fiddlehead ferns, young green garlic purée, and delicate crispy leek threads.',
    dietary: ['GF', 'CHEF'],
    ingredients: ['Pacific halibut fillet', 'Wild fiddlehead ferns', 'Young green garlic', 'Clarified butter', 'Crispy leek threads'],
    allergens: ['Fish (halibut)', 'Milk (dairy)'],
    cookingMethod: 'High-heat pan roast over oak embers',
    pairing: 'Pouilly-Fuissé Chardonnay 2021',
    nutritionNote: 'Approx. 420 kcal · 38g Protein · 16g Fats',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
    ],
    seasonal: true
  },
  {
    id: 'm-sp4',
    slug: 'wood-fired-artichokes-meyer-lemon',
    name: 'Wood-Fired Globe Artichokes & Meyer Lemon Aioli',
    category: 'seasonal',
    price: 20,
    shortDescription: 'Charred California globe artichokes, preserved Meyer lemon aioli, herb breadcrumbs.',
    longDescription: 'Fresh spring globe artichokes par-steamed with bay leaves and coriander, then split and charred over smoking alderwood coals. Served warm with a house-whipped preserved Meyer lemon aioli and herb-dusted sourdough crisps.',
    dietary: ['VG'],
    ingredients: ['Globe artichokes', 'Preserved Meyer lemon', 'Cage-free egg aioli', 'Charred breadcrumbs', 'Fresh parsley'],
    allergens: ['Eggs', 'Gluten (wheat)'],
    cookingMethod: 'Steam then direct ember charring',
    pairing: 'Vermentino di Sardegna 2022',
    nutritionNote: 'Approx. 260 kcal · 7g Protein · 14g Fiber',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
    ],
    seasonal: true
  },
  {
    id: 'm-sp5',
    slug: 'spring-nettle-handmade-gnocchi',
    name: 'Wild Spring Nettle Handmade Gnocchi',
    category: 'seasonal',
    price: 30,
    shortDescription: 'Potato and blanched stinging nettle dumplings, sheep ricotta salata, toasted hazelnuts.',
    longDescription: 'Hand-rolled russet potato dumplings folded with vibrant blanched Oregon stinging nettles. Tossed in brown butter, freshly grated aged sheep ricotta salata, and crunchy toasted Willamette hazelnuts.',
    dietary: ['VG', 'CHEF'],
    ingredients: ['Russet potatoes', 'Foraged stinging nettles', 'Sheep ricotta salata', 'Toasted Oregon hazelnuts', 'Cultured brown butter'],
    allergens: ['Gluten (wheat)', 'Milk (dairy)', 'Tree nuts (hazelnuts)'],
    cookingMethod: 'Hand-rolled & fast skillet brown-butter toss',
    pairing: 'Soave Classico Pieropan 2022',
    nutritionNote: 'Approx. 480 kcal · 14g Protein · 24g Fats',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
    ],
    seasonal: true
  },
  {
    id: 'm-sp6',
    slug: 'alder-smoked-duck-breast-rhubarb',
    name: 'Alder-Smoked Duck Breast & Tart Rhubarb',
    category: 'seasonal',
    price: 40,
    shortDescription: 'Crispy skin duck breast, wood-roasted spring rhubarb compote, baby turnip tops.',
    longDescription: 'Pasture-raised duck breast scored and pan-seared skin side down before receiving a gentle kiss of alderwood smoke. Plated with a piquant roasted spring rhubarb gastrique and braised tender baby turnip greens.',
    dietary: ['GF', 'DF'],
    ingredients: ['Pasture duck breast', 'Spring rhubarb gastrique', 'Baby turnip greens', 'Alder smoke', 'Pink peppercorn'],
    allergens: [],
    cookingMethod: 'Slow skin crisping and light alder smoke',
    pairing: 'Bourgogne Rouge Pinot Noir 2020',
    nutritionNote: 'Approx. 540 kcal · 36g Protein · 34g Fats',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
    ],
    seasonal: true
  },

  // --------------------------------------------------------------------------
  // 4. BOTANICAL DESSERTS (6 items)
  // --------------------------------------------------------------------------
  {
    id: 'm-d1',
    slug: 'smoked-wood-oven-apple-fig-tart',
    name: 'Smoked Wood-Oven Apple & Fig Tart',
    category: 'desserts',
    price: 15,
    shortDescription: 'Caramelized orchard apples, mission figs, flaky rye crust, bourbon vanilla bean gelato.',
    longDescription: 'Honeycrisp apples and Black Mission figs roasted inside our stone wood oven with raw Demerara sugar and Ceylon cinnamon. Encased in a flaky heritage rye pastry crust and topped with a melting scoop of house bourbon vanilla gelato.',
    dietary: ['VG', 'CHEF'],
    ingredients: ['Honeycrisp apples', 'Black Mission figs', 'Heritage rye flour', 'Cultured butter', 'Bourbon vanilla bean gelato'],
    allergens: ['Gluten (rye/wheat)', 'Milk (dairy)', 'Eggs'],
    cookingMethod: 'Stone wood oven bake at 450°F',
    pairing: 'Château d’Yquem Sauternes 2017',
    nutritionNote: 'Approx. 420 kcal · 6g Protein · 18g Fats',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true,
    chefPick: true
  },
  {
    id: 'm-d2',
    slug: 'dark-chocolate-ganache-pine-salt',
    name: 'Dark Chocolate Ganache & Pine Salt',
    category: 'desserts',
    price: 16,
    shortDescription: '70% Valrhona dark chocolate torte, foraged spruce tip syrup, toasted hazelnut praline.',
    longDescription: 'Decadent flourless dark chocolate torte made with single-origin Valrhona chocolate. Drizzled with an aromatic syrup infused with young spring spruce tips, finished with crunchy toasted hazelnut praline and flaky Maldon pine salt.',
    dietary: ['VG', 'GF'],
    ingredients: ['70% Valrhona chocolate', 'Spruce tip syrup', 'Oregon hazelnuts', 'Farm cream', 'Maldon pine smoked salt'],
    allergens: ['Milk (dairy)', 'Tree nuts (hazelnuts)', 'Eggs'],
    cookingMethod: 'Slow water-bath gentle bake',
    pairing: 'Taylor Fladgate 20-Year Tawny Port',
    nutritionNote: 'Approx. 480 kcal · 8g Protein · 32g Fats',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-d3',
    slug: 'botanical-lemon-verbena-panna-cotta',
    name: 'Botanical Lemon Verbena Panna Cotta',
    category: 'desserts',
    price: 14,
    shortDescription: 'Silky farm-cream panna cotta infused with lemon verbena, wild huckleberry coulis, almond tuile.',
    longDescription: 'Pasture Jersey cow cream steeped with freshly picked garden lemon verbena leaves. Set gently to a delicate wobble, accompanied by wild hand-picked mountain huckleberry coulis and a paper-thin almond lace tuile.',
    dietary: ['GF'],
    ingredients: ['Jersey farm cream', 'Fresh lemon verbena', 'Wild huckleberries', 'Grass-fed gelatin', 'Almond flour'],
    allergens: ['Milk (dairy)', 'Tree nuts (almond)'],
    cookingMethod: 'Infused steep & chilled setting',
    pairing: 'Moscato d’Asti Bera 2023',
    nutritionNote: 'Approx. 340 kcal · 5g Protein · 24g Fats',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-d4',
    slug: 'spiced-hazelnut-basque-cheesecake',
    name: 'Spiced Hazelnut Basque Cheesecake',
    category: 'desserts',
    price: 15,
    shortDescription: 'Caramelized burnt top cheesecake, roasted Oregon hazelnuts, smoked sea salt caramel.',
    longDescription: 'Baked in our intense wood oven so the exterior caramelizes into a deep mahogany brown while the center remains molten, velvety, and rich. Folded with roasted hazelnut paste and served with warm smoked caramel.',
    dietary: ['VG', 'GF'],
    ingredients: ['Cream cheese', 'Heavy cream', 'Pasture eggs', 'Roasted hazelnut paste', 'Smoked sea salt caramel'],
    allergens: ['Milk (dairy)', 'Tree nuts (hazelnut)', 'Eggs'],
    cookingMethod: '500°F high-heat wood oven caramelization',
    pairing: 'Pedro Ximénez Sherry',
    nutritionNote: 'Approx. 510 kcal · 10g Protein · 38g Fats',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-d5',
    slug: 'warm-hearth-brioche-smoked-honey',
    name: 'Warm Hearth Brioche with Smoked Honey',
    category: 'desserts',
    price: 13,
    shortDescription: 'Fresh out of the wood oven, slathered in whipped mascarpone and wildflower honey.',
    longDescription: 'Individual mini brioche rolls pulled directly from the hearth embers with a blistered crust. Slathered with house-whipped lemon zest mascarpone, applewood smoked raw clover honey, and bee pollen granules.',
    dietary: ['VG'],
    ingredients: ['Enriched brioche dough', 'Whipped mascarpone', 'Smoked clover honey', 'Bee pollen', 'Flaky sea salt'],
    allergens: ['Gluten (wheat)', 'Milk (dairy)', 'Eggs'],
    cookingMethod: 'Wood-oven hearth bake',
    pairing: 'Late Harvest Tokaji Aszú 5 Puttonyos',
    nutritionNote: 'Approx. 390 kcal · 8g Protein · 19g Fats',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-d6',
    slug: 'foraged-elderberry-sorbet',
    name: 'Foraged Elderberry Sorbet & Mint Tuile',
    category: 'desserts',
    price: 12,
    shortDescription: 'Zero-dairy chilled sorbet crafted with hand-picked wild elderberries and crystallized mint.',
    longDescription: 'A refreshing palate cleanser crafted without dairy. Made solely from pure hand-foraged Oregon wild elderberries, fresh Meyer lemon juice, cane sugar, and garnished with crystallized garden spearmint leaves.',
    dietary: ['V', 'GF', 'DF'],
    ingredients: ['Wild Oregon elderberries', 'Meyer lemon juice', 'Organic cane syrup', 'Fresh spearmint leaves'],
    allergens: [],
    cookingMethod: 'Cold churned & slow frozen',
    pairing: 'Sparkling Rosé Crémant d’Alsace',
    nutritionNote: 'Approx. 160 kcal · 0g Fat · High Antioxidants',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // --------------------------------------------------------------------------
  // 5. BOTANICAL COCKTAILS & CELLAR (6 items)
  // --------------------------------------------------------------------------
  {
    id: 'm-dr1',
    slug: 'the-emerald-hearth-cocktail',
    name: 'The Emerald Hearth (Botanical Signature)',
    category: 'drinks',
    price: 18,
    shortDescription: 'Botanical gin, charred rosemary essence, green chartreuse, fresh lime, and smoked sea salt rim.',
    longDescription: 'Small-batch Pacific Northwest botanical gin shaken with house-charred rosemary cordial, French Green Chartreuse, fresh Persian lime juice, and a rim of alderwood-smoked sea salt. Garnished with a flaming rosemary sprig.',
    dietary: ['V', 'CHEF'],
    ingredients: ['Locally distilled botanical gin', 'Charred rosemary syrup', 'Green Chartreuse', 'Fresh lime juice', 'Alder smoked salt'],
    allergens: [],
    cookingMethod: 'Tableside smoking & hand shake',
    pairing: 'Pairs exceptionally with Hokkaido Scallops',
    nutritionNote: 'Approx. 195 kcal · 2oz Spirit ABV 22%',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true,
    chefPick: true
  },
  {
    id: 'm-dr2',
    slug: 'wild-orchard-old-fashioned',
    name: 'Wild Orchard Old Fashioned',
    category: 'drinks',
    price: 19,
    shortDescription: 'Rye whiskey infused with roasted orchard wood, black walnut bitters, caramelized maple.',
    longDescription: 'High-rye whiskey steeped with toasted cherry and apple orchard wood chips. Stirred with artisanal black walnut bitters, pure Oregon caramelized maple reduction, and expressed orange peel over a clear hand-cut ice diamond.',
    dietary: ['V'],
    ingredients: ['Rye whiskey', 'Toasted orchard wood', 'Black walnut bitters', 'Caramelized maple syrup', 'Expressed orange oil'],
    allergens: ['Tree nuts (walnut bitters)'],
    cookingMethod: 'Wood-steeped infusion & hand stir',
    pairing: 'Pairs with Ember-Roasted Short Rib',
    nutritionNote: 'Approx. 210 kcal · 2.25oz Spirit ABV 28%',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-dr3',
    slug: 'foraged-elderflower-spritz',
    name: 'Foraged Elderflower Spritz (Low-ABV)',
    category: 'drinks',
    price: 16,
    shortDescription: 'Elderflower cordial, sparkling pet-nat, verjus, cucumber ribbon, fresh garden mint.',
    longDescription: 'A light, effervescent refresher featuring house-steeped spring elderflower cordial, natural low-intervention Pét-Nat sparkling wine, tart green grape verjus, and long ribbons of crisp English cucumber.',
    dietary: ['V', 'GF'],
    ingredients: ['House elderflower cordial', 'Biodynamic Pét-Nat', 'Green grape verjus', 'Cucumber ribbon', 'Spearmint'],
    allergens: ['Sulphites (natural wine)'],
    cookingMethod: 'Gentle build over mountain spring ice',
    pairing: 'Pairs with Burrata & Fig Flatbread',
    nutritionNote: 'Approx. 135 kcal · ABV 7.5%',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-dr4',
    slug: 'smoked-pine-juniper-elixir',
    name: 'Smoked Pine & Juniper Elixir (Zero-Proof)',
    category: 'drinks',
    price: 13,
    shortDescription: 'Distilled non-alcoholic botanical spirit, cedar smoke essence, wild lingonberry, artisan tonic.',
    longDescription: 'Distilled in-house using whole juniper berries, spruce tips, and mountain angelica root without alcohol. Layered with cold-pressed wild lingonberry shrub, cedar wood smoke, and artisanal cinchona tonic water.',
    dietary: ['V', 'GF', 'DF'],
    ingredients: ['Distilled botanical hydrosol', 'Cedar smoke essence', 'Wild lingonberry shrub', 'Cinchona tonic', 'Pine tip garnish'],
    allergens: [],
    cookingMethod: 'Copper alembic steam distillation',
    pairing: 'Pairs with Wood-Roasted Cauliflower',
    nutritionNote: 'Approx. 75 kcal · 0.0% ABV · Low Glycemic',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-dr5',
    slug: 'biodynamic-orange-wine',
    name: 'Biodynamic Orange Wine (Glass / Bottle)',
    category: 'drinks',
    price: 17,
    shortDescription: 'Skin-contact Pinot Gris from Columbia Gorge. Apricot skin, chamomile, vibrant minerality.',
    longDescription: 'Naturally fermented on skins for 24 days in clay amphorae with indigenous wild yeasts. Unfiltered, unfined, and with zero added sulfites. Boasts aromas of dried apricots, chamomile tea, and orange peel with grounding earthiness.',
    dietary: ['V', 'GF'],
    ingredients: ['100% Organic Pinot Gris grapes', 'Wild indigenous yeasts', 'Clay amphora aging'],
    allergens: ['Naturally occurring sulphites'],
    cookingMethod: 'Spontaneous 24-day skin fermentation in clay',
    pairing: 'Pairs with Morel Broth & Scallops',
    nutritionNote: 'Approx. 125 kcal per 5oz glass · ABV 12.5%',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-dr6',
    slug: 'sparkling-hearth-apple-cider',
    name: 'Sparkling Hearth Apple Cider (Warm / Cold)',
    category: 'drinks',
    price: 9,
    shortDescription: 'Unfiltered heirloom orchard press, cinnamon bark, star anise, roasted orange wheel.',
    longDescription: 'Pressed from four heirloom apple varieties grown in Hood River. Simmered over hearth coals with whole Korintje cinnamon bark, crushed star anise pods, and sliced blood oranges. Served either chilled with bubbles or warmed in earthenware mugs.',
    dietary: ['V', 'GF', 'DF'],
    ingredients: ['Heirloom Hood River apples', 'Korintje cinnamon', 'Star anise', 'Charred blood orange'],
    allergens: [],
    cookingMethod: 'Slow kettle simmer over gentle coals',
    pairing: 'Pairs with Wood-Oven Apple & Fig Tart',
    nutritionNote: 'Approx. 110 kcal · 0.0% ABV · Rich Vitamin C',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // --------------------------------------------------------------------------
  // 6. WEEKEND HEARTH BRUNCH (6 items)
  // --------------------------------------------------------------------------
  {
    id: 'm-b1',
    slug: 'heritage-sourdough-cast-iron-pancakes',
    name: 'Heritage Sourdough Cast Iron Pancakes',
    category: 'brunch',
    price: 20,
    shortDescription: 'Ancient-grain fermented flapjacks, wild Oregon huckleberry compote, cultured butter, maple.',
    longDescription: 'Fermented for 24 hours with our sourdough mother and freshly milled Sonora wheat. Baked in individual cast iron skillets directly on hearth embers so the edges turn delightfully crisp while the interior stays fluffy and cloud-like.',
    dietary: ['VG', 'CHEF'],
    ingredients: ['Fermented Sonora wheat batter', 'Wild Oregon huckleberries', 'Cultured Jersey butter', 'Pure grade-A maple syrup'],
    allergens: ['Gluten (wheat)', 'Milk (dairy)', 'Eggs'],
    cookingMethod: 'Cast-iron skillet bake on glowing coals',
    pairing: 'Foraged Elderflower Spritz',
    nutritionNote: 'Approx. 520 kcal · 12g Protein · 74g Carbs',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80'
    ],
    highlight: true,
    chefPick: true
  },
  {
    id: 'm-b2',
    slug: 'wood-fired-shakshuka-farm-eggs',
    name: 'Wood-Fired Shakshuka & Farm Eggs',
    category: 'brunch',
    price: 22,
    shortDescription: 'Ember-roasted peppers, tomato sugo, two pasture eggs, sheep feta, warm flatbread.',
    longDescription: 'Sweet bell peppers and heirloom tomatoes roasted directly on embers until sweet and blistered, spiced with cumin, smoked paprika, and Aleppo pepper. Two pasture eggs cracked right in and baked in wood fire until whites set and yolks remain runny.',
    dietary: ['VG', 'spicy'],
    ingredients: ['Heirloom tomato sugo', 'Sweet bell peppers', 'Two pasture-raised eggs', 'Crumbled sheep feta', 'Stone-milled flatbread'],
    allergens: ['Eggs', 'Milk (dairy)', 'Gluten (flatbread)'],
    cookingMethod: 'Earthenware dish direct hearth oven bake',
    pairing: 'Iced Smoked Botanical Americano',
    nutritionNote: 'Approx. 440 kcal · 22g Protein · 24g Fats',
    image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-b3',
    slug: 'wild-smoked-salmon-hearth-benedict',
    name: 'Wild Smoked Salmon Hearth Benedict',
    category: 'brunch',
    price: 26,
    shortDescription: 'Cold-smoked Pacific salmon, poached yard eggs, brown butter hollandaise, toasted brioche.',
    longDescription: 'House cold-smoked wild Pacific king salmon layered over toasted heritage brioche slices, crowned with two gently poached yard eggs and smothered in velvety brown butter hollandaise seasoned with fresh tarragon and capers.',
    dietary: ['CHEF'],
    ingredients: ['Wild smoked king salmon', 'Poached pastured eggs', 'Heritage brioche', 'Brown butter hollandaise', 'Crispy baby capers'],
    allergens: ['Fish (salmon)', 'Eggs', 'Gluten (wheat)', 'Milk (dairy)'],
    cookingMethod: 'Sous-vide egg poach & warm browning',
    pairing: 'Crémant de Bourgogne Brut',
    nutritionNote: 'Approx. 610 kcal · 32g Protein · 44g Fats',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
    ],
    chefPick: true
  },
  {
    id: 'm-b4',
    slug: 'botanical-avocado-sprouted-seed-toast',
    name: 'Botanical Avocado & Sprouted Seed Toast',
    category: 'brunch',
    price: 18,
    shortDescription: 'Crushed Hass avocado, toasted sunflower dukkah, pickled shallots, seeded sourdough.',
    longDescription: 'Thick slice of 48-hour fermented seeded rye sourdough grilled with olive oil. Generously topped with chunky Hass avocado, pickled pink shallots, fresh watercress, and crunchy Egyptian-style hazelnut and sunflower seed dukkah.',
    dietary: ['V', 'DF'],
    ingredients: ['Hass avocado', 'Seeded rye sourdough', 'Sunflower seed dukkah', 'Pickled shallots', 'Watercress leaves'],
    allergens: ['Gluten (rye/wheat)', 'Tree nuts (hazelnut in dukkah)'],
    cookingMethod: 'Ember-grilled toast and fresh preparation',
    pairing: 'Cold-Pressed Green Apple & Celery Juice',
    nutritionNote: 'Approx. 390 kcal · 11g Fiber · 24g Healthy Fats',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-b5',
    slug: 'crispy-pork-belly-sweet-corn-hash',
    name: 'Crispy Pork Belly & Sweet Corn Hash',
    category: 'brunch',
    price: 24,
    shortDescription: 'Alderwood smoked heritage pork belly, Yukon potatoes, roasted poblano, sunny egg.',
    longDescription: 'Thick slabs of Berkshire pork belly cured in sea salt and maple, then smoked over alderwood. Diced and crisped in cast iron alongside Yukon gold potatoes, roasted poblano chilies, sweet corn, and topped with a crisp sunny-side egg.',
    dietary: ['GF', 'DF'],
    ingredients: ['Heritage Berkshire pork belly', 'Yukon gold potatoes', 'Roasted poblano pepper', 'Sweet summer corn', 'Sunny yard egg'],
    allergens: ['Eggs'],
    cookingMethod: 'Slow alder smoke & cast-iron hash crisping',
    pairing: 'Smoky Bloody Mary with Hearth Salt',
    nutritionNote: 'Approx. 690 kcal · 34g Protein · 48g Fats',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'm-b6',
    slug: 'seasonal-farm-fruit-chia-parfait',
    name: 'Seasonal Farm Fruit & Chia Parfait',
    category: 'brunch',
    price: 15,
    shortDescription: 'Coconut yogurt, cold-pressed berry coulis, house sprouted buckwheat granola, clover honey.',
    longDescription: 'Cultured coconut yogurt layered with organic chia seeds soaked in almond milk, tart cold-pressed blackberry coulis, and our signature crunchy oven-toasted buckwheat and pumpkin seed granola sweetened with clover honey.',
    dietary: ['VG', 'GF', 'DF'],
    ingredients: ['Cultured coconut yogurt', 'Blackberry coulis', 'Sprouted buckwheat granola', 'Chia seeds', 'Wildflower clover honey'],
    allergens: ['Tree nuts (almond milk)'],
    cookingMethod: 'Raw botanical prep & slow baked granola',
    pairing: 'Loose Leaf Moroccan Mint Tea',
    nutritionNote: 'Approx. 310 kcal · 9g Fiber · 14g Protein',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

// ----------------------------------------------------------------------------
// Seasonal "Spring Harvest" Data Structure
// ----------------------------------------------------------------------------
export const SEASONAL_HARVEST: SeasonalHarvestInfo = {
  seasonTitle: 'Spring Harvest',
  seasonLabel: 'Available March to May',
  subtitle: 'Wild Morels, Verdant Ramps & Pacific Wood-Fired Offerings',
  story: 'As Pacific Northwest soils awaken from winter dormancy, our partner farms across the Willamette and Hood River valleys yield fleeting treasures: forest morels, tender ramps, sweet English peas, and delicate stinging nettles. Every plate reflects the brief, luminous window between the last frost and early summer sun.',
  farms: [
    { name: 'Rainshadow Heritage Farms', region: 'Sisters, Oregon', focus: 'Pasture Lamb & Heritage Sonora Grain' },
    { name: 'Cascadia Wild Foraging Co.', region: 'Mount Hood Foothills', focus: 'Hand-Picked Spring Morels & Fiddleheads' },
    { name: 'Willamette Stone Creamery', region: 'Carlton, Oregon', focus: 'Fresh Cultured Butter & Sheep Ricotta' },
    { name: 'Coastal Tides Day-Boat', region: 'Astoria, Oregon', focus: 'Wild Pacific Halibut & Dungeness Crab' }
  ],
  ingredients: [
    { name: 'Cascade Spring Morels', tag: 'Foraged Wild', description: 'Harvested under Douglas fir canopies within hours of snowfall melt.' },
    { name: 'Wild Ramp Leaves', tag: 'Native Allium', description: 'Pungent, sweet green garlic notes for our hearth chimichurri.' },
    { name: 'Fiddlehead Ferns', tag: 'River Basin', description: 'Crisp, delicate curls boasting vegetal sweetness like asparagus.' },
    { name: 'Tender English Peas', tag: 'Valley Harvest', description: 'Picked at dawn while dew keeps their sugar content at peak level.' },
    { name: 'Stinging Spring Nettles', tag: 'Ancient Greens', description: 'Blanched to silky perfection for deep mineral chlorophyll intensity.' }
  ],
  featuredDishSlug: 'hearth-braised-morel-risotto',
  dishSlugs: [
    'wild-forest-morel-broth',
    'hearth-braised-morel-risotto',
    'spring-lamb-rack-fava-beans',
    'pan-roasted-halibut-fiddlehead-ferns'
  ]
};

// ----------------------------------------------------------------------------
// "Why Dine at Verdant Hearth" Stories & Detail Pages
// ----------------------------------------------------------------------------
export const WHY_DINE_REASONS: WhyDineReason[] = [
  {
    id: 'why-1',
    slug: 'live-hearth-cooking',
    num: '01',
    title: 'Wood-Fired Hearth Craft',
    tagline: 'Pure radiant wood coals. Zero gas. Zero shortcuts.',
    shortDescription: 'Every hot dish touches real seasoned Oregon oak, fruitwood, and alder embers for an irreplaceable depth of smokiness.',
    fullStory: 'At Verdant Hearth, our kitchen contains no gas lines, electric ranges, or microwave ovens. Our massive open hearth was hand-built by third-generation stonemasons using local river basalt and refractory firebrick. From the first morning kindling to late-night embers, every steak, vegetable, broth, and flatbread interacts directly with glowing coals. This ancient method caramelizes natural sugars, infuses delicate wood aromatic oils, and creates textures impossible to replicate with modern utility gas.',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: [
      { label: 'Ember Temperatures', value: '700°–850°F', description: 'Intense radiant heat seals natural moisture and creates crisp exterior crusts.' },
      { label: 'Wood Sourcing', value: '100% Sustainable', description: 'Fallen Oregon white oak, hazelnut shells, and pruned orchard woods.' },
      { label: 'Culinary Time', value: '14-Hour Braises', description: 'Gentle low-smoke overnight embers for tender short ribs and broths.' }
    ],
    quote: {
      text: 'Fire is not merely a cooking medium; it is an active ingredient that speaks of the forest and the season.',
      author: 'Julian Thorne',
      role: 'Executive Chef & Co-Founder'
    },
    relatedSlugs: ['regenerative-farming-partners', 'living-botanical-cellar', 'zero-waste-closed-loop']
  },
  {
    id: 'why-2',
    slug: 'regenerative-farming-partners',
    num: '02',
    title: '42 Regenerative Partners',
    tagline: 'Picked at dawn. Celebrated at dusk.',
    shortDescription: 'We partner directly with small biodynamic growers who prioritize soil health, heritage seed banks, and chemical-free stewardship.',
    fullStory: 'Great cooking begins in living soil. We do not purchase through industrial distribution warehouses; our kitchen collaborates intimately with 42 independent regenerative farms located across the Willamette Valley, Columbia River Gorge, and the foothills of Mount Hood. Our chefs meet weekly with farmers to plan seed rotations, recover forgotten heirloom crops, and harvest produce at the exact hour of peak sweetness and nutritional vitality.',
    heroImage: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: [
      { label: 'Direct Farms', value: '42 Growers', description: 'Zero middlemen, ensuring full fair-trade compensation to agricultural workers.' },
      { label: 'Average Distance', value: '< 65 Miles', description: 'Substantially reducing transportation emissions and maintaining field freshness.' },
      { label: 'Seed Diversity', value: '80+ Heirlooms', description: 'Preserving rare historical varieties of wheat, maize, beans, and root vegetables.' }
    ],
    quote: {
      text: 'When you care for the soil with reverence, the vegetables need very little manipulation to taste extraordinary.',
      author: 'Clara Sterling',
      role: 'Lead Forager & Ethnobotanist'
    },
    relatedSlugs: ['live-hearth-cooking', 'zero-waste-closed-loop', 'luminous-restorative-hospitality']
  },
  {
    id: 'why-3',
    slug: 'living-botanical-cellar',
    num: '03',
    title: 'Living Botanical Cellar',
    tagline: '320+ low-intervention biodynamic wines and foraged elixirs.',
    shortDescription: 'Our beverage program champions spontaneous native fermentations, ancient clay amphora aging, and zero synthetic additives.',
    fullStory: 'Our subterranean wine cellar is a living library of low-intervention and biodynamic viticulture. Curated by Master Sommelier Matthieu Laurent, our 320+ bottle collection strictly excludes synthetic pesticides, industrial clarifying agents, and flavor additives. Alongside skin-contact orange wines and unfiltered grower champagnes, we house an active botanical fermentation laboratory crafting seasonal zero-proof botanical tonics and cold-steeped shrubs.',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: [
      { label: 'Curated Labels', value: '320+ Bottles', description: 'Sourced from independent multigenerational vintners practicing terroir authenticity.' },
      { label: 'Zero-Proof Program', value: '14 House Elixirs', description: 'Handcrafted non-alcoholic distillations that pair seamlessly with multi-course menus.' },
      { label: 'Organic Guarantee', value: '100% Certified', description: 'No artificial yeasts, colorants, or synthetic sulfites.' }
    ],
    quote: {
      text: 'True wine should reflect the sun, rain, and microorganisms of its vintage—not a chemist’s formula.',
      author: 'Matthieu Laurent',
      role: 'Master Sommelier'
    },
    relatedSlugs: ['live-hearth-cooking', 'regenerative-farming-partners', 'luminous-restorative-hospitality']
  },
  {
    id: 'why-4',
    slug: 'zero-waste-closed-loop',
    num: '04',
    title: 'Closed-Loop Circular Ecology',
    tagline: 'From compost to seed. Zero landfill organic waste.',
    shortDescription: '98% of kitchen scraps are composted and returned directly to our partner farm beds within forty-eight hours.',
    fullStory: 'True gastronomy must respect ecological boundaries. At Verdant Hearth, every ingredient is celebrated in full. Vegetable trim becomes deeply reduced aromatic broths; citrus peels are candied or transformed into botanical vinegars; stale heritage bread is roasted and ground into pasta fillings. What remains is composted in our on-site micro-digester and hauled weekly back to partner farms to nurture the next crop cycle.',
    heroImage: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: [
      { label: 'Organic Diversion', value: '98% Diverted', description: 'Exceeding municipal sustainability standards by converting all scraps to nutrient soil.' },
      { label: 'Soil Returned', value: '12 Tons / Year', description: 'Re-enriching Willamette Valley topsoil with active nitrogen-rich compost.' },
      { label: 'Single-Use Plastics', value: 'Zero Employed', description: 'All packaging, storage, and guest takeout containers are plant-fiber compostable.' }
    ],
    quote: {
      text: 'Kitchen luxury without waste is the highest form of culinary sophistication.',
      author: 'Elena Rostova',
      role: 'Head Pastry Chef'
    },
    relatedSlugs: ['regenerative-farming-partners', 'live-hearth-cooking', 'luminous-restorative-hospitality']
  }
];

// ----------------------------------------------------------------------------
// "Artisans of Flame & Earth" Profiles & Detail Pages
// ----------------------------------------------------------------------------
export const ARTISANS: ArtisanProfile[] = [
  {
    id: 'artisan-1',
    slug: 'julian-thorne',
    name: 'Julian Thorne',
    role: 'Executive Chef & Co-Founder',
    craft: 'Live-Fire Hearth Master & Gastronome',
    biography: 'Raised along the Oregon coastline, Julian honed his culinary mastery in Basque country hearths and French countryside kitchens before returning home to establish Verdant Hearth in 2012. He believes wood-ember cooking is an instinctual dance between wind, wood moisture, and radiant heat.',
    process: 'Julian begins each service at 6:00 AM by grading the seasonal cords of white oak, fruitwood, and alder. Coals are built in tiered banks across our 16-foot hearth, maintaining distinct micro-climates ranging from 250°F for gentle smoking to 850°F for flash searing.',
    quote: 'The hearth strips away culinary pretension. There is only raw timber, red heat, and the purity of honest ingredients.',
    avatar: '/avatars/julian-thorne.svg',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
    ],
    linkedDishSlugs: ['pan-seared-hokkaido-scallops', 'ember-roasted-heritage-short-rib', 'dry-aged-bone-in-ribeye-foraged-butter'],
    accolades: ['James Beard Foundation Nominee', 'Pacific Northwest Hearth Pioneer', 'Culinary Institute of America Alum']
  },
  {
    id: 'artisan-2',
    slug: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Head Pastry Chef',
    craft: 'Botanical Confections & Ancient Grains',
    biography: 'Elena treats pastry as an extension of botanical medicine and agricultural heritage. Rather than relying on refined sugars and bleached flours, she crafts desserts using whole grains stone-milled in house, wildflower mountain honeys, and foraged forest berries.',
    process: 'Elena ferments her doughs up to 48 hours to unlock digestible nutrients and floral aromas. Her custards, tarts, and gelatos are infused with garden-grown herbs like lemon verbena, rosemary, and mountain spruce tips.',
    quote: 'Dessert should not feel heavy or cloying; it should leave your palate singing with forest memories.',
    avatar: '/avatars/elena-rostova.svg',
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80'
    ],
    linkedDishSlugs: ['smoked-wood-oven-apple-fig-tart', 'dark-chocolate-ganache-pine-salt', 'botanical-lemon-verbena-panna-cotta'],
    accolades: ['Valrhona Pastry Innovator', 'Ancient Grain Research Fellowship', 'National Pastry Guild Gold']
  },
  {
    id: 'artisan-3',
    slug: 'matthieu-laurent',
    name: 'Matthieu Laurent',
    role: 'Master Sommelier & Beverage Director',
    craft: 'Biodynamic Terroir & Living Fermentations',
    biography: 'Born in Burgundy into a family of vignerons, Matthieu spent two decades exploring natural vineyards throughout France, Italy, and Oregon before anchoring our beverage cellar.',
    process: 'Matthieu tastes over 1,200 bottles annually, hand-selecting exclusively unmanipulated cuvées that honor wild indigenous fermentations. He also leads our non-alcoholic distillation program using herbs gathered from our conservatory.',
    quote: 'Wine is bottled sunshine and rain; our mission is to present it with total respect for the hands that tended the vines.',
    avatar: '/avatars/matthieu-laurent.svg',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80'
    ],
    linkedDishSlugs: ['the-emerald-hearth-cocktail', 'wild-orchard-old-fashioned', 'biodynamic-orange-wine'],
    accolades: ['Court of Master Sommeliers (DipWSET)', 'Top 40 Under 40 Tastemaker', 'Biodynamic Cellar of the Year']
  },
  {
    id: 'artisan-4',
    slug: 'marcus-rivera',
    name: 'Marcus Rivera',
    role: 'Chef de Cuisine',
    craft: 'Precision Fire Line Directing & Sustainable Butchery',
    biography: 'Marcus oversees evening line operations, coordinating timing between the hearth grill, stone bake oven, and vegetable ember pits so every plate arrives at peak thermodynamic beauty.',
    process: 'Practicing whole-animal nose-to-tail butchery, Marcus ensures every part of the pasture livestock is transformed into cured salumi, rich demi-glaces, or ember-crisped delicacies.',
    quote: 'The heat of the line demands absolute calm, deep respect, and flawless muscle memory.',
    avatar: '/avatars/marcus-rivera.svg',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
    ],
    linkedDishSlugs: ['wood-fired-wild-king-salmon', 'pasture-raised-wood-roasted-chicken', 'spiced-ember-roasted-bone-marrow'],
    accolades: ['Charcuterie Guild Medalist', '12 Years Live-Fire Specialist', 'Slow Food Leader']
  },
  {
    id: 'artisan-5',
    slug: 'clara-sterling',
    name: 'Clara Sterling',
    role: 'Lead Forager & Botanical Specialist',
    craft: 'Ethnobotany & Wild Mountain Harvesting',
    biography: 'With a Master of Science in Ethnobotany, Clara forages through private forest tracts in the Pacific Northwest, sustainably gathering wild mushrooms, elderflowers, nettles, and edible blossoms.',
    process: 'Clara adheres to strict regenerative foraging rules: never taking more than 20% of a patch and always preserving mycelial roots so mushroom colonies thrive for future seasons.',
    quote: 'The forest offers a feast of aromatic complexity if you only know how to tread quietly and observe.',
    avatar: '/avatars/clara-sterling.svg',
    heroImage: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80'
    ],
    linkedDishSlugs: ['wild-forest-morel-broth', 'hearth-braised-morel-risotto', 'foraged-elderberry-sorbet'],
    accolades: ['Pacific Northwest Wild Flora Scholar', 'Certified Master Forager', 'Botanical Conservation Advisor']
  },
  {
    id: 'artisan-6',
    slug: 'thomas-lind',
    name: 'Thomas Lind',
    role: 'Head Artisan Baker & Miller',
    craft: 'In-House Stone Milling & Sourdough Fermentation',
    biography: 'Thomas is dedicated to reviving single-origin Pacific Northwest heirloom grains. He operates our Austrian granite stone mill, grinding fresh whole flour each morning at 5:00 AM.',
    process: 'Using our heirloom sourdough starter nurtured since 2012, Thomas ferments sourdough loaves for up to 36 hours before baking directly on the oven stone at 700°F.',
    quote: 'Flour should be treated like fresh milk—it is alive, highly perishable, and profoundly flavorful when freshly ground.',
    avatar: '/avatars/thomas-lind.svg',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
    ],
    linkedDishSlugs: ['hearth-burrata-mission-fig-flatbread', 'heritage-sourdough-cast-iron-pancakes', 'warm-hearth-brioche-smoked-honey'],
    accolades: ['Sourdough Baker Guild Master', 'Ancient Grains Alliance Partner', 'Artisan Miller of the Year']
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2012',
    title: 'The Spark Kindles',
    description: 'Founded with an outdoor alderwood firepit and an intimate 28-seat room by Chef Julian Thorne.'
  },
  {
    year: '2015',
    title: 'Edible Conservatory Built',
    description: 'Constructed our glass botanical pavilion, allowing guests to dine enclosed by flourishing herb vines.'
  },
  {
    year: '2018',
    title: 'Zero-Waste & Mill Integration',
    description: 'Achieved 100% closed-loop organic composting and installed our Austrian stone grain mill.'
  },
  {
    year: '2021',
    title: 'Living Cellar Certification',
    description: 'Expanded cellar to over 300 verified low-intervention and biodynamic wine labels.'
  },
  {
    year: '2024',
    title: 'National Acclaim & Hearth Legacy',
    description: 'Recognized among the country’s leading wood-fired culinary sanctuaries.'
  }
];

export const LOCAL_SUPPLIERS: SupplierItem[] = [
  {
    name: 'Rainshadow Heritage Farms',
    location: 'Sisters, Oregon',
    specialty: 'Pasture-Raised Heritage Pork & Heirloom Wheat',
    partnershipYears: 12,
    description: 'Certified regenerative farm focusing on soil carbon capture and heritage animal breeds.'
  },
  {
    name: 'Cascadia Wild Foraging Co.',
    location: 'Mount Hood Foothills, Oregon',
    specialty: 'Wild Morels, Chanterelles & Spruce Tips',
    partnershipYears: 9,
    description: 'Small family cooperative harvesting wild fungi with strict sustainable root protection.'
  },
  {
    name: 'Coastal Tides Day-Boat Fishery',
    location: 'Astoria, Oregon',
    specialty: 'Columbia River King Salmon & Dungeness Crab',
    partnershipYears: 11,
    description: 'Hook-and-line commercial fishing vessel dedicated to wild seasonal quota management.'
  },
  {
    name: 'Willamette Stone Creamery',
    location: 'Carlton, Oregon',
    specialty: 'Cultured Butter, Labneh & Aged Farmhouse Cheeses',
    partnershipYears: 8,
    description: 'Grass-fed Jersey cows producing rich seasonal butter churned within 24 hours of milking.'
  }
];

export const RESERVATION_STEPS = [
  {
    step: '01',
    title: 'Select Date & Seating',
    description: 'Choose your desired date, guest count, and prefered room (Main Dining, Chef Counter, or Conservatory).'
  },
  {
    step: '02',
    title: 'Confirm Preferences',
    description: 'Note any dietary restrictions or anniversary celebrations so our kitchen can prepare in advance.'
  },
  {
    step: '03',
    title: 'Instant Confirmation',
    description: 'Receive your unique confirmation code and welcome notice directly to your email.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Chef Marcus Sterling',
    role: 'Culinary Editor',
    publication: 'Northwest Gastronomy Review',
    rating: 5,
    quote: 'Verdant Hearth is that rare restaurant where smoke and delicacy dance in absolute harmony. The Hokkaido scallops alone are worth a transcontinental journey.',
    date: 'Sample Critic Review',
    dishLoved: 'Pan-Seared Hokkaido Scallops'
  },
  {
    id: 'rev-2',
    author: 'Claire Vance',
    role: 'Food & Wine Contributor',
    publication: 'Pacific Epicurean',
    rating: 5,
    quote: 'The amber glow of the hearth, the aroma of burning fruitwood, and a natural wine list that reads like poetry. Simply the most transportive dining room in the region.',
    date: 'Sample Critic Review',
    dishLoved: 'Ember-Roasted Heritage Short Rib'
  },
  {
    id: 'rev-3',
    author: 'David & Sophia Chen',
    role: 'Verified Diners',
    publication: 'OpenTable VIP',
    rating: 5,
    quote: 'Celebrated our 10th anniversary at the Chef’s Counter. The hospitality was effortless and warm, and every dish told an honest story of the soil it came from.',
    date: 'Sample Guest Review',
    dishLoved: '7-Course Wood & Ember Journey'
  },
  {
    id: 'rev-4',
    author: 'Elena Moreau',
    role: 'Travel & Dining Guide',
    publication: 'Global Wanderer Journal',
    rating: 5,
    quote: 'A masterclass in sustainable dining without a single drop of pretension. Heavenly stone-milled sourdough and joyful, luminous service.',
    date: 'Sample Critic Review',
    dishLoved: 'Hearth Fig & Burrata Flatbread'
  },
  {
    id: 'rev-5',
    author: 'Jonathan Hayes',
    role: 'Executive Food Critic',
    publication: 'Cascade Epicurean',
    rating: 5,
    quote: 'Cooking entirely with wood fire is extraordinarily difficult; mastering it with such finesse, balancing wild herbs and delicate broths, is nothing short of miraculous.',
    date: 'Sample Critic Review',
    dishLoved: 'Wild Forest Morel Mushroom Broth'
  },
  {
    id: 'rev-6',
    author: 'Rachel Lin',
    role: 'Verified Diner',
    publication: 'Resy Select Guest',
    rating: 5,
    quote: 'The cedar-plank King Salmon and the botanical spritz transformed our evening into something unforgettable. We have already booked our return visit.',
    date: 'Sample Guest Review',
    dishLoved: 'Wood-Fired Wild King Salmon'
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-happy-hour',
    title: 'Botanical Golden Hour',
    tagline: 'Artisanal sips & hearth flatbreads in the garden',
    schedule: 'Tuesday – Friday, 4:30 PM – 6:00 PM',
    priceNote: 'Cocktails $12 · Small Plates $10–$14',
    description: 'Unwind as the afternoon sun filters through the conservatory. Enjoy curated spritzes, natural wines, and wood-oven bites at special pricing.',
    features: ['Live botanical cocktail creations', 'Complimentary hearth sourdough & dips', 'Patio seating priority'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=700&q=80',
    ctaText: 'Reserve Golden Hour Table'
  },
  {
    id: 'offer-tasting-menu',
    title: '7-Course Wood & Ember Journey',
    tagline: 'Chef Julian’s seasonal tasting experience',
    schedule: 'Nightly at 6:30 PM & 8:30 PM · Limited to 16 seats',
    priceNote: '$135 per guest · Optional $75 wine pairing',
    description: 'An intimate journey through seven courses prepared entirely over live alder embers, celebrating the peak harvest of the week.',
    features: ['Chef counter seat with kitchen interaction', 'Rare library biodynamic cellar pairings', 'Includes keepsake menu signed by culinary team'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
    ctaText: 'Reserve Tasting Experience'
  },
  {
    id: 'offer-private-dining',
    title: 'The Botanical Conservatory',
    tagline: 'Private celebrations and intimate weddings',
    schedule: 'Available daily with advance reservation',
    priceNote: 'Custom seasonal menus from $95 / person',
    description: 'A glass-walled private dining pavilion enveloped by jasmine vines and olive trees, hosting up to 45 seated guests for memorable gatherings.',
    features: ['Dedicated sommelier & private hearth station', 'Custom printed botanical menus', 'Full acoustic sound system'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
    ctaText: 'Inquire for Private Events'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How far in advance can I book a table at Verdant Hearth?',
    answer: 'Reservations open 30 days in advance at 9:00 AM on the first day of each month for standard dining and the Chef’s Counter. We also reserve a portion of the bar and garden terrace nightly for walk-in guests on a first-come, first-served basis.',
    category: 'reservations'
  },
  {
    question: 'Can you accommodate dietary restrictions (vegan, gluten-free, nut allergies)?',
    answer: 'Over 65% of our menu is naturally gluten-free or can be adapted without losing depth of flavor. We take allergies seriously—please note any dietary requirements when booking so our kitchen can prepare customized broths and garnishes.',
    category: 'dining'
  },
  {
    question: 'Is there a dress code for evening dinner service?',
    answer: 'We embrace an upscale casual atmosphere. Smart casual attire is welcomed—neat denim, collared shirts, dresses, or tailored jackets are typical. We ask that guests avoid athletic sportswear and beachwear.',
    category: 'dining'
  },
  {
    question: 'What is your corkage fee policy?',
    answer: 'You are welcome to bring special bottles from your personal cellar not represented on our current wine list. Our corkage fee is $35 per 750ml bottle (maximum 2 bottles per party). We happily waive one fee for each bottle purchased from our list.',
    category: 'dining'
  },
  {
    question: 'Do you offer valet parking or nearby garage access?',
    answer: 'Complimentary valet parking is available at our main entrance on Botanical Way starting at 4:30 PM Wednesday through Sunday. Additional covered parking is available two doors down at Hearth Quarter Garage with 2 hours validated.',
    category: 'general'
  },
  {
    question: 'Can I book a private event or buy out the restaurant?',
    answer: 'Yes! Our Botanical Conservatory accommodates private seated dinners for up to 45 guests, and complete restaurant buyouts can host up to 130 guests. Contact our events team via our reservation form or email concierge@verdanthearth.com.',
    category: 'private-events'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We request at least 24 hours notice for standard table cancellations. Chef’s Counter and tasting menus require 48 hours notice to avoid a $45 per guest cancellation fee.',
    category: 'reservations'
  },
  {
    question: 'Are children welcome in the restaurant?',
    answer: 'Well-behaved young guests are welcome in our main dining room and garden patio. We offer wholesome, fresh hearth flatbreads, roasted chicken, and handmade pasta options that young palates adore.',
    category: 'dining'
  },
  {
    question: 'What woods do you use in your culinary hearth?',
    answer: 'We exclusively burn seasoned, sustainably harvested Oregon hardwoods including white oak, red alder, and pruned apple orchard woods. We never burn resinous softwoods like pine or fir in cooking chambers.',
    category: 'dining'
  },
  {
    question: 'Do you offer gift certificates?',
    answer: 'Yes! Digital and handcrafted letterpress gift cards are available for purchase online or at the concierge desk, valid for all dining experiences, Chef’s counter tastings, and private events.',
    category: 'general'
  },
  {
    question: 'What is the Chef’s Counter experience?',
    answer: 'The Chef’s Counter is an elevated 8-seat bar directly overlooking our live hearth. Guests enjoy an interactive 7-course tasting menu prepared and introduced directly by Executive Chef Julian Thorne and our sous chefs.',
    category: 'dining'
  },
  {
    question: 'Can I request outdoor dining in the garden or patio?',
    answer: 'Our garden patio and covered conservatory are open year-round with radiant heated floors and botanical overhead pergolas. You can select "Conservatory Seating" during your online reservation process.',
    category: 'reservations'
  }
];

// Helper export to maintain compatibility with existing components
export const CULINARY_TEAM = ARTISANS.map((a) => ({
  name: a.name,
  role: a.role,
  bio: a.biography,
  image: a.avatar,
  accolades: a.accolades,
  slug: a.slug
}));

export const PHILOSOPHY_VALUES = WHY_DINE_REASONS.map((r) => ({
  num: r.num,
  title: r.title,
  description: r.shortDescription,
  slug: r.slug
}));

export const CHEFS_SPECIAL = {
  title: 'Seasonal Wood-Fired Tasting Feature',
  subtitle: 'Hand-Foraged Oregon Morels & 14-Hour Braised Heritage Short Rib',
  description: 'Slowly cooked over our alder hearth with bone marrow reduction, fresh thyme sprigs, and creamy parsnip mousseline. Limited to 24 portions daily.',
  price: 48,
  pairing: 'Paired with 2019 Paolo Scavino Barolo Bric dël Fiasc',
  dietaryNote: 'Gluten-Free · Dairy-Free upon request · 100% Organic Pasture Sourced',
  tags: ['Only 24 Daily', 'Alderwood Smoked', 'Sommelier Paired'],
  image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
  slug: 'ember-roasted-heritage-short-rib'
};

export const SIGNATURE_DISHES = [
  FULL_MENU.find((d) => d.slug === 'pan-seared-hokkaido-scallops')!,
  FULL_MENU.find((d) => d.slug === 'wood-fired-wild-king-salmon')!,
  FULL_MENU.find((d) => d.slug === 'hearth-burrata-mission-fig-flatbread')!
];
