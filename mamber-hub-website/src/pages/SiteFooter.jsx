import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Music2, Mail, Globe } from "lucide-react";
import {
  COMPANY_NAME, COMPANY_LOGO_WHITE, SOCIAL_LINKS, SUPPORT_EMAIL, WEBSITE_URL,
  DOWNLOAD_URL, DOWNLOAD_LABEL
} from "../links";

export const SOCIAL_ICONS = { instagram: Instagram, facebook: Facebook, whatsapp: MessageCircle, tiktok: Music2 };
export const SOCIAL_COLORS = { whatsapp: "#16a34a", facebook: "#2563eb", instagram: "#db2777", tiktok: "#111827" };

/** Footer used on the company home page and the Mamber Hub page. */
export default function SiteFooter({ variant = "company" }) {
  const mamber = variant === "mamber";
  return (
    <footer className="footer">
      <div>
        <div className="brand footer-brand">
          {mamber ? (
            <>
              <img className="brand-logo" src="/assets/mamber-hub-logo.png" alt="Mamber Hub logo" />
              <span>
                <strong>Mamber <em>Hub</em></strong>
                <small>Members Together, Growth Forever</small>
              </span>
            </>
          ) : (
            <img className="company-logo" src={COMPANY_LOGO_WHITE} alt={COMPANY_NAME} width="175" height="60" />
          )}
        </div>
        <p>
          {mamber
            ? "Mamber Hub is the membership app for members and admins: videos, plans, payments, notifications and support chat in one place."
            : "Simple apps for communities, schools and small businesses."}
        </p>
        <a className="footer-site" href={WEBSITE_URL}><Globe size={15} /> {WEBSITE_URL.replace("https://", "").replace(/\/$/, "")}</a>
      </div>

      <div>
        <h4>{mamber ? "Quick Links" : "Our Apps"}</h4>
        {mamber ? (
          <>
            <a href="#features">Features</a>
            <a href="#notifications">Notifications</a>
            <a href="#screens">App Screens</a>
            <a href="#pricing">Plans</a>
            <a href={DOWNLOAD_URL}>{DOWNLOAD_LABEL}</a>
            <Link to="/">All Apps</Link>
          </>
        ) : (
          <>
            <Link to="/mamber-hub">Mamber Hub</Link>
            <Link to="/school-management">School Management</Link>
            <a href="/school-app/">School Web App</a>
            <Link to="/about">About Us</Link>
          </>
        )}
      </div>

      <div>
        <h4>Support</h4>
        <Link to="/contact">Contact Us</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms &amp; Conditions</Link>
        <Link to="/delete-account">Delete Account</Link>
        {!mamber && <Link to="/school-management/privacy-policy">School App Privacy</Link>}
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
        © 2026 {mamber ? "Mamber Hub by " : ""}{COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
