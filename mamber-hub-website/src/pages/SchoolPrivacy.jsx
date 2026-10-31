import React from "react";
import PageTopBar from "./PageTopBar";
import { COMPANY_NAME, SUPPORT_EMAIL, SUPPORT_PHONE, WHATSAPP_URL } from "../links";

const sections = [
  {
    title: "1. About This Policy",
    body: (
      <p>
        This policy explains how the School Management System app ("the app"), made by{" "}
        {COMPANY_NAME}, handles information. It covers the Windows app and the web app.
      </p>
    ),
  },
  {
    title: "2. Information the App Stores",
    body: (
      <>
        <p>The school using the app enters and controls all of its data, for example:</p>
        <ul>
          <li>School profile and settings.</li>
          <li>Student, admission, attendance, timetable, exam and result records.</li>
          <li>Fee structure, fee payments, invoices, books and book sales.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Google Sign-In and Subscription",
    body: (
      <>
        <p>
          The principal signs in with a Google account, or with an email address and password,
          using Firebase Authentication (a Google service). A new email account must be verified by
          clicking a link sent to that address. From Google the app receives only the account's name,
          verified email address and a sign-in token; we never see Google or email passwords.
          Teachers log in on the school's own device with the email the principal added; this
          teacher login is checked on that device only.
        </p>
        <p>
          To run the 7-day demo and the monthly subscription, we keep one subscription record per
          school in Google Cloud Firestore: the principal's email, the school name, the teachers'
          emails added by the principal, the demo start date and the subscription status and end
          date. Subscription payments are made by EasyPaisa or JazzCash and confirmed by us on
          WhatsApp; the app does not collect card or bank details.
        </p>
      </>
    ),
  },
  {
    title: "4. Where School Data Is Stored",
    body: (
      <p>
        All school data is stored on the school's own device: on the computer for the Windows
        app, and in the browser of the phone or computer for the web app. The app does not send
        student, attendance, fee or other school records to our servers, and we cannot see them.
      </p>
    ),
  },
  {
    title: "5. Sharing",
    body: (
      <p>
        We do not sell or share your school's data. The app shows no ads. Data leaves the
        device only when you choose to export, print, back up or share a report yourself.
      </p>
    ),
  },
  {
    title: "6. Keeping Data Safe",
    body: (
      <ul>
        <li>Protect your device and Google accounts with strong passwords and 2-step verification.</li>
        <li>Use the Windows app's Backup option regularly and keep backups in a safe place.</li>
        <li>In the web app, clearing browser or site data deletes the data saved in that browser.</li>
      </ul>
    ),
  },
  {
    title: "7. Deleting Data",
    body: (
      <p>
        Because data is stored on your device, you can delete it at any time by uninstalling the
        Windows app and removing its data, or by clearing the site data for the web app in your
        browser. To delete your school's subscription record, contact us and we will remove it.
      </p>
    ),
  },
  {
    title: "8. Children's Information",
    body: (
      <p>
        Student records may include information about children. This information is entered and
        controlled by the school, stays on the school's device, and is not collected by us.
      </p>
    ),
  },
  {
    title: "9. Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. The latest version will always be on this
        page with its updated date.
      </p>
    ),
  },
];

export default function SchoolPrivacy() {
  React.useEffect(() => {
    document.title = "Privacy Policy — School Management System";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <PageTopBar variant="school" />
      <div className="contact-container">
        <p className="eyebrow">SCHOOL MANAGEMENT SYSTEM</p>
        <h1>Privacy <span>Policy</span></h1>
        <p className="contact-intro">
          Your school's records belong to your school. This policy explains how the app keeps them
          on your own device.
        </p>

        {sections.map(({ title, body }) => (
          <div className="contact-card" key={title}>
            <h2>{title}</h2>
            {body}
          </div>
        ))}

        <div className="contact-card">
          <h2>10. Contact Us</h2>
          <p>If you have questions about this policy, contact us:</p>
          <p>
            Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <br />
            WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{SUPPORT_PHONE}</a>
          </p>
        </div>

        <p className="contact-intro">Last updated: 31 October 2026</p>
      </div>
    </div>
  );
}
