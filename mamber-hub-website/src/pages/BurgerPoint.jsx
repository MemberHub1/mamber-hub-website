import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Monitor, MessageCircle, Smartphone, Users, WifiOff } from "lucide-react";
import PageTopBar from "./PageTopBar";
import SiteFooter, { SOCIAL_ICONS, SOCIAL_COLORS } from "./SiteFooter";
import {
  BP_APK_URL, BP_COMPUTER_URL, BP_NAME, COMPANY_NAME, SOCIAL_LINKS, SUPPORT_PHONE, WA_BURGER_POINT,
} from "../links";

const features = [
  { icon: WifiOff, title: "Works offline", text: "Keeps running without internet, so the shop never has to stop." },
  { icon: Smartphone, title: "Mobile and computer", text: "Use it on a phone or a computer, whichever you have at the counter." },
  { icon: Users, title: "One user runs everything", text: "A single person can handle the whole system from start to finish." },
  { icon: Monitor, title: "Computer version", text: "Open it from its folder with one double-click. It runs in Chrome or Edge." },
];

const downloads = [
  { href: BP_APK_URL, label: "Download for Android", note: "APK file, 3.5 MB" },
  { href: BP_COMPUTER_URL, label: "Download for Computer", note: "Windows zip, 27 KB" },
];

const installSteps = [
  { title: "Android", text: "Download the APK, open it, and allow installation from this source. Then open Burger Point." },
  { title: "Computer", text: "Download the zip and extract it into a permanent folder such as D:\\BurgerPoint, not Downloads. Double-click \"Burger Point Kholein\"." },
  { title: "First time", text: "On the computer, send your Device ID to us on WhatsApp, enter the code you get back, and fill in your shop details." },
];

export default function BurgerPoint() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site company">
      <PageTopBar />
      <main>
        <section className="hero company-hero">
          <div className="hero-copy">
            <p className="eyebrow">{COMPANY_NAME.toUpperCase()}</p>
            <h1>{BP_NAME}<br /><span>Food POS for Your Shop</span></h1>
            <p className="hero-text">
              An offline point-of-sale app for pizza and burger shops. Run your orders and sales
              from a phone or a computer, even when the internet is down.
            </p>
            <div className="actions">
              <a className="btn primary" href={WA_BURGER_POINT} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Ask for a Demo on WhatsApp
              </a>
              <Link className="btn outline" to="/">All Our Apps <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="section light">
          <p className="eyebrow center">FEATURES</p>
          <h2>Built for <span>Busy Shops</span></h2>
          <p className="section-sub">Simple enough for one person to run, and it keeps working without internet.</p>
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

        <section id="download" className="section light">
          <p className="eyebrow center">GET THE SOFTWARE</p>
          <h2>Download <span>Burger Point</span></h2>
          <p className="section-sub">Install it on an Android phone or a Windows computer.</p>
          <div className="actions" style={{ justifyContent: "center" }}>
            {downloads.map(({ href, label }) => (
              <a key={label} className="btn primary" href={href} download><Download size={19} /> {label}</a>
            ))}
          </div>
          <div className="mh-meta" style={{ justifyContent: "center", marginTop: 14 }}>
            {downloads.map(({ label, note }) => <span key={label}>{label}: {note}</span>)}
          </div>
          <div className="feature-grid" style={{ marginTop: 34 }}>
            {installSteps.map(({ title, text }) => (
              <article className="feature-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section centered">
          <p className="eyebrow center">FOLLOW US</p>
          <h2>Stay <span>Connected</span></h2>
          <p className="section-sub">News, new videos and offers on our social accounts.</p>
          <div className="mh-follow">
            {SOCIAL_LINKS.map(({ key, label, href }) => {
              const Icon = SOCIAL_ICONS[key];
              return (
                <a key={key} href={href} target="_blank" rel="noreferrer">
                  <span style={{ background: SOCIAL_COLORS[key] }}><Icon size={16} /></span> {label}
                </a>
              );
            })}
          </div>
        </section>

        <section className="cta">
          <div>
            <p className="eyebrow">WANT TO SEE IT?</p>
            <h2>Get a Demo on WhatsApp</h2>
            <p>Message us and we will show you how Burger Point works for your shop.</p>
          </div>
          <a className="btn white" href={WA_BURGER_POINT} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> {SUPPORT_PHONE}
          </a>
        </section>
      </main>
      <SiteFooter variant="company" />
    </div>
  );
}
