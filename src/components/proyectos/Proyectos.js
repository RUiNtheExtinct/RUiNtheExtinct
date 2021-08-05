import React from 'react'
import TituloSection from '../TituloSection';
import Proyecto from './Proyecto';
import {proyectos} from '../../db';

const Proyectos = () => {
    return ( 
        <div id="proyectos" className="proyectos-box contenedor">
            <section className="proyectos contenedor-child">
                <TituloSection titulo="Proyectos" />
                <div className="proyecto">
                    {
                        proyectos.map(proy =>(
                            <Proyecto key={proy.nombre} proyecto={proy} />
                        ))
                    }
                </div>
            </section>
        </div>
     );
}
 
export default Proyectos;