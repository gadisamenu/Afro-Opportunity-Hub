import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForbiddenPage from "./pages/ForbiddenPage";
import LoginPage from "./features/authentication/pages/LoginPage.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";
import SignupPage from "./features/authentication/pages/SignupPage";
import OpportunityForm from "./features/opportunities/components/Forms/OpportunityForm";
import { getOpportunities } from "./features/opportunities/actions/opportunities";
const theme = createTheme({
  palette: {
    primary: {
      main: "#039198",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOpportunities());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/opportunity" element={<OpportunityForm />} />

          {/* <Route path="/signup" element={<Sign />} /> */}

          <Route path="/403" element={<ForbiddenPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
