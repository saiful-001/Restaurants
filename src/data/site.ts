/**
 * Site Configuration & Master Re-Exports for Verdant Hearth Template
 * Edit restaurant data, rotating hero phrases, and images here or in the specialized data modules.
 */

export * from './restaurant';
export * from './images';

// Hero Section Rotating Words (Section 4.2 of Template Specification)
export const heroRotatingTitles = [
  'Savor Live-Fire Dining',
  'Gather Around the Hearth',
  'Celebrate Botanical Craft',
  'Linger Over Natural Wines',
  'Discover Pacific Terroir'
] as const;

export const heroRotatingWords = [
  'Savor',
  'Gather',
  'Celebrate',
  'Linger',
  'Discover'
] as const;
