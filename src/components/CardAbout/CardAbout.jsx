import React, { useState } from "react";
import { ReactComponent as GitHubLogo } from "./GitHub.svg";

const CardAbout = () => {
  const [toggle, setToggle] = useState(true);
  const [className, setClassName] = useState("card-about");

  console.log(toggle);

  function classNameToggle() {
    if (toggle) {
      setClassName("card-about_open");
    } else {
      setClassName("card-about");
    }
  }

  return (
    <div
      className={className}
      onClick={() => {
        setToggle(!toggle);
        classNameToggle();
      }}
    >
      <div className="card-about__main">
        <div className="card-about__photo"></div>
        <div className="card-about__info">
          <h1>Ivan Litovchenko</h1>
          <h2>Frontend developer</h2>
          <a href="https://github.com/Ivan-dp">
            <GitHubLogo />
          </a>
        </div>
      </div>
      <div className="card-about__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet maxime
          similique numquam ducimus expedita veritatis non voluptatem ut
          reiciendis modi debitis, atque harum enim autem nemo ex, saepe ipsam
          ea.
        </p>
      </div>
    </div>
  );
};

export { CardAbout };
