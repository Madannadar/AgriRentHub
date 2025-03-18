import React, { useState } from "react";
import "./CropManagement.css";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const CropManagement = () => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [selectedCrop, setSelectedCrop] = useState("wheat");

  const handleChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  const selectedCropData = t(`cropData.${selectedCrop}`, { returnObjects: true });

  return (
    <div className="CropManagement">
      <div className="CropManagementTitle">{t('cropManagement.title')}</div>
      <div className="CropManagementContainer">
        <div className="CropManagementSelector">
          <select id="crops" onChange={handleChange} value={selectedCrop}>
            <option value="wheat">{t('cropManagement.wheat')}</option>
            <option value="rice">{t('cropManagement.rice')}</option>
            <option value="maize">{t('cropManagement.maize')}</option>
          </select>
        </div>

        {selectedCrop && (
          <div className="CropManagementSubContainer">
            <div className="CropManagementSubContainerTitle">
              {t(`cropManagement.${selectedCrop}`)} {t('cropManagement.plantingWindow')}
            </div>
            <div className="CropManagementSubContainerBox">
              <p>
                <strong>{t('cropManagement.plantingWindow')}:</strong>
              </p>
              {selectedCropData.plantingWindow}
              <strong>{t('cropManagement.growthStages')}:</strong>
              <ol>
                {selectedCropData.growthStages.map((stage, index) => (
                  <li key={index}>
                    {stage.stage} - {stage.duration}
                  </li>
                ))}
              </ol>
              <p>
                <strong>{t('cropManagement.harvestTime')}:</strong>
              </p>{" "}
              {selectedCropData.harvestTime}
            </div>
          </div>
        )}
      </div>
      <div className="CropManagementGrowthT">
        <div className="CropManagementGrowthTTitle">{t('cropManagement.growthTimeline')}</div>
        <div className="CropManagementGrowthTBox">
          {selectedCrop && (
            <>
              <div className="CropManagementGrowthTBoxName">{t('cropManagement.planting')}</div>
              <div className="CropManagementGrowthTBoxName">
                {selectedCropData.growthStages[0].stage}
              </div>
              <div className="CropManagementGrowthTBoxName">
                {selectedCropData.growthStages[1].stage}
              </div>
              <div className="CropManagementGrowthTBoxName">
                {selectedCropData.growthStages[2].stage}
              </div>
              <div className="CropManagementGrowthTBoxName">
                {selectedCropData.growthStages[3].stage}
              </div>
              <div className="CropManagementGrowthTBoxName">{t('cropManagement.harvest')}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropManagement;