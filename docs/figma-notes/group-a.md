# Group A: Header, Key visual, Title + track form, Side menu

Figma fileKey `q8JHAesVFNMeDI8MaMAi7w`. Frames: desktop 1440 `2589:8682` ("Homepage \ Desktop"), desktop XL 1920 `2626:33989`, mobile 375 `1406:19159`. Open-menu state (1440) `2752:40839` ("Side menu", page "Home page"). Node link pattern: `https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=<id with ->`.

Fonts used here: **ADPortsGroup** (Light 300, Regular 400, Bold 700; proprietary AD Ports Group face), **Inter** 400 (radio labels only) and **Helvetica** 400 (track input placeholder only). The Inter/Helvetica uses look accidental; the Schedule variant uses ADPortsGroup for the same placeholders.

Colour-style note: Figma also names a style **Primary/900** whose value is `#243666`, the same as Primary/800. Treat both as Primary/800. Other values not in the named list: overlay `#141414` at 60 %, header border Greys/200 `#C0CBD8`, menu-item side bar `#F0F0F1` (Greys/100).

## Section and node map

| Section | 1440 | 1920 | 375 |
|---|---|---|---|
| §1 Header | [2589:9071](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-9071) (instance of `Header Wrapper` / Default) | [2626:34378](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34378) | [1406:19160](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1406-19160) (plain frame) |
| §2 Key visual | [2589:8683](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8683) (instance `KV image` / Variant2) | [2626:34573](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34573) (wrapper) > `KV image` 2626:34562 | [1406:19204](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1406-19204) |
| §3 Title + track form | [2589:9066](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-9066) | [2626:34373](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34373) | [1406:19209](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1406-19209) |
| §4 Side menu (open) | overlay [2752:49930](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2752-49930), panel 2752:49931 | none (use 1440) | none on the home frame; a standalone [Mobile side menu 2978:14708](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2978-14708) exists on page "Comp. & styles" |

Related components (outside the frames, page "Prototype"/components): `Header Wrapper` set 2329:52320 (variants Default 2329:52321, **Scrolled** 2329:52348), `Mobile header` 2329:53026 (white/scrolled mobile header), `Tracker wrapper` set 597:8366 (variants **Track** 597:8367, **Scheldule** [sic] 597:8383), `menu item` set 2329:52728 (Default 2329:52732, hoover 2329:52729), side menu master `Side menu` 2329:52688.

Stacking: in every frame the Header and the Banner are absolutely positioned on top of the KV image (header y 0, banner y 170 desktop / y 88 mobile). The KV is the first section (748 tall desktop, 818 mobile); the next section starts at y 748 / 818.

---

## §1 Header

- **Nodes:** 1440 `2589:9071`: Logo `I2589:9071;2329:52322`, Menu `…;2329:52333`, right Container `…;2329:52339` (Language/EN `…;2329:52340`, Search `…;2687:12699`, burger `text.justify` `…;2329:52346`). 1920 `2626:34378` (same structure, `I2626:34378;…`). 375 `1406:19160`: Logo `1406:19161`, burger `1406:19186`.
- **Layout per breakpoint:**
  - 1440: full width 1440 × 89.4, transparent, absolute over KV. Row, align-items center, padding 24 80 24 80, gap 32. Logo 179 × 41.4 (graphic 179 × 24.84 with 8.28 top/bottom padding) at x 80. Menu row hug 650 × 31, gap 40, starts x 291. Each nav label is a fixed **84 px-wide, centred** text box except "Our Local Offices" (154 wide). Right container fills remaining width (387), row, justify end, gap 20: EN (23 × 12), search button 34 × 34 (18 × 18 glyph, 8 padding), burger 38 × 38 (glyph 24.66 × 20.95, radius 4). Burger right edge at x 1360 (80 from edge).
  - 1920: identical component, 1440 wide, placed at x 240 with **padding 24 0 24 0** (so content spans x 240–1680, i.e. a 1440 container centred with 240 side margins). Right container 547 wide.
  - 375: 375 × 62, transparent, row space-between, align center, padding 16 all. Logo 120 × 27.76 (graphic 120 × 16.65, 5.55 top/bottom padding) at x 16. Burger 30 × 30 (glyph 19.46 × 16.54, radius 4) at x 329. **No nav links, no EN, no search** on mobile.
- **Copy (exact):** nav "About Us", "Services", "Media", "Careers", "Our Local Offices"; language "EN". Links: About Us / Services / Media → the side-menu groups (no target given); Careers, Our Local Offices → pages (undefined in design, use `#`).
- **Styles:**
  - Nav labels (1440/1920): ADPortsGroup 400, 14/26, Greys/0 #FFFFFF, centred.
  - EN: ADPortsGroup 700, 16/30, Greys/0.
  - Logo, search, burger glyphs: #FFFFFF (Greys/0). Burger glyph has a 0.5 white stroke as well as fill.
  - 375: logo and burger #FFFFFF.
- **Assets:**
  - Logo (white, vector group `Layer_1` of 9 paths): export SVG from `I2589:9071;2329:52323` (graphic only) → `transmar/images/site/logo.svg` (use `currentColor` so it can be white or Primary/500 for the scrolled/menu states). Mobile uses the same artwork scaled (`1406:19162`).
  - Search icon: SVG `I2589:9071;2687:12700` (vector 18 × 18) → sprite `icon-search` (or `transmar/images/icons/search.svg`).
  - Burger "text.justify": SVG `I2589:9071;2329:52347` → sprite `icon-menu` (`transmar/images/icons/menu.svg`).
- **Interactions/states:**
  - Burger opens the side menu (§4) on every breakpoint (it is the only menu control on mobile).
  - **Scrolled state** exists as component variant `Property 1=Scrolled` 2329:52348: white background Greys/0, bottom border 1 px Greys/200 #C0CBD8, logo/nav/EN/icons all Primary/500 #1B64A6, same sizes. Implies a sticky header that turns white after scrolling.
  - Mobile scrolled equivalent: component `Mobile header` 2329:53026, 375 × 70, white, bottom border 1 px #C0CBD8, padding 16, logo 142 × 32.84 (larger than the 120 used on the home frame) and burger 38 × 38, both Primary/500.
  - No hover state for nav links, no language dropdown, no search panel in the design.
- **Differences between breakpoints:** 1920 keeps the 1440 bar (container 1440 centred, no side padding); 375 shows only logo + burger, height 62 vs 89.4.
- **Oddities:** "About Us" text box is 84 × 31 fixed while the others are 84 × 11 hug; harmless, vertically all centred.

---

## §2 Key visual (hero background)

- **Nodes:**
  - 1440 `2589:8683` (1440 × 748, clips): BG rectangle `I2589:8683;2329:53568` 1440 × 902.83 @0,0 (image fill `c08e18481a8bd2e79608e586116286a079727d7b`, stretch, applied twice, plus a hidden gradient); big **Union** vector `…;2329:53569` 2220.55 × 2220.47 @-117.78,-1472.02, Primary/500; empty clipped frame `emblem` `…;2329:53570` (no children, hidden white fill: ignore); **Ship** frame `…;2329:53571` 879 × 780 @561,0 containing rectangle `ship` `…;2329:53572` 1555.76 × 915.75 @223.87,-182 (image `85b252ed4b5f47387084b2e945e10f13eef4ba54`; two other hidden image fills b7f87b…/50033d… are alternatives, ignore); small **Union** `…;2329:53573` 876.87 × 876.6 @1226,-129.01, Primary/500.
  - 1920 `2626:34573` 1920 × 748 with solid fill Primary/500 #1B64A6; inside, `KV image` 2626:34562 is **1591 × 748 at x 329** (clips): BG 2626:34563 2146 × 903 @-151,0; Union 2626:34564 @212.22,-1472.02; emblem 2626:34565 (empty); Ship 2626:34566 1056 × 780 @891,0 with ship 2626:34567 @553.87,-182; Union 2626:34568 @1556.88,-128.15. Same sizes for unions/ship image as 1440.
  - 375 `1406:19204` 375 × 818 (clips, white fill): BG 1406:19205 1134.31 × 818 @-580,0 (same image ref, stretch + fit); Union 1406:19206 1181 × 1181 @-372,-363; ship 1406:19207 410.13 × 349.52 @-15.13,439 (fit); Union 1406:19208 377 × 377 @286,441.
- **Layout:** full-bleed band, 748 tall at 1440 and 1920, 818 tall at 375. The large Union (an emblem-shaped Primary/500 shape, mostly above the frame top) covers the left/top of the photo; the ship photo sits right-of-centre; the small Union crops the top-right corner. At 1920 the art is the 1440 composition widened to 1591 and pushed right; the 329 px on the left are flat Primary/500. On mobile the photo BG is shifted left (-580) and the ship sits at the bottom (y 439–789) with the small Union over its right side; the title/form sit over the top area.
- **Copy:** none (text is in §3).
- **Styles:** Union shapes solid Primary/500 #1B64A6. 1920 wrapper Primary/500. Mobile frame background #FFFFFF (hidden under BG).
- **Assets / export recommendation: one composed image per breakpoint**, not layered. The Unions are huge vectors positioned mostly outside the frame and crop the photo; the ship photo is a cut-out positioned against them; re-layering in CSS would need three positioned layers with fragile offsets and gains nothing (there is no motion or parallax in the design). Text and form stay HTML on top.
  - Desktop (used for 1440 and wider): `render --format png --scale 2` of `2589:8683` → convert to WebP → `transmar/images/hero/kv-desktop.webp` (1440 × 748 @2x). For ≥1920, either centre the 1440 picture or render `2626:34562` (1591 × 748) → `transmar/images/hero/kv-xl.webp`, anchored right on a Primary/500 background colour (`background: var(--primary-500) url(...) right top / auto 100% no-repeat`), which reproduces the 1920 frame exactly.
  - Mobile: render `1406:19204` at scale 2 → `transmar/images/hero/kv-mobile.webp` (375 × 818 @2x), used via `<picture>` / media query below the desktop breakpoint.
  - Originals (only if layering is ever wanted): `fills --refs c08e18481a8bd2e79608e586116286a079727d7b` (sea/port background) and `85b252ed4b5f47387084b2e945e10f13eef4ba54` (ship cut-out); Union vectors as SVG `I2589:8683;2329:53569`, `I2589:8683;2329:53573`.
- **Interactions/states:** none. (Component name "Property 1=Variant2" suggests another KV variant exists in the `KV image` component set; not used on these frames.)
- **Differences between breakpoints:** see Layout; 1920 adds a flat Primary/500 left extension; mobile is taller (818) and recomposed (ship at bottom).

---

## §3 Title + track form banner

- **Nodes:** 1440 `2589:9066` (Banner Wrapper 649 × 416 @0,170): Title & slogan 2589:9067 (title 2589:9068, slogan 2589:9069), Tracker wrapper instance 2589:9070 (variant Track). 1920 `2626:34373` (569 × 416 @240,170): 2626:34374/34375/34376, tracker 2626:34377. 375 `1406:19209` (375 × 388 @0,88): title lines 1406:19211 + 1406:19244, slogan 1406:19212, tracker 1406:19213 (detached frame). Schedule variant: component `Property 1=Scheldule` 597:8383.
- **Layout per breakpoint:**
  - 1440: column, gap 20, padding-left 80 (left edge of text at x 80, aligned with the logo), top y 170. Title & slogan block 569 wide, column gap 6 (title 569 × 105, slogan 569 × 36). Tracker card 522 wide, hug height 189, at y 167 inside the wrapper.
  - 1920: same, but wrapper at x 240 (container edge), no padding, gap **24** (card at y 171). So: text column left-aligned to the 1440 container.
  - 375: column, gap 24, padding 0 16, top y 88 (26 below the 62 px header). Title block 343 wide, **text centred**, gap 6. Tracker card full width 343, padding 16.
  - Tracker card (Track variant, desktop): Primary/50 #D9EAFA, radius 10, shadow `0 0 20px 4px rgba(0,0,0,.16)`, padding 20, column gap 16, overflow clip.
    - Tabs bar ("Tap "): 482 × 38, white Greys/0, radius 8, two equal tabs (241 × 38 each, padding 8, centred text). Active tab has radius 8 (no own fill on desktop; on mobile active tab has white fill too).
    - Container: column gap 16. "Filters": label then radio row, gap 16. Radio row: 3 equal columns (147.33 wide), gap 20; each radio = 14 × 14 circle + 4 gap + label.
    - Input row: gap 12; input fills (350 × 36, white, radius 8, padding 12 16); button 120 × 38, Primary/800 #243666, radius 8, padding 8 16, centred label. Button has a hidden 22 × 22 arrow icon (`Button/Arrow`, hidden) – not shown.
  - Schedule variant (component, 502 wide, 240 tall, same card styling, padding 20, gap 16): tabs (Track inactive, Schedule active); two input rows, each two equal inputs (225 × 36, gap 12, rows gap 16); full-width button 462 × 42, padding 8 16.
  - Mobile card (343 wide, padding 16, gap 16): tabs 311 × 38 (155.5 each); then **Schedule-style fields**: two rows of two inputs (149.5 × 36, gap 12, rows gap 16), then full-width button 311 × 38 (padding 8 12). No "Track By" radios.
- **Copy (exact):**
  - Title (1440/1920, one text node with a hard line break): "Your Gateway" / "to Regional Trade".
  - Title (375, two text nodes): "Your gateway" / "to regional trade" (lower-case g/r/t on mobile).
  - Slogan (1440/1920): "Serving the Red Sea and the Middle East Since 1979" ("1979" bold).
  - Slogan (375): "Serving the Red Sea and the Middle East since 1979" ("1979" bold). Note: this node has text-case **Title** set, which would render "Serving The Red Sea And The Middle East Since 1979"; almost certainly unintended. Use the desktop wording "…Middle East Since 1979" everywhere, no title-casing.
  - Track tab (variant Track): tabs "Track" (active), "Schedule"; label "Track By:"; radios "Container Number" (selected), "Booking Number", "BL Number"; input placeholder "Tracking number"; button "Track".
  - Schedule tab (variant Scheldule 597:8383): tabs "Track", "Schedule" (active); placeholders "Origin port", "Destination port", "Search date", "Weeks out"; button "View Schedule".
  - Mobile card as drawn: tabs "Track" (active), "Schedule"; placeholders "Origin port", "Destination port", "Search date", "Weeks out"; button "Track". (Mixed state: see Oddities.)
- **Styles:**
  - Title 1440/1920: ADPortsGroup 700, Greys/0 #FFFFFF; "Your Gateway" **40 px / 44 px (110 %)**, "to Regional Trade" **52 px / 57.2 px (110 %)**. Node box 569 × 105.
  - Title 375: "Your gateway" 700 28/30.8; "to regional trade" 700 32/35.2; Greys/0; centred.
  - Slogan 1440/1920: ADPortsGroup 300 22 px, line-height auto (≈35.86 px), Greys/0; "1979" weight 700. 375: 300 18 px, auto line-height, centred, "1979" 700.
  - Tabs: active ADPortsGroup 700 12/20, Primary/800 #243666; inactive ADPortsGroup 400 12/20 Greys/300 #A1B1C4 (desktop). Mobile inactive: Primary/500 #1B64A6 at opacity 0.4 (≈ same visual weight).
  - "Track By:" ADPortsGroup 700 12/20, #243666 (Primary/800).
  - Radio labels: Inter 400 10/16 (style "Body text/B4"), #243666. Radio selected: 14 px ring, 1 px stroke Primary/500 + 7 px Primary/500 dot, transparent centre. Radio unselected: 14 px solid white circle (#FFFFFF), no stroke.
  - Placeholder "Tracking number": Helvetica 400 12/18, Greys/300 #A1B1C4 (use ADPortsGroup 400 12/20 like the Schedule placeholders).
  - Schedule placeholders: ADPortsGroup 400 12/20, Greys/300.
  - Button label: ADPortsGroup 700 14/28, Greys/0 on Primary/800.
- **Assets:** radio dots and tab bar are CSS (no export). Hidden button arrow icon not needed. No images.
- **Interactions/states:**
  - Tabs Track / Schedule switch the card content between the Track variant (radios + tracking-number input + "Track") and the Schedule variant (4 inputs + "View Schedule"). Active tab = bold Primary/800; inactive = regular Greys/300.
  - Radio group (single choice) for the tracking-number type; selected = blue ring + dot.
  - "Search date" implies a date input; "Origin port"/"Destination port" text (likely autocomplete, not designed); "Weeks out" a number/select (options not designed).
  - Submit targets: the file has "Container tracker" pages (e.g. 2329:51055 / 2565:6715) and "Schedules\Route finder\Search results" pages (2329:50778) — Track submits to the container tracker page, View Schedule to the route-finder results. No error/validation states in these frames.
  - No hover/focus states drawn for inputs, tabs or buttons.
- **Differences between breakpoints:** 1920 = 1440 aligned to the 1440 container (x 240) with gap 24 instead of 20. 375: centred text, title split into two nodes with smaller sizes (28/32), slogan 18, card full width (343) with padding 16, and the card shows the Schedule fields.
- **Oddities:** the mobile card is the Schedule layout but with the Track tab marked active and the button reading "Track". Build mobile with the same two-tab behaviour as desktop (Track tab by default with radios + tracking input stacked full-width; Schedule tab with the 2×2 inputs and "View Schedule"). Variant name is misspelt "Scheldule" in Figma. Text layer names of both tab labels are "Schedule" (ignore names, use the copy).

---

## §4 Side menu (open state)

- **Nodes:** frame `2752:40839` (1440 × 1024) = home page with Overlay `2752:49930` on top. Panel `2752:49931`. Groups: About us 2752:49934, Services 2752:49947, Media 2752:49960, contact links 2752:49968. Close button `2752:49932` (glyph `xmark.circle` 2752:49933). Mobile reference: `Mobile side menu` 2978:14708 (component page, not on the home frame).
- **Layout (1440):**
  - Overlay: full viewport 1440 × 1024, fill #141414 at 60 % (backdrop over the page, header included).
  - Panel: 602 × 1024 (full height), right-aligned (x 838–1440), white Greys/0, radius **40 0 0 40** (rounded on the left side only). Column, padding 40 top/bottom, gap 32, content **vertically centred** (groups span y 122.5–901.5).
  - Close button: absolute, top 40, right 80; 26 × 26 icon (frame 186 × 30 with padding 2 80, right-aligned).
  - Each group: padding 0 80 (content width 442), column gap 4: headline (h 33) then "Section items" row = a 1.5 px vertical rail (Greys/100 #F0F0F1, radius 10, full height of the list) with the items list overlapping it (row gap -10, so the rail runs under each item's own bar). Items column gap 4, each item 22 tall: 1.5 px item bar (transparent) + gap 8 + label.
  - Fourth group (contact links): column gap **36**, no rail, links 15 tall (row step 51).
- **Copy (exact)** (headline text is stored lower-case with Upper case transform; it renders "ABOUT US", "SERVICES", "MEDIA"):
  - **About us**: "Transmar Group", "Our leadership principles", "Our History", "Leadership", "CEO Message", "Industries We Serve", "Sustainability at Transmar"
  - **Services**: "Schedule", "Containers", "Terminals", "Fleet", "Cargo", "End-to-End Services", "Digital Solutions"
  - **Media**: "Latest News", "Publications"
  - Contact links: "Contact us", "Find our local offices", "Join our team", "FAQs" (these have the Title case transform, so they render "Contact Us", "Find Our Local Offices", "Join Our Team", "FAQs"; decide whether to keep the transform).
  - Link targets: not defined in this frame; pages with matching names exist on the About us / Services / Media / Careers / FAQS pages of the file. Use `#` or the site's page paths.
- **Styles:**
  - Group headline: ADPortsGroup 700 20 px, line-height auto, uppercase, paragraph spacing 5, Primary/500 #1B64A6.
  - Item (default): ADPortsGroup 400 18 px, auto line-height, Greys/600 #8796A8; item bar transparent 1.5 px.
  - Item (hover, variant "hoover", shown on "Our History"): weight **700**, colour unchanged Greys/600, item bar becomes **3 px Primary/500** (radius 10), text shifts 1.5 px right.
  - Contact links: ADPortsGroup 400 20 px, auto line-height, Primary/800 #243666, title case.
  - Close icon: Greys/700 #65778C.
- **Assets:** close icon `xmark.circle` → SVG `2752:49933` → sprite `icon-close` (`transmar/images/icons/close.svg`).
- **Interactions/states:** opened by the header burger; overlay dims the page; close button (and, by convention, overlay click and Esc) closes; hover state on items as above (also use it for focus-visible). Group headlines are not drawn as links. No open/close animation in the design (assume a slide-in from the right).
- **Mobile:** the home mobile frame shows only the burger (30 × 30, white) in the header; there is no open-menu frame for mobile. A standalone `Mobile side menu` (2978:14708) exists: 375 wide (971 tall content), white, **no radius, no overlay, no close button and no header drawn**, column padding 40 0, gap 32; groups padding 0 16; same headline/item/link styles as desktop, but items are 29 tall (same 18 px text, bigger line box), item gap 4; same copy and order (hover sample on "CEO Message"); the first group ("About us") has no grey rail (likely an omission). Implement it as a full-screen white panel under a white mobile header (component `Mobile header` 2329:53026, with the burger swapped for the close icon), contents scrollable.
- **Differences 1440 vs mobile:** right drawer 602 wide with 40 px left radius and 60 % backdrop vs full-screen sheet; side padding 80 vs 16; item line box 22 vs 29.

---

## Asset summary

| Asset | Source node / ref | Export | Target |
|---|---|---|---|
| Logo | `I2589:9071;2329:52323` | SVG (currentColor) | `transmar/images/site/logo.svg` |
| Search icon | `I2589:9071;2687:12700` | SVG | sprite `icon-search` |
| Menu (burger) icon | `I2589:9071;2329:52347` | SVG | sprite `icon-menu` |
| Close icon | `2752:49933` | SVG | sprite `icon-close` |
| KV desktop | `2589:8683` | render PNG @2x → WebP | `transmar/images/hero/kv-desktop.webp` |
| KV XL (optional) | `2626:34562` | render PNG @2x → WebP | `transmar/images/hero/kv-xl.webp` |
| KV mobile | `1406:19204` | render PNG @2x → WebP | `transmar/images/hero/kv-mobile.webp` |
| (raw) port background photo | ref `c08e18481a8bd2e79608e586116286a079727d7b` | `fills --refs` | only if layering |
| (raw) ship cut-out | ref `85b252ed4b5f47387084b2e945e10f13eef4ba54` | `fills --refs` | only if layering |
