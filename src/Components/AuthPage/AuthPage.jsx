import React, { useState } from "react";
import "./AuthPage.css";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  styled,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { StyledButton, StyledTextField } from "../../App";
import { signIn, signUp } from "../../Firebase/authFunction";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ErrorPopup = ({ open, onClose, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      action={
        <button onClick={onClose} style={{ color: "white" }}>
          Close
        </button>
      }
    >
      <Alert onClose={onClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default function AuthPage() {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [isSignupActive, setIsSignupActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    let flag = 0;

    if (email === "" || password === "" || confirmPassword === "") {
      flag = 1;
      console.log(password);
      setErrorMsg(t('auth.errors.fillAllFields'));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg(t('auth.errors.invalidEmail'));
      flag = 1;
    } else if (password.length < 8) {
      flag = 1;
      setErrorMsg(t('auth.errors.passwordTooShort'));
    } else if (password !== confirmPassword) {
      flag = 1;
      setErrorMsg(t('auth.errors.passwordMismatch'));
    }

    if (flag === 0) {
      console.log("Sign up successful");
      await signUp(email, password);
      navigate("/");
    } else {
      console.log("Sign up failed");
      setShowErrorPopup(true);
    }
  };

  const handleLogIn = async () => {
    let flag = 0;

    if (email === "" || password === "") {
      flag = 1;
      setErrorMsg(t('auth.errors.fillAllFields'));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg(t('auth.errors.invalidEmail'));
      flag = 1;
    } else if (password.length < 8) {
      flag = 1;
      setErrorMsg(t('auth.errors.passwordTooShort'));
    }

    if (flag === 0) {
      console.log("Log in successful");
      await signIn(email, password);
      navigate("/");
    } else {
      console.log("Log in failed");
      setShowErrorPopup(true);
    }
  };

  const handleCloseError = () => {
    setShowErrorPopup(false);
  };

  return (
    <div className="AuthPageContainer">
      <div
        className={`AuthPageSubContainer ${
          isSignupActive ? "SignUpActive" : ""
        }`}
      >
        <div className="AuthPageSubContainerFormContainer SignUp">
          <form>
            <div>{t('auth.title')}</div>
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label={t('auth.email')}
              variant="outlined"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label={t('auth.password')}
              variant="outlined"
              size="small"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((show) => !show)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label={t('auth.confirmPassword')}
              variant="outlined"
              size="small"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((show) => !show)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <StyledButton
              variant="contained"
              disableElevation
              disableFocusRipple
              disableRipple
              onClick={handleSignUp}
            >
              {t('auth.signUp')}
            </StyledButton>

            <div className="AuthPageSubContainerFormContainerText">
              <div>
                {t('auth.alreadyMember')}{" "}
                <span onClick={() => setIsSignupActive(false)}>
                  {t('auth.loginHere')}
                </span>{" "}
                {t('auth.welcome')}
              </div>
            </div>
          </form>
        </div>

        <div className="AuthPageSubContainerToggleContainer">
          <div className="AuthPageSubContainerTogglePanel AuthPageSubContainerToggleSignUp">
            <div className="Title">{t('auth.welcome')}</div>
            <div>
              {t('auth.signUpDescription')}
            </div>
            <div>
              {t('auth.alreadyMember')}{" "}
              <span onClick={() => setIsSignupActive(false)}>
                {t('auth.loginHere')}
              </span>{" "}
              {t('auth.welcome')}
            </div>
          </div>

          <div className="AuthPageSubContainerTogglePanel AuthPageSubContainerToggleSignIn">
            <div className="Title">{t('auth.welcomeBack')}</div>
            <div>
              {t('auth.signInDescription')}
            </div>
            <div>
              {t('auth.dontHaveAccount')}{" "}
              <span onClick={() => setIsSignupActive(true)}>
                {t('auth.signUpHere')}
              </span>{" "}
              {t('auth.welcome')}
            </div>
          </div>
        </div>

        <div className="AuthPageSubContainerFormContainer SignIn">
          <form>
            <div>{t('auth.title')}</div>
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label={t('auth.email')}
              variant="outlined"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label={t('auth.password')}
              variant="outlined"
              size="small"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((show) => !show)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <StyledButton
              variant="contained"
              disableElevation
              disableFocusRipple
              disableRipple
              onClick={handleLogIn}
            >
              {t('auth.signIn')}
            </StyledButton>

            <div className="AuthPageSubContainerFormContainerText">
              <div>
                {t('auth.dontHaveAccount')}{" "}
                <span onClick={() => setIsSignupActive(true)}>
                  {t('auth.signUpHere')}
                </span>{" "}
                {t('auth.welcome')}
              </div>
            </div>
          </form>
        </div>
        {showErrorPopup && (
          <div>
            <ErrorPopup
              open={true}
              onClose={handleCloseError}
              message={errorMsg}
            />
          </div>
        )}
      </div>
    </div>
  );
}