import React from "react";
import { createRoot } from "react-dom/client";
import {
  
  ArrowRight, Download, Users, CreditCard, PlayCircle, BarChart3,
  ShieldCheck, Smartphone, CheckCircle2, MessageCircle, Menu, X
} from "lucide-react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";
const features = [
  { icon: Users, title: "Member Management", text: "Add, view and manage all your members easily." },
  { icon: CreditCard, title: "Payment Management", text: "Track paid and unpaid memberships with ease." },
  { icon: PlayCircle, title: "Video Gallery", text: "Share and manage videos for your members." },
  { icon: BarChart3, title: "Admin Dashboard", text: "Get complete insights and reports in one place." }
];

const steps = [
  ["01", "Register", "Create your account and sign up as a member."],
  ["02", "Admin Approval", "Your account will be verified by admin."],
  ["03", "Membership Payment", "Make the payment and activate your membership."],
  ["04", "Access Mamber Hub", "Enjoy videos and all member benefits."]
];

function App() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

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
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#download" onClick={closeMenu}>Get Started</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">ALL-IN-ONE MEMBERSHIP SOLUTION</p>
            <h1>Manage Your Members.<br /><span>Simplify Your Business.</span></h1>
            <p className="hero-text">
              Mamber Hub is a modern membership management platform where you can
              manage members, payments, videos and membership activities — all in one place.
            </p>
            <div className="actions">
<a
  className="btn primary"
  href="https://github.com/MemberHub1/mamber-hub-website/releases/latest/download/app-debug.apk"
  download
>
  <Download size={19}/> Download App
</a>              <a className="btn outline" href="#features">Get Started <ArrowRight size={18}/></a>
            </div>
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
          <p className="section-sub">Mamber Hub gives you the tools to manage your membership business efficiently.</p>
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
            <a className="btn primary" href="#contact"><Download size={19}/> Download App</a>
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
          <p className="section-sub">Plans can be connected to your actual Mamber Hub pricing later.</p>
          <div className="price-card">
            <div><h3>Monthly Membership</h3><p>Everything your members need to stay connected.</p></div>
            <div className="price">Rs. <strong>1,000</strong><small>/ month</small></div>
            <a className="btn primary" href="#contact">Get Started <ArrowRight size={18}/></a>
          </div>
        </section>

        <section id="contact" className="cta">
          <div>
            <p className="eyebrow">READY TO GET STARTED?</p>
            <h2>Manage Your Members Smarter Today!</h2>
            <p>Join Mamber Hub and take your membership business to the next level.</p>
          </div>
          <a className="btn white" href="https://wa.me/923187630194" target="_blank" rel="noreferrer"><MessageCircle size={19}/> Contact on WhatsApp</a>
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
      Mamber Hub is a modern membership management platform designed
      to make your business simple, organized and successful.
    </p>
  </div>

  <div>
    <h4>Quick Links</h4>

    <a href="#home">Home</a>
    <a href="#features">Features</a>
    <a href="#how">How It Works</a>
    <a href="#pricing">Pricing</a>

    <Link to="/about">About Us</Link>
  </div>

  <div>
    <h4>Support</h4>

    <Link to="/contact">Help Center</Link>
    <Link to="/privacy-policy">Privacy Policy</Link>
    <Link to="/terms">Terms & Conditions</Link>
    <Link to="/contact">Contact Us</Link>
  </div>

  <div>
    <h4>Follow Us</h4>
    <p className="socials">● &nbsp; ◎ &nbsp; ▶ &nbsp; ♪</p>
    <p>WhatsApp: +92 318 7630194</p>
  </div>

  <div className="copyright">
    © 2026 Mamber Hub. All rights reserved.
  </div>
</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/contact" element={<ContactUs />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="/terms" element={<TermsConditions />} />
    </Routes>
  </BrowserRouter>
);