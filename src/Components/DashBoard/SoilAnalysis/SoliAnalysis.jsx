import React, { useState } from "react";
import "./SoilAnalysis.css";
import { StyledButton } from "../../../App";
import { useTranslation } from 'react-i18next'; // Import useTranslation

function SoilAnalysis() {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [formData, setFormData] = useState({
    moisture: "",
    ph: "",
    nutrients: "",
    pest: "no",
    pestType: "",
  });
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const analyzeSoil = () => {
    const { moisture, ph, nutrients, pest, pestType } = formData;
    let suggestionText = "";

    // Soil Moisture Analysis
    if (moisture >= 30 && moisture <= 70) {
      suggestionText += t('soilAnalysis.suggestions.moistureGood') + " ";
    } else {
      suggestionText += t('soilAnalysis.suggestions.moistureNotIdeal') + " ";
      if (moisture < 30) {
        suggestionText += t('soilAnalysis.suggestions.moistureLow') + " ";
      } else if (moisture > 70) {
        suggestionText += t('soilAnalysis.suggestions.moistureHigh') + " ";
      }
    }

    // Soil pH Level Analysis
    if (ph >= 6 && ph <= 7.5) {
      suggestionText += t('soilAnalysis.suggestions.phGood') + " ";
    } else {
      suggestionText += t('soilAnalysis.suggestions.phNotIdeal') + " ";
      if (ph < 6) {
        suggestionText += t('soilAnalysis.suggestions.phLow') + " ";
      } else if (ph > 7.5) {
        suggestionText += t('soilAnalysis.suggestions.phHigh') + " ";
      }
    }

    // Nutrient Level Analysis (Simple N-P-K analysis)
    const npkValues = nutrients.split("-").map(Number);
    if (
      npkValues.length === 3 &&
      npkValues[0] > 0 &&
      npkValues[1] > 0 &&
      npkValues[2] > 0
    ) {
      suggestionText += t('soilAnalysis.suggestions.nutrientsGood') + " ";
      if (npkValues[0] < 10) {
        suggestionText += t('soilAnalysis.suggestions.nitrogenLow') + " ";
      }
      if (npkValues[1] < 5) {
        suggestionText += t('soilAnalysis.suggestions.phosphorusLow') + " ";
      }
      if (npkValues[2] < 5) {
        suggestionText += t('soilAnalysis.suggestions.potassiumLow') + " ";
      }
    } else {
      suggestionText += t('soilAnalysis.suggestions.nutrientsNotIdeal') + " ";
    }

    // Pest Detection and Analysis
    if (pest === "yes") {
      suggestionText += t('soilAnalysis.suggestions.pestsDetected') + " ";
      switch (pestType) {
        case "aphids":
          suggestionText += t('soilAnalysis.suggestions.aphidsControl') + " ";
          break;
        case "mites":
          suggestionText += t('soilAnalysis.suggestions.mitesControl') + " ";
          break;
        case "weevils":
          suggestionText += t('soilAnalysis.suggestions.weevilsControl') + " ";
          break;
        case "cutworms":
          suggestionText += t('soilAnalysis.suggestions.cutwormsControl') + " ";
          break;
        default:
          suggestionText += t('soilAnalysis.suggestions.otherPestControl') + " ";
          break;
      }
    } else {
      suggestionText += t('soilAnalysis.suggestions.noPestsDetected') + " ";
    }

    setSuggestion(suggestionText);
  };

  return (
    <div className="SoilAnalysisContainer">
      <div className="SoilAnalysisContainerTitle">
        {t('soilAnalysis.title')}
      </div>
      <form id="soilForm">
        <label className="SoilAnalysisFormLabel" htmlFor="moisture">
          {t('soilAnalysis.soilMoisture')}
        </label>
        <input
          type="number"
          id="moisture"
          name="moisture"
          value={formData.moisture}
          onChange={handleChange}
          min="0"
          max="100"
          placeholder={t('soilAnalysis.moisturePlaceholder')}
          required
        />

        <label className="SoilAnalysisFormLabel" htmlFor="ph">
          {t('soilAnalysis.soilPhLevel')}
        </label>
        <input
          type="number"
          id="ph"
          name="ph"
          value={formData.ph}
          onChange={handleChange}
          step="0.1"
          min="0"
          max="14"
          placeholder={t('soilAnalysis.phPlaceholder')}
          required
        />

        <label className="SoilAnalysisFormLabel" htmlFor="nutrients">
          {t('soilAnalysis.nutrientLevel')}
        </label>
        <input
          type="text"
          id="nutrients"
          name="nutrients"
          value={formData.nutrients}
          onChange={handleChange}
          placeholder={t('soilAnalysis.nutrientPlaceholder')}
          required
        />

        <label className="SoilAnalysisFormLabel" htmlFor="pest">
          {t('soilAnalysis.pestsDetected')}
        </label>
        <select
          id="pest"
          name="pest"
          value={formData.pest}
          onChange={handleChange}
        >
          <option value="no">{t('soilAnalysis.no')}</option>
          <option value="yes">{t('soilAnalysis.yes')}</option>
        </select>

        {formData.pest === "yes" && (
          <div>
            <label className="SoilAnalysisFormLabel" htmlFor="pestType">
              {t('soilAnalysis.whichPest')}
            </label>
            <select
              id="pestType"
              name="pestType"
              value={formData.pestType}
              onChange={handleChange}
            >
              <option value="aphids">{t('soilAnalysis.aphids')}</option>
              <option value="mites">{t('soilAnalysis.mites')}</option>
              <option value="weevils">{t('soilAnalysis.weevils')}</option>
              <option value="cutworms">{t('soilAnalysis.cutworms')}</option>
              <option value="other">{t('soilAnalysis.other')}</option>
            </select>
          </div>
        )}
        <StyledButton
          variant="contained"
          disableElevation
          disableFocusRipple
          disableRipple
          onClick={analyzeSoil}
        >
          {t('soilAnalysis.getAnalysis')}
        </StyledButton>
      </form>

      <div id="suggestion" className="suggestion-box">
        {suggestion}
      </div>
    </div>
  );
}

export default SoilAnalysis;