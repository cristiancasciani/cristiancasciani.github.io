import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { reduceMotion } from '../lib/motion';
import LogoMark from '../components/LogoMark';
import { tools } from '../content';
import { useLang } from '../lib/i18n';

export default function About() {
  const root = useRef(null);
  const { c } = useLang();
  useGSAP(() => {
    const st = () => ({ trigger: root.current, start: 'top 75%' }); // fresh object for each tween
    gsap.from('.avatar', { scale: 0.85, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: st() });
    // Outer C draws itself, inner dashed C keeps turning, star pops in then breathes.
    const outer = root.current.querySelector('.avatar .lm-outer');
    const len = outer.getTotalLength();
    gsap.fromTo(outer, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut', scrollTrigger: st() });
    gsap.from('.avatar .lm-star', { scale: 0, rotate: -90, svgOrigin: '32 32', duration: 1, delay: 0.8, ease: 'back.out(2)', scrollTrigger: st() });
    if (!reduceMotion) gsap.to('.avatar .lm-inner', { rotate: -360, svgOrigin: '32 32', duration: 40, ease: 'none', repeat: -1 });
    gsap.from('.about-text > *', { y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: root.current, start: 'top 70%' } });
  }, { scope: root });

  return (
    <section id="about" className="section about" ref={root}>
      <div className="avatar" aria-hidden="true">
        <LogoMark className="avatar-mark" size="72%" />
      </div>
      <div className="about-text">
        <h2 className="section-title">{c.aboutTitle}</h2>
        <p className="about-intro">{c.aboutIntro}</p>
        <p className="about-body">{c.aboutText}</p>
        <div className="about-lists">
          <div><h4>{c.skillsTitle}</h4><ul className="tags">{c.skills.map((s) => <li key={s}>{s}</li>)}</ul></div>
          <div><h4>{c.toolsTitle}</h4><ul className="tags">{tools.map((s) => <li key={s}>{s}</li>)}</ul></div>
          <div><h4>{c.educationTitle}</h4><p className="about-body">{c.education}</p></div>
        </div>
      </div>
    </section>
  );
}
