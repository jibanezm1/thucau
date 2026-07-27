# Design — THUCAU

A locked design system for thucau-web. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal — THUCAU sells software, strategy, and product development to
organizations (B2B / institutional), not a consumer or environmental product.

## Macrostructure family
- Marketing pages (`/`, `/servicio`, `/contacto`): **Bento Grid** — irregular
  mixed-span tiles instead of uniform 3-column icon cards. `/contacto` is
  form-first and does not need the tile grid — it inherits the family's
  tokens, CTA voice, motion, and hero treatment only (see Per-page allowances).
- Content pages (`/quienes-somos`): **Split Studio** — alternating diptych,
  founder copy paired with a proof panel (strengths / role), not photos.

## Theme
Custom — tuned to the existing THUCAU brand green, not a catalog theme.

- `--color-paper`       oklch(97% 0.012 145)
- `--color-paper-2`     oklch(93% 0.016 145)
- `--color-ink`         oklch(21% 0.025 145)
- `--color-ink-muted`   oklch(46% 0.02 145)
- `--color-rule`        oklch(84% 0.02 145)
- `--color-accent`      #2f672f  (THUCAU forest green — primary, brand-named)
- `--color-accent-soft` #68a63a  (institutional green — hover / secondary)
- `--color-focus`       oklch(60% 0.14 200)  (turquoise — focus ring only)

One accent (forest green), used at ≤5% of any viewport as fill. Turquoise
never fills a surface — it exists only as the focus-ring hue. No orange /
yellow fills, no rainbow gradients, no pure #fff / #000 anywhere.

## Typography
- Display (outlier, ≤2 slots): Bebas Neue — wordmark register + home hero
  H1 ("THUCAU") only. Not used for section headings.
- Body + section headings: Manrope — 400 for body, 800 for headings
  (≥300-unit weight contrast, no italic headers).
- Display tracking: 0.01em on Bebas, -0.02em on Manrope headings ≥2xl.
- Type scale anchor: `--text-display: clamp(2.75rem, 5vw + 1rem, 5.25rem)`.

## Spacing
4-pt named scale in `app/globals.css` (`--space-3xs` … `--space-4xl`). Pages
use named tokens only, never raw px. Section padding varies deliberately —
no two consecutive sections share the same padding-block.

## Motion
- Easings: `--ease-out: cubic-bezier(0.16,1,0.3,1)`, `--ease-in:
  cubic-bezier(0.7,0,0.84,0)`, `--ease-in-out: cubic-bezier(0.65,0,0.35,1)`.
  No overshoot / bounce anywhere.
- Reveal pattern: one on-load stagger for the hero's Bento tiles only
  (DOM-index driven, CSS `animation-delay`, capped at ~500ms total). No
  scroll-triggered fade on every card on every page.
- Reduced-motion fallback: opacity-only, ≤150ms.
- Animate `transform`/`opacity` only. No parallax, no scroll listeners.

## Microinteractions stance
- Silent success (n/a — no forms with async feedback yet).
- Hover delay 800ms / focus delay 0ms where tooltips exist (none currently).
- Focus rings appear instantly, never animated in.

## CTA voice
- Primary CTA: **C1 Outlined chip** — transparent fill, 1px ink border,
  typographic verb + arrow. No filled gradient buttons.
- Secondary CTA: text link with a drawn underline on hover.

## Nav + footer
- Nav: **N5 Floating pill** — detached, content-sized, blur backdrop,
  `top: var(--space-md)`. Not full-width, not edge-to-edge.
- Footer: **Ft5 Statement** — one closing display sentence, wordmark +
  minimal links + copyright beneath in muted type. Not a 3–4 column sitemap.

## Per-page allowances
- Marketing pages MAY use the Bento tile grid and the one-shot load reveal.
- `/contacto` skips the tile grid (form-first) but keeps the family's tokens,
  CTA voice, and nav/footer.
- Content pages (`/quienes-somos`) use Split Studio, not Bento tiles.
- No page uses more than 1 eyebrow-style label site-wide, and only if the
  content is genuinely ordinal (the Servicio step sequence numerals count as
  content, not decoration — they are not "eyebrows").

## What pages MUST share
- The wordmark (logo image, unchanged).
- The accent colour (forest green) and its ≤5%-of-viewport placement.
- Manrope body/headings + Bebas Neue outlier (hero H1 only).
- The C1 outlined-chip CTA voice.
- The N5 floating-pill nav and Ft5 statement footer.

## What pages MAY differ on
- Bento tile spans / counts per page.
- Split Studio diptych direction (alternates per founder row).

## Exports
tokens.css is emitted inline via `app/globals.css` `:root` — this is a single
Next.js app, not a multi-format export target.
