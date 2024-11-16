import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section-container">
      <div className="parent">
        <div className="section">
          <div className="icon-container">
            <i className="ri-graduation-cap-fill"></i>
          </div>
          <h1>Certificate</h1>
          <p>
            A Google Docs scam that appears to be widespread began landing in
            Wednesday in what seemed to be a phishing attack.
          </p>
        </div>

        <div className="section">
          <div className="icon-container">
            <i className="ri-user-2-line"></i>
          </div>
          <h1>Expert Instructors</h1>
          <p>
            A Google Docs scam that appears to be widespread began landing in
            Wednesday in what seemed to be a phishing attack.
          </p>
        </div>

        <div className="section">
          <div className="icon-container">
            <i className="ri-rocket-2-fill"></i>
          </div>
          <h1>Learn from anywhere</h1>
          <p>
            A Google Docs scam that appears to be widespread began landing in
            Wednesday in what seemed to be a phishing attack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
