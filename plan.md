# Kenrax SEO Fix Plan

## Objective
Ship SEO/fixes for **kenrax.in** (Next.js 15 static export) and raise a PR, while iterating on SEO category pages: centered layout, more relevant content, and category links in the top nav.

## Key Business Position (user correction)
Kenrax manufactures **air filters, oil filters, air-oil separators, hydraulic filters** for screw compressors — NOT general "compressor spare parts". All meta/positioning must be filter-specific.

## Environment Constraints
- Git write ops disabled in sandbox → commit/push/PR commands handed to user.
- Full `npm run build` fails at `saveNotion` step (missing `NOTION_API_KEY`) → use `npx next build` to verify.
- **Do not change product title format** (`${partNumber} - ${type} for ${brand} | Kenrax`).
- `Team2` uses `useSearchParams()` → wrap in `<Suspense>` on category pages.
- Build scripts (pnpm portability): bare sibling-script references fail under pnpm. Portable fix = inline commands: `"build:static": "next build && next-export-optimize-images && next-sitemap"`; main `build` has same latent bug via `saveNotion`/`postbuild` bare names.
- Tailwind v4 `container` is left-aligned → centering requires `mx-auto` instead of `container`.
- Blog JSON has no `summary` field → `Blog8` normalizes blog JSON and `Post`-shaped props (extracts `summary` from `content` when missing, derives `url` from `slug`, uses `image`/`published`).

## Phase 1 — Global Fixes (DONE)
- Blog metadata slug bug fix
- Alt tags on images
- Removed fake `offers.price` (product pages)
- Canonicals (homepage, blogs, company-profile, category pages)
- Rewritten filter-specific meta descriptions + titles
- Homepage Organization JSON-LD
- Deleted dead `[slug]` category dirs
- `logos3.tsx` carousel re-applied (user inadvertently reverted; re-verified, build passes)

## Phase 2 — Category Pages (`/air-filter`, `/oil-filter`, `/air-oil-separator`) (DONE, build TBD)
- `components/blog8.tsx`: `posts` prop used; renders `url`, `summary`, `image`, `published`; normalizes both shapes.
- Rewrote all three pages: centered hero, product browse, education sections, Related Articles (`Blog8`), FAQ accordion, FAQPage + CollectionPage JSON-LD, canonical.
- Centering bug fixed: `container` → `mx-auto` in 9 places.
- **Section order finalized (per user):** Hero → Browse Products → "What an X Does" → "When to Replace Your X" → "Signs Your X Needs Replacing" → Related Articles → FAQ.
- Final nav edit **not yet build-verified**.

## Phase 3 — Top Nav (DONE, build TBD)
- `components/navbar1.tsx`: "Products" remained a plain link to `/products`; added "Product Categories" dropdown with Air Filters `/air-filter`, Oil Filters `/oil-filter`, Air-Oil Separators `/air-oil-separator`.

## Next Move
1. Verify: `npx next build` (confirms navbar1 + section-order changes compile).
2. Give user git/PR command block (branch `seo/phase-0-1-fixes`, add/commit/push, `gh pr create`).

## Relevant Files
- `app/air-filter/page.tsx`, `app/oil-filter/page.tsx`, `app/air-oil-separator/page.tsx`
- `components/blog8.tsx`, `components/navbar1.tsx`, `components/team2.tsx`, `components/logos3.tsx`
- `package.json`, `lib/seo.ts`, `lib/products.ts`
- `/Users/jatin/Downloads/Performance on Search Sept 9 2026/` — GSC CSVs for analysis