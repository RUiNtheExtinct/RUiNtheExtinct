import {me} from '../db';
const Footer = () => {
  return (
    <footer className="d-flex justify-center">
      <p>
        Derechos Reservados <b>{me.nombre}&copy;</b>
      </p>
    </footer>
  );
};

export default Footer;
