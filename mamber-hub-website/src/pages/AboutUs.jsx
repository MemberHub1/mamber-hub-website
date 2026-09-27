import React from "react";

function AboutUs() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <p className="eyebrow">ABOUT MEMBER HUB</p>

        <h1>About <span>Us</span></h1>

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
            Mamber Hub provides tools for member management, payment
            tracking, video sharing, reports and administration.
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

          <a href="mailto:supportmember@gmail.com">
            supportmember@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;