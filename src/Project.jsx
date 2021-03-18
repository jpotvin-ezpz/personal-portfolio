/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function Project({
  tagArr, title, summary, demo, code, id, imgSrc,
}) {
  const tags = tagArr.map((tag) => (
    <li key={tag}>
      #
      {tag}
    </li>
  ));

  return (
    <div className="project">
      <div
        id={id}
        className="img-wrapper"
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      />
      <ul className="tags">{ tags }</ul>
      <h1 className="project-title">{title}</h1>
      <p>{ summary }</p>
      <div className="demo-wrapper">
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
    </div>
  );
}

export default Project;
