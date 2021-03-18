import React from 'react';
import Certificate from './Certificate';
import fcclogo from './pics/fcc-logo.jpeg';
import dev from './pics/devchallenges.png';

const Certifications = () => (
  <div className="certs">
    <h1>Courses &amp; Certifcations</h1>
    <div className="certifications">
      <Certificate
        imgSrc={fcclogo}
        issueDate="Issued Mar 2021"
        certTitle="Front End Libraries"
        certLink="https://freecodecamp.org/certification/jpotvin/front-end-libraries"
      />
      <Certificate
        imgSrc={dev}
        issueDate="Issued Feb 2021"
        certTitle="Responsive Web Developer"
        certLink="https://devchallenges.io/certificates/c63uBhSP42pRnhPhDwDL"
      />
      <Certificate
        imgSrc={fcclogo}
        issueDate="Issued Jan 2021"
        certTitle="JavaScript Algorithms and Data Structures"
        certLink="https://freecodecamp.org/certification/jpotvin/javascript-algorithms-and-data-structures"
      />
    </div>
  </div>
);

export default Certifications;
