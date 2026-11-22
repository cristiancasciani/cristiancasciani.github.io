import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { projectHref } from '../lib/router';
import { shot } from '../content';
import { useLang } from '../lib/i18n';

export default function Work() {
  const root = useRef(null);
  const { c, lang, projects } = useLang();
  useGSAP(() => {
    gsap.utils.toArray('.card').forEach((card) => {
      gsap.from(card, { y: 80, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 90%' } });
      gsap.fromTo(card.querySelector('.cover'), { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: card, scrub: true } });
    });
  }, { scope: root });

  return (
    <section id="projects" className="section" ref={root}>
      <div className="section-head">
        <h2 className="section-title">{c.workTitle}</h2>
        <p className="section-note">{c.workNote}</p>
      </div>
      <div className="cards">
        {projects.map((p, i) => (
          <a key={p.slug} href={projectHref(p.slug)} className="card" data-cursor={c.cursorView}>
            <div className="card-media"><img className="cover" {...shot(p.slug, lang, 1, i === 0 ? '(max-width: 760px) 100vw, 95vw' : '(max-width: 760px) 100vw, 48vw')} alt={p.title} loading="lazy" /></div>
            <div className="card-info">
              <span className="card-n">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
