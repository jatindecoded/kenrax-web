# Kenrax Lead‑Generation & SEO Improvement Plan

## Overview
Working plan for Kenrax (kenrax.in, static Next.js App Router export on GitHub Pages, GA4 `G-1G2MPP1TS2`). This plan tracks what has shipped and the outstanding work captured in GitHub issues and comments. Branch/commit/PR operations are run by the user; this document is the source of truth for scope.

---

## 1. Shipped (do not redo)

| Area | Status | Notes |
|------|--------|-------|
| SEO Phase 0/1 base | ✅ | Homepage/categoris/blog metadata, canonical, product JSON-LD (no fake prices), category pages `/air-filter`, `/oil-filter`, `/air-oil-separator`. |
| Homepage category galleries | ✅ | 3 carousels (Air/Oil/Separator) via `Gallery6` in `app/page.tsx`. |
| "Get Price List" → WhatsApp | ✅ | `hero151`, `LeadBanner` (no form), location pages, blog-post CTA. Green button, direct `wa.me` + UTM suffix + `generate_lead`. |
| Location pages (10 cities) | ✅ | `/locations/[city]`, unique hand-written content in `lib/locations.ts`, LocalBusiness + FAQPage JSON-LD, `/locations` hub. |
| 11 long-form blogs | ✅ | `data/blogs/blogs.json` + keeper `scripts/generateBlogs.cjs`; per-post SEO descriptions/excerpt (OpenGraph/Twitter/BlogPosting). |
| Per-product editorial content | ✅ | `lib/productContent.ts` 7-section writer, per-type + brand (`BRAND_TEXT`) + hash-rotated variants; `<details>` blocks restored on product pages. |
| Google Analytics | ✅ | gtag fallback `G-1G2MPP1TS2` in `app/layout.tsx`; events: `view_item_list`, `view_item`, `select_item`, `generate_lead`, `download_catalog` via `lib/analytics.ts`. UTM → localStorage. |
| Trust badges / filters | ✅ | `TrustBadges.tsx`, `Team2.tsx` type+OEM filters. |
| Sitemap auto-updates on build | ✅ | `postbuild: next-sitemap` regenerates `public/sitemap.xml` + `sitemap-0.xml` every build incl. `/locations`, `/blogs`. |
| Homepage performance | ✅ | RSC flight payload trimmed (~1MB → 292KB) by slicing gallery props before passing to the client component. |
| Company page | ✅ | `/company-profile` exists; linked in navbar. |

## 2. Shipped with caveats
| Area | Caveat |
|------|--------|
| A/B tests (banner copy) | **Not done.** Banner is WhatsApp-direct; would need GA4 Optimize experiment. Deferred. |
| TTL / caching | GitHub Pages sends `max-age=0`. Add a **Cloudflare dashboard cache rule** for `/_next/static/*` (can't be done from repo code). |

## 3. Outstanding work captured from issues & comments

### 3.1 Issue #6 (OPEN) — hero copy + star ratings
1. **Hero copy**: current primary shows "Air Filters; Oil Filters; Separators & more" — replace `;` separators with copy like "Air Filters · Oil Filters · Air-Oil Separators" or full sentence. Fix in the landing hero component (`hero151` and any `;` in hero headings).
2. **Star ratings "real, not fixed 5.0"**: product pages (Hero3) currently show a fixed 5-star rating. Generate a deterministic pseudo‑random rating per product in the **4.5–5.0 band** (seeded by `partNumber`, so stable per page) and a review count; label as sample/satisfaction, or fetch per‑OEM basis. Same treatment for the homepage testimonial if it hard-codes 5.

### 3.2 Comment items (#6 comments; some already shipped)
| Item | Status | Action |
|------|--------|--------|
| `/locations` in navbar (under blogs) | ✅ shipped | Reasonable to also add to `Footer2` link column. |
| Sitemap auto-Updates on build | ✅ shipped (postbuild) | None. |
| More FAQs + dedicated `/faq` page reusing the FAQ component | ⏳ **TODO** | Extract the FAQ block used on category pages into a reusable component (`components/FAQ.tsx`), add `/faq` page with FAQPage JSON-LD, link from navbar/footer. |
| Footer email `jatin.kenrax@gmail.com` beside phones | ⏳ **TODO** | Add `properties["contact.email"].value` (with `mailto:`) to `components/footer2.tsx`. |
| About + company pages | ✅ | `/company-profile` exists; add "About Us" section if missing. |
| Competitor comparison pages (`kenrax vs Mann`, etc.) | ⏳ **TODO** | Build `/compare/[competitor]` (or static pages) targeting keywords like "Mann filters replacement India". Data tables: equivalent part numbers/price/quality, interlink from category + blog pages. Mann Filters already a recognised OEM brand group (7 products). |
| Genuine per-product content (not placeholders) | ✅ shipped | `lib/productContent.ts`. |

### 3.3 oxfil.com‑inspired UX/SEO revamp (largest open idea)
Reference: https://oxfil.com/tr/eu/product/separator/sp-6009 — order-list + pro‑forma invoice model with a "no public checkout" lead flow.

Proposed plan (split into stages, to be scoped before coding):
1. **"Order list" lever**: sticky global "🛒 list / quote" widget; product cards get an "Add to list" plus‑icon (keeps current Buy Now→WhatsApp but adds a lightweight cart/quote accumulator).
2. **Pro-forma flow**: add items → "Order" / "Get Quotation" button → email + required fields → mail the pro-forma/quote within 24h. Document steps/page (How to order, Shipping costs, Payment terms e.g. 100% prepayment / bank transfer), copied as static content with FAQPage schema.
3. **Region/language selector**: country+language picker (IN default, localised prices/delivery) — content lives statically; selector switches currency/region variants.
4. **SEO mirror**: replicate the "Order information / How to order?" sections as dedicated content blocks + schema (`HowTo` / FAQPage) on homepage and product pages.

Scope decision needed: full flow (mailing pro-forma from the static GH Pages site needs a server/worker → use Cloudflare Email Service or a lightweight Worker) vs. content-only variant.

## 4. Recommended prioritised backlog
1. Issue #6 hero copy fix (tiny).
2. Issue #6 star ratings (seeded, ≥4.5) (small).
3. Footer email (tiny).
4. `/faq` page + reusable FAQ component (small).
5. `/locations` + `/faq` links in Footer2 (tiny).
6. Competitor comparison pages, MVP = 1–2 competitors (medium).
7. oxfil‑style order-list / pro-forma flow — decide full vs content-only (large, needs scope call).

## 5. Release & Monitoring
1. Verify locally: `npx next build` (1039/1039 pages) — this is the export build; `postbuild` regenerates sitemap.
2. Deploy: `npm run deploy` (`gh-pages -d out`), site served from `gh-pages` branch via GitHub Pages behind Cloudflare.
3. Keep GA4 evat to funnel: `view_item_list` → `view_item` → `select_item` → `generate_lead`.
4. Cloudflare dashboard: cache rule for `/_next/static/*`.

## 6. Success Metrics
| KPI | Target |
|-----|--------|
| Site Speed | LCP < 2 s (homepage HTML now ~292KB) |
| New Leads | ≥ 15 per month |
| Blog Traffic | ≥ 500 views/article |
| Conversion Rate | 3% from product page → WhatsApp/quote |

---

**Prepared by**: OpenCode
**Last updated**: September 26, 2026