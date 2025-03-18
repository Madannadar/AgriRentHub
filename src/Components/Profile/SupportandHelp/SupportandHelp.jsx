import React from "react";
import "./SupportandHelp.css";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function SupportandHelp() {
  const { t } = useTranslation(); // Use the useTranslation hook

  return (
    <div className="SupportAndHelpContainer">
      <div className="SupportAndHelpCard">
        <div className="SupportAndHelpTitle">
          <b>{t('supportAndHelp.supportNumber')}</b>
        </div>
        <div className="SupportAndHelpInfo">+91 8291004845</div>
      </div>

      <div className="SupportAndHelpCard">
        <div className="SupportAndHelpTitle">
          <b>{t('supportAndHelp.supportEmail')}</b>
        </div>
        <div className="SupportAndHelpInfo">fieldrentals69@gmail.com</div>
      </div>
    </div>
  );
}