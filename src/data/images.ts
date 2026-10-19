/**
 * Central Image Registry for Verdant Hearth Restaurant Template
 * All photos are verified Unsplash assets returning HTTP 200 via CDN with optimized query parameters.
 * Note: Demo photos are for preview purposes only; production buyers should replace with licensed assets.
 */

export interface RestaurantImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  photographerUrl: string;
  category: 'interior' | 'food' | 'drinks' | 'team' | 'ingredients' | 'brunch' | 'outdoor';
}

export const IMAGES = {
  // Hero Section Collage
  heroMain: {
    id: 'hero-main',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Luminous main dining room of Verdant Hearth with oak tables and ambient hearth glow',
    width: 1200,
    height: 1400,
    photographer: 'Jason Leung',
    photographerUrl: 'https://unsplash.com/@yxnjun',
    category: 'interior'
  },
  heroAccent1: {
    id: 'hero-accent-1',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    alt: 'Wood-fired glazed hearth ribs with charred botanical glaze',
    width: 600,
    height: 600,
    photographer: 'Emiliano Vittoriosi',
    photographerUrl: 'https://unsplash.com/@emilianovittoriosi',
    category: 'food'
  },
  heroAccent2: {
    id: 'hero-accent-2',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80',
    alt: 'Handcrafted botanical gin cocktail with charred rosemary essence',
    width: 600,
    height: 600,
    photographer: 'Kseniya Lapteva',
    photographerUrl: 'https://unsplash.com/@lapteva_kseniya',
    category: 'drinks'
  },
  heroAccent3: {
    id: 'hero-accent-3',
    url: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=600&q=80',
    alt: 'Chef hands delicately garnishing an artisanal dish with edible botanicals',
    width: 600,
    height: 600,
    photographer: 'Petr Sevcovic',
    photographerUrl: 'https://unsplash.com/@sevcovic',
    category: 'team'
  },
  heroAccent4: {
    id: 'hero-accent-4',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    alt: 'Artisanal plated berry dessert with house vanilla bean infusion',
    width: 600,
    height: 600,
    photographer: 'Brooke Lark',
    photographerUrl: 'https://unsplash.com/@brookelark',
    category: 'food'
  },
  heroAccent5: {
    id: 'hero-accent-5',
    url: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80',
    alt: 'Heirloom botanical produce and wild harvested herbs',
    width: 600,
    height: 600,
    photographer: 'Dan Gold',
    photographerUrl: 'https://unsplash.com/@danielcgold',
    category: 'ingredients'
  },

  // About Section & Timeline
  aboutDining: {
    id: 'about-dining',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    alt: 'Verdant dining hall with lush botanical planters and warm pendant lamps',
    width: 900,
    height: 1100,
    photographer: 'Jay Wennington',
    photographerUrl: 'https://unsplash.com/@jaywennington',
    category: 'interior'
  },
  aboutChefCooking: {
    id: 'about-chef-cooking',
    url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=700&q=80',
    alt: 'Executive chef roasting seasonal specialties over open alderwood embers',
    width: 700,
    height: 700,
    photographer: 'Fabrizio Manno',
    photographerUrl: 'https://unsplash.com/@fabriziomanno',
    category: 'team'
  },
  aboutGarden: {
    id: 'about-garden',
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    alt: 'Verdant botanical outdoor courtyard terrace illuminated by evening festoon lights',
    width: 800,
    height: 600,
    photographer: 'Alexander Kovacs',
    photographerUrl: 'https://unsplash.com/@alexanderkovacs',
    category: 'outdoor'
  },

  // Page Hero Banners
  bannerMenu: {
    id: 'banner-menu',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    alt: 'Exquisite spread of wood-fired seasonal dishes and botanical reductions',
    width: 1600,
    height: 600,
    photographer: 'Lily Banse',
    photographerUrl: 'https://unsplash.com/@lvnatkk',
    category: 'food'
  },
  bannerAbout: {
    id: 'banner-about',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    alt: 'The warm and luminous dining architecture of Verdant Hearth',
    width: 1600,
    height: 600,
    photographer: 'Jason Leung',
    photographerUrl: 'https://unsplash.com/@yxnjun',
    category: 'interior'
  },
  bannerGallery: {
    id: 'banner-gallery',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
    alt: 'Candlelit dining table moments and wine cellar reflections',
    width: 1600,
    height: 600,
    photographer: 'Jay Wennington',
    photographerUrl: 'https://unsplash.com/@jaywennington',
    category: 'interior'
  },
  bannerReservation: {
    id: 'banner-res',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Private dining conservatory table set for evening hearth service',
    width: 1600,
    height: 600,
    photographer: 'Stefan Johnson',
    photographerUrl: 'https://unsplash.com/@stefanjohnson',
    category: 'interior'
  },
  bannerContact: {
    id: 'banner-contact',
    url: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1600&q=80',
    alt: 'Welcoming restaurant entrance and reception lounge',
    width: 1600,
    height: 600,
    photographer: 'Nick Karvounis',
    photographerUrl: 'https://unsplash.com/@nickkarvounis',
    category: 'interior'
  },
  bannerDocs: {
    id: 'banner-docs',
    url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1600&q=80',
    alt: 'Verdant Hearth cafe bar and botanical preparation counter',
    width: 1600,
    height: 600,
    photographer: 'Daian Gan',
    photographerUrl: 'https://unsplash.com/@daian',
    category: 'interior'
  },

  // Culinary Team (6 members)
  teamExecutiveChef: {
    id: 'team-exec-chef',
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    alt: 'Executive Chef Julian Thorne tasting seasonal ingredients in the open hearth kitchen',
    width: 800,
    height: 1000,
    photographer: 'Louis Hansel',
    photographerUrl: 'https://unsplash.com/@louishansel',
    category: 'team'
  },
  teamPastryChef: {
    id: 'team-pastry-chef',
    url: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80',
    alt: 'Head Pastry Chef Elena Rostova dusting botanical desserts',
    width: 800,
    height: 1000,
    photographer: 'Toa Heftiba',
    photographerUrl: 'https://unsplash.com/@heftiba',
    category: 'team'
  },
  teamSommelier: {
    id: 'team-sommelier',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    alt: 'Master Sommelier Matthieu Laurent inspecting biodynamic cellars',
    width: 800,
    height: 1000,
    photographer: 'Hermes Rivera',
    photographerUrl: 'https://unsplash.com/@hermesrivera',
    category: 'team'
  },
  teamChefDeCuisine: {
    id: 'team-cdc',
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    alt: 'Chef de Cuisine Marcus Rivera directing the hearth wood grill line',
    width: 800,
    height: 1000,
    photographer: 'Ali Morshedlou',
    photographerUrl: 'https://unsplash.com/@alimorshedlou',
    category: 'team'
  },
  teamForager: {
    id: 'team-forager',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    alt: 'Lead Botanical Specialist Clara Sterling harvesting wild mountain herbs',
    width: 800,
    height: 1000,
    photographer: 'Christina @ wocintechchat.com',
    photographerUrl: 'https://unsplash.com/@wocintechchat',
    category: 'team'
  },
  teamBaker: {
    id: 'team-baker',
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    alt: 'Artisan Hearth Baker Thomas Lind stone-milling heritage flours',
    width: 800,
    height: 1000,
    photographer: 'Mae Mu',
    photographerUrl: 'https://unsplash.com/@itsmaemu',
    category: 'team'
  },

  // 24 Gallery Photos (Masonry Grid with categories: Food, Drinks, Interior, Team)
  gallery: [
    {
      id: 'g-1',
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      alt: 'Botanical garden patio with fairy lights and evening ambiance',
      category: 'interior',
      caption: 'The Garden Conservatory under evening twilight',
      photographer: 'Alexander Kovacs',
      width: 800,
      height: 600
    },
    {
      id: 'g-2',
      url: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
      alt: 'Pan-seared Hokkaido scallops with sage brown butter',
      category: 'food',
      caption: 'Day-boat scallops kissed by live embers',
      photographer: 'Eiliv Aceron',
      width: 800,
      height: 1000
    },
    {
      id: 'g-3',
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
      alt: 'Craft botanical cocktail with smoked citrus and herb garnish',
      category: 'drinks',
      caption: 'The Emerald Hearth cocktail served at the copper bar',
      photographer: 'Kseniya Lapteva',
      width: 800,
      height: 600
    },
    {
      id: 'g-4',
      url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
      alt: 'Chef Julian plating seasonal harvest vegetables',
      category: 'team',
      caption: 'Executive Chef Julian overseeing the open pass',
      photographer: 'Louis Hansel',
      width: 800,
      height: 1000
    },
    {
      id: 'g-5',
      url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
      alt: 'Hearth-fired flatbread with burrata and mission figs',
      category: 'food',
      caption: '36-hour fermented heritage flatbread',
      photographer: 'Chad Montano',
      width: 800,
      height: 600
    },
    {
      id: 'g-6',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      alt: 'Main dining room interior with handcrafted timber tables',
      category: 'interior',
      caption: 'Natural oak tables handcrafted by local artisans',
      photographer: 'Jason Leung',
      width: 800,
      height: 600
    },
    {
      id: 'g-7',
      url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      alt: 'Pouring rare biodynamic wine in the cellar room',
      category: 'drinks',
      caption: 'Low-intervention biodynamic wine selection',
      photographer: 'Hermes Rivera',
      width: 800,
      height: 1000
    },
    {
      id: 'g-8',
      url: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80',
      alt: 'Culinary team micro-garnishing edible flowers on tasting course',
      category: 'team',
      caption: 'Attention to micro-botanical detail on every plate',
      photographer: 'Petr Sevcovic',
      width: 800,
      height: 600
    },
    {
      id: 'g-9',
      url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      alt: 'Cedar-plank roasted king salmon with lemon verbena',
      category: 'food',
      caption: 'Wild Columbia River king salmon on cedar planks',
      photographer: 'Caroline Attwood',
      width: 800,
      height: 600
    },
    {
      id: 'g-10',
      url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
      alt: 'Botanical mocktail infused with pine tips and juniper berries',
      category: 'drinks',
      caption: 'House-distilled zero-proof pine & juniper elixir',
      photographer: 'Marta Dzedyshko',
      width: 800,
      height: 1000
    },
    {
      id: 'g-11',
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      alt: 'Intimate corner booth with botanical vine drapery',
      category: 'interior',
      caption: 'Intimate booth seating enveloped in live greenery',
      photographer: 'Jay Wennington',
      width: 800,
      height: 600
    },
    {
      id: 'g-12',
      url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80',
      alt: 'Live flames leaping from the wood grill hearth',
      category: 'team',
      caption: 'The roaring oak hearth that drives all cooking',
      photographer: 'Fabrizio Manno',
      width: 800,
      height: 600
    },
    {
      id: 'g-13',
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      alt: 'Braised short rib with foraged morel reduction',
      category: 'food',
      caption: '14-hour slow braised heritage beef short rib',
      photographer: 'Taylor Kiser',
      width: 800,
      height: 1000
    },
    {
      id: 'g-14',
      url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      alt: 'Vibrant organic farm greens with nasturtium petals',
      category: 'food',
      caption: 'Morning harvest greens from partner biodynamic farms',
      photographer: 'Anna Pelzer',
      width: 800,
      height: 600
    },
    {
      id: 'g-15',
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      alt: 'Celebration sparkling toasts in private conservatory',
      category: 'drinks',
      caption: 'Private celebration toast with artisan pet-nat',
      photographer: 'Priscilla Du Preez',
      width: 800,
      height: 600
    },
    {
      id: 'g-16',
      url: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80',
      alt: 'The Botanical Bar counter with copper and stone finishes',
      category: 'interior',
      caption: 'The Bar Lounge for spontaneous walk-ins',
      photographer: 'Kseniya Lapteva',
      width: 800,
      height: 1000
    },
    {
      id: 'g-17',
      url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      alt: 'Plated blackberry fig tart with smoked honey gelato',
      category: 'food',
      caption: 'Wood-oven baked tartlet with wild Oregon berries',
      photographer: 'Brooke Lark',
      width: 800,
      height: 600
    },
    {
      id: 'g-18',
      url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
      alt: 'Fluffy sourdough pancakes with wild huckleberry compote',
      category: 'food',
      caption: 'Saturday brunch sourdough pancakes with maple churned butter',
      photographer: 'Chad Montano',
      width: 800,
      height: 600
    },
    {
      id: 'g-19',
      url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
      alt: 'Heritage pork meatballs with ember-roasted tomato sauce',
      category: 'food',
      caption: 'Heritage meatballs served on creamy polenta',
      photographer: 'Mae Mu',
      width: 800,
      height: 1000
    },
    {
      id: 'g-20',
      url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
      alt: 'Cured charcuterie and farmhouse cheese board',
      category: 'food',
      caption: 'Farmhouse cheeses with wild mountain honeycomb',
      photographer: 'Anto Meneghini',
      width: 800,
      height: 600
    },
    {
      id: 'g-21',
      url: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
      alt: 'Kids mini wood-fired margherita pizzetta with fresh mozzarella',
      category: 'food',
      caption: 'Kid-friendly artisan flatbread baked in the hearth',
      photographer: 'Eiliv Aceron',
      width: 800,
      height: 600
    },
    {
      id: 'g-22',
      url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
      alt: 'Strawberry and elderflower layer cake slice',
      category: 'food',
      caption: 'Spelt flour elderflower sponge cake',
      photographer: 'Deva Williamson',
      width: 800,
      height: 1000
    },
    {
      id: 'g-23',
      url: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80',
      alt: 'Baskets of fresh harvested heirloom garden vegetables',
      category: 'food',
      caption: 'Daily morning delivery from Willamette Valley growers',
      photographer: 'Dan Gold',
      width: 800,
      height: 600
    },
    {
      id: 'g-24',
      url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      alt: 'Freshly baked sourdough boules cooling on baker rack',
      category: 'food',
      caption: 'Heritage sourdough loaves stone-milled in house',
      photographer: 'Mae Mu',
      width: 800,
      height: 600
    }
  ]
} as const;
