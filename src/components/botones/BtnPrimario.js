import React from 'react'

const BtnPrimario = ({texto}) => {
    return ( 
        <input className="btn btn-primario" type="submit" value={texto} />
     );
}
 
export default BtnPrimario;