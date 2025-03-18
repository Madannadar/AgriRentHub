import React from "react";
import "./OurServices.css";
import SettingImage from "../../../images/Capture-removebg-preview.png";
import { useTranslation } from "react-i18next";

const Card = ({ title, content }) => {
  return (
    <div className="OurServicesCard">
      <img src={SettingImage} alt="SettingIcon" />
      <div className="OurServicesCardTitle">{title}</div>
      <div className="OurServicesCardContent">{content}</div>
    </div>
  );
};

export default function OurServices() {
  const { t } = useTranslation();

  return (
    <div className="OurServices">
      <div className="OurServicesTitle">{t("ourServices.title")}</div>
      <div className="OurServicesRow">
        <Card title={t("ourServices.equipmentRental.title")} content={t("ourServices.equipmentRental.content")} />
        <Card title={t("ourServices.customRentalSolutions.title")} content={t("ourServices.customRentalSolutions.content")} />
        <Card title={t("ourServices.seasonalPromotions.title")} content={t("ourServices.seasonalPromotions.content")} />
      </div>
      <div className="OurServicesRow">
        <Card title={t("ourServices.rentalHistory.title")} content={t("ourServices.rentalHistory.content")} />
        <Card title={t("ourServices.weatherForecast.title")} content={t("ourServices.weatherForecast.content")} />
        <Card title={t("ourServices.cropManagement.title")} content={t("ourServices.cropManagement.content")} />
      </div>
    </div>
  );
}
