import React from "react";
import "./LocationSection.css";
import gridBg from "../../assets/images/grid-bg.jpg";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Loja+Ma%C3%A7%C3%B4nica+Jo%C3%A3o+Pedro+Junqueira+An%C3%A1polis+GO";

const LocationSection = () => {
  return (
    <section id="localizacao" className="location-section" aria-label="Localização do Templo">
      <div className="location-bg-layer" aria-hidden="true">
        <img src={gridBg} alt="" className="location-bg-img" />
        <div className="location-bg-scrim"></div>
      </div>

      <div className="location-container">
        <div className="location-header reveal-on-scroll">
          <div className="section-heading-group">
            <span className="section-eyebrow">Onde Estamos</span>
            <h2 className="section-title">Localização do Templo</h2>
          </div>
          <p className="location-lead">
            Irmãos visitantes regulares e interessados podem consultar o endereço em Anápolis e confirmar presença junto à secretaria.
          </p>
        </div>

        <div className="location-glass-frame glass-card-enhanced reveal-on-scroll reveal-delay-1">
          <div className="location-map-backdrop">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.66986509618!2d-48.9566906!3d-16.2887163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea47ba4084585%3A0x9ef6a3c653ccb834!2sLoja%20Ma%C3%A7%C3%B4nica%20Jo%C3%A3o%20Pedro%20Junqueira!5e0!3m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Loja Maçônica João Pedro Junqueira"
            ></iframe>
            <div className="location-map-scrim" aria-hidden="true"></div>
          </div>

          <article className="location-overlay-card glass-card-enhanced">
            <header className="location-card-header">
              <span className="location-card-eyebrow">Templo Maçônico</span>
              <h3 className="location-card-title">Loja João Pedro Junqueira</h3>
            </header>

            <div className="location-card-details">
              <div className="location-detail-row">
                <span className="material-symbols-outlined location-detail-icon" aria-hidden="true">
                  location_on
                </span>
                <p>
                  Anápolis — Goiás
                  <br />
                  Atendimento mediante agendamento
                </p>
              </div>
              <div className="location-detail-row">
                <span className="material-symbols-outlined location-detail-icon" aria-hidden="true">
                  schedule
                </span>
                <p className="tabular-nums">
                  Sessões ordinárias às sextas-feiras, 19h30
                </p>
              </div>
              <div className="location-detail-row">
                <span className="material-symbols-outlined location-detail-icon" aria-hidden="true">
                  verified
                </span>
                <p>ARLS Nº 2181 · Rito Brasileiro</p>
              </div>
            </div>

            <div className="location-card-actions">
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gold"
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  directions
                </span>
                <span>Traçar rota</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
