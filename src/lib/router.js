import { useEffect, useState } from 'react';

// Hash routes work on GitHub Pages without server config.
//   #/work/<slug>  -> project page
//   anything else  -> home ("#services" etc. are in-page anchors, handled by App)
const parse = () => {
  const m = location.hash.match(/^#\/work\/([\w-]+)/);
  return m ? { page: 'project', slug: m[1] } : { page: 'home' };
};

export function useRoute() {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const on = () => setRoute(parse());
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  return route;
}

export const projectHref = (slug) => `#/work/${slug}`;
