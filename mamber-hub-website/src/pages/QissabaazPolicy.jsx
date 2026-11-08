import React from "react";
import PageTopBar from "./PageTopBar";
import { QZ_DELETE_URL, SUPPORT_EMAIL } from "../links";
import {
  QZ_PRIVACY_HTML, QZ_TERMS_HTML, QZ_CHILD_SAFETY_HTML
} from "../qissabaazPolicies";

// The same Privacy Policy, Terms and Child Safety pages the Qissabaaz app uses (text copied
// word for word from the Qissabaaz server). kind: "privacy" | "terms" | "child-safety" | "delete".
const PAGES = {
  privacy: { title: ["Privacy", "Policy"], doc: "Privacy Policy", html: QZ_PRIVACY_HTML },
  terms: { title: ["Terms of", "Use"], doc: "Terms of Use", html: QZ_TERMS_HTML },
  "child-safety": { title: ["Child Safety", "Standards"], doc: "Child Safety Standards", html: QZ_CHILD_SAFETY_HTML },
};

function DeleteBody() {
  return (
    <div className="contact-card qz-policy">
      <p>You can delete your account and its data at any time.</p>
      <p><b>In the app:</b> open Qissabaaz → Profile → <b>Delete account</b>.</p>
      <p>
        <b>On the web (no app needed):</b> open the Qissabaaz delete page, sign in with the same Google
        account you use in Qissabaaz, press <b>Delete my account</b> and confirm.
      </p>
      <p><a className="btn primary" href={QZ_DELETE_URL}>Open the Qissabaaz delete page</a></p>
      <h2>What is deleted</h2>
      <ul>
        <li>Your account, name, email and photo link.</li>
        <li>Your likes, follows, My List, watch history, reports, blocks and notifications.</li>
        <li>For creators: your dramas, episodes and their video and picture files.</li>
        <li>All login sessions on every phone.</li>
      </ul>
      <h2>What is kept</h2>
      <ul>
        <li>Payment records keep only the amount and date, with no link to you, for accounting.</li>
        <li>A Google Play subscription is not cancelled by deleting the account: cancel it in Play Store → Payments &amp; subscriptions → Subscriptions.</li>
        <li>Copies inside our hosting provider's automatic backups expire within 30 days.</li>
      </ul>
      <p>
        Can't sign in? Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20my%20Qissabaaz%20account`}>{SUPPORT_EMAIL}</a>{" "}
        from the Gmail you used, with the subject "Delete my Qissabaaz account".
      </p>
    </div>
  );
}

export default function QissabaazPolicy({ kind }) {
  const page = PAGES[kind];
  const title = page ? page.title : ["Delete", "Account"];
  const doc = page ? page.doc : "Delete Account";

  React.useEffect(() => {
    document.title = `${doc} — Qissabaaz`;
    window.scrollTo(0, 0);
  }, [doc]);

  return (
    <div className="contact-page">
      <PageTopBar variant="qissabaaz" />
      <div className="contact-container">
        <p className="eyebrow">QISSABAAZ</p>
        <h1>{title[0]} <span>{title[1]}</span></h1>
        {page ? (
          // Our own fixed policy text (no user content), the same words as in the app.
          <div className="contact-card qz-policy" dangerouslySetInnerHTML={{ __html: page.html }} />
        ) : (
          <DeleteBody />
        )}
      </div>
    </div>
  );
}
