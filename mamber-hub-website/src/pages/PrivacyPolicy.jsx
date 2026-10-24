import React from "react";
import { Link } from "react-router-dom";
import PageTopBar from "./PageTopBar";
import { SUPPORT_EMAIL, SUPPORT_PHONE, WHATSAPP_URL } from "../links";

const sections = [
  {
    title: "1. Who We Are",
    body: (
      <p>
        Mamber Hub ("we", "us", "our") is a group and membership management app
        for Android, together with this website. It helps group admins manage
        members, membership payments and videos in one place. This policy
        applies to the Mamber Hub app and website.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    body: (
      <>
        <p><strong>Information you give us:</strong></p>
        <ul>
          <li>Account details: name, email address, phone number and password (passwords are stored in encrypted form by our login provider; we never see them).</li>
          <li>Profile and membership details: your group, membership status, approval status and join date.</li>
          <li>Payment records: amount, date, status (paid, due or rejected) and any payment reference or proof you choose to submit. Payments are made outside the app (for example through EasyPaisa or JazzCash). We do not collect or store card or bank account numbers.</li>
          <li>Messages you send to our support team.</li>
        </ul>
        <p><strong>Information collected automatically:</strong></p>
        <ul>
          <li>A device notification token, so we can send you app notifications.</li>
          <li>Basic technical and security data such as sign-in times and failed sign-in attempts, used to protect your account.</li>
        </ul>
        <p>We do not collect your precise location, contacts, photos (other than files you choose to upload) or browsing history.</p>
      </>
    ),
  },
  {
    title: "3. How We Use Information",
    body: (
      <ul>
        <li>To create and manage your account and membership.</li>
        <li>To let group admins approve members and track membership payments.</li>
        <li>To show videos and content shared inside your group.</li>
        <li>To send important notifications about your account, payments and group.</li>
        <li>To keep the app secure, for example by temporarily locking sign-in after repeated wrong passwords.</li>
        <li>To answer your support requests.</li>
      </ul>
    ),
  },
  {
    title: "4. Sharing of Information",
    body: (
      <>
        <p>We do not sell your personal information. We share it only:</p>
        <ul>
          <li>With the admin of the group you join, who can see your name, contact details, membership and payment status.</li>
          <li>With service providers that run the app for us: Google Firebase (sign-in, database and notifications) and Cloudflare (website hosting, file and video storage). They process data only on our instructions.</li>
          <li>When required by law or to protect the rights and safety of our users.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Data Security",
    body: (
      <p>
        Data is sent over encrypted connections (HTTPS) and stored with
        access rules so that members can only see what they are allowed to
        see. Sign-in is protected against repeated password guessing. No
        system is 100% secure, but we work to protect your information.
      </p>
    ),
  },
  {
    title: "6. Data Retention",
    body: (
      <p>
        We keep your information while your account is active. When you
        delete your account, your personal data is deleted within 30 days,
        except records we must keep by law or to resolve disputes.
      </p>
    ),
  },
  {
    title: "7. Your Choices and Account Deletion",
    body: (
      <p>
        You can view and update your profile inside the app. You can ask for
        your account to be deleted at any time, through your group admin or
        by contacting us, as explained on our{" "}
        <Link to="/delete-account">Delete Account</Link> page.
      </p>
    ),
  },
  {
    title: "8. Children",
    body: (
      <p>
        Mamber Hub is not intended for children under 13. We do not knowingly
        collect information from children under 13. If you believe a child
        has given us information, contact us and we will delete it.
      </p>
    ),
  },
  {
    title: "9. Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. The latest version will
        always be available on this page with its updated date.
      </p>
    ),
  },
];

function PrivacyPolicy() {
  return (
    <div className="contact-page">
      <PageTopBar />
      <div className="contact-container">
        <p className="eyebrow">MAMBER HUB</p>

        <h1>Privacy <span>Policy</span></h1>

        <p className="contact-intro">
          Your privacy is important to us. This Privacy Policy explains what
          information Mamber Hub collects, how we use it, and the choices you
          have.
        </p>

        {sections.map(({ title, body }) => (
          <div className="contact-card" key={title}>
            <h2>{title}</h2>
            {body}
          </div>
        ))}

        <div className="contact-card">
          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us:</p>
          <p>
            Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <br />
            WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{SUPPORT_PHONE}</a>
          </p>
        </div>

        <p className="contact-intro">Last updated: 24 October 2026</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
