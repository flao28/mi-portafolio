import React, { useEffect, useRef, useState } from "react";
import '../styles/Stories.css'

function Stories() {

    return (
        <section className="stories">
            <h2>Historias de Impacto</h2>
            <div className="content-father-stories"> 
                <div className="content-stories">
                    <h4>Precursores de la Conciencia Ambiental: Del Pasado al Presente</h4>
                    <p>En la era moderna, la preocupación por el medio ambiente comenzó a tomar forma a finales del siglo XIX y principios del XX, impulsada por la Revolución Industrial y sus consecuencias. La contaminación, la deforestación y la explotación de recursos naturales se convirtieron en problemas que comenzaron a llamar la atención de pensadores, científicos y activistas.</p>
                    <h5>John Muir, el Defensor de la Naturaleza Salvaje</h5>
                    <p>John Muir, un naturalista estadounidense del siglo XIX, fue uno de los primeros en defender la protección de la naturaleza salvaje. Su pasión por las montañas de California lo llevó a luchar por la creación de parques nacionales, como Yosemite y Sequoia. Muir creía que la naturaleza tenía un valor intrínseco y que debía ser preservada para las futuras generaciones. Su trabajo sentó las bases para el movimiento conservacionista moderno.</p>
                    <h5>Rachel Carson, la Voz Contra los Tóxicos</h5>
                    <p>Rachel Carson, una bióloga marina estadounidense, publicó en 1962 su libro primavera silenciosa, una obra que desencadenó una revolución ambiental. Carson denunciaba los efectos devastadores de los pesticidas, especialmente el DDT, sobre la vida silvestre y la salud humana. Su libro fue un llamado de atención sobre la contaminación ambiental y la necesidad de un enfoque más responsable en el uso de productos químicos.</p>
                    <h5>Wangari Maathai, la Mujer que Plantó Árboles</h5>
                    <p>Wangari Maathai, una bióloga y activista keniana, ganó el Premio Nobel de la Paz en 2004 por su trabajo en la lucha contra la deforestación y la promoción de la reforestación. Maathai fundó el Movimiento Cinturón Verde, que ha plantado millones de árboles en Kenia y África. Su trabajo ha inspirado a mujeres y comunidades a tomar acción para proteger el medio ambiente y mejorar sus vidas.</p>
                </div>
                <div className="content-stories">
                    <h4>Historias Reales que Inspiran: Un Viaje a Través del Tiempo</h4>
                    <p>Las historias de estos pioneros nos muestran que la lucha por el medio ambiente es un proceso continuo que requiere persistencia, valentía y una visión a largo plazo. A continuación, exploraremos algunas historias reales que nos inspiran a tomar acción y a construir un futuro más sostenible:</p>
                    <h5>El Resurgimiento de la Selva: La Historia de la Reserva Biológica de La Amistad</h5>
                    <p>La Reserva Biológica de La Amistad, ubicada en la frontera entre Costa Rica y Panamá, es un ejemplo de cómo la conservación puede traer beneficios a las comunidades locales. Esta reserva, que alberga una gran diversidad de flora y fauna, enfrentó la amenaza de la deforestación debido a la expansión agrícola y la tala ilegal. Sin embargo, gracias a la colaboración entre organizaciones ambientales, gobiernos y comunidades locales, se logró proteger la reserva y promover prácticas sostenibles de agricultura y turismo.</p>
                    <p>La Reserva Biológica de La Amistad ha demostrado que la protección del medio ambiente no solo es importante para la biodiversidad, sino también para el bienestar de las comunidades locales. El turismo sostenible ha generado ingresos para los habitantes de la zona, mientras que la conservación de la selva ha contribuido a la regulación del clima y la protección de los recursos hídricos.</p>
                    <h5>El Rescate de un Océano: La Historia del Arrecife Mesoamericano</h5>
                    <p>El Arrecife Mesoamericano, el segundo arrecife de coral más grande del entorno, se extiende a lo largo de la costa de México, Belice, Guatemala y Honduras. Este ecosistema marino, que alberga una gran variedad de especies, ha sido afectado por la contaminación, la pesca excesiva y el cambio climático. Sin embargo, gracias a la acción de organizaciones ambientales, gobiernos y comunidades locales, se han implementado medidas para proteger el arrecife.</p>
                    <p>La creación de áreas marinas protegidas, la promoción de prácticas pesqueras sostenibles y la reducción de la contaminación han contribuido a la recuperación del arrecife. La historia del Arrecife Mesoamericano nos muestra que la acción colectiva es fundamental para la protección de los ecosistemas marinos.</p>
                    <h5>La Lucha por la Amazonía: La Historia de Chico Mendes</h5>
                    <p>Chico Mendes, un líder sindical y ambientalista brasileño, luchó por la protección de la Amazonía y los derechos de los pueblos indígenas. Mendes fue asesinado en 1988 por defender la selva y los derechos de los trabajadores del caucho. Su muerte conmocionó al entorno y dio un impulso a la lucha por la protección de la Amazonía.</p>
                    <p>El legado de Chico Mendes continúa inspirando a activistas y organizaciones ambientales en todo el entorno. Su lucha por la justicia social y la protección de la naturaleza sigue siendo un ejemplo de cómo la valentía y la determinación pueden lograr cambios significativos.</p>
                </div>
            </div>
            <button>Conoce Más</button>
        </section>
    )
};

export default Stories;








