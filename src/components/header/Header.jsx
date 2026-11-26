import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoEmblema from "../../assets/images/logoJPJ.png";
import { LOJAS_URL, INSTITUTIONAL_GROUPS } from "../../config/links";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInstitutionalOpen, setIsInstitutionalOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const institutionalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isInstitutionalOpen) return;

    const handleClickOutside = (event) => {
      if (
        institutionalRef.current &&
        !institutionalRef.current.contains(event.target)
      ) {
        setIsInstitutionalOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsInstitutionalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isInstitutionalOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsInstitutionalOpen(false);
  };

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
          <div className="institutional-menu-wrap" ref={institutionalRef}>
            <button
              type="button"
              className={`btn-fluid-glass-icon ${isInstitutionalOpen ? "is-open" : ""}`}
              onClick={() => setIsInstitutionalOpen((prev) => !prev)}
              aria-expanded={isInstitutionalOpen}
              aria-haspopup="true"
              aria-label="Acesso Institucional (GOB, GOB-GO e E-Sigma)"
              title="Acesso Institucional"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                apps
              </span>
            </button>

            {isInstitutionalOpen && (
              <div
                className="institutional-popover glass-card-enhanced"
                role="menu"
                aria-label="Links institucionais"
              >
                <div className="institutional-popover-header">
                  <span className="institutional-popover-eyebrow">
                    Acesso Institucional
                  </span>
                </div>

                <div className="institutional-groups">
                  {INSTITUTIONAL_GROUPS.map((group) => (
                    <div key={group.id} className="institutional-group">
                      <a
                        href={group.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="institutional-primary-link"
                        onClick={() => setIsInstitutionalOpen(false)}
                      >
                        <div className="institutional-primary-text">
                          <span className="institutional-primary-title">
                            {group.title}
                          </span>
                          <span className="institutional-primary-sub">
                            {group.subtitle}
                          </span>
                        </div>
                        <span
                          className="material-symbols-outlined institutional-ext-icon"
                          aria-hidden="true"
                        >
                          open_in_new
                        </span>
                      </a>

                      <div className="institutional-secondary-list">
                        {group.secondary.map((item) => (
                          <a
                            key={item.label}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="institutional-secondary-chip"
                            onClick={() => setIsInstitutionalOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href={LOJAS_URL}
            onClick={closeMenu}
            className="btn-fluid-glass"
            aria-label="Acesso Restrito ao Sistema Lojas"
            title="Acesso Restrito — Sistema Lojas"
          >
            <span
              className="material-symbols-outlined btn-fluid-icon"
              aria-hidden="true"
            >
              lock
            </span>
            <span>Restrito</span>
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

            <div className="mobile-institutional-section">
              <span className="institutional-popover-eyebrow">
                Acesso Institucional
              </span>
              <div className="institutional-groups">
                {INSTITUTIONAL_GROUPS.map((group) => (
                  <div key={group.id} className="institutional-group">
                    <a
                      href={group.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="institutional-primary-link"
                      onClick={closeMenu}
                    >
                      <div className="institutional-primary-text">
                        <span className="institutional-primary-title">
                          {group.title}
                        </span>
                        <span className="institutional-primary-sub">
                          {group.subtitle}
                        </span>
                      </div>
                      <span
                        className="material-symbols-outlined institutional-ext-icon"
                        aria-hidden="true"
                      >
                        open_in_new
                      </span>
                    </a>
                    <div className="institutional-secondary-list">
                      {group.secondary.map((item) => (
                        <a
                          key={item.label}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="institutional-secondary-chip"
                          onClick={closeMenu}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mobile-actions">
              <a
                href={LOJAS_URL}
                onClick={closeMenu}
                className="btn-fluid-glass btn-fluid-glass-mobile"
                aria-label="Acesso Restrito ao Sistema Lojas"
              >
                <span
                  className="material-symbols-outlined btn-fluid-icon"
                  aria-hidden="true"
                >
                  lock
                </span>
                <span>Restrito</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
