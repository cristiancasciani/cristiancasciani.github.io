import { useState } from 'react';
import Magnet from '../components/reactbits/Magnet';
import { email, socials } from '../content';
import { useLang } from '../lib/i18n';

// FormSubmit: static-site form backend, no account. First submission sends a one-time activation email.
const ENDPOINT = `https://formsubmit.co/ajax/${email}`;

// value is the option index, so the choice survives a language switch.
function Chips({ name, options, value, onChange }) {
  return (
    <div className="chips" role="radiogroup">
      {options.map((o, i) => (
        <label key={i} className={`chip ${value === i ? 'on' : ''}`}>
          <input type="radio" name={name} value={o} checked={value === i} onChange={() => onChange(i)} />
          {o}
        </label>
      ))}
    </div>
  );
}

export default function Contact() {
  const { c, fmt } = useLang();
  const f = c.form;
  const [type, setType] = useState(0);
  const [budget, setBudget] = useState(3);
  const [status, setStatus] = useState('idle');

  const submit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data._honey) return;
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, project: c.projectTypes[type], budget: c.budgets[budget],
          _subject: fmt(f.subject, { type: c.projectTypes[type] }), _template: 'table' }),
      });
      if (!res.ok) throw new Error(res.status);
      setStatus('sent');
      e.target.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="contact-title">{c.contactTitle[0]} <em>{c.contactTitle[1]}</em></h2>
      <a className="contact-email" href={`mailto:${email}`} data-cursor={c.cursorWrite}>{email} <span>↗</span></a>

      <form className="form" onSubmit={submit}>
        <div className="form-row">
          <label className="field"><span>{f.name}</span><input name="name" required autoComplete="name" /></label>
          <label className="field"><span>{f.email}</span><input name="email" type="email" required autoComplete="email" /></label>
        </div>
        <div className="field"><span>{f.project}</span><Chips name="type" options={c.projectTypes} value={type} onChange={setType} /></div>
        <div className="field"><span>{f.budget}</span><Chips name="budget" options={c.budgets} value={budget} onChange={setBudget} /></div>
        <label className="field"><span>{f.message}</span><textarea name="message" rows="4" required /></label>
        <input type="text" name="_honey" className="honey" tabIndex="-1" autoComplete="off" />
        <div className="form-foot">
          <p className="form-status" aria-live="polite">
            {status === 'sending' && f.sending}
            {status === 'sent' && f.sent}
            {status === 'error' && fmt(f.error, { email })}
          </p>
          <Magnet padding={50} magnetStrength={3}>
            <button className="btn" type="submit" disabled={status === 'sending'}>{f.send}</button>
          </Magnet>
        </div>
      </form>

      <ul className="socials">
        {socials.filter((s) => s.url).map((s) => (
          <li key={s.label}><a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a></li>
        ))}
      </ul>
    </section>
  );
}
