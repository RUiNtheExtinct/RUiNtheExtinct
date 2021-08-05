import React from 'react'
import CupOne from './CupOne';
import CupTwo from './CupTwo';

const Habilidad = ({habilidad}) => {

    const {nombre, imagen, tazas} = habilidad;
    let cafe = [];
    let cafe2 = [];

    const cups = () =>{
        for(let i = 0; i < tazas; i++){
            cafe.push(i)
        }
        for(let i = 0; i < 5 - tazas; i++){
            cafe2.push(i)
        }
    }
    cups();

    return (
        <div className="skill-item animacion_skills">
            <div className="skill-info">
                <img src={imagen} alt={nombre} />
                <h3>{nombre}</h3>
            </div>
            <div className="skill-xp">
                {
                    cafe === [] ? null :
                    cafe.map( cup =>(
                        <CupOne key={cup} />
                    ))
                }
                {
                    cafe2 === [] ? null :
                    cafe2.map(cup2 =>(
                        <CupTwo key={cup2} />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Habilidad;