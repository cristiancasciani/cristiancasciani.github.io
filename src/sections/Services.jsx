import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLang } from '../lib/i18n';

export default function Services() {
  const root = useRef(null);
  const { c } = useLang();
  useGSAP(() => {
    gsap.utils.toArray('.service').forEach((el, i) =>
      gsap.from(el, { y: 50, opacity: 0, duration: 0.9, delay: i * 0.08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } })
    );
  }, { scope: root });

  return (
    <section id="services" className="section" ref={root}>
      <h2 className="section-title">{c.servicesTitle}</h2>
      <div className="services">
        {c.services.map((s, i) => (
          <article key={s.title} className="service">
            <span className="service-n">(0{i + 1})</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
