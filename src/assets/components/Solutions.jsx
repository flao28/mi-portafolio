import React from "react";
import '../styles/Solutions.css'
import solutions1 from '../images/solutions1.jpeg';
import solutions2 from '../images/solutions2.jpeg';
import arbol from '../images/arbol.png';
import estrella from '../images/estrella.png';
import consumo from '../images/consumo.png';

function Solutions(){
    return(
        <section className="solutions">
            <h2>Soluciones a Nuestro Alcance</h2>
            <div className="content-edu-poli-tec">
                <div className="edu-poli-tec">
                    <h3>Educación, políticas y tecnología: abordando los problemas</h3>
                    <div className="edu-poli-tec-divs">
                        <div className="edu-poli-tec-children">
                            <h4>Educación y Concienciación</h4>
                            <p>La educación ambiental es fundamental para generar conciencia sobre los problemas y promover la acción responsable.</p>
                        </div>
                        <div>
                            <h4>Políticas y Regulaciones</h4>
                            <p>Las políticas gubernamentales y las regulaciones ambientales son esenciales para controlar la contaminación y promover la sostenibilidad.</p>
                        </div>
                        <div className="edu-poli-tec-children">
                            <h4>Innovación y Tecnología</h4>
                            <p>Las nuevas tecnologías pueden ayudar a reducir las emisiones, mejorar la eficiencia y encontrar soluciones innovadoras.</p>
                        </div>
                    </div>
                </div>
                <div className="images-solutions1">
                    <img src={solutions1} alt="Educación, políticas y tecnología" />
                </div>
            </div>
           
            <div className="contentfather-con-res-cons">
                <h3>Conservación, restauración y consumo responsable: parte de la solución</h3>
                <div className="content-con-res-cons">
                    <div className="images-solutions2">
                        <img src={solutions2} alt="Conservación, restauración y consumo responsable" />
                    </div>
                    <div className="con-res-cons">
                        <div className="con-res-cons-divs">
                            <div>
                                <h4>Conservación</h4>
                                <div>
                                    <img src={arbol} alt="conservacion" />
                                </div>
                                <p>Proteger los ecosistemas existentes, como bosques, océanos y humedales, es crucial para preservar la biodiversidad.</p>
                            </div>
                            <div>
                                <h4>Restauración</h4>
                                <div>
                                    <img src={estrella} alt="restauracion" />
                                </div>
                                <p>Restaurar los ecosistemas dañados, como la reforestación y la limpieza de ríos, puede ayudar a recuperar la salud del planeta.</p>
                            </div>
                            <div>
                                <h4>Consumo Responsable</h4>
                                <div>
                                    <img src={consumo} alt="consumo" />
                                </div>
                                <p>Reducir el consumo excesivo, reutilizar productos y reciclar materiales puede minimizar el impacto ambiental.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Solutions;








