import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Download, Users, CreditCard, PlayCircle, BarChart3,
  ShieldCheck, MessageCircle, Music2, Menu, X, Instagram, Facebook, Mail,
  Crown, Check, Gift, Bell, LayoutDashboard, ChevronDown
} from "lucide-react";

import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";
import DeleteAccount from "./pages/DeleteAccount";
import Home from "./pages/Home";
import SchoolManagement from "./pages/SchoolManagement";
import SchoolPrivacy from "./pages/SchoolPrivacy";
import {
  APK_URL, APP_VERSION, APP_SIZE, MIN_ANDROID, PLANS,
  SOCIAL_LINKS, SUPPORT_EMAIL, WHATSAPP_URL
} from "./links";

const features = [
  { icon: LayoutDashboard, title: "Member Dashboard", text: "See your plan, membership status and expiry date at a glance." },
  { icon: PlayCircle, title: "Video Library", text: "Watch all member videos, streamed securely inside the app." },
  { icon: Crown, title: "Basic & Premium Plans", text: "Pick the ad-supported Basic plan or go ad-free with Premium." },
  { icon: CreditCard, title: "Easy Payments", text: "Pay with EasyPaisa or JazzCash and upload your payment proof in the app." },
  { icon: Gift, title: "Referral Codes", text: "Every member gets a personal code (MBR001, MBR002…) to invite friends." },
  { icon: Bell, title: "Instant Notifications", text: "Get updates about payments, plans and new videos right away." },
  { icon: ShieldCheck, title: "Secure Sign-in", text: "Sign up with email or Google. Your Gmail is verified once to protect your account." },
  { icon: BarChart3, title: "Admin Dashboard", text: "Admins see real member counts, collections, payments and account tools." }
];

const steps = [
  ["01", "Download & Register", "Install the app and sign up with your email or your Google account."],
  ["02", "Verify Your Gmail", "Confirm your email once. After that you go straight to your dashboard."],
  ["03", "Choose a Plan", "Open Videos, pick Basic or Premium, then pay and upload your payment proof."],
  ["04", "Enjoy Mamber Hub", "As soon as your payment is verified, all member videos unlock."]
];

const faqs = [
  ["Is the Mamber Hub app free to download?",
    "Yes. Downloading the app, creating an account and using your dashboard are free. You only pay when you choose a Basic or Premium plan to watch member videos."],
  ["What is the difference between Basic and Premium?",
    "Both plans unlock all member videos for 30 days. Basic shows ads in the app. Premium removes all ads."],
  ["How do I pay for a plan?",
    "Choose a plan in the app, pay with EasyPaisa or JazzCash, and upload a screenshot of your payment. Your plan becomes active once the admin verifies the payment."],
  ["Does my plan renew automatically?",
    "No. Nothing is charged automatically. When your 30 days end, you can renew from the app whenever you want."],
  ["I get “App not installed” when I install the APK. What should I do?",
    "Uninstall any older Mamber Hub app from your phone first, then install the new APK again."],
  ["How can I delete my account?",
    "Open the app, go to Profile and tap “Delete my account”. You can also ask us by email or WhatsApp."]
];

function MamberHubLanding() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  React.useEffect(() => {
    document.title = "Mamber Hub — Members Together, Growth Forever";
    const hash = window.location.hash;
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0);
    else window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img className="brand-logo" src="/assets/mamber-hub-logo.png" alt="Mamber Hub logo" />
          <span>
            <strong>Mamber <em>Hub</em></strong>
            <small>Members Together, Growth Forever</small>
          </span>
        </a>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={open ? "nav open" : "nav"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how" onClick={closeMenu}>How It Works</a>
          <a href="#pricing" onClick={closeMenu}>Plans</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <Link to="/" onClick={closeMenu}>All Apps</Link>
          <a className="nav-cta" href="#install" onClick={closeMenu}>Get Started</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">ALL-IN-ONE MEMBERSHIP SOLUTION</p>
            <h1>Join. Watch.<br /><span>Grow Together.</span></h1>
            <p className="hero-text">
              Mamber Hub is the membership app for our community. Sign up in minutes,
              verify your Gmail, choose a Basic or Premium plan and unlock every member
              video — while admins manage members and payments in one place.
            </p>
            <div className="actions">
              <a className="btn primary" href={APK_URL}>
                <Download size={19}/> Download App
              </a>
              <a className="btn outline" href="#pricing">See Plans <ArrowRight size={18}/></a>
            </div>
            <p className="version-line">
              Latest version {APP_VERSION} · {MIN_ANDROID} · {APP_SIZE}
            </p>
            <div className="trust-row">
              <span><ShieldCheck size={21}/> Secure & Reliable</span>
              <span><Users size={21}/> Easy to Use</span>
              <span><BarChart3 size={21}/> Built for Growth</span>
            </div>
          </div>

          <div className="phones real-app-preview" aria-label="Mamber Hub app screenshots">
            <div className="phone-image back-image">
              <img src="/assets/app-dashboard.jpg" alt="Mamber Hub admin dashboard" />
            </div>
            <div className="phone-image front-image">
              <img src="/assets/app-members.jpg" alt="Mamber Hub members screen" />
            </div>
          </div>
        </section>

        <section id="features" className="section light">
          <p className="eyebrow center">POWERFUL FEATURES</p>
          <h2>Everything You Need in <span>One App</span></h2>
          <p className="section-sub">Everything members and admins use every day, built into one simple Android app.</p>
          <div className="feature-grid">
            {features.map(({icon: Icon, title, text}) => (
              <article className="feature-card" key={title}>
                <div className="icon"><Icon size={25}/></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

<section id="install" className="section install-section">
  <p className="eyebrow center">GET STARTED</p>
  <h2>How to Install <span>Mamber Hub</span></h2>
  <p className="section-sub">
    Download and install the Mamber Hub Android app in a few simple steps.
    Version {APP_VERSION} · {MIN_ANDROID} · {APP_SIZE}
  </p>

  <div className="install-steps">

    <div className="install-step">
      <div className="install-num">01</div>
      <div className="install-icon">📥</div>
      <h3>Download APK</h3>
      <p>
        Click the Download App button and download the Mamber Hub APK
        to your Android phone.
      </p>
    </div>

    <div className="install-step">
      <div className="install-num">02</div>
      <div className="install-icon">📱</div>
      <h3>Open the APK</h3>
      <p>
        Open the downloaded APK from your phone's Downloads folder.
      </p>
    </div>

    <div className="install-step">
      <div className="install-num">03</div>
      <div className="install-icon">⚙️</div>
      <h3>Allow Installation</h3>
      <p>
        If Android asks for permission, allow installation from this source
        and continue.
      </p>
    </div>

    <div className="install-step">
      <div className="install-num">04</div>
      <div className="install-icon">✅</div>
      <h3>Install & Enjoy</h3>
      <p>
        Tap Install, open Mamber Hub, and start using your member benefits.
      </p>
    </div>

  </div>

  <div className="install-action">
    <a className="btn primary" href={APK_URL}>
      <Download size={19} /> Download Mamber Hub APK
    </a>
    <p className="install-note">
      Have an older Mamber Hub app on your phone? Uninstall it first, then install
      this version.
    </p>
  </div>
</section>
 <section id="how" className="section process">
          <p className="eyebrow center">SIMPLE PROCESS</p>
          <h2>How Mamber Hub <span>Works</span></h2>
          <p className="section-sub">Get started in just a few simple steps.</p>
          <div className="steps">
            {steps.map(([num, title, text]) => (
              <div className="step" key={num}>
                <div className="step-num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="preview section">
          <div className="preview-copy">
            <p className="eyebrow">APP PREVIEW</p>
            <h2>A Closer Look at <span>Mamber Hub</span></h2>
            <p>Modern, clean and easy-to-use interface designed for a smooth membership experience.</p>
            <a className="btn primary" href={APK_URL}><Download size={19}/> Download App</a>
          </div>
          <div className="screens">
            <div className="screen-card"><img src="/assets/app-account-type.jpg" alt="Mamber Hub account type screen" /><small>Account Type</small></div>
            <div className="screen-card"><img src="/assets/app-dashboard.jpg" alt="Mamber Hub admin dashboard" /><small>Admin Dashboard</small></div>
            <div className="screen-card"><img src="/assets/app-members.jpg" alt="Mamber Hub members screen" /><small>Members</small></div>
            <div className="screen-card"><img src="/assets/app-payments.jpg" alt="Mamber Hub payment history" /><small>Payments</small></div>
            <div className="screen-card"><img src="/assets/app-reports.jpg" alt="Mamber Hub analytics report" /><small>Reports</small></div>
          </div>
        </section>

        <section id="pricing" className="pricing section">
          <p className="eyebrow center">SIMPLE & TRANSPARENT</p>
          <h2>Membership <span>Plans</span></h2>
          <p className="section-sub">
            Two simple plans, each for 30 days. No hidden charges and no automatic renewal.
          </p>
          <div className="plans-grid">
            {PLANS.map((plan) => {
              const premium = plan.id === "premium";
              return (
                <article className={premium ? "plan-card premium" : "plan-card"} key={plan.id}>
                  {plan.badge && <span className="plan-badge"><Crown size={14}/> {plan.badge}</span>}
                  <h3>{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                  <div className="plan-price">
                    <span>Rs.</span>
                    <strong>{plan.price.toLocaleString("en-PK")}</strong>
                    <small>/ {plan.days} days</small>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((f) => (
                      <li key={f}><Check size={17}/> {f}</li>
                    ))}
                  </ul>
                  <a className={premium ? "btn primary" : "btn dark"} href={APK_URL}>
                    <Download size={18}/> Get {plan.name} in the App
                  </a>
                </article>
              );
            })}
          </div>
          <p className="plans-note">
            Subscribe from the Videos section of the app. Pay with EasyPaisa or JazzCash and
            upload your payment proof. Your plan starts as soon as the admin verifies your payment.
          </p>
        </section>

        <section id="faq" className="section faq">
          <p className="eyebrow center">HAVE QUESTIONS?</p>
          <h2>Frequently Asked <span>Questions</span></h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details className="faq-item" key={q}>
                <summary>{q}<ChevronDown size={18}/></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="cta">
          <div>
            <p className="eyebrow">READY TO GET STARTED?</p>
            <h2>Join Mamber Hub Today!</h2>
            <p>Download the app, verify your Gmail and pick the plan that suits you. Questions? Message us on WhatsApp.</p>
          </div>
          <a className="btn white" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Contact on WhatsApp</a>
        </section>
      </main>

      <footer className="footer">
  <div>
    <div className="brand footer-brand">
      <img
        className="brand-logo"
        src="/assets/mamber-hub-logo.png"
        alt="Mamber Hub logo"
      />

      <span>
        <strong>Mamber <em>Hub</em></strong>
        <small>Members Together, Growth Forever</small>
      </span>
    </div>

    <p>
      Mamber Hub is a membership app for members and admins: videos,
      Basic and Premium plans, payments and members in one place.
    </p>
  </div>

  <div>
    <h4>Quick Links</h4>

    <a href="#home">Home</a>
    <a href="#features">Features</a>
    <a href="#how">How It Works</a>
    <a href="#pricing">Plans</a>
    <a href="#faq">FAQ</a>
    <a href={APK_URL}>Download App</a>

    <Link to="/about">About Us</Link>
    <Link to="/">All Apps</Link>
  </div>

  <div>
    <h4>Support</h4>

    <Link to="/contact">Help Center</Link>
    <Link to="/privacy-policy">Privacy Policy</Link>
    <Link to="/terms">Terms & Conditions</Link>
    <Link to="/delete-account">Delete Account</Link>
    <Link to="/contact">Contact Us</Link>
  </div>

  <div>
    <h4>Follow Us</h4>

    <div className="socials">
      {SOCIAL_LINKS.map(({ key, label, href }) => {
        const Icon = { instagram: Instagram, facebook: Facebook, whatsapp: MessageCircle, tiktok: Music2 }[key];
        return (
          <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={`Mamber Hub on ${label}`} title={label}>
            <Icon size={18} /> <span>{label}</span>
          </a>
        );
      })}
      <a href={`mailto:${SUPPORT_EMAIL}`} aria-label="Email Mamber Hub" title="Email">
        <Mail size={18} /> <span>Email</span>
      </a>
    </div>
  </div>

  <div className="copyright">
    © 2026 Mamber Hub by Mamber Digital Solutions. All rights reserved.
  </div>
</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/mamber-hub" element={<MamberHubLanding />} />

      <Route path="/school-management" element={<SchoolManagement />} />

      <Route path="/school-management/privacy-policy" element={<SchoolPrivacy />} />

      <Route path="/contact" element={<ContactUs />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="/terms" element={<TermsConditions />} />

      <Route path="/delete-account" element={<DeleteAccount />} />

      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);