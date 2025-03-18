import React, { useState } from "react";
import "./Profile.css";
import { signOutUser } from "../../Firebase/authFunction";
import { useAuth } from "../../AuthContext";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import SupportandHelp from "./SupportandHelp/SupportandHelp";
import AccountSettings from "./AccountSettings/AccountSettings";
import EquipmentInventory from "./EquipmentInventory/EquipmentInventory";
import RentalHistory from "./RentalHistory/RentalHistory";
import { useTranslation } from "react-i18next"; // Import translation hook

export default function Profile({ setShowProfile }) {
  const { currentUser, loading } = useAuth();
  const { t } = useTranslation(); // Initialize translation
  const [mainContent, setMainContent] = useState("personalInfo");

  return (
    <div className="ProfileContainer">
      <div
        className="ProfileBackground"
        onClick={() => setShowProfile(false)}
      />
      <div className="ProfileSubContainer">
        <div className="ProfileSubContainerSideBar">
          <div className="ProfileSubContainerSideBarTitle">{t("profile.title")}</div>
          <button
            className={mainContent === "personalInfo" ? "active" : null}
            onClick={() => setMainContent("personalInfo")}
          >
            {t("profile.personalInfo")}
          </button>
          <button
            className={mainContent === "rentalHistory" ? "active" : null}
            onClick={() => setMainContent("rentalHistory")}
          >
            {t("profile.rentalHistory")}
          </button>
          <button
            className={mainContent === "equipmentInventory" ? "active" : null}
            onClick={() => setMainContent("equipmentInventory")}
          >
            {t("profile.equipmentInventory")}
          </button>
          <button
            className={mainContent === "supportHelp" ? "active" : null}
            onClick={() => setMainContent("supportHelp")}
          >
            {t("profile.supportHelp")}
          </button>
          <button
            className={mainContent === "accountSettings" ? "active" : null}
            onClick={() => setMainContent("accountSettings")}
          >
            {t("profile.accountSettings")}
          </button>
        </div>
        <div className="ProfileSubConatinerMainInfo">
          <div className="ProfileSubConatinerMainInfoTitle">{t(`profile.${mainContent}`)}</div>
          {mainContent === "personalInfo" ? <PersonalInformation /> : null}
          {mainContent === "accountSettings" ? <AccountSettings setShowProfile={setShowProfile} /> : null}
          {mainContent === "supportHelp" ? <SupportandHelp /> : null}
          {mainContent === "equipmentInventory" ? <EquipmentInventory /> : null}
          {mainContent === "rentalHistory" ? <RentalHistory /> : null}
        </div>
      </div>
    </div>
  );
}
