import { IMAGES } from './images';

export interface DiaryEntry {
  slug: string;
  title: string;
  date: string;
  story: string;
  heroImage: string;
  gallery: string[];
  category: string;
  photographer: string;
}

const gallerySlice = IMAGES.gallery.slice(0, 6);

export const DIARY_ENTRIES: DiaryEntry[] = gallerySlice.map((img, i) => {
  const titles = [
    'Evening in the Garden Conservatory',
    'Day-Boat Scallops, Straight from the Hearth',
    'The Emerald Hearth Cocktail Hour',
    'Chef Julian at the Open Pass',
    'Heritage Flatbread, Fresh from the Oven',
    'The Grand Dining Room in Candlelight'
  ];
  const stories = [
    'As twilight settles over Portland, our garden conservatory transforms into a magical dining space. Fairy lights weave through the jasmine vines overhead, casting a warm glow on the reclaimed oak tables below. Guests linger over botanical spritzes and wood-fired flatbreads, savoring the transition from golden hour to starlight.',
    'There is a moment, just before the scallop hits the cast iron, when the kitchen falls silent. The alder coals glow white-hot, the sage butter begins to foam, and then—contact. A sound like a whispered promise. These Hokkaido diver scallops arrived on ice at dawn and by evening, they become the most talked-about starter on our menu.',
    'Our signature botanical cocktail begins with locally distilled Pacific Northwest gin. The rosemary is charred tableside, releasing an aromatic cloud that mingles with green Chartreuse and fresh Persian lime. Rimmed with alderwood-smoked sea salt, it is the liquid embodiment of our hearth philosophy.',
    'Behind the open pass, Chef Julian Thorne moves with the quiet intensity of someone who has spent decades mastering fire. Every plate that crosses the counter bears his signature: seasonal, precise, and kissed by Oregon hardwood smoke. Tonight, spring morels take center stage.',
    'Thomas Lind pulls the flatbread from the 800-degree stone floor with practiced ease. The heritage Rouge de Bordeaux wheat, fermented for 36 hours, has blistered into golden perfection. Within seconds, it is torn, topped with warm burrata and Black Mission figs, and rushed to the table.',
    'Our main dining room was designed to honor the interplay of natural light and firelight. During the day, floor-to-ceiling windows flood the space with Pacific Northwest greenery. As evening falls, the 16-foot open hearth becomes the room\'s beating heart, its amber glow dancing across handcrafted timber surfaces.'
  ];
  const slugs = [
    'evening-garden-conservatory',
    'day-boat-scallops-hearth',
    'emerald-hearth-cocktail-hour',
    'chef-julian-open-pass',
    'heritage-flatbread-fresh',
    'grand-dining-room-candlelight'
  ];
  return {
    slug: slugs[i],
    title: titles[i],
    date: ['March 15, 2026', 'March 22, 2026', 'April 2, 2026', 'April 10, 2026', 'April 18, 2026', 'April 25, 2026'][i],
    story: stories[i],
    heroImage: img.url,
    gallery: [img.url, ...IMAGES.gallery.slice(i + 1, i + 4).map(g => g.url)],
    category: img.category,
    photographer: img.photographer
  };
});
