import React from "react";
import { Link } from "react-router-dom";
import { SCHOOL_ICON, QZ_LOGO, COMPANY_LOGO_WHITE, COMPANY_NAME } from "../links";

// Top bar for inner pages. variant: "company" (default), "mamber", "school" or "qissabaaz".
function PageTopBar({ variant = "company" }) {
  if (variant === "qissabaaz") {
    return (
      <div className="page-topbar">
        <Link to="/qissabaaz" className="brand">
          <img className="brand-logo" src={QZ_LOGO} alt="Qissabaaz logo" />
          <span>
            <strong>Qissa<em>baaz</em></strong>
          </span>
        </Link>
        <Link to="/qissabaaz" className="back-home">← Back to Qissabaaz</Link>
      </div>
    );
  }

  if (variant === "school") {
    return (
      <div className="page-topbar">
        <Link to="/school-management" className="brand">
          <img className="brand-logo" src={SCHOOL_ICON} alt="School Management System logo" />
          <span>
            <strong>School <em>Management</em></strong>
          </span>
        </Link>
        <Link to="/school-management" className="back-home">← Back to School Management</Link>
      </div>
    );
  }

  if (variant === "mamber") {
    return (
      <div className="page-topbar">
        <Link to="/mamber-hub" className="brand">
          <img className="brand-logo" src="/assets/mamber-hub-logo.png" alt="Mamber Hub logo" />
          <span>
            <strong>Mamber <em>Hub</em></strong>
          </span>
        </Link>
        <Link to="/mamber-hub" className="back-home">← Back to Mamber Hub</Link>
      </div>
    );
  }

  // Default: company pages from the site footer (About, Contact, Privacy, Terms, Delete account)
  // go back to the Mamber Digital Solutions home page.
  return (
    <div className="page-topbar">
      <Link to="/" className="brand">
        <img className="company-logo" src={COMPANY_LOGO_WHITE} alt={COMPANY_NAME} width="140" height="48" style={{ height: 48 }} />
      </Link>
      <Link to="/" className="back-home">← Back to {COMPANY_NAME}</Link>
    </div>
  );
}

export default PageTopBar;
