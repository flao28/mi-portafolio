import React from "react";
import '../styles/Home.css';

function Home(){
    return(
        <section className="home">
            <div className="primera-imagen"></div>
            <div className="info-primera-imagen">
                <h1>UN MUNDO MEJOR COMIENZA CONTIGO</h1>
                <p>Conoce los problemas que enfrenta nuestro planeta y cómo puedes ayudar a solucionarlos. Juntos podemos crear un futuro sostenible para todos. Explora nuestros proyectos y únete a la lucha contra los desafíos globales. </p>
                <button>Conoce nuestros proyectos</button>
                <button>Descubre cómo ayudar</button>
            </div>
        </section>
    )
};

export default Home;
