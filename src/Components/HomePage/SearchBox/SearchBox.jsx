import React from "react";
import "./SearchBox.css";
import { StyledButton } from "../../../App";
import { useTranslation } from "react-i18next";

export default function SearchBox() {
  const { t } = useTranslation();

  return (
    <div className="SearchBox">
      <div className="HSSearchContainer">
        <div className="HSSearchContainerE">
          <h4>{t("searchBox.equipment")}</h4>
          <button>{t("searchBox.chooseEquipment")}</button>
        </div>
        <div className="HSSearchContainerL">
          <h4>{t("searchBox.location")}</h4>
          <button>{t("searchBox.chooseLocation")}</button>
        </div>
        <div className="HSSearchContainerP">
          <h4>{t("searchBox.pickUpDate")}</h4>
          <button>{t("searchBox.chooseDate")}</button>
        </div>
        <div className="HSSearchContainerD">
          <h4>{t("searchBox.dropOffDate")}</h4>
          <button>{t("searchBox.chooseDate")}</button>
        </div>
        <div className="HSSearchContainerS">
          <StyledButton variant="contained" disableElevation disableFocusRipple disableRipple>
            {t("searchBox.search")}
          </StyledButton>
        </div>
      </div>
    </div>
  );
}
