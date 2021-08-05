import React from 'react'

const Paralax = ({titulo, desc, enlace}) => {
    return ( 
        <article className="galeria-paralax">
            <div className="contenido-paralax contenedor-child">
                <h2>{titulo}</h2>
                <p>{desc}</p>
                <a className="btn btn-primario" target="_blank" rel="noreferrer" href={enlace} >Galeria <i className="fas fa-images"></i></a>
            </div>
        </article>
     );
}
 
export default Paralax;