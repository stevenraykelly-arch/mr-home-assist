---
description: Step 3 - Codebase Scaffolding and Content Injection
---

# 3. Scaffold & Content

**Objective**: Transform the generic template into the specific business site.

## Steps

1.  **Branching** (Optional but Recommended):
    -   Create a new git branch: `git checkout -b build/[business-name]`.

2.  **Content Injection**:
    -   Update `src/layouts/Layout.astro`: Title, Description, Phone, Schema.
    -   Update `src/pages/index.astro`:
        -   Hero Text & Sub-headline.
        -   Services Array (Icons & Descriptions).
        -   "Librarian" Data Section (Local info).
        -   FAQ Section.
        -   Locations Ticker.
    -   Update `src/components/ContactForm.astro` and `Footer.astro`: Contact details.

3.  **Asset Generation**:
    -   Generate a new Hero Image (`public/images/hero.jpg`) using the specific prompt from Step 2.
    -   Ensure all icons match the trade (e.g., tap icon vs leaf icon).

4.  **Checkpoint**:
    -   [ ] `npm run build` passes locally.
    -   [ ] Site visually reflects the new brand (Branding Check).
    -   [ ] **COMMIT**: `git add . && git commit -m "Scaffold [Business Name]"`

**Next Step**: Proceed to `4_provision.md`.
