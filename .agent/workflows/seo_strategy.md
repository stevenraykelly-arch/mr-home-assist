---
description: Comprehensive SEO Configuration and Strategy
---

# SEO Architecture

The website is fully optimized for Local SEO using a combination of semantic HTML, JSON-LD Schema, and manual indexing controls.

## 1. Indexing & Crawling

- **Sitemap**: Located at `/sitemap.xml`.
    - *Note*: This is currently a **static file** in `public/sitemap.xml` (automatic generation was disabled to resolve build conflicts).
    - **Update Protocol**: Must be manually updated if new pages are added.
- **Robots.txt**: Located at `/robots.txt`.
    - Allow-all policy.
    - Explicitly points to the sitemap URL.

## 2. Structured Data (Schema.org)

The site implements "Rich Results" compatible schema:

- **LocalBusiness (LandscapingBusiness)**:
    - Defined in `src/pages/index.astro`.
    - Includes: Name, Description, Area Served (GeoCircle), Price Range, Address, Phone.
- **FAQPage**:
    - Defined in `src/pages/index.astro`.
    - Mirrors the visible "Common Questions" section text.

## 3. Meta Data

- **Global**: `src/layouts/Layout.astro` handles the core `<head>` tags.
- **Component**: `src/components/SEO.astro` manages Open Graph (Facebook/LinkedIn) and Twitter cards.
- **Verification**: Google Site Verification token is injected via a `<meta>` tag in `Layout.astro`.

## 4. Automation

- **Indexing Workflow**: Use `/index_site` (or `index_site.md`) to validate schema and ping Google Search Console after changes.
