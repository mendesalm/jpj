import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoImagem from "../../assets/images/logo_jpg.png";
import { LOJAS_URL } from "../../config/links";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <img
                src={logoImagem}
                alt="Logo da Loja Maçônica João Pedro Junqueira nº 2181"
                className="footer-logo"
              />
              <div className="footer-identity">
                <span className="footer-title">
                  Aug∴ Resp∴ Loja Simbólica João Pedro Junqueira, nº 2181
                </span>
                <span className="footer-subtitle">
                  Federada ao GOB e Jurisdicionada ao GOB-GO · Anápolis, Goiás
                </span>
              </div>
            </div>
            <p className="footer-motto">
              Há 44 anos tornando melhores os Homens de Bem — Liberdade · Igualdade · Fraternidade.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-heading">Navegação</span>
            <ul className="footer-nav-list">
              <li><Link to="/#inicio">Início</Link></li>
              <li><Link to="/#sobre-nos">Sobre Nós</Link></li>
              <li><Link to="/rito-brasileiro">Rito Brasileiro</Link></li>
              <li><Link to="/#localizacao">Localização</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-heading">Sessões &amp; Acesso</span>
            <ul className="footer-nav-list">
              <li>
                <span className="footer-schedule">Sessões: Sextas-feiras, 19h30min</span>
              </li>
              <li>
                <a href={LOJAS_URL}>Sistema Lojas</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Loja Maçônica João Pedro Junqueira nº 2181. Todos os direitos reservados.
          </span>
          <span className="footer-credit">Desenvolvido por André Luiz Mendes</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
