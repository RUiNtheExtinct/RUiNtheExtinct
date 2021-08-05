import React from 'react'
import Formulario from './Formulario'
import Socials from '../Socials'
import TituloSection from '../TituloSection'
import {contacto} from '../../db';

const Contacto = () => {

    const {
        direccion,
        telefono,
        email,
        facebook,
        linkedin,
        whatsapp,
        github,
        galeria
    } = contacto;

    return ( 
        <div id="contacto" data-aos="zoom-in" data-aos-delay="200">
        <section className="contacto">
            <TituloSection titulo="Contacto" />
            <div className="contacto-box contenedor-child">
                <Formulario/>

                <div className="contacto-data">
                <div className="contacto-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{direccion}</p>
                </div>
                <div className="contacto-item">
                    <i className="fas fa-mobile-alt"></i>
                    <p>{telefono}</p>
                </div>
                <div className="contacto-item">
                    <i className="fas fa-envelope"></i>
                    <p>{email}</p>
                </div>
                <Socials
                    facebook={facebook}
                    linkedin={linkedin}
                    whatsapp={whatsapp}
                    github={github}
                    galeria={galeria}
                />
            </div>
            </div>
        </section>
        </div>
     );
}
 
export default Contacto;