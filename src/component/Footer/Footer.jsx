import React from "react";
import "./Footer.css";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="row">
        <div className="col-six tab-full pull-right social">
          <ul className="footer-social">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-six tab-full">
          <div className="copyright">
            <span>© {t("copyright")}</span>
            <span>
              {t("designer")}
              <span>{t("designerName")}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
