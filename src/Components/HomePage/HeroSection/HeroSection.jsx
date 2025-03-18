import React from "react";
import "./HeroSection.css";
import { StyledButton } from "../../../App";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="HeroSectionContainer" id="Home">
      <div className="HSTitle">{t("heroSection.title")}</div>
      <div className="HSSubtitle">
        {t("heroSection.subtitle")}
        <br />
      </div>
      <StyledButton
        variant="contained"
        disableElevation
        disableFocusRipple
        disableRipple
        onClick={() => navigate("/login-or-register")}
      >
        {t("heroSection.getStarted")}
      </StyledButton>
    </div>
  );
}

export default HeroSection;
