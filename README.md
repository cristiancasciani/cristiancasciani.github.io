# Cristian Casciani — Portfolio

Personal portfolio: **https://cristiancasciani.github.io**

Italian / English, light ("Editorial") and dark ("Noir") themes, three demo projects with case-study pages.

**Stack:** React + Vite · GSAP (ScrollTrigger) · Lenis smooth scroll · React Bits components

## Projects shown

| Project | Live | Code |
|---|---|---|
| KAZE — restaurant website | [demo](https://cristiancasciani.github.io/restaurant-website/) | [restaurant-website](https://github.com/cristiancasciani/restaurant-website) |
| Circuito — shop management app | [demo](https://circuito-shop-demo.onrender.com/) (login `demo` / `demo123`, may take ~30 s to wake up) | [shop-management-app](https://github.com/cristiancasciani/shop-management-app) |
| Ordo — Python automation | [demo](https://cristiancasciani.github.io/python-automation/) | [python-automation](https://github.com/cristiancasciani/python-automation) |

## Develop

```bash
npm install
npm run dev      # http://localhost:5173  (?lang=it|en, ?theme=light|dark)
npm run build    # static site in dist/
```

- All texts: `src/content.js` (`COPY.en`, `COPY.it`).
- Sections: `src/sections/`, styles and both themes: `src/styles/site.css`.
- React Bits components are copied into `src/components/reactbits/` with `python3 scripts/add-reactbits.py <Name>`.
- Project screenshots: `public/projects/<slug>-<lang>-<n>-<width>.webp` (1280/2560/3840 px).

Every push to `main` is built and published to GitHub Pages by `.github/workflows/deploy.yml`.
