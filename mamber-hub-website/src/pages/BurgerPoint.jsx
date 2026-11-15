import React from "react";
import {
  ArrowRight, BarChart3, ChevronDown, Download, ListChecks, Monitor, MessageCircle, Printer,
  Settings, ShoppingBag, Smartphone, UtensilsCrossed, Users, Wallet, WifiOff,
} from "lucide-react";
import PageTopBar from "./PageTopBar";
import SiteFooter, { SOCIAL_ICONS, SOCIAL_COLORS } from "./SiteFooter";
import {
  BP_APK_URL, BP_COMPUTER_URL, BP_LOGO, BP_NAME, SOCIAL_LINKS, SUPPORT_PHONE, WA_BURGER_POINT,
} from "../links";

// The four points shown in the app's video.
const fourPoints = [
  { icon: WifiOff, title: "Works without internet", text: "The shop keeps taking orders and printing bills even when the internet is down." },
  { icon: Smartphone, title: "Runs on Android phones", text: "Install the Android app and run the counter from a phone." },
  { icon: Monitor, title: "Runs on Windows computers", text: "Use the computer version in Chrome or Microsoft Edge. It opens with one double-click." },
  { icon: Printer, title: "Thermal printer slips", text: "Print 80mm thermal bills and kitchen slips. A4 printing is also supported." },
];

const features = [
  { icon: ShoppingBag, title: "Take orders", text: "Dine-in, takeaway or delivery. Add toppings, sizes, a discount or a note, then hold the order or save and print it." },
  { icon: UtensilsCrossed, title: "Menu management", text: "Pizza, burgers, deals, sides and drinks, with S, M and L sizes and extra toppings. Switch items on or off." },
  { icon: ListChecks, title: "Order tracking", text: "Every order shows as Preparing, Ready or Completed. Cancel an order when needed." },
  { icon: Wallet, title: "Kharche (expenses)", text: "Record the day's costs and see today's total and the month's total." },
  { icon: BarChart3, title: "Reports", text: "Sales for today, the last 7 days or this month, with best-selling items and a payment breakdown." },
  { icon: Printer, title: "Printing", text: "Bills, kitchen slips and closing reports, on A4 or 80mm thermal paper." },
  { icon: Settings, title: "Settings and backup", text: "Shop name, address, phone, bill footer, tax and PIN lock. Make a backup file and restore it any time." },
  { icon: Users, title: "One user runs everything", text: "A single person can handle orders, the menu, expenses and reports from start to finish." },
];

// Screens taken from the app (public/assets/burger-point/).
const screens = [
  { src: "/assets/burger-point/bp-menu.jpg", label: "Menu management" },
  { src: "/assets/burger-point/bp-pos.jpg", label: "Take order and checkout" },
  { src: "/assets/burger-point/bp-orders.jpg", label: "Order tracking" },
  { src: "/assets/burger-point/bp-kharche.jpg", label: "Kharche (expenses)" },
  { src: "/assets/burger-point/bp-reports.jpg", label: "Reports" },
  { src: "/assets/burger-point/bp-settings.jpg", label: "Settings and backup" },
];

const steps = [
  { num: "1", title: "Install", text: "Install the Android app, or open the computer version from its folder." },
  { num: "2", title: "Activate", text: "Send your Device ID to us on WhatsApp and enter the activation code in the app." },
  { num: "3", title: "Set up your shop", text: "Add the shop name, address, phone and tax, then build your menu with prices." },
  { num: "4", title: "Serve and back up", text: "Take orders, print bills and kitchen slips, and make a backup file every day." },
];

const downloads = [
  { href: BP_APK_URL, label: "Download for Android", note: "APK file, 3.5 MB" },
  { href: BP_COMPUTER_URL, label: "Download for Computer", note: "Windows zip, 27 KB" },
];

const installSteps = [
  { title: "Android", text: "Download the APK, open it, and allow installation from this source. Then open the app from your home screen." },
  { title: "Computer", text: "Download the zip and extract it into a permanent folder such as D:\\BurgerPoint, not Downloads. Double-click \"Burger Point Kholein\"." },
  { title: "First time", text: "On the computer, send your Device ID to us on WhatsApp, enter the code you get back, and fill in your shop details." },
];

const faqs = [
  [`Does ${BP_NAME} need internet?`,
    "No. It works without internet. Orders, menu, expenses and reports are saved on the device, so the shop keeps running when the connection drops."],
  ["Can one person run the whole system?",
    "Yes. One person can take orders, manage the menu, record expenses and check reports."],
  ["Which devices can I use?",
    "Android phones (with the APK) and Windows computers (the computer version, which opens in Chrome or Microsoft Edge)."],
  ["Does it print bills and kitchen slips?",
    "Yes. Print bills, kitchen slips and closing reports on A4 or 80mm thermal paper. On a computer, install the printer's Windows driver first."],
  ["How do I keep my data safe?",
    "Data is saved on the device itself. Make a backup file from Settings every day and keep it on WhatsApp or a USB drive. You can restore it from Settings with \"Backup se Wapas Layein\"."],
  ["What order types and payments are supported?",
    "Dine-in, takeaway and delivery. Payment by cash, card or online. You can add a discount and a note to any order."],
  ["How do I activate the app?",
    `Open ${BP_NAME} and note the Device ID. Send it to us on WhatsApp at 0318-7630194, and we will send you a code. Enter the code in the app to activate it.`],
  ["How much does it cost, and can I see a demo first?",
    "Ask for a demo and pricing on WhatsApp at 0318-7630194. We will show you the app set up for your kind of shop."],
];

export default function BurgerPoint() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site company">
      <PageTopBar variant="burger" />
      <main>
        <section className="hero company-hero">
          <div className="hero-copy">
            <img className="bp-logo" src={BP_LOGO} alt={`${BP_NAME} logo`} width="96" height="96" />
            <p className="eyebrow">DEVELOPED BY QAMAR SONS</p>
            <h1>{BP_NAME}<br /><span>Food POS for Your Shop</span></h1>
            <p className="hero-text">
              An offline point-of-sale app for pizza and burger shops. Take orders, print bills and
              kitchen slips, track every order and see your daily sales, on an Android phone or a
              Windows computer, even when the internet is down.
            </p>
            <div className="actions">
              <a className="btn primary" href={WA_BURGER_POINT} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Ask for a Demo on WhatsApp
              </a>
              <a className="btn outline" href="#download">Download <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="section centered">
          <p className="eyebrow center">APP SCREENS</p>
          <h2>A closer look at <span>the app</span></h2>
          <p className="section-sub">Real screens from the {BP_NAME} app.</p>
          <div className="bp-shots">
            {screens.map(({ src, label }) => (
              <figure key={label}>
                <img src={src} alt={`${BP_NAME} app: ${label}`} width="390" height="905" loading="lazy" />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section light">
          <p className="eyebrow center">INTRODUCTION</p>
          <h2>What is <span>{BP_NAME}</span></h2>
          <p className="section-sub">
            {BP_NAME} is a food point-of-sale (POS) app made for pizza and burger shops. It replaces
            paper slips, the register book and the calculator. The person at the counter takes the order,
            the kitchen gets a slip, and the owner sees the day's sales at the end of the day.
          </p>
          <p className="section-sub">
            It is built to work without internet. Everything is saved on the device, and one person can run
            the whole system from start to finish. Developed by Qamar Sons in Lahore.
          </p>
        </section>

        <section className="section centered">
          <p className="eyebrow center">WHY {BP_NAME.toUpperCase()}</p>
          <h2>Four points <span>for every shop</span></h2>
          <div className="feature-grid">
            {fourPoints.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section light">
          <p className="eyebrow center">FEATURES</p>
          <h2>Everything the <span>shop needs</span></h2>
          <p className="section-sub">Built for busy shops, and simple enough for one person to run.</p>
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

        <section className="section process">
          <p className="eyebrow center">SIMPLE PROCESS</p>
          <h2>How {BP_NAME} <span>Works</span></h2>
          <p className="section-sub">From install to your first bill in four steps.</p>
          <div className="steps">
            {steps.map(({ num, title, text }) => (
              <div className="step" key={num}>
                <div className="step-num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="section light">
          <p className="eyebrow center">GET THE SOFTWARE</p>
          <h2>Download <span>{BP_NAME}</span></h2>
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
            <p>Message us and we will show you how {BP_NAME} works for your shop.</p>
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
