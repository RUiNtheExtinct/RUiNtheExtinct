import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// // core components
// import Header from "../../../components/Header/Header.js";
// import Footer from "../../../components/Footer/Footer.js";
// import Button from "../../../components/CustomButtons/Button.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import HeaderLinks from "../../../components/Header/HeaderLinks.js";
// import NavPills from "../../../components/NavPills/NavPills.js";
// import Parallax from "../../../components/Parallax/Parallax.js";
import IconButton from "@material-ui/core/IconButton";
import { Apps, LinkedIn, Instagram, GitHub } from "@material-ui/icons";
// import profile from "../../../assets/img/faces/vedant.jpeg";
import Box from "@material-ui/core/Box";

import S1 from "../../../assets/img/sat.jpg";

import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";

import styles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function Sat(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<GridContainer container spacing={6} justify="center">
				<GridItem xs={12} sm={8} md={3}>
					<Box borderColor="grey.300" borderRadius="5%" border={1}>
						<img alt="..." src={S1} className={navImageClasses} />
					</Box>
				</GridItem>
			</GridContainer>

			<GridContainer
				container
				spacing={6}
				justifyContent="center"
				alignItems="center"
				justify="center"
			>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom">
							{" "}
							Project description
						</CardHeader>
						<CardBody align="justify">
							BeliefSat is a 2p-PocketQube standard student
							nano-satellite being developed by the undergraduate
							students of K.J.Somaiya Institute of Engineering and
							Information Technology, Sion, Mumbai. The satellite
							itself is a sub-part of team’s proposal under
							PS4-Orbital platform program of ISRO, wherein, team
							aims to demonstrate indegenously developed
							technologies for PocketQube standard
							nano-satellites. As a part of this demonstration,
							BeliefSat will be launched out of SomaiyaPod which
							is a Pocketqube standard deployer being indegenously
							developed at the institute. The unique construction
							technique, combination of COTS components for
							communication, on-board computer and power
							sub-systems , together constitute of SomaiyaPQBus,
							around which the satellite is being made, is also
							one of the technologies that the team wants to
							demonstrate and open-source to enable use by future
							missions.
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom"> My work</CardHeader>
						<CardBody align="justify">
							I have worked on building the firmware from scratch
							for the satellite. We have used Arduino Uno. Many of
							the libraries of sensors had to be optimized. I
							along with my team are wholly responsible for the
							firmware of the satellite. As we have limited space,
							we plan to avoid using libraries and abstraction
							wherever possible The satellite’s launch and work
							has been delayed due to the pandemic. Check out the
							github repo for full information.
							<IconButton>
								<GitHub
									color="primary"
									onClick={() =>
										window.open(
											"https://github.com/NewLeapKjsieit/BeliefSat"
										)
									}
								/>
							</IconButton>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
