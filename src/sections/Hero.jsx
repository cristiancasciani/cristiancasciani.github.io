import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { reduceMotion } from '../lib/motion';
import SplitText from '../components/reactbits/SplitText';
import Magnet from '../components/reactbits/Magnet';
import { useLang } from '../lib/i18n';

export default function Hero() {
  const root = useRef(null);
  const { c, lang } = useLang();

  useGSAP(() => {
    gsap.from('.reveal', { y: 30, opacity: 0, duration: 1, stagger: 0.1, delay: 0.5, ease: 'power3.out' });
    gsap.from('.stamp', { rotate: -90, scale: 0, duration: 1.2, delay: 0.9, ease: 'back.out(1.6)' });
    if (!reduceMotion) gsap.to('.stamp svg', { rotate: 360, duration: 18, ease: 'none', repeat: -1 });
  }, { scope: root });

  return (
    <section className="hero" ref={root}>
      <div className="hero-meta reveal">{c.meta.map((m) => <span key={m}>{m}</span>)}</div>
      <div className="hero-title-wrap" data-cursor-invert>
        <SplitText key={lang} text={c.headline} tag="h1" className="hero-title" splitType="words, chars" delay={40} duration={1} textAlign="left" />
      </div>
      <div className="hero-foot">
        <p className="hero-sub reveal">{c.sub}</p>
        <div className="hero-ctas reveal">
          <a className="link" href="#projects">{c.ctaProjects}</a>
          <Magnet padding={50} magnetStrength={3}><a className="btn" href="#contact">{c.ctaContact}</a></Magnet>
        </div>
      </div>
      <div className="stamp" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <defs><path id="stamp-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
          <text><textPath href="#stamp-circle" textLength="236" lengthAdjust="spacing">{c.available.toUpperCase()} · </textPath></text>
        </svg>
        <span>✦</span>
      </div>
    </section>
  );
}
