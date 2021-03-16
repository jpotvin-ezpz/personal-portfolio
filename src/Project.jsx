/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function Project({
  tagArr, imgSrc, title, summary, demo, code,
}) {
  const tags = tagArr.map((tag) => (
    <li key={tag}>
      #
      {tag}
    </li>
  ));

  return (
    <div className="project">
      <img src={imgSrc} alt="project-screenshot" />
      <ul className="tags">{ tags }</ul>
      <h1 className="project-title">{title}</h1>
      <p>{ summary }</p>
      <a
        className="demo"
        href={demo}
        target="_blank"
        rel="noreferrer"
      >
        Demo
      </a>
      <a
        className="code"
        href={code}
        target="_blank"
        rel="noreferrer"
      >
        Code
      </a>
    </div>
  );
}

export default Project;
