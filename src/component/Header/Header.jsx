import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Header.css";

import { useTranslation } from "react-i18next";

export default function Header() {

  const { t } = useTranslation()

  return (
    <header id="intro">
      <div className="intro-overlay"></div>

      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>{t("helloWorld")}</h5>
            <h1>
              <Typewriter
                words={t("words", { returnObjects: true })}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            <p className="intro-position">
              <span>{t("headerSubtitle")}</span>
              {/* <span>UI/UX Designer</span> */}
            </p>

            <a className="button stroke smoothscroll" href="#about" title="">
              {t("aboutMe")}
            </a>
          </div>
        </div>
      </div>

      <ul className="intro-social">
        <li>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>

    </header>
  );
}
