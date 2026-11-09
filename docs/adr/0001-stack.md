# ADR 0001: A plain static folder with no build

- Status: accepted
- Date: 2026-11-09
- Decided by: the figma-build standard; confirmed by the developer on the first run

## Context
One screen: the Transmar home page (Figma frames at 1440, 1920 and 375 wide, plus the side-menu open state). Interaction level is moderate: sticky header with a scrolled state, side-menu drawer, Track/Schedule tabs with form validation (no backend), three scroll-snap carousels, an advisory pager and a dismissible fixed alert. Content is edited by non-developers with a text editor. English only, RTL-ready. No host chosen yet.

## Decision
- `transmar/` is the site, published as it is; `index.html` opens by double-click (works from file://).
- HTML with all content between CONTENT markers; one plain `css/styles.css` with tokens under `:root`; one classic `js/script.js`; one image file per picture; font embedded (Plus Jakarta Sans, standing in for the proprietary ADPortsGroup); inline SVG icon sprite.
- No package.json, build, linters, tests or CI. Checks: the figma-build `check-site.mjs` and a browser check at every breakpoint, in PR review.
- Hosting: none chosen. No hosting config; the `transmar/` folder can be uploaded as it is to any static host.
- Languages: English only; markup ready for a second (right-to-left) language.

## Consequences
- Editors need only a text editor and a browser. Nothing catches mistakes automatically between PRs, so the content guide explains how to check a change by looking at it.
- No responsive image sets: one file per image (about 2x desktop), so phones download more than they need. The key visual is the exception: one composed picture per breakpoint (mobile, desktop, wide) because the art differs.
- The font is embedded, so the stylesheet is larger and the font isn't cached separately.
- The track and schedule forms submit to `#` until a backend is connected (follow-up issue).
