import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomePage.css";
import LocationSection from "../../../components/location/LocationSection.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import imgSlider2 from "../../images/slider/slider2.jpg";
import ritoIcon from "../../images/RitoBrasileiro.png";
import { LOJAS_URL } from "../../../config/links";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="home-page">
      <main className="home-main">
        {/* Split Atmospheric Glassmorphism Hero (100vh) */}
        <section id="inicio" className="hero-section" aria-label="Início">
          <div className="hero-container">
            <div className="hero-split-grid">
              <div className="hero-glass-panel">
                <div className="hero-badge">
                  <span className="material-symbols-outlined hero-badge-icon" aria-hidden="true">
                    auto_awesome
                  </span>
                  <span>ARLS Nº 2181 · Anápolis, Goiás</span>
                </div>

                <h1 className="hero-title">Loja João Pedro Junqueira</h1>

                <p className="hero-description">
                  Há 44 anos tornando melhores os Homens de Bem — uma Oficina dedicada à sabedoria, à fraternidade e ao aperfeiçoamento ético e intelectual.
                </p>

                <div className="hero-cta-row">
                  <a href="#sobre-nos" className="btn-primary-gold">
                    <span>Explorar Nossa Missão</span>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_downward
                    </span>
                  </a>
                  <a href="#localizacao" className="btn-glass">
                    <span className="material-symbols-outlined hero-cta-icon-gold" aria-hidden="true">
                      location_on
                    </span>
                    <span>Localização do Templo</span>
                  </a>
                </div>

                <div className="hero-meta-strip">
                  <div className="hero-meta-item">
                    <span className="hero-meta-label">Tradição</span>
                    <span className="hero-meta-value tabular-nums">44 anos de história</span>
                  </div>
                  <div className="hero-meta-item">
                    <span className="hero-meta-label">Rito Praticado</span>
                    <span className="hero-meta-value">Rito Brasileiro</span>
                  </div>
                  <div className="hero-meta-item">
                    <span className="hero-meta-label">Sessões Ordinárias</span>
                    <span className="hero-meta-value tabular-nums">Sextas-feiras, 19h30min</span>
                  </div>
                </div>
              </div>

              <figure className="hero-media-frame">
                <img
                  src={imgSlider2}
                  alt="Interior do Templo da Loja Maçônica João Pedro Junqueira nº 2181"
                  className="hero-media-img"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Glassmorphic Mission, Vision & Values Section */}
        <section id="sobre-nos" className="pillars-section" aria-label="Sobre Nós">
          <div className="section-container">
            <div className="section-heading-group pillars-heading">
              <span className="section-eyebrow">Propósito &amp; Pilares</span>
              <h2 className="section-title">Missão, Visão e Valores</h2>
              <p className="section-subtitle">
                Os fundamentos que orientam nossa Oficina em Anápolis e em todo o estado de Goiás.
              </p>
            </div>

            <div className="pillars-grid">
              <article className="glass-card">
                <div className="card-icon-badge">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    architecture
                  </span>
                </div>
                <h3 className="card-title">Nossa Missão</h3>
                <p className="card-body">
                  Promover o aperfeiçoamento moral e intelectual de nossos membros, desbastando a pedra bruta para transformar homens bons em líderes exemplares para suas famílias e para a sociedade. Através do estudo contínuo, do debate fraterno e da prática dos valores maçônicos, atuamos como uma força positiva e catalisadora para o progresso da comunidade de Anápolis, honrando o legado de nossa Loja e construindo um futuro mais justo e esclarecido.
                </p>
              </article>

              <article className="glass-card">
                <div className="card-icon-badge">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    visibility
                  </span>
                </div>
                <h3 className="card-title">Nossa Visão</h3>
                <p className="card-body">
                  Ser reconhecida em Anápolis e em todo o estado de Goiás como uma Oficina de excelência, um farol de sabedoria, ética e fraternidade. Almejamos ser um centro de formação de cidadãos conscientes e atuantes, cujas contribuições e ações filantrópicas deixem uma marca indelével e positiva, inspirando e iluminando o caminho para as futuras gerações na construção de uma sociedade mais justa, livre e igualitária.
                </p>
              </article>

              <article className="glass-card">
                <div className="card-icon-badge">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    diversity_3
                  </span>
                </div>
                <h3 className="card-title">Nossos Valores</h3>
                <ul className="values-list">
                  <li>
                    <strong>Fraternidade:</strong> Cultivar laços de união, lealdade e apoio mútuo entre os Irmãos.
                  </li>
                  <li>
                    <strong>Conhecimento:</strong> Buscar incessantemente a verdade, a sabedoria e o desenvolvimento intelectual.
                  </li>
                  <li>
                    <strong>Retidão:</strong> Agir com integridade, honra e justiça em todas as nossas ações.
                  </li>
                  <li>
                    <strong>Filantropia:</strong> Praticar a caridade e o serviço desinteressado, visando o bem-estar da comunidade.
                  </li>
                  <li>
                    <strong>Tolerância:</strong> Respeitar a diversidade de opiniões, crenças e origens, promovendo a paz e a harmonia.
                  </li>
                </ul>
              </article>
            </div>

            {/* Aprimoramento Contínuo / Rito Brasileiro Glass Feature */}
            <article id="rito" className="rito-feature-card">
              <div className="rito-feature-content">
                <div className="rito-feature-eyebrow-row">
                  <span className="rito-emblem-wrap">
                    <img
                      src={ritoIcon}
                      alt="Emblema do Rito Brasileiro"
                      className="rito-emblem-img"
                    />
                  </span>
                  <span className="section-eyebrow">
                    Rito Brasileiro · Supremo Conclave do Brasil
                  </span>
                </div>
                <h3 className="rito-feature-title">
                  Aprimoramento Contínuo — Do Aprendiz ao Grau 33
                </h3>
                <p className="rito-feature-body">
                  Nossa Loja pratica o Rito Brasileiro e oferece uma jornada completa de desenvolvimento maçônico. Para os Mestres que aspiram aprofundar seus conhecimentos, o caminho se estende através dos Graus Filosóficos. A Loja sedia o Sublime Capítulo &ldquo;José de Lima Júnior&rdquo; e o Conselho Kadoshi &ldquo;Pedro Moreira de Lima&rdquo;, conferidos pelo Supremo Conclave do Brasil para o Rito Brasileiro de Maçons Antigos, Livres e Aceitos — abrangendo os 30 primeiros graus dessa jornada rumo ao Grau 33.
                </p>
                <div style={{ paddingTop: "6px" }}>
                  <Link to="/rito-brasileiro" className="btn-glass">
                    <span>Conhecer a História do Rito</span>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>

              <div className="rito-feature-stat">
                <span className="rito-stat-label">Graus Sediados</span>
                <span className="rito-stat-value tabular-nums">1º ao 30º Grau</span>
                <span className="rito-stat-caption">Jornada Filosófica Completa</span>
              </div>
            </article>
          </div>
        </section>

        {/* Glassmorphic Location Section */}
        <LocationSection />

        {/* Visitation & Portal Access Section */}
        <section id="contato" className="contact-section" aria-label="Contato e Visitação">
          <div className="section-container">
            <div className="contact-glass-card">
              <div className="contact-copy">
                <span className="section-eyebrow">Visitação &amp; Secretaria</span>
                <h2 className="contact-title">
                  Acesse o Sistema Lojas
                </h2>
                <p className="contact-body">
                  Nossas sessões ordinárias acontecem às sextas-feiras, às 19h30min. Obreiros da Oficina têm acesso direto ao portal administrativo pelo Sistema Lojas.
                </p>
              </div>
              <div className="contact-actions">
                <a href={LOJAS_URL} className="btn-primary-gold">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    login
                  </span>
                  <span>Sistema Lojas</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
