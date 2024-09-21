import React from "react";
import "./AboutMe.css";

import myImage from "../../assets/images/profile-pic.jpg";

import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{t("aboutTitle")}</h5>
          <h1>{t("introduceTtile")}</h1>

          <div className="intro-info">
            <img src={myImage} alt="Profile Picture" />

            <p className="lead">{t("aboutDesc")}</p>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>{t("profile")}</h3>
          <p>{t("profileDesc")}</p>

          <ul className="info-list">
            <li>
              <strong>{t("fullNameTitle")}</strong>
              <span>{t("name")}</span>
            </li>
            <li>
              <strong>{t("birthDateTitle")}</strong>
              <span>{t("birthDate")}</span>
            </li>
            <li>
              <strong>{t("jobTitle")}</strong>
              <span>{t("job")}</span>
            </li>
            <li>
              <strong>{t("websiteTitle")}</strong>
              <span>{t("website")}</span>
            </li>
            <li>
              <strong>{t("emailTitle")}</strong>
              <span>{t("email")}</span>
            </li>
          </ul>
        </div>

        <div className="col-six tab-full">
          <h3>{t("skills")}</h3>
          <p>{t("skillsDesc")}</p>

          <ul className="skill-bars">
            <li>
              <div className="progress percent90">
                <span>90%</span>
              </div>
              <strong>HTML5</strong>
            </li>
            <li>
              <div className="progress percent85">
                <span>85%</span>
              </div>
              <strong>CSS3</strong>
            </li>
            <li>
              <div className="progress percent70">
                <span>70%</span>
              </div>
              <strong>JQuery</strong>
            </li>
            <li>
              <div className="progress percent95">
                <span>95%</span>
              </div>
              <strong>PHP</strong>
            </li>
            <li>
              <div className="progress percent75">
                <span>75%</span>
              </div>
              <strong>Wordpress</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <a
            href="#contact"
            title="Hire Me"
            className="button stroke smoothscroll"
          >
            {t("hireMe")}
          </a>
          <a href="#" title="Download CV" className="button button-primary">
            {t("downloadCv")}
          </a>
        </div>
      </div>
    </section>
  );
}
