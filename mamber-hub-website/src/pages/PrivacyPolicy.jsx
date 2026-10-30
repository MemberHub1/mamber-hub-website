import React from "react";
import { Link } from "react-router-dom";
import PageTopBar from "./PageTopBar";
import { SUPPORT_EMAIL, SUPPORT_PHONE, WHATSAPP_URL } from "../links";

const sections = [
  {
    title: "1. Who We Are",
    body: (
      <p>
        Mamber Hub ("we", "us", "our") is a membership app for Android,
        together with this website. Members can watch member videos with a
        Basic or Premium plan, and admins manage members, plans and payments
        in one place. This policy
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
          <li>Account details: name, email address, WhatsApp/phone number and password (passwords are stored in encrypted form by our login provider; we never see them). If you sign in with Google, we receive your name, email address and profile picture from your Google account.</li>
          <li>Profile and membership details: profile photo (if you add one), email verification status, join date, your personal referral code, who referred you, and your membership plan (Basic or Premium) with its start and expiry dates.</li>
          <li>Payment records: plan, amount, date, status (pending, paid or rejected) and the payment reference or screenshot you upload as proof. Payments are made outside the app (for example through EasyPaisa or JazzCash). We do not collect or store card or bank account numbers.</li>
          <li>Messages and problem reports you send to our support team.</li>
        </ul>
        <p><strong>Information collected automatically:</strong></p>
        <ul>
          <li>A device notification token, so we can send you app notifications.</li>
          <li>Basic technical and security data such as sign-in times and failed sign-in attempts, used to protect your account.</li>
          <li>Advertising data (members who see ads only): our ads partner Google AdMob collects your device's advertising ID, approximate location based on your IP address, how you interact with ads, and diagnostic information about ad performance.</li>
        </ul>
        <p>We do not collect your precise (GPS) location, contacts or browsing history, and we only access photos or files that you choose to upload.</p>
      </>
    ),
  },
  {
    title: "3. How We Use Information",
    body: (
      <ul>
        <li>To create and manage your account and membership, and to verify your email address.</li>
        <li>To let admins verify payment proofs, activate your plan and track membership payments.</li>
        <li>To show videos and content shared with members.</li>
        <li>To create your referral code and record who invited you.</li>
        <li>To show ads to members on the Basic plan or without a plan. Premium members do not see ads.</li>
        <li>To send important notifications about your account, payments and plan.</li>
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
          <li>With Mamber Hub admins, who can see your name, contact details, profile, plan and payment status.</li>
          <li>With service providers that run the app for us: Google Firebase (sign-in, database and notifications) and Cloudflare (website hosting, file and video storage, and subscription records). They process data only on our instructions.</li>
          <li>With Google AdMob, which shows ads in the app and receives the advertising data described above. Google uses this data as described in{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">How Google uses information from apps that use its services</a>.</li>
          <li>When required by law or to protect the rights and safety of our users.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Ads and Your Choices",
    body: (
      <>
        <p>
          Members on the Basic plan, and members without a plan, may see banner ads
          provided by Google AdMob. Members with an active Premium plan see no ads.
        </p>
        <ul>
          <li>You can reset or delete your advertising ID, or opt out of personalized ads, in your phone's settings (Settings &rarr; Google &rarr; Ads, or Settings &rarr; Privacy &rarr; Ads).</li>
          <li>You can switch to Premium at any time to remove ads.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data Security",
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
    title: "7. Data Retention",
    body: (
      <p>
        We keep your information while your account is active. When you
        delete your account, your personal data is deleted within 30 days,
        except records we must keep by law or to resolve disputes.
      </p>
    ),
  },
  {
    title: "8. Your Choices and Account Deletion",
    body: (
      <p>
        You can view and update your profile inside the app. You can delete
        your account at any time from the app (Profile &rarr; Delete my
        account), through an admin, or by contacting us, as explained on our{" "}
        <Link to="/delete-account">Delete Account</Link> page.
      </p>
    ),
  },
  {
    title: "9. Children",
    body: (
      <p>
        Mamber Hub is not intended for children under 13. We do not knowingly
        collect information from children under 13. If you believe a child
        has given us information, contact us and we will delete it.
      </p>
    ),
  },
  {
    title: "10. Changes to This Policy",
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
          <h2>11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us:</p>
          <p>
            Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <br />
            WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{SUPPORT_PHONE}</a>
          </p>
        </div>

        <p className="contact-intro">Last updated: 30 October 2026</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
