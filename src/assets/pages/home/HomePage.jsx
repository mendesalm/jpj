import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./HomePage.css";
import LocationSection from "../../../components/location/LocationSection.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import imgSlider2 from "../../images/slider/slider2.jpg";
import bgCinzaJpj from "../../images/BG-cinza-jpj.jpg";

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

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal-on-scroll");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <main className="home-main">
        {/* Full-Bleed Atmospheric Hero (Compact Bottom-Right Info, No Card) */}
        <section id="inicio" className="hero-section" aria-label="Início">
          <div className="hero-backdrop" aria-hidden="true">
            <img
              src={imgSlider2}
              alt="Interior do Templo da Loja Maçônica João Pedro Junqueira nº 2181 em Anápolis, Goiás"
              className="hero-backdrop-img"
            />
            <div className="hero-backdrop-gradient-v"></div>
            <div className="hero-backdrop-gradient-h"></div>
          </div>

          <div className="hero-container">
            <div className="hero-content-right">
              <div className="hero-badge glass-card-enhanced">
                <span className="material-symbols-outlined hero-badge-icon" aria-hidden="true">
                  auto_awesome
                </span>
                <span>ARLS Nº 2181 · Anápolis, Goiás</span>
              </div>

              <h1 className="hero-title">Loja João Pedro Junqueira</h1>

              <p className="hero-description">
                Há 44 anos tornando melhores os Homens de Bem — uma Oficina dedicada à sabedoria, à fraternidade e ao aperfeiçoamento ético e intelectual.
              </p>

              <div className="hero-location-btn-row">
                <a
                  href="#localizacao"
                  aria-label="Localização do Templo"
                  className="hero-location-icon-btn glass-card-enhanced"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    location_on
                  </span>
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
                  <span className="hero-meta-value tabular-nums">Sextas-feiras, 19h30</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Silver-Gray Masonic Emblem Mission, Vision & Values Section */}
        <section id="sobre-nos" className="pillars-section" aria-label="Sobre Nós">
          <div className="pillars-bg-layer" aria-hidden="true">
            <img src={bgCinzaJpj} alt="" className="pillars-bg-img" />
            <div className="pillars-bg-scrim"></div>
          </div>

          <div className="pillars-container">
            <div className="section-heading-group pillars-heading reveal-on-scroll">
              <span className="pillars-eyebrow">Propósito &amp; Pilares</span>
              <h2 className="pillars-title">Missão, Visão e Valores</h2>
              <p className="pillars-subtitle">
                Os fundamentos que orientam nossa Oficina em Anápolis e em todo o estado de Goiás.
              </p>
            </div>

            <div className="pillars-grid">
              <article className="light-glass-card glass-card-light reveal-on-scroll reveal-delay-1">
                <div className="light-card-icon-badge">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    architecture
                  </span>
                </div>
                <h3 className="light-card-title">Nossa Missão</h3>
                <p className="light-card-body">
                  Promover o aperfeiçoamento moral e intelectual de nossos membros, desbastando a pedra bruta para transformar homens bons em líderes exemplares para suas famílias e para a sociedade.
                </p>
              </article>

              <article className="light-glass-card glass-card-light reveal-on-scroll reveal-delay-2">
                <div className="light-card-icon-badge">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    visibility
                  </span>
                </div>
                <h3 className="light-card-title">Nossa Visão</h3>
                <p className="light-card-body">
                  Ser reconhecida em Anápolis e em todo o estado de Goiás como uma Oficina de excelência, um farol de sabedoria, ética e fraternidade voltado à formação de cidadãos atuantes.
                </p>
              </article>

              <article className="light-glass-card glass-card-light reveal-on-scroll reveal-delay-3">
                <div className="light-card-icon-badge">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    diversity_3
                  </span>
                </div>
                <h3 className="light-card-title">Nossos Valores</h3>
                <ul className="light-values-list">
                  <li>
                    <strong>Fraternidade:</strong> Cultivar laços de união, lealdade e apoio mútuo entre os Irmãos.
                  </li>
                  <li>
                    <strong>Conhecimento:</strong> Buscar incessantemente a verdade, a sabedoria e o desenvolvimento humano.
                  </li>
                  <li>
                    <strong>Retidão:</strong> Agir com integridade, honra e justiça em todas as ações.
                  </li>
                  <li>
                    <strong>Filantropia:</strong> Praticar a caridade e o serviço desinteressado à comunidade.
                  </li>
                  <li>
                    <strong>Tolerância:</strong> Respeitar a diversidade de opiniões e crenças, promovendo a harmonia.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Glassmorphic Location Map Section */}
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
