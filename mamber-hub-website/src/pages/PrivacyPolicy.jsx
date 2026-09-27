import React from "react";

function PrivacyPolicy() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <p className="eyebrow">MEMBER HUB</p>

        <h1>Privacy <span>Policy</span></h1>

        <p className="contact-intro">
          Your privacy is important to us. This Privacy Policy explains
          how Mamber Hub handles information when you use our website
          and services.
        </p>

        <div className="contact-card">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect information that you provide when you create
            an account, contact us, or use Member Hub services.
          </p>
        </div>

        <div className="contact-card">
          <h2>2. How We Use Information</h2>
          <p>
            Information may be used to provide membership services,
            manage accounts, communicate with members, and improve
            our services.
          </p>
        </div>

        <div className="contact-card">
          <h2>3. Information Security</h2>
          <p>
            We take reasonable measures to protect information from
            unauthorized access, alteration, disclosure, or misuse.
          </p>
        </div>

        <div className="contact-card">
          <h2>4. Third-Party Services</h2>
          <p>
            Some features may use third-party services. Their use of
            information may be governed by their own privacy policies.
          </p>
        </div>

        <div className="contact-card">
          <h2>5. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us
            at:
          </p>

          <a href="mailto:supportmember@gmail.com">
            supportmember@gmail.com
          </a>
        </div>

        <p className="contact-intro">
          Last updated: September 2026
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;