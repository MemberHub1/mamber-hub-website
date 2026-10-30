import React from "react";
import { Link } from "react-router-dom";
import { SCHOOL_ICON } from "../links";

// Top bar for inner pages. variant: "mamber" (default) or "school".
function PageTopBar({ variant = "mamber" }) {
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

export default PageTopBar;
