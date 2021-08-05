import React from 'react'

const Me = ({myinfo}) => {

    const {nombre, perfil, desc, cv} = myinfo;

    return ( 
        <aside className="me animacion_arriba">
            <img src="https://freddygames69.netlify.app/assets/img/about.jpg" alt="" />
            <h3>{nombre}</h3>
            <h4>Desarrollador <span className="text-red">{perfil}</span></h4>
            <p>{desc}</p>
            <a target="_blank" rel="noreferrer" download href={cv} className="btn btn-primario">Descargar CV</a>
        </aside>
     );
}
 
export default Me;