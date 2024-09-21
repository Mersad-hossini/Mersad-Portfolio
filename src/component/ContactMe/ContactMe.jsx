import React from "react";
import "./ContactMe.css";

import SectionTitle from "../SectionTitle/SectionTitle";

import { useTranslation } from "react-i18next";

export default function ContactMe() {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <div className="row section-intro">
        <SectionTitle
          title={t("contact")}
          subtext={t("contactSubText")}
          desc={t("contactDecs")}
        />
      </div>

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>

          <h5>{t("locationTitle")}</h5>

          <p>{t("locationDecs")}</p>
        </div>

        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>

          <h5>{t("emailTitle")}</h5>

          <p>{t("emailDecs")}</p>
        </div>

        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>

          <h5>{t("phoneTitle")}</h5>

          <p>{t("phoneDecs")}</p>
        </div>
      </div>
    </section>
  );
}
