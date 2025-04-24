import React from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Calendar, Heart, Users } from 'lucide-react';
import '../styles/Donations.css';

function Donations() {
  const navigate = useNavigate();

  const handleDonationClick = (type) => {
    navigate(`/payment/${type}`);
  };

  return (
    <div className="donations-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Cómo Puedes Contribuir</h1>
          <p>Tu apoyo es fundamental para crear un impacto positivo en nuestro planeta</p>
        </div>
      </section>

      <section className="contribution-section">
        <div className="contribution-grid">
          <div className="contribution-card">
            <div className="card-icon">
              <Heart />
            </div>
            <h3>Donaciones</h3>
            <p>Tu apoyo económico es fundamental para impulsar nuestros proyectos y generar un impacto real.</p>
          </div>

          <div className="contribution-card">
            <div className="card-icon">
              <Users />
            </div>
            <h3>Voluntariado</h3>
            <p>Dedica tu tiempo y talento a causas que te apasionan, trabajando en proyectos significativos.</p>
          </div>

          <div className="contribution-card">
            <div className="card-icon">
              <Calendar />
            </div>
            <h3>Difusión</h3>
            <p>Comparte información sobre nuestra labor y ayuda a crear conciencia sobre los desafíos.</p>
          </div>
        </div>
      </section>

      <section className="donation-options-section">
        <h2>Elige tu Forma de Ayudar</h2>
        
        <div className="options-grid">
          <div 
            className="option-card monthly"
            onClick={() => handleDonationClick('monthly')}
          >
            <div className="card-header">
              <h3>Donaciones Mensuales</h3>
            </div>
            <div className="card-content">
              <p>Contribuye de forma regular a nuestros esfuerzos de conservación con un monto mensual.</p>
              <button className="donate-button">
                <CreditCard className="button-icon" />
                Donar Mensualmente
              </button>
            </div>
          </div>

          <div 
            className="option-card single"
            onClick={() => handleDonationClick('single')}
          >
            <div className="card-header">
              <h3>Donaciones Únicas</h3>
            </div>
            <div className="card-content">
              <p>Realiza una donación única para apoyar un proyecto específico o contribuir a nuestros esfuerzos generales.</p>
              <button className="donate-button">
                <CreditCard className="button-icon" />
                Hacer Donación Única
              </button>
            </div>
          </div>

          <div 
            className="option-card volunteer"
            onClick={() => handleDonationClick('volunteer')}
          >
            <div className="card-header">
              <h3>Voluntariado</h3>
            </div>
            <div className="card-content">
              <p>Dedica tu tiempo y habilidades para contribuir a nuestros proyectos y conectar directamente con la causa.</p>
              <button className="donate-button">
                <Users className="button-icon" />
                Unirse como Voluntario
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donations;