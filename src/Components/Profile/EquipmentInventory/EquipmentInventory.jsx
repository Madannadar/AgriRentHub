import React, { useState, useEffect } from "react";
import { useAuth } from "../../../AuthContext";
import {
  getUserEquipment,
  relistEquipment,
} from "../../../Firebase/firebbaseFunctions"; // Import the new function
import "./EquipmentInventory.css";
import Loading from "../../Loading/Loading";
import { StyledButton } from "../../../App";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const EquipmentInventory = () => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchEquipment = async () => {
      setLoading(true); // Start loading
      const equipmentData = await getUserEquipment(currentUser.uid);
      setEquipmentList(equipmentData);
      setLoading(false); // Stop loading
    };

    fetchEquipment();
  }, [currentUser.uid]);

  const handleRelist = async (equipmentId) => {
    try {
      // Disable the button by updating the state
      setEquipmentList((prevList) =>
        prevList.map((item) =>
          item.EquipmentId === equipmentId
            ? { ...item, relisting: true } // Add relisting state
            : item
        )
      );

      await relistEquipment(equipmentId);
      // Fetch the updated equipment list
      const updatedEquipmentData = await getUserEquipment(currentUser.uid);
      setEquipmentList(updatedEquipmentData);
    } catch (error) {
      console.error("Failed to relist equipment:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  function parseDate(dateString) {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`); // Convert to YYYY-MM-DD format
  }

  return (
    <div className="EquipmentInventoryContainer">
      {equipmentList.length > 0 ? (
        equipmentList.map((equipment, index) => (
          <div className="EquipmentInventoryCard" key={index}>
            <img
              className="EquipmentInventoryCardImageContainer"
              src={equipment.Image}
              alt="Equipment Image"
            />
            <div className="EquipmentInventoryCardTextContainer">
              <span>
                <b>{t('equipmentInventory.equipmentName')}:</b>
                <br />
                {equipment.Name}
              </span>
              <span>
                <b>{t('equipmentInventory.description')}:</b>
                <br />
                {equipment.Description}
              </span>
              <span>
                <b>{t('equipmentInventory.location')}:</b> {equipment.Location}
              </span>
              <span>
                <b>{t('equipmentInventory.price')}:</b> ${equipment.Price}
              </span>
              <span>
                <b>{t('equipmentInventory.status')}:</b> {equipment.Status}
              </span>
              {equipment.Status === "Not Available" &&
                equipment.dropOffDate && (
                  <span>
                    <b>{t('equipmentInventory.dropOffDate')}:</b> {equipment.dropOffDate}
                  </span>
                )}
              {equipment.Status === "Not Available" &&
                equipment.dropOffDate &&
                parseDate(equipment.dropOffDate) < new Date() && (
                  <StyledButton
                    variant="contained"
                    disableElevation
                    disableFocusRipple
                    disableRipple
                    onClick={() => handleRelist(equipment.EquipmentId)}
                    disabled={equipment.relisting || loading} // Disable if relisting or loading
                  >
                    {equipment.relisting ? t('equipmentInventory.relisting') : t('equipmentInventory.relistEquipment')}
                  </StyledButton>
                )}
            </div>
          </div>
        ))
      ) : (
        <div className="EquipmentInventoryContainerTitle">
          {t('equipmentInventory.noEquipment')}
        </div>
      )}
    </div>
  );
};

export default EquipmentInventory;