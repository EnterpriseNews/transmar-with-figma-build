# Group D: Social News, Footer, Red Sea alert banner

Figma fileKey `q8JHAesVFNMeDI8MaMAi7w`. Frames: desktop 1440 `2589:8682` (1440×5915.81), desktop XL 1920 `2626:33989` (1920×5872.81), mobile 375 `1406:19159` (375×6318). No tablet frame.
Node link pattern: `https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=<id with - for :>`.

## Section and node map

| Section | 1440 | 1920 | 375 |
|---|---|---|---|
| Social News (container `Frame 1000001020`) | [2589:8979](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8979) @y 4780 | [2626:34286](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34286) @y 4737 | (none, sections are top-level) |
| Social News `Wrapper` | [2589:8980](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-8980) 1440×771, y 4780 | [2626:34287](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34287) 1440×771 at x 240, y 4737 | [2344:6978](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2344-6978) 375×599, y 5087 |
| Footer | [2589:9065](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-9065) 1440×364.81, y 5551 | [2626:34372](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34372) 1920×364.81, y 5508 | [1828:13673](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=1828-13673) 375×632.01, y 5686 |
| Red Sea alert banner | [2589:9072](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-9072) 1440×126, y 5789.81 | [2626:34379](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2626-34379) 1920×126, y 5747 | [2589:33429](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=2589-33429) 375×288, y 6030 |

Font: `ADPortsGroup` throughout, except the footer copyright (all widths) and the mobile footer tagline/links, which are set in `Helvetica` in Figma.

---

## §1 Social News (LinkedIn posts carousel)

- **Nodes:**
  - 1440: wrapper `2589:8980`; headline `2589:8981`; posts row `2589:8982`; cards `2589:8983`, `2589:8998`, `2589:9014`, `2589:9030`, `2589:9046`; footer link row `2589:9062` (text `2589:9063`, arrow `2589:9064`).
  - 1920: wrapper `2626:34287`; headline `2626:34288`; row `2626:34289`; cards `2626:34290`, `2626:34305`, `2626:34321`, `2626:34337`, `2626:34353`; link row `2626:34369` (text `2626:34370`, arrow `2626:34371`).
  - 375: wrapper `2344:6978`; title group `2344:6979` / headline `2344:6980`; row `2344:7124`; cards `2344:7125`, `2344:7140`, `2344:7155`; link row `2344:7002` (text `2344:7003`, arrow `2344:7004`).
  - Card anatomy (1440 card 1 ids; same structure everywhere): card `2589:8983` > header `2589:8984` [avatar group `2589:8985` (avatar `2589:8986`, name `2589:8988`), LinkedIn badge `2589:8989`] > image `2589:8992` > content `2589:8993` (text `2589:8994`) > fade overlay `2589:8995` (absolute) > link row `2589:8996` ("Read more" `2589:8997`).

- **Layout per breakpoint:**
  - **1440:** wrapper 1440 wide, auto-layout column, gap 20, padding 100 80 100 80, children left-aligned (counter-axis min), bg Greys/0. Headline 1280 wide (fill). Posts row: auto-layout row, gap 20, 5 cards of 384×447 = 2000px of content in a 1280 track, so cards 1–3 sit at x 80/484/888 and card 4 starts at x 1292 (peeks 148px to the frame edge); card 5 is fully off-canvas. Wrapper does not clip → horizontal carousel/scroller that bleeds to the right edge. Link row below: row, gap 8, align left/center, 1280 wide, at y 641 (row y 174 + 447 + 20).
  - **1920:** wrapper is 1440 wide, centred at x 240, padding 100 0 100 0 (no side padding), gap 20. Headline 1440 wide; row 1280 track starting at wrapper x 0 (frame x 240); same 5 cards × 384, gap 20 → cards 1–3 + card 4 (x 1212–1596) fully visible, card 5 starts at x 1616 within wrapper (frame x 1856), i.e. it bleeds past the 1440 container towards the 1920 edge. Link row 1440 wide. Effectively: same as 1440 but container content starts at x 240 instead of 80.
  - **375:** wrapper column, gap 24, padding 60 16 60 16, align center/center. Title group 343 wide (column, gap 8, centred). Posts row: row, gap 16, align center, 3 cards of 303×380; middle card centred at x 36–339, side cards peek 20px each side (x −283..20 and 355..658). Link row 343 wide, row gap 8, left aligned, at y 509.
  - **Card (all widths):** auto-layout column, gap 16, padding 24, radius 20, bg Greys/50 `#EFF2F5`, clips content. 1440/1920: 384×447 (inner 336). 375: 303×380 (inner 255).
    - Header: row, gap 8, align center; avatar group (fill, row gap 8, align center): avatar 40×40 circle (radius 200, 1px border Greys/50, image fill), name "Transmar"; right: LinkedIn badge 32×32 frame (28×28 rounded rect radius 4, fill `#1275B1` (LinkedIn blue, no named style) + white "in" glyph 15×14).
    - Image: 1440/1920 336×220 (w fill), 375 255×153 (fixed); radius 20; clips; photo fill (cover).
    - Content: fixed height 63 (≈ 2.4 lines at 26px), clips; post text below is cut off. 375 text frame also clipped to 63.
    - Fade overlay `Frame 1000001026`: absolute, 397×94 (card 5 at 1440/1920: 397×90), positioned at the bottom of the text area, linear gradient 0deg (bottom → top) of Greys/50 `#EFF2F5`, stops 0% → 80% (card 5: 100%); i.e. the text fades into the card bg above "Read more". (figma.mjs prints the stops as `#EFF2F5 0%, #EFF2F5 0% 80%`: treat as opaque `#EFF2F5` at the bottom fading to transparent at 80%.)
    - Link row: row, gap 4, centred; "Read more" centred horizontally in the card.

- **Copy (exact):**
  - Headline: "Social News"
  - Card name (every card): "Transmar"
  - Link (every card): "Read more" (no URL in design → link to the post / LinkedIn page)
  - Post texts, 1440 and 1920 (identical at both):
    1. Card 1: "Visit Transmar at PLASTEX 2024 - MENA's largest plastics and rubber exhibition for internationally renowned materials...." — "Transmar" underlined, links to `https://www.linkedin.com/company/transmarline/`.
    2. Card 2: "#TransmarPartners: Asif Iftekhar Ahmed Butt Boasting one of the most diverse portfolios in MENA, the UAE-based Multi Trade Limited FZC sits at the pinnacle of" — underlined links: "#TransmarPartners" → `https://www.linkedin.com/feed/hashtag/?keywords=transmarpartners&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7154072607284211712`; "Asif Iftekhar Ahmed Butt" → `https://www.linkedin.com/in/ACoAAACrDGYB3Li-SEtRPI7-SSMVZWvKahFn_lM`; "Multi Trade Limited FZC" → `https://www.linkedin.com/company/multi-trade-limited-fzc-sharjah/`.
    3. Cards 3, 4, 5 (same text): "Honored to be a sponsor of PLASTEX 2024, Transmar has been at the centre of conversation, as we invite industry leaders and valued partners to engage in meaningful dialogue and explore how we can empower businesses to achieve sustainable success." — "PLASTEX 2024" underlined, links to `https://www.linkedin.com/company/plastex2024/`.
  - Post texts, 375: all 3 cards use card 1's text "Visit Transmar at PLASTEX 2024 - MENA's largest plastics and rubber exhibition for internationally renowned materials...." with "Transmar" linked to `https://www.linkedin.com/company/transmarline/` (NOT underlined on mobile).
  - Bottom link: 1440/1920 "Visit Our Linkedin Page & Stay Updated " (trailing space); 375 "Visit our Linkedin Page & stay Updated " (different capitalisation, trailing space). No URL on the node; use `https://www.linkedin.com/company/transmarline/`.

- **Styles:**
  | Element | 1440 / 1920 | 375 |
  |---|---|---|
  | Headline | text style "Desktop Headings/H1": ADPortsGroup 700 36/54, paragraph spacing 5, Primary/800 `#243666`, left aligned | ADPortsGroup 700 28/38, Title Case, centred, colour `#243666` (fill style is named "Primary/900" in Figma but the hex is Primary/800's `#243666`) |
  | Card name "Transmar" | ADPortsGroup 700 16/30, Primary/500 `#1B64A6` | same |
  | Post text | ADPortsGroup 400 14/26, Primary/800 `#243666`; linked runs underlined | text style "Body text/B2" 400 14/26, Primary/800; links not underlined |
  | "Read more" | ADPortsGroup 700 14/28, Primary/500 `#1B64A6` | same |
  | Bottom link text | ADPortsGroup 400 16/30, underline, Primary/800 `#243666` | same |
  | Arrow icon | 24×24 "Arrow / Arrow_Up_Right_MD", stroke `#243666` (Primary/800), 1.67 stroke | same |
  | Card | bg Greys/50 `#EFF2F5`, radius 20, padding 24, gap 16 | same |
  | Avatar | 40×40, radius 200 (circle), 1px border Greys/50 | same |
  | Section bg | Greys/0 `#FFFFFF` | same |

- **Platforms:** every card is a LinkedIn post (LinkedIn badge in each header). No other platforms in this section.
- **Controls:** none drawn — no arrows, no dots/pagination, no scrollbar. The carousel is implied only by overflow (5 cards in a 1280 track at desktop; 3 cards with peeking neighbours on mobile, middle one centred) → implement as a horizontally scrollable / swipeable track (scroll-snap), mobile snapping to centre.
- **Interactions/states visible:** none (no hover frames). Links: name/avatar, "Read more", inline links in text, bottom "Visit Our Linkedin Page" link (underlined + external-arrow icon → opens LinkedIn, new tab implied by the arrow).

- **Assets:**
  | Asset | Source | Export | Target path |
  |---|---|---|---|
  | Avatar (Transmar logo avatar) | image fill ref `ed89355e08f05bd7a58564012e6f07b76e9be699` (e.g. node `2589:8986`) | `fills --refs` | `transmar/images/social/avatar-transmar.webp` |
  | Post photo 1 (card 1) | Image frame `2589:8992` fill ref `50db9ad997fc3f5c5d9581d1a9093ccd10258090` (stretch; also the base fill under every other card's image) | `fills --refs` | `transmar/images/social/post-plastex-visit.webp` |
  | Post photo 2 (card 2) | rect "image 6" `2589:9008`, ref `d7f7ac1d652270447183c7af5888f42f9434c9b0` (398×225 overflowing a 336×220 clip, i.e. cover) | `fills --refs` | `transmar/images/social/post-transmar-partners.webp` |
  | Post photo 3 (cards 3–5) | rect "image 7" `2589:9024` (also `2589:9040`, `2589:9056`), ref `c807806bffd755f84fa518344bbec2006b8ce648` | `fills --refs` | `transmar/images/social/post-plastex-sponsor.webp` |
  | LinkedIn badge | `2589:8989` (32×32: `#1275B1` rounded square + white glyph) | svg | `transmar/images/icons/linkedin-badge.svg` (or sprite `icon-linkedin-badge`) |
  | Arrow up-right | `2589:9064` (component "Arrow / Arrow_Up_Right_MD") | svg | sprite `icon-arrow-up-right` / `transmar/images/icons/arrow-up-right.svg` |
  | Mobile images | 375 card 2 `2344:7149` has fills 50db… + d7f7…; card 3 `2344:7164` 50db… + d7f7… + c807… (top fill wins) | same refs as above | same files |

- **Differences between breakpoints:**
  - 1440: 80px side padding; 1920: content container 1440 centred (x 240), no inner padding; 375: 16px padding, centred heading.
  - Cards: 384×447 (desktop) vs 303×380 (mobile); image 336×220 vs 255×153; row gap 20 vs 16.
  - Desktop shows 5 cards (3 distinct texts), mobile 3 cards all with card-1 text.
  - Heading 36/54 left vs 28/38 centred. Section vertical padding 100 vs 60; wrapper gap 20 vs 24.
  - Inline links underlined on desktop, not on mobile; bottom link capitalisation differs.

---

## §2 Footer

- **Nodes:**
  - 1440: instance "Desktop footer" `2589:9065`; main row `I2589:9065;2329:52150`; logo/tagline column `…;2329:52151`; logo image `…;2329:52153`; social row `…;2329:52155`; media text `…;2329:52174`; Quick Links column `…;2329:52175` (title `…;2329:52177`, rule `…;2329:52178`, links `…;2329:52179/52180/52181`); Get to Know Us column `…;2329:52182` (title `…;2329:52184`, rule `…;2329:52185`, links `…;2329:52186/52187/52188`); copyright `…;2329:52189`. (`…` = `I2589:9065`.)
  - 1920: instance `2626:34372`, same inner ids with prefix `I2626:34372;`.
  - 375: instance "Mobile" `1828:13673`; logo/tagline `I1828:13673;1828:13627` (vector logo `…;1828:13628`, tagline `…;1828:13639`); link columns row `…;1828:13640` (Quick Links `…;1828:13641`, Get To know Us `…;1828:13649`); social + media container `…;1828:13656` (social row `…;1828:13657`, media text `…;1828:13671`); copyright `…;1828:13670`.

- **Layout per breakpoint:**
  - **1440:** bg Primary/500 `#1B64A6`; auto-layout column, gap 29, padding 80 100 80 100 (content 1240). Main row (row, gap 20, align top): logo/tagline column fills (864 wide, column gap 24) + two link columns of fixed 168 width each (column gap 16, height fill). Left column: logo 210×64.81 → gap 24 → block (column gap 24): social row (row gap 20, icons 35×35) then media text. Link column: title block (column gap 12: title + 24px rule) then 3 links (gap 16; links 26px line height → 27px pitch in Figma). Copyright full width below (gap 29). Total height 364.81.
  - **1920:** identical but padding 80 242 80 242 → content 1436 wide (≈ 1440 container centred); left column 1060.
  - **375:** bg Primary/500; column, gap 48, padding 60 16 60 16, items centred. (1) Logo + tagline: column gap 16, centred; logo 160×37.01 (incl. 7.4 top/bottom padding), tagline 343 wide centred. (2) Link columns: row gap 20, two equal columns 161.5 wide, each column gap 16, everything centre-aligned; title block gap 8 with 24px rule centred. (3) Container column gap 16, centred: social row (3 icons, gap 20, 145 wide) then media text. (4) Copyright centred (hug, 251 wide).
  - Grid: footer component carries a 12-col grid (gutter 20, margin 80) — layout guide only.

- **Copy (exact):**
  - Desktop (1440 & 1920):
    - Logo (image), no tagline.
    - Media text: "For media inquiries, please contact media@transmar.com" — "media@transmar.com" bold 700 (→ `mailto:media@transmar.com`).
    - Column 1 title "Quick Links"; links "Our Story", "Our Containers", "Services".
    - Column 2 title "Get to Know Us"; links "Latest News", "Careers", "Contact us".
    - Copyright: "©2023 Transmar. All Rights Reserved"
  - Mobile (375):
    - Tagline: "a leading regional containerized cargo shipping company, providing fast and reliable logistics solutions for a growing customer base of businesses that span the Middle East and the East Coast of Africa."
    - Column 1 title "Quick Links"; links "Our Story", "Our Containers", "FAQS".
    - Column 2 title "Get To know Us"; links "Latest news", "Careers", "Contact us".
    - Media text: "For media inquiries, please contact media@transmar.com" ("media@transmar.com" bold).
    - Copyright: "©2023 Transmar. All Rights Reserved" — "Transmar" underlined, linked to `https://www.transmar.projectsarea.net/index.html#` (→ use site home `index.html`).
  - No link URLs on desktop items → `#` / matching site pages.

- **Styles:**
  | Element | 1440 / 1920 | 375 |
  |---|---|---|
  | Footer bg | Primary/500 `#1B64A6` | same |
  | Column titles | ADPortsGroup 700 16/30, Primary/50 `#D9EAFA`, left | same, centred |
  | Title rule | 24px line, stroke Primary/50 `#D9EAFA` (~1px), 12px below title start (title block gap 12) | same, centred, gap 8 |
  | Links | ADPortsGroup 400 14/26, Greys/0 `#FFFFFF` at opacity 0.65 | Helvetica 400 14/auto, white 0.65, centred |
  | Tagline | — | Helvetica 400 14/23, white 0.65, centred |
  | Media text | ADPortsGroup 400 14/26 white (email 700) | same, centred |
  | Copyright | Helvetica 400 15/auto, white | same |
  | Social icon | 35×35 circle, 1.5px stroke white at 25% opacity, no fill; glyph white (`#FFFFFF`) ~12–18px centred | same |

- **Social icons (left to right):**
  - Desktop: LinkedIn (`…;2329:52156`), Facebook (`…;2329:52162`), X/Twitter (`…;2329:52165`, component "Platform=X (Twitter), Color=Negative"), YouTube (`…;2329:52168`, "Platform=YouTube, Color=Negative"), Instagram (`…;2329:52171`, "Platform=Instagram, Color=Negative"). Layer names of the last three are all "Twitter" — the component names above are authoritative. Gap 20, row 255 wide.
  - Mobile: LinkedIn (`I1828:13673;1828:13658`), Facebook (`…;1828:13664`), Twitter old bird glyph (`…;1828:13667`, "ic Twitter"). Only 3 icons, row 145 wide.
  - No URLs in design. LinkedIn known: `https://www.linkedin.com/company/transmarline/`; others `#`.

- **Assets:**
  | Asset | Source | Export | Target path |
  |---|---|---|---|
  | Footer logo (white) | desktop: image fill ref `40b1ee3cdf7ac88003caaede19e6e484c9588d31` on `I2589:9065;2329:52153` (210×64.81, raster); mobile: vector `I1828:13673;1828:13628` (160×37.01, 9 white paths) | svg from the mobile vector node (preferred, scale to 210 wide on desktop); raster ref via `fills --refs` only as fallback | `transmar/images/site/logo-white.svg` |
  | LinkedIn icon | `I2589:9065;2329:52156` | svg | sprite `icon-linkedin` |
  | Facebook icon | `I2589:9065;2329:52162` | svg | sprite `icon-facebook` |
  | X icon | `I2589:9065;2329:52165` | svg | sprite `icon-x` |
  | YouTube icon | `I2589:9065;2329:52168` | svg | sprite `icon-youtube` |
  | Instagram icon | `I2589:9065;2329:52171` | svg | sprite `icon-instagram` |
  | Twitter bird (mobile only) | `I1828:13673;1828:13667` | svg (only if mobile is kept different) | sprite `icon-twitter` |
  | Title rule | `…;2329:52178` | CSS (24px border), no export | — |
  Circle outline can be drawn in CSS (35px, `1.5px solid rgba(255,255,255,.25)`, radius 50%) with just the glyph in the sprite.

- **Interactions/states:** none drawn. Links and social icons need hover/focus (decide in build); email is a `mailto:`.

- **Differences between breakpoints:**
  - 1440 padding 100 sides; 1920 padding 242 (1436 content); 375 padding 16, stacked and centred.
  - Mobile adds the tagline paragraph; desktop has none.
  - Mobile link 3 in Quick Links is "FAQS" (desktop "Services"); mobile title "Get To know Us" and "Latest news" vs desktop "Get to Know Us" / "Latest News".
  - Social icons: 5 (LinkedIn, Facebook, X, YouTube, Instagram) desktop vs 3 (LinkedIn, Facebook, Twitter bird) mobile.
  - Mobile order: logo+tagline → link columns → social+media → copyright; desktop: logo/social/media left, link columns right, copyright bottom.
  - Logo raster 210 wide (desktop) vs vector 160 wide (mobile).
  - Link font ADPortsGroup 14/26 desktop vs Helvetica 14/auto mobile (likely a Figma inconsistency; use ADPortsGroup).
  - Copyright "Transmar" linked only on mobile.

---

## §3 Red Sea alert banner (dismissible, fixed to bottom)

- **Nodes:**
  - 1440: `2589:9072` > row `2589:9073` [alert icon `2589:9074`, text `2589:9076` (title `2589:9077`, body `2589:9078`), "Learn More" button `2589:9079` (label `I2589:9079;145:232`)] + Close button `2589:9080` (label `2589:9081`, icon `2589:9082`).
  - 1920: `2626:34379` > `2626:34380` [icon `2626:34381`, text `2626:34383` (`2626:34384`, `2626:34385`), button `2626:34386`] + Close `2626:34387` (`2626:34388`, icon `2626:34389`).
  - 375: `2589:33429` > `2589:33430` > `2589:33431` [icon `2589:33432`, text `2589:33434` (`2589:33435`, `2589:33436`)] + button `2589:33437` (label `I2589:33437;2589:33426`); Close `2589:33438` (`2589:33439`, icon `2589:33440`).

- **Fixed / sticky judgement:** fixed bottom bar (`position: fixed; bottom: 0; left: 0; right: 0`, high z-index). Evidence: at every width its bottom edge equals the frame bottom (1440: 5789.81+126 = 5915.81; 1920: 5747+126 = 5873 ≈ 5872.81; 375: 6030+288 = 6318); it overlaps the footer (1440 footer 5551–5915.81, mobile footer 5686–6318); constraints are vertical BOTTOM on all three (horizontal LEFT at 1440/375, CENTER at 1920); desktop nodes are absolutely positioned; translucent black + background blur is typical of an overlay bar. Hide it on Close (and remember dismissal, e.g. sessionStorage/localStorage).

- **Layout per breakpoint:**
  - **1440:** 1440×126, row, gap 24, padding 30 80 30 80, align vertically centred. Inner row (fills, gap 20, centred): alert icon 66×66 → text column (fills, gap 8, vertically centred: title, body) → "Learn More" button 115×44. Then Close button 100×44 at the far right (x 1260–1360).
  - **1920:** 1920×126, padding 30 242 30 242 (content 1436), otherwise identical; inner row 1312 wide.
  - **375:** 375×288, column, gap 24, padding 30 16 30 16, align left (items start). Inner column (gap 20): [icon 66×66 → text column (gap 8)] (gap 20) → "Learn more" button 104×42 (hug). Close button absolutely positioned top-right at x 259, y 30 (right edge 359 = 16px inset), 100×44.

- **Copy (exact):**
  - Title: "Red Sea / Gulf of Aden situation" (desktop text-transform uppercase → renders "RED SEA / GULF OF ADEN SITUATION"; mobile not uppercased).
  - Body: "Stay up to date with our latest information, vessel contingency and updates here."
  - Button: desktop "Learn More"; mobile "Learn more". No URL → `#` (Red Sea update page/news).
  - Close: "Close".

- **Styles:**
  | Element | 1440 / 1920 | 375 |
  |---|---|---|
  | Bar bg | `#000000` at 50% + background blur 64 (Figma radius; ≈ CSS `backdrop-filter: blur(32px)`) | same |
  | Alert icon | 66×66 "ant-design:alert-outlined", glyph Primary/50 `#D9EAFA` | same |
  | Title | ADPortsGroup 700 16/auto, uppercase, Primary/50 `#D9EAFA` | text style "Body text bold/B2" 700 14/20, Primary/50, no uppercase |
  | Body | ADPortsGroup 400 16/30, Primary/50 | "Body text/B2" 400 14/26, Primary/50 |
  | Learn More button | component "Type=Default": bg Primary/50 `#D9EAFA`, radius 8, padding 8 16, gap 10; label ADPortsGroup 700 14/28 Primary/500 `#1B64A6`; has a hidden trailing 22px icon (not shown) | component "Property 1=Variant5, Size=S": same colours/radius/padding, label 700 12/20 Primary/500, 104×42 |
  | Close button | no fill, radius 8, padding 8 16, gap 10; "Close" ADPortsGroup 700 14/28 Primary/50 `#D9EAFA`, then 16×16 "carbon:close-outline" icon (circle with ×) in white `#FFFFFF` | same |

- **Close button:** text label "Close" followed by a 16×16 outlined circle-× icon, transparent background, 8px radius, 100×44 hit area; desktop sits at the right end of the bar, mobile pinned top-right. Use a `<button type="button" aria-label="Close alert">` (visible text already says Close). On click: hide the banner.

- **Assets:**
  | Asset | Source | Export | Target path |
  |---|---|---|---|
  | Alert icon | `2589:9074` (vector `2589:9075`, 48.6×57.2 in a 66 box) | svg | `transmar/images/icons/alert.svg` / sprite `icon-alert` |
  | Close icon | `2589:9082` (vectors `2589:9083` circle, `2589:9084` ×) | svg | sprite `icon-close-circle` |

- **Interactions/states visible:** none beyond default (no hover/pressed frames). Implied: Close dismisses; "Learn More" links to the update page.

- **Differences between breakpoints:** desktop single row 126px tall vs mobile stacked 288px; title uppercase 16px (desktop) vs normal-case 14/20 (mobile); body 16/30 vs 14/26; button label "Learn More" 14/28 vs "Learn more" 12/20; Close button inline at right (desktop) vs absolute top-right (mobile); 1920 uses 242px side padding.

---

## Notes on the source data

- figma.mjs printed wrong relative positions for two banner children at 1440: `2589:9074` "@80,4810" and `2589:9076` "@166,4811" (raw JSON bounding boxes give @80,30 and @166,31, matching the 1920 frame). All other values checked out.
- Fade overlay gradient stops printed as `linear-gradient(0deg, #EFF2F5 0%, #EFF2F5 0% 80%)` (alpha of the stops not shown); interpreted above as opaque → transparent.
- Text node heights in the notes (e.g. 81×12 for 16/30 text) are Figma bounding-box quirks; use the line heights.
