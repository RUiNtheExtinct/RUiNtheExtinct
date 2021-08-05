import React, { useEffect } from "react";
import BtnSubir from "./components/botones/BtnSubir";
import Contacto from "./components/contacto/Contacto";
import Habilidades from "./components/habilidades/Habilidades";
import Header from "./components/header/Header";
import Paralax from "./components/Paralax";
import Proyectos from "./components/proyectos/Proyectos";
import Servicios from "./components/servicios/Servicios";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Header />
			<Servicios />
			<Proyectos />
			<Paralax
				titulo="Puedes visitar mi galeria para encontrar muchisimos proyectos mas..."
				desc="Es una galeria que cree con Bootstrap, React JS & Firebase, para mostrar todos mis proyectos con diferentes tecnologias."
				enlace="https://freddy-gallery.netlify.app"
			/>
			<Habilidades />
			<Contacto />
			<Footer />
			<BtnSubir />
		</>
	);
}

export default App;
