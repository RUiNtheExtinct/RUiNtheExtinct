import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import IconButton from "@material-ui/core/IconButton";
import { Apps, LinkedIn, Instagram, GitHub } from "@material-ui/icons";

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
			<GridContainer
				container
				spacing={6}
				justifyContent="center"
				alignItems="center"
				justify="center"
			>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom"> Technical work</CardHeader>
						<CardBody align="justify">
							Building the firmware from scratch for ’BeliefSat.
							BelifSat is pocket-cube satellite which is expected
							to be launched.
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom"> Management work</CardHeader>
						<CardBody align="justify">
							I supervise and manage the team which works on the
							firmware.
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
