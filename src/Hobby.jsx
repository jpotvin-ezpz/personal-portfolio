/* eslint-disable react/prop-types */
import React from 'react';

const Hobby = ({
  imgSrc, title, summary, credit,
}) => (
  <div className="hobby">
    <div
      className="hobby-img"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
      alt={credit}
    />
    <h2 className="hobby-title">{title}</h2>
    <p className="project-summary">{summary}</p>
  </div>
);

export default Hobby;
