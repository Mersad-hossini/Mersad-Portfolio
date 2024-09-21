import React from "react";
import Header from "./component/Header/Header";
import AboutMe from "./component/AboutMe/AboutMe";
import Resume from "./component/Resume/Resume";
import LatestProject from "./component/LatestProject/LatestProject";
import Services from "./component/Services/Services";
import ContactMe from "./component/ContactMe/ContactMe";
import Footer from "./component/Footer/Footer";
import i18n from "./i18n";

export default function App() {
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={`${i18n.language === "fa" ? "rtl" : "nul"}`}>
      <select className="change_language" onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="fa">Persion</option>
      </select>
      <Header />
      <AboutMe />
      <Resume />
      <LatestProject />
      <Services />
      <ContactMe />
      <Footer />
    </div>
  );
}
