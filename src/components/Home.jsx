import React from "react";

const Home = () => {
  return (
    <main>
      <section className="about">
        <h2 className="about--title">A full-stack developer in the making</h2>
        <p className="about--description">
          I am currently studying software development at Northcoders, the
          leading coding bootcamp in the North.
        </p>
        <p className="about--description">
          Technology is ever-evolving, and so am I. My aim is to continually
          learn and improve as I develop clean applications that result in one
          less worry for you.
        </p>
        <p className="about--description">
          My primary language is JavaScript but i'm always eager to pick up
          something new.
        </p>
        <p className="about--description">
          You can check out my work<a href="./projects.html"> here</a> and view
          my github<a href="https://github.com/Hy-M"> here,</a> to see what i'm
          all about.
        </p>
        <p className="about--description">
          Got a question?<a href="./contact.html"> Let's chat.</a>
        </p>
      </section>
    </main>
  );
};

export default Home;
