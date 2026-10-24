import React from "react";
import { Link } from "react-router-dom";
import PageTopBar from "./PageTopBar";
import { SUPPORT_EMAIL, SUPPORT_PHONE, WHATSAPP_URL } from "../links";

const mailSubject = encodeURIComponent("Delete my Mamber Hub account");
const mailBody = encodeURIComponent(
  "Hello Mamber Hub team,\n\nPlease delete my Mamber Hub account and its data.\n\nRegistered email:\nRegistered phone number:\n\nThank you."
);

function DeleteAccount() {
  return (
    <div className="contact-page">
      <PageTopBar />
      <div className="contact-container">
        <p className="eyebrow">MAMBER HUB</p>

        <h1>Delete Your <span>Account</span></h1>

        <p className="contact-intro">
          You can delete your Mamber Hub account and its data at any time.
          Choose one of the two options below.
        </p>

        <div className="contact-card">
          <h2>Option 1: Ask your group admin</h2>
          <p>
            Your group admin can permanently delete your account from the
            Mamber Hub app (Members &rarr; Delete). Your account and data are
            removed right away.
          </p>
        </div>

        <div className="contact-card">
          <h2>Option 2: Request deletion from Mamber Hub</h2>
          <p>
            Send us a request from the email
            address or phone number registered on your account. We will
            confirm and delete your account within 7 days.
          </p>
          <p>
            <a className="btn primary" href={`mailto:${SUPPORT_EMAIL}?subject=${mailSubject}&body=${mailBody}`}>
              Email a deletion request
            </a>
          </p>
          <p>
            Or message us on WhatsApp:{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{SUPPORT_PHONE}</a>
          </p>
        </div>

        <div className="contact-card">
          <h2>What is deleted</h2>
          <ul>
            <li>Your account and sign-in details (name, email, phone number).</li>
            <li>Your profile and membership details.</li>
            <li>Your notification token and any files you uploaded.</li>
          </ul>
          <h2>What may be kept</h2>
          <p>
            Basic payment records (amount, date and status) may be kept for up
            to 30 days, or longer only if required by law or to resolve a
            dispute. After that they are deleted.
          </p>
        </div>

        <p className="contact-intro">
          See our <Link to="/privacy-policy">Privacy Policy</Link> for more details.
        </p>
      </div>
    </div>
  );
}

export default DeleteAccount;
