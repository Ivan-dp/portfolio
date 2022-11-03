import React, { useState } from "react";
import { ReactComponent as GitHubLogo } from "./GitHub.svg";

const CardAbout = () => {
  const [toggle, setToggle] = useState(true);
  const [className, setClassName] = useState("card-about");
  const [className2, setClassName2] = useState("card-about__description");

  console.log(toggle);

  function classNameToggle() {
    if (toggle) {
      setClassName("card-about open");
      setClassName2("card-about__description open");
    } else {
      setClassName("card-about");
      setClassName2("card-about__description");
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
      <div className={className2} onClick={(event) => event.stopPropagation()}>
        <div className="card-about__container">
          <ul>
            <li className="card-about__education">
              <h2>Образование</h2>
              <ul>
                <li className="card-about__university">
                  <h3>
                    Московский финансово-промышленный университет "Синергия";
                  </h3>
                  <ul>
                    <li className="card-about__specialty">
                      <p>Информационные Системы и Технологии;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>
                        Разработка, сопровождение и обеспечение безопасности
                        информационных систем.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="card-about__university">
                  <h3>БПЛ №17.</h3>
                  <ul>
                    <li className="card-about__specialty">
                      <p>Технология Машиностроения, инженер-технолог.</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="card-about__container">
          <ul>
            <li className="card-about__education">
              <h2>Дополнительное образование</h2>
              <ul>
                <li className="card-about__university">
                  <h3>MetaLamp;</h3>
                  <ul>
                    <li className="card-about__specialty">
                      <p>HTML/Pug;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>CSS/SCSS;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>JS;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>Webpack;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>JQuery.</p>
                    </li>
                  </ul>
                </li>
                <li className="card-about__university">
                  <h3>Стажировка у ментора;</h3>
                  <ul>
                    <li className="card-about__specialty">
                      <p>React;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>Redux;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>React hooks;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>React.Context;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>JavaScript;</p>
                    </li>
                    <li className="card-about__specialty">
                      <p>REST API.</p>
                    </li>
                  </ul>
                </li>
                <li className="card-about__university">
                  <h3>FreeCodeCamp.</h3>
                  <ul>
                    <li className="card-about__specialty">
                      <p>JavaScript.</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { CardAbout };
