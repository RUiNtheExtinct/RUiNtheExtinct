import React, { useEffect } from "react";
import { slideLinks, navFuntion } from "./navFuctions";
const Navegacion = () => {
	window.addEventListener("scroll", navFuntion);

	useEffect(() => {
		slideLinks();
	}, []);
	return (
		<nav className="navegacion anim">
			<ul>
				<li>
					<a className="linkNav" href="#servicios">
						<i className="fas fa-check-circle"></i> About Me
					</a>
				</li>
				<li>
					<a className="linkNav" href="#proyectos">
						<i className="fas fa-folder"></i> Projects
					</a>
				</li>
				<li>
					<a className="linkNav" href="#habilidades">
						<i className="fas fa-tools"></i> Skills
					</a>
				</li>
				<li>
					<a className="linkNav" href="#habilidades">
						<i className="fas fa-tools"></i> Experience
					</a>
				</li>
				<li>
					<a className="linkNav" href="#contacto">
						<i className="fas fa-id-card-alt"></i> Contact Me
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navegacion;
