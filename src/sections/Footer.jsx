import LogoMark from '../components/LogoMark';
import { name } from '../content';
import { useLang } from '../lib/i18n';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-status"><span className="dot" /> {useLang().c.available}</span>
      <span className="footer-brand"><LogoMark size={28} /> © {name} · 2026</span>
    </footer>
  );
}
