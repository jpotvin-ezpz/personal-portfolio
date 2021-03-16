/* eslint-disable max-len */
import React from 'react';

const Header = () => (
  <div className="header">
    <div className="img-wrapper">
      <img src="src/pics/arms-crossed-profile-pic (copy).jpg" alt="jacob" />
    </div>
    <div className="personal-info--wrapper">
      <div className="name-resume">
        <h1>Jacob Potvin</h1>
        <h2>Frontend Developer</h2>
        <a href="./documents/Frontend+Developer.pdf" type="application/pdf" download>Resume</a>
      </div>
      <div className="contact-info">
        <address href="mailto:jpotvin@pm.com">jpotvin@pm.me</address>
        <a href="https://www.linkedin.com/in/jpotvin12/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
    <p className="summary">
      Self-taught and self-starting developer who is is passionate about bringing meaningful visions to life and translating the ideas from your head to apps on the web.
    </p>
    <p className="summary">
      I believe there is no better competition than yourself and racing to beat yesterday is all you need to improve.
    </p>
  </div>
);

export default Header;
