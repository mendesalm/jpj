import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import HomePage from "./assets/pages/home/HomePage.jsx";
import RitoBrasileiroPage from "./assets/pages/rito/RitoBrasileiroPage.jsx";
import { LOJAS_URL } from "./config/links";

const RedirecionarLojas = () => {
  useEffect(() => {
    window.location.replace(LOJAS_URL);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
        backgroundColor: "#111827",
      }}
    >
      <h2>Redirecionando para o Sistema Lojas...</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route
          path="/rito-brasileiro"
          element={
            <>
              <Header />
              <RitoBrasileiroPage />
            </>
          }
        />
        <Route path="/login" element={<RedirecionarLojas />} />
        <Route path="/dashboard/*" element={<RedirecionarLojas />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
