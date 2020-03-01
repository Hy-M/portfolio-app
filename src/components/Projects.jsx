import React from "react";
import { Router, Link } from "@reach/router";
import ProjectOne from "./ProjectOne";

const Projects = () => {
  return (
    <>
      <main>
        <section className="about">
          <h2 className="about--title">Front-end and back-end projects</h2>
          <ul>
            <li className="about--description">JavaScript & Node.js</li>
            <li className="about--description">PostgreSQL</li>
            <li className="about--description">Express.js</li>
            <li className="about--description">Knex.js & node postgres</li>
            <li className="about--description">React & Reach Router</li>
            <li className="about--description">& more...</li>
          </ul>
        </section>
        <section className="projects">
          <div className="projects--grid">
            <Link to="/projects/ncnews">
              <img
                className="projects--grid-image"
                src="./images/nc-news-screenshot.jpg"
                alt="A screenshot of a project"
              />
              <i className="projects--grid-image-icon fas fa-search"></i>
            </Link>
            <div className="projects--grid-image-overlay"></div>
            <a
              href="https://hym-nc-news.netlify.com/"
              className="projects--grid-link"
            >
              <i className="fas fa-mouse-pointer"></i> Visit the site
            </a>
            <a
              href=" https://github.com/Hy-M/fe-nc-news"
              className="projects--grid-link"
            >
              <i className="devicon-github-plain"></i> Front-end code
            </a>
            <a
              href="https://github.com/Hy-M/be-nc-news-sprint"
              className="projects--grid-link"
            >
              <i className="devicon-github-plain"></i> Back-end code
            </a>
          </div>
          <div className="projects--grid">
            <a href="./project-two.html">
              <img
                className="projects--grid-image"
                src="./images/crime-finder.png"
                alt="A screenshot of a project"
              />
              <i className="projects--grid-image-icon fas fa-search"></i>
            </a>
            <div className="projects--grid-image-overlay"></div>
            <a
              href="https://crime-finder.netlify.com/"
              className="projects--grid-link"
            >
              <i className="fas fa-mouse-pointer"></i> Visit the site
            </a>
            <a
              href="https://github.com/Hy-M/crime-visualiser"
              className="projects--grid-link"
            >
              <i className="devicon-github-plain"></i> Front-end code
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
