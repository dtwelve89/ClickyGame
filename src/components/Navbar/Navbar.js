import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div>
    <nav className="navbar sticky navbar-light bg-light">
      <ul>
        <li>
          <a href="/">Restart Game</a>
        </li>
        <li>{props.message}</li>
        <li>
          Score: " 
          {props.score}"
           | Top Score: "
          {props.topScore}"
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;