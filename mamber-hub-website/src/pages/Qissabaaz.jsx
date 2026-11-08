import React from "react";
import { Link } from "react-router-dom";
import {
  Film, Globe, Gift, Search, Bookmark, Heart, Upload, ShieldCheck, Download, Smartphone,
  Menu, X, Check, ArrowRight, Clock, Trash2, FileText
} from "lucide-react";
import {
  COMPANY_NAME, QZ_LOGO, QZ_VERSION, QZ_PLAY_URL, QZ_APK_URL, QZ_PLANS, SUPPORT_EMAIL, MIN_ANDROID
} from "../links";
import SiteFooter from "./SiteFooter";

// Google Play button; the Play-signed APK while the store listing is not live yet; else "coming soon".
export function QzGetButton({ className = "btn primary", size = 19 }) {
  if (QZ_PLAY_URL) {
    return <a className={className} href={QZ_PLAY_URL} target="_blank" rel="noreferrer"><Smartphone size={size} /> Get it on Google Play</a>;
  }
  if (QZ_APK_URL) {
    return <a className={className} href={QZ_APK_URL}><Download size={size} /> Download APK</a>;
  }
  return (
    <span className={className + " is-disabled"} aria-disabled="true">
      <Clock size={size} /> Coming soon on Google Play
    </span>
  );
}

const features = [
  { icon: Film, title: "Short Episodes", text: "Full-screen vertical episodes. Swipe up and the next one starts at once." },
  { icon: Globe, title: "4 Countries", text: "Turkish, Pakistani, Indian and Chinese dramas in one app." },
  { icon: Gift, title: "Free to Start", text: "The first episodes of every drama are free, with no account needed." },
  { icon: Search, title: "Discover", text: "Search and find new dramas to watch." },
  { icon: Bookmark, title: "My List", text: "Save dramas and continue where you stopped." },
  { icon: Heart, title: "Like, Comment, Share", text: "Share your favourite episodes with friends and family." },
];

const policies = [
  { to: "/qissabaaz/privacy-policy", icon: ShieldCheck, label: "Privacy Policy" },
  { to: "/qissabaaz/terms", icon: FileText, label: "Terms of Use" },
  { to: "/qissabaaz/child-safety", icon: ShieldCheck, label: "Child Safety Standards" },
  { to: "/qissabaaz/delete-account", icon: Trash2, label: "Delete Account" },
];

export default function Qissabaaz() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  React.useEffect(() => {
    document.title = "Qissabaaz — Short Dramas from Turkey, Pakistan, India & China";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site qissabaaz">
      <header className="header">
        <a className="brand" href="#top" onClick={close}>
          <img className="brand-logo" src={QZ_LOGO} alt="Qissabaaz logo" />
          <span>
            <strong>Qissa<em>baaz</em></strong>
            <small>by {COMPANY_NAME}</small>
          </span>
        </a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <a href="#features" onClick={close}>Features</a>
          <a href="#pricing" onClick={close}>Plans</a>
          <a href="#creators" onClick={close}>Creators</a>
          <a href="#safety" onClick={close}>Privacy &amp; Safety</a>
          <Link to="/" onClick={close}>All Apps</Link>
          <a className="nav-cta" href="#get" onClick={close}>Get the App</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero qz-hero" id="get">
          <div className="hero-copy">
            <p className="eyebrow">QISSABAAZ · SHORT DRAMAS</p>
            <h1>Short Dramas,<br /><span>Big Stories.</span></h1>
            <p className="urdu-line" lang="ur" dir="rtl">مختصر ڈرامے، بڑی کہانیاں</p>
            <p className="hero-text">
              Turkish, Pakistani, Indian and Chinese dramas in short episodes made for your phone.
              Open the app and the first episode starts right away. Swipe up for the next one.
            </p>
            <div className="actions">
              <QzGetButton />
              <a className="btn outline" href="#pricing">See Plans <ArrowRight size={18} /></a>
            </div>
            <p className="qz-meta">Android · {MIN_ANDROID} · Version {QZ_VERSION}</p>
          </div>
          <div className="qz-logo-hero">
            <img src={QZ_LOGO} alt="Qissabaaz app" width="360" height="360" />
          </div>
        </section>

        <section id="features" className="section light">
          <p className="eyebrow center">FEATURES</p>
          <h2>Made for <span>Swiping</span></h2>
          <p className="section-sub">Everything you need to enjoy a full story in a few minutes a day.</p>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="section">
          <p className="eyebrow center">PLANS</p>
          <h2>Pick Your <span>Plan</span></h2>
          <p className="section-sub">Prices per 30 days. Pay inside the app with Google Play.</p>
          <div className="plans-grid qz-plans">
            {QZ_PLANS.map((p) => (
              <article className={p.id === "premium" ? "plan-card premium" : "plan-card"} key={p.id}>
                {p.badge && <span className="plan-badge">{p.badge}</span>}
                <h3>{p.name}</h3>
                <p className="plan-tagline">{p.tagline}</p>
                <div className="plan-price">
                  {p.price === 0 ? <strong>Free</strong> : (<><span>Rs.</span><strong>{p.price}</strong><small>/ month</small></>)}
                </div>
                <ul className="plan-features">
                  {p.features.map((f) => <li key={f}><Check size={17} /> {f}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="plans-note">
            Basic and Premium are Google Play subscriptions that renew every month until you cancel them in
            Play Store → Payments &amp; subscriptions. The Premium free trial is for new subscribers; cancel
            before it ends and you pay nothing.
          </p>
        </section>

        <section id="creators" className="cta">
          <div>
            <p className="eyebrow">FOR CREATORS</p>
            <h2>Have Dramas to Share?</h2>
            <p>
              Ask to become a creator from your Profile in the app. After approval, upload your episodes in
              Creator Studio. Every drama is reviewed before it goes live.
            </p>
          </div>
          <a className="btn white" href={`mailto:${SUPPORT_EMAIL}?subject=Qissabaaz%20creator`}>
            <Upload size={19} /> Contact Us
          </a>
        </section>

        <section id="safety" className="section light">
          <p className="eyebrow center">PRIVACY &amp; SAFETY</p>
          <h2>Safe and <span>Respectful</span></h2>
          <p className="section-sub">
            Report any episode or comment, or hide dramas from any uploader. Our team reviews every report.
          </p>
          <div className="qz-policy-links">
            {policies.map(({ to, icon: Icon, label }) => (
              <Link key={to} to={to} className="btn dark"><Icon size={17} /> {label}</Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter variant="company" />
    </div>
  );
}
