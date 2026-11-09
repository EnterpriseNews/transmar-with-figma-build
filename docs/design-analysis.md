# Design analysis

- Figma file: https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/Transmar?node-id=842-1027 (fileKey `q8JHAesVFNMeDI8MaMAi7w`)
- Pages/frames used: page "Home page" (`842:1027`): desktop [Desktop 1440 `2589:8682`](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8682), extra-wide [Desktop XL 1920 `2626:33989`](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-33989), mobile [Mobile 375 `1406:19159`](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1406-19159), open-menu state [Side menu 1440 `2752:40839`](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2752-40839). Tablet: none. Components read from other pages: `Header Wrapper` Scrolled `2329:52348`, `Mobile header` `2329:53026`, `Tracker wrapper` Scheldule `597:8383`, `Mobile side menu` `2978:14708`.
- Analysed: 2026-11-09
- Repo: `EnterpriseNews/transmar-with-figma-build`; site folder `transmar/`.

## Screens

| Screen | File | Frames (node link @ width) | Notes |
|---|---|---|---|
| Home | `transmar/index.html` | [2589:8682 @1440](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8682), [2626:33989 @1920](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-33989), [1406:19159 @375](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1406-19159), menu open [2752:40839 @1440](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2752-40839) | tablet frame missing (Decision 3); 1920 is a max-width case, not a breakpoint (Decision 4) |

Reference screenshots: `docs/design/home--{1440,1920,375}.png`, `docs/design/home-menu-open--1440.png`, `docs/design/sections/<section>--{1440,1920,375}.png` (sections: header, key-visual, track-banner, side-menu (1440 only), services, advisory, industries, glance, map, news, social, footer, alert).

### Section map (same order at every width)

Header, key visual and track banner are stacked: the header and the banner sit absolutely on top of the key-visual art (header y 0; banner y 170 desktop / y 88 mobile). The key visual and the track banner form one `<section id="top">`.

| # | Section | `id` | 1440 node | 1920 node | 375 node | Notes file |
|---|---|---|---|---|---|---|
| 1 | Header | `site-header` (`<header>`) | [2589:9071](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-9071) | [2626:34378](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34378) | [1406:19160](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1406-19160) | `figma-notes/group-a.md` §1 |
| 2 | Key visual | `top` | [2589:8683](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8683) | [2626:34573](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34573) | [1406:19204](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1406-19204) | `figma-notes/group-a.md` §2 |
| 3 | Title + track form banner | `top` (same section) | [2589:9066](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-9066) | [2626:34373](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34373) | [1406:19209](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1406-19209) | `figma-notes/group-a.md` §3 |
| 4 | Side menu (open state) | `site-menu` (dialog) | [2752:40839](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2752-40839) (overlay 2752:49930, panel 2752:49931) | none (1440 used) | [2978:14708](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2978-14708) ("Comp. & styles") | `figma-notes/group-a.md` §4 |
| 5 | Services | `services` | [2589:8684](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8684) | [2626:33991](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-33991) (broken, Decision 4) | [1410:19272](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1410-19272) | `figma-notes/group-b.md` §1 |
| 6 | Customer advisory bar | `advisory` | [2589:8711](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8711) | [2626:34018](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34018) | [1420:20911](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1420-20911) | `figma-notes/group-b.md` §2 |
| 7 | Industries carousel | `industries` | [2626:34843](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34843) | [2626:34574](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34574) | [1413:19467](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1413-19467) | `figma-notes/group-b.md` §3 |
| 8 | Transmar at a Glance | `glance` | [2626:34896](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34896) | [2626:34085](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34085) | [1413:19673](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1413-19673) | `figma-notes/group-c.md` §1 |
| 9 | Regional presence map | `map` | [2589:8861](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8861) | [2626:34168](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34168) | [1420:21534](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1420-21534) | `figma-notes/group-c.md` §2 |
| 10 | News & Insights | `news` | [2589:8955](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8955) | [2626:34262](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34262) | [1413:20016](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1413-20016) | `figma-notes/group-c.md` §3 |
| 11 | Social News | `social` | [2589:8980](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8980) | [2626:34287](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34287) | [2344:6978](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2344-6978) | `figma-notes/group-d.md` §1 |
| 12 | Footer | `site-footer` (`<footer>`) | [2589:9065](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-9065) | [2626:34372](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34372) | [1828:13673](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1828-13673) | `figma-notes/group-d.md` §2 |
| 13 | Red Sea alert banner (fixed) | `alert` | [2589:9072](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-9072) | [2626:34379](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34379) | [2589:33429](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-33429) | `figma-notes/group-d.md` §3 |

Section heights (1440 / 375): header 89.4 / 62 (overlay), key visual 748 / 818, services 957 / 1240, advisory 110 / 164, industries 686 / 700, glance 766 / 916, map 857 / 470, news 656 / 729 (50 px white gap above it on mobile), social 771 / 599, footer 364.81 / 632.01, alert 126 / 288 (fixed).

## Breakpoints

| Name | Frame width | Switch point | Source |
|---|---|---|---|
| mobile | 375 | 0 | Figma frame "Mobile" `1406:19159` |
| tablet | none | 768 | **assumed**: no frame; the desktop layout scaled to fit (Decision 3) |
| desktop | 1440 | 1200 | Figma frame "Homepage \ Desktop" `2589:8682`; switch point **assumed** (default) |
| (extra wide) | 1920 | none | Figma frame `2626:33989`; a max-width case, not a breakpoint (Decision 4) |

Container widths and side padding per breakpoint:
- **mobile (0–767):** full width, side padding 16 in every section (all 375 nodes: header pad 16, banner 0 16, services 0 16, advisory 24 16, industries 0 16, glance 40 16 60 16, map x16, news 60 16, social 60 16, footer 60 16, alert 30 16).
- **tablet (768–1199):** the desktop layout, fluid; side padding 40 (**assumed**, half the desktop padding so 5-up rows still fit).
- **desktop (1200+):** container max 1440, side padding 80 → content max 1280 (header pad 24 80, banner pad-left 80, services pad 50 80, advisory pad 40 80, industries x 80, glance x 80 / 1280 wide, news pad 60 80 / row 1280, social pad 100 80, alert pad 30 80). Map and footer use side padding 100 at desktop (content 1240): map pad 60 100, footer pad 80 100.
- **beyond 1440:** the container stays 1440 wide and centred; section backgrounds are full-bleed. The 1920 frame's own placements (content at x 240 with no inner padding, footer pad 242) are not copied (Decision 4).

## Design tokens

All values from `.figma-build/tokens.md` (named styles and counts over the 1440, 375 and side-menu frames) and the four notes files. Figma "auto" line height of ADPortsGroup is ≈ 1.63 × size (slogan 22 → 35.86, eyebrow 16 → ≈ 26, group-a §3, group-c §1); it is written as an explicit px value below so the replacement font gets the same rhythm.

### Colour

| Token | Value | Figma variable / style | Used for |
|---|---|---|---|
| `--color-white` | `#FFFFFF` | Greys/0 | header (top state) text/icons, titles on dark, cards, bars, section bg |
| `--color-grey-50` | `#EFF2F5` | Greys/50 | social cards, social text fade, avatar border |
| `--color-grey-100` | `#F0F0F1` | Greys/100 | side-menu rail |
| `--color-grey-200` | `#C0CBD8` | Greys/200 (unlisted style, group-a) | scrolled header bottom border |
| `--color-grey-300` | `#A1B1C4` | Greys/300 | inactive tab, input placeholders |
| `--color-grey-600` | `#8796A8` | Greys/600 | side-menu items |
| `--color-grey-700` | `#65778C` | Greys/700 | news card title/date, menu close icon |
| `--color-neutral-950` | `#0D0D0D` | Neutrals/950 | industries CTA text and arrow |
| `--color-primary-50` | `#D9EAFA` | Primary/50 | track card, industries/news bands, services eyebrow, footer titles/rules, alert text/button |
| `--color-primary-500` | `#1B64A6` | Primary/500 | brand blue: KV/services shapes, eyebrows, numbers, links, footer bg, scrolled header logo/nav |
| `--color-primary-800` | `#243666` | Primary/800 (= "Primary/900", Decision 19) | headings, track button, body on light, counter |
| `--color-primary-950` | `#000E1A` | Primary/950 | advisory text, industries paragraph |
| `--color-navy` | `#020518` | unnamed (group-b §1) | services background and its photo fade |
| `--color-glance-start` | `#003866` | unnamed (group-c §1) | glance background gradient, top |
| `--color-glance-end` | `#013967` | unnamed (group-c §1) | glance background gradient, bottom |
| `--color-map-label` | `#13224A` | unnamed (group-c §2) | map country labels |
| `--color-card-shade-start` | `rgb(0 23 33 / 0)` (`#001721` 0 %) | unnamed (tokens.md) | industries card gradient, top |
| `--color-card-shade-end` | `rgb(0 20 28 / 0.91)` (`#00141C` 91 %) | unnamed (tokens.md) | industries card gradient, bottom |
| `--color-overlay` | `rgb(20 20 20 / 0.6)` (`#141414` 60 %) | unnamed (group-a §4) | side-menu backdrop |
| `--color-alert-bg` | `rgb(0 0 0 / 0.5)` | unnamed (group-d §3) | alert banner background (with blur) |
| `--color-white-65` | `rgb(255 255 255 / 0.65)` | Greys/0 at 65 % (group-d §2) | footer links, mobile footer tagline |
| `--color-white-25` | `rgb(255 255 255 / 0.25)` | Greys/0 at 25 % (group-d §2) | footer social icon ring |

Not tokens (inside exported SVGs only): map base greys `#EBF5FC` `#DAE6F5` `#D9D9D9`, map country strokes `#20407D` (30 uses, all country shapes in `2847:14457`), pattern tint `#EDF4FA`, LinkedIn badge `#1275B1`. Not used: Greys/500 `#39495C` (one overridden base style), the 1 %-opacity map shadows.

### Typography

Family `--font-sans`: **Plus Jakarta Sans** 300/400/700 (Decision 5), standing in for ADPortsGroup; Inter and Helvetica layers also use it. Letter spacing 0 everywhere (none set in Figma). Sizes in px; "→" = mobile → desktop (tablet uses desktop).

| Token | Weight | Size / line height (mobile → desktop) | Case | Used for (source) |
|---|---|---|---|---|
| `--text-kv-title-1` | 700 | 28/30.8 → 40/44 | | "Your Gateway" line (A §3) |
| `--text-kv-title-2` | 700 | 32/35.2 → 52/57.2 | | "to Regional Trade" line (A §3) |
| `--text-kv-slogan` | 300 (number 700) | 18/29 → 22/36 | | slogan (A §3, auto lh) |
| `--text-h1` | 700 | 28/38 → 36/54 | | section titles: industries, glance, map, news, social (style "Desktop Headings/H1") |
| `--text-h1-services` | 700 | 28/38 → 36/44 | | services title (1440 node 36/44; 1920's 54 not used) |
| `--text-eyebrow` | 700 | 16/26 | uppercase | eyebrows, advisory label, "Read more" (advisory) (16/auto) |
| `--text-body-lg` | 400 | 16/30 → 18/29.7 | | services paragraphs (B §1) |
| `--text-body` | 400 | 16/30 | | paragraphs, advisory title, CTA links, alert body desktop |
| `--text-body-sm` | 400 | 14/26 | | nav, social post text, footer links/media, news date, alert body mobile ("Body text/B2") |
| `--text-counter` | 400 | 16/26 | uppercase | advisory counter (16/auto) |
| `--text-label` | 700 | 16/30 | | industry card title, social name, footer column titles, "EN" |
| `--text-strong-sm` | 700 | 14/28 | | buttons, news card title, social "Read more" |
| `--text-caption-bold` | 700 | 12/20 | | active tab, "Track By:", mobile alert button |
| `--text-caption` | 400 | 12/20 | | inactive tab, input text/placeholder |
| `--text-radio` | 400 | 10/16 | | radio labels ("Body text/B4", Inter in Figma) |
| `--text-map-label` | 700 | 10/16 | | map labels ("Body text bold/B4", 10/auto) |
| `--text-service-item` | 700 | 18/29 | | service item label (18/auto) |
| `--text-service-item-hover` | 700 | 24/34 | | service item label on hover, desktop only (B §1 Variant2) |
| `--text-stat-number` | 700 | 20/33 → 30/42 | | glance numbers (mobile 20/auto) |
| `--text-stat-label` | 400 | 12/26 → 14/26 | | glance labels |
| `--text-menu-heading` | 700 | 20/33 | uppercase | side-menu group headings (20/auto) |
| `--text-menu-item` | 400 | 18/29 → 18/22 | | side-menu items (line box 29 mobile, 22 desktop) |
| `--text-menu-link` | 400 | 20/33 | | side-menu contact links (20/auto) |
| `--text-alert-title` | 700 | 14/20 → 16/26 | desktop uppercase | alert title ("Body text bold/B2" mobile) |
| `--text-tagline` | 400 | 14/23 | | mobile footer tagline (Helvetica in Figma) |
| `--text-copyright` | 400 | 15/24 | | footer copyright (Helvetica 15/auto in Figma) |

Ignored: base style 49/53.9 on the title node `2589:9068` (fully overridden by the 40 and 52 runs); 3.8 px map labels (scaled art on 375, Decision 13); 12.36/22.96 (scaled mobile news card copy, use 14/26); Helvetica 12/18 placeholder (use `--text-caption`).

### Spacing scale

4 px base (`--spacing: 4px`), steps `calc(var(--spacing) * n)`, half steps allowed. Steps Figma uses (n): 1 (4), 1.5 (6), 2 (8), 2.5 (10), 3 (12), 3.5 (14), 4 (16), 5 (20), 6 (24), 7.5 (30), 8 (32), 9 (36), 10 (40), 12 (48), 12.5 (50), 15 (60), 20 (80), 25 (100), 72 (288, glance text-to-cards gap).

Off-scale values and their step:

| Figma value | Where | Step |
|---|---|---|
| 29 | services text-to-grid gap, footer main-to-copyright gap | 7 (28) |
| 6.67 | 2 gaps in scaled art | 1.5 (6) |
| 17.66 / 21.2 / 12.36 | mobile news middle card (a scaled copy) | use the normal card values (20 / 24) |
| 8.28, 7.4, 5.55, 6.86, 0.86 | padding inside logo frames | not spacing: part of the logo box size |
| 242 | 1920 footer/alert side padding | not used (container) |
| -10 | side-menu rail overlap | not a gap: rail drawn as a border |
| 89.4 | desktop header height | `--header-height` 90 (22.5 steps) |
| 1, 1.5, 2, 3 | strokes and bars | border widths, not spacing |

### Radius, shadow, borders, motion

| Token | Value | Source / used for |
|---|---|---|
| `--radius-xs` | 4px | burger button, LinkedIn badge |
| `--radius-sm` | 8px | inputs, buttons, tab bar, tabs, alert buttons |
| `--radius-md` | 10px | track card, mobile glance cards, side-menu rail/bar |
| `--radius-lg` | 20px | industry, glance (desktop), news, social cards and images |
| `--radius-xl` | 24px | service items |
| `--radius-drawer` | 40px | side-menu panel, start side only (`40 0 0 40`) |
| `--radius-full` | 9999px | avatar (Figma 200), social icon rings, radios |
| `--shadow-card` | `0 0 20px 4px rgb(0 0 0 / 0.16)` | track card (`0 0 20 4 #000 16 %` × 2) |
| `--blur-alert` | 32px | alert `backdrop-filter` (Figma background blur 64) |
| `--border-thin` | 1px | scrolled header border, radio ring, avatar border, footer title rule |
| `--border-rail` | 1.5px | side-menu rail and item bar, social icon ring |
| `--border-rail-active` | 3px | side-menu item bar on hover/focus |
| `--duration-fast` | 150ms | hover/focus colour changes (**assumed**, no spec) |
| `--duration-grow` | 600ms | services hover enlargement (prototype SMART_ANIMATE 600 ms) |
| `--duration-drawer` | 300ms | side-menu slide/fade and header colour change (**assumed**) |
| `--ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` | Figma ease-in-out (services) |
| `--ease-out` | `cubic-bezier(0, 0, 0.58, 1)` | drawer (**assumed**) |
| `--z-alert` | 90 | fixed alert banner |
| `--z-header` | 100 | sticky header |
| `--z-menu` | 200 | side-menu overlay and panel |
| `--header-height` | 62px mobile (70px scrolled) → 90px desktop | header 375 / `Mobile header` 2329:53026 / 1440 (89.4) |
| `--container-max` | 1440px | frame width; content 1280 inside |
| `--container-padding` | 16px → 40px (tablet, **assumed**) → 80px | see Breakpoints |
| `--container-padding-wide` | 100px (desktop only) | map and footer side padding |
| `--breakpoint-tablet` / `--breakpoint-desktop` | 768px / 1200px | switch points |

Gradients are built from colour tokens: services fade `--color-navy` → transparent (desktop: navy at top, photo at bottom; mobile: transparent at top → navy at 54 %); glance `--color-glance-start` → `--color-glance-end`; industries card `--color-card-shade-start` → `--color-card-shade-end`; social text fade `--color-grey-50` (bottom) → transparent at 80 %.

### Mapping

All tokens become custom properties under `:root` in `transmar/css/styles.css` (`--color-*`, `--font-sans`, `--text-*` (each as `-size`, `-line-height`, `-weight` parts plus a mobile/desktop override), `--spacing`, `--radius-*`, `--shadow-*`, `--blur-*`, `--border-*`, `--duration-*`, `--ease-*`, `--z-*`, `--header-height`, `--container-*`, `--breakpoint-*`, `--focus-color`). Total: 22 colour, 1 font, 26 text styles, 1 spacing, 7 radius, 1 shadow, 1 blur, 3 border, 5 motion, 3 z-index, 1 header height, 3 container, 2 breakpoints, 1 focus colour = **77 tokens**. `--focus-color` (added by #6) is an alias, not a new value: `var(--color-primary-500)`, redefined to `var(--color-white)` only on the root element of the dark blocks (services, glance, footer, alert, header top state); see `docs/design.md` → Shared patterns → Focus.

## Shared components

| Component | Where used | Variants | States | Figma node | Class / script part |
|---|---|---|---|---|---|
| Container | every section | default (pad 16/40/80), `--wide` (pad 100 desktop: map, footer) | | frames | `.container`, `.container--wide` |
| Section heading (eyebrow + h2 + text) | services, industries, glance, map, news, social | light (Primary/800 title), dark (white title), centred (news; social on mobile) | | various | `.section-head`, `--dark`, `--center` |
| Button | track form, alert | primary (Primary/800 on white text), light (Primary/50 / Primary/500 text), ghost (alert Close: text + icon) | hover, focus, disabled while submitting | `2589:9070` button, `2589:9079`, `2589:9080` | `.btn`, `.btn--primary`, `.btn--light`, `.btn--ghost` |
| Arrow link | industries CTA, news "View all News", social "Visit our LinkedIn page" (↗) | arrow right, arrow up-right; dark text / Primary/800 | hover, focus | `2105:4712`, `2589:8978`, `2589:9064` | `.arrow-link` |
| Carousel row | industries, news (mobile only), social | start-aligned scroll-snap row, bleeds to the end edge | prev/next disabled at ends | `2648:40509`, `1413:20021`, `2589:8982` | `[data-carousel]` / `carousel` |
| Card: industry | industries | | hover, focus | `2648:…` cards (303×186) | `.industry-card` |
| Card: news | news | | hover, focus | `2589:8961` | `.news-card` |
| Card: social post | social | | | `2589:8983` | `.social-card` |
| Stat card | glance | | | `2626:34910` | `.stat-card` |
| Service item | services | default, hover (Variant2: icon ×1.16, label 24/34) | hover, focus | `Services item` set (2329:52272, 2329:52229) | `.service-item` |
| Tabs | track banner | Track, Schedule | selected, focus | `Tracker wrapper` 597:8366 | `[data-tabs]` / `tabs` |
| Text field | track and schedule forms | text, date, number | placeholder, focus, invalid (+ message) | `597:8383` inputs | `.field`, `.field__input` |
| Radio | track form | | selected (ring + dot), focus | `2589:9070` | `.radio` |
| Pager | advisory | | prev/next, counter | `2589:8718` | `[data-pager]` / `pager` |
| Icon (sprite) | everywhere | see Assets | `currentColor` | | `.icon`, `<use href="#icon-…">` |

## Sections per screen

### Home
Marker names in full: `docs/content-model.md`.
1. **Header** (`site-header`): logo, nav (5 links, desktop only), "EN", search button, burger. Transparent over the key visual; scrolled variant white (Decision 11). Markers `header logo`, `header nav`, `header language`, `header search`, `header menu-button`.
2. **Key visual + track banner** (`top`): composed background picture per breakpoint; title (2 sizes), slogan with bold "1979"; track card with Track/Schedule tabs and forms. Markers `key-visual image`, `track-banner title`, `track-banner slogan`, `track-banner tabs`, `track-banner track-by`, `track-banner track-field`, `track-banner track-button`, `track-banner schedule-field`, `track-banner schedule-button`, `track-banner errors`.
3. **Side menu** (`site-menu`): three groups (About us 7 items, Services 7, Media 2) + 4 contact links, close button. Markers `menu group`, `menu links`, `menu close`.
4. **Services** (`services`): eyebrow, title, 3 paragraphs, 5 items with icons; navy bg with photo strip and blue shape. Markers `services eyebrow`, `services title`, `services paragraph`, `services item`.
5. **Customer advisory** (`advisory`): label, pager of 2 items (title + "Read more"), counter. Markers `advisory label`, `advisory item`, `advisory pager`.
6. **Industries** (`industries`): eyebrow, title, paragraph, 10 cards, CTA. Markers `industries eyebrow`, `industries title`, `industries text`, `industries card`, `industries cta`, `industries carousel`.
7. **Glance** (`glance`): eyebrow, title, body, 5 stat cards. Markers `glance eyebrow`, `glance title`, `glance text`, `glance stat`.
8. **Map** (`map`): eyebrow, title, mobile-only routes line, map SVG, 16 labels. Markers `map eyebrow`, `map title`, `map routes`, `map image`, `map label`.
9. **News** (`news`): title, subtitle, 3 cards, "View all News". Markers `news title`, `news subtitle`, `news card`, `news link`, `news carousel`.
10. **Social** (`social`): title, 5 LinkedIn post cards, "Visit Our Linkedin Page & Stay Updated". Markers `social title`, `social card`, `social link`, `social carousel`.
11. **Footer** (`site-footer`): logo, mobile tagline, 5 social icons, media text, 2 link columns, copyright. Markers `footer logo`, `footer tagline`, `footer social-link`, `footer media`, `footer column`, `footer copyright`.
12. **Alert** (`alert`): icon, title, body, "Learn More", "Close". Markers `alert title`, `alert text`, `alert button`, `alert close`.

## Interactions

| Where | Interaction | Implied behaviour | Notes |
|---|---|---|---|
| Header | sticky, scrolled variant | fixed at top; after the key visual leaves the viewport it turns white with a 1 px Greys/200 border and Primary/500 logo/nav/icons | Decision 11; component `2329:52348`, mobile `2329:53026` |
| Header | burger (all widths) | opens the side menu; `aria-expanded`, `aria-controls="site-menu"` | only menu control on mobile |
| Header | nav links, EN, search | links to `#` | Decisions 2, 17; no hover drawn → colour/underline on hover and focus |
| Side menu | open/close | desktop: 602 px panel from the end edge over a 60 % backdrop; mobile: full-screen white sheet with a close button; Esc, close button and backdrop click close; focus trapped, returned to the burger; page scroll locked | Decision 10; slide-in **assumed** |
| Side menu | item hover/focus | weight 700, 3 px Primary/500 bar, text shifts 1.5 px | variant "hoover" 2329:52729 |
| Track banner | tabs | Track / Schedule, WAI-ARIA tabs (arrows, Home/End) | Decision 7 |
| Track banner | forms | Track: radio group (Container Number selected) + required tracking number; Schedule: origin, destination (required text), search date (date), weeks out (number 1+); errors under fields, `aria-invalid`, focus first invalid; valid → submits to `#` | no error states drawn: derived (Primary/800 text, field outline); follow-up issue for the real service |
| Services | item hover | icon box 63×50 → 73×58, label 18 → 24/34, 600 ms ease-in-out; desktop only; same on focus-visible | prototype ON_HOVER; reduced motion → instant |
| Advisory | pager | prev/next cycle the items in the HTML, counter shows `n/total`, wraps around; "Read more" per item | Decision 9 |
| Industries, Social, News (mobile) | carousel | horizontal scroll-snap row, swipe/drag, small prev/next buttons, no autoplay, keyboard reachable cards | Decision 8 |
| Map | none | labels are static text; hidden visually on mobile | Decision 13 |
| Alert | dismiss | Close hides the fixed banner; remembered for the session | Decision 14 |
| Links/cards | hover/focus | derived: underline or colour shift on links, focus ring on everything | none drawn |
| Glance | none | no count-up | Decision 18 |
| Scroll reveal, video | none | not built | Decision 18; glance "video-1" layer is covered (Decision 15) |

## Assets

| Asset | Type | Source node | Export as | Target path |
|---|---|---|---|---|
| Logo (header) | vector, 9 paths | `I2589:9071;2329:52323` | SVG, `currentColor` fill | `transmar/images/site/logo.svg` (inlined or sprite so it can be white or Primary/500) |
| Logo (footer, white) | vector | `I1828:13673;1828:13628` (desktop raster ref `40b1ee3c…` not used) | SVG | `transmar/images/site/logo-white.svg` |
| Favicons, OG image | from logo | `I2589:9071;2329:52323` | SVG / PNG 48, 180 / JPG 1200×630 | `transmar/images/site/` |
| Key visual desktop | composed raster | `2589:8683` | render PNG @2x → WebP | `transmar/images/key-visual/kv-desktop.webp` (2880×1496) |
| Key visual 1920 | composed raster | `2626:34562` (1591×748, on Primary/500) | render PNG @2x → WebP | `transmar/images/key-visual/kv-wide.webp` |
| Key visual mobile | composed raster | `1406:19204` | render PNG @2x → WebP | `transmar/images/key-visual/kv-mobile.webp` (750×1636) |
| Services background photo | raster | ref `c08e18481a8bd2e79608e586116286a079727d7b` (`2589:8686`) | `fills --refs` → WebP | `transmar/images/services/services-bg.webp` |
| Services shape (Union) | vector | `2589:8687` (mobile `1410:19372`) | SVG | `transmar/images/services/services-shape.svg` |
| Service icons ×5 | vector, white | `I2589:8706;2329:52269` fleet-cargo, `I2589:8707;2329:52215` schedule, `I2589:8708;2329:52278` vessel-fleet, `I2589:8709;2329:52287` terminals, `I2589:8710;2329:52246` integrated | SVG | sprite `icon-service-{fleet-cargo,schedule,vessel-fleet,terminals,integrated}` |
| Industries cards ×10 | raster | refs `7f0584da…` petrochemicals, `6958a1a4…` building-materials, `3e8e43f2…` food-products, `96999a9a…` agri-products, `d30c0527…` fmcg, `44baf973…` fresh-produce, `72e64216…` paper-products, `959f2999…` textiles, `e3c82b8b…` home-appliances, `b66c52c5…` pharmaceuticals (full refs in group-b §3) | `fills --refs` → WebP ~606×372 | `transmar/images/industries/<name>.webp` |
| Industries shape (white Union) | vector | `2626:34845` (mobile `1413:20010`) | SVG | `transmar/images/industries/industries-shape.svg` |
| Glance icons | vector, Primary/500 | ship `2626:34911`, `34935`, `34942`, `34966`; containers `2626:34920` | SVG (one per distinct glyph, check after export) | sprite `icon-glance-ship`, `icon-glance-containers` (+ others if the glyphs differ) |
| Glance pattern (desktop) | vector | `2626:34899` (1440×766) | SVG | `transmar/images/glance/glance-pattern.svg` |
| Glance Union (mobile) | vector | `1413:20012` | SVG | `transmar/images/glance/glance-shape-mobile.svg` |
| Glance background photos | raster | refs `ed6ef927…`, `a26c83ed…` | not exported | Decision 15 |
| Regional map | vector | `2847:14457` (labels removed) | SVG | `transmar/images/map/regional-presence.svg` |
| News photos ×3 | raster | refs `8d47fb68…`, `d002057c…`, `926f7acf…` | `fills --refs` → WebP ~826×448 | `transmar/images/news/news-reefer-egypt-yemen.webp`, `news-cso-panel.webp`, `news-efg-finance.webp` |
| Social avatar | raster | ref `ed89355e08f05bd7a58564012e6f07b76e9be699` | `fills --refs` → WebP 80×80 | `transmar/images/social/avatar-transmar.webp` |
| Social post photos ×3 | raster | refs `50db9ad9…` (card 1), `d7f7ac1d…` (card 2), `c807806b…` (cards 3–5) | `fills --refs` → WebP ~672×440 | `transmar/images/social/post-plastex-visit.webp`, `post-transmar-partners.webp`, `post-plastex-sponsor.webp` |
| LinkedIn badge | vector, 2 colours | `2589:8989` | SVG | `transmar/images/social/linkedin-badge.svg` |
| UI icons | vector | search `I2589:9071;2687:12700`, menu `I2589:9071;2329:52347`, close `2752:49933`, arrow-up (pager) `2589:8721`, arrow-right `I2626:34895;2643:108545` / `2589:8978`, arrow-up-right `2589:9064`, alert `2589:9074`, close-circle `2589:9082` | SVG | sprite `icon-search`, `icon-menu`, `icon-close`, `icon-arrow-up`, `icon-arrow-right`, `icon-arrow-up-right`, `icon-alert`, `icon-close-circle` |
| Footer social icons | vector | `I2589:9065;2329:52156` LinkedIn, `…52162` Facebook, `…52165` X, `…52168` YouTube, `…52171` Instagram | SVG glyph only (ring in CSS) | sprite `icon-linkedin`, `icon-facebook`, `icon-x`, `icon-youtube`, `icon-instagram` |

Not exported: KV source layers (refs `c08e1848…`, `85b252ed…`, Union vectors; Decision 12), mobile Twitter bird (Decision 16), footer raster logo, loose frames "01"–"05" and "home-and-personal-care-1 1" (Decision 20).

Fonts: Figma uses **ADPortsGroup** 300/400/700 (proprietary AD Ports Group face, no web licence available), plus Inter 400 and Helvetica 400 on a few layers. Built with **Plus Jakarta Sans** 300/400/700 (SIL Open Font License, Google Fonts), latin subset woff2, embedded as base64 in `transmar/css/styles.css`; licence in `transmar/fonts/OFL.txt` (Decision 5).

## Decisions

Everything the design leaves open, decided without asking (defaults in the plugin's `defaults.md`). The same list, in plain language, is in the **Decisions made for you** issue; changes asked for there are added here with the date.

1. **Site folder and hosting:** `transmar/`, from the brand name. No hosting chosen: no hosting config; the folder is plain and can be uploaded anywhere as it is. Why: default; nothing in the brief names a host.
2. **Language:** English only. Markup is RTL-ready (`lang`/`dir` on `<html>`, logical CSS properties) and the header "EN" switcher links to `#`. Why: the design is English only and shows a single language label.
3. **Tablet:** no tablet frame. The mobile layout is used below 768 px, the desktop layout from 768 px scaled to fit (side padding 40, **assumed**), desktop proper from 1200 px (**assumed**). Why: default for a missing tablet frame; 768/1200 are the standard switch points.
4. **1920 frame:** it only widens backgrounds, so it is built as a max-width (1440) centred container, not a breakpoint; section backgrounds stay full-bleed. The 1920 Services frame is broken (content 2626:34003 positioned at y 798 inside a clipping 941-tall frame), and other 1920 sections place the content at x 240 with no inner padding; 1920 follows the 1440 layout everywhere (content 1280 inside 1440). Why: one consistent container; the 1920 frame shows no layout change beyond width.
5. **Font:** ADPortsGroup is proprietary, so **Plus Jakarta Sans** (OFL, Google Fonts; 300/400/700) is embedded as base64 woff2; a follow-up issue swaps in the licensed ADPortsGroup files. The Inter (radio labels) and Helvetica (placeholder, footer copyright, mobile footer) layers also use the site font. Why: the closest free geometric sans with the same three weights; the stray Inter/Helvetica layers look accidental (group-a, group-d).
6. **Copy differing between frames:** the desktop copy is used everywhere: "45 years" (not 44), "Stevedoring equipment", desktop title/slogan case ("Your Gateway / to Regional Trade", "…Middle East Since 1979"), Services desktop text (3 paragraphs, 5 items, no mobile "Routes" item, no mobile paragraph), Industries "INDUSTRIES / We’re the Commodity Experts / … industries including: / View all industries", footer "Services" (not "FAQS"), "Get to Know Us", "Latest News", copyright without the mobile-only link, Red Sea alert "Learn More", social cards with the 3 distinct desktop texts and underlined inline links, "Visit Our Linkedin Page & Stay Updated". The mobile slogan's title-case setting is ignored. Content that exists only on mobile and is not a variant of desktop copy is kept on mobile only: the footer tagline and the map line "Currently Operating 17 Regional Routes". Why: default (desktop copy wins); mobile-only extras match the mobile frame without contradicting desktop.
7. **Track form:** two tabs, **Track** (desktop: "Track By:" radios Container Number / Booking Number / BL Number, "Tracking number", "Track") and **Schedule** (component variant "Scheldule" 597:8383: Origin port, Destination port, Search date, Weeks out, "View Schedule"). Mobile shows the same two tabs and fields as desktop, stacked to its width; the mobile frame's Schedule fields under an active Track tab are treated as a design slip. Built with validation and error states, submitting to `#`; follow-up issue to connect it to the real tracker/schedule service. Why: default for a form with no backend; the variant set defines both states.
8. **Carousels without visible controls** (Industries, Social News, News on mobile): a swipeable scroll-snap row, start-aligned to the container edge and bleeding to the end edge, with small previous/next buttons, no autoplay. News is a normal 3-column row from 768 px. Industries has 10 cards at every width (names for cards 9–10 from the 375 frame: Home Appliances, Pharmaceuticals; desktop title case), each with its own photo (the 1440 FMCG card reuses the Fresh produce photo; the FMCG photo from 1920/375 is used). Why: default for a carousel without controls; the 375 frame has the complete, correctly labelled set.
9. **Customer advisory bar:** the design shows "1/10" but only one advisory exists. Built as a pager over the items in the HTML: item 1 "COVID-19 Service Disruption", item 2 the hidden "Red Sea / Gulf of Aden situation" advisory found in the file (2589:8688); the counter shows the real count (1/2). Editors add items by copying a marker. Why: a counter must match real content; the hidden layer is the only other advisory in the file.
10. **Side menu:** desktop (and tablet) opens a drawer from the "Side menu" frame (panel 2752:49931, 602 wide, start-side radius 40) over a 60 % dark overlay; mobile uses the "Mobile side menu" (2978:14708) content as a full-screen white drawer under a white header with a derived close button. Esc closes, focus is trapped and returned to the burger. The About us group gets the grey rail on mobile too (its absence there looks like an omission). Why: the only open-state frames; dialog pattern for accessibility.
11. **Sticky header:** the header stays at the top and switches to its "Scrolled" variant (white, 1 px Greys/200 border, Primary/500 logo/nav/icons; node 2329:52348; mobile 2329:53026: 70 px tall, logo 142 wide, burger 38) once the page scrolls past the key visual. Why: the variant exists in the file and implies this behaviour.
12. **Key visual art:** one composed image per breakpoint (1440, 1920, 375) exported as WebP; no layered rebuild. The 1920 image is anchored to the end edge on a Primary/500 background beyond 1440. Why: the art is cropped photo + giant vector shapes with no motion; layering gains nothing.
13. **Regional map:** one SVG of the map art (2847:14457) with the label paths removed; the 16 country labels are real HTML text positioned in % (table in group-c §2); on mobile the labels are visually hidden (they would be 3.8 px) but stay in an accessible list. Typo "Saudi Araabia" → "Saudi Arabia". The image alt names all 17 countries (incl. Bahrain). Why: identical geometry at every width; real text stays editable and correct.
14. **Red Sea alert:** a fixed bottom banner, dismissible with Close; dismissal remembered for the browser session (`sessionStorage`, falling back to hiding for the current page view when storage is unavailable). While it is shown, the page gets bottom space equal to its height so the footer copyright can be reached. Why: every frame pins it to the bottom edge with BOTTOM constraints; a Close button implies dismissal.
15. **Glance background photos** (`ed6ef927…`, `a26c83ed…`, layer "video-1") are covered by an opaque gradient in Figma, so they are not exported; the background is the gradient plus the pattern (desktop) / blue shape (mobile). Why: they are invisible in the design.
16. **Footer social icons:** the desktop set (LinkedIn, Facebook, X, YouTube, Instagram) at all widths; LinkedIn links to `https://www.linkedin.com/company/transmarline/`, the others to `#`. Footer logo: SVG from the mobile vector, scaled to 210 wide on desktop. Why: desktop wins; the vector is sharper than the raster.
17. **Links:** undefined links, and every link to another page (About, Services, Media, Careers, FAQs, Schedules, Container tracker, Local offices, Search, side-menu items, service items, industry cards, news cards, "Read more", "Learn More", "View all …"), go to `#`; those pages are out of scope. External links (LinkedIn posts, profiles, hashtag, company pages): new tab with `rel="noopener noreferrer"`. `media@transmar.com` is a `mailto:`. Why: default; the home page is the only screen in scope.
18. **Animation:** only short hover/focus transitions plus the services hover enlargement seen in the prototype (600 ms ease-in-out), the header colour change and the drawer slide; no count-up, no scroll reveal, no autoplay. `prefers-reduced-motion: reduce` removes the movement. Why: default; only the services hover is specified.
19. **Colour style "Primary/900"** has the same value as Primary/800 (`#243666`): one token, `--color-primary-800`. Why: identical values.
20. **Ignored frames:** loose, archived and duplicate frames on the Home page (second "Desktop XL" 3381:716, frames "01"–"05", "gp 1920 *", loose "Section wrapper"/"Section" frames, "home-and-personal-care-1 1" 3383:1300, the Archived page) are not built. Why: default for out-of-scope frames.
21. **Placeholder copy** is used as it is and listed in the decisions issue: the COVID-19 advisory, the social post texts (cards 3–5 repeat one text), the news items (2022–2023), "©2023 Transmar. All Rights Reserved". Why: default.
22. **Text case:** Figma uppercase transforms (eyebrows, menu headings, advisory label/"Read more", desktop alert title) are CSS `text-transform: uppercase` on the copy as stored; Figma title-case transforms are written out in the HTML as they render, with obvious spacing slips fixed: services items "Fleet & Cargo", "Schedule", "Vessel Fleet", "Terminals", "Integrated Solutions"; menu links "Contact Us", "Find Our Local Offices", "Join Our Team", "FAQs". Trailing spaces in Figma strings are dropped. Why: CSS has no reliable title case; uppercase is a style and stays out of the content.
23. **Superscript:** "70,000 m2" is written `70,000 m²` at all widths. Why: the desktop node sets "m2" as superscript; mobile's "M2" is the uppercase transform of the same text.
24. **Glance icons:** one icon size per breakpoint (56 desktop, 40 mobile; mobile cards 3–5 use 48 in Figma) and the desktop icon-to-metric mapping (Container icon on the TEU card) at all widths. Why: the mobile sizes and order are inconsistent in the design.
25. **Services item links and 1920 background:** service items are links to `#` (so the hover enlargement is also reachable by keyboard); the services background follows 1440 (photo strip at the bottom, behind the grid) at every desktop width. Why: items look interactive; 1920 is broken (Decision 4).
26. **Mobile header logo:** the top-state mobile header is 62 tall with a 120 wide logo and 30 burger (home frame); the scrolled state uses the 70 tall `Mobile header` with a 142 logo and 38 burger. The burger's touch target is padded to 44×44 in both. Why: each state matches its own node; 44 px is the accessibility minimum.
27. **News and social carousels on mobile** start at card 1 aligned to the 16 px gutter (the frames centre card 2 with neighbours peeking); cards keep their 303 px width. Why: a scroller starting mid-list hides the first item; the peek still shows there is more.

## Build decisions and deviations
Deliberate differences from Figma and why (added during the build).

- **SEO title and description (#6).** The design has no page title or meta description, so they are written from the key-visual copy (A §3): title "Transmar | Your Gateway to Regional Trade"; description "Transmar is your gateway to regional trade: container shipping serving the Red Sea and the Middle East since 1979." The same text is used for `og:title`/`og:description` and `twitter:title`/`twitter:description`. Canonical, `og:url`, `og:image` and `twitter:image` wait in a `TODO(content)` comment in the `seo meta` marker until the domain is known. Why: the slogan is the site's own one-line summary; no wording is invented beyond "container shipping" (the brief's description of the company).
- **Font file (#6).** Plus Jakarta Sans is embedded as the Fontsource **variable** latin subset (one woff2, 27.3 KB, weights 300–700 from one `@font-face`) instead of three static files (36.3 KB together). Why: smaller, and it renders the same three weights.
- **Skip link (#6).** A "Skip to main content" link (marker `header skip-link`), not in the design, is the first focusable element; it stays off screen until it gets keyboard focus. Why: accessibility (WCAG 2.4.1).
- **Reduced motion (#6).** `prefers-reduced-motion: reduce` sets the three `--duration-*` tokens to 0.01ms rather than forcing `transition-duration` on every element with `!important`. Why: every transition must read the duration tokens anyway, and the rules forbid new `!important`.

## Design updates
One subsection per later Figma revision: `### <YYYY-MM-DD>: <what changed>` with the frames, a summary of changes per section, new decisions, and the issues created for it.

none yet
