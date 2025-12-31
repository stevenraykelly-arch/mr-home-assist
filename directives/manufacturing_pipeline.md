# DIR: Manufacturing-Pipeline (v1.5)

## 1. PURPOSE
Autonomous "Factory" for high-end trade sites. 
- Brain: Gemini 1.5 Pro (Research & UI)
- Eyes: Nano Banana Pro (NBP) (Hero Imagery)
- Hands: Python/Git/Coolify (Deployment)

## 2. INPUTS
- `TRADE`: Business type (e.g., "High-End Roofer")
- `LOC`: Target City, State
- `BRAND`: (Auto-gen if null)

## 3. LAYER 3 TOOLS (Execution Manifest)
- `execution/research_market.py` -> API search (Tavily/Exa) or Gemini Grounding.
- `execution/generate_hero_nbp.py` -> Call NBP API; save to `.tmp/public/hero.jpg`.
- `execution/unified_deploy.py` -> `git init` -> `gh repo create` -> Coolify Webhook.

## 4. WORKFLOW (Layer 2 Orchestration)

### Phase 1: Market Intelligence & Creative Direction
1. **Search Grounding**: Use Gemini to extract 3 competitors, local landmarks, and 10 geo-targeted keywords.
2. **Visual Strategy**: 
   - Analyze `LOC` aesthetic (e.g., Desert Modern for Scottsdale, Colonial for Boston).
   - **Decision**: Define the Hero Image subject (e.g., "Close-up of luxury slate tiles under Arizona sunset").
3. **Data Store**: Save brief to `.tmp/market_data.json`.

### Phase 2: Visual Asset Generation (NBP)
1. **Prompt Engineering**: Gemini writes a photorealistic prompt for Nano Banana Pro. 
   - *Reqs*: 16:9, architectural photography style, 8k, cinematic lighting, zero AI-hallucinations.
2. **Execution**: Run `execution/generate_hero_nbp.py`.
3. **Verification**: Check `.tmp/public/hero.jpg` existence and size.

### Phase 3: Single-File UI Manufacturing
1. **Code Gen**: Use Gemini 1.5 Pro to write `app/page.tsx` (Next.js 15 + Tailwind).
2. **Design Tokens**:
   - Palette: Extracted from Hero Image + Slate/Stone neutrals.
   - Typography: Inter (UI) + Playfair Display (Headers).
   - UX: Framer Motion subtle entrance, 12-column grid, 100px+ vertical padding.
3. **SEO/GEO Injection**:
   - `llms.txt`: Summary in code comments.
   - Schema: JSON-LD `LocalBusiness` with `TRADE` and `LOC` data.
   - Snippets: Direct 2-sentence answers in the first 1000px of scroll.

### Phase 4: Deterministic Deployment
1. **Pre-Flight**: Gemini audits code for unclosed tags or invalid Tailwind classes.
2. **Deployment**: Run `execution/unified_deploy.py` using `BRAND-LOC` as repo name.
3. **Handshake**: Verify 200 OK status from live URL.

## 5. SELF-ANNEALING LOOPS
- **Visual Fail**: If NBP prompt yields "low-res" feel, add "commercial photography" and "f/2.8" flags; regenerate.
- **Build Fail**: Capture Coolify logs -> Gemini fixes `page.tsx` -> Re-deploy.
- **Copy Fail**: If tone is "generic," instruct Gemini to "use high-end editorial voice" -> Regenerate.

## 6. DELIVERABLES
- **LIVE_URL**: [Coolify Endpoint]
- **GIT_REPO**: [GitHub URL]
- **HERO_ASSET**: `.tmp/public/hero.jpg`
- **STATUS**: Success
