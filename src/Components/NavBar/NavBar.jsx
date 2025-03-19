import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../App";
import "./NavBar.css";
import { useAuth } from "../../AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import Profile from "../Profile/Profile";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "हिन्दी" },
];

function NavBar() {
  const navigate = useNavigate();
  const { currentUser, loading } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="NavBarContainer">
      <div className="NavBarHead" onClick={() => navigate("/")}>
        {t("footer.title")} {/* Use translation key for the title */}
      </div>
      <div className="NavBarButtonContainer">
        <div className="NavBarLinks">
          {currentUser ? (
            <div onClick={() => navigate("/our-services")}>
              {t("nav.ourServices")} {/* Use translation key for "Our Services" */}
            </div>
          ) : (
            <>
              <a href="#Home">{t("nav.home")}</a> {/* Use translation key for "Home" */}
              <a href="#AboutUs">{t("nav.aboutUs")}</a> {/* Use translation key for "About Us" */}
              <a href="#OurServices">{t("nav.services")}</a> {/* Use translation key for "Services" */}
            </>
          )}
        </div>
        <div className="NavBarSign">
          {currentUser ? (
            <AccountCircleIcon
              fontSize="large"
              onClick={() => setShowProfile(true)}
            />
          ) : (
            <StyledButton
              variant="contained"
              disableElevation
              disableFocusRipple
              disableRipple
              onClick={() => navigate("/login-or-register")}
            >
              {t("nav.logIn")} {/* Use translation key for "Log In" */}
            </StyledButton>
          )}

          {showProfile ? <Profile setShowProfile={setShowProfile} /> : null}
        </div>

        {/* Language Selector */}
        <div className="LanguageSelector">
          {languages.map((lng) => (
            <button
              className={lng.code === i18n.language ? "selected" : ""}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;