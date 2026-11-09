# transmar-with-figma-build

The Transmar website, built from Figma with the figma-build skill.

Each site is a plain static folder: open its `index.html` in a browser to view it, edit it with any text editor. There is nothing to install and no build.

| Folder | Site | Docs |
|---|---|---|
| [`transmar/`](transmar/) | Transmar home page (regional container shipping line) | [`transmar/README.md`](transmar/README.md) |

**Editing content? Read the editors' guide: `docs/content-guide.md` (added later in the build).**

Shared docs are in [`docs/`](docs/): the design rules (`design.md`), the full design analysis (`design-analysis.md`), the content markers (`content-model.md`) and the stack decision (`adr/0001-stack.md`).

Publishing: no host chosen yet; upload the `transmar/` folder as it is to any static host. There is no hosting config and no build.

There are no automatic checks: every change goes through a pull request and is checked by looking at the page.
