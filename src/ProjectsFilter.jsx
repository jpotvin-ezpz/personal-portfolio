import React from 'react';
import Project from './Project';
import drums from './pics/drum-machine.png';
import mdPreviewer from './pics/markdown-previewer.png';
import quote from './pics/random-quote.png';
import edie from './pics/ediehomepage.jpg';
import checkout from './pics/checkout-page.png';
import gallery from './pics/gallery-website.png';
import blog from './pics/recipe-blog.png';
import consult from './pics/interior-consultant.png';
import error from './pics/404-error.png';
import crew from './pics/creative-crew.png';
import creatives from './pics/creatives-website.png';

import pomodoro from './pics/pomodoro.png';
import calculator from './pics/calculator.png';

function ProjectsFilter() {
  return (
    <div className="projects">
      <div className="filter-wrapper">
        <h1 className="project-filter--header">Projects</h1>
        <div className="btn-wrapper">
          <button type="button" className="filter-btn active" id="all-btn">All</button>
          <button type="button" className="filter-btn" id="html-btn">HTML &amp; CSS</button>
          <button type="button" className="filter-btn" id="js-btn">JavaScript</button>
          <button type="button" className="filter-btn" id="fw-btn">React</button>
        </div>
      </div>
      <div className="projects-wrapper">
        <Project
          id="pomodoro"
          imgSrc={pomodoro}
          tagArr={['html', 'css', 'react']}
          title="Pomodoro Timer"
          summary="A customizable 25/5 timer built as a submission to FreeCodeCamp as part of the frontend libraries certificate."
          demo="https://codepen.io/jpotvin/pen/qBqgqdw"
          code="https://codepen.io/jpotvin/pen/qBqgqdw"
        />
        <Project
          id="calc"
          imgSrc={calculator}
          tagArr={['html', 'css', 'react']}
          title="React Calculator"
          summary="A simple calcluator built with React using immediate execution logic as a submission to FreeCodeCamp as part of the frontend libraries certificate."
          demo="https://codepen.io/jpotvin/pen/QWGzyrv"
          code="https://codepen.io/jpotvin/pen/QWGzyrv"
        />
        <Project
          id="drums"
          imgSrc={drums}
          tagArr={['html', 'css', 'react']}
          title="Drum Machine"
          summary="Interactive drum machine built with React as a submission to FreeCodeCamp as part of the frontend libraries certificate."
          demo="https://innocent-name.surge.sh/"
          code="https://github.com/jpotvin-ezpz/drum-machine"
        />
        <Project
          id="previewer"
          imgSrc={mdPreviewer}
          tagArr={['html', 'css', 'react']}
          title="Markdown Previewer"
          summary="A markdown previewer made using the Marked library markdown parser as a submission for the FreeCodeCamp frontend libraries certificate."
          demo="https://diligent-body.surge.sh/"
          code="https://github.com/jpotvin-ezpz/markdown-previewer"
        />
        <Project
          id="quote"
          imgSrc={quote}
          tagArr={['html', 'css', 'react']}
          title="Random Quote Machine"
          summary="Need some inspiration? Click 'new quote' and get some fresh wisdom! Made as a submission for the FreeCodeCamp frontend libraries certificate."
          demo="https://useless-cause.surge.sh/"
          code="https://github.com/jpotvin-ezpz/random-quote-machine"
        />
        <Project
          id="edie"
          imgSrc={edie}
          tagArr={['html', 'css']}
          title="Edie Homepage"
          summary="A mock web designer website made using only HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io."
          demo="https://descriptive-noise.surge.sh/"
          code="https://github.com/jpotvin-ezpz/edie-homepage-challenge"
        />
        <Project
          id="checkout"
          imgSrc={checkout}
          tagArr={['html', 'css']}
          title="Checkout Page"
          summary="Mock checkout page made using only HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io."
          demo="https://rural-sweater.surge.sh/"
          code="https://github.com/jpotvin-ezpz/checkout-page-challenge/"
        />
        <Project
          id="gallery"
          imgSrc={gallery}
          tagArr={['html', 'css']}
          title="Gallery Project"
          summary="Pinterest-like layout made using only HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io."
          demo="https://befitting-dinner.surge.sh/"
          code="https://github.com/jpotvin-ezpz/my-gallery-challenge"
        />
        <Project
          id="blog"
          imgSrc={blog}
          tagArr={['html', 'css']}
          title="Recipe Blog"
          summary="Follow this completely legitimate cheesecake recipe for your next baking escapade. Made using HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io."
          demo="https://coordinated-pollution.surge.sh/"
          code="https://github.com/jpotvin-ezpz/recipe-blog-challenge"
        />
        <Project
          id="consult"
          imgSrc={consult}
          tagArr={['html', 'css']}
          title="Interior Consultant"
          summary="Interior designer webpage made using HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io."
          demo="https://rural-bridge.surge.sh/"
          code="https://github.com/jpotvin-ezpz/interior-consultant"
        />
        <Project
          id="error"
          imgSrc={error}
          tagArr={['html', 'css']}
          title="404 Page"
          summary="Uh oh...Made as a submission to the devChallenges.io Responsive Web Developer certificate."
          demo="https://new-toe.surge.sh/"
          code="https://github.com/jpotvin-ezpz/404-not-found-challenge"
        />
        <Project
          id="crew"
          imgSrc={crew}
          tagArr={['html', 'css']}
          title="Creative Crew"
          summary="Meet my creative team of definitely real people who work for a very real company. Made for the Responsive Web Developer certificate of devChallenges.io."
          demo="https://puzzled-joke.surge.sh/"
          code="https://github.com/jpotvin-ezpz/creative-crew"
        />
        <Project
          id="creatives"
          imgSrc={creatives}
          tagArr={['html', 'css', 'javascript']}
          title="Website for Creatives"
          summary="Possibly my future freelancing landing page? Made using HTML, CSS & CSS Animations, and some vanilla JavaScript for the on-click effects."
          demo="https://gusty-reward.surge.sh/"
          code="https://github.com/jpotvin-ezpz/website-for-creatives"
        />
      </div>
    </div>
  );
}

export default ProjectsFilter;
