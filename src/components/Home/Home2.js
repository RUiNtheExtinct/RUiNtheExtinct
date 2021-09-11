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

const colors = ["purple", "red", "green", "blue", "yellow", "cyan", "white"];

function Home2() {
	const forceUpdate = useForceUpdate();

	const [col1, setCol1] = useState(0); // integer state

	function useForceUpdate1() {
		return () => {
			setCol1((col1) => (col1 + 1) % colors.length);
		}; // update the state to force render
	}
	const [img, setImg] = useState(myImg1); // integer state
	function useForceUpdate() {
		return () => {
			setImg((img) => (img === myImg ? myImg1 : myImg));
			// setCol1((col1) => (col1 + 1) % colors.length);
		}; // update the state to force render
	}
	const forceUpdate1 = useForceUpdate1();

	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME{" "}
							<span
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								{" "}
								INTRODUCE{" "}
							</span>{" "}
							MYSELF
						</h1>
						<p className="home-about-body">
							I love math and problem solving. Competitive
							Programming seemed like the obvious next step. I am
							quite active on most CP based sites like{" "}
							<b
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								{" "}
								HackerRank
							</b>
							,{" "}
							<b
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								{" "}
								CodeForces
							</b>
							,{" "}
							<b
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								Project Euler
							</b>
							, etc. Apart from that I am an Executive member of
							my college's CodeCell,{" "}
							<b
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								Infinite Loop
							</b>
							{", "}
							and am a part of the Programming Team of the{" "}
							<b
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								Student Satellite Program{" "}
							</b>
							of my college.
							<br />
							<br />I am fluent in classics like
							<i>
								<b
									className={colors[col1]}
									onClick={forceUpdate1}
									style={{ userSelect: "none" }}
								>
									{" "}
									C, C++, and Python
								</b>
								.
							</i>
							<br />
							<br />
							My field of Interest's are learning new&nbsp;
							<i>
								<b
									className={colors[col1]}
									onClick={forceUpdate1}
									style={{ userSelect: "none" }}
								>
									ML and AI algorithms{" "}
								</b>{" "}
								and also in areas related to{" "}
								<b
									className={colors[col1]}
									onClick={forceUpdate1}
									style={{ userSelect: "none" }}
								>
									Deep Learning and Natural Launguage
									Processing
								</b>
								.
							</i>
							<br />
							<br />
							Whenever possible, I also like working on Web
							Development with{" "}
							<b
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								Django and Node.js
							</b>{" "}
							and
							<b
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								{" "}
								Modern Libraries and Frameworks
							</b>
							&nbsp; like
							<i>
								<b
									className={colors[col1]}
									onClick={forceUpdate1}
									style={{ userSelect: "none" }}
								>
									{" "}
									React.js and Three.js
								</b>
								.&nbsp;
							</i>
							<br />
							<br />
							I'm also quite comfortable with{" "}
							<b
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								{" "}
								Android Frameworks
							</b>
							.
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={img}
								className="img-fluid"
								alt="avatar"
								onClick={forceUpdate}
								style={{ userSelect: "none" }}
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to{" "}
							<span
								className={colors[col1]}
								onClick={forceUpdate1}
								style={{ userSelect: "none" }}
							>
								connect{" "}
							</span>
							with me
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
