import React from "react";
import '../styles/Contact.css'
import { TbUserEdit } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { BiSolidNotepad } from "react-icons/bi";

function Contact() {
    return (
        <section className="contact">
            <h2>Conéctate con Nosotros</h2>
            <form>
                <div className="input-box">
                    <input type="text" name="" id="" placeholder="Nombre y Apellido" required />
                    <i><TbUserEdit  className="icons-form"/></i>
                </div>
                <div className="input-box">
                    <input type="email" name="" id="" required placeholder="Correo electrónico" />
                    <i><MdOutlineMail  className="icons-form"/></i>
                </div>
                <div className="input-box">
                    <input type="text" name="" id="" placeholder="Asunto" />
                    <i><BiSolidNotepad className="icons-form"/> </i>
                </div>
                <div className="input-box">
                    <textarea name="" id="" placeholder="Escribe tu mensaje..."></textarea>
                </div>
                <div className="content-btn">
                    <button type="submit" className="btn-form">Enviar</button>
                </div>
            </form>
        </section>
    )
};

export default Contact;


//instale npm install react-icons --save para utilizar los iconos(luego donde valla a utilizar los iconos por ejemplo en esta carpeta import { TbUserEdit } from "react-icons/tb"; y luego lo llamo como un componete <TbUserEdit /> )





