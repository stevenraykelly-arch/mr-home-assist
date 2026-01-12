---
description: Architecture and Usage of the Explainer Video Placeholder
---

# Explainer Video Architecture

The homepage includes a specialized "Explainer Video" section designed to showcase the business process.

## Component Structure

- **File**: `src/components/ExplainerVideo.astro`
- **Location**: Imported and placed in `src/pages/index.astro`, directly following the Hero section.

## Usage & Customization

The component is currently a responsive placeholder.

### How to insert a real video:

1.  Open `src/components/ExplainerVideo.astro`.
2.  Locate the main container `div`:
    ```astro
    {/* Video Placeholder Container - Aspect Ratio 16:9 */}
    <div class="relative w-full aspect-video ...">
       ...
    </div>
    ```
3.  **Replace** the inner contents (Background Pattern, Play Button, Overlay Text) with your YouTube or Vimeo Embed iframe.
    - Ensure your iframe has `width="100%"` and `height="100%"`.

### Style Notes

- The component enforces a **16:9 Aspect Ratio** (`aspect-video`) automatically.
- It includes a "Coming Soon" styling that should be removed when the real video is added.
