import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "assets/avatar.svg";
import myImg1 from "assets/img/faces/a1.png";
import Tilt from "react-parallax-tilt";
import {
	AiFillGithub,
	// AiOutlineTwitter,
	// AiFillInstagram,
	AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
	const [img, setImg] = useState(myImg1); // integer state
	function useForceUpdate() {
		return () => setImg((img) => (img === myImg ? myImg1 : myImg)); // update the state to force render
	}
	const forceUpdate = useForceUpdate();

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
							I love math and problem solving. Competitive
							Programming seemed like the obvious next step. I am
							quite active on most CP based sites like{" "}
							<b className="purple"> HackerRank</b>,{" "}
							<b className="purple"> CodeForces</b>,{" "}
							<b className="purple">Project Euler</b>, etc. Apart
							from that I am an Executive member of my college's
							CodeCell, <b className="purple">Infinite Loop</b>
							{", "}
							and am a part of the Programming Team of the{" "}
							<b className="purple">Student Satellite Program </b>
							of my college.
							<br />
							<br />I am fluent in classics like
							<i>
								<b className="purple"> C, C++, and Python</b>.
							</i>
							<br />
							<br />
							My field of Interest's are learning new&nbsp;
							<i>
								<b className="purple">ML and AI algorithms </b>{" "}
								and also in areas related to{" "}
								<b className="purple">
									Deep Learning and Natural Launguage
									Processing
								</b>
								.
							</i>
							<br />
							<br />
							Whenever possible, I also like working on Web
							Development with{" "}
							<b className="purple">Django and Node.js</b> and
							<b className="purple">
								{" "}
								Modern Libraries and Frameworks
							</b>
							&nbsp; like
							<i>
								<b className="purple"> React.js and Three.js</b>
								.&nbsp;
							</i>
							<br />
							<br />
							I'm also quite comfortable with{" "}
							<b className="purple"> Android Frameworks</b>.
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={img}
								className="img-fluid"
								alt="avatar"
								onClick={forceUpdate}
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
