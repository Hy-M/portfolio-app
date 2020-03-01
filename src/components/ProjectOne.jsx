import React from "react";

const ProjectOne = () => {
  return (
    <main>
      <section className="about">
        <h2 className="about--title">NC NEWS - a Reddit inspired news app</h2>
        <p className="about--description">
          A full-stack, single-page, interactive application. Users can post a
          comment, delete their own comment, vote on articles and comments, and
          browse through filtered and sorted articles. The data is accessed
          through a RESTful API with endpoints, whilst the front-end is a
          single-page React application.
        </p>
        <p className="about--description about--description-links">
          <a href="https://hym-nc-news.netlify.com/">View the hosted site</a> |
          <a href="https://github.com/Hy-M/fe-nc-news">the front-end code</a> |
          <a href="https://github.com/Hy-M/be-nc-news-sprint">
            the back-end code
          </a>
        </p>
        <img
          className="project--img"
          src="./images/nc-news-site-collage.jpg"
          alt="Hosted NC News site"
        />
        <p className="about--description">
          The front-end code was split into components to make independant,
          reusable bits of code. It was built using:
        </p>
        <ul className="about--list">
          <li>React</li>
          <li>Reach Router</li>
          <li>Axios</li>
          <li>Mocha & Chai</li>
        </ul>
        <p className="about--description">
          The back-end code follows a model-view-controller architecture for
          seperation of the applications' concerns. It was built using:
        </p>
        <ul className="about--list">
          <li>PostgreSQL</li>
          <li>Express.js</li>
          <li>Knex.js & node-postgres</li>
          <li>Mocha, Chai & Chai Sorted</li>
          <li>Supertest</li>
        </ul>
      </section>
    </main>
  );
};

export default ProjectOne;
