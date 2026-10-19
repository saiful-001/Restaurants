/**
 * Data Source Adapter for Verdant Hearth Restaurant Template
 * Provides transparent switching between local static demo data and remote REST API data.
 */

import {
  FULL_MENU,
  MENU_CATEGORIES,
  SEASONAL_HARVEST,
  WHY_DINE_REASONS,
  ARTISANS,
  REVIEWS,
  SPECIAL_OFFERS,
  FAQS,
  type MenuItem,
  type MenuCategoryMeta,
  type SeasonalHarvestInfo,
  type WhyDineReason,
  type ArtisanProfile,
  type ReviewItem,
  type SpecialOffer,
  type FAQItem
} from '../data/restaurant';
import { IMAGES } from '../data/images';
import {
  apiConfigured,
  getMenu,
  getMenuItemBySlug,
  getMenuCategories,
  getSeasonalHarvest,
  getWhyDineReasons,
  getWhyDineBySlug,
  getArtisans,
  getArtisanBySlug,
  getGallery,
  getReviews,
  getOffers,
  getFaqs
} from './api';

/**
 * Fetch full menu items or by category.
 */
export async function fetchMenuData(category?: string): Promise<MenuItem[]> {
  if (!apiConfigured) {
    if (category) return FULL_MENU.filter((item) => item.category === category);
    return [...FULL_MENU];
  }
  try {
    return await getMenu(category);
  } catch (error) {
    console.warn('[DataSourceAdapter] API menu fetch failed, falling back to static demo data:', error);
    if (category) return FULL_MENU.filter((item) => item.category === category);
    return [...FULL_MENU];
  }
}

/**
 * Fetch single dish by its slug for static paths & detail pages.
 */
export async function fetchMenuItemBySlug(slug: string): Promise<MenuItem | undefined> {
  if (!apiConfigured) {
    return FULL_MENU.find((item) => item.slug === slug);
  }
  try {
    return await getMenuItemBySlug(slug);
  } catch (error) {
    console.warn(`[DataSourceAdapter] API fetch for dish "${slug}" failed, falling back to static demo data:`, error);
    return FULL_MENU.find((item) => item.slug === slug);
  }
}

/**
 * Fetch menu category metadata.
 */
export async function fetchMenuCategories(): Promise<MenuCategoryMeta[]> {
  if (!apiConfigured) return [...MENU_CATEGORIES];
  try {
    return await getMenuCategories();
  } catch (error) {
    console.warn('[DataSourceAdapter] API category fetch failed, falling back to static demo data:', error);
    return [...MENU_CATEGORIES];
  }
}

/**
 * Fetch seasonal harvest section data.
 */
export async function fetchSeasonalHarvestData(): Promise<SeasonalHarvestInfo> {
  if (!apiConfigured) return { ...SEASONAL_HARVEST };
  try {
    return await getSeasonalHarvest();
  } catch (error) {
    console.warn('[DataSourceAdapter] API seasonal fetch failed, falling back to static demo data:', error);
    return { ...SEASONAL_HARVEST };
  }
}

/**
 * Fetch "Why Dine at Verdant Hearth" reasons.
 */
export async function fetchWhyDineReasons(): Promise<WhyDineReason[]> {
  if (!apiConfigured) return [...WHY_DINE_REASONS];
  try {
    return await getWhyDineReasons();
  } catch (error) {
    console.warn('[DataSourceAdapter] API why-dine fetch failed, falling back to static demo data:', error);
    return [...WHY_DINE_REASONS];
  }
}

/**
 * Fetch a single "Why Dine" reason by slug.
 */
export async function fetchWhyDineBySlug(slug: string): Promise<WhyDineReason | undefined> {
  if (!apiConfigured) {
    return WHY_DINE_REASONS.find((item) => item.slug === slug);
  }
  try {
    return await getWhyDineBySlug(slug);
  } catch (error) {
    console.warn(`[DataSourceAdapter] API fetch for why-dine "${slug}" failed, falling back to static demo data:`, error);
    return WHY_DINE_REASONS.find((item) => item.slug === slug);
  }
}

/**
 * Fetch "Artisans of Flame & Earth" profiles.
 */
export async function fetchArtisansData(): Promise<ArtisanProfile[]> {
  if (!apiConfigured) return [...ARTISANS];
  try {
    return await getArtisans();
  } catch (error) {
    console.warn('[DataSourceAdapter] API artisans fetch failed, falling back to static demo data:', error);
    return [...ARTISANS];
  }
}

/**
 * Fetch single artisan by slug.
 */
export async function fetchArtisanBySlug(slug: string): Promise<ArtisanProfile | undefined> {
  if (!apiConfigured) {
    return ARTISANS.find((item) => item.slug === slug);
  }
  try {
    return await getArtisanBySlug(slug);
  } catch (error) {
    console.warn(`[DataSourceAdapter] API fetch for artisan "${slug}" failed, falling back to static demo data:`, error);
    return ARTISANS.find((item) => item.slug === slug);
  }
}

/**
 * Fetch gallery items.
 */
export async function fetchGalleryData(): Promise<typeof IMAGES.gallery[number][]> {
  if (!apiConfigured) return [...IMAGES.gallery];
  try {
    return await getGallery();
  } catch (error) {
    console.warn('[DataSourceAdapter] API gallery fetch failed, falling back to static demo data:', error);
    return [...IMAGES.gallery];
  }
}

/**
 * Fetch guest and critic reviews.
 */
export async function fetchReviewsData(): Promise<ReviewItem[]> {
  if (!apiConfigured) return [...REVIEWS];
  try {
    return await getReviews();
  } catch (error) {
    console.warn('[DataSourceAdapter] API reviews fetch failed, falling back to static demo data:', error);
    return [...REVIEWS];
  }
}

/**
 * Fetch special offers and experiences.
 */
export async function fetchOffersData(): Promise<SpecialOffer[]> {
  if (!apiConfigured) return [...SPECIAL_OFFERS];
  try {
    return await getOffers();
  } catch (error) {
    console.warn('[DataSourceAdapter] API offers fetch failed, falling back to static demo data:', error);
    return [...SPECIAL_OFFERS];
  }
}

/**
 * Fetch FAQs.
 */
export async function fetchFaqsData(): Promise<FAQItem[]> {
  if (!apiConfigured) return [...FAQS];
  try {
    return await getFaqs();
  } catch (error) {
    console.warn('[DataSourceAdapter] API faqs fetch failed, falling back to static demo data:', error);
    return [...FAQS];
  }
}
