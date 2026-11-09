# Images

Every image file of the site, where it comes from in Figma and where it is used. Icons are not files: they are `<symbol>`s in the inline sprite at the top of `index.html`'s `<body>`.

## Replacing a photo
1. Make the new picture the **replace-with size** in the table below (about 2x the size it is shown at on desktop), saved as WebP (photos about quality 80, logos about 90 with transparency), under about 300 KB for a large photo.
2. Put it in the same folder, `images/<section>/`, with a lower-case-hyphen name (`fresh-produce.webp`).
3. In `index.html`, find the image inside its `<!-- CONTENT: … -->` marker and update every attribute that points at it: `src` (the new file name), `width` and `height` (the new file's real pixel size), and `alt` (what the new picture shows; empty only for a decorative picture).
4. Update the row below (file, size now, notes), and delete the old file if nothing uses it any more.
5. Open `index.html` and look at the image at phone, tablet and desktop width.

## File rules
- One file per image, about 2x the largest displayed size; no `srcset`, no generated sizes, no originals folder.
- `width`/`height` on every `<img>` equal the file's real pixels.
- Images below the first screen have `loading="lazy" decoding="async"`; the key visual is eager with `fetchpriority="high"`.
- Logos, decorative shapes, the map and the LinkedIn badge are image files, except the header logo, which is the sprite symbol `logo` (`currentColor`: white at the top, Primary/500 when scrolled); small UI icons are sprite symbols.

## Tables
One table per section, in page order. "Size now" is the file's real pixel size (for an SVG, its `viewBox`). Raster sizes are about 2x the desktop display size, except where the Figma source was smaller (never upscaled; see Notes).

### Site (`images/site/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
| `logo.svg` | 179×24.84 (SVG) | `I2589:9071;2329:52323` | not on the page; the logo file (Primary/500) and the source of the favicon | SVG | the header draws the same artwork from the sprite symbol `logo` (see Icons) so it can be white or Primary/500 |
| `logo-white.svg` | 160×22.21 (SVG) | `I1828:13673;1828:13628` | footer logo (160 wide mobile, 210 desktop) | SVG, white | Decision 16: the vector, not the desktop raster |
| `favicon.svg` | 32×32 (SVG) | from the logo | browser tab icon | SVG | the logo's "T" (stem + swoosh) in white on a Primary/500 rounded square |
| `favicon.png` | 48×48 | from `favicon.svg` | browser tab icon (fallback) | PNG 48×48 | transparent corners |
| `apple-touch-icon.png` | 180×180 | from `favicon.svg` | iOS home screen | PNG 180×180, opaque | iOS rounds the corners |
| `og-image.jpg` | 1200×630 | key visual `2589:8683` + `logo-white.svg` | link previews (`og:image`, `twitter:image`, still in a TODO until the domain is known) | JPG 1200×630 | composed for this site, not a Figma frame |

### Key visual (`images/key-visual/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
| `kv-desktop.webp` | 2880×1496 | `2589:8683` (render @2x) | key visual from 768 px (1440×748) | 2880×1496 | composed picture: photo, ship and blue shapes (Decision 12); decorative |
| `kv-wide.webp` | 3182×1496 | `2626:34562` (render @2x) | key visual beyond 1440 px (1591×748, anchored to the end edge on Primary/500) | 3182×1496 | Decision 12 |
| `kv-mobile.webp` | 750×1636 | `1406:19204` (render @2x) | key visual below 768 px (375×818) | 750×1636 | recomposed: ship at the bottom |

### Services (`images/services/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
| `services-bg.webp` | 2880×908 | ref `c08e18481a8bd2e79608e586116286a079727d7b` (`2589:8686`, mobile `1410:19274`) | services background strip: desktop shows its bottom part (1440×231, `object-position: bottom`), mobile all of it (1440×454 wide, cropped by the section) | 2880×908 | the region of the source that Figma's stretch transform shows on mobile; desktop shows the lower half of it. Effectively opaque |
| `services-shape.svg` | 1408×1407 (SVG) | `2589:8687` (mobile `1410:19372`, same shape at 574) | blue shape, lower right (1407 desktop, 574 mobile) | SVG, Primary/500 | decorative |

### Industries (`images/industries/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
| `petrochemicals.webp` | 606×372 | ref `7f0584da4f6fa5a715c303ade8116ff175c7ae5c` | card 1 (303×186) | 606×372 | centred crop, like Figma's fill |
| `building-materials.webp` | 606×372 | ref `6958a1a40297ca524dc198ae91a05f9ee61b8b40` | card 2 (303×186) | 606×372 | |
| `food-products.webp` | 606×372 | ref `3e8e43f2da113c34dc940dd6e9ad5a09a76ff741` | card 3 (303×186) | 606×372 | |
| `agri-products.webp` | 606×372 | ref `96999a9a7ea4c6fb31ad8ac014a15e93234228e4` | card 4 (303×186) | 606×372 | |
| `fmcg.webp` | 606×372 | ref `d30c05277ecbf780fdfe185645354ed808fe4b01` | card 5 (303×186) | 606×372 | the 1920/375 photo (Decision 8) |
| `fresh-produce.webp` | 606×372 | ref `44baf97363095afce6324b3f0716a96a2a2141f7` | card 6 (303×186) | 606×372 | |
| `paper-products.webp` | 606×372 | ref `72e642165ec4e743e1f8b9f83a132c18de976e6c` | card 7 (303×186) | 606×372 | |
| `textiles.webp` | 606×372 | ref `959f2999d773916585a972ffc34feaef06f22fa1` | card 8 (303×186) | 606×372 | |
| `home-appliances.webp` | 606×372 | ref `e3c82b8b858856d59fe90c40405591482ec88376` | card 9 (303×186) | 606×372 | from the 375 frame |
| `pharmaceuticals.webp` | 606×372 | ref `b66c52c5b720ea478f2729d763bbbae0d5d07a65` | card 10 (303×186) | 606×372 | from the 375 frame |
| `industries-shape.svg` | 1282×1383 (SVG) | `2626:34845` (mobile `1413:20010`, same shape at 409) | white shape behind the heading | SVG, white | decorative |

### Transmar at a Glance (`images/glance/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
| `glance-bg.webp` | 1920×1080 | ref `ed6ef9278edc681eb516c83822c91155ccf74615` (`2626:34898`, `1413:19675`) | section background photo, cover (1440×766 desktop, 375×916 mobile), under a gradient that fades out at 43 % | 2880×1532 if a larger source exists | the whole source, smaller than 2x; both crops come from it (Decision 15 revised, see design-analysis) |
| `glance-pattern.svg` | 1440×766 (SVG) | `2626:34899` | desktop decorative shape (Primary/50 tint), 1440×766 centred | SVG | decorative |
| `glance-shape-mobile.svg` | 409×442 (SVG) | `1413:20012` | mobile blue shape (408.8×441.2) | SVG, Primary/500 | decorative |

### Regional presence map (`images/map/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
| `regional-presence.svg` | 987×671 (SVG) | `2847:14457` | map (986.67×670.17 desktop, 415×282 mobile) | SVG | the 16 label paths and the 1 %-opacity drop shadows removed; labels are HTML text (Decision 13) |

### News & Insights (`images/news/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
| `news-reefer-egypt-yemen.webp` | 768×416 | ref `8d47fb68c35b6382beffc5e91669cefb9ffb67c7` (`2589:8962`) | card 1 image (413×224 desktop, 303×198 mobile) | 826×448 | source smaller than 2x |
| `news-cso-panel.webp` | 826×448 | ref `d002057c3a41879cafe6abd48d5f1c08027f2789` (`2589:8967`) | card 2 image | 826×448 | |
| `news-efg-finance.webp` | 360×195 | ref `926f7acf6bdae52f7afee3d135ef4509131308de` (`2589:8972`) | card 3 image | 826×448 | source is a 360×450 portrait; the 413×224 crop is all there is |

### Social News (`images/social/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
| `avatar-transmar.webp` | 80×80 | ref `ed89355e08f05bd7a58564012e6f07b76e9be699` (`2589:8986`) | card avatar (40×40) | 80×80 | |
| `post-plastex-visit.webp` | 672×440 | ref `50db9ad997fc3f5c5d9581d1a9093ccd10258090` (`2589:8992`) | card 1 image (336×220 desktop, 255×153 mobile) | 672×440 | Figma's crop of the square source |
| `post-transmar-partners.webp` | 474×310 | ref `d7f7ac1d652270447183c7af5888f42f9434c9b0` (`2589:9008`) | card 2 image | 672×440 | source smaller than 2x |
| `post-plastex-sponsor.webp` | 672×440 | ref `c807806bffd755f84fa518344bbec2006b8ce648` (`2589:9024`) | cards 3–5 image | 672×440 | |
| `linkedin-badge.svg` | 32×32 (SVG) | `2589:8989` | badge on every card (32×32) | SVG | two colours (`#1275B1` + white), so a file, not a sprite symbol |

## Icons (the sprite in `index.html`)
Single-colour symbols in `currentColor`: set the colour with CSS `color`. Draw one with `<svg class="icon" width="…" height="…" aria-hidden="true"><use href="#id"></use></svg>` at the drawn size below (the viewBox's own proportions).

| Symbol id | viewBox | Figma node | Drawn size (desktop / mobile) | Notes |
|---|---|---|---|---|
| `logo` | 0 0 179 24.8414 | `I2589:9071;2329:52323` | 179×24.84 / 120×16.65 (scrolled 142) | header logo |
| `icon-search` | -1.5 -1.5 21 21 | `I2589:9071;2687:12700` | 21×21 (an 18 px glyph plus its 3 px stroke) | the viewBox includes the stroke, which the Figma box cuts |
| `icon-menu` | -0.25 -0.25 25.22 21.5 | `I2589:9071;2329:52347` | 25×21 / 19.5×16.5 (scrolled 25×21) | burger |
| `icon-close` | 0 0 26 26 | `2752:49933` | 26×26 | side-menu close (Greys/700) |
| `icon-close-circle` | 0 0 16 16 | `2589:9082` | 16×16 | alert "Close" |
| `icon-arrow-left` | 0 0 12 13 | `2589:8721` | 12×13 | advisory pager; mirror it for "next" |
| `icon-arrow-right` | 0 0 16 16 | `I2626:34895;2643:108545`, `2589:8978` | 16×16 glyph in a 24 box | industries/news links; the card arrow is this one rotated −45° |
| `icon-arrow-up-right` | 0 0 24 24 | `2589:9064` | 24×24 | social "Visit our LinkedIn page" |
| `icon-alert` | 0 0 66 66 | `2589:9074` | 66×66 | alert banner |
| `icon-service-fleet-cargo` | 0 0 63 50 | `I2589:8706;2329:52269` | 63×50 (hover 73×58) | services |
| `icon-service-schedule` | 0 0 63 50 | `I2589:8707;2329:52215` | 63×50 | services |
| `icon-service-vessel-fleet` | 0 0 63 50 | `I2589:8708;2329:52278` | 63×50 | services |
| `icon-service-terminals` | 0 0 63 50 | `I2589:8709;2329:52287` | 63×50 | services |
| `icon-service-integrated` | 0 0 63 50 | `I2589:8710;2329:52246` | 63×50 | services |
| `icon-glance-ship` | 0 0 56 56 | `2626:34911` | 56 / 40 (Decision 24) | Tons shipped; the mast and underline reach half a unit past the box, as in Figma |
| `icon-glance-containers` | 0 0 56 56 | `2626:34920` | 56 / 40 | TEU fleet |
| `icon-glance-employees` | 0 0 56 56 | `2626:34935` | 56 / 40 | Employees |
| `icon-glance-equipment` | 0 0 56 56 | `2626:34942` | 56 / 40 | Stevedoring equipment |
| `icon-glance-storage` | 0 0 56 56 | `2626:34966` | 56 / 40 | Storage spaces |
| `icon-linkedin` | 8 8 19 19 | `I2589:9065;2329:52156` | 19×19 centred in the 35 px ring | footer; the ring is CSS (`--color-white-25`) |
| `icon-facebook` | 8 8 19 19 | `I2589:9065;2329:52162` | 19×19 | footer |
| `icon-x` | 8 8 19 19 | `I2589:9065;2329:52165` | 19×19 | footer |
| `icon-youtube` | 8 8 19 19 | `I2589:9065;2329:52168` | 19×19 | footer |
| `icon-instagram` | 8 8 19 19 | `I2589:9065;2329:52171` | 19×19 | footer |

Not exported: the key-visual source layers (Decision 12), the glance photo `a26c83ed…` (covered by `ed6ef927…`), the mobile Twitter bird (Decision 16), the footer raster logo, the loose frames "01"–"05" and "home-and-personal-care-1 1" (Decision 20).
