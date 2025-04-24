import React from "react";
import '../styles/Sostenibilidad.css'

function Sostenibilidad(params) {
    return(
        <section className="sostenibilidad">
            <h2>La Crisis Climática y la Sostenibilidad</h2>
            <div className="content-father-sostenibilidad">
                <div className="child-sostenibilidad">
                    <h3>Emisiones de Gases de Efecto Invernadero</h3>
                    <p>Reducir las emisiones de CO2 y otros gases de efecto invernadero a través de la transición hacia energías renovables y la eficiencia energética.</p>
                </div>
                <div>
                    <h3>Aumento del Nivel del Mar</h3>
                    <p>Adaptarse a los impactos del cambio climático, como el aumento del nivel del mar, a través de la construcción de infraestructuras resilientes y la planificación costera.</p>
                </div>
                <div className="child-sostenibilidad">
                    <h3>Pérdida de Biodiversidad</h3>
                    <p>Proteger los ecosistemas y la biodiversidad a través de la conservación de áreas naturales y la restauración de ecosistemas degradados.</p>
                </div>
            </div>
        </section>
    )
}

export default Sostenibilidad;




