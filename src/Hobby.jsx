/* eslint-disable react/prop-types */
import React from 'react';

const Hobby = ({
  imgSrc, title, summary, credit,
}) => (
  <div className="hobby">
    <img src={imgSrc} alt={credit} />
    <h2 className="hobby-title">{title}</h2>
    <p>{summary}</p>
  </div>
);

export default Hobby;
