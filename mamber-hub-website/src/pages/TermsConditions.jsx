import React from "react";
import PageTopBar from "./PageTopBar";

function TermsConditions() {
  return (
    <div className="contact-page">
      <PageTopBar />
      <div className="contact-container">
        <p className="eyebrow">MAMBER HUB</p>

        <h1>Terms & <span>Conditions</span></h1>

        <p className="contact-intro">
          Please read these Terms & Conditions carefully before using
          Mamber Hub.
        </p>

        <div className="contact-card">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using Mamber Hub, you agree to follow these Terms &
            Conditions. If you do not agree with these terms, please
            do not use the service.
          </p>
        </div>

        <div className="contact-card">
          <h2>2. Account Responsibility</h2>
          <p>
            Users are responsible for providing accurate information,
            verifying their email address and keeping their account
            information secure. Each person should use only one account.
          </p>
        </div>

        <div className="contact-card">
          <h2>3. Membership Plans & Payments</h2>
          <ul>
            <li>Creating an account and using your dashboard are free. Member videos require an active Basic or Premium plan.</li>
            <li>Each plan lasts 30 days. Plans do not renew automatically; you can renew from the app when your plan ends.</li>
            <li>Payments are made outside the app (for example through EasyPaisa or JazzCash). You upload a payment proof in the app, and your plan becomes active once an admin verifies it.</li>
            <li>Payment proofs must be genuine. Accounts that submit false proofs may be suspended.</li>
            <li>Plan prices are shown in the app and on this website and may change in the future. A price change never affects a plan you have already paid for.</li>
            <li>For any payment issue, contact us using the details below.</li>
          </ul>
        </div>

        <div className="contact-card">
          <h2>4. Ads</h2>
          <p>
            Members on the Basic plan, and members without a plan, may see
            ads provided by Google AdMob. Members with an active Premium plan
            do not see ads. See our Privacy Policy for details.
          </p>
        </div>

        <div className="contact-card">
          <h2>5. Videos and Content</h2>
          <p>
            Videos in Mamber Hub are for members' personal viewing only.
            Copying, recording, re-uploading or sharing them outside the app
            is not allowed.
          </p>
        </div>

        <div className="contact-card">
          <h2>6. Acceptable Use</h2>
          <p>
            Users must not misuse the platform, attempt unauthorized
            access, or use Mamber Hub for unlawful activities.
          </p>
        </div>

        <div className="contact-card">
          <h2>7. Account Deletion</h2>
          <p>
            You can delete your account at any time from the app
            (Profile &rarr; Delete my account) or by contacting us.
          </p>
        </div>

        <div className="contact-card">
          <h2>8. Service Changes</h2>
          <p>
            Mamber Hub may update, improve or modify features and
            services from time to time.
          </p>
        </div>

        <div className="contact-card">
          <h2>9. Contact</h2>
          <p>
            For questions about these Terms & Conditions, contact us at:
          </p>

          <a href="mailto:supportmemberhub@gmail.com">
            supportmemberhub@gmail.com
          </a>
        </div>

        <p className="contact-intro">
          Last updated: 30 October 2026
        </p>
      </div>
    </div>
  );
}

export default TermsConditions;