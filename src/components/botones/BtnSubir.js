import {useEffect} from 'react'
import {slideLinks} from '../header/navFuctions';

const BtnSubir = () => {
  useEffect(()=>{
    slideLinks();
  },[]);
  return (
    <a className="btn-regresar ocultar linkNav" id="return" href="#inicio">
      <i className="fas fa-chevron-up"></i>
    </a>
  );
};

export default BtnSubir;
