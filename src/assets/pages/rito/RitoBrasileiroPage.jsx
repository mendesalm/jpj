import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RitoBrasileiroPage.css";
import Footer from "../../../components/footer/Footer.jsx";
import ritoIcon from "../../images/RitoBrasileiro.png";
import { LOJAS_URL } from "../../../config/links";

const TIMELINE_EVENTS = [
  {
    year: "1914",
    date: "23 de dezembro de 1914",
    title: "A Criação do Rito (Decreto nº 500)",
    role: "Lauro Sodré — O Criador",
    description:
      "O Soberano Grão-Mestre Geral do Grande Oriente do Brasil (GOB), Lauro Sodré, assinou o Decreto nº 500, instituindo oficialmente o Rito Brasileiro. Seu propósito era unir a Tradição maçônica universal à Evolução social, valorizando a cultura, o civismo, a liberdade e os grandes temas nacionais, mantendo-se teísta e regular.",
  },
  {
    year: "1941",
    date: "17 de fevereiro de 1941",
    title: "Fundação do Supremo Conclave do Brasil",
    role: "Álvaro Palmeira & Octaviano Bastos",
    description:
      "Após um período de adormecimento motivado pela falta de rituais impressos e de uma Oficina-Chefe para os altos graus, lideranças como Álvaro Palmeira, Octaviano Bastos e o Grão-Mestre Geral Joaquim Rodrigues Neves fundaram o Supremo Conclave do Brasil para o Rito Brasileiro de Maçons Antigos, Livres e Aceitos.",
  },
  {
    year: "1968",
    date: "19 de março de 1968",
    title: "A Reimplantação Vitoriosa (Decreto nº 2.080)",
    role: "Álvaro Palmeira — O Conformador",
    description:
      "Como Grão-Mestre Geral do GOB, o professor Álvaro Palmeira baixou o Decreto nº 2.080, consolidando a chamada Reimplantação Vitoriosa do Rito Brasileiro. Reformulou a doutrina e os rituais do 1º ao 33º Grau, conferindo ao Rito uma feição humanista, filosófica, científica e cívica voltada aos desafios contemporâneos.",
  },
];

const DEGREE_TIERS = [
  {
    range: "1º ao 3º Grau",
    body: "Lojas Simbólicas",
    focus: "Aprendiz, Companheiro e Mestre Maçom",
    detail:
      "Base iniciática da Maçonaria Simbólica, administrada sob a jurisdição do Grande Oriente do Brasil (GOB) e dos Grandes Orientes Estaduais (GOB-GO).",
  },
  {
    range: "4º ao 18º Grau",
    body: "Sublimes Capítulos",
    focus: "Cultura Moral e Cívica",
    detail:
      "Aprofundamento ético e cívico do Mestre Maçom. Em nossa Oficina, esta etapa é sediada pelo Sublime Capítulo \"José de Lima Júnior\".",
  },
  {
    range: "19º ao 30º Grau",
    body: "Conselhos Filosóficos / Kadosh",
    focus: "Cultura Artística, Científica, Tecnológica e Filosófica",
    detail:
      "Estudo superior da filosofia, da ciência e da responsabilidade social. Sediado em nossa Loja pelo Conselho Kadoshi \"Pedro Moreira de Lima\".",
  },
  {
    range: "31º ao 33º Grau",
    body: "Altos Colégios & Supremo Conclave",
    focus: "Cultura Cívica e Síntese Humanística",
    detail:
      "Culminância do Rito no Grau 33 — Servidor da Ordem, da Pátria e da Humanidade, sob a égide direta do Supremo Conclave do Brasil.",
  },
];

const RitoBrasileiroPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="rito-page">
      <main className="rito-main">
        {/* Hero Header */}
        <section className="rito-hero" aria-label="Histórico do Rito Brasileiro">
          <div className="section-container">
            <div className="rito-hero-card">
              <div className="rito-hero-top">
                <div className="rito-hero-emblem">
                  <img
                    src={ritoIcon}
                    alt="Emblema do Rito Brasileiro"
                    className="rito-hero-img"
                  />
                </div>
                <div className="rito-hero-text">
                  <span className="section-eyebrow">
                    Supremo Conclave do Brasil para o Rito Brasileiro
                  </span>
                  <h1 className="rito-hero-title">Histórico do Rito Brasileiro</h1>
                  <p className="rito-hero-subtitle">
                    Da criação em 1914 à Reimplantação Vitoriosa de 1968 — uma síntese entre Tradição e Evolução a serviço da Ordem, da Pátria e da Humanidade.
                  </p>
                </div>
              </div>

              <div className="rito-hero-actions">
                <Link to="/#inicio" className="btn-glass">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_back
                  </span>
                  <span>Voltar ao Início</span>
                </Link>
                <a
                  href="https://scrb33.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gold"
                >
                  <span>Supremo Conclave do Brasil</span>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="rito-timeline-section" aria-label="Marcos Históricos">
          <div className="section-container">
            <div className="section-heading-group rito-section-heading">
              <span className="section-eyebrow">Linha do Tempo · 1914 — 1968</span>
              <h2 className="section-title">Origens e Consolidação</h2>
              <p className="section-subtitle">
                Os marcos fundamentais que deram origem ao Rito genuinamente brasileiro e estruturaram o Supremo Conclave do Brasil.
              </p>
            </div>

            <div className="rito-timeline-grid">
              {TIMELINE_EVENTS.map((item) => (
                <article key={item.year} className="rito-timeline-card">
                  <div className="rito-timeline-meta">
                    <span className="rito-year-badge tabular-nums">{item.year}</span>
                    <span className="rito-date-label">{item.date}</span>
                  </div>
                  <h3 className="rito-card-title">{item.title}</h3>
                  <span className="rito-role-tag">{item.role}</span>
                  <p className="rito-card-body">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Degrees Structure Section */}
        <section className="rito-degrees-section" aria-label="Estrutura dos 33 Graus">
          <div className="section-container">
            <div className="section-heading-group rito-section-heading">
              <span className="section-eyebrow">Escala Hierárquica · 33 Graus</span>
              <h2 className="section-title">Estrutura Simbólica e Filosófica</h2>
              <p className="section-subtitle">
                Do Aprendiz ao Grau 33, o Rito Brasileiro integra formação iniciática, ética cívica e pensamento humanista contemporâneo.
              </p>
            </div>

            <div className="rito-degrees-grid">
              {DEGREE_TIERS.map((tier) => (
                <article key={tier.range} className="rito-degree-card">
                  <div className="rito-degree-header">
                    <span className="rito-degree-range tabular-nums">{tier.range}</span>
                    <span className="rito-degree-body-name">{tier.body}</span>
                  </div>
                  <h3 className="rito-degree-focus">{tier.focus}</h3>
                  <p className="rito-card-body">{tier.detail}</p>
                </article>
              ))}
            </div>

            {/* Local Lodge Connection Callout */}
            <article className="rito-lodge-callout">
              <div className="rito-callout-copy">
                <span className="section-eyebrow">
                  Loja Maçônica João Pedro Junqueira, nº 2181
                </span>
                <h3 className="rito-callout-title">
                  Sede dos 30 primeiros graus em Anápolis, Goiás
                </h3>
                <p className="rito-card-body">
                  Federada ao Grande Oriente do Brasil (GOB) e jurisdicionada ao GOB-GO, nossa Oficina pratica o Rito Brasileiro há 44 anos e sedia os corpos filosóficos do 4º ao 30º Grau, permitindo aos Mestres Maçons uma jornada completa de aperfeiçoamento moral, cívico e filosófico.
                </p>
              </div>
              <div className="rito-callout-actions">
                <Link to="/#localizacao" className="btn-glass">
                  <span>Localização do Templo</span>
                </Link>
                <a href={LOJAS_URL} className="btn-primary-gold">
                  <span>Acesso Restrito</span>
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RitoBrasileiroPage;
