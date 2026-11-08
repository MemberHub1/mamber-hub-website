import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Download, ExternalLink, MessageCircle, Menu, X, Check,
  Smartphone, Monitor, Globe, Languages, ShieldCheck, LifeBuoy, RefreshCw
} from "lucide-react";
import {
  APP_VERSION, COMPANY_NAME, COMPANY_LOGO_WHITE, SCHOOL_ICON, SCHOOL_VERSION,
  SCHOOL_WEB_URL, SCHOOL_WIN_URL, SCHOOL_WIN_READY, SUPPORT_PHONE, WHATSAPP_URL,
  DOWNLOAD_URL, DOWNLOAD_LABEL, QZ_LOGO, QZ_VERSION
} from "../links";
import { QzGetButton } from "./Qissabaaz";
import SiteFooter from "./SiteFooter";

const apps = [
  {
    id: "mamber-hub",
    name: "Mamber Hub",
    logo: "/assets/mamber-hub-logo.png",
    tagline: "Membership app for communities",
    text: "Members watch member videos with a Basic or Premium plan, pay with EasyPaisa or JazzCash and follow the verification, get notifications and renewal reminders, invite friends and chat with the admin for help.",
    platforms: [{ icon: Smartphone, label: "Android" }],
    version: `Version ${APP_VERSION}`,
    highlights: ["Member video library", "Payment verification & notifications", "Refer & Earn invite links", "Admin dashboard & collection analytics"],
    page: "/mamber-hub",
    actions: [{ label: DOWNLOAD_LABEL, href: DOWNLOAD_URL, icon: Download, primary: true }],
  },
  {
    id: "school",
    name: "School Management System",
    logo: SCHOOL_ICON,
    tagline: "Complete school software in English & Urdu",
    text: "Admissions, attendance, timetable, exams, fees, books and reports for your school. Use it on a Windows computer or open it on any phone as a web app.",
    platforms: [{ icon: Monitor, label: "Windows" }, { icon: Globe, label: "Web app" }],
    version: `Version ${SCHOOL_VERSION}`,
    highlights: ["Students & admissions", "Attendance & timetable", "Exams, results & fee invoices", "PDF & Excel reports"],
    page: "/school-management",
    actions: SCHOOL_WIN_READY
      ? [
          { label: "Download for Windows", href: SCHOOL_WIN_URL, icon: Download, primary: true },
          { label: "Open Web App", href: SCHOOL_WEB_URL, icon: ExternalLink },
        ]
      : [{ label: "Open Web App", href: SCHOOL_WEB_URL, icon: ExternalLink, primary: true }],
  },
  {
    id: "qissabaaz",
    name: "Qissabaaz",
    logo: QZ_LOGO,
    tagline: "Short dramas made for your phone",
    text: "Turkish, Pakistani, Indian and Chinese dramas in short episodes. Swipe up for the next one; the first episodes of every drama are free.",
    platforms: [{ icon: Smartphone, label: "Android" }],
    version: `Version ${QZ_VERSION}`,
    highlights: ["Short vertical episodes", "Free episodes, no account needed", "Basic & ad-free Premium plans", "Like, comment & share"],
    page: "/qissabaaz",
    getButton: true,
    actions: [],
  },
];

const reasons = [
  { icon: Languages, title: "English & Urdu", text: "Apps designed for Pakistan, with Urdu where it matters." },
  { icon: ShieldCheck, title: "Safe & Private", text: "Secure sign-in and clear privacy policies for every app." },
  { icon: LifeBuoy, title: "Help on WhatsApp", text: "Questions or setup help? Message us and we reply directly." },
  { icon: RefreshCw, title: "Regular Updates", text: "We keep improving our apps with new features and fixes." },
];

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  React.useEffect(() => {
    document.title = `${COMPANY_NAME} — Mamber Hub, School Management & Qissabaaz`;
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site company">
      <header className="header">
        <a className="brand" href="#top" onClick={close}>
          <img className="company-logo" src={COMPANY_LOGO_WHITE} alt={COMPANY_NAME} width="175" height="60" />
        </a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <a href="#apps" onClick={close}>Our Apps</a>
          <Link to="/mamber-hub" onClick={close}>Mamber Hub</Link>
          <Link to="/school-management" onClick={close}>School Management</Link>
          <Link to="/qissabaaz" onClick={close}>Qissabaaz</Link>
          <a href="#contact" onClick={close}>Contact</a>
          <a className="nav-cta" href="#apps" onClick={close}>Get the Apps</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero company-hero">
          <div className="hero-copy">
            <p className="eyebrow">{COMPANY_NAME.toUpperCase()}</p>
            <h1>Simple Apps for<br /><span>Real Work.</span></h1>
            <p className="hero-text">
              We build easy-to-use apps for communities, schools and small businesses —
              in English and Urdu. Pick an app below to learn more or download it today.
            </p>
            <div className="actions">
              <a className="btn primary" href="#apps">Explore Our Apps <ArrowRight size={18} /></a>
              <a className="btn outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="hero-apps" aria-hidden="true">
            {apps.map((a) => (
              <div className="hero-app" key={a.id}>
                <img src={a.logo} alt="" />
                <div>
                  <strong>{a.name}</strong>
                  <small>{a.platforms.map((p) => p.label).join(" · ")}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="apps" className="section light">
          <p className="eyebrow center">OUR APPS</p>
          <h2>Choose Your <span>App</span></h2>
          <p className="section-sub">Every app has its own page with features, install steps and support.</p>
          <div className="apps-grid">
            {apps.map((a) => (
              <article className="app-card" key={a.id}>
                <div className="app-card-head">
                  <img src={a.logo} alt={`${a.name} logo`} />
                  <div>
                    <h3>{a.name}</h3>
                    <p>{a.tagline}</p>
                  </div>
                </div>
                <div className="app-badges">
                  {a.platforms.map(({ icon: Icon, label }) => (
                    <span key={label}><Icon size={14} /> {label}</span>
                  ))}
                  <span className="muted">{a.version}</span>
                </div>
                <p className="app-text">{a.text}</p>
                <ul className="app-highlights">
                  {a.highlights.map((h) => <li key={h}><Check size={16} /> {h}</li>)}
                </ul>
                <div className="app-actions">
                  {a.getButton && <QzGetButton size={17} />}
                  {a.actions.map(({ label, href, icon: Icon, primary }) => (
                    <a key={label} className={primary ? "btn primary" : "btn dark"} href={href}>
                      <Icon size={17} /> {label}
                    </a>
                  ))}
                  <Link className="app-more" to={a.page}>Learn more <ArrowRight size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section centered">
          <p className="eyebrow center">WHY {COMPANY_NAME.split(" ")[0].toUpperCase()} DIGITAL</p>
          <h2>Built to Be <span>Simple</span></h2>
          <p className="section-sub">The same care goes into every app we make.</p>
          <div className="feature-grid">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="cta">
          <div>
            <p className="eyebrow">NEED AN APP OR HELP?</p>
            <h2>Talk to Us on WhatsApp</h2>
            <p>Questions about our apps, setup help for your school or community — we are one message away.</p>
          </div>
          <a className="btn white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> {SUPPORT_PHONE}
          </a>
        </section>
      </main>

      <SiteFooter variant="company" />
    </div>
  );
}
