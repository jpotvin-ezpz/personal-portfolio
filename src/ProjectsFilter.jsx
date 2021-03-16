import React from 'react';
import Project from './Project';

const ProjectsFilter = () => (
  <div>
    <h1 className="project-filter--header">Projects</h1>
    <div className="btn-wrapper">
      <button type="button" className="filter-btn active" id="all-btn">All</button>
      <button type="button" className="filter-btn" id="html-btn">HTML &amp; CSS</button>
      <button type="button" className="filter-btn" id="js-btn">JavaScript</button>
      <button type="button" className="filter-btn" id="fw-btn">React</button>
    </div>
    <Project
      imgSrc="./pics/Screenshot_2021-03-16 CodePen - Pomodoro Timer.png"
      tagArr={['html', 'css', 'react']}
      title="Pomodoro Timer"
      summary="A customizable 25/5 timer built as a submission to FreeCodeCamp as part of the frontend libraries certificate."
      demo="https://codepen.io/jpotvin/pen/qBqgqdw"
      code="https://codepen.io/jpotvin/pen/qBqgqdw"
    />
    <Project
      imgSrc="./pics/Screenshot_2021-03-16 CodePen - JavaScript Calculator Project.png"
      tagArr={['html', 'css', 'react']}
      title="React Calculator"
      summary="A simple calcluator built with React using immediate execution logic as a submission to FreeCodeCamp as part of the frontend libraries certificate."
      demo="https://codepen.io/jpotvin/pen/QWGzyrv"
      code="https://codepen.io/jpotvin/pen/QWGzyrv"
    />
    <Project
      imgSrc="./pics/drum-machine.png"
      tagArr={['html', 'css', 'react']}
      title="Drum Machine"
      summary="Interactive drum machine built with React as a submission to FreeCodeCamp as part of the frontend libraries certificate."
      demo="https://innocent-name.surge.sh/"
      code="https://github.com/jpotvin-ezpz/drum-machine"
    />
    <Project
      imgSrc="./pics/markdown-previewer.png"
      tagArr={['html', 'css', 'react']}
      title="Markdown Previewer"
      summary=""
      demo="https://diligent-body.surge.sh/"
      code="https://github.com/jpotvin-ezpz/markdown-previewer"
    />
    <Project
      imgSrc="./pics/random-quote.png"
      tagArr={['html', 'css', 'react']}
      title="Random Quote Machine"
      summary=""
      demo="https://useless-cause.surge.sh/"
      code="https://github.com/jpotvin-ezpz/random-quote-machine"
    />
    <Project
      imgSrc="./pics/ediehomepage.png"
      tagArr={['html', 'css']}
      title="Edie Homepage"
      summary=""
      demo="https://descriptive-noise.surge.sh/"
      code="https://github.com/jpotvin-ezpz/edie-homepage-challenge"
    />
    <Project
      imgSrc="./pics/checkout-page.png"
      tagArr={['html', 'css']}
      title="Checkout Page"
      summary=""
      demo="https://rural-sweater.surge.sh/"
      code="https://github.com/jpotvin-ezpz/checkout-page-challenge/"
    />
    <Project
      imgSrc="./pics/gallery-website.png"
      tagArr={['html', 'css']}
      title="Instagram Gallery"
      summary=""
      demo="https://befitting-dinner.surge.sh/"
      code="https://github.com/jpotvin-ezpz/my-gallery-challenge"
    />
    <Project
      imgSrc="./pics/recipe-blog.png"
      tagArr={['html', 'css']}
      title="Recipe Blog"
      summary=""
      demo="https://coordinated-pollution.surge.sh/"
      code="https://github.com/jpotvin-ezpz/recipe-blog-challenge"
    />
    <Project
      imgSrc="./pics/interior-consultant.png"
      tagArr={['html', 'css']}
      title="Interior Consultant"
      summary=""
      demo="https://rural-bridge.surge.sh/"
      code="https://github.com/jpotvin-ezpz/interior-consultant"
    />
    <Project
      imgSrc="./pics/404-error.png"
      tagArr={['html', 'css']}
      title="404 Page"
      summary=""
      demo="https://new-toe.surge.sh/"
      code="https://github.com/jpotvin-ezpz/404-not-found-challenge"
    />
    <Project
      imgSrc="./pics/creative-crew.png"
      tagArr={['html', 'css']}
      title="Creative Crew"
      summary=""
      demo="https://puzzled-joke.surge.sh/"
      code="https://github.com/jpotvin-ezpz/creative-crew"
    />
    <Project
      imgSrc="./pics/creatives-website.png"
      tagArr={['html', 'css']}
      title="Website for Creatives"
      summary=""
      demo="https://gusty-reward.surge.sh/"
      code="https://github.com/jpotvin-ezpz/website-for-creatives"
    />
  </div>
);

export default ProjectsFilter;
