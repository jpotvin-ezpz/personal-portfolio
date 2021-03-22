/* eslint-disable max-len */
import React from 'react';
import profile from './pics/profile.webp';
import file from './documents/Frontend+Developer.pdf';

const Header = () => (
  <div className="header">
    <img className="profile-pic" src={profile} alt="jacob" />
    <div className="info-summary">
      <div className="personal-info--wrapper">
        <div className="name-resume">
          <h1>Jacob Potvin</h1>
          <h2>Frontend Developer</h2>
          <a href={file} type="application/pdf" download>
            Resume
            <span className="material-icons">
              download
            </span>
          </a>
        </div>
        <div className="contact-info">
          <address href="mailto:jpotvin@pm.com">
            <span className="material-icons social-links"> email </span>
            jpotvin@pm.me
          </address>
          <a href="https://www.linkedin.com/in/jpotvin12/" target="_blank" rel="noreferrer">
            <span className="material-icons social-links">
              group
            </span>
            LinkedIn
          </a>
        </div>
      </div>
      <p className="summary">
        Self-taught and self-starting developer passionate about bringing meaningful visions to life and translating ideas from the head to apps on the web.
      </p>
      <p className="summary">
        I believe there is no better competition than yourself and racing to beat yesterday is all you need to improve.
      </p>
    </div>
  </div>
);

export default Header;
