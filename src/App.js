// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import CP from "./views/CP/CP";
import Experience from "./views/Experience/ExperiencePage";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
// import { createBrowserHistory } from "history";

function Credits() {
	return <div>HOLA</div>;
}

// var hist = createBrowserHistory();
export default function App() {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<React.StrictMode>
			<Router>
				<Preloader load={load} />
				<div className="App" id={load ? "no-scroll" : "scroll"}>
					<Navbar />
					<ScrollToTop />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/project" component={Projects} />
						<Route path="/resume" component={Resume} />
						<Route path="/about" component={About} />
						<Route path="/exp" component={Experience} />
						<Route path="/cred" component={Credits} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</React.StrictMode>
	);
}
