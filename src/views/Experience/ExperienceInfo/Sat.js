import React from "react";

// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ProjectCard from "components/Projects/ProjectCards";
import sat from "assets/img/sat.jpg";

// import IconButton from "@material-ui/core/IconButton";
// import { GitHub } from "@material-ui/icons";

// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";

// import styles from "assets/jss/material-kit-react/views/profilePage.js";

// const useStyles = makeStyles(styles);
export default function Sat(props) {
	// const classes = useStyles();
	// const { ...rest } = props;
	// const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<GridContainer
				container
				spacing={6}
				justifyContent="center"
				alignItems="center"
				justify="center"
			>
				<GridItem xs={11} sm={8} md={4}>
					<ProjectCard
						imgPath={sat}
						isBlog={false}
						title="Firmware for Student Satellite"
						description="Building the firmware from scratch for ’BeliefSat’. BeliefSat is a 2p-PocketQube standard student nano-satellite being developed by the undergraduate students of K.J.Somaiya Institute of Engineering and Information Technology, Sion, Mumbai. The satellite itself is a sub-part of team’s proposal under PS4-Orbital platform program of ISRO, wherein, team aims to demonstrate indegenously developed technologies for PocketQube standard nano-satellites. As a part of this demonstration, BeliefSat will be launched out of SomaiyaPod which is a Pocketqube standard deployer being indegenously developed at the institute. The unique construction technique, combination of COTS components for communication, on-board computer and power sub-systems , together constitute of SomaiyaPQBus, around which the satellite is being made, is also one of the technologies that the team wants to demonstrate and open-source to enable use by future missions."
						link="https://github.com/NewLeapKjsieit/BeliefSat"
					/>
				</GridItem>
			</GridContainer>
		</div>
	);
}
