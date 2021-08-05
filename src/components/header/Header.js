import React from "react";
import Hero from "./Hero";
import Navegacion from "./Navegacion";
const Header = () => {
	return (
		<header id="inicio" className="contenedor" >
			<Navegacion />
			<Hero />
		</header>
	);
};

export default Header;
