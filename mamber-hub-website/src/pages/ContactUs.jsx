import React from "react";

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <p className="contact-intro">
          Have a question or need help? Contact the Member Hub support team.
        </p>

        <div className="contact-card">
          <h2>Get in Touch</h2>

          <div className="contact-item">
            <strong>Email</strong>
            <a href="mailto:supportmember@gmail.com">
              supportmember@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <strong>Phone</strong>
            <a href="tel:+92 318 7630194">
              +92 318 7630194
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Write your message..."
            rows="6"
          ></textarea>

          <button type="button">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;