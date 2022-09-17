import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a className="header__nav-link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="header__nav-link" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="header__nav-link" href="#">
                Todo-list
              </a>
            </li>
            <li>
              <a className="header__nav-link" href="#">
                Counter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
