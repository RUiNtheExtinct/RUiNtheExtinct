import {useEffect} from 'react'
import {slideLinks} from '../header/navFuctions';

const BtnBajar = ({idTarget}) => {
  useEffect(()=>{
    slideLinks();
  },[]);
  return (
    <a className="linkNav" href={"#" + idTarget}>
      <div className="d-flex justify-center">
        <i className="fas fa-chevron-down btn-bajar"></i>
      </div>
    </a>
  );
};

export default BtnBajar;
