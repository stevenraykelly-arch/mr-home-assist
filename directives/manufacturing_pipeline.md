# DIR: Manufacturing-Pipeline (v1.7 - Librarian Edition)

## 1. PURPOSE
Autonomous "Factory" for high-end trade sites using Astro (Static HTML) for maximum performance and minimum resource usage.
- Brain: Gemini 1.5 Pro (Research & UI)
- Eyes: Nano Banana Pro (NBP) (Hero Imagery)
- Hands: Python/Git/Coolify (Deployment)
- Standard: [Master Design Prompt](file:///c:/Users/srkel/Downloads/Website-builder-antigravity-at-scale/directives/master_design_prompt.md)

## 2. INPUTS
- `TRADE`: Business type (e.g., "High-End Roofer")
- `LOC`: Target City, State
- `BRAND`: (Auto-gen if null)
- `DETAILS`: Specific business details provided in Section 1 of the Master Prompt.

## 3. LAYER 3 TOOLS (Execution Manifest)
- `execution/research_market.py` -> API search (Tavily/Exa) for keywords and local context.
- `execution/generate_hero_nbp.py` -> Call NBP API; save to `public/images/hero.jpg`.
- `execution/unified_deploy.py` -> Astro build -> Git push -> Coolify.

## 4. WORKFLOW (Layer 2 Orchestration)

### Phase 1: Research & Context
1. **Search Grounding**: Use the `search` tool to analyze the specific subject matter and location (vegetation, architecture, terrain).
2. **Competitor Audit (NEW)**:
    - Identify Top 3 Competitors in the target area.
    - Extract their **Services Offered** (to find gaps or must-haves).
    - Analyze their **Keywords** (to find ranking opportunities).
3. **Context Gathering**: Understand the "Librarian" context - what verifiable facts does the AI need?

### Phase 2: Keyword & Service Discovery
1. **Expansion**: Identify 10+ geo-targeted and semantic keywords beyond the user's list.
2. **Service Mapping**: Create a union list of "Standard Services" vs "Niche Services" based on competitor data.
3. **Data Store**: Save brief to `.tmp/market_data.json`.

### Phase 3: Asset Creation
1.  **Prompt Engineering:** Write photorealistic, research-backed prompts for unique images.
2.  **Production:** Generate unique assets to `public/images/`.
    *   **Hero:** 1x Global Hero.
    *   **Page-Specific:** 1-3x Unique images per Service/Location page (e.g., `retaining-detail.jpg`, `officer-estates.jpg`).

### Phase 4: Page Build & Component Assembly
1. **Structure**: Use `src/layouts/Layout.astro` and `src/pages/index.astro`.
2. **Design Standards**: Apply "Hand-Crafted" typography, whitespace, and texture.
3. **SEO Mandate**: Implement `<SEO />` and semantic HTML5.

### Phase 5: AI Optimization (GEO)
1. **Data Feeding**: Add hyper-specific technical specs and comparison tables.
2. **Trust Signals**: Embed verification badges (Licensed, Insured, etc.).

### Phase 6: Integration & Polish
1. **Routing**: Ensure all links and routing are functional.
2. **Sitemap**: Update `sitemap.xml`.

### Phase 7: Verification & Deployment
1.  **Keyword Audit**: Explicitly check that all User Provided and Researched keywords are present in the H1, H2, or body.
2.  **Build**: Run `npm run build` to verify the static output.
3.  **Infrastructure**: Deploy using the factory's automated scripts to Coolify.

## 5. COOLIFY DEPLOYMENT PROTOCOL
(Unchanged - using Nixpacks for Astro)

## 6. SELF-ANNEALING LOOPS
- **Performance Fail**: If Lighthouse score < 95, optimize images -> Regenerate.
- **Copy Fail**: If tone is generic, apply "Editorial Voice" -> Regenerate.

## 7. DELIVERABLES
- **LIVE_URL**: [Coolify Endpoint]
- **GIT_REPO**: [GitHub URL]
- **STATUS**: Success
