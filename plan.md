# Kenrax Lead‑Generation & SEO Improvement Plan

## Overview
This document records the step‑by‑step actions required to add new blog content, improve lead conversion UX, and apply the 5‑phase SEO plan that has already been merged. The goal is to create a new branch, implement all phased improvements, and open a final Pull Request.

---

## 1. Branch Setup
1. Create a new feature branch: `git checkout -b seo/lead-gen-improvements`.
2. Pull the latest `main` into the branch (`git pull origin main`).

---

## 2. Phase 0 – Repository Foundations (Already Completed)
| Item | Status | Notes |
|------|--------|-------|
| SEO 5‑Phase Fixes | ✅ | Merged into `main`. |
| Performance Audit | ✅ | Results stored under `Downloads/Performance on Search Sept 9 2026`. |
| Analytics Stack | ✅ | GA4 and GTM configured. |
| Lead‑Tracking Events | ✅ | `view_product`, `download_brochure`, `form_submitted`, `view_article`. |

---

## 3. Phase 1 – Content & Asset Creation (New Blogs)
1. **Create blog pages** – write entries directly into `data/blogs/blogs.json` (no Notion dependency).
2. **Entry shape** – each blog: `id`, `title`, `slug`, `content` (blocks: `heading_2`, `paragraph`, `bulleted_list_item`, `divider`), `coverImage`, `createdAt`, `updatedAt`.
3. **SEO metadata** – `/blogs/[slug]` already injects `BlogPosting` JSON‑LD + canonical from the entry.
4. **Tagging & Categories** – related articles on category pages match on title keywords; keep titles keyword‑rich.
5. **Sitemap** – `next-sitemap` picks up `/blogs/[slug]` automatically via `generateStaticParams`.

---

## 4. Phase 2 – Lead‑Generation UX Enhancements
| Enhancement | Target File | Implementation Notes |
|--------------|-------------|-----------------------|
| Downloadable Asset Library | `components/LeadAsset.tsx` | Catalog PDF download CTA in lead banner (done). |
| Dynamic Product Filters | `components/Team2.tsx` | Type + compatible‑OEM filter toggles (done). |
| Lead‑Form Banner | `components/LeadBanner.tsx` | Global banner above footer → Dialog form → WhatsApp + `generate_lead` event, UTM attribution (done). |
| Trust Badges | `components/TrustBadges.tsx` | ISO/OEM/Made‑in‑India badges under product list on category pages (done). |
| Progressive Disclosure | `[productType]/[slug]/page.tsx` | `<details>` for “Key Benefits” + compatible brands on product pages (done). |
| Analytics | `lib/analytics.ts`, `app/layout.tsx` | GA4 gtag (env `NEXT_PUBLIC_GA_MEASUREMENT_ID`), `select_item`/`generate_lead`/`download_catalog` events (done). |

---

## 5. Phase 3 – Analytics & Conversion Tracking
1. Add GA4 e‑commerce events (`viewItemList`, `selectItem`, `addToCart`).
2. Standardize UTM template: `utm_source=newsletter&utm_medium=email&utm_campaign=lead_gen_2026`.
3. Set up A/B tests for banner copy (e.g., “Get a Quote” vs “Talk to Sales”).
4. Store UTM in localStorage; submit with form payload.

---

## 6. Phase 4 – Performance & Speed
| Area | Action |
|------|--------|
| Critical CSS | Inline hero CSS in `next/head`. |
| Image Optimisation | `next/image`, lazy load non‑hero. |
| Script Defer | `next/dynamic` for heavy libs. |
| Cache Headers | Cloudflare Workers KV, `Cache-Control`. |

---

## 7. Phase 5 – Release & Monitoring
1. Build static site: `npx next build && npx next export`.
2. Deploy to Cloudflare (`wrangler publish`).
3. Push branch changes (`git push -u origin seo/lead-gen-improvements`).
4. Create PR: `gh pr create --fill` targeting `main`.
5. Add reviewers: maintainers and team leads.
6. Monitor GA4 funnel; iterate on A/B tests.

---

## 8. Success Metrics
| KPI | Target |
|-----|--------|
| Site Speed | LCP < 2 s |
| New Leads | ≥ 15 per month |
| Blog Traffic | ≥ 500 views/article |
| Conversion Rate | 3% from product page → form |

---

## 9. Next Actions
- Draft first 3 blog posts. |
- Deploy local dev server to double‑check UI changes. |
- Full test suite (`npm test` / `vitest`). |
- Stage build on a preview environment. |

---

**Prepared by**: OpenCode
**Date**: September 10, 2026