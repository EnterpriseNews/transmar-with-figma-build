# Transmar home page

The Transmar home page, as a **plain static folder**: HTML, one CSS file, one JavaScript file and the images. There is nothing to install, no build and no command to run. The files here are exactly what gets published.

## What's in the folder
```text
transmar/
  index.html          the page: all text, links and images, between <!-- CONTENT: … --> markers
  css/styles.css      all styles; the design tokens (colours, text sizes, spacing…) are the --… variables at the top
  js/script.js        all behaviours (menu, tabs, carousels, …), one "// ===== name =====" part each
  images/<section>/   one file per picture (added by issue #7)
  images/site/        logo, favicons, social-sharing image (added by issue #7)
  images/ASSETS.md    every image: file, size, where it is used, what size a replacement should be
  fonts/OFL.txt       the font licence (the font itself is inside css/styles.css)
  robots.txt          tells search engines they may index the site
  sitemap.xml         the list of pages for search engines (the domain is added when known)
```

## View it
Double-click `index.html`. It opens in your browser straight from the folder, offline.

Look at it at three widths: narrow the browser window, or press F12 and use the device toolbar.
- **Phone** (375 px wide): the mobile layout, used below 768 px.
- **Tablet** (768 px): the desktop layout, scaled to fit; it switches at 768 px.
- **Desktop** (1440 px): the full layout from 1200 px. Wider screens keep the content 1440 px wide and centred.

## Edit it
- **Text, links and images:** in `index.html`, only between a `<!-- CONTENT: … -->` and the next `<!-- /CONTENT -->`. The guide for editors is `docs/content-guide.md` (added later); the list of markers is `docs/content-model.md`.
- **Images:** one file per picture. When you replace one, update its `src`, `width`, `height` and `alt` in `index.html`, and its row in `images/ASSETS.md` (how-to at the top of that file).
- **Styles:** in `css/styles.css`. Use only the `--…` tokens at the top; the layout is mobile first, with `@media (width >= 768px)` and `@media (width >= 1200px)` for larger screens. Don't add utility classes, preprocessors or frameworks: a class name that isn't in `styles.css` does nothing.
- **Behaviour:** in `js/script.js`, one `// ===== name =====` part per behaviour; parts find their elements by `data-*` attributes in the HTML.
- **Icons:** `<symbol>` elements in the hidden `<svg>` at the top of `<body>` in `index.html`, drawn with `<use href="#icon-…">`.
- **Font:** Plus Jakarta Sans, embedded in `css/styles.css` as one very long line. Leave that line alone.

## No automatic checks
Nothing checks a change for you. After every change, open `index.html` from the folder and look at what you changed at phone, tablet and desktop width; click anything interactive you touched. Every change goes through a pull request.

## Deploy
No host has been chosen yet. Upload the `transmar/` folder as it is to any static host (no build step, no settings). Before going live, add the real domain where `index.html`, `robots.txt` and `sitemap.xml` say `TODO(content)`.
