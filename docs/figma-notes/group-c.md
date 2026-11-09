# Group C: Transmar at a Glance, Regional presence map, News & Insights

Figma fileKey `q8JHAesVFNMeDI8MaMAi7w`. Frames: desktop 1440 `2589:8682`, desktop XL 1920 `2626:33989`, mobile 375 `1406:19159`.
Read with `figma.mjs node` (incl. `--hidden`: no hidden layers in these sections). Font everywhere: **ADPortsGroup** (400 / 700).

Colour notes: Figma style "Primary/900" has the same hex as Primary/800 (#243666) → use **Primary/800**. Unnamed colours in this group: #13224A (map labels), #003866 → #013967 (glance background gradient), map base greys #EBF5FC / #DAE6F5 / #D9D9D9, pattern tints #EDF4FA.

Caution: the API's text box heights are too small for the line heights (e.g. 23 px box for a 30/42 line); use the line heights, not the box heights.

## Section and node map
| # | Section | 1440 | 1920 | 375 |
|---|---|---|---|---|
| 1 | Transmar at a Glance | [2626:34896](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34896) · 1440×766 @y2501 | [2626:34085](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34085) · 1923×766 @x-1.5,y2485 | [1413:19673](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1413-19673) · 375×916 @y2922 |
| 2 | Regional presence map | [2589:8861](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8861) · 1440×857 @y3267 | [2626:34168](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34168) · 1440×830 @x240,y3251 | [1420:21534](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1420-21534) · 375×470 @y3838 |
| 3 | News & Insights | [2589:8955](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8955) · 1440×656 @y4124 | [2626:34262](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34262) · 1920×656 @y4081 | [1413:20016](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1413-20016) · 375×729 @y4358 |

Mobile: the map ends at y4308 and News starts at y4358 → a 50 px gap in the frame between them (frame background shows; treat as section spacing).

## §1 Transmar at a Glance (key figures)

- **Nodes:** BG `2626:34897` (photo rect `2626:34898`, decorative pattern `2626:34899`), content `2626:34904`, cards row `2626:34909`, cards `2626:34910 / 34919 / 34934 / 34941 / 34965`. 1920: BG `2626:34086` (rect `2626:34087`, pattern `2626:34088`), content `2626:34093`, cards `2626:34098`. 375: BG `1413:19674` (rect `1413:19675`, vector "Union" `1413:20012`), content `1413:19678`, cards `1413:19683`.
- **Layout**
  - 1440: section 1440×766, full-bleed background. Content wrapper 1280 wide at x80, y60 (i.e. padding 60/80; bottom 46), column, **gap 288** between text block and cards. Text block 629 wide, column gap 20 (eyebrow+title group gap 0, then 20 to body). Cards row: 5 equal cards (fill, grow) 240×212, gap 20, cross-align center. Card: column, gap 14, padding 24, radius 20, white; icon frame 56×56; "Title" block column gap 16 with padding-top 16 (number, then label).
  - 1920: background spans 1920 (section 1923 wide at x-1.5 → treat as full-bleed 1920); content 1440 wide centred (x 240) at y60; text block 629, gap **16** (not 20); cards 272×212 each (5 × 272 + 4 × 20 = 1440). Pattern `2626:34088` is 1440×766 centred (x 241.5), not stretched.
  - 375: section 375×916. Wrapper column, padding 40 16 60 16, aligned to bottom. Text block absolutely placed at x16, y38, 343 wide, column gap 16 (eyebrow/title gap 4). Cards: wrap row, 343 wide, gap 16 / row-gap 16, starts y398; card 163.5×142 (fixed), padding 20 16, gap 8, radius **10**; 2 columns, 5th card alone on row 3 (left). Icon frame 40×40 on cards 1–2, **48×48** on cards 3–5 (inconsistent in design; use one size, e.g. 40). Number/label gap 8 (card 1) / 10 (others), no top padding.
- **Copy (exact, same order all widths):**
  - Eyebrow: "About us" (rendered uppercase)
  - Title: "Transmar at a Glance"
  - Body 1440/1920: "With 45 years of keeping promises to our customers, our track record and growth trajectory speaks for itself." — 375 says "With **44** years …" (design inconsistency; use 45). Trailing double space in source, drop it.
  - Cards (number / label):
    1. "3.2 mn" / "Tons shipped"
    2. "23,000" / "TEU Fleet size containers"
    3. "535" / "Employees"
    4. "208" / "Stevedoring equipment" — 375: "Units of stevedoring equipment"
    5. "70,000 m2" / "Storage spaces" — on desktop the characters "m2" have `fontVariantPosition: SUPER` (superscript) → write `70,000 m²`; 375 text is "70,000 M2" (uppercase transform, no superscript) → use the same `m²`.
- **Styles**
  - Eyebrow: 700 16/auto(≈26), uppercase, Greys/0 — all widths.
  - Title: 1440/1920 "Desktop Headings/H1" 700 36/54, Greys/0; 375 700 28/38, Greys/0.
  - Body: 400 16/30, Greys/0 — all widths.
  - Number: 1440/1920 700 30/42, Primary/500; 375 700 20/auto, uppercase, Primary/500.
  - Label: 1440/1920 400 14/26, Primary/800; 375 400 12/26 (12/auto on 2-line labels), Primary/800.
  - Card: Greys/0 background, radius 20 (desktop) / 10 (mobile), no shadow, no border.
  - Background: fills on the rect, bottom→top: image `a26c83ed…` (stretch, 1440 only), image `ed6ef927…` (fill), then an **opaque** linear-gradient 180deg #003866 → #013967 on top. So the visible background is the navy gradient; the photos are covered (named "video-1": likely a placeholder for a background video). Build as CSS gradient + pattern.
- **Assets**
  | Asset | Node | Export | Target |
  |---|---|---|---|
  | Icon ship (cards 1, 3, 4, 5) | `2626:34911`, `34935`, `34942`, `34966` (375: `1413:19748`, `19867`, `19890`, `19894`) | render svg, one per distinct glyph (the four "Ship" frames may hold different vectors; check after export) | `transmar/images/icons/glance-*.svg` (inline sprite) |
  | Icon containers (card 2; card 5 on 375 is "Container" `1413:19962`) | `2626:34920` | svg | `transmar/images/icons/glance-containers.svg` |
  | Decorative pattern (desktop) | `2626:34899` (1440×766; 1920 `2626:34088`) | svg | `transmar/images/decor/glance-pattern.svg` |
  | Decorative "Union" shape (375) | `1413:20012` 408.8×441.2 @174,-29.2, #1B64A6 | svg | `transmar/images/decor/glance-union-mobile.svg` |
  | Background photos (hidden under gradient) | refs `ed6ef9278edc681eb516c83822c91155ccf74615`, `a26c83ed17d8312f2dcaa14e8b4efbf53d9eea73` | `fills --refs` only if a reviewer confirms they are visible | `transmar/images/photos/glance-bg.webp` |
  Mobile icon order differs: 5th card (Storage) uses the "Container" icon on 375, while desktop puts "Container" on card 2 (TEU). Check the glyphs after export and map icon→metric consistently.
- **Interactions/states:** none drawn. (Counting-up numbers would be an addition, not in design.)
- **Breakpoint differences:** 1920 = 1440 content centred, wider cards, text gap 16; 375 = text on top, 2-column 5-card grid at the bottom of a 916-high navy block, smaller type, radius 10, different decorative shape, body copy "44 years", card 4 label longer.

## §2 Regional presence map

- **Nodes:** 1440: section `2589:8861`, heading `2589:8862`, map frame `2589:8866`, map art "Group 33" `2847:14457` = base map "unsupported" `2847:14458` + "supported" `2847:14507` (17 country shapes + 16 labels). 1920: `2626:34168`, heading `2626:34169`, map frame `2626:34173`, art `2626:34174` (`2626:34175` / `2626:34224`). 375: `1420:21534`, art `2626:34595` (`2626:34596` / `2626:34645`), heading `1420:21082`.
- **Layout**
  - 1440: section 1440×857, white, padding 60 100, column gap 50. Heading block is **absolute** at x100 y60 (1240 wide, left-aligned) and overlaps the map frame top (map frame 1240×737 at y60). Map art 986.67×670.17 at x226.67 y93 (section coords), i.e. roughly centred; country shapes start ~y182 so heading and shapes do not collide.
  - 1920: section is **1440 wide** placed at x240 (white; outer frame white too), padding 60 0, gap 50, heading in flow (1440 wide, left-aligned → left edge at x240, 140 px further left than 1440's x100 relative to the art). Map frame 1440×521 at y249; art same size 986.67×670.17 at x227 y125.92 (overflows the 521 frame visually, ends y796 of 830).
  - 375: section 375×470, white. Heading block x16 y60, 343 wide, column gap 4, plus a routes line (row, padding-top 16). Map art scaled to 415×281.88 (×0.4206) at x-40 y177 (bleeds 40 px off the left edge; section clips).
- **Copy (exact):**
  - Eyebrow: "Routes" (uppercase)
  - Title: 1440/1920 "Our Regional" ⏎ "Presence" (hard line break); 375 "Our Regional Presence" (one string, wraps naturally)
  - 375 only: "Currently Operating 17 Regional Routes" with "17" in bold Primary/500
  - Map labels (16): Egypt, Sudan, Djibouti, Kenya, Yemen, Oman, UAE, Qatar, Iraq, Kuwait, Turkey, Pakistan, India, Vietnam, Jordan, "Saudi" ⏎ "Araabia" (**typo in design → "Saudi Arabia"**). Shapes (17): the 16 above + Bahrain (no label) — matches "17 Regional Routes".
- **Styles**
  - Eyebrow: 700 16/auto, uppercase, Primary/500.
  - Title: 1440/1920 "Desktop Headings/H1" 700 36/54, Primary/800; 375 700 28/38, Primary/800.
  - Routes line (375): 400 16/30, Primary/800 (base style Greys/500, overridden), "17" 700 Primary/500.
  - Labels: "Body text bold/B4" 700 10/auto, centred, #13224A (unnamed; closest Primary/800). On 375 they are 3.8 px (just the scaled artwork).
  - Supported countries: Primary/500 fill, shadow 0 9.71 19.42 #000 1% (invisible in practice; skip). Base map: #EBF5FC / #DAE6F5 / #FFFFFF / #D9D9D9.
- **Decision: export, don't rebuild.** The base map is ~50 vector groups of coastlines and the art is identical at all three widths (same 986.67×670.17 geometry; mobile is the same art ×0.42, offset). Export **one SVG** of the art (`2847:14457`, `render --format svg`) and scale it with CSS per breakpoint (desktop ≈987 px wide centred; mobile 415 px wide, margin-left -40 px, clipped). Not PNG: it is flat vector, SVG stays sharp and small. Not per breakpoint: no geometry differs.
  - **Labels stay real HTML text**: the exported SVG outlines text (and would bake in the "Araabia" typo). Remove the label paths from the SVG (they are the paths filled `#13224A`) and overlay the 16 labels as absolutely positioned `<span>`s in a `position:relative` box with the art's aspect ratio (986.67:670.17), using these centre points (% of art box, from 1440 nodes; translate(-50%,-50%)):
    | Label | Node | left | top |
    |---|---|---|---|
    | Turkey | 2847:14539 | 26.6% | 18.7% |
    | Iraq | 2847:14537 | 34.4% | 29.2% |
    | Jordan | 2847:14543 | 25.7% | 30.7% |
    | Kuwait | 2847:14538 | 37.1% | 33.8% |
    | Pakistan | 2847:14540 | 61.2% | 34.4% |
    | Egypt | 2847:14510 | 20.5% | 38.9% |
    | Qatar | 2847:14536 | 43.4% | 40.5% |
    | Saudi Arabia (2 lines) | 2847:14544 | 35.6% | 42.9% |
    | UAE | 2847:14535 | 45.1% | 43.7% |
    | India | 2847:14541 | 70.0% | 46.0% |
    | Vietnam | 2847:14542 | 93.8% | 49.6% |
    | Oman | 2847:14534 | 48.3% | 50.5% |
    | Yemen | 2847:14533 | 38.7% | 56.5% |
    | Sudan | 2847:14511 | 20.4% | 57.1% |
    | Djibouti | 2847:14531 | 31.4% | 62.3% |
    | Kenya | 2847:14532 | 28.7% | 78.9% |
    (Vertical values may be ~0.5% off because the API's text heights are compressed.) On 375 the labels would be 3.8 px: hide them visually there (keep them in the accessibility tree), or scale font to ~4 px only if a reviewer insists on pixel parity.
  - Also real HTML: eyebrow, title, the 375 routes line. Give the SVG `alt`/`aria-label` "Map of Transmar's regional presence: …" listing the 17 countries (incl. Bahrain).
- **Assets**
  | Asset | Node | Export | Target |
  |---|---|---|---|
  | Regional map (base + highlighted countries, labels removed) | `2847:14457` | render svg (1×) | `transmar/images/map/regional-presence.svg` |
- **Interactions/states:** none drawn (no hover, tooltips, legend or markers).
- **Breakpoint differences:** 1440 heading overlays the map (absolute); 1920 heading in flow inside a 1440 column with no side padding; 375 heading single-line string + routes count line, map smaller and bleeding left. No legend at any width.

## §3 News & Insights

- **Nodes:** 1440: wrapper `2589:8955`, heading `2589:8957`, cards row `2589:8960`, cards `2589:8961 / 8966 / 8971` (images `2589:8962 / 8967 / 8972`), link `2589:8976` (icon `2589:8978`). 1920: `2626:34262`, heading `2626:34264`, row `2626:34267`, cards `2626:34268 / 34273 / 34278`, link `2626:34283` (icon `2626:34285`). 375: `1413:20016`, heading `1413:20018`, row `1413:20021`, cards `1413:20022 / 20027 / 20032`, link `1413:20037` (icon `1413:20040`).
- **Layout**
  - 1440: full-bleed Primary/50 band, padding 60 80, column gap 24, centred. Heading block 607.5 wide centred, gap 8. Cards row 1280, 3 equal cards 413.33 wide, gap 20, equal height 366 (cards stretch). Card: column, white, radius 20; image 413.33×224, radius 20 20 0 0, object-fit cover; text area padding 20, gap 24 (title then date). Link row centred, gap 8 (text + 24×24 arrow).
  - 1920: identical; band 1920 wide, padding 60 80 but content row fixed 1280 centred (x320). Same card sizes.
  - 375: band padding 60 16, gap 24. Heading 343 wide. Cards row is still **1280 wide** (gap 16) and offset so the **middle card** is centred in the viewport (x36–339, 303 wide, radius 17.66, image 197.83 high, padding 17.66, gap 21.2), with cards 1 and 3 (472.5 wide) off-screen left/right → a **horizontal carousel/swipe** of cards. Build as a horizontally scrollable scroll-snap row with cards ~303 px wide (min(303px, 81vw)), radius 20, image ~198 high, gap 16, starting with card 1 (or centred on card 2 as drawn). No dots/arrows drawn. Link row 343 wide centred.
- **Copy (exact):**
  - Title: "Transmar News & Insights"
  - Subtitle: "Unveiling the Latest Headlines, Stay Ahead of the Curve!"
  - Card 1: "Transmar Kicks Off New Reefer Service Connecting Egypt to Yemen" — date "July 2023"
  - Card 2: "Transmar CSO, Nada El Ahwal Participates in Panel Discussion on Industrial Clusters at Enterprise Exports and FDI Forum" — date "May 2023"
  - Card 3: "Transmar Signs USD 25 mn Cargo Vessel Finance Deal with EFG Hermes Corp Solutions" — date "February 2022"
  - Link: "View all News" + arrow-right icon. (Trailing spaces in Figma strings dropped.) No tags/categories, no pager.
- **Styles**
  - Title: 1440/1920 "Desktop Headings/H1" 700 36/54, centred, Primary/800; 375 700 28/38, centred, Primary/800.
  - Subtitle: 400 16/30, centred, Primary/800 — all widths.
  - Card title: 700 14/28, Greys/700. Date: 400 14/26, Greys/700 (375 middle card 12.36/22.96 — a scaled copy; use 14/26). Use `<time datetime="2023-07">` etc.
  - Card: Greys/0 bg, radius 20, no shadow/border. Section bg Primary/50.
  - Link: 400 16/30, Primary/800; icon #243666 (Primary/800).
- **Assets**
  | Asset | Node / ref | Export | Target |
  |---|---|---|---|
  | News 1 photo | ref `8d47fb68c35b6382beffc5e91669cefb9ffb67c7` (`2589:8962`) | `fills --refs` | `transmar/images/news/news-reefer-egypt-yemen.webp` |
  | News 2 photo | ref `d002057c3a41879cafe6abd48d5f1c08027f2789` (`2589:8967`) | `fills --refs` | `transmar/images/news/news-cso-panel.webp` |
  | News 3 photo | ref `926f7acf6bdae52f7afee3d135ef4509131308de` (top fill of `2589:8972`; `d002057c…` under it is covered) | `fills --refs` | `transmar/images/news/news-efg-finance.webp` |
  | Arrow right icon | `2589:8978` (component "Type=Arrows ,Icon=arrow-right") | render svg | sprite `#icon-arrow-right` (`transmar/images/icons/arrow-right.svg`) |
  Image component name "Property 1=EFG" is the same for all three; the fills differ.
- **Interactions/states:** "View all News" is a link (target not given; e.g. `news.html`/`#`); cards are links to articles (not specified). No hover states drawn. Mobile: swipeable card row.
- **Breakpoint differences:** 1920 = 1440 content centred in a full-width band; 375 = smaller title, carousel of cards (one card visible, ~303 wide), link centred below.
