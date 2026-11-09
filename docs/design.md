# Design rules

Source: https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/Transmar?node-id=842-1027 (page "Home page": Desktop 1440 `2589:8682`, Desktop XL 1920 `2626:33989`, Mobile 375 `1406:19159`, Side menu open 1440 `2752:40839`). Full analysis: `docs/design-analysis.md`. Exact copy and node ids: `docs/figma-notes/`. Reference screenshots: `docs/design/<screen>--<width>.png` and `docs/design/sections/<section>--<width>.png`. Stack: `docs/adr/0001-stack.md` (a plain static folder, no build).

The site lives in `transmar/`. Paths below are relative to it unless they start with `docs/`.

## Breakpoints
| Name | Min width (switch point) | Figma frame width | Container max width | Side padding |
|---|---|---|---|---|
| mobile | 0 | 375 | 100% | 16px |
| tablet | 768 | none: desktop layout scaled to fit **assumed** | 100% | 40px **assumed** |
| desktop | 1200 (**assumed**) | 1440 | 1440px, centred (content 1280) | 80px (map, footer: 100px) |
| (extra wide) | no switch point | 1920 | stays 1440px, centred; backgrounds full-bleed | 80px |

Mobile-first: base styles are mobile; `@media (width >= 768px)` (tablet) and `@media (width >= 1200px)` (desktop) override. These are the only media-query widths. `(width < 768px)` only for a look that larger widths never use. JS reads `--breakpoint-tablet` / `--breakpoint-desktop` from `css/styles.css`, never px. The 1920 frame is not a breakpoint: build 1440 and let the container centre (Decision 4).

**Match each frame exactly.** Where 375 differs from 1440 (sizes, order, centring, radius), build what 375 shows; copy follows desktop (Decision 6). Don't "normalise".

## Tokens (the only allowed values)
- Defined once, as custom properties under `:root` at the top of `css/styles.css`; rules read them only through `var(--…)`.
- Colours: only `--color-*` (`white`, `grey-50`, `grey-100`, `grey-200`, `grey-300`, `grey-600`, `grey-700`, `neutral-950`, `primary-50`, `primary-500`, `primary-800`, `primary-950`, `navy`, `glance-start`, `glance-end`, `map-label`, `card-shade-start`, `card-shade-end`, `overlay`, `alert-bg`, `white-65`, `white-25`; values in `docs/design-analysis.md`). No hex, `rgb()` or `hsl()` outside the `:root` definitions, in CSS, HTML or JS. "Primary/900" is `--color-primary-800`.
- Typography: only the `--text-*` styles, size/line height/weight per breakpoint (mobile → desktop), letter spacing 0:
  `kv-title-1` 700 28/30.8 → 40/44 · `kv-title-2` 700 32/35.2 → 52/57.2 · `kv-slogan` 300 18/29 → 22/36 · `h1` 700 28/38 → 36/54 · `h1-services` 700 28/38 → 36/44 · `eyebrow` 700 16/26 upper · `body-lg` 400 16/30 → 18/29.7 · `body` 400 16/30 · `body-sm` 400 14/26 · `counter` 400 16/26 upper · `label` 700 16/30 · `strong-sm` 700 14/28 · `caption-bold` 700 12/20 · `caption` 400 12/20 · `radio` 400 10/16 · `map-label` 700 10/16 · `service-item` 700 18/29 · `service-item-hover` 700 24/34 (desktop) · `stat-number` 700 20/33 → 30/42 · `stat-label` 400 12/26 → 14/26 · `menu-heading` 700 20/33 upper · `menu-item` 400 18/29 → 18/22 · `menu-link` 400 20/33 · `alert-title` 700 14/20 → 16/26 upper · `tagline` 400 14/23 · `copyright` 400 15/24.
  Font: Plus Jakarta Sans 300/400/700 (stand-in for ADPortsGroup, Decision 5), embedded in `css/styles.css` as a base64 woff2 `data:` URL (works from `file://`), `font-display: swap`; licence in `fonts/OFL.txt`. Inter/Helvetica layers use the same font.
- Spacing: only the scale (`--spacing: 4px` → `calc(var(--spacing) * n)`, half steps allowed). Map each Figma gap to the nearest step, never to a rounder shared value (29 → 28; 89.4 header → 90).
- Radius: `--radius-xs` 4 · `-sm` 8 · `-md` 10 · `-lg` 20 · `-xl` 24 · `-drawer` 40 (start side only) · `-full`. Shadow: `--shadow-card` (track card only). Blur: `--blur-alert`. Borders: `--border-thin` 1px · `--border-rail` 1.5px · `--border-rail-active` 3px.
- Motion `--duration-fast` 150ms · `--duration-grow` 600ms · `--duration-drawer` 300ms · `--ease-in-out` · `--ease-out`; z-index `--z-alert` < `--z-header` < `--z-menu`; `--header-height` (62 mobile, 70 mobile scrolled, 90 desktop); `--container-max`, `--container-padding`, `--container-padding-wide`: tokens only. `--focus-color`: the focus-ring colour, an alias of a colour token (see Shared patterns → Focus).

## Code style
- HTML: one `<section>` per Figma section in Figma order with a banner comment `<!-- ===== SECTION: Name ===== -->`, its `id` (`top`, `services`, `advisory`, `industries`, `glance`, `map`, `news`, `social`, `alert`) and `aria-labelledby`. Header is `<header id="site-header">`, footer `<footer id="site-footer">`, menu `#site-menu`. BEM classes. No utility-class framework.
- CSS: one plain `css/styles.css`, BEM, a block per section in page order, logical properties (no physical `left`/`right` in layout), no new `!important`, never the same property from two classes.
- JS: one classic `js/script.js`, one `// ===== <name> =====` part per behaviour, elements found by `data-*` hooks, short JSDoc, no framework, no ES modules.
- Comments explain why, not what.

## Layout
- Content width: always through `.container` (max 1440, padding per breakpoint; `.container--wide` = 100px desktop padding for map and footer).
- Each block's width comes from its own Figma node, not from the frame minus padding (e.g. track card 522, services text 630, glance text 629, industries text 606, news heading 607.5).
- Sticky header: every anchor target has `scroll-margin-top: var(--header-height)`. The header overlays the key visual (transparent) until it turns into the scrolled variant.
- Carousels (industries, social, news on mobile) start at the container edge and bleed to the viewport end edge, clipped by their own section.
- While the alert banner is shown, the page has bottom space equal to its height.
- No horizontal scroll at any width from 320px up, at rest and during motion.

## Shared patterns
- Reuse the shared classes and script parts: `.container`, `.section-head`, `.btn` (+ `--primary`, `--light`, `--ghost`), `.arrow-link`, `.icon`, header, menu, footer, `[data-tabs]`, `[data-carousel]`, `[data-pager]`, `[data-validate]`, `[data-alert]`, `[data-header]`. A new variant is a BEM modifier, not a copy.
- Focus: visible 2px outline in `--focus-color`, 2px offset, on every interactive element (one `:focus-visible` rule in the base styles). `--focus-color` is an alias, never a new value: `var(--color-primary-500)` under `:root`, redefined to `var(--color-white)` only on the root element of a dark block (services, glance, footer, alert, and the header in its top state). Nothing else sets it: no component, inner element or other section; hover per Figma (services items, side-menu items), otherwise a colour or underline change; touch targets at least 44×44px below desktop.
- External links: new tab, `rel="noopener noreferrer"`, visually hidden "(opens in a new tab)". Links to other pages and undefined links go to `#` (Decision 17).
- WAI-ARIA patterns for tabs (track form), the menu dialog, carousels and the advisory pager.

## Animation
- Only: hover/focus colour transitions (`--duration-fast`); services item hover enlargement on desktop (icon 63×50 → 73×58, label `service-item` → `service-item-hover`, `--duration-grow` `--ease-in-out`); header top → scrolled colour change and side-menu slide/fade (`--duration-drawer`).
- No count-up numbers, no scroll reveal, no carousel autoplay.
- `prefers-reduced-motion: reduce` → final state, no movement. It works by setting the `--duration-*` tokens to 0.01ms, so every transition and animation must take its duration from a `--duration-*` token (and `scroll-behavior: smooth`, if used, must sit inside `@media (prefers-reduced-motion: no-preference)`).
- Content is never hidden without JS: hidden states (non-first advisory items, inactive tab panel, closed menu, dismissed alert) only under `.js` on `<html>` (set by the inline head script, removed again if `js/script.js` fails).
- Animate only `transform` and `opacity` (and colour on hover); the services label size change is done with `transform: scale`, not by animating `font-size`.

## Images
- One file per image in `images/<section>/`, about 2x the desktop display size, WebP; listed in `images/ASSETS.md`.
- `width`/`height` = the file's pixel size; `loading="lazy" decoding="async"` below the fold; the key-visual image eager with `fetchpriority="high"`.
- UI icons (search, menu, close, arrows, alert, service, glance and footer social icons): symbols of the inline sprite at the top of `<body>`, `currentColor`. Logos, decorative shapes, the map and the LinkedIn badge are image files.

## Content
- All editable content between `<!-- CONTENT: <section> <field> -->` / `<!-- /CONTENT -->` markers named in `docs/content-model.md`; never in CSS or JS.
- Copy exactly as in the desktop Figma frame (Decision 6), with the case and typo fixes listed in Decisions 13, 22, 23. Placeholders start with `TODO(content):`; never in alt text.
