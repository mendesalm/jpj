import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImagem from "../../assets/images/logo_jpg.png";

const LOJAS_URL = import.meta.env.VITE_LOJAS_URL || "https://lojas.e-sigma.app";
const CONFIRMACAO_URL =
  import.meta.env.VITE_CONFIRMACAO_URL ||
  "https://lojajoaopedrojunqueira.com.br/confirmacao";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`app-header ${isHeaderScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <Link to="/" onClick={closeMenu} className="header-logo-link">
          <img src={logoImagem} alt="Logo da Loja" className="header-logo" />
        </Link>
        <h1 className="header-title">Loja João Pedro Junqueira nº 2181</h1>

        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links-public">
            <li><Link to="/#inicio" onClick={closeMenu}>Início</Link></li>
            <li><Link to="/#sobre-nos" onClick={closeMenu}>Sobre Nós</Link></li>
            <li><Link to="/#localizacao" onClick={closeMenu}>Localização</Link></li>
            <li><Link to="/#contato" onClick={closeMenu}>Contato</Link></li>
          </ul>
          <div className="nav-links-auth">
            <a
              href={CONFIRMACAO_URL}
              onClick={closeMenu}
              className="glass-button"
            >
              Confirmar Presença
            </a>
            <a
              href={LOJAS_URL}
              onClick={closeMenu}
              className="glass-button"
            >
              Acesso ao Sistema Lojas
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
