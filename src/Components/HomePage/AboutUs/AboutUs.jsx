import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import "./AboutUs.css";
import AboutUsImage from "../../../images/trac1.jpeg";

export default function AboutUs() {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div className="AboutUsContainer">
      <div className="AboutUsSubContainer">
        <div className="AboutUsSubContainerImageContainer">
          <img src={AboutUsImage} alt="About Us" />
        </div>
        <div className="AboutUsSubContainerTextContainer">
          <div className="AboutUsSubContainerTextTitle">{t("aboutUs.title")}</div>
          <div>{t("aboutUs.paragraph1")}</div>
          <div>{t("aboutUs.paragraph2")}</div>
        </div>
      </div>
    </div>
  );
}
