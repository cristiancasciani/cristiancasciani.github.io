import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';
import { initSmoothScroll, scrollTo } from './lib/smoothScroll';
import { useRoute } from './lib/router';
import { getTheme } from './lib/theme';
import Noise from './components/reactbits/Noise';
import ClickSpark from './components/reactbits/ClickSpark';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Services from './sections/Services';
import Work from './sections/Work';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ProjectPage from './sections/ProjectPage';
import Cursor from './components/Cursor';
import './styles/site.css';

const SPARK = { light: '#ff4d2e', dark: '#c6ff3d' };

export default function App() {
  const [theme, setTheme] = useState(getTheme);
  const route = useRoute();
  const pendingAnchor = useRef(null);
  const main = useRef(null);

  useEffect(() => initSmoothScroll(), []);

  // In-page anchors ("#about", "#"): smooth scroll; from a project page go home first.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const href = a.getAttribute('href');
      if (href.startsWith('#/')) return; // route link, let hashchange handle it
      e.preventDefault();
      const target = href === '#' ? 0 : href;
      if (location.hash.startsWith('#/')) {
        pendingAnchor.current = target;
        history.pushState(null, '', location.pathname + location.search);
        dispatchEvent(new HashChangeEvent('hashchange'));
      } else {
        scrollTo(target);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // After a route change: jump to top (or to the pending anchor), refresh triggers, fade in.
  useLayoutEffect(() => {
    const target = pendingAnchor.current;
    pendingAnchor.current = null;
    scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
    if (target) requestAnimationFrame(() => requestAnimationFrame(() => { ScrollTrigger.refresh(); scrollTo(target); }));
    gsap.fromTo(main.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform' });
  }, [route.page, route.slug]);

  return (
    <ClickSpark sparkColor={SPARK[theme]} sparkCount={10}>
      <Noise opacity={theme === 'dark' ? 0.08 : 0.05} fixed />
      <Nav theme={theme} setTheme={setTheme} />
      <main ref={main} key={route.page + (route.slug || '')}>
        {route.page === 'project' ? (
          <ProjectPage slug={route.slug} />
        ) : (
          <>
            <Hero />
            <Marquee />
            <Services />
            <Work />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <Cursor />
    </ClickSpark>
  );
}
