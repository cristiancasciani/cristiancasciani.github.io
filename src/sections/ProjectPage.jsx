import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from '../components/reactbits/SplitText';
import Magnet from '../components/reactbits/Magnet';
import { projectHref } from '../lib/router';
import { shot, shotFull } from '../content';
import { useLang } from '../lib/i18n';

function LinkButton({ href, children, primary, soon, comingSoon }) {
  if (!href) return <span className={`btn ${primary ? '' : 'btn-ghost'} is-disabled`} title={comingSoon}>{children} · {soon}</span>;
  return (
    <Magnet padding={40} magnetStrength={3}>
      <a className={`btn ${primary ? '' : 'btn-ghost'}`} href={href} target="_blank" rel="noreferrer">{children} ↗</a>
    </Magnet>
  );
}

export default function ProjectPage({ slug }) {
  const root = useRef(null);
  const { c, lang, projects } = useLang();
  const L = c.page;
  const i = projects.findIndex((p) => p.slug === slug);

  useGSAP(() => {
    if (i < 0) return;
    gsap.from('.pp-reveal', { y: 30, opacity: 0, duration: 1, stagger: 0.08, delay: 0.3, ease: 'power3.out' });
    gsap.from('.pp-media', { clipPath: 'inset(12% 8% 12% 8% round 1.2rem)', duration: 1.4, delay: 0.2, ease: 'expo.out' });
    gsap.utils.toArray('.pp-block').forEach((el) =>
      gsap.from(el, { y: 50, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
    );
  }, { scope: root, dependencies: [slug, lang] });

  if (i < 0) {
    return (
      <section className="section pp-missing">
        <h1 className="section-title">{L.notFound}</h1>
        <a className="link" href="#projects">{L.backHome}</a>
      </section>
    );
  }

  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="pp" ref={root}>
      <header className="section pp-head">
        <div className="pp-top pp-reveal">
          <a className="link" href="#projects">{L.back}</a>
          <span>0{i + 1} / 0{projects.length}</span>
        </div>
        <SplitText key={p.slug + lang} text={p.title} tag="h1" className="pp-title" splitType="words, chars" delay={20} duration={0.9} textAlign="left" />
        <dl className="pp-meta pp-reveal">
          <div><dt>{L.year}</dt><dd>{p.year}</dd></div>
          <div><dt>{L.role}</dt><dd>{p.role}</dd></div>
          <div><dt>{L.stack}</dt><dd>{p.tags.join(' · ')}</dd></div>
          <div><dt>{L.type}</dt><dd>{L.typeValue}</dd></div>
        </dl>
      </header>

      <div className="pp-media"><img {...shot(p.slug, lang, 1, '95vw')} alt={p.title} /></div>

      <section className="section pp-body">
        <div className="pp-block"><h2>{L.problem}</h2><p>{p.problem}</p></div>
        <div className="pp-block"><h2>{L.solution}</h2><p>{p.solution}</p></div>
        <div className="pp-block">
          <h2>{L.features}</h2>
          <ul className="pp-features">{p.features.map((f, n) => <li key={f}><span>0{n + 1}</span>{f}</li>)}</ul>
        </div>
        <div className="pp-block pp-links">
          <LinkButton href={p.demo} primary soon={L.soon} comingSoon={L.comingSoon}>{L.demo}</LinkButton>
          <LinkButton href={p.code} soon={L.soon} comingSoon={L.comingSoon}>{L.code}</LinkButton>
        </div>
        <div className="pp-gallery">
          {Array.from({ length: p.shots - 1 }, (_, k) => (
            <a key={k} className="pp-shot pp-block" href={shotFull(p.slug, lang, k + 2)} target="_blank" rel="noreferrer" data-cursor={c.cursorView}>
              <img {...shot(p.slug, lang, k + 2, '(max-width: 760px) 100vw, 48vw')} alt={`${p.title} — ${k + 2}`} loading="lazy" />
            </a>
          ))}
        </div>
        <p className="pp-note pp-block">{L.note}</p>
      </section>

      <a className="pp-next" href={projectHref(next.slug)} data-cursor={c.cursorNext}>
        <span>{L.next}</span>
        <strong>{next.title} →</strong>
      </a>
    </article>
  );
}
