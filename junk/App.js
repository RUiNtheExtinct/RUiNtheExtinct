import React, { useState, useEffect } from "react";
import Preloader from "../pages/components/Pre";
import Navbar from "../pages/components/Navbar";
import Home from "../pages/components/Home/Home";
import About from "../pages/components/About/About";
import Projects from "../pages/components/Projects/Projects";
import Footer from "../pages/components/Footer";
import Resume from "../pages/components/Resume/Resume";
import { Apps, LinkedIn, Instagram, GitHub } from "@material-ui/icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "../pages/components/ScrollToTop";

export default function App() {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<Preloader load={load} />
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<Navbar />
				<ScrollToTop />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/project" component={Projects} />
					<Route path="/about" component={About} />
					<Route path="/resume" component={Resume} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
