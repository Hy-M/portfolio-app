import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectOne from "./components/ProjectOne";

function App() {
  return (
    <div>
      <Title />
      <Nav />
      <Router>
        <Home path="/" />
        <Projects path="/projects" />
        <ProjectOne path="/projects/ncnews" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
