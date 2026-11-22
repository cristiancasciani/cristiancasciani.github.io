import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Accent dot that follows the pointer. Over [data-cursor] it grows and shows the label;
// over [data-cursor-invert] it becomes a big circle that inverts colors.
export default function Cursor() {
  const dot = useRef(null);
  const [label, setLabel] = useState('');
  const [enabled] = useState(() => matchMedia('(pointer: fine)').matches);

  useEffect(() => {
    if (!enabled) return;
    const el = dot.current;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });
    const move = (e) => { el.style.opacity = 1; xTo(e.clientX); yTo(e.clientY); };
    const over = (e) => {
      const t = e.target.closest('[data-cursor], [data-cursor-invert], a, button, input, textarea, label');
      const mode = !t ? 'dot' : t.dataset.cursor ? 'label' : t.hasAttribute('data-cursor-invert') ? 'invert' : 'link';
      el.dataset.mode = mode;
      setLabel(mode === 'label' ? t.dataset.cursor : '');
    };
    const leave = () => (el.style.opacity = 0);
    const enter = () => (el.style.opacity = 1);
    document.documentElement.classList.add('has-cursor');
    addEventListener('pointermove', move);
    addEventListener('pointerover', over);
    document.addEventListener('pointerleave', leave);
    document.addEventListener('pointerenter', enter);
    return () => {
      document.documentElement.classList.remove('has-cursor');
      removeEventListener('pointermove', move);
      removeEventListener('pointerover', over);
      document.removeEventListener('pointerleave', leave);
      document.removeEventListener('pointerenter', enter);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div className="cursor" ref={dot} data-mode="dot" aria-hidden="true"><span>{label}</span></div>;
}
