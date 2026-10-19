/**
 * Production-ready API Client & Service Layer for Verdant Hearth
 * Connects seamlessly to Laravel REST API, Next.js route handlers, or any backend.
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
  RESTAURANT_INFO,
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

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = 'ApiError';
  }

  /**
   * Format Laravel / Next.js 422 validation errors into user-friendly message
   */
  getFormattedValidationMessage(): string {
    if (!this.errors) return this.message;
    const lines = Object.entries(this.errors).map(
      ([field, messages]) => `${field}: ${messages.join(', ')}`
    );
    return `${this.message}\n${lines.join('\n')}`;
  }
}

const rawBase = (import.meta.env.PUBLIC_API_BASE_URL as string | undefined)?.replace(/\/$/, '') ?? '';
export const apiConfigured = rawBase.length > 0;
export const API_BASE_URL = rawBase;

// ---------------------------------------------------------------------------
// Typed Request & Response Interfaces
// ---------------------------------------------------------------------------

export interface ReservationRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seating: 'main' | 'counter' | 'patio' | 'private';
  notes?: string;
}

export interface ReservationResponse {
  success: boolean;
  confirmationCode: string;
  message: string;
  reservation?: ReservationRequest & { id: string; status: 'confirmed' | 'pending' };
}

export interface ContactMessageRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactMessageResponse {
  success: boolean;
  message: string;
}

export interface NewsletterRequest {
  email: string;
  preferences?: string[];
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}

export interface HeroResponse {
  tagline: string;
  headlineLead: string;
  rotatingWords: string[];
  headlineSuffix: string;
  description: string;
  trustRating: number;
  totalReviews: string;
  yearsHeritage: string;
  partnerFarms: string;
}

// ---------------------------------------------------------------------------
// Core HTTP Fetcher
// ---------------------------------------------------------------------------

async function apiRequest<T>(endpoint: string, init: RequestInit = {}): Promise<T> {
  if (!apiConfigured) {
    throw new ApiError(
      0,
      'API is not configured. Set PUBLIC_API_BASE_URL in your .env file to connect a live backend.'
    );
  }

  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  const headers = new Headers(init.headers || {});
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');

  let response: Response;
  try {
    response = await fetch(url, { ...init, headers });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : 'Network failure';
    throw new ApiError(0, `Unable to reach API server: ${errorMsg}`);
  }

  let body: any;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  if (!response.ok) {
    const errorMessage = body?.message || response.statusText || 'Request failed';
    const validationErrors = body?.errors as Record<string, string[]> | undefined;
    throw new ApiError(response.status, errorMessage, validationErrors);
  }

  return (body?.data !== undefined ? body.data : body) as T;
}

// ---------------------------------------------------------------------------
// Store (Mutation) Endpoints
// ---------------------------------------------------------------------------

export async function createReservation(payload: ReservationRequest): Promise<ReservationResponse> {
  return apiRequest<ReservationResponse>('/reservations', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export async function sendContactMessage(payload: ContactMessageRequest): Promise<ContactMessageResponse> {
  return apiRequest<ContactMessageResponse>('/contact', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export async function joinNewsletter(payload: NewsletterRequest): Promise<NewsletterResponse> {
  return apiRequest<NewsletterResponse>('/newsletter', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

// ---------------------------------------------------------------------------
// Read (Query) Endpoints with Local Fallbacks
// ---------------------------------------------------------------------------

export async function getHeroData(): Promise<HeroResponse> {
  if (!apiConfigured) {
    return {
      tagline: RESTAURANT_INFO.tagline,
      headlineLead: 'Where Flames & Earth Meet:',
      rotatingWords: ['Savor', 'Gather', 'Celebrate', 'Linger', 'Discover'],
      headlineSuffix: 'at the Hearth.',
      description: RESTAURANT_INFO.shortDesc,
      trustRating: RESTAURANT_INFO.rating,
      totalReviews: RESTAURANT_INFO.totalReviews,
      yearsHeritage: '14 Years',
      partnerFarms: '42 Farms'
    };
  }
  return apiRequest<HeroResponse>('/hero');
}

export async function getMenuCategories(): Promise<MenuCategoryMeta[]> {
  if (!apiConfigured) return [...MENU_CATEGORIES];
  return apiRequest<MenuCategoryMeta[]>('/menu-categories');
}

export async function getMenu(category?: string): Promise<MenuItem[]> {
  if (!apiConfigured) {
    if (category) {
      return FULL_MENU.filter((item) => item.category === category);
    }
    return [...FULL_MENU];
  }
  const query = category ? `?category=${encodeURIComponent(category)}` : '';
  return apiRequest<MenuItem[]>(`/menu${query}`);
}

export async function getMenuItemBySlug(slug: string): Promise<MenuItem | undefined> {
  if (!apiConfigured) {
    return FULL_MENU.find((item) => item.slug === slug);
  }
  return apiRequest<MenuItem>(`/menu/${slug}`);
}

export async function getSeasonalHarvest(): Promise<SeasonalHarvestInfo> {
  if (!apiConfigured) return { ...SEASONAL_HARVEST };
  return apiRequest<SeasonalHarvestInfo>('/seasonal-harvest');
}

export async function getWhyDineReasons(): Promise<WhyDineReason[]> {
  if (!apiConfigured) return [...WHY_DINE_REASONS];
  return apiRequest<WhyDineReason[]>('/why-dine');
}

export async function getWhyDineBySlug(slug: string): Promise<WhyDineReason | undefined> {
  if (!apiConfigured) {
    return WHY_DINE_REASONS.find((item) => item.slug === slug);
  }
  return apiRequest<WhyDineReason>(`/why-dine/${slug}`);
}

export async function getArtisans(): Promise<ArtisanProfile[]> {
  if (!apiConfigured) return [...ARTISANS];
  return apiRequest<ArtisanProfile[]>('/artisans');
}

export async function getArtisanBySlug(slug: string): Promise<ArtisanProfile | undefined> {
  if (!apiConfigured) {
    return ARTISANS.find((item) => item.slug === slug);
  }
  return apiRequest<ArtisanProfile>(`/artisans/${slug}`);
}

export async function getGallery(): Promise<any[]> {
  if (!apiConfigured) return [...IMAGES.gallery];
  return apiRequest<any[]>('/gallery');
}

export async function getReviews(): Promise<ReviewItem[]> {
  if (!apiConfigured) return [...REVIEWS];
  return apiRequest<ReviewItem[]>('/reviews');
}

export async function getOffers(): Promise<SpecialOffer[]> {
  if (!apiConfigured) return [...SPECIAL_OFFERS];
  return apiRequest<SpecialOffer[]>('/offers');
}

export async function getFaqs(): Promise<FAQItem[]> {
  if (!apiConfigured) return [...FAQS];
  return apiRequest<FAQItem[]>('/faqs');
}
