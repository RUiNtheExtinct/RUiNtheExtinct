import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
	AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span>{" "}
							MYSELF
						</h1>
						<p className="home-about-body">
							I fell in love with programming and I have at least
							learnt something, I think… 🤷‍♂️
							<br />
							<br />I am fluent in classics like
							<i>
								<b className="purple">
									{" "}
									C++, Javascript and Python.{" "}
								</b>
							</i>
							<br />
							<br />
							My field of Interest's are building new &nbsp;
							<i>
								<b className="purple">
									Web Technologies and Products{" "}
								</b>{" "}
								and also in areas related to{" "}
								<b className="purple">
									Deep Learning and Natural Launguage
									Processing.
								</b>
							</i>
							<br />
							<br />
							Whenever possible, I also apply my passion for
							developing products with{" "}
							<b className="purple">Node.js</b> and
							<i>
								<b className="purple">
									{" "}
									Modern Javascript Library and Frameworks
								</b>
							</i>
							&nbsp; like
							<i>
								<b className="purple"> React.js ans Next.js</b>
							</i>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={myImg}
								className="img-fluid"
								alt="avatar"
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to{" "}
							<span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="home-social-icons mr-2">
								<a
									href="https://www.linkedin.com/in/arghyadeep-k-14b06b15a/"
									// style={{ color: "blue" }}
									className="icon-colour home-social-icons"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="home-social-icons mr-2">
								<a
									href="https://github.com/RUiNtheExtinct"
									// style={{ color: "black" }}
									className="icon-colour home-social-icons"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiFillGithub />
								</a>
							</li>
							{/* <li className="home-social-icons mr-2">
								<a
									href="https://twitter.com/fallacy69"
									// style={{ color: "light-blue" }}
									className="icon-colour home-social-icons"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiOutlineTwitter />
								</a>
							</li>
							<li className="home-social-icons mr-2">
								<a
									href="https://www.instagram.com/ruin_the_extinct/"
									// style={{ color: "crimson" }}
									className="icon-colour home-social-icons"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiFillInstagram />
								</a>
							</li> */}
							<li className="home-social-icons mr-2">
								<a
									href="mailto:deepkarma2001@gmail.com"
									// style={{ color: "red" }}
									className="icon-colour home-social-icons"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiFillMail />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
