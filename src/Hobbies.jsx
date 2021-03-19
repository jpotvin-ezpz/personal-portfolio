import React from 'react';
import Hobby from './Hobby';
import running from './pics/sage-friedman.webp';
import cooking from './pics/sandra-seitamaa.webp';
import reading from './pics/j-zamora.webp';

function Hobbies() {
  return (
    <div className="hobbies">
      <h1 className="hobbies-title">Hobbies</h1>
      <div className="hobby-wrapper">
        <Hobby
          imgSrc={running}
          title="Running"
          summary="Training for a Half-Marathon in May."
          credit="Credit: sage freidman on unsplash"
        />
        <Hobby
          imgSrc={cooking}
          title="Cooking"
          summary="Picked it up during Quarantine"
          credit="Credit: sandra seitamaa on unsplash"
        />
        <Hobby
          imgSrc={reading}
          title="Reading"
          summary="Who's your favorite author?"
          credit="Credit: j zamora on unsplash"
        />
      </div>
    </div>
  );
}

export default Hobbies;
