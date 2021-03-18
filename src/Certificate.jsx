/* eslint-disable react/prop-types */
import React from 'react';

const Certificate = ({
  imgSrc, issueDate, certTitle, certLink,
}) => (
  <div className="cert">
    <div className="title-logo--wrapper">
      <img src={imgSrc} alt="agency-logo" />
      <div className="cert-issue--wrapper">
        <p className="issue-date">{issueDate}</p>
        <h2>{certTitle}</h2>
      </div>
    </div>
    <a
      className="credential-link"
      href={certLink}
      target="_blank"
      rel="noreferrer"
    >
      See Credential
    </a>
  </div>
);

export default Certificate;
