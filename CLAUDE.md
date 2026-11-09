# transmar-with-figma-build

The Transmar home page (regional container shipping line: services, track and schedule form, industries, key figures, regional map, news), built from Figma with the figma-build plugin. The site is in `transmar/`.

- Figma: https://www.figma.com/design/q8JHAesVFNMeDI8MaMAi7w/Transmar?node-id=842-1027 (page "Home page": Desktop 1440 `2589:8682`, Desktop XL 1920 `2626:33989`, Mobile 375 `1406:19159`, Side menu open 1440 `2752:40839`)
- Stack: a plain static folder with no build and no tooling (see `docs/adr/0001-stack.md`)
- Languages: English only (markup RTL-ready)
- Hosting: none chosen; upload the `transmar/` folder as it is to any static host

## Docs
| File | What it is |
|---|---|
| `docs/design.md` | design rules every section must follow (blocking in review) |
| `docs/design-analysis.md` | full analysis of the Figma file, incl. the decisions made |
| `docs/figma-notes/` | per-section notes: exact copy, node ids, sizes (read these before calling Figma) |
| `docs/design/` | reference screenshots, `<screen>--<width>.png` and `sections/<section>--<width>.png` |
| `docs/content-model.md` | the CONTENT markers for each section |
| `docs/content-guide.md` | the guide for editors |
| `docs/review-lessons.md` | rules learned during the build; read before coding |

## Commands
There are none: no install, build, lint, format, test or CI. The repo has no `package.json`.

| Task | How |
|---|---|
| view the site | double-click `transmar/index.html` (works from `file://`, offline) |
| preview over http (optional) | `npx --yes http-server transmar -p <port> -c-1` |
| static checks (agents) | `node <figma-build plugin>/skills/figma-build/scripts/check-site.mjs transmar --content-model docs/content-model.md` |
| check a change | open the page at 375, 768 and 1440 wide (and 1920 for the centred container); click through anything interactive you changed |

## Folder layout
```text
transmar-with-figma-build/
  transmar/                    the site: published as it is
    index.html                 the page; all content between CONTENT markers; inline SVG icon sprite
    css/styles.css             all styles; tokens are the --… variables under :root
    js/script.js               all behaviours, one classic script, one `// ===== <name> =====` part each
    images/<section>/          key-visual, services, industries, glance, map, news, social
    images/site/               logo, logo-white, favicons, og-image
    images/ASSETS.md           every image: file, size, Figma node, where used
    fonts/OFL.txt              the font licence (font embedded in styles.css)
    robots.txt, sitemap.xml, README.md
  docs/                        design-analysis.md, design.md, figma-notes/, design/, content-model.md,
                               content-guide.md, review-lessons.md, adr/
  CLAUDE.md, README.md
  .editorconfig, .gitattributes, .gitignore
```
(Completed by issue #1.)

## Rules
- Use only the tokens and breakpoints in `docs/design.md` (the `--…` variables in `css/styles.css` and its media queries).
- Style changes go in `css/styles.css`; behaviour in `js/script.js` (one `// ===== <name> =====` part per behaviour, `data-*` hooks).
- Nothing may break opening from `file://`: no ES modules, no fetch of local files, fonts embedded, icons in the inline sprite, relative paths.
- An image is one file: `width`/`height` = its real pixel size, about 2x the desktop display size; list it in `transmar/images/ASSETS.md`.
- All editable content lives between `<!-- CONTENT: … -->` markers (see `docs/content-model.md`); never in CSS or JS.
- Never add a package.json, build step, linter config or CI.
- Never push to `main`; every change goes through a PR.
- Take copy from `docs/figma-notes/` and assets from `transmar/images/`; call Figma (`figma.mjs`) only for what is missing (the Figma API is rate-limited).

## figma-build settings
- site: transmar
- breakpoints: 375, 1440 (frames); 768 tablet assumed
- switch_points: 768, 1200
