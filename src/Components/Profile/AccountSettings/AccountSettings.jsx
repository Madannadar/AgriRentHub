import React, { useState } from "react";
import { signOutUser } from "../../../Firebase/authFunction";
import "./AccountSettings.css";
import { StyledButton } from "../../../App";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function AccountSettings({ setShowProfile }) {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOutUser(); // Assuming this returns a promise
    setShowProfile(false);
  };

  return (
    <div className="AccountSettings">
      <div className="AccountSettingsTitle">
        {t('accountSettings.signOutTitle')}
      </div>
      <div className="AccountSettingsButton">
        <StyledButton
          variant="contained"
          disableElevation
          disableFocusRipple
          disableRipple
          onClick={handleSignOut}
          disabled={isSigningOut} // Disable button when signing out
        >
          {isSigningOut ? t('accountSettings.signingOut') : t('accountSettings.signOutButton')}
        </StyledButton>
      </div>
    </div>
  );
}