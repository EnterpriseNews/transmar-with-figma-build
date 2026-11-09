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
- Logos, decorative shapes, the map and the LinkedIn badge are image files; small UI icons are sprite symbols.

## Tables
One table per section, in page order. The files are added by issue #7.

### Site (`images/site/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|

### Key visual (`images/key-visual/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|

### Services (`images/services/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|

### Industries (`images/industries/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|

### Transmar at a Glance (`images/glance/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|

### Regional presence map (`images/map/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|

### News & Insights (`images/news/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|

### Social News (`images/social/`)
| File | Size now | Figma node(s) | Used where (display size) | Replace with | Notes |
|---|---|---|---|---|---|
