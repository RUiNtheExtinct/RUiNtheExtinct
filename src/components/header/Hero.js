import React from "react";
import Socials from "../Socials";
import { hero, contacto } from "../../db";
import BtnBajar from "../botones/btnBajar";

const Hero = () => {
	const { titulo, perfil, desc } = hero;
	const { facebook, linkedin, whatsapp, github, galeria } = contacto;

	return (
		<div data-aos="zoom-in" data-aos-delay="200">
			<div className="hero contenedor-child">
				<h1>
					{titulo} <span className="text-red">{perfil}</span>
				</h1>
				<p>{desc}</p>
				<Socials
					facebook={facebook}
					linkedin={linkedin}
					whatsapp={whatsapp}
					github={github}
					galeria={galeria}
				/>
				<BtnBajar idTarget="servicios" />
			</div>
		</div>
	);
};

export default Hero;
