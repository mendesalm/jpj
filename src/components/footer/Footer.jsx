import React from "react";
import "./Footer.css";
import logoSelo from "../../assets/images/logo_jpg.png";
import logoAddex from "../../assets/images/logo-addex.png";
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
              Aug∴ Resp∴ Benf∴ Loja Simbólica João Pedro Junqueira, nº 2181
            </span>
            <span className="footer-subtitle">
              Anápolis, Goiás · Rito Brasileiro
            </span>
          </div>
        </div>

        <div className="footer-credit-wrap">
          <div className="footer-credit-text tabular-nums">
            <span>© {new Date().getFullYear()} Addex Solutions</span>
            <div className="footer-credit-links">
              <a
                href="mailto:contato@addex.dev"
                className="footer-credit-link"
              >
                contato@addex.dev
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://addex.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credit-link"
              >
                https://addex.dev
              </a>
            </div>
          </div>

          <a
            href="https://addex.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-addex-logo-link"
            aria-label="Addex Solutions — https://addex.dev"
          >
            <img
              src={logoAddex}
              alt="Logo Addex Solutions"
              className="footer-addex-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
