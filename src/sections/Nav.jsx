import Magnet from '../components/reactbits/Magnet';
import { switchTheme } from '../lib/theme';
import LogoMark from '../components/LogoMark';
import { useLang } from '../lib/i18n';

export default function Nav({ theme, setTheme }) {
  const { c, lang, setLang } = useLang();
  const toggle = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    switchTheme(theme === 'dark' ? 'light' : 'dark', setTheme, r.left + r.width / 2, r.top + r.height / 2);
  };

  return (
    <header className="nav">
      <a href="#" className="logo"><LogoMark size={38} /><span>Cristian <em>Casciani</em></span></a>
      <nav className="nav-links">
        {c.nav.map(([id, label], i) => (
          <a key={id} href={`#${id}`}><sup>0{i + 1}</sup>{label}</a>
        ))}
      </nav>
      <button className="lang-btn" type="button" onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
        aria-label={c.langSwitch} title={c.langSwitch}>
        <span className={lang === 'it' ? 'on' : ''}>IT</span><span className={lang === 'en' ? 'on' : ''}>EN</span>
      </button>
      <Magnet padding={40} magnetStrength={3}>
        <button className="theme-btn" onClick={toggle} aria-label={c.themeTo[theme === 'dark' ? 'light' : 'dark']}>
          <span className="theme-icon" />
        </button>
      </Magnet>
    </header>
  );
}
