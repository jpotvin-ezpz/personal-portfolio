import React from 'react';

const Skills = () => (
  <div className="skills">
    <h1 className="skills-header">Front End</h1>
    <div className="skills-wrapper">
      <ul className="skills-list">
        <li className="skill skill-html">
          <p>HTML</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill skill-js">
          <p>JavaScript</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill skill-css">
          <p>CSS</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill skill-scss">
          <p>Sass</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill skill-bs">
          <p>Bootstrap</p>
          <div className="bar"><div className="progress" /></div>
        </li>
        <li className="skill skill-react">
          <p>React</p>
          <div className="bar"><div className="progress" /></div>
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
