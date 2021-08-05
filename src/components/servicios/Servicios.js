import React from 'react'
import TituloSection from '../TituloSection';
import {servicios} from '../../db';
import Servicio from './Servicio';

const Servicios = () => {
    return ( 
        <main id="servicios" className="servicios-menu contenedor-child">
        <TituloSection titulo="Servicios" />
        <div className="servicio">
            {
                servicios.map(serv => (
                    <Servicio servicio={serv} key={serv.titulo} />
                ))
            }
        </div>
    </main>
     );
}
 
export default Servicios;