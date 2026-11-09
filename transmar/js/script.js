// The page's behaviours, in one plain script so the page works when index.html is opened
// straight from a folder. Each part below is one behaviour; the last part starts them all.
(() => {
  'use strict';

  // ===== breakpoints =====
  // Reads --breakpoint-tablet / --breakpoint-desktop from css/styles.css, so the switch points
  // are written in one place and JS never hard-codes a width.
  const breakpoints = (() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const queries = {};
    ['tablet', 'desktop'].forEach((name) => {
      const width = rootStyles.getPropertyValue(`--breakpoint-${name}`).trim();
      queries[name] = window.matchMedia(`(min-width: ${width})`);
    });

    /**
     * Whether the viewport is at or above a switch point now.
     * @param {'tablet'|'desktop'} name
     * @returns {boolean}
     */
    const matches = (name) => queries[name].matches;

    /**
     * Calls fn each time the viewport crosses a switch point.
     * @param {'tablet'|'desktop'} name
     * @param {(matches: boolean) => void} fn receives true when now at or above it
     */
    const onChange = (name, fn) => {
      queries[name].addEventListener('change', (event) => fn(event.matches));
    };

    return { matches, onChange };
  })();

  // ===== safe-init =====
  // One failing part must never stop the others, or the page would be half-interactive.

  /**
   * Runs one part's init and logs, instead of throwing, when it fails.
   * @param {string} name the part's name, for the console message
   * @param {() => void} init
   */
  const safeInit = (name, init) => {
    try {
      init();
    } catch (error) {
      console.error(`[${name}] failed to start:`, error);
    }
  };

  // ===== start =====
  // Each later part adds itself to this list as [name, init]; parts may use `breakpoints`.
  const parts = [];

  parts.forEach(([name, init]) => safeInit(name, init));

  // Tells the inline head script that this file ran, so it keeps the `js` class (and the
  // JS-only layout) instead of falling back to the no-JS page at load.
  document.documentElement.setAttribute('data-js-ready', '');
})();
