import React from 'react';
import Certificate from './Certificate';

const Certifications = () => (
  <div className="certs--main-wrapper">
    <h1>Courses &amp; Certifcations</h1>
    <div className="certifications">
      <Certificate
        imgSrc="./pics/fcc-logo.jpeg"
        issueDate="Issued Mar 2021"
        certTitle="Front End Libraries"
        certLink="https://freecodecamp.org/certification/jpotvin/front-end-libraries"
      />
      <Certificate
        imgSrc="./pics/devchallenges.png"
        issueDate="Issued Feb 2021"
        certTitle="Responsive Web Developer"
        certLink="https://devchallenges.io/certificates/c63uBhSP42pRnhPhDwDL"
      />
      <Certificate
        imgSrc="./pics/fcc-logo.jpeg"
        issueDate="Issued Jan 2021"
        certTitle="JavaScript Algorithms and Data Structures"
        certLink="https://freecodecamp.org/certification/jpotvin/javascript-algorithms-and-data-structures"
      />
      <Certificate
        imgSrc="./pics/fcc-logo.jpeg"
        issueDate="Issued May 2020"
        certTitle="Responsive Web Design"
        certLink="https://www.freecodecamp.org/certification/jpotvin/responsive-web-design"
      />
    </div>
  </div>
);

export default Certifications;
