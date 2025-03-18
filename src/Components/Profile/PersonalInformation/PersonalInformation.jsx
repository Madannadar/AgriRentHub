import React, { useEffect, useState } from "react";
import "./PersonalInformation.css";
import { useAuth } from "../../../AuthContext";
import {
  getUserData,
  updateUserData,
} from "../../../Firebase/firebbaseFunctions";
import { StyledButton } from "../../../App";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function PersonalInformation() {
  const { t } = useTranslation(); // Use the useTranslation hook
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);

  // Initialize states with empty strings
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Track initial values for comparison
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    city: "",
  });

  const [loading, setLoading] = useState(false); // New loading state

  useEffect(() => {
    // Fetch user data when currentUser.uid changes
    if (currentUser?.uid) {
      const fetchUserData = async () => {
        try {
          const data = await getUserData(currentUser.uid);
          setUserData(data);

          const firstNameValue = data.firstName || "";
          const lastNameValue = data.lastName || "";
          const emailValue = data.email || "";
          const phoneNumberValue = data.phoneNumber || "";
          const stateValue = data.state || "";
          const cityValue = data.city || "";

          setFirstName(firstNameValue);
          setLastName(lastNameValue);
          setEmail(emailValue);
          setPhoneNumber(phoneNumberValue);
          setState(stateValue);
          setCity(cityValue);

          setInitialValues({
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue,
            phoneNumber: phoneNumberValue,
            state: stateValue,
            city: cityValue,
          });
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };

      fetchUserData();
    }
  }, [currentUser?.uid]);

  const isModified =
    firstName !== initialValues.firstName ||
    lastName !== initialValues.lastName ||
    phoneNumber !== initialValues.phoneNumber ||
    state !== initialValues.state ||
    city !== initialValues.city;

  const handleSave = async () => {
    setLoading(true); // Set loading to true when saving
    try {
      await updateUserData(currentUser?.uid, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        state: state,
        city: city,
      });
    } catch (error) {
      console.error("Failed to update user data:", error);
    } finally {
      setLoading(false); // Reset loading state after saving
    }
  };

  return (
    <div className="PersonalInformationContainer">
      <div className="PersonalInformationSubContainer">
        <div className="PersonalInformationSubContainerTitle">
          {t('personalInformation.name')}
        </div>
        <div className="PersonalInformationSubContainerCard">
          <div className="PersonalInformationSubContainerCardLabel">
            {t('personalInformation.firstName')}:
          </div>
          <input
            className="PersonalInformationSubContainerCardInput"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={t('personalInformation.firstName')}
          />
        </div>
        <div className="PersonalInformationSubContainerCard">
          <div className="PersonalInformationSubContainerCardLabel">
            {t('personalInformation.lastName')}:
          </div>
          <input
            className="PersonalInformationSubContainerCardInput"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={t('personalInformation.lastName')}
          />
        </div>
      </div>

      <div className="PersonalInformationSubContainer">
        <div className="PersonalInformationSubContainerTitle">
          {t('personalInformation.contact')}
        </div>
        <div className="PersonalInformationSubContainerCard">
          <div className="PersonalInformationSubContainerCardLabel">
            {t('personalInformation.phoneNumber')}:
          </div>
          <input
            className="PersonalInformationSubContainerCardInput"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={t('personalInformation.phoneNumber')}
          />
        </div>
        <div className="PersonalInformationSubContainerCard">
          <div className="PersonalInformationSubContainerCardLabel">
            {t('personalInformation.email')}:
          </div>
          <input
            className="PersonalInformationSubContainerCardInput"
            value={email}
            placeholder={t('personalInformation.email')}
            readOnly
          />
        </div>
      </div>

      <div className="PersonalInformationSubContainer">
        <div className="PersonalInformationSubContainerTitle">
          {t('personalInformation.address')}
        </div>
        <div className="PersonalInformationSubContainerCard">
          <div className="PersonalInformationSubContainerCardLabel">
            {t('personalInformation.state')}:
          </div>
          <input
            className="PersonalInformationSubContainerCardInput"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder={t('personalInformation.state')}
          />
        </div>
        <div className="PersonalInformationSubContainerCard">
          <div className="PersonalInformationSubContainerCardLabel">
            {t('personalInformation.city')}:
          </div>
          <input
            className="PersonalInformationSubContainerCardInput"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={t('personalInformation.city')}
          />
        </div>
      </div>

      {isModified && (
        <div>
          <StyledButton
            variant="contained"
            disableElevation
            disableFocusRipple
            disableRipple
            onClick={handleSave}
            disabled={loading} // Disable button if loading
          >
            {loading ? t('personalInformation.saving') : t('personalInformation.save')}
          </StyledButton>
        </div>
      )}
    </div>
  );
}