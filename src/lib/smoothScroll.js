import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { reduceMotion } from './motion';

gsap.registerPlugin(ScrollTrigger);

export const NAV_OFFSET = -80;
let lenis = null;

// Scroll to a selector/number with Lenis (instant fallback before init).
export function scrollTo(target, opts = {}) {
  if (lenis) {
    lenis.resize(); // page height may have just changed (route switch)
    lenis.scrollTo(target, { offset: NAV_OFFSET, force: true, ...opts });
  }
  else if (typeof target === 'number') window.scrollTo(0, target);
  else document.querySelector(target)?.scrollIntoView();
}

// Lenis smooth scroll driven by the GSAP ticker so ScrollTrigger stays in sync.
export function initSmoothScroll() {
  if (reduceMotion) return () => {};
  lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
}
