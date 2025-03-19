import React, { useEffect, useState } from "react";
import { getEquipmentData } from "../../../Firebase/firebbaseFunctions";
import "./OurCollection.css";
import { StyledButton } from "../../../App";
import OurCollectionModal from "./OurCollectionModal/OurCollectionModal";
import Loading from "../../Loading/Loading";
import { useTranslation } from 'react-i18next';

export default function OurCollection() {
  const { t } = useTranslation();
  const [equipments, setEquipments] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("all"); // 'all', 'name', or 'location'

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEquipmentData();
        setEquipments(data);
        setFilteredEquipments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredEquipments(equipments);
      setCurrentPage(1);
      return;
    }

    const term = searchTerm.toLowerCase().trim();
    let results = [];

    switch (searchFilter) {
      case "name":
        results = equipments.filter(item => 
          item.Name && item.Name.toLowerCase().includes(term)
        );
        break;
      case "location":
        results = equipments.filter(item => 
          item.Location && item.Location.toLowerCase().includes(term)
        );
        break;
      default: // "all"
        results = equipments.filter(item => 
          (item.Name && item.Name.toLowerCase().includes(term)) || 
          (item.Location && item.Location.toLowerCase().includes(term))
        );
        break;
    }

    setFilteredEquipments(results);
    setCurrentPage(1);
  }, [searchTerm, searchFilter, equipments]);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    // fetchData();
  };

  const handleBookClick = (equipment) => {
    setSelectedEquipment(equipment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEquipment(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const totalPages = Math.ceil(filteredEquipments.length / itemsPerPage);
  const currentItems = filteredEquipments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) return <Loading />;
  if (error)
    return (
      <div>
        <p>{t('ourCollection.error')}: {error}</p>
        <button onClick={handleRetry}>{t('ourCollection.retry')}</button>
      </div>
    );

  return (
    <div className="OurCollectionContainer">
      <div className="OurCollectionTitle">{t('ourCollection.title')}</div>
      
      {/* Search Section */}
      <div className="OurCollectionSearchContainer">
        <input
          type="text"
          placeholder={t('ourCollection.searchPlaceholder')}
          value={searchTerm}
          onChange={handleSearchChange}
          className="OurCollectionSearchInput"
        />
        <select 
          value={searchFilter} 
          onChange={handleFilterChange}
          className="OurCollectionFilterSelect"
        >
          <option value="all">{t('ourCollection.searchAll')}</option>
          <option value="name">{t('ourCollection.searchByName')}</option>
          <option value="location">{t('ourCollection.searchByLocation')}</option>
        </select>
      </div>
      
      {filteredEquipments.length === 0 && (
        <div className="OurCollectionNoResults">{t('ourCollection.noResults')}</div>
      )}

      <div className="OurCollectionSubContainer">
        {currentItems.map((equipment, i) => (
          <div className="OurCollectionCardContainer" key={i}>
            <div className="OurCollectionCardImageContainer">
              <img
                className="OurCollectionCardImage"
                src={equipment.Image}
                alt={equipment.Name}
              />
            </div>
            <div className="OurCollectionCardTextContainer">
              <div className="OurCollectionCardTextEquipmentName">
                {equipment.Name}
              </div>
              <div>{equipment.Description}</div>
              <div>
                <b>{t('ourCollection.location')}: </b>
                {equipment.Location}
              </div>
              <div>
                <b>{t('ourCollection.price')}: </b>Rs {equipment.Price} {t('ourCollection.perDay')}
              </div>
              <StyledButton
                variant="contained"
                disableElevation
                disableFocusRipple
                disableRipple
                onClick={() => handleBookClick(equipment)}
              >
                {t('ourCollection.bookNow')}
              </StyledButton>
            </div>
          </div>
        ))}
      </div>

      {filteredEquipments.length > 0 && (
        <div className="OurCollectionContainerPaginationContainer">
          <StyledButton
            variant="contained"
            disableElevation
            disableFocusRipple
            disableRipple
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            {t('ourCollection.previous')}
          </StyledButton>

          <span>{` ${t('ourCollection.page')} ${currentPage} ${t('ourCollection.of')} ${totalPages} `}</span>
          <StyledButton
            variant="contained"
            disableElevation
            disableFocusRipple
            disableRipple
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            {t('ourCollection.next')}
          </StyledButton>
        </div>
      )}
      
      <OurCollectionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        equipment={selectedEquipment}
      />
    </div>
  );
}