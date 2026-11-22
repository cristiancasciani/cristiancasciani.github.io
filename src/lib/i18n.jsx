import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { COPY, projectData } from '../content';

export const LANGS = ['en', 'it'];
const LangContext = createContext(null);

// ?lang= in the URL wins, then the last choice, then the browser language.
function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const saved = localStorage.getItem('lang');
  const browser = (navigator.language || 'en').slice(0, 2);
  return [fromUrl, saved, browser].find((l) => LANGS.includes(l)) || 'en';
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = COPY[lang].seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', COPY[lang].seoDescription);
  }, [lang]);

  const setLang = useCallback((next) => {
    localStorage.setItem('lang', next);
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', next);
      history.replaceState(null, '', url);
    }
    setLangState(next);
  }, []);

  const value = useMemo(() => {
    const c = COPY[lang];
    // Projects: shared data merged with the texts of the current language.
    const projects = projectData.map((p) => ({ ...p, ...c.projects[p.slug] }));
    const fmt = (text, vars = {}) => text.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
    return { lang, setLang, c, projects, fmt };
  }, [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
