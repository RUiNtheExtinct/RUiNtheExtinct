import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "components/Particle";
import Github from "./Github";
import NavPills from "components/NavPills/NavPills";
import { AiOutlineTool, AiOutlineControl } from "react-icons/ai";
import { GoCode } from "react-icons/go";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "assets/about.png";
import Toolstack from "./Toolstack";
import CP from "views/CP/CP";

function About() {
	return (
		<Container fluid className="about-section">
			<Particle />
			<Container>
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col
						md={7}
						style={{
							justifyContent: "center",
							paddingTop: "30px",
							paddingBottom: "50px",
						}}
					>
						<h1
							style={{ fontSize: "2.1em", paddingBottom: "20px" }}
						>
							Know Who <strong className="purple">I am</strong>
						</h1>
						<Aboutcard />
					</Col>
					<Col
						md={5}
						style={{ paddingTop: "120px", paddingBottom: "50px" }}
						className="about-img"
					>
						<img
							src={laptopImg}
							alt="about"
							className="img-fluid"
						/>
					</Col>
				</Row>

				<NavPills
					alignCenter={true}
					color="primary"
					tabs={[
						{
							tabButton: "Competitive Programming",
							tabIcon: GoCode,
							tabContent: <CP />,
						},
						{
							tabButton: "Professional Skillset",
							tabIcon: AiOutlineControl,
							tabContent: <Techstack />,
						},
						{
							tabButton: "Tools / Software I Use",
							tabIcon: AiOutlineTool,
							tabContent: <Toolstack />,
						},
					]}
				/>

				<Github />
			</Container>
		</Container>
	);
}

export default About;
