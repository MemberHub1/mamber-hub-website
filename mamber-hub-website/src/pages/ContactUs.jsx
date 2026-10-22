import React from "react";
import PageTopBar from "./PageTopBar";
import { SOCIAL_LINKS, SUPPORT_EMAIL, SUPPORT_PHONE, WHATSAPP_URL } from "../links";

function ContactUs() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const sendMessage = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Mamber Hub enquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <PageTopBar />
      <div className="contact-container">
        <h1>Contact Us</h1>

        <p className="contact-intro">
          Have a question or need help? Contact the Mamber Hub support team.
        </p>

        <div className="contact-card">
          <h2>Get in Touch</h2>

          <div className="contact-item">
            <strong>Email</strong>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </div>

          <div className="contact-item">
            <strong>Phone</strong>
            <a href={`tel:${SUPPORT_PHONE}`}>+92 318 7630194</a>
          </div>

          <div className="contact-item">
            <strong>WhatsApp</strong>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>

          <div className="contact-item">
            <strong>Follow Us</strong>
            <span className="contact-socials">
              {SOCIAL_LINKS.map(({ key, label, href }) => (
                <a key={key} href={href} target="_blank" rel="noreferrer">{label}</a>
              ))}
            </span>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendMessage}>
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Your Name" value={form.name} onChange={update("name")} required />

          <input type="email" placeholder="Your Email" value={form.email} onChange={update("email")} required />

          <textarea placeholder="Write your message..." rows="6" value={form.message} onChange={update("message")} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;