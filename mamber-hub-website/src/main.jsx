import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import "./app-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";
import DeleteAccount from "./pages/DeleteAccount";
import Home from "./pages/Home";
import MamberHub from "./pages/MamberHub";
import SchoolManagement from "./pages/SchoolManagement";
import SchoolPrivacy from "./pages/SchoolPrivacy";
import Qissabaaz from "./pages/Qissabaaz";
import QissabaazPolicy from "./pages/QissabaazPolicy";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/mamber-hub" element={<MamberHub />} />

      <Route path="/school-management" element={<SchoolManagement />} />

      <Route path="/school-management/privacy-policy" element={<SchoolPrivacy />} />

      <Route path="/qissabaaz" element={<Qissabaaz />} />

      <Route path="/qissabaaz/privacy-policy" element={<QissabaazPolicy kind="privacy" />} />

      <Route path="/qissabaaz/terms" element={<QissabaazPolicy kind="terms" />} />

      <Route path="/qissabaaz/child-safety" element={<QissabaazPolicy kind="child-safety" />} />

      <Route path="/qissabaaz/delete-account" element={<QissabaazPolicy kind="delete" />} />

      <Route path="/contact" element={<ContactUs />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="/terms" element={<TermsConditions />} />

      <Route path="/delete-account" element={<DeleteAccount />} />

      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);