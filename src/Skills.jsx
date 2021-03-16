import React from 'react';

const Skills = () => (
  <div className="skills">
    <h1 className="skills-header">Front End</h1>
    <div className="skills-wrapper">
      <ul>
        <li className="skill-html">
          <p>HTML</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill-css">
          <p>CSS</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill-js">
          <p>JavaScript</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill-scss">
          <p>Sass</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill-bs">
          <p>Bootstrap</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill-react">
          <p>React</p>
          <div className="bar"><div className="progress" /></div>
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
