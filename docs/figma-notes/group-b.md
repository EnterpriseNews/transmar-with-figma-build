# Group B: Services, Customer advisory bar, Industries carousel

Figma fileKey `q8JHAesVFNMeDI8MaMAi7w`. Frames: desktop 1440 `2589:8682`, desktop XL 1920 `2626:33989`, mobile 375 `1406:19159`.
Node links: `https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=<id with - instead of :>`.
Font everywhere: **ADPortsGroup**. Positions are relative to the section's top-left.

## Section and node map
| Section | 1440 | 1920 | 375 |
|---|---|---|---|
| §1 Services | [2589:8684](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8684) | [2626:33991](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-33991) | [1410:19272](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1410-19272) |
| §2 Customer advisory bar | [2589:8711](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8711) | [2626:34018](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34018) | [1420:20911](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1420-20911) |
| §3 Industries carousel | [2626:34843](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34843) | [2626:34574](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34574) | [1413:19467](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1413-19467) |

Colour note: Figma's style named "Primary/900" is #243666, which is the value of the project token **Primary/800**. It is written below as `Primary/800 (#243666, Figma style "Primary/900")`.

---

## §1 Services

- **Nodes:**
  - 1440: wrapper 2589:8684; BG 2589:8685 (photo strip 2589:8686, Union shape 2589:8687); content column 2589:8696 → text 2589:8697, services grid 2589:8705 (instances 2589:8706–8710, component set "Services item", Default/Variant2).
  - 1920: wrapper 2626:33991; BG 2626:33992 (2626:33993, 2626:33994); Content 2626:34003 → text 2626:34004, grid 2626:34012 (2626:34013–34017).
  - 375: wrapper 1410:19272; BG 1410:19273 (photo 1410:19274, gradient 1410:19374, Union 1410:19372); content 1410:19276; services list 1420:21535 (frames "H" 1420:21536, 21547, 21562, 21566, 21570, 21587; plain frames, not instances).
  - Hidden layer (all desktop): a dark alert banner 2589:8688 / 2626:33995 sits inside the wrapper, hidden. See "Hidden content" below.
- **Layout per breakpoint:**
  - 1440: section 1440×957, bg #020518, clips; auto-layout column, pad 50 80 50 80. Content column (2589:8696) 1186 wide, gap 29 between text block and services grid. Text block 630 wide, column gap 20: title group (gap 4) then "Dec" paragraphs (column gap 20). Services grid 1186×200, row wrap, gap 0 → **3 items per row**, 2 rows (3 + 2), left-aligned. Item 342.5×100, row, gap 10, pad 16 0, items centred vertically, radius 24, no visible fill/border; icon box 63×50 (pad 8 0, icon centred); label fills the rest (269.5).
    - BG (absolute, behind content): starts at y=748, 1440×941 (clipped at the section bottom). Photo strip 1440×231 at y=746 (sits behind the services grid, ~211 px visible), with a gradient on top: #020518 100% at top → #020518 0% at bottom (navy fades to reveal the photo at the bottom). Big Primary/500 "Union" shape 1407×1407 at x=724, y=747 (only its top-left part is visible in the lower right).
  - 1920: section 1920×941, same bg/padding. Content column is 1186 wide starting at **x=240** (i.e. a 1440 container centred, 80 inner padding). Text column gap is **24** (not 20); paragraphs gap **10** (not 20); title line height 54. BG here is at the **top**: photo strip 1920×231 at y=-2, Union at x=1052, y=-2.
    - Design defect: Content 2626:34003 is absolutely positioned at y=798 inside a 941-tall clipping frame, so in Figma most of it is cut off. Build 1920 as the 1440 layout centred (container 1280 content + 80 padding, max-width 1440) and decide BG placement (1440 version has the photo at the bottom).
  - 375: section 375×1240, clips, no auto-layout. Content at y=81, column, gap 24, pad 0 16 (343 wide); title group gap 4. Services list at y=622, 375×618, pad 30 16 60 16, **one item per row** (6 items), each 342.5×88, row, gap 10, pad 8 0, radius 24, icon 63×50, label fill.
    - BG: photo 1440×454 at 0,0 (stretched, only left 375 px visible); gradient overlay 375×1712: #020518 0% at top → #020518 100% at 54% (photo at top fades into navy). Union 574×573 at x=78, y=0 (Primary/500).
- **Copy (exact):**
  - Desktop (1440 and 1920 identical):
    - Eyebrow: "Services" (rendered uppercase)
    - Title: "Connecting You to the Region’s Top Economies " (trailing space in source)
    - P1: "For more than four decades, Transmar has established itself as the leading regional shipping partner."
    - P2: "We understand the fundamental impact shipping has on global trade and recognize the crucial role our operations play in connecting markets, industries, and consumers well beyond the limits of national borders. By facilitating the movement of cargo, we actively participate in the growth of economies, contribute to the development of global supply chains, and help foster global economic integration."
    - P3: "Our expansive network of partnerships, affiliations, and our direct presence in the MENA region’s most prominent ports in Egypt, UAE, KSA, India, Pakistan, Sudan, Jordan, Yemen, Kuwait, Iraq, Qatar, and Djibouti provide our customers with the global know-how and the local on-ground expertise they need to ensure their cargo arrives to its destination safely and efficiently."
    - Items (order): "Fleet &cargo", "Schedule", "Vessel fleet", "Terminals", "Integrated Solutions" (labels have text-case Title, so they render "Fleet &Cargo", "Vessel Fleet"; source spacing "Fleet &cargo" is as written; trailing spaces after "Schedule", "Terminals", "Integrated Solutions" in source).
  - Mobile (different copy):
    - Eyebrow: "Services"
    - Title: "Connecting you to" / "the region’s top economies " (line break in source; text-case Title → renders "Connecting You To / The Region’s Top Economies")
    - Single paragraph: "Transmar is the leading carrier of containerized cargo in the region with more than 40% market share of all cargo that moves across the Red Sea.  Our expansive network of partnerships and affiliations and our direct presence in the region’s most prominent ports in Egypt, UAE, KSA, India, Pakistan, Sudan, Jordan, Yemen, and Djibouti will provide you with the global know-how and the local on the ground expertise that you need to ensure that your cargo arrives to its destination safely and efficiently. " (double space after "Red Sea." in source)
    - Items (order): "Routes", "Schedule", "Fleet &cargo", "Vessel fleet", "Terminals", "Integrated Solutions" (mobile adds **Routes** and puts it first; Fleet &cargo moves to 3rd).
  - No links/CTAs are defined on the items (hover only, see interactions).
- **Styles:**
  | Element | 1440 | 1920 | 375 |
  |---|---|---|---|
  | Eyebrow | 700 16/auto, uppercase, Primary/50 #D9EAFA | same | same |
  | Title | 700 36/44, para spacing 5, Greys/0 #FFFFFF | 700 36/**54** (text style "Desktop Headings/H1") | 700 28/38, Title case, Greys/0 |
  | Paragraphs | 400 18/29.7, Greys/0 | same | 400 16/30, Greys/0 |
  | Item label | 700 18/auto, Title case, Greys/0 | same | same |
  | Item icon | white (#FFFFFF) line icon in 63×50 box | same | same |
  | Section bg | #020518 (no named style; near Primary/950 #000E1A but not equal) | same | via gradient #020518 |
  | Union shape | Primary/500 #1B64A6 | same | same |
- **Assets:**
  | Asset | Source node | Export | Target |
  |---|---|---|---|
  | Background photo (port/ships strip) | image ref `c08e18481a8bd2e79608e586116286a079727d7b` (2589:8686) | `fills --refs` | `transmar/images/services/services-bg.webp` |
  | Union decorative shape | VECTOR 2589:8687 (same shape 2626:33994; mobile 1410:19372 is the same shape smaller) | svg | `transmar/images/services/services-shape.svg` |
  | Icon Fleet & cargo | I2589:8706;2329:52269 (mobile 1420:21563) | svg | `transmar/images/icons/service-fleet-cargo.svg` |
  | Icon Schedule | I2589:8707;2329:52215 (mobile 1420:21548) | svg | `transmar/images/icons/service-schedule.svg` |
  | Icon Vessel fleet | I2589:8708;2329:52278 (mobile 1420:21567) | svg | `transmar/images/icons/service-vessel-fleet.svg` |
  | Icon Terminals | I2589:8709;2329:52287 (mobile 1420:21571) | svg | `transmar/images/icons/service-terminals.svg` |
  | Icon Integrated Solutions | I2589:8710;2329:52246 (mobile 1420:21588) | svg | `transmar/images/icons/service-integrated.svg` |
  | Icon Routes (mobile only) | 1420:21537 | svg | `transmar/images/icons/service-routes.svg` |
  Icons are white; export the "Icon" frames (some are multi-path stroke icons with no fill) as svg and inline them in the sprite.
- **Interactions/states:** each desktop item has a prototype **ON_HOVER → CHANGE_TO "Property 1=Variant2"** (e.g. 2329:52272, 2329:52229), SMART_ANIMATE, ease-in-out, **600 ms**. Hover state: icon box grows to 73×57.94 (icon scaled ~1.16), label becomes **700 24/34** (from 18). Same size/padding/radius otherwise; no colour change. Mobile has no hover variant.
- **Hidden content (not to build unless decided):** 2589:8688 (1440, 1280×126) / 2626:33995 (1920, 1760×126): hidden banner, row, pad 30, gap 24, fill #000000 40% + background blur 64: alert icon 66×66 (ant-design:alert-outlined, Primary/50), title "Red Sea / Gulf of Aden situation" (700 16 upper, Primary/50), text "Stay up to date with our latest information, vessel contingency and updates here." (400 16/30, Primary/50), button "Learn More" (fill Primary/50, radius 8, pad 8 16, text 700 14/28 Primary/500; hover prototype to 2329:15273). Likely an alternative advisory banner.
- **Differences between breakpoints:** 1920 = 1440 content centred at x=240 with tighter paragraph gaps (10 vs 20), text-block gap 24 and title line height 54; BG photo at the top in 1920, at the bottom in 1440. Mobile: different body copy (one paragraph), smaller title, services as a 1-column list (88 tall items) with the extra "Routes" item first, photo at the top fading to navy.

---

## §2 Customer advisory bar

- **Nodes:** 1440 2589:8711 (row 2589:8712; text group 2589:8713; "Read more" 2589:8716; pager 2589:8718/8719 with arrows 2589:8720, 2589:8723 and counter 2589:8722). 1920 2626:34018 (same structure, 2626:34019–34030). 375 1420:20911 (text 1420:20912; row 1420:20915 with "Read more" 1420:20916 and pager 1420:20917/20918, arrows 1420:20919, 1420:20922, counter 1420:20921).
- **Advisory items:** only **one** item exists in the layers ("COVID-19 Service Disruption", counter "1/10"); `--hidden` shows no further items. The other 9 are not designed. (The hidden "Red Sea / Gulf of Aden situation" banner in §1 is the only other advisory-like content.)
- **Layout per breakpoint:**
  - 1440: 1440×110, bg Greys/0 #FFFFFF, column, pad 40 80. The row node is 1239×30 (fixed width, = 994 + 20 + 104 + 20 + 101), not the full 1280 inner width; treat as full width with the title group growing. Single row, gap 20, items centred vertically: [label + title] grows (gap 8) | "Read more" (104 wide) | pager (101×24: arrow 24, gap 10, "1/10", gap 10, arrow 24).
  - 1920: node is 1440×110 with pad **40 0** (row 1440 wide, no side padding), i.e. same bar in a 1440-wide container; placed inside the 1920 frame (container centred, aligned with 240 content edge assumed).
  - 375: 375×164, column, gap 24, pad 24 16. Row 1: text stack (column, gap 0): "Customer Advisory" over "COVID-19 Service Disruption". Row 2 (343×24): space-between → "Read more" left, pager right.
- **Copy (exact):** label "Customer Advisory" (rendered uppercase), title "COVID-19 Service Disruption", link "Read more" (rendered uppercase "READ MORE"), counter "1/10".
- **Styles (same at all widths):**
  - Label: 700 16/auto, uppercase, Primary/950 #000E1A.
  - Title: 400 16/30, Primary/950 #000E1A.
  - "Read more": 700 16/auto, uppercase, Primary/500 #1B64A6.
  - Counter: 400 16/auto, uppercase, Primary/800 (#243666, Figma style "Primary/900").
  - Arrows: 24×24, vector Primary/500 #1B64A6.
  - Bar bg Greys/0 #FFFFFF.
- **Assets:**
  | Asset | Source node | Export | Target |
  |---|---|---|---|
  | Pager arrow (uil:arrow-up, rotated −90° for prev and +90° for next) | frame 2589:8720 (vector 2589:8721); next 2589:8723 | svg (one arrow, rotate in CSS) | sprite symbol `icon-arrow-left` (the export points left; built by #7) |
- **Interactions/states:** no prototype interactions on the bar. Implied: prev/next arrows cycle through advisories and update "n/10"; "Read more" links to the current advisory (target not defined → `#`). No hover/disabled states drawn.
- **Differences between breakpoints:** desktop is one row (title grows, link and pager at the right); mobile stacks text over a space-between row of link + pager. 1920 has no side padding on the 1440-wide bar.

---

## §3 Industries carousel

- **Nodes:**
  - 1440: wrapper 2626:34843 (clips); BG 2626:34844 (Union 2626:34845); content 2626:34846; cards row "Cards group" 2648:40509; CTA 2626:34893.
  - 1920: Section 2626:34574 (fill Primary/50) → wrapper 2626:34032; BG 2626:34033 (1440 wide at x=240); content 2626:34035; "Cards group" 3043:11946; CTA 2626:34082.
  - 375: wrapper 1413:19467 (clips); BG 1413:19518 (Union 1413:20010); group 1413:19519 → content 1413:19470, cards 2344:6927, CTA 1413:19505.
- **Layout per breakpoint:**
  - 1440: section 1440×686, bg Primary/50 #D9EAFA. Content at x=80, y=100, 606 wide, column gap 20: title group (gap 8) then paragraph. Cards row at y=332, row, **gap 20**, cards 303×186, starts at x=80 and overflows right (8 cards, 2564 wide): 4 cards fully visible, 5th shows ~68 px at the right edge (clipped by the section). CTA row at y=548 (30 below cards), gap 8 text + 24 icon. Bottom space 108.
  - 1920: section 1920×686, Primary/50 full width; decorative BG only in the centred 1440 area (x=240). Content at x=240, y=100 (content gap 0 but paragraph has pad-top 20 → same spacing). Cards row at x=240, y=332, gap 20, **10 cards** (3210 wide): 5 fully visible, 6th shows ~65 px. CTA at y=548.
  - 375: section 375×700. Content at y=83, column, pad 0 16; title group gap 8; paragraph pad-top 16. Cards row at y=385, row, **gap 16**, pad-left 16, 10 cards (1280 group width clipped): 1 card fully visible, 2nd shows ~40 px. CTA at y=587, pad 0 16.
  - Card (all widths): 303×186, radius 20, clips; image fill (cover) with gradient overlay top→bottom: #001721 0% → #00141C 91% opacity; pad 20; title row at the bottom (263 wide, gap 4, centred): label fills width, arrow icon right (24 px glyph rotated −45° → ↗, bounding 33.94).
- **Slides/cards (in order) with image refs:**
  | # | 1440 title (2648:…) | 1920 title (3043:…) | 375 title (2344:…) | Image ref to use |
  |---|---|---|---|---|
  | 1 | Petrochemicals | Petrochemicals | Petrochemicals | `7f0584da4f6fa5a715c303ade8116ff175c7ae5c` |
  | 2 | Building Materials | Building Materials | Building materials | `6958a1a40297ca524dc198ae91a05f9ee61b8b40` |
  | 3 | Food Products | Food Products | Food Products | `3e8e43f2da113c34dc940dd6e9ad5a09a76ff741` |
  | 4 | Agri Products | Agri Products | Agri products | `96999a9a7ea4c6fb31ad8ac014a15e93234228e4` |
  | 5 | FMCG | FMCG | FMCG | `d30c05277ecbf780fdfe185645354ed808fe4b01` (1920/375); 1440 uses `44baf9…` (Fresh produce photo, likely a mistake) |
  | 6 | Fresh produce | Fresh produce | Fresh produce | `44baf97363095afce6324b3f0716a96a2a2141f7` |
  | 7 | Paper Products | Paper Products | Paper products | `72e642165ec4e743e1f8b9f83a132c18de976e6c` |
  | 8 | Textiles | Textiles | Textiles | `959f2999d773916585a972ffc34feaef06f22fa1` |
  | 9 | — | "Textiles" (3043:11987, mislabelled) | Home Appliances | `e3c82b8b858856d59fe90c40405591482ec88376` |
  | 10 | — | "Textiles" (3043:11992, mislabelled) | Pharmaceuticals | `b66c52c5b720ea478f2729d763bbbae0d5d07a65` |
  In 1440/1920, cards 3, 4 and 7 stack two image fills: `6958a1…` (Building Materials photo) underneath and the card's own photo on top; the top one (= mobile's single fill) is the visible one. Recommended set: the 10 cards of mobile with the titles above (desktop title case "Building Materials" etc.).
- **Copy (exact):**
  - Desktop (1440 = 1920): eyebrow "INDUSTRIES"; title "We’re the Commodity Experts"; paragraph "Our commodity expertise and regional network allows us to design tailored solutions for customers across multiple industries including:"; CTA "View all industries".
  - Mobile: eyebrow "Industry Sectors" (rendered uppercase "INDUSTRY SECTORS"); title "We’re the commodity experts" (text-case Title → "We’re The Commodity Experts"); paragraph "Our commodity expertise and regional network allows us to design tailored solutions for customers across multiple sectors including:"; CTA "View all industry sectors".
  - Card titles: see table (source has trailing spaces after "Petrochemicals", "Building Materials"/"Building materials", "Fresh produce").
- **Styles:**
  | Element | 1440 / 1920 | 375 |
  |---|---|---|
  | Eyebrow | 700 16/auto, uppercase, Primary/500 #1B64A6 | same |
  | Title | 700 36/54, para 5, text style "Desktop Headings/H1", Primary/800 (#243666, Figma "Primary/900") | 700 28/38, Title case, same colour |
  | Paragraph | 400 16/30, Primary/950 #000E1A | same |
  | Card title | 700 16/30, Greys/0 #FFFFFF | same |
  | Card arrow | white, arrow-right rotated −45° | same |
  | CTA text | 400 16/30, Neutrals/950 #0D0D0D | same |
  | CTA arrow | 24×24 arrow-right, #0D0D0D (Neutrals/950) | same |
  | Section bg | Primary/50 #D9EAFA | same |
  | Decorative Union | white #FFFFFF shape (1440: 2626:34845, 1281×1383 at x=778, y=−690, clipped) | white (1413:20010, 409×441 at x=176, y=259) |
- **Assets:**
  | Asset | Source | Export | Target |
  |---|---|---|---|
  | 10 card photos | image refs in the table above | `fills --refs` | `transmar/images/industries/{petrochemicals,building-materials,food-products,agri-products,fmcg,fresh-produce,paper-products,textiles,home-appliances,pharmaceuticals}.webp` |
  | Arrow-right icon | component 2105:4712 "Type=Arrows ,Icon=arrow-right", vector I2626:34895;2643:108545 | svg (rotate −45° in CSS for cards) | sprite `icon-arrow-right` / `transmar/images/icons/arrow-right.svg` |
  | Decorative Union (white) | VECTOR 2626:34845 (1440/1920), 1413:20010 (375) | svg | `transmar/images/industries/industries-shape.svg` |
- **Controls / interactions:** **no carousel controls are drawn** — no prev/next arrows, no dots, no pager at any breakpoint, and no prototype interactions on cards. The design shows a horizontally overflowing row with a partially visible next card, so implement as a horizontal scroll/drag strip (scroll-snap) clipped at the viewport right edge, aligned to the container on the left. Cards look clickable (↗ arrow); no hover state drawn; link targets not defined. "View all industries" CTA: text + arrow, no hover drawn.
- **Loose frames on the page:** "01".."05" (3043:12076, 12075, 12074, 12073, 12086) are 336×220, radius 20, a single image fill each (refs `a07b603b…`, `6e688be3…`, `c807806b…`, `24175050…`, `f258d60b…`), no title, no gradient, and lie outside the frames (around x=−4761, y=27261). Different size from industry cards (303×186) and far below this section → **not relevant** to Industries (probably images for another section or spares). RECTANGLE 3383:1300 "home-and-personal-care-1 1" (303×186, ref `e8a0bc782eb8bb0ab7074069775be72eaf187c91`, same card gradient) is outside the frames left of the 1920 frame → **possibly relevant**: an alternative photo for a "Home & personal care"/Home Appliances card; not used in any frame. Mobile's Home Appliances card uses `e3c82b…`.
- **Differences between breakpoints:** 1440 has 8 cards (no Home Appliances / Pharmaceuticals); 1920 has 10 (last two mislabelled "Textiles"); 375 has 10 with correct titles and sentence-case titles. Mobile: eyebrow "Industry Sectors", "sectors" wording in paragraph and CTA, title 28/38, card gap 16 (desktop 20), 16 px left inset. 1920 confines the decorative BG to the centred 1440 area.
