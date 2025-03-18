import React, { useState, useEffect } from "react";
import { useAuth } from "../../../AuthContext";
import { getRentalHistory } from "../../../Firebase/firebbaseFunctions"; // Import the new function
import "./RentalHistory.css";
import Loading from "../../Loading/Loading";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const RentalHistory = () => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [rentalHistory, setRentalHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchRentalHistory = async () => {
      setLoading(true); // Set loading to true before fetching
      const rentalHistoryData = await getRentalHistory(currentUser.uid);
      setRentalHistory(rentalHistoryData);
      setLoading(false); // Set loading to false after fetching
    };

    fetchRentalHistory();
  }, [currentUser.uid]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="RentalHistoryContainer">
      {rentalHistory.length > 0 ? (
        rentalHistory.map((rental, index) => (
          <div className="RentalHistoryCard" key={index}>
            <img
              className="RentalHistoryCardImageContainer"
              src={rental.equipmentImage}
              alt="Equipment Image"
            />
            <div className="RentalHistoryCardTextContainer">
              <span>
                <b>{t('rentalHistory.equipmentName')}:</b> {rental.equipmentName}
              </span>
              <span>
                <b>{t('rentalHistory.pickUpDate')}:</b> {rental.pickUpDate}
              </span>
              <span>
                <b>{t('rentalHistory.dropOffDate')}:</b> {rental.dropOffDate}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="RentalHistoryContainerTitle">
          {t('rentalHistory.noRentalHistory')}
        </div>
      )}
    </div>
  );
};

export default RentalHistory;