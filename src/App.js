import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthPage from "./Components/AuthPage/AuthPage";
import HomePage from "./Components/HomePage/HomePage";
import { styled, Button, TextField } from "@mui/material";
import { AuthProvider, useAuth } from "./AuthContext";
import Dashboard from "./Components/DashBoard/Dashboard";
import Terms from "./Components/HomePage/Footer/AllLinks/Terms";
import PrivacyPolicy from "./Components/HomePage/Footer/AllLinks/PrivacyPolicy";
import LN from "./Components/HomePage/Footer/AllLinks/LegalNotice";
import Accesibility from "./Components/HomePage/Footer/AllLinks/Accesibility";
import HomePageAfterLogIn from "./Components/HomePageAfterLogIn/HomePageAfterLogIn";
import Loading from "./Components/Loading/Loading";
import LanguageSelector from "./Components/Multi-lang/language_selector";

export const StyledButton = styled(Button)(() => ({
  textTransform: "none",
  backgroundColor: "#323232",
  borderRadius: "5px",
  fontWeight: 600,
  fontSize: "14px",
  fontFamily: "Poppins",
}));

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "5px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#323232",
    },
    "& input": {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#323232",
  },
}));

function PrivateRouteWithSignIn({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return currentUser ? children : <Navigate to="/login-or-register" />;
}

function PrivateRouteWithoutSignIn({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return currentUser ? <Navigate to="/" /> : children;
}

function HomePagePath() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return currentUser ? <HomePageAfterLogIn /> : <HomePage />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          {/* <LanguageSelector /> Add Language Selector at the top? */}
          <Routes>
            <Route path="/" element={<HomePagePath />} />
            <Route
              path="/login-or-register"
              element={
                <PrivateRouteWithoutSignIn>
                  <AuthPage />
                </PrivateRouteWithoutSignIn>
              }
            />
            <Route
              path="/our-services"
              element={
                <PrivateRouteWithSignIn>
                  <Dashboard />
                </PrivateRouteWithSignIn>
              }
            />
            <Route path="/terms" element={<Terms />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/LegalNotice" element={<LN />} />
            <Route path="/Accesibility" element={<Accesibility />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
