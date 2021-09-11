import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "components/Particle";
import laptopImg from "assets/about.png";

// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
import { IoMdInfinite } from "react-icons/io";
import { GiSpaceSuit, GiBookshelf } from "react-icons/gi";

// IoMdInfinite
// core components
// import Header from "components/Header/Header.js";

// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
// import Parallax from "components/Parallax/Parallax.js";

// import profile from "assets/img/faces/vedant1.jpg";

import CodeCell from "./ExperienceInfo/CodeCell";
import Sat from "./ExperienceInfo/Sat";
import Education from "./ExperienceInfo/Education";
export default function ExperiencePage(props) {
	return (
		<Container fluid className="about-section">
			<Particle />
			<Row style={{ justifyContent: "center", padding: "10px" }}>
				<h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
					My Educational / Professional
					<strong className="purple"> Experience</strong>
				</h1>
			</Row>
			<NavPills
				alignCenter={true}
				color="primary"
				tabs={[
					{
						tabButton: "Code Cell",
						tabIcon: IoMdInfinite,
						tabContent: <CodeCell />,
					},
					{
						tabButton: "Space Program",
						tabIcon: GiSpaceSuit,
						tabContent: <Sat />,
					},
					{
						tabButton: "Education",
						tabIcon: GiBookshelf,
						tabContent: <Education />,
					},
				]}
			/>
		</Container>
	);
}
