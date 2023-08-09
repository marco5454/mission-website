import React from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Me</Link>
        </li>
        <li>
          <a href="/">Areas</a>
        </li>
        <li>
          <a href="/">Photos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
