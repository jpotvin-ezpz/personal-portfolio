import React from 'react';
import Hobby from './Hobby';

function Hobbies() {
  return (
    <div className="hobbies">
      <h1 className="hobbies-title">Hobbies</h1>
      <Hobby
        imgSrc="./pics/sage-friedman-TT2J5t1QaMw-unsplash.jpg"
        title="Running"
        summary="Training for a Half-Marathon in May."
        credit="Credit: sage freidman on unsplash"
      />
      <Hobby
        imgSrc="./pics/sandra-seitamaa-xuStICQ3qRg-unsplash(1).jpg"
        title="Cooking"
        summary="Picked it up during Quarantine"
        credit="Credit: sandra seitamaa on unsplash"
      />
      <Hobby
        imgSrc="./pics/j-zamora-GWOTvo3qq7U-unsplash(1).jpg"
        title="Reading"
        summary="Who's your favorite author?"
        credit="Credit: j zamora on unsplash"
      />
    </div>
  );
}

export default Hobbies;
