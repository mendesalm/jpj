import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImagem from "../../assets/images/logo_jpg.png";
import { LOJAS_URL, CONFIRMACAO_URL } from "../../config/links";

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
      <div className="header-pill">
        <Link to="/#inicio" onClick={closeMenu} className="header-brand">
          <img
            src={logoImagem}
            alt="Logo da Loja Maçônica João Pedro Junqueira nº 2181"
            className="header-logo"
          />
          <div className="header-brand-text">
            <span className="header-title">João Pedro Junqueira</span>
            <span className="header-subtitle">ARLS Nº 2181</span>
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
              <Link to="/#rito" onClick={closeMenu}>
                Rito Brasileiro
              </Link>
            </li>
            <li>
              <Link to="/#localizacao" onClick={closeMenu}>
                Localização
              </Link>
            </li>
            <li>
              <Link to="/#contato" onClick={closeMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions-desktop">
          <a
            href={CONFIRMACAO_URL}
            onClick={closeMenu}
            className="btn-glass header-btn"
          >
            Confirmar Presença
          </a>
          <a
            href={LOJAS_URL}
            onClick={closeMenu}
            className="btn-primary-gold header-btn"
          >
            Acesso ao Sistema Lojas
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
                <Link to="/#rito" onClick={closeMenu}>
                  Rito Brasileiro
                </Link>
              </li>
              <li>
                <Link to="/#localizacao" onClick={closeMenu}>
                  Localização
                </Link>
              </li>
              <li>
                <Link to="/#contato" onClick={closeMenu}>
                  Contato
                </Link>
              </li>
            </ul>
            <div className="mobile-actions">
              <a
                href={CONFIRMACAO_URL}
                onClick={closeMenu}
                className="btn-glass mobile-action-btn"
              >
                Confirmar Presença
              </a>
              <a
                href={LOJAS_URL}
                onClick={closeMenu}
                className="btn-primary-gold mobile-action-btn"
              >
                Acesso ao Sistema Lojas
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
