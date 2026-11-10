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

  // ===== carousel =====
  // Each [data-carousel] is a native scroll-snap row (swipe, trackpad and shift-wheel need no
  // script). This part makes prev/next scroll the track itself by one card (never the page),
  // marks the buttons aria-disabled at the ends (not `disabled`, which would drop keyboard focus)
  // and adds `is-static` when nothing overflows, which hides the buttons. A card that gets keyboard
  // focus while partly hidden is scrolled fully into view, again on the track only. No autoplay
  // (Decision 8).
  const carousel = (() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let count = 0;

    /**
     * Wires one carousel.
     * @param {HTMLElement} root the [data-carousel] element
     */
    const setup = (root) => {
      const track = root.querySelector('[data-carousel-track]');
      if (!track) return;
      const prev = root.querySelector('[data-carousel-prev]');
      const next = root.querySelector('[data-carousel-next]');
      const buttons = [prev, next].filter(Boolean);
      let frame = 0;

      count += 1;
      if (!track.id) track.id = `carousel-track-${count}`;
      buttons.forEach((button) => button.setAttribute('aria-controls', track.id));

      const items = () => Array.from(track.children).filter((el) => el.getClientRects().length);

      // The distance between two neighbouring cards, measured, so any card width or gap works.
      const step = () => {
        const list = items();
        if (list.length < 2) return track.clientWidth;
        return Math.abs(list[1].getBoundingClientRect().left - list[0].getBoundingClientRect().left);
      };

      // How far the last card's start edge still is from the snap line (the track's start edge
      // plus its scroll padding). A card wider than the track snaps there before the scroll end.
      const lastCardDistance = (rtl) => {
        const list = items();
        if (!list.length) return 0;
        const box = track.getBoundingClientRect();
        const card = list[list.length - 1].getBoundingClientRect();
        const padding = parseFloat(getComputedStyle(track).scrollPaddingInlineStart) || 0;
        return rtl ? (box.right - padding) - card.right : card.left - (box.left + padding);
      };

      const update = () => {
        frame = 0;
        const rtl = getComputedStyle(track).direction === 'rtl';
        const max = track.scrollWidth - track.clientWidth;
        // scrollLeft runs negative on a right-to-left page; its size is the distance from the start.
        const position = Math.abs(track.scrollLeft);
        const atEnd = position >= max - 1 || lastCardDistance(rtl) <= 1;
        root.classList.toggle('is-static', max <= 1);
        if (prev) prev.setAttribute('aria-disabled', String(position <= 1));
        if (next) next.setAttribute('aria-disabled', String(atEnd));
      };

      const schedule = () => {
        if (!frame) frame = window.requestAnimationFrame(update);
      };

      /**
       * Scrolls the track by one card.
       * @param {1|-1} direction 1 towards the end, -1 towards the start
       */
      const move = (direction) => {
        const rtl = getComputedStyle(track).direction === 'rtl';
        track.scrollBy({
          left: direction * (rtl ? -1 : 1) * step(),
          behavior: reducedMotion.matches ? 'auto' : 'smooth',
        });
      };

      const onClick = (direction) => (event) => {
        if (event.currentTarget.getAttribute('aria-disabled') === 'true') return;
        move(direction);
      };

      /**
       * Brings a keyboard-focused card fully into view by scrolling the track only. Chromium does
       * not scroll a focused element that is already partly visible in its scroller, so a peeking
       * card would keep focus while mostly hidden. The track moves to the nearest snap position
       * (a card's start on the snap line) that shows the whole card and its focus ring, so the
       * mandatory snap never pulls it back out of view.
       * @param {FocusEvent} event
       */
      const onFocusIn = (event) => {
        // Only keyboard focus: moving a card under the pointer between mousedown and mouseup
        // would turn the click into a click on whatever slid in.
        try {
          if (!event.target.matches(':focus-visible')) return;
        } catch (error) {
          // A browser without :focus-visible gets the native focus scrolling only.
          return;
        }
        const list = items();
        const card = list.find((item) => item.contains(event.target));
        if (!card) return;
        const rtl = getComputedStyle(track).direction === 'rtl';
        const box = track.getBoundingClientRect();
        // Room for the 2px focus ring and its 2px offset, the same as the track's start padding.
        const inset = parseFloat(getComputedStyle(track).scrollPaddingInlineStart) || 0;
        const visibleStart = inset;
        const visibleEnd = box.width - inset;
        // Logical offsets from the track's start edge (its right edge on a right-to-left page).
        const offset = (el) => {
          const rect = el.getBoundingClientRect();
          return rtl
            ? { start: box.right - rect.right, end: box.right - rect.left }
            : { start: rect.left - box.left, end: rect.right - box.left };
        };
        const target = offset(card);
        if (target.start >= visibleStart - 1 && target.end <= visibleEnd + 1) return;

        const position = Math.abs(track.scrollLeft);
        const max = track.scrollWidth - track.clientWidth;
        const fits = (delta) => target.start - delta >= visibleStart - 1
          && target.end - delta <= visibleEnd + 1;
        let best = null;
        list.forEach((item) => {
          // The distance that puts this card on the snap line, limited to the scroll range.
          const raw = offset(item).start - visibleStart;
          const delta = Math.min(Math.max(raw, -position), max - position);
          if (fits(delta) && (best === null || Math.abs(delta) < Math.abs(best))) best = delta;
        });
        // A card wider than the track cannot fit: show its start.
        if (best === null) best = target.start - visibleStart;
        if (Math.abs(best) < 1) return;
        track.scrollBy({
          left: best * (rtl ? -1 : 1),
          behavior: reducedMotion.matches ? 'auto' : 'smooth',
        });
      };

      if (prev) prev.addEventListener('click', onClick(-1));
      if (next) next.addEventListener('click', onClick(1));
      track.addEventListener('focusin', onFocusIn);
      track.addEventListener('scroll', schedule, { passive: true });
      // The track's size changes on resize and at the switch points, the cards' when an image or
      // font arrives; either can start or stop the overflow.
      if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(schedule);
        observer.observe(track);
        Array.from(track.children).forEach((item) => observer.observe(item));
      } else {
        window.addEventListener('resize', schedule);
      }
      window.addEventListener('load', schedule);
      update();
    };

    /** Wires every [data-carousel] on the page. */
    const init = () => {
      document.querySelectorAll('[data-carousel]').forEach(setup);
    };

    return { init };
  })();

  // ===== pager =====
  // Each [data-pager] shows one of its [data-pager-item]s at a time, with a "n/total" counter
  // taken from the number of items in the HTML; prev/next wrap around (Decision 9). Without this
  // part every item shows and the CSS hides the controls.
  const pager = (() => {
    /**
     * Wires one pager.
     * @param {HTMLElement} root the [data-pager] element
     */
    const setup = (root) => {
      const items = Array.from(root.querySelectorAll('[data-pager-item]'));
      if (!items.length) return;
      const prev = root.querySelector('[data-pager-prev]');
      const next = root.querySelector('[data-pager-next]');
      const counter = root.querySelector('[data-pager-count]');
      let current = 0;

      /** @param {number} index any integer; wraps to the item list */
      const show = (index) => {
        current = (index + items.length) % items.length;
        items.forEach((item, i) => { item.hidden = i !== current; });
        if (counter) counter.textContent = `${current + 1}/${items.length}`;
      };

      if (prev) prev.addEventListener('click', () => show(current - 1));
      if (next) next.addEventListener('click', () => show(current + 1));
      root.classList.toggle('is-single', items.length < 2);
      show(0);
      root.classList.add('is-ready');
    };

    /** Wires every [data-pager] on the page. */
    const init = () => {
      document.querySelectorAll('[data-pager]').forEach(setup);
    };

    return { init };
  })();

  // ===== tabs =====
  // WAI-ARIA tabs with automatic activation: ←/→ (swapped right-to-left), Home and End move to a
  // tab and show its panel. The HTML has no tab roles, so without this part nothing announces as
  // a tab: the CSS hides the tab bar and every panel shows. Here the roles, aria-selected, the
  // roving tabindex and each panel's aria-labelledby are added, the inactive panels get `hidden`,
  // and [data-tabs] gets `is-ready` (before that, with JS, only the first panel shows).
  const tabs = (() => {
    /**
     * Wires one tab set.
     * @param {HTMLElement} root the [data-tabs] element
     */
    const setup = (root) => {
      const list = root.querySelector('[data-tabs-list]');
      const pairs = Array.from(root.querySelectorAll('[data-tabs-tab]'))
        .map((tab) => ({ tab, panel: document.getElementById(tab.getAttribute('aria-controls')) }))
        .filter(({ panel }) => panel && root.contains(panel));
      if (!list || !pairs.length) return;

      /**
       * Shows one panel and makes its tab the only one in the Tab order.
       * @param {number} index position in `pairs`
       * @param {boolean} focus whether to move focus to the tab
       */
      const select = (index, focus) => {
        pairs.forEach(({ tab, panel }, i) => {
          const selected = i === index;
          tab.setAttribute('aria-selected', String(selected));
          tab.tabIndex = selected ? 0 : -1;
          panel.hidden = !selected;
        });
        if (focus) pairs[index].tab.focus();
      };

      list.setAttribute('role', 'tablist');
      pairs.forEach(({ tab, panel }, i) => {
        tab.setAttribute('role', 'tab');
        panel.setAttribute('role', 'tabpanel');
        if (tab.id) panel.setAttribute('aria-labelledby', tab.id);
        tab.addEventListener('click', () => select(i, false));
      });

      list.addEventListener('keydown', (event) => {
        const current = pairs.findIndex(({ tab }) => tab === event.target);
        if (current < 0) return;
        const rtl = getComputedStyle(root).direction === 'rtl';
        const last = pairs.length - 1;
        let index;
        if (event.key === 'ArrowRight') index = rtl ? current - 1 : current + 1;
        else if (event.key === 'ArrowLeft') index = rtl ? current + 1 : current - 1;
        else if (event.key === 'Home') index = 0;
        else if (event.key === 'End') index = last;
        else return;
        event.preventDefault();
        select((index + pairs.length) % pairs.length, true);
      });

      select(0, false);
      root.classList.add('is-ready');
    };

    /** Wires every [data-tabs] on the page. */
    const init = () => {
      document.querySelectorAll('[data-tabs]').forEach(setup);
    };

    return { init };
  })();

  // ===== form-validation =====
  // Each form[data-validate] is checked here instead of by the browser (`novalidate`), so the
  // messages are the site's own (the data-label-* attributes of the one [data-validate-messages]
  // element) and sit under their field (the element named by its aria-describedby, which carries
  // [data-field-error]). An invalid submit is stopped and focus goes to the first invalid field; a
  // flagged field is checked again as it changes; a valid form submits to its action (`#`). Date
  // fields also get `is-empty` while they hold nothing, so their format text looks like a
  // placeholder. Without this part the browser's own validation runs.
  const formValidation = (() => {
    let labels = {};

    /**
     * The message for a field's current state, or '' when it is valid.
     * @param {HTMLInputElement} field
     * @returns {string}
     */
    const messageFor = (field) => {
      const { validity } = field;
      if (validity.valid) return '';
      if (validity.valueMissing) return labels.required || '';
      if (field.type === 'date') return labels.invalidDate || '';
      // Weeks out: a fraction (stepMismatch), 0 or less (rangeUnderflow) or junk (badInput).
      if (field.type === 'number') return labels.weeksOut || '';
      return labels.required || '';
    };

    /**
     * Shows or clears a field's message and its aria-invalid state.
     * @param {HTMLInputElement} field
     * @returns {boolean} whether the field is valid
     */
    const check = (field) => {
      const message = messageFor(field);
      const error = (field.getAttribute('aria-describedby') || '').split(/\s+/)
        .map((id) => (id ? document.getElementById(id) : null))
        .find((element) => element && element.hasAttribute('data-field-error'));
      if (error) error.textContent = message;
      if (message) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
      return !message;
    };

    /** @param {HTMLInputElement} field a date field */
    const markEmpty = (field) => {
      // A half-typed date has no value yet, but its text is the user's, not the format hint.
      field.classList.toggle('is-empty', !field.value && !field.validity.badInput);
    };

    /**
     * Wires one form.
     * @param {HTMLFormElement} form
     */
    const setup = (form) => {
      const fields = Array.from(form.querySelectorAll('input'))
        .filter((field) => field.type !== 'radio' && field.type !== 'hidden');
      const dates = fields.filter((field) => field.type === 'date');

      form.noValidate = true;
      form.addEventListener('submit', (event) => {
        const invalid = fields.filter((field) => !check(field));
        if (!invalid.length) return;
        event.preventDefault();
        invalid[0].focus();
      });

      fields.forEach((field) => {
        const recheck = () => {
          if (field.getAttribute('aria-invalid') === 'true') check(field);
        };
        // While a date is half-typed its `value` stays '' (also when it is cleared back to empty),
        // so typing in it fires no input/change: its parts are also followed on keyup and blur.
        const events = field.type === 'date' ? ['input', 'change', 'keyup', 'blur'] : ['input', 'change'];
        events.forEach((name) => field.addEventListener(name, () => {
          if (field.type === 'date') markEmpty(field);
          recheck();
        }));
      });

      dates.forEach(markEmpty);
      // The browser may restore field values when the page comes back from history.
      window.addEventListener('pageshow', () => dates.forEach(markEmpty));
    };

    /** Reads the messages and wires every form[data-validate] on the page. */
    const init = () => {
      const source = document.querySelector('[data-validate-messages]');
      if (source) {
        labels = {
          required: source.getAttribute('data-label-required'),
          invalidDate: source.getAttribute('data-label-invalid-date'),
          weeksOut: source.getAttribute('data-label-weeks-out'),
        };
      }
      document.querySelectorAll('form[data-validate]').forEach(setup);
    };

    return { init };
  })();

  // ===== start =====
  // Each later part adds itself to this list as [name, init]; parts may use `breakpoints`.
  const parts = [
    ['header-scroll', headerScroll.init],
    ['menu', menu.init],
    ['carousel', carousel.init],
    ['pager', pager.init],
    ['tabs', tabs.init],
    ['form-validation', formValidation.init],
  ];

  parts.forEach(([name, init]) => safeInit(name, init));

  // Tells the inline head script that this file ran, so it keeps the `js` class (and the
  // JS-only layout) instead of falling back to the no-JS page at load.
  document.documentElement.setAttribute('data-js-ready', '');
})();
