import React from 'react'
import Habilidad from './Habilidad';
import Me from './Me'
import TituloSection from '../TituloSection';
import {habilidades, me} from '../../db';

const Habilidades = () => {

    return (
        <div id="habilidades" className="hab-box" >
            <TituloSection titulo="Habilidades" />
            <div className="habilidades contenedor">
                <Me myinfo={me} />

                <section className="skills">
                    {
                        habilidades.map( hab =>(
                            <Habilidad key={hab.nombre} habilidad={hab} />
                        ))
                    }
                </section>
            </div>
        </div>
     );
}
 
export default Habilidades;