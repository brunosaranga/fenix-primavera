# Fenix · Cegid Primavera partner website

React (Vite) frontend for Fenix Logistics & Services' Cegid Primavera partner site.
Visual references: incentea.com/mz, pt.primaverabss.com.

## Run

```bash
npm install
cp .env.example .env      # optional: form endpoint + WhatsApp number
npm run dev               # http://localhost:5173
npm run build             # production build in dist/
npm run preview           # serve the build locally
```

Hosting: this is a single-page app, so the server must send `index.html` for every route
(Netlify `_redirects`, Vercel rewrites, or Nginx `try_files $uri /index.html`).

## How it's organised

```
src/
├── main.jsx, App.jsx        # entry + providers (Helmet, Theme, Locale, ContactModal)
├── routes.jsx               # single source of truth: router AND navbar links
├── styles/                  # tokens.css (design system), reset, base, utilities
├── content/pt/              # ALL copy and data, no JSX
├── context/                 # Theme, Locale, ContactModal
├── hooks/                   # useContent, useScrollDirection, useInView, useMediaQuery
├── lib/                     # sendContact (form), whatsapp (wa.me links)
├── assets/                  # logos (placeholders!), icons, images
├── components/
│   ├── layout/              # Layout, Navbar (+ NavLinks, MobileMenu), Footer, PageHeader, Seo
│   ├── ui/                  # Button, Card, Chip, Tabs, Modal, SectionHeader, Icon, Logo,
│   │                        # PartnerBadge, ThemeToggle, LocaleToggle
│   ├── forms/               # ContactForm, ContactModal
│   └── sections/            # one per Canva frame: Hero, PainPoints, IdentityBand, Benefits,
│                            # Comparison, ProcessTimeline, Proof, CtaBand
└── pages/                   # Home, About, Solutions, SolutionDetail, PublicSector,
                             # Training, HowToChoose, Contact, NotFound
```

Rules of thumb:

- **Copy lives in `content/pt/`.** Never hard-code text in a component.
- **Components only use semantic tokens** (`--surface`, `--text`, `--primary`, `--accent`…).
  Raw colours (`--navy-800`…) stay inside `tokens.css`. Dark mode = remapping semantic tokens.
- **Pages compose sections; sections use `ui/` pieces.**
- **Icons by name**: content says `icon: "costs"`; `ui/Icon` maps names to lucide-react icons.
  Swap the mapping there to use Fenix's own icons.

## Key behaviours

| Feature | Where |
| --- | --- |
| Navbar shrinks on scroll down, expands on scroll up / hover (150 ms delay) / keyboard focus; wordmark cross-fades to square logo | `layout/Navbar`, `hooks/useScrollDirection`, `ui/Logo` |
| Mobile menu (< 900px) | `layout/Navbar/MobileMenu.jsx` |
| Dark mode without flash (inline script in `index.html`) | `index.html`, `context/ThemeContext` |
| One contact modal for every "Agendar diagnóstico" | `context/ContactModalContext`, `forms/ContactModal` |
| Cloud vs On-Premise / Subscrição vs Perpétua: tabs, clickable cards, details modal | `sections/Comparison` (`variant="compact"` on home, `"full"` on `/como-escolher`) |
| "Resultados reais" hides itself while `proof.js` arrays are empty | `sections/Proof`, `content/pt/proof.js` |
| Per-page `<title>` / meta | `layout/Seo` (react-helmet-async) |

## TODO before delivery (22/10)

**Needs from Fenix**
- [ ] Official logos as SVG: wordmark (colour + white) and square mark → `src/assets/logos/` (same file names)
- [ ] Cegid Partner Bronze badge (PartnerSpace) → set `partnerBadge.image` in `content/pt/common.js`
- [ ] Hero image (+ licence/source) → set `hero.image` in `content/pt/home.js`
- [ ] Contact details (address, phone, email, hours) → `content/pt/contact.js`
- [ ] WhatsApp number + form destination → `.env`
- [ ] Confirm: free diagnostic? public sector offering? training offering? FAQ answers
- [ ] Real testimonials / stats / client logos (with written permission) → `content/pt/proof.js`
- [ ] Solution descriptions and official product names → `content/pt/solutions.js`
- [ ] Privacy page content (footer links to `/privacidade`)

**Build**
- [ ] Confirm the Canva fonts and replace `--font-sans` / `--font-mono` in `tokens.css` + the Google Fonts link in `index.html`
- [ ] Inner pages: About, Setor Público, Formação, Solution detail
- [ ] Optional: "Qual é a melhor opção para si?" quiz on `/como-escolher`
- [ ] Prerender at build time for SEO (e.g. `vite-plugin-prerender` or similar)
- [ ] `public/og-image.jpg` (1200×630) for link previews
