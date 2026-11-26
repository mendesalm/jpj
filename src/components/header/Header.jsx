import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoEmblema from "../../assets/images/logoJPJ.png";
import { LOJAS_URL } from "../../config/links";

const RestritoButtonSvg = () => (
  <svg
    className="btn-restrito-svg"
    viewBox="0 0 184 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="triGoldFront" x1="22" y1="4" x2="22" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E6C36A" />
        <stop offset="55%" stopColor="#D4A843" />
        <stop offset="100%" stopColor="#A67C22" />
      </linearGradient>
      <linearGradient id="ribbonTopFace" x1="28" y1="9" x2="147" y2="14" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1B4B8C" />
        <stop offset="100%" stopColor="#0D2854" />
      </linearGradient>
      <linearGradient id="ribbonFrontFace" x1="31" y1="25" x2="156" y2="25" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#041229" />
        <stop offset="45%" stopColor="#0E3066" />
        <stop offset="100%" stopColor="#2667B8" />
      </linearGradient>
      <linearGradient id="stripeFrontFace" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1E569E" />
        <stop offset="100%" stopColor="#3B8AE0" />
      </linearGradient>
      <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.45" />
      </filter>
    </defs>

    {/* Center 3D Ribbon (behind triangle on the left) */}
    <polygon points="28,9 144,9 147,14 31,14" fill="url(#ribbonTopFace)" />
    <polygon points="31,14 147,14 156,36 31,36" fill="url(#ribbonFrontFace)" />
    <polygon points="31,14 48,14 40,36 31,36" fill="rgba(2, 10, 24, 0.45)" />

    <text
      x="95"
      y="29"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Sora, sans-serif"
      fontSize="11.5"
      fontWeight="700"
      letterSpacing="1.3"
    >
      RESTRITO
    </text>

    {/* Right 3D Extruded Slanted Bars */}
    <polygon points="150,11 155,9 159,11 154,13" fill="#3B8AE0" />
    <polygon points="150,11 154,13 163,36 159,34" fill="#041229" />
    <polygon points="154,13 159,11 168,34 163,36" fill="url(#stripeFrontFace)" />

    <polygon points="163,11 168,9 172,11 167,13" fill="#3B8AE0" />
    <polygon points="163,11 167,13 176,36 172,34" fill="#041229" />
    <polygon points="167,13 172,11 181,34 176,36" fill="url(#stripeFrontFace)" />

    {/* Left 3D Faceted Triangle */}
    <polygon points="22,2 2,40 6,40 23,6" fill="#6E4E12" />
    <polygon points="22,2 44,40 40,40 21,6" fill="#F7E4A6" />
    <polygon points="22,4 4,40 40,40" fill="url(#triGoldFront)" />

    {/* White Lock Icon with Drop Shadow */}
    <g transform="translate(15, 20)" filter="url(#iconShadow)">
      <path
        d="M3.5 6.5V4.8C3.5 2.9 5.0 1.4 7 1.4C9.0 1.4 10.5 2.9 10.5 4.8V6.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="2" y="6.3" width="10" height="8" rx="1.8" fill="#FFFFFF" />
      <circle cx="7" cy="10.3" r="1.2" fill="#8C671B" />
    </g>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`app-header ${isHeaderScrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link to="/#inicio" onClick={closeMenu} className="header-brand">
          <span className="header-logo-badge">
            <img
              src={logoEmblema}
              alt="Emblema da Loja João Pedro Junqueira nº 2181"
              className="header-logo"
            />
          </span>
          <div className="header-brand-text">
            <span className="header-title">
              Loja Maçônica João Pedro Junqueira, nº 2181
            </span>
            <span className="header-subtitle">
              Federada ao GOB e Jurisdicionada ao GOB-GO
            </span>
          </div>
        </Link>

        <nav aria-label="Navegação principal" className="header-nav-desktop">
          <ul className="nav-links-public">
            <li>
              <Link to="/#inicio" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/#sobre-nos" onClick={closeMenu}>
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/rito-brasileiro" onClick={closeMenu}>
                Rito Brasileiro
              </Link>
            </li>
            <li>
              <Link to="/#localizacao" onClick={closeMenu}>
                Localização
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions-desktop">
          <a
            href={LOJAS_URL}
            onClick={closeMenu}
            className="btn-restrito"
            aria-label="Acesso Restrito ao Sistema Lojas"
            title="Acesso Restrito — Sistema Lojas"
          >
            <RestritoButtonSvg />
          </a>
        </div>

        <button
          type="button"
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="header-mobile-drawer">
          <nav aria-label="Navegação móvel">
            <ul className="nav-links-mobile">
              <li>
                <Link to="/#inicio" onClick={closeMenu}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/#sobre-nos" onClick={closeMenu}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/rito-brasileiro" onClick={closeMenu}>
                  Rito Brasileiro
                </Link>
              </li>
              <li>
                <Link to="/#localizacao" onClick={closeMenu}>
                  Localização
                </Link>
              </li>
            </ul>
            <div className="mobile-actions">
              <a
                href={LOJAS_URL}
                onClick={closeMenu}
                className="btn-restrito btn-restrito-mobile"
                aria-label="Acesso Restrito ao Sistema Lojas"
              >
                <RestritoButtonSvg />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
