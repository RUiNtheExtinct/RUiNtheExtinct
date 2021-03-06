import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "assets/home-main.svg";
import Particle from "components/Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1
								style={{ paddingBottom: 15 }}
								className="heading"
							>
								Hi There!{" "}
								<span
									className="wave"
									role="img"
									aria-labelledby="wave"
								>
									👋🏻
									{/* <img
										src="https://emoji.gg/assets/emoji/CharmanderHi.png"
										width="50px"
										height="50px"
										alt="CharmanderHi"
									></img> */}
								</span>
							</h1>

							<h1 className="heading-name">
								I'm
								<strong className="main-name">
									{" "}
									Arghyadeep Karmakar
								</strong>
								.
							</h1>

							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={homeLogo}
								alt="home pic"
								className="img-fluid"
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
