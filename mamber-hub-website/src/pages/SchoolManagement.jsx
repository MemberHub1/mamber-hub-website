import React from "react";
import { Link } from "react-router-dom";
import {
  Users, CalendarCheck, CalendarDays, ClipboardList, Receipt, BookOpen,
  FileSpreadsheet, LayoutDashboard, Languages, WifiOff, Download, ExternalLink,
  Monitor, Smartphone, HardDrive, Printer, AlertTriangle, MessageCircle, Menu, X,
  Check, ChevronDown, ArrowLeft, Mail, ShieldCheck, Clock
} from "lucide-react";
import {
  COMPANY_NAME, SCHOOL_ICON, SCHOOL_LOGO_WIDE, SCHOOL_VERSION, SCHOOL_WEB_URL, SCHOOL_WIN_SIZE,
  SCHOOL_WIN_URL, SCHOOL_WIN_READY, SUPPORT_EMAIL, WHATSAPP_URL,
  SCHOOL_DEMO_DAYS, SCHOOL_PRICE_PKR, SCHOOL_PAY_NUMBER
} from "../links";

// Windows download button, or a "coming soon" badge until the new installer is published.
function WinButton({ className = "btn primary", label = "Download for Windows", size = 19 }) {
  if (!SCHOOL_WIN_READY) {
    return (
      <span className={className + " is-disabled"} aria-disabled="true">
        <Monitor size={size} /> Windows app — coming soon
      </span>
    );
  }
  return <a className={className} href={SCHOOL_WIN_URL}><Download size={size} /> {label}</a>;
}

const features = [
  { icon: Users, title: "Students & Admissions", text: "Register new admissions and keep every student's record by class and section." },
  { icon: CalendarCheck, title: "Attendance", text: "Mark daily attendance quickly and keep a full attendance log." },
  { icon: CalendarDays, title: "Timetable", text: "Build class timetables for every class, subject and teacher." },
  { icon: ClipboardList, title: "Exams & Results", text: "Enter marks, prepare results and print detailed report cards." },
  { icon: Receipt, title: "Fee Management", text: "Set the fee structure, record payments and print fee invoices." },
  { icon: BookOpen, title: "Books & Sales", text: "Keep book stock and print invoices for book sales." },
  { icon: FileSpreadsheet, title: "Reports", text: "Export reports to PDF and Excel to print or share." },
  { icon: LayoutDashboard, title: "Dashboard", text: "See students, fees and attendance at a glance with charts." },
  { icon: Languages, title: "English & Urdu", text: "Switch the whole app between English and Urdu in one tap." },
  { icon: WifiOff, title: "Works Offline", text: "No internet needed for daily work once the app is installed." },
];

const versions = [
  {
    id: "windows",
    icon: Monitor,
    name: "Windows App",
    badge: "Recommended for the school office",
    points: [
      "Installs on any Windows 10 or 11 computer",
      "Works fully offline",
      "Backup & restore all school data",
      "Print invoices, results and reports",
    ],
    note: `Version ${SCHOOL_VERSION} · ${SCHOOL_WIN_SIZE}`,
    action: { label: "Download for Windows", href: SCHOOL_WIN_URL, icon: Download },
  },
  {
    id: "web",
    icon: Smartphone,
    name: "Web App",
    badge: "For phones, tablets & any computer",
    points: [
      "Opens in Chrome or Safari — nothing to download",
      "Add it to your home screen like an app",
      "Works offline after the first visit",
      "Same features, in English and Urdu",
    ],
    note: "Data is saved only in that browser on that device.",
    action: { label: "Open Web App", href: SCHOOL_WEB_URL, icon: ExternalLink },
  },
];

const PRICE = `Rs. ${SCHOOL_PRICE_PKR.toLocaleString("en-PK")}`;

const faqs = [
  ["How much does it cost?",
    `The first ${SCHOOL_DEMO_DAYS} days are a free demo. After that the subscription is ${PRICE} per month. Pay by EasyPaisa or JazzCash to ${SCHOOL_PAY_NUMBER}, then send the payment screenshot and your principal Gmail on WhatsApp. We activate your school for 1 month.`],
  ["What happens when the demo or the month ends?",
    "The app locks until the next month is paid. Your school data is not deleted — it stays saved on your device and opens again as soon as the subscription is renewed."],
  ["How do the principal and teachers sign in?",
    "The login page has two tabs. Principal: sign in with Google, or with email and password — a verification link is sent to the email, and the dashboard opens only after it is clicked. The first verified account on a device becomes the Principal. Teacher: the Principal adds each teacher's email in Settings → Teachers, and the teacher logs in on that device by typing just that email."],
  ["Where is my school's data stored?",
    "On your own device. The Windows app saves data on your computer, and the web app saves it in the browser of the phone or computer you use. Student and school records are not sent to our servers — only the principal's email, the school name and the teachers' emails are kept with your subscription."],
  ["Can I use it on more than one computer or phone?",
    "Yes, but the data does not sync between devices. Each computer or phone keeps its own records. For the main school records, use one Windows computer and take backups regularly."],
  ["What if I clear my browser data?",
    "In the web app, clearing browser or site data deletes the school data saved in that browser. Keep your main records in the Windows app, which has backup and restore."],
  ["Windows says “Windows protected your PC”. Is it safe?",
    "This message appears for new apps that are not yet well known to Windows. Click “More info”, then “Run anyway” to continue the installation."],
  ["Do I need internet?",
    "Yes for signing in with Google and for checking the subscription. Daily work like attendance, fees and reports runs on your device, and the app re-checks the subscription whenever it is online."],
  ["How do I get help with setup?",
    "Message us on WhatsApp and we will help you set up your school, classes and fee structure."],
];

export default function SchoolManagement() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  React.useEffect(() => {
    document.title = "School Management System — English & Urdu school software";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site school">
      <header className="header">
        <a className="brand" href="#top" onClick={close}>
          <img className="brand-logo" src={SCHOOL_ICON} alt="School Management System logo" />
          <span>
            <strong>School <em>Management</em></strong>
            <small>by {COMPANY_NAME}</small>
          </span>
        </a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <a href="#features" onClick={close}>Features</a>
          <a href="#versions" onClick={close}>Windows & Web</a>
          <a href="#pricing" onClick={close}>Pricing</a>
          <a href="#install" onClick={close}>Install</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <Link to="/" onClick={close}>All Apps</Link>
          <a className="nav-cta" href="#versions" onClick={close}>Get the App</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero school-hero">
          <div className="hero-copy">
            <p className="eyebrow">SCHOOL MANAGEMENT SYSTEM</p>
            <h1>Run Your School<br /><span>Smarter.</span></h1>
            <p className="urdu-line" lang="ur" dir="rtl">اسکول کا سارا نظام — ایک ہی جگہ</p>
            <p className="hero-text">
              Admissions, attendance, timetable, exams, fees, books and reports — in English and
              Urdu. Install it on your school computer, or open it on any phone as a web app.
            </p>
            <div className="actions">
              <a className="btn primary" href={SCHOOL_WEB_URL}><ExternalLink size={18} /> Open Web App</a>
              <WinButton className="btn outline" size={18} />
            </div>
            <p className="version-line">
              {SCHOOL_WIN_READY
                ? `Version ${SCHOOL_VERSION} · Windows 10/11 · ${SCHOOL_WIN_SIZE} · Web app for Android & iPhone`
                : "Web app for Android, iPhone and computers · Windows app coming soon"}
            </p>
          </div>
          <div className="school-logo-hero">
            <img src={SCHOOL_LOGO_WIDE} alt="School Management System logo" />
          </div>
        </section>

        <section id="features" className="section light">
          <p className="eyebrow center">EVERYTHING YOUR SCHOOL NEEDS</p>
          <h2>One App for the <span>Whole School</span></h2>
          <p className="section-sub">From the first admission to the final report card.</p>
          <div className="feature-grid school-features">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="versions" className="section centered">
          <p className="eyebrow center">CHOOSE HOW TO USE IT</p>
          <h2>Windows App or <span>Web App</span></h2>
          <p className="section-sub">Both have the same features. Pick the one that fits how your school works.</p>
          <div className="plans-grid">
            {versions.map((v) => {
              const Icon = v.icon;
              const win = v.id === "windows";
              return (
                <article className={win ? "plan-card premium" : "plan-card"} key={v.id}>
                  {win && <span className="plan-badge"><HardDrive size={14} /> Best for daily records</span>}
                  <div className="version-head"><Icon size={26} /><h3>{v.name}</h3></div>
                  <p className="plan-tagline">{v.badge}</p>
                  <ul className="plan-features">
                    {v.points.map((p) => <li key={p}><Check size={17} /> {p}</li>)}
                  </ul>
                  <p className="version-note">{v.note}</p>
                  {win ? <WinButton size={18} /> : (
                    <a className="btn dark" href={v.action.href}>
                      <v.action.icon size={18} /> {v.action.label}
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="section light">
          <p className="eyebrow center">SIMPLE PRICING</p>
          <h2>{SCHOOL_DEMO_DAYS}-Day Free Demo, then <span>{PRICE} / month</span></h2>
          <p className="section-sub">For the Windows app and the web app. One subscription per school (principal's Gmail).</p>
          <div className="plans-grid">
            <article className="plan-card">
              <div className="version-head"><Clock size={26} /><h3>Free Demo</h3></div>
              <p className="plan-price"><strong>Rs. 0</strong> <span>/ {SCHOOL_DEMO_DAYS} days</span></p>
              <ul className="plan-features">
                <li><Check size={17} /> All features unlocked</li>
                <li><Check size={17} /> Starts when the principal first signs in with Google</li>
                <li><Check size={17} /> Add your teachers' Gmail addresses</li>
                <li><Check size={17} /> No payment needed to try</li>
              </ul>
              <a className="btn dark" href={SCHOOL_WEB_URL}><ExternalLink size={18} /> Start the free demo</a>
            </article>
            <article className="plan-card premium">
              <span className="plan-badge"><ShieldCheck size={14} /> Monthly subscription</span>
              <div className="version-head"><Receipt size={26} /><h3>School Subscription</h3></div>
              <p className="plan-price"><strong>{PRICE}</strong> <span>/ month</span></p>
              <ul className="plan-features">
                <li><Check size={17} /> Pay by EasyPaisa or JazzCash: <b>{SCHOOL_PAY_NUMBER}</b></li>
                <li><Check size={17} /> Send the screenshot and principal Gmail on WhatsApp</li>
                <li><Check size={17} /> We activate your school for 1 month</li>
                <li><Check size={17} /> Renew each month — your data is never deleted</li>
              </ul>
              <a className="btn primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Subscribe on WhatsApp</a>
            </article>
          </div>
        </section>

        <section id="install" className="section">
          <p className="eyebrow center">GET STARTED</p>
          <h2>How to <span>Install</span></h2>
          <div className="install-columns">
            <div className="install-col">
              <h3><Monitor size={20} /> On a Windows computer</h3>
              <ol>
                <li>Click <strong>Download for Windows</strong> and save the setup file ({SCHOOL_WIN_SIZE}).</li>
                <li>Open the downloaded <strong>School-Management-System-Setup</strong> file.</li>
                <li>If Windows shows “Windows protected your PC”, click <strong>More info</strong> → <strong>Run anyway</strong>.</li>
                <li>Choose the install folder, finish setup, then open the app and create your school account.</li>
              </ol>
              <WinButton size={18} />
            </div>
            <div className="install-col">
              <h3><Smartphone size={20} /> On a phone or tablet</h3>
              <ol>
                <li>Tap <strong>Open Web App</strong> in Chrome (Android) or Safari (iPhone).</li>
                <li>Android: tap <strong>⋮ → Install app</strong> or <strong>Add to Home screen</strong>.</li>
                <li>iPhone: tap <strong>Share → Add to Home Screen</strong>.</li>
                <li>Open it from your home screen and create your school account.</li>
              </ol>
              <a className="btn dark" href={SCHOOL_WEB_URL}><ExternalLink size={18} /> Open Web App</a>
            </div>
          </div>
          <div className="notice">
            <AlertTriangle size={20} />
            <p>
              Your school data stays on your own device and does not sync between devices.
              Use the Windows app's <strong>Backup</strong> option regularly to keep your records safe.
            </p>
          </div>
        </section>

        <section id="faq" className="section faq">
          <p className="eyebrow center">HAVE QUESTIONS?</p>
          <h2>Frequently Asked <span>Questions</span></h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details className="faq-item" key={q}>
                <summary>{q}<ChevronDown size={18} /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta">
          <div>
            <p className="eyebrow">NEED HELP WITH SETUP?</p>
            <h2>We Will Help You Get Started</h2>
            <p>Message us on WhatsApp for help setting up your school, classes and fee structure.</p>
          </div>
          <a className="btn white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Contact on WhatsApp
          </a>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="brand footer-brand">
            <img className="brand-logo" src={SCHOOL_ICON} alt="School Management System logo" />
            <span>
              <strong>School <em>Management</em></strong>
              <small>by {COMPANY_NAME}</small>
            </span>
          </div>
          <p>English & Urdu school management software for Windows and the web.</p>
        </div>
        <div>
          <h4>App</h4>
          <a href="#features">Features</a>
          <a href="#versions">Windows & Web</a>
          <a href="#install">Install</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h4>Support</h4>
          <Link to="/school-management/privacy-policy">Privacy Policy</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/"><ArrowLeft size={14} /> All Apps</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="socials">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} /> <span>WhatsApp</span></a>
            <a href={`mailto:${SUPPORT_EMAIL}`}><Mail size={18} /> <span>Email</span></a>
          </div>
        </div>
        <div className="copyright">© 2026 {COMPANY_NAME}. All rights reserved.</div>
      </footer>
    </div>
  );
}
