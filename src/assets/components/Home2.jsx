
import React from "react";
import { ArrowRight, Globe, Leaf, Users } from 'lucide-react';
import '../styles/Home2.css';

function Home() {
  return (
    <section className="home">
      <div className="primera-imagen"></div>
      <div className="info-primera-imagen">
        <h1>UN MUNDO MEJOR COMIENZA CONTIGO</h1>
        <p>Conoce los problemas que enfrenta nuestro planeta y cómo puedes ayudar a solucionarlos. Juntos podemos crear un futuro sostenible para todos. Explora nuestros proyectos y únete a la lucha contra los desafíos globales. </p>
        <div className="content-btns">
          <button>Conoce nuestros proyectos <ArrowRight className="arrow" /></button>
          <button>Descubre cómo ayudar</button>
        </div>
        {/* Stats Section */}
        <div className="content-stats">
          <div className="stats">
            <div className="box-stats">
              <div className="content-icon-stats">
                <Globe className="icons-stats" />
              </div>
              <h3 className="text-2xl mb-2">150+</h3>
              <p>Proyectos Globales</p>
            </div>
            <div className="box-stats">
              <div className="content-icon-stats">
                <Users className="icons-stats" />
              </div>
              <h3 className="text-2xl mb-2">10K+</h3>
              <p>Voluntarios Activos</p>
            </div>
            <div className="box-stats">
              <div className="content-icon-stats">
                <Leaf className="icons-stats" />
              </div>
              <h3 className="text-2xl mb-2">500K+</h3>
              <p>Árboles Plantados</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;




