# Content model

All content lives in **`transmar/index.html`**, edited in place and published as it is. Each editable block is wrapped in markers:

    <!-- CONTENT: track-banner title -->
    <h1 id="top-title" class="track-banner__title">…</h1>
    <!-- /CONTENT -->

Marker names are `<section> <field>` as listed below. Repeated items have one marker per item (the same name repeated); add or remove them freely. An image's path, size and alt text sit together in one marker. Exact copy for every field is in `docs/figma-notes/` (desktop copy wins, see `docs/design-analysis.md` Decision 6). Placeholders start with `TODO(content):`.

**Adding or removing a repeated item:** copy or delete the whole marker. For a tab, do the same to its panel and keep the `id`, `aria-controls` and `aria-labelledby` values pointing at each other. Carousels, the advisory pager and its counter adapt to the number of items by themselves.

## Head and shared (header, side menu, footer)
| Marker | Contains | Notes |
|---|---|---|
| `seo meta` | `<title>`, description, Open Graph/Twitter | canonical and image URLs wait in a TODO comment until the domain is known |
| `header skip-link` | the "Skip to main content" link to `#main` | first focusable element on the page, before `<header>`; visible only on keyboard focus |
| `header logo` | logo SVG in a link to `#top`, with the accessible name "Transmar" | white at the top, Primary/500 when scrolled (`currentColor`) |
| `header nav` | the 5 nav links: About Us, Services, Media, Careers, Our Local Offices (→ `#`) | desktop only; hidden below 768 |
| `header language` | "EN" link (→ `#`) | Decision 2 |
| `header search` | search link (→ `#`) with visually hidden label "Search" | |
| `header menu-button` | burger `<button>` with `data-label-open="Open menu"` and `data-label-close="Close menu"` | all widths |
| `menu group` | ×3: headline (About us, Services, Media) and its item links (7, 7, 2) | headline is not a link; items → `#` |
| `menu links` | the 4 contact links: Contact Us, Find Our Local Offices, Join Our Team, FAQs | → `#` |
| `menu close` | close `<button>` label "Close menu" (visually hidden) | |
| `footer logo` | white logo SVG `<img>` in a link to `#top` | |
| `footer tagline` | mobile-only tagline paragraph | hidden from 768 (Decision 6) |
| `footer social-link` | ×5: icon + visually hidden name + URL (LinkedIn, Facebook, X, YouTube, Instagram) | LinkedIn external, others `#` |
| `footer media` | "For media inquiries, please contact **media@transmar.com**" | `mailto:` |
| `footer column` | ×2: title + 3 links (Quick Links: Our Story, Our Containers, Services; Get to Know Us: Latest News, Careers, Contact us) | → `#` |
| `footer copyright` | "©2023 Transmar. All Rights Reserved" | |

## Sections (Figma: [Home page](https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/?node-id=842-1027))
| Section (`id`) | Markers | Notes (figma-notes file) |
|---|---|---|
| Key visual (`top`) | `key-visual image` | `<picture>`: mobile, desktop and wide WebP with sizes; decorative (`alt=""`). A §2 |
| Track banner (`top`) | `track-banner title`, `track-banner slogan`, `track-banner tabs`, `track-banner track-by`, `track-banner track-field`, `track-banner track-button`, `track-banner schedule-field` (×4), `track-banner schedule-button`, `track-banner errors` | `tabs` = the two tab labels; `track-by` = legend + 3 radio labels; each field = label (visually hidden), placeholder; `errors` = the validation messages as `data-label-*` (required, invalid date, weeks out); form `action="#"`. A §3 |
| Services (`services`) | `services eyebrow`, `services title`, `services paragraph` (×3), `services item` (×5) | item = sprite icon + label in a link to `#`. B §1 |
| Customer advisory (`advisory`) | `advisory label`, `advisory item` (×2), `advisory pager` | item = title + "Read more" link; pager = `data-label-prev` / `data-label-next` ("Previous advisory" / "Next advisory"); the counter is filled by the script. B §2 |
| Industries (`industries`) | `industries eyebrow`, `industries title`, `industries text`, `industries card` (×10), `industries cta`, `industries carousel` | card = image (path, size, alt) + title in a link to `#`; carousel = prev/next button labels. B §3 |
| Transmar at a Glance (`glance`) | `glance eyebrow`, `glance title`, `glance text`, `glance stat` (×5) | stat = sprite icon + number + label. C §1 |
| Regional presence (`map`) | `map eyebrow`, `map title`, `map routes`, `map image`, `map label` (×16) | `routes` mobile only; `image` = SVG `<img>` + alt listing the 17 countries; label = country name + its `--x`/`--y` position. C §2 |
| News & Insights (`news`) | `news title`, `news subtitle`, `news card` (×3), `news link`, `news carousel` | card = image + title + `<time datetime>` date in a link to `#`; carousel labels used below 768. C §3 |
| Social News (`social`) | `social title`, `social card` (×5), `social link`, `social carousel` | card = avatar, name, post image, post text with inline links, "Read more" link; `link` = "Visit Our Linkedin Page & Stay Updated" (external). D §1 |
| Red Sea alert (`alert`) | `alert title`, `alert text`, `alert button`, `alert close` | `close` = button text "Close" + `aria-label`. D §3 |

The tables above are the full list of marker names. A marker name not listed here is a mistake.

## Hooks for behaviour (not content)
| Hook | Where | Used by (`js/script.js` part) |
|---|---|---|
| `data-header`, `data-header-trigger` (on `#top`) | header, key visual | `header-scroll`: adds `is-scrolled` once `#top` leaves the viewport |
| `data-menu-button`, `#site-menu`, `data-menu-close`, `data-menu-overlay` | header, side menu | `menu`: open/close, Esc, focus trap and return, scroll lock |
| `data-tabs`, `role="tablist"`, `role="tab"`, `role="tabpanel"` | track banner | `tabs` |
| `data-validate`, `data-field-error`, `data-label-*` messages | track and schedule forms | `form-validation`: required/format checks, `aria-invalid`, messages, focus first error; submits to `#` |
| `data-carousel`, `data-carousel-track`, `data-carousel-prev`, `data-carousel-next` | industries, news (below 768), social | `carousel`: scroll-snap row, prev/next scroll by one card, buttons disabled at the ends, no autoplay |
| `data-pager`, `data-pager-item`, `data-pager-prev`, `data-pager-next`, `data-pager-count` | advisory | `pager`: shows one item, counter `n/total`, wraps |
| `data-alert`, `data-alert-close` | alert | `alert`: hide on Close, remember in `sessionStorage` (fallback: this page view only), reserve/release bottom space |

Services hover, link hover and focus styles are CSS only (no hook).

## Languages
English only (`<html lang="en" dir="ltr">`). The markup is ready for a second language: one page per language with the same sections and marker names (e.g. `transmar/ar/index.html` with `lang="ar" dir="rtl"`), sharing the CSS and JS. The header "EN" link goes to `#` until then.
