import React from "react";
import { Link } from "react-router-dom";
import { Mail, Globe } from "lucide-react";
import {
  COMPANY_NAME, COMPANY_LOGO_WHITE, MDS_SOCIAL_MARK, SOCIAL_LINKS, SUPPORT_EMAIL, WEBSITE_URL,
  DOWNLOAD_URL, DOWNLOAD_LABEL, SCHOOL_ICON, QZ_LOGO
} from "../links";

// Every social account uses the Mamber Digital Solutions square mark, in the brand violet.
export function MdsMark({ size = 17 }) {
  return <img className="mds-mark" src={MDS_SOCIAL_MARK} alt="" width={size} height={size} />;
}
export const SOCIAL_ICONS = { instagram: MdsMark, facebook: MdsMark, whatsapp: MdsMark, tiktok: MdsMark };
export const SOCIAL_COLORS = { whatsapp: "#5b21e6", facebook: "#5b21e6", instagram: "#5b21e6", tiktok: "#5b21e6" };

// Every page of the brand ends with the same Mamber Digital Solutions social links ("Follow Us").
// variant: "company" (home and other brand pages), "mamber", "school" or "qissabaaz".
const VARIANTS = {
  company: {
    text: "Simple apps for communities, schools and small businesses.",
    quickTitle: "Our Apps",
    quick: [
      { to: "/mamber-hub", label: "Mamber Hub" },
      { to: "/school-management", label: "School Management" },
      { to: "/qissabaaz", label: "Qissabaaz" },
      { to: "/burger-point", label: "Burger Point" },
      { href: "/school-app/", label: "School Web App" },
      { to: "/about", label: "About Us" },
    ],
    support: [
      { to: "/contact", label: "Contact Us" },
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/delete-account", label: "Delete Account" },
      { to: "/school-management/privacy-policy", label: "School App Privacy" },
      { to: "/qissabaaz/privacy-policy", label: "Qissabaaz Privacy" },
    ],
    copyright: "",
  },
  mamber: {
    logo: "/assets/mamber-hub-logo.png", name: ["Mamber ", "Hub"], small: "Members Together, Growth Forever",
    text: "Mamber Hub is the membership app for members and admins: videos, plans, payments, notifications and support chat in one place.",
    quickTitle: "Quick Links",
    quick: [
      { href: "#features", label: "Features" },
      { href: "#notifications", label: "Notifications" },
      { href: "#screens", label: "App Screens" },
      { href: "#pricing", label: "Plans" },
      { href: DOWNLOAD_URL, label: DOWNLOAD_LABEL },
      { to: "/", label: "All Apps" },
    ],
    support: [
      { to: "/contact", label: "Contact Us" },
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/delete-account", label: "Delete Account" },
    ],
    copyright: "Mamber Hub by ",
  },
  school: {
    logo: SCHOOL_ICON, name: ["School ", "Management"], small: `by ${COMPANY_NAME}`,
    text: "English & Urdu school management software for Windows and the web.",
    quickTitle: "App",
    quick: [
      { href: "#features", label: "Features" },
      { href: "#versions", label: "Windows & Web" },
      { href: "#install", label: "Install" },
      { href: "#faq", label: "FAQ" },
      { to: "/", label: "All Apps" },
    ],
    support: [
      { to: "/school-management/privacy-policy", label: "Privacy Policy" },
      { to: "/contact", label: "Contact Us" },
    ],
    copyright: "School Management by ",
  },
  qissabaaz: {
    logo: QZ_LOGO, name: ["Qissa", "baaz"], small: `by ${COMPANY_NAME}`,
    text: "Short dramas from Turkey, Pakistan, India and China, in episodes made for your phone.",
    quickTitle: "Quick Links",
    quick: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Plans" },
      { href: "#creators", label: "Creators" },
      { href: "#get", label: "Get the App" },
      { to: "/", label: "All Apps" },
    ],
    support: [
      { to: "/contact", label: "Contact Us" },
      { to: "/qissabaaz/privacy-policy", label: "Privacy Policy" },
      { to: "/qissabaaz/terms", label: "Terms of Use" },
      { to: "/qissabaaz/child-safety", label: "Child Safety" },
      { to: "/qissabaaz/delete-account", label: "Delete Account" },
    ],
    copyright: "Qissabaaz by ",
  },
};

function FooterLink({ to, href, label }) {
  return to ? <Link to={to}>{label}</Link> : <a href={href}>{label}</a>;
}

/** Footer used on the company home page and on every app page. */
export default function SiteFooter({ variant = "company" }) {
  const v = VARIANTS[variant] || VARIANTS.company;
  return (
    <footer className="footer">
      <div>
        <div className="brand footer-brand">
          {v.logo ? (
            <>
              <img className="brand-logo" src={v.logo} alt={`${v.name.join("")} logo`} />
              <span>
                <strong>{v.name[0]}<em>{v.name[1]}</em></strong>
                <small>{v.small}</small>
              </span>
            </>
          ) : (
            <img className="company-logo" src={COMPANY_LOGO_WHITE} alt={COMPANY_NAME} width="119" height="96" />
          )}
        </div>
        <p>{v.text}</p>
        <a className="footer-site" href={WEBSITE_URL}><Globe size={15} /> {WEBSITE_URL.replace("https://", "").replace(/\/$/, "")}</a>
      </div>

      <div>
        <h4>{v.quickTitle}</h4>
        {v.quick.map((l) => <FooterLink key={l.label} {...l} />)}
      </div>

      <div>
        <h4>Support</h4>
        {v.support.map((l) => <FooterLink key={l.label} {...l} />)}
      </div>

      <div>
        <h4>Follow Us</h4>
        <div className="socials">
          {SOCIAL_LINKS.map(({ key, label, href }) => {
            const Icon = SOCIAL_ICONS[key];
            return (
              <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={`${COMPANY_NAME} on ${label}`} title={label}>
                <Icon size={17} /> <span>{label}</span>
              </a>
            );
          })}
          <a href={`mailto:${SUPPORT_EMAIL}`} aria-label="Email us" title="Email">
            <Mail size={17} /> <span>Email</span>
          </a>
        </div>
      </div>

      <div className="copyright">
        © 2026 {v.copyright}{COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
