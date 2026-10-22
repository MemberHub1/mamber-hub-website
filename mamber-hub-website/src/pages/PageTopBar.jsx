import React from "react";
import { Link } from "react-router-dom";

function PageTopBar() {
  return (
    <div className="page-topbar">
      <Link to="/" className="brand">
        <img className="brand-logo" src="/assets/mamber-hub-logo.png" alt="Mamber Hub logo" />
        <span>
          <strong>Mamber <em>Hub</em></strong>
        </span>
      </Link>
      <Link to="/" className="back-home">← Back to Home</Link>
    </div>
  );
}

export default PageTopBar;
