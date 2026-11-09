# Review lessons

Rules learned during this build. Every implementer reads this file before coding and self-reviews against it. The reviewer adds a rule when it blocks a PR for a **new class** of bug; QA fixes add one rule per bug class.

Format: `- <one-line rule> (from PR #x)`

The rules marked *(starter)* come from earlier figma-build sites; keep them unless they don't apply here.

## Design fidelity
- Take a block's width from its own Figma node, never from the frame minus its padding: frames often leave slack at the end of the content box. *(starter)*
- Map each Figma gap to the nearest step of the spacing scale (half steps included), never to a rounder shared value; when one instance of a shared row has a different gap, give that instance its own rule. *(starter)*
- Display-size text (≥ 64px) is checked against the screenshot by ink width at every breakpoint, not only by its Figma values: the embedded font can space glyphs differently from Figma's; calibrate the token to the screenshot and record the deviation in `docs/design-analysis.md`. *(starter)*
- A Figma line drawn as a stroke takes no room in its auto-layout stack: check section offsets against the frame, and give a CSS border its room back instead of letting each line push everything below it down. *(starter)*
- When a figma-notes sentence and the frame disagree, the frame wins: check fills, strokes and colours against the node (and the screenshot) before coding a value from notes text. *(starter)*
- A deliberate exception to a `docs/design.md` rule is written into `docs/design.md` in the same PR, never only in a code comment or the PR body. *(starter)*
- Sections never set a shared component's internal custom properties; a per-breakpoint look of a shared component is a modifier on that component. *(starter)*

## Content and data
- Alt text is read aloud, so it never holds a `TODO(content)`: a placeholder image gets a plain, true alt and the TODO goes in an HTML comment inside its marker. *(starter)*
- A content-guide step that edits the page is tried exactly as written on a scratch copy, and ends with opening the page and looking at the change at phone, tablet and desktop width. *(starter)*
- A guide step that replaces an image names every attribute that points at it (`src`, `width`, `height`, `alt`) and is tested with a case where the file name changes. *(starter)*

## Layout and responsive
- Compare with Figma on the content width (viewport minus any scrollbar gutter) at every breakpoint, the same base for every width; state the base in the PR. *(starter)*
- Motion that starts or ends outside an element's resting box (slide-ins, fading copies) is clipped by its own component (`overflow-x: clip`), and "no horizontal scroll" is checked during the motion, not only at rest. *(starter)*
- A box with `aspect-ratio` that shares a grid row with content of unknown length gets a definite inline size (`inline-size: 100%` in a `minmax(0, 1fr)` track); test it with doubled copy. *(starter)*
- Check every layout between breakpoints too (e.g. 767/768, 1199/1200, 320), not only at the Figma frame widths. *(starter)*

## Accessibility
- The 44px touch target is a width as well as a height: check the narrowest instance of a shared control (a short tab label, a shrinking logo). *(starter)*
- An element that JS hides on scroll or on a state change stays visible while it has keyboard focus. *(starter)*
- When a breakpoint change hides the focused control, remember the dropped control on `focusout` and restore focus to its counterpart; don't rely on `document.activeElement` in the `matchMedia` handler (Chromium may already have blurred it). *(starter)*

## Interactions and state
- CSS that hides content until JS acts must have a fallback that removes the hiding when the script never runs (the inline head script removes `js` if `data-js-ready` is missing at load), not only try/catch around inits. *(starter)*
- A JS copy of an element (a ghost, a template clone) never deep-clones hidden lazy images: a cloned `<img>` starts loading at once; check the network panel after the interaction. *(starter)*
- Changing the scroll position of an inner element (a tab row, a carousel) never scrolls the page: use `scrollTo` on the element itself and check that the page does not jump (watch scroll anchoring). *(starter)*

## Performance and assets
- Classes that change layout for JS (`js` on `<html>`) are set by the inline classic script in `<head>` before the stylesheet, never from the deferred script. *(starter)*
- Every image's `width`/`height` equal the file's real pixel size, and the file is about 2x its desktop display size. *(starter)*

## Opening from file:// (the static folder)
- Nothing may need a server: no ES modules, no `fetch()` of local files, fonts embedded as `data:` URLs, icons in the inline sprite, relative paths only; open `index.html` from the folder after every change that touches the head, fonts, icons or script loading. *(starter)*
- No build tooling is ever added (package.json, Tailwind, SCSS, linters, CI); a new style is a rule in `css/styles.css`, and a utility class name added to the HTML does nothing. *(starter)*
