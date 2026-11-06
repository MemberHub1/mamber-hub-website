import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Download, Users, CreditCard, PlayCircle, BarChart3, ShieldCheck, MessageCircle,
  Menu, X, Crown, Check, Gift, Bell, LayoutDashboard, ChevronDown, Hourglass, Clock, Megaphone,
  CheckCircle2, MessagesSquare, Share2, Smartphone, Store
} from "lucide-react";
import {
  APK_URL, APP_VERSION, APP_SIZE, MIN_ANDROID, PLANS, PLAY_STORE_URL, DOWNLOAD_URL,
  DOWNLOAD_LABEL, SOCIAL_LINKS, WHATSAPP_URL
} from "../links";
import SiteFooter, { SOCIAL_ICONS, SOCIAL_COLORS } from "./SiteFooter";
import {
  Phone, MemberHomeScreen, AdminDashboardScreen, NotificationsScreen, SCREENS
} from "./AppScreens";

const features = [
  { icon: LayoutDashboard, title: "Member Dashboard", text: "Your plan, its expiry date, payments and quick actions on one purple home screen." },
  { icon: PlayCircle, title: "Video Library", text: "Every member video, streamed securely inside the app once your plan is active." },
  { icon: Crown, title: "Basic & Premium", text: "Rs. 300 with ads or Rs. 600 ad-free — each for 30 days, no automatic charges." },
  { icon: Hourglass, title: "Payment Verification", text: "Pay with EasyPaisa or JazzCash, upload the screenshot and follow its status until it is approved." },
  { icon: Bell, title: "Smart Notifications", text: "Approvals, new videos, announcements and a renewal reminder 5 days before your plan ends." },
  { icon: Gift, title: "Refer & Earn", text: "Share your invite link on WhatsApp, Facebook, Instagram or TikTok — your code fills in for your friend." },
  { icon: MessagesSquare, title: "Help Chat", text: "Report a problem and chat with the admin inside the app until it is solved." },
  { icon: BarChart3, title: "Admin Tools", text: "Total collection, collection analytics, reports, member requests and video uploads." },
];

const notifications = [
  { icon: CheckCircle2, color: "#16a34a", bg: "#dcfce7", title: "Payment approved or rejected", who: "members", text: "Only the member whose payment was checked gets this message." },
  { icon: PlayCircle, color: "#7c3aed", bg: "#ede9fe", title: "New video uploaded", who: "members", text: "Every member gets a push the moment the admin publishes a video." },
  { icon: Megaphone, color: "#ea580c", bg: "#ffedd5", title: "Announcements", who: "members", text: "News from the admin opens in full from the notification or the Announcements card." },
  { icon: Clock, color: "#d97706", bg: "#fef3c7", title: "Renewal reminder", who: "members", text: "From 5 days before the plan ends, a reminder with a Renew Now button appears on every login." },
  { icon: Hourglass, color: "#be185d", bg: "#fce7f3", title: "Payment to verify & problem reports", who: "admins", text: "Admins are told about member requests only — new payments, new reports and chat messages." },
];

const steps = [
  ["01", "Install & register", "Download the app and sign up with your email or Google account. Have an invite link? The referral code is filled in for you."],
  ["02", "Verify your Gmail", "Confirm your email once. After that the app opens your member dashboard."],
  ["03", "Choose a plan & pay", "Pick Basic or Premium, pay with EasyPaisa or JazzCash and upload the payment screenshot."],
  ["04", "Get approved & watch", "The “Verifying your payment” page shows the status. Once approved you get a notification and every video opens."],
];

const faqs = [
  ["Is the Mamber Hub app free to download?",
    "Yes. Downloading the app, creating an account and using your dashboard are free. You only pay when you choose a Basic or Premium plan to watch member videos."],
  ["What happens after I pay?",
    "The app shows a “Verifying your payment” page. The admin checks your payment and you get a notification as soon as it is approved — then all videos open."],
  ["Will I be reminded before my plan ends?",
    "Yes. From 5 days before your plan ends, the app reminds you every time you log in, with a Renew Now button. Nothing is ever charged automatically."],
  ["How does Refer & Earn work?",
    "Open Refer & Earn in the app and share your invite link. When your friend installs Mamber Hub from that link, your referral code is filled in on the Register screen automatically."],
  ["How do I get help if something is not working?",
    "Go to Help & Support → Report a Problem. Your report opens a chat with the admin, and you get a notification whenever the admin replies."],
  ["I get “App not installed” when I install the APK. What should I do?",
    "Uninstall any older Mamber Hub app from your phone first, then install the new APK again."],
  ["How can I delete my account?",
    "Open the app, go to Profile and tap “Delete my account”. You can also ask us by email or WhatsApp."],
];

export default function MamberHub() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  React.useEffect(() => {
    document.title = "Mamber Hub — Members Together, Growth Forever";
    const hash = window.location.hash;
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0);
    else window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site mamber">
      <header className="header">
        <a className="brand" href="#home" onClick={close}>
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
          <a href="#features" onClick={close}>Features</a>
          <a href="#notifications" onClick={close}>Notifications</a>
          <a href="#screens" onClick={close}>App Screens</a>
          <a href="#pricing" onClick={close}>Plans</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <Link to="/" onClick={close}>All Apps</Link>
          <a className="nav-cta" href="#download" onClick={close}>Download</a>
        </nav>
      </header>

      <main>
        {/* HERO — the app's purple header */}
        <section id="home" className="hero mh-hero">
          <div className="hero-copy">
            <p className="eyebrow">MEMBERS TOGETHER, GROWTH FOREVER</p>
            <h1>Join. Watch.<br /><span>Grow Together.</span></h1>
            <p className="hero-text">
              Mamber Hub is the membership app for our community. Register, verify your Gmail,
              choose a plan and unlock every member video — with notifications, referrals and a
              help chat built in. Admins manage members, payments and videos in the same app.
            </p>
            <div className="actions">
              <a className="btn primary" href={DOWNLOAD_URL}>
                {PLAY_STORE_URL ? <Store size={19} /> : <Download size={19} />} {DOWNLOAD_LABEL}
              </a>
              <a className="btn outline" href="#screens">See the App <ArrowRight size={18} /></a>
            </div>
            <p className="version-line">Version {APP_VERSION} · {MIN_ANDROID} · {APP_SIZE}</p>
            <div className="trust-row">
              <span><ShieldCheck size={20} /> Secure sign-in</span>
              <span><Bell size={20} /> Instant updates</span>
              <span><Users size={20} /> Built for members</span>
            </div>
          </div>
          <div className="mh-phones" aria-label="Mamber Hub app screens">
            <Phone className="back"><AdminDashboardScreen /></Phone>
            <Phone className="front"><MemberHomeScreen /></Phone>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section light">
          <p className="eyebrow center">EVERYTHING IN ONE APP</p>
          <h2>What You Get in <span>Mamber Hub</span></h2>
          <p className="section-sub">The same screens you see in the app — for members and for admins.</p>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* NOTIFICATIONS */}
        <section id="notifications" className="section">
          <div className="mh-split">
            <div className="mh-split-copy">
              <p className="eyebrow">NOTIFICATIONS</p>
              <h2>The Right Message to the <span>Right Person</span></h2>
              <p className="section-sub" style={{ margin: 0 }}>
                What admins send reaches members. What members send reaches admins. Nobody gets
                messages that are not meant for them — and new members start with a clean list.
              </p>
              <ul className="mh-note-list">
                {notifications.map(({ icon: Icon, color, bg, title, who, text }) => (
                  <li key={title}>
                    <span style={{ background: bg, color }}><Icon size={19} /></span>
                    <div>
                      <b>{title}<em className={`mh-who ${who}`}>{who === "members" ? "Members" : "Admins"}</em></b>
                      <small>{text}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Phone><NotificationsScreen /></Phone>
          </div>
        </section>

        {/* SCREENS */}
        <section id="screens" className="section light">
          <p className="eyebrow center">APP SCREENS</p>
          <h2>A Closer Look at <span>the App</span></h2>
          <p className="section-sub">Swipe through the real Mamber Hub screens.</p>
          <div className="mh-gallery">
            {SCREENS.map(({ id, label, Screen }) => (
              <Phone key={id} label={label}><Screen /></Phone>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section process">
          <p className="eyebrow center">SIMPLE PROCESS</p>
          <h2>How Mamber Hub <span>Works</span></h2>
          <p className="section-sub">From download to your first video in four steps.</p>
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

        {/* PLANS */}
        <section id="pricing" className="pricing section">
          <p className="eyebrow center">SIMPLE & TRANSPARENT</p>
          <h2>Membership <span>Plans</span></h2>
          <p className="section-sub">Two plans, each for 30 days. No hidden charges and no automatic renewal.</p>
          <div className="plans-grid">
            {PLANS.map((plan) => {
              const premium = plan.id === "premium";
              return (
                <article className={premium ? "plan-card premium" : "plan-card"} key={plan.id}>
                  {plan.badge && <span className="plan-badge"><Crown size={14} /> {plan.badge}</span>}
                  <h3>{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                  <div className="plan-price">
                    <span>Rs.</span>
                    <strong>{plan.price.toLocaleString("en-PK")}</strong>
                    <small>/ {plan.days} days</small>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((f) => <li key={f}><Check size={17} /> {f}</li>)}
                  </ul>
                  <a className={premium ? "btn white" : "btn primary"} href={DOWNLOAD_URL}>
                    <CreditCard size={18} /> Get {plan.name} in the App
                  </a>
                </article>
              );
            })}
          </div>
          <p className="plans-note">
            Subscribe from the Videos section of the app. Pay with EasyPaisa or JazzCash and upload your
            payment screenshot — you get a notification as soon as the admin approves it.
          </p>
        </section>

        {/* DOWNLOAD */}
        <section id="download" className="section light">
          <p className="eyebrow center">GET THE APP</p>
          <h2>Download <span>Mamber Hub</span></h2>
          <p className="section-sub">For Android phones. {PLAY_STORE_URL ? "Install it from Google Play." : "Google Play is coming soon — for now, install the APK."}</p>
          <div className="mh-download">
            <div>
              <h3><Smartphone size={22} style={{ verticalAlign: "-4px" }} /> Mamber Hub for Android</h3>
              <div className="mh-meta">
                <span>Version {APP_VERSION}</span><span>{MIN_ANDROID}</span><span>{APP_SIZE}</span>
              </div>
              <div className="actions">
                {PLAY_STORE_URL ? (
                  <a className="btn primary" href={PLAY_STORE_URL}><Store size={19} /> Get it on Google Play</a>
                ) : (
                  <>
                    <a className="btn primary" href={APK_URL}><Download size={19} /> Download APK</a>
                    <span className="mh-play-soon"><Store size={18} /> Google Play — coming soon</span>
                  </>
                )}
              </div>
              <p>Have an older Mamber Hub app on your phone? Uninstall it first, then install this version.</p>
            </div>
            {!PLAY_STORE_URL && (
              <ol className="mh-steps">
                <li>Tap <b>Download APK</b> and save the file.</li>
                <li>Open it from your phone's Downloads.</li>
                <li>If Android asks, allow installing from this source.</li>
                <li>Tap Install, open Mamber Hub and register.</li>
              </ol>
            )}
          </div>
        </section>

        {/* FAQ */}
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

        {/* FOLLOW */}
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

        <section id="contact" className="cta">
          <div>
            <p className="eyebrow">READY TO GET STARTED?</p>
            <h2>Join Mamber Hub Today!</h2>
            <p>Download the app, verify your Gmail and pick the plan that suits you. Questions? Message us on WhatsApp.</p>
          </div>
          <div className="actions" style={{ margin: 0 }}>
            <a className="btn primary" href={DOWNLOAD_URL}><Share2 size={18} /> {DOWNLOAD_LABEL}</a>
            <a className="btn outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
          </div>
        </section>
      </main>

      <SiteFooter variant="mamber" />
    </div>
  );
}
