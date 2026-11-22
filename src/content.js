// All site copy in one place, in English and Italian. Components read it with useLang().

export const name = 'Cristian Casciani';
export const email = 'cristiancasciani07@gmail.com';

// Profiles without a URL are hidden. Add the address when the profile exists.
export const socials = [
  { label: 'GitHub', url: 'https://github.com/cristiancasciani' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/cristian-casciani-a700b5451/' },
  { label: 'Instagram', url: null },
  { label: 'Fiverr', url: null },
  { label: 'Upwork', url: null },
];
export const tools = ['HTML5', 'CSS3', 'JavaScript', 'React', 'GSAP', 'Python', 'Flask', 'SQLite', 'Git & GitHub'];

const GH = 'https://github.com/cristiancasciani';
const PAGES = 'https://cristiancasciani.github.io';

// Language-independent project data; texts are in COPY[lang].projects[slug].
// shots: screenshots in public/projects/<slug>-<lang>-<n>-<width>.webp (n = 1..shots; width 1280/2560/3840).
// demo: null until the live version is online (the button then shows "soon").
export const projectData = [
  { slug: 'restaurant-website', kind: 'site', year: '2026', tags: ['HTML', 'CSS', 'JavaScript'], shots: 3,
    demo: `${PAGES}/restaurant-website/`, code: `${GH}/restaurant-website` },
  { slug: 'shop-management-app', kind: 'app', year: '2026', tags: ['Python', 'Flask', 'SQLite', 'JavaScript'], shots: 3,
    demo: 'https://circuito-shop-demo.onrender.com/', code: `${GH}/shop-management-app` },
  { slug: 'python-automation', kind: 'code', year: '2026', tags: ['Python', 'pypdf', 'Excel'], shots: 3,
    demo: `${PAGES}/python-automation/`, code: `${GH}/python-automation` },
];

const SHOT_WIDTHS = [1280, 2560, 3840];
const shotUrl = (slug, lang, n, w) => `${import.meta.env.BASE_URL}projects/${slug}-${lang}-${n}-${w}.webp`;
// <img {...shot(slug, lang, n, sizes)} />: the browser picks the right width (4K only on big/Retina screens).
export const shot = (slug, lang, n, sizes = '100vw') => ({
  src: shotUrl(slug, lang, n, 2560),
  srcSet: SHOT_WIDTHS.map((w) => `${shotUrl(slug, lang, n, w)} ${w}w`).join(', '),
  sizes,
});
export const shotFull = (slug, lang, n) => shotUrl(slug, lang, n, 3840);

const en = {
  seoTitle: 'Cristian Casciani — Developer & Designer',
  seoDescription: 'Cristian Casciani, freelance developer and designer from Italy: websites, web apps, Python automation and design for individuals and businesses.',
  skip: 'Skip to content',
  nav: [['services', 'Services'], ['projects', 'Projects'], ['about', 'About'], ['contact', 'Contact']],
  themeTo: { light: 'Switch to light theme', dark: 'Switch to dark theme' },
  langSwitch: 'Leggi in italiano',
  meta: ['Portfolio — 2026', 'Developer & Designer', 'Italy · Remote'],
  headline: 'Ideas. Code. Results.',
  sub: 'I build websites, web apps and custom software for individuals and businesses.',
  ctaProjects: 'My projects →',
  ctaContact: 'Contact me',
  available: 'Available for freelance work',
  servicesTitle: 'What I do',
  services: [
    { title: 'Websites', text: 'Fast, responsive sites that make your business look its best.' },
    { title: 'Web apps', text: 'Management tools and dashboards with a real backend and database.' },
    { title: 'Python automation', text: 'Scripts that sort files, process documents and write reports for you.' },
    { title: 'Design', text: 'Interfaces, logos and visuals with a clear identity.' },
  ],
  workTitle: 'Selected work',
  workNote: 'Personal demo projects — not client work.',
  cursorView: 'View',
  cursorWrite: 'Write',
  cursorNext: 'Next',
  projects: {
    'restaurant-website': {
      title: 'Restaurant website', role: 'Design & development',
      text: 'Homepage, digital menu, photo gallery and demo bookings.',
      problem: 'A small restaurant needs to be found online, show its menu and take table requests without paying a booking platform.',
      solution: 'A fast, mobile-first site with a menu that is easy to update, a photo gallery and a booking form that sends requests by email.',
      features: ['Professional homepage', 'Digital menu', 'Photo gallery', 'Contact and demo bookings'],
    },
    'shop-management-app': {
      title: 'Shop management app', role: 'Full-stack development',
      text: 'Products, stock, search and filters in one simple dashboard.',
      problem: 'A shop tracks products and stock on paper or in scattered spreadsheets, so items run out and numbers never match.',
      solution: 'A web dashboard with a Python backend and a database: add and edit products, search and filter them, and always see what is in stock.',
      features: ['Product management', 'Add and edit items', 'Search and filters', 'Stock quantities'],
    },
    'python-automation': {
      title: 'Python automation', role: 'Development',
      text: 'Sorts files, renames in bulk, processes documents and writes a report.',
      problem: 'Hours lost every week sorting downloads, renaming files by hand and copying data out of documents.',
      solution: 'A Python tool that does it in seconds: sorts files into folders, renames them in bulk, processes documents and writes a clear report.',
      features: ['Automatic file organisation', 'Bulk renaming', 'Document processing', 'Results report'],
    },
  },
  page: {
    back: '← All projects', year: 'Year', role: 'Role', stack: 'Stack', type: 'Type', typeValue: 'Personal demo',
    problem: 'The problem', solution: 'The solution', features: 'Features', demo: 'Live demo', code: 'Code on GitHub',
    soon: 'soon', comingSoon: 'Coming soon', note: 'This is a personal demo project, built to show how I work. It is not client work.',
    next: 'Next project', notFound: 'Project not found.', backHome: '← Back to projects',
  },
  aboutTitle: 'About',
  aboutIntro: "I'm Cristian, a developer and designer from Rome.",
  aboutText: 'I learn by building. I take an idea from a sketch to a working product: clean code, a clear interface and no loose ends.',
  skillsTitle: 'Skills',
  skills: ['Web design', 'Front-end', 'Back-end', 'Automation', 'UI design'],
  toolsTitle: 'Tools',
  educationTitle: 'Education',
  education: 'Technical diploma in IT (programming and networks), I.I.S. Pacinotti-Archimede, Rome — 2026. Now studying Chemical Sciences at Sapienza University of Rome. Everything else I learn by building real projects.',
  contactTitle: ["Let's work", 'together.'],
  form: {
    name: 'Name', email: 'Email', project: 'Project', budget: 'Budget', message: 'Message', send: 'Send request →',
    sending: 'Sending…', sent: 'Thanks! I will reply within 24 hours.', error: 'Something went wrong. Write to {email}.',
    subject: 'Portfolio request: {type}',
  },
  projectTypes: ['Website', 'Web app', 'Python automation', 'Design', 'Other'],
  budgets: ['< €500', '€500 – 1,500', '€1,500+', 'Not sure yet'],
};

const it = {
  seoTitle: 'Cristian Casciani — Sviluppatore & Designer',
  seoDescription: 'Cristian Casciani, sviluppatore e designer freelance: siti web, applicazioni, automazioni Python e grafica per privati e attività.',
  skip: 'Vai al contenuto',
  nav: [['services', 'Servizi'], ['projects', 'Progetti'], ['about', 'Chi sono'], ['contact', 'Contatti']],
  themeTo: { light: 'Passa al tema chiaro', dark: 'Passa al tema scuro' },
  langSwitch: 'Read in English',
  meta: ['Portfolio — 2026', 'Sviluppatore & Designer', 'Italia · Da remoto'],
  headline: 'Idee. Codice. Risultati.',
  sub: 'Realizzo siti web, applicazioni e programmi su misura per privati e attività.',
  ctaProjects: 'I miei progetti →',
  ctaContact: 'Contattami',
  available: 'Disponibile per collaborazioni freelance',
  servicesTitle: 'Cosa faccio',
  services: [
    { title: 'Siti web', text: 'Siti veloci e responsive che mostrano la tua attività al meglio.' },
    { title: 'Applicazioni web', text: 'Gestionali e dashboard con un vero backend e un database.' },
    { title: 'Automazioni Python', text: 'Programmi che ordinano file, elaborano documenti e scrivono report al posto tuo.' },
    { title: 'Design', text: 'Interfacce, loghi e grafiche con un’identità chiara.' },
  ],
  workTitle: 'Progetti scelti',
  workNote: 'Progetti dimostrativi personali, non lavori per clienti.',
  cursorView: 'Apri',
  cursorWrite: 'Scrivi',
  cursorNext: 'Avanti',
  projects: {
    'restaurant-website': {
      title: 'Sito per ristorante', role: 'Design e sviluppo',
      text: 'Homepage, menù digitale, galleria fotografica e prenotazioni dimostrative.',
      problem: 'Un piccolo ristorante deve farsi trovare online, mostrare il menù e ricevere richieste di prenotazione senza pagare una piattaforma.',
      solution: 'Un sito veloce, pensato per il telefono, con un menù facile da aggiornare, una galleria e un modulo di prenotazione che invia le richieste via email.',
      features: ['Homepage professionale', 'Menù digitale', 'Galleria fotografica', 'Contatti e prenotazioni dimostrative'],
    },
    'shop-management-app': {
      title: 'Gestionale per negozio', role: 'Sviluppo full-stack',
      text: 'Prodotti, scorte, ricerca e filtri in un’unica dashboard semplice.',
      problem: 'Un negozio segna prodotti e scorte su carta o in fogli sparsi: gli articoli finiscono e i numeri non tornano mai.',
      solution: 'Una dashboard web con backend Python e database: aggiungi e modifica prodotti, cercali e filtrali, e vedi sempre cosa c’è in magazzino.',
      features: ['Gestione prodotti', 'Inserimento e modifica articoli', 'Ricerca e filtri', 'Quantità disponibili'],
    },
    'python-automation': {
      title: 'Automazione Python', role: 'Sviluppo',
      text: 'Ordina i file, li rinomina in blocco, elabora i documenti e scrive un report.',
      problem: 'Ore perse ogni settimana a riordinare i download, rinominare file a mano e ricopiare dati dai documenti.',
      solution: 'Uno strumento Python che lo fa in pochi secondi: smista i file in cartelle, li rinomina in blocco, elabora i documenti e scrive un report chiaro.',
      features: ['Organizzazione automatica dei file', 'Rinomina multipla', 'Elaborazione dei documenti', 'Report dei risultati'],
    },
  },
  page: {
    back: '← Tutti i progetti', year: 'Anno', role: 'Ruolo', stack: 'Tecnologie', type: 'Tipo', typeValue: 'Demo personale',
    problem: 'Il problema', solution: 'La soluzione', features: 'Funzioni', demo: 'Demo online', code: 'Codice su GitHub',
    soon: 'presto', comingSoon: 'In arrivo', note: 'È un progetto dimostrativo personale, creato per mostrare come lavoro. Non è un lavoro per un cliente.',
    next: 'Progetto successivo', notFound: 'Progetto non trovato.', backHome: '← Torna ai progetti',
  },
  aboutTitle: 'Chi sono',
  aboutIntro: 'Sono Cristian, sviluppatore e designer di Roma.',
  aboutText: 'Imparo costruendo. Porto un’idea dallo schizzo al prodotto funzionante: codice pulito, un’interfaccia chiara e niente lasciato a metà.',
  skillsTitle: 'Competenze',
  skills: ['Web design', 'Front-end', 'Back-end', 'Automazioni', 'UI design'],
  toolsTitle: 'Strumenti',
  educationTitle: 'Formazione',
  education: 'Diploma tecnico in informatica (programmazione e reti), I.I.S. Pacinotti-Archimede, Roma — 2026. Ora studio Scienze chimiche alla Sapienza. Il resto lo imparo realizzando progetti veri.',
  contactTitle: ['Lavoriamo', 'insieme.'],
  form: {
    name: 'Nome', email: 'Email', project: 'Progetto', budget: 'Budget', message: 'Messaggio', send: 'Invia richiesta →',
    sending: 'Invio in corso…', sent: 'Grazie! Ti rispondo entro 24 ore.', error: 'Qualcosa è andato storto. Scrivimi a {email}.',
    subject: 'Richiesta dal portfolio: {type}',
  },
  projectTypes: ['Sito web', 'Applicazione web', 'Automazione Python', 'Design', 'Altro'],
  budgets: ['< 500 €', '500 – 1.500 €', '1.500 €+', 'Non so ancora'],
};

export const COPY = { en, it };
