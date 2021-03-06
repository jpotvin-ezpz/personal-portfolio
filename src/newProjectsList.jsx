/* eslint-disable */
import { useState, useEffect, React } from "react";

function ProjectsList() {
  const [projects, setProjects] = useState([
    {
      title: "Pray for Rockville",
      summary:
        "Local hub for all things Prolife in Rockville Maryland. Built with Gatsby and hosted on Netlify.",
      demo: "https://prayforrockville.com",
      code: "https://gitlab.com/jpotvin/pray-for-rockville",
      imgSrc: "./pics/pray-rock.webp",
      tagArr: ["gatsby", "react", "javascript"],
      id: "pray-for-rockville",
    },
    {
      title: "Into the Hall",
      summary:
        "An apologetics blog focused on bringing the unaffiliated from secularism to the Faith. Built with NetlifyCMS and Gatsby static site generator.",
      demo: "https://intothehall.com",
      code: "https://gitlab.com/jpotvin/into-the-hall",
      imgSrc: "./pics/into-hall.webp",
      tagArr: ["gatsby", "react", "javascript"],
      id: "into-the-hall",
    },
    {
      title: "Github Jobs",
      summary:
        "Using the Github Jobs API look up a list of jobs anywhere in the world or choose from a list of popular cities. Request to the api access through this url:https://cors-anywhere.herokuapp.com/corsdemo ",
      demo: "https://succinct-snow.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/github-jobs",
      imgSrc: "./pics/github-jobs.webp",
      tagArr: ["javascript", "react"],
      id: "github-jobs",
    },
    {
      title: "Weather App",
      summary:
        "Using the MetaWeather API automatically get you local weather forecast or lookup the weather in another city. Because MetaWeather has been increasing in popularity they may require you to request access through this url:https://cors-anywhere.herokuapp.com/corsdemo ",
      demo: "https://fragile-sink.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/weather-app",
      imgSrc: "./pics/weather-app.webp",
      tagArr: ["javascript", "react"],
      id: "weather-app",
    },
    {
      title: "Country Quiz",
      summary: "Quiz app using the https://restcountries.eu/ API",
      demo: "https://sable-badge.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/quiz-app",
      imgSrc: "./pics/country-quiz.webp",
      tagArr: ["javascript", "react"],
      id: "country-quiz",
    },
    {
      title: "Another Todo List",
      summary:
        "I know everyone does this, but I was curious to see how I could make it work. It was relatively easy, I made it more interesting by practicing my project organization skills and making my code as DRY as possible.",
      demo: "https://delirious-disgust.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/todo-app",
      imgSrc: "./pics/todo-app.webp",
      tagArr: ["javascript", "react"],
      id: "todo-app",
    },
    {
      title: "Airbnb Clone",
      summary:
        "A website deployed through surge.sh with a filterable list of rentals and a UI that follows the amazing airbnb design.",
      demo: "https://vulgar-word.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/windbnb",
      imgSrc: "./pics/windbnb.webp",
      tagArr: ["javascript", "react"],
      id: "windbnb",
    },
    {
      title: "Pomodoro Timer",
      summary:
        "A customizable 25/5 timer built as a submission to FreeCodeCamp as part of the frontend libraries certificate.",
      demo: "https://codepen.io/jpotvin/pen/qBqgqdw",
      code: "https://codepen.io/jpotvin/pen/qBqgqdw",
      imgSrc: "./pics/pomodoro.webp",
      tagArr: ["javascript", "react"],
      id: "pomodoro",
    },
    {
      title: "React Calculator",
      summary:
        "A simple calcluator built with React using immediate execution logic as a submission to FreeCodeCamp as part of the frontend libraries certificate.",
      demo: "https://codepen.io/jpotvin/pen/QWGzyrv",
      code: "https://codepen.io/jpotvin/pen/QWGzyrv",
      imgSrc: "./pics/calculator.webp",
      tagArr: ["javascript", "react"],
      id: "calc",
    },
    {
      title: "Drum Machine",
      summary:
        "Interactive drum machine built with React as a submission to FreeCodeCamp as part of the frontend libraries certificate.",
      demo: "https://innocent-name.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/drum-machine",
      imgSrc: "./pics/drum-machine.webp",
      tagArr: ["javascript", "react"],
      id: "drums",
    },
    {
      title: "Markdown Previewer",
      summary:
        "A markdown previewer made using the Marked library markdown parser as a submission for the FreeCodeCamp frontend libraries certificate.",
      demo: "https://diligent-body.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/markdown-previewer",
      imgSrc: "./pics/markdown-previewer.webp",
      tagArr: ["javascript", "react"],
      id: "previewer",
    },
    {
      title: "Random Quote Machine",
      summary:
        "Need some inspiration? Click 'new quote' and get some fresh wisdom! Made as a submission for the devChallenges Frontend Developer Certificate.",
      demo: "https://energetic-beds.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/quote-generator-with-features",
      imgSrc: "./pics/random-quote.webp",
      tagArr: ["javascript", "react"],
      id: "quote",
    },
    {
      title: "Edie Homepage",
      summary:
        "A mock web designer website made using only HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io.",
      demo: "https://descriptive-noise.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/edie-homepage-challenge",
      imgSrc: "./pics/ediehomepage.webp",
      tagArr: ["html", "css"],
      id: "edie",
    },
    {
      title: "Checkout Page",
      summary:
        "Mock checkout page made using only HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io.",
      demo: "https://rural-sweater.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/checkout-page-challenge/",
      imgSrc: "./pics/checkout-page.webp",
      tagArr: ["html", "css"],
      id: "checkout",
    },
    {
      title: "Pinterest Gallery",
      summary:
        "Pinterest-like layout made using only HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io.",
      demo: "https://befitting-dinner.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/my-gallery-challenge",
      imgSrc: "./pics/gallery-website.webp",
      tagArr: ["html", "css"],
      id: "gallery",
    },
    {
      title: "Recipe Blog",
      summary:
        "Follow this completely legitimate cheesecake recipe for your next baking escapade. Made using HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io.",
      demo: "https://coordinated-pollution.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/recipe-blog-challenge",
      imgSrc: "./pics/recipe-blog.webp",
      tagArr: ["html", "css"],
      id: "blog",
    },
    {
      title: "Interior Consultant",
      summary:
        "Interior designer webpage made using HTML and CSS as part of the Responsive Web Developer certificate from devChallenges.io.",
      demo: "https://rural-bridge.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/interior-consultant",
      imgSrc: "./pics/interior-consultant.webp",
      tagArr: ["html", "css"],
      id: "consult",
    },
    {
      title: "404 Page",
      summary:
        "Uh oh...Made as a submission to the devChallenges.io Responsive Web Developer certificate.",
      demo: "https://new-toe.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/404-not-found-challenge",
      imgSrc: "./pics/404-error.webp",
      tagArr: ["html", "css"],
      id: "error",
    },
    {
      title: "Creative Crew",
      summary:
        "Meet my creative team of definitely real people who work for a very real company. Made for the Responsive Web Developer certificate of devChallenges.io.",
      demo: "https://puzzled-joke.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/creative-crew",
      imgSrc: "./pics/creative-crew.webp",
      tagArr: ["html", "css"],
      id: "crew",
    },
    {
      title: "Website for Creatives",
      summary:
        "Possibly my future freelancing landing page? Made using HTML, CSS & CSS Animations, and some vanilla JavaScript for the on-click effects.",
      demo: "https://gusty-reward.surge.sh/",
      code: "https://github.com/jpotvin-ezpz/website-for-creatives",
      imgSrc: "./pics/creatives-website.webp",
      tagArr: ["javascript"],
      id: "creatives",
    },
  ]);
  const [filteredProjects, setFilteredProjects] = useState([...projects]);

  const projectsList = (
    <div className="projects-wrapper">
      {filteredProjects.map((project) => (
        <div className="project" key={project.id} id={project.id}>
          <a href={project.demo} target="_blank" rel="noreferrer">
            <div
              className="img-wrapper"
              style={{
                backgroundImage: `url(${project.imgSrc})`,
              }}
            />
          </a>
          <ul className="tags">
            {project.tagArr.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
          <h1 className="project-title">{project.title}</h1>
          <p>{project.summary}</p>
          <div className="demo-wrapper">
            <a
              className="demo"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="code"
              href={project.code}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
  const handleFilter = (e) => {
    const { id } = e.target;
    const btn = e.target;
    let visProjects;

    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((button) => button.classList.remove("active"));

    switch (id) {
      case "js-btn":
        visProjects = projects.filter((project) =>
          project.tagArr.includes("javascript")
        );
        setFilteredProjects(visProjects);
        btn.classList.add("active");
        break;
      case "html-btn":
        visProjects = projects.filter((project) =>
          project.tagArr.includes("html")
        );
        setFilteredProjects(visProjects);
        btn.classList.add("active");
        break;
      case "fw-btn":
        visProjects = projects.filter((project) =>
          project.tagArr.includes("react")
        );
        setFilteredProjects(visProjects);
        btn.classList.add("active");
        break;
      default:
        setFilteredProjects(projects);
        btn.classList.add("active");
    }
  };

  return (
    <div className="projects">
      <div className="filter-wrapper">
        <h1 className="project-filter--header">Projects</h1>
        <div className="btn-wrapper">
          <button
            onClick={(e) => handleFilter(e)}
            type="button"
            className="filter-btn active"
            id="all-btn"
          >
            All
          </button>
          <button
            onClick={(e) => handleFilter(e)}
            type="button"
            className="filter-btn"
            id="html-btn"
          >
            Pure HTML &amp; CSS
          </button>
          <button
            onClick={(e) => handleFilter(e)}
            type="button"
            className="filter-btn"
            id="js-btn"
          >
            JavaScript
          </button>
          <button
            onClick={(e) => handleFilter(e)}
            type="button"
            className="filter-btn"
            id="fw-btn"
          >
            React
          </button>
        </div>
      </div>
      {projectsList}
    </div>
  );
}

export default ProjectsList;
