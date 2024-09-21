import React from "react";
import "./Services.css";

import CardServices from "../CardServices/CardServices";
import SectionTitle from "../SectionTitle/SectionTitle";

import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  return (
    <section id="services">
      <div className="overlay"></div>

      <SectionTitle
        title={t("services")}
        subtext={t("servicesSubText")}
        desc={t("servicesDecs")}
      />

      <div className="services-wrapper">
        <CardServices title={t("firstCardTitle")} desc={t("firstCardDecs")} />
        <CardServices title={t("secondeCardTitle")} desc={t("secondeCardDecs")} />
        <CardServices title={t("thirdCardTitle")} desc={t("thirdCardDecs")} />
      </div>
    </section>
  );
}
