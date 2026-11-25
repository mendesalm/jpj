import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoImagem from "../../assets/images/logo_jpg.png";
import { LOJAS_URL, CONFIRMACAO_URL } from "../../config/links";

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
                  Anápolis, Goiás · Rito Brasileiro
                </span>
              </div>
            </div>
            <p className="footer-motto">
              Há 43 anos tornando melhores os Homens de Bem — Liberdade · Igualdade · Fraternidade.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-heading">Navegação</span>
            <ul className="footer-nav-list">
              <li><Link to="/#inicio">Início</Link></li>
              <li><Link to="/#sobre-nos">Sobre Nós</Link></li>
              <li><Link to="/#rito">Rito Brasileiro</Link></li>
              <li><Link to="/#localizacao">Localização</Link></li>
              <li><Link to="/#contato">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-heading">Visitação &amp; Acesso</span>
            <ul className="footer-nav-list">
              <li>
                <span className="footer-schedule">Sessões: Terças-feiras, 20h00</span>
              </li>
              <li>
                <a href={CONFIRMACAO_URL}>Confirmar Presença</a>
              </li>
              <li>
                <a href={LOJAS_URL}>Acesso ao Sistema Lojas</a>
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
