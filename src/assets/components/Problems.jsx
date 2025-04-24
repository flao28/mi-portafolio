import React from "react";
import '../styles/Problems.css'
function Problems(){
    return(
        <section className="problems">
            <h2>Los Desafios del Planeta</h2>

            <div className="content-father-problems">
                <div className="child-problems">
                    <h3>Cambio Climatico</h3>
                    <p>El calentamiento global, el aumento del nivel del mar, fenómenos meteorológicos extremos y la acidificación de los océanos son consecuencias del cambio climático.</p>
                </div>
                <div>
                    <h3>Degradación del Medio Ambiente</h3>
                    <p>La contaminación del aire y el agua, la pérdida de biodiversidad, la deforestación y la desertificación están deteriorando los ecosistemas del planeta.</p>
                </div>
                <div className="child-problems">
                    <h3>Pérdida de Biodiversidad</h3>
                    <p>La extinción de especies a un ritmo acelerado amenaza la estabilidad de los ecosistemas y la salud del planeta.</p>
                </div>
            </div>
           
            
        </section>
    )
};

export default Problems;








