// Visitors who ask their system for less motion get no smooth scroll and no looping animations.
export const reduceMotion = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) document.documentElement.classList.add('reduce-motion');
