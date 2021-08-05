const Servicio = ({servicio}) => {
  const {titulo, imagen} = servicio;

  return (
    <div data-aos="zoom-in" data-aos-delay="300">
    <div className="servicio-item animacion_servicio">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      {/* <p>{desc}</p> */}
    </div>
    </div>
  );
};

export default Servicio;
