# Verdant Hearth — Premium Multi-Page Restaurant Template

An award-winning, production-ready, dark-green restaurant template crafted for modern upscale-casual bistros, wood-fired hearths, farm-to-table eateries, and botanical bars.

Built with **Astro 6.1.8**, **TypeScript (Strict)**, and **Tailwind CSS 4**.

---

## 🌟 Highlights

- **Multi-Page Architecture (53 Static Routes Generated)**:
  - **Home (`/`)**: Word-by-word reveal hero with rotating action words, highlights marquee, story, signatures, spring harvest section, interactive menu, chef's special, 4 why-dine pillars, 6 artisans of flame, lightbox gallery, special offers, reviews, reservation form, hours, FAQs, and newsletter.
  - **Menu Index (`/menu`)**: Sticky category navigation bar with horizontal mobile chips, live search, dietary filters (GF, VG, V, spicy, CHEF), featured dishes carousel, and category banners.
  - **Dish Detail Pages (`/menu/[slug]`)**: 36 individual statically generated detail pages with breadcrumbs, large image gallery, cooking method, ingredients, allergens, nutrition note, sommelier pairing, previous/next dish navigation, and "You may also like" related dishes.
  - **Why Dine Detail Pages (`/why/[slug]`)**: 4 dedicated story pages with hero banners, full narrative essays, 3–5 supporting metrics/highlights, galleries, and reserve CTA.
  - **Artisans Detail Pages (`/artisans/[slug]`)**: 6 dedicated artisan profiles with custom SVG illustrated portraits, craft & daily process, quotes, linked dishes, craft gallery, and prev/next navigation.
  - **About (`/about`)**: 14-year founding narrative, chronological milestones timeline, team of 6 artisans, values, partner suppliers.
  - **Gallery (`/gallery`)**: 24 verified Unsplash photos in a masonry grid with category filters and keyboard-accessible modal lightbox.
  - **Reservation (`/reservation`)**: Interactive booking form, 3-step guide, private conservatory section, dining policies, and FAQs.
  - **Contact (`/contact`)**: Direct contact cards, concierge inquiry form, valet/parking guide, live hours calculator.
  - **Docs (`/docs`)**: In-depth, beginner-friendly developer and customization manual with complete Laravel and Next.js backend guides.
- **One Font Across the Entire Project**:
  - Self-hosted **Plus Jakarta Sans Variable** via `@fontsource-variable/plus-jakarta-sans`.
  - Zero external Google Fonts network requests.
  - Unified typographic hierarchy using weights (400 to 800) and letter-spacing across all headings, body, buttons, navigation, and documentation.
- **Signature Hero Animation System**:
  - Masked per-word upward reveal headline on initial page load:
    > **Where Flames & Earth Meet:** Savor · Gather · Celebrate · Linger · Discover at the Hearth.
  - Auto-changing rotating keyword loop with reserved container width (zero layout shift).
  - 6-image asymmetric floating collage with coordinated clip-path wipes, multi-phase floating rhythms (`float-slow-1`, `2`, `3`), and gentle desktop mouse parallax.
  - Continuous rotating circular text badge (*"SEASONAL · WOOD-FIRED · BOTANICAL ·"*).
- **Dual Theme System (Dark / Light)**:
  - Zero-FOUC inline theme initializer reading OS preference and `localStorage`.
  - Accessible toggle button in the navigation.
  - 100% WCAG AA contrast compliance in both themes.
- **API-Ready Architecture (Laravel & Next.js)**:
  - Built-in typed API client in `src/lib/api.ts` and data source adapter in `src/lib/data.ts`.
  - Transparent fallback to static demo data when `PUBLIC_API_BASE_URL` is omitted.
  - Full Laravel 422 validation error parsing and user-friendly alerts.
  - Complete backend guides for all 10 website sections for both **Laravel** and **Next.js App Router**.
- **100% Copyright-Free & Model-Release Safe**:
  - All photography verified under the Unsplash License (food, table settings, interiors, ingredients, landscapes).
  - Artisan and staff portraits use bespoke original vector SVG illustrations (`/avatars/*.svg`), eliminating any model-release risk.
  - Comprehensive `CREDITS.md` documenting every asset, photographer, license name, and license URL.
  - Graceful fallback placeholder (`/placeholder-dish.svg`) for all images.
- **Enterprise Accessibility & SEO**:
  - Schema.org `Restaurant` JSON-LD structured data.
  - Open Graph tags, canonical URLs, XML sitemap (`sitemap-index.xml`).
  - Smooth page transitions via Astro `<ClientRouter />`.
  - Full `prefers-reduced-motion` compliance across all animations.

---

## 📁 Project Structure

```text
nexora/
├── public/
│   ├── avatars/             # Bespoke SVG illustrated portraits for artisans
│   ├── favicon.svg          # Botanical hearth flame favicon
│   ├── placeholder-dish.svg # Graceful SVG fallback for images
│   └── robots.txt           # Search engine indexing rules
├── src/
│   ├── components/          # Reusable UI sections (Hero, SeasonalHarvest, MenuSection, etc.)
│   ├── data/
│   │   ├── images.ts        # Central photographic asset registry
│   │   ├── restaurant.ts    # Typed restaurant demo content (dishes, artisans, reasons, FAQs)
│   │   └── site.ts          # Re-exports and site helpers
│   ├── layouts/
│   │   └── BaseLayout.astro # Base shell with ClientRouter, theme engine, and SEO
│   ├── lib/
│   │   ├── api.ts           # Typed REST API service methods & error handling
│   │   └── data.ts          # Data source adapter (API with local fallback)
│   ├── pages/
│   │   ├── artisans/
│   │   │   └── [slug].astro # Dynamic artisan detail pages
│   │   ├── menu/
│   │   │   └── [slug].astro # Dynamic dish detail pages (36 dishes)
│   │   ├── why/
│   │   │   └── [slug].astro # Dynamic "Why Dine" pillar detail pages
│   │   ├── about.astro      # Our Story & Heritage
│   │   ├── contact.astro    # Contact & Valet Guide
│   │   ├── docs.astro       # In-depth Developer & Customization Manual
│   │   ├── gallery.astro    # Masonry Photo Lightbox Gallery
│   │   ├── index.astro      # Main Landing Page
│   │   ├── menu.astro       # Interactive Menu with Sticky Filters & Search
│   │   └── reservation.astro# Table Booking & Private Dining Inquiries
│   └── styles/
│       └── global.css       # Tailwind CSS 4 theme tokens, Plus Jakarta Sans, animations
├── .env.example             # Environment variable template (PUBLIC_API_BASE_URL)
├── astro.config.mjs         # Astro 6 configuration & sitemap integration
├── CREDITS.md               # Complete asset licensing & photographer credits
├── package.json             # NPM dependencies & scripts
└── tsconfig.json            # Strict TypeScript configuration
```

---

## 🚀 Quick Start

### 1. Requirements
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### 2. Installation & Local Development
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
# The website will launch at http://localhost:4321

# Type-check and build production static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Content Customization Guide

All website data is completely separated from Astro components in `src/data/restaurant.ts`:

| What you want to change | File to open | Exported Constant |
| :--- | :--- | :--- |
| Restaurant name, phone, email, hours, rating | `src/data/restaurant.ts` | `RESTAURANT_INFO` |
| Hero animated headline rotating words | `src/data/restaurant.ts` | `HERO_ROTATING_WORDS` |
| 36 dishes (slugs, descriptions, ingredients, allergens, pairings) | `src/data/restaurant.ts` | `FULL_MENU` |
| Menu categories & banners | `src/data/restaurant.ts` | `MENU_CATEGORIES` |
| Spring harvest section (dates, farm stories, ingredient chips) | `src/data/restaurant.ts` | `SEASONAL_HARVEST` |
| "Why Dine" pillars and detail stories | `src/data/restaurant.ts` | `WHY_DINE_REASONS` |
| "Artisans of Flame & Earth" profiles | `src/data/restaurant.ts` | `ARTISANS` |
| Critic & guest testimonials | `src/data/restaurant.ts` | `REVIEWS` |
| Frequently asked questions | `src/data/restaurant.ts` | `FAQS` |
| Photo URLs & metadata | `src/data/images.ts` | `IMAGES` |

---

## 🔌 API Integration (Laravel & Next.js)

To connect a live backend, create a `.env` file in the project root:
```env
PUBLIC_API_BASE_URL=https://api.yourrestaurant.com/api/v1
```

When `PUBLIC_API_BASE_URL` is omitted, the template runs in **Static Demo Mode** with realistic local mock data and simulated booking confirmations.

Detailed, step-by-step guides covering **Laravel 11/12 migrations, Eloquent models, Form Request validation, API Resources, and CORS**, as well as **Next.js App Router Route Handlers and Prisma schemas**, are available on the built-in documentation page at `/docs`.

---

## ⚖️ Licensing & Commercial Safety

- **Codebase**: Commercial license included with template purchase.
- **Typography**: Plus Jakarta Sans under SIL Open Font License 1.1 (self-hosted).
- **Artisan Portraits**: Original bespoke vector SVG illustrations (`/avatars/*.svg`).
- **Demo Photography**: Curated under the Unsplash License (for demo/preview purposes; real websites should replace demo photos with client-owned assets). See `CREDITS.md` for full photographer links and source pages.
