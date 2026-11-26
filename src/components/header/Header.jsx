import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoEmblema from "../../assets/images/logoJPJ.png";
import navbarBg from "../../assets/images/navbar-bg.jpg";
import { LOJAS_URL } from "../../config/links";

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
      <div className="header-bg-layer" aria-hidden="true">
        <img src={navbarBg} alt="" className="header-bg-img" />
        <div className="header-bg-overlay"></div>
      </div>

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
            className="btn-primary-gold header-btn"
          >
            Sistema Lojas
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
                className="btn-primary-gold mobile-action-btn"
              >
                Sistema Lojas
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
