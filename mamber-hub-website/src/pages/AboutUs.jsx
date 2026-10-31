import React from "react";
import PageTopBar from "./PageTopBar";
import { COMPANY_LOGO_STACKED, COMPANY_NAME } from "../links";

function AboutUs() {
  return (
    <div className="contact-page">
      <PageTopBar />
      <div className="contact-container">
        <img className="about-logo" src={COMPANY_LOGO_STACKED} alt={COMPANY_NAME} width="220" height="265" />

        <p className="eyebrow">ABOUT {COMPANY_NAME.toUpperCase()}</p>

        <h1>About <span>Us</span></h1>

        <p className="contact-intro">
          {COMPANY_NAME} builds simple apps that make work simple — Mamber Hub for
          communities and memberships, and School Management for schools. We are based
          in Lahore, Pakistan.
        </p>

        <p className="contact-intro">
          Mamber Hub is a modern membership management platform designed
          to make member management simple, organized and efficient.
        </p>

        <div className="contact-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide an easy-to-use platform that helps
            organizations manage members, payments, videos and membership
            activities in one place.
          </p>
        </div>

        <div className="contact-card">
          <h2>What We Provide</h2>
          <p>
            Members get a personal dashboard, a library of member videos,
            Basic and Premium plans, easy payment proof upload and their own
            referral code. Admins get member management, payment
            verification, collection reports and account tools.
          </p>
        </div>

        <div className="contact-card">
          <h2>Simple & Organized</h2>
          <p>
            We focus on creating a clean and simple experience so that
            members and administrators can manage their activities easily.
          </p>
        </div>

        <div className="contact-card">
          <h2>Our Support</h2>
          <p>
            If you need help with Mamber Hub, our support team is available
            to assist you.
          </p>

          <a href="mailto:supportmemberhub@gmail.com">
            supportmemberhub@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;