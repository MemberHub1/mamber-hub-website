import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, MessageCircle, Smartphone, Users, WifiOff } from "lucide-react";
import PageTopBar from "./PageTopBar";
import SiteFooter from "./SiteFooter";
import { BP_NAME, COMPANY_NAME, SUPPORT_PHONE, WA_BURGER_POINT } from "../links";

const features = [
  { icon: WifiOff, title: "Works offline", text: "Keeps running without internet, so the shop never has to stop." },
  { icon: Smartphone, title: "Mobile and computer", text: "Use it on a phone or a computer, whichever you have at the counter." },
  { icon: Users, title: "One user runs everything", text: "A single person can handle the whole system from start to finish." },
  { icon: Monitor, title: "No install needed", text: "It opens in the browser as a single file." },
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
