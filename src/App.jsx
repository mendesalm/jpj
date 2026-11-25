import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import HomePage from "./assets/pages/home/HomePage.jsx";

const LOJAS_URL = import.meta.env.VITE_LOJAS_URL || "https://lojas.e-sigma.app";

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
