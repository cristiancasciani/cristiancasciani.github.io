import { flushSync } from 'react-dom';

export const getTheme = () => document.documentElement.dataset.theme || 'light';

// Switch theme with a circular reveal from (x, y) when View Transitions are available.
export function switchTheme(next, setTheme, x, y) {
  const apply = () => {
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    flushSync(() => setTheme(next));
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduce) return apply();

  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(apply).ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 750, easing: 'cubic-bezier(.7,0,.3,1)', pseudoElement: '::view-transition-new(root)' }
    );
  });
}
