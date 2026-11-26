import React from "react";
import "./Footer.css";
import logoSelo from "../../assets/images/logo_jpg.png";
import bannerBg from "../../assets/images/banner-bg.jpg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg-layer" aria-hidden="true">
        <img src={bannerBg} alt="" className="footer-bg-img" />
        <div className="footer-bg-overlay"></div>
      </div>

      <div className="footer-container">
        <div className="footer-brand">
          <img
            src={logoSelo}
            alt="Selo Oficial da ARLS João Pedro Junqueira nº 2181"
            className="footer-logo"
          />
          <div className="footer-identity">
            <span className="footer-title">
              Aug∴ Resp∴ Loja Simbólica João Pedro Junqueira, nº 2181
            </span>
            <span className="footer-subtitle">
              Anápolis, Goiás · Rito Brasileiro
            </span>
          </div>
        </div>
        <span className="footer-credit tabular-nums">
          © {new Date().getFullYear()} ARLS Nº 2181 · Desenvolvido por Addex Softwares
        </span>
      </div>
    </footer>
  );
};

export default Footer;
