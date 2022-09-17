import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link className="header__nav-link" to="/portfolio">
                About
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/todo-list">
                Todo-list
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/counter">
                Counter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
