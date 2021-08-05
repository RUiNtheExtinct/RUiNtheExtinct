const Proyecto = ({proyecto}) => {

    const {nombre, imagen, desc, codigo, visitar} = proyecto;
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >
    <article key={nombre} className="proyecto-item">
      <img src={imagen} alt="" />
      <div className="proyecto-info">
        <h3> {nombre} </h3>
        <p> {desc} </p>
        <div className="botones-proyectos">
          <a className="btn btn-proyecto" href={visitar} target="_blank" rel="noreferrer" >
            Visitar <i className="fas fa-globe-americas"></i>
          </a>
          <a className="btn btn-proyecto" href={codigo} target="_blank" rel="noreferrer" >
            Codigo <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </article>
    </div>
  );
};

export default Proyecto;
