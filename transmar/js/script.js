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

  // ===== header-scroll =====
  // The header is transparent over the key visual and turns white once the key visual's bottom
  // has passed under it (Decision 11). A rAF-throttled scroll/resize check, not an
  // IntersectionObserver, because the header's own height changes (62/70 mobile, 90 wider).
  const headerScroll = (() => {
    const root = document.documentElement;
    let header = null;
    let trigger = null;
    let forced = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!header || !trigger) return;
      const scrolled = forced || trigger.getBoundingClientRect().bottom <= header.offsetHeight;
      header.classList.toggle('is-scrolled', scrolled);
      // On <html> too, so CSS can switch --header-height (70 on mobile) without :has().
      root.classList.toggle('is-header-scrolled', scrolled);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    /** Finds the header and its trigger and keeps the header's look in step with the scroll. */
    const init = () => {
      header = document.querySelector('[data-header]');
      trigger = document.querySelector('[data-header-trigger]');
      if (!header || !trigger) return;
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule);
      update();
    };

    /**
     * Keeps the scrolled (white) look whatever the scroll position, e.g. under the mobile menu.
     * @param {boolean} on
     */
    const setForced = (on) => {
      forced = on;
      update();
    };

    return { init, setForced };
  })();

  // ===== menu =====
  // The side menu as a modal dialog: burger opens it, close button / overlay / Esc close it,
  // focus stays inside and goes back to the burger, the page does not scroll behind it.
  // Without JS (or before this runs) it is plain content after the footer.
  const menu = (() => {
    const root = document.documentElement;
    let button = null;
    let dialog = null;
    let closeButton = null;
    let overlay = null;
    let label = null;
    let inerted = [];
    let unlockTimer = 0;
    let onTransitionEnd = null;

    const isOpen = () => root.classList.contains('is-menu-open');

    /** Elements inside the dialog that Tab can reach, in order. */
    const focusables = () => Array.from(
      dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
    ).filter((el) => el.getClientRects().length > 0);

    /** --duration-drawer in ms (0.01 under reduced motion). */
    const drawerDuration = () => {
      const value = getComputedStyle(root).getPropertyValue('--duration-drawer').trim();
      const number = parseFloat(value) || 0;
      return value.endsWith('ms') ? number : number * 1000;
    };

    const setLabel = (open) => {
      if (label) label.textContent = open ? button.dataset.labelClose : button.dataset.labelOpen;
    };

    // The mobile sheet sits under the header, which must then look white (70px) whatever the
    // scroll position; from 768 the overlay covers the header in its current look.
    const syncHeader = () => {
      headerScroll.setForced(root.classList.contains('is-menu-locked') && !breakpoints.matches('tablet'));
    };

    const clearUnlock = () => {
      window.clearTimeout(unlockTimer);
      if (onTransitionEnd) dialog.removeEventListener('transitionend', onTransitionEnd);
      onTransitionEnd = null;
    };

    // Runs once the panel has slid out: only then may the scrollbar come back, or the page would
    // shift while the panel is still moving.
    const unlock = () => {
      clearUnlock();
      root.classList.remove('is-menu-locked');
      root.style.removeProperty('--scrollbar-comp');
      syncHeader();
    };

    const onKeydown = (event) => {
      if (!isOpen()) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== 'Tab') return;
      // Fallback for browsers without `inert`: wrap Tab inside the dialog.
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const open = () => {
      if (isOpen()) return;
      clearUnlock();
      // The classic scrollbar's width, which overflow: hidden takes away (0 with overlay bars).
      // Reopened while still sliding out, the page is locked already and keeps its measurement.
      if (!root.classList.contains('is-menu-locked')) {
        const scrollbar = window.innerWidth - root.clientWidth;
        root.style.setProperty('--scrollbar-comp', `${scrollbar}px`);
        root.classList.add('is-menu-locked');
      }
      syncHeader();
      // Everything else on the page is out of reach while the dialog is open.
      inerted = Array.from(document.body.children).filter(
        (el) => el !== dialog && el !== overlay && !el.inert,
      );
      inerted.forEach((el) => { el.inert = true; });
      root.classList.add('is-menu-open');
      button.setAttribute('aria-expanded', 'true');
      setLabel(true);
      document.addEventListener('keydown', onKeydown);
      const target = closeButton || focusables()[0];
      if (target) target.focus();
    };

    function close() {
      if (!isOpen()) return;
      root.classList.remove('is-menu-open');
      button.setAttribute('aria-expanded', 'false');
      setLabel(false);
      inerted.forEach((el) => { el.inert = false; });
      inerted = [];
      document.removeEventListener('keydown', onKeydown);
      button.focus();
      onTransitionEnd = (event) => {
        if (event.target === dialog && event.propertyName === 'transform') unlock();
      };
      dialog.addEventListener('transitionend', onTransitionEnd);
      // In case no transition runs (e.g. the panel is not rendered).
      unlockTimer = window.setTimeout(unlock, drawerDuration() + 50);
    }

    /** Makes #site-menu a dialog and wires its controls. */
    const init = () => {
      button = document.querySelector('[data-menu-button]');
      dialog = button && document.getElementById(button.getAttribute('aria-controls'));
      if (!button || !dialog) return;
      closeButton = dialog.querySelector('[data-menu-close]');
      overlay = document.querySelector('[data-menu-overlay]');
      label = button.querySelector('[data-menu-button-label]');
      // Names stay editable in the HTML: the dialog's from its nav, the burger's from data-label-*.
      const nav = dialog.querySelector('nav[aria-label]');
      dialog.setAttribute('role', 'dialog');
      dialog.setAttribute('aria-modal', 'true');
      if (nav) dialog.setAttribute('aria-label', nav.getAttribute('aria-label'));
      setLabel(false);

      button.addEventListener('click', open);
      if (closeButton) closeButton.addEventListener('click', close);
      if (overlay) overlay.addEventListener('click', close);
      breakpoints.onChange('tablet', syncHeader);

      // Nav links hide below 1200, EN and search below 768. If the focused one disappears on a
      // resize, focus goes to the burger, whose menu holds the same targets. The control is
      // remembered on focusout: Chromium may have blurred it before the media change fires.
      const header = button.closest('[data-header]');
      let lastFocused = null;
      if (header) header.addEventListener('focusout', (event) => { lastFocused = event.target; });
      document.addEventListener('focusin', (event) => {
        if (header && !header.contains(event.target)) lastFocused = null;
      });
      const restoreFocus = () => {
        const active = document.activeElement;
        // Either the browser has already blurred the hidden control, or it still holds focus.
        const blurred = (!active || active === document.body)
          && lastFocused && !lastFocused.getClientRects().length;
        const stillHeld = header && header.contains(active) && !active.getClientRects().length;
        if ((blurred || stillHeld) && !isOpen()) button.focus();
      };
      breakpoints.onChange('tablet', restoreFocus);
      breakpoints.onChange('desktop', restoreFocus);
    };

    return { init };
  })();

  // ===== start =====
  // Each later part adds itself to this list as [name, init]; parts may use `breakpoints`.
  const parts = [
    ['header-scroll', headerScroll.init],
    ['menu', menu.init],
  ];

  parts.forEach(([name, init]) => safeInit(name, init));

  // Tells the inline head script that this file ran, so it keeps the `js` class (and the
  // JS-only layout) instead of falling back to the no-JS page at load.
  document.documentElement.setAttribute('data-js-ready', '');
})();
