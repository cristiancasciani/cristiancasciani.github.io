import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLang } from '../lib/i18n';

export default function Marquee() {
  const root = useRef(null);
  useGSAP(() => {
    gsap.to('.marquee-track', { xPercent: -50, duration: 24, ease: 'none', repeat: -1 });
  }, { scope: root });

  const { c } = useLang();
  const text = c.services.map((s) => s.title).join('  ✦  ') + '  ✦  ';
  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="marquee-track"><span>{text}</span><span>{text}</span></div>
    </div>
  );
}
