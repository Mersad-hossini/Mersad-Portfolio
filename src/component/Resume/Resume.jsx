import React from "react";
import "./Resume.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";


export default function Resume() {
  const { t } = useTranslation();
  return (
    <section id="resume" className="grey-section">
      <SectionTitle
        title={t("Resume")}
        subtext={t("resumeSubText")}
        desc={t("resumeDecs")}
      />

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>{t("workExperience")}</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>

              <div className="timeline-header">
                <h3>{t("frontEnd")}</h3>
                <p>{t("frontEndText")}</p>
              </div>

              <div className="timeline-content">
                <h4>{t("frontEndSubText")}</h4>
                <p>{t("frontEndDesc")}</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>

              <div className="timeline-header">
                <h3>{t("reactDeveloper")}</h3>
                <p>{t("reactDeveloperText")}</p>
              </div>

              <div className="timeline-content">
                <h4>{t("reactDeveloperSubText")}</h4>
                <p>{t("reactDeveloperDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>{t("Education")}</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>

              <div className="timeline-header">
                <h3>{t("degree")}</h3>
                <p>{t("degreeText")}</p>
              </div>

              <div className="timeline-content">
                <h4>{t("degreeSubText")}</h4>
                <p>{t("degreeDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
