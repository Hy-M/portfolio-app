import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav--items">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <i class="devicon-github-plain colored"></i>
        </li>
      </ul>
    </nav>
  );
};

// <a href="https://github.com/Hy-M" target="_blank">
//   <i class="devicon-github-plain colored"></i>
// </a>

export default Nav;
