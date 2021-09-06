import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";

import styles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function CodeCell(props) {
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
				<GridItem xs={11} sm={8} md={3}>
					<Card>
						<CardHeader color="custom">Head of CodeCell</CardHeader>
						<CardBody align="justify">
							Youngest appointed head to the CodeCell in the
							history of my college. I was also CodeChef Campus
							lead(President) for my club.
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={3}>
					<Card>
						<CardHeader color="custom">
							Improving Coding Cultre of my college
						</CardHeader>
						<CardBody align="justify">
							When I stared, there were only 2 members left in the
							club, right now there are over 70+ active members. I
							have helped in creating, promoting and developing CP
							culture in my college.
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
			<GridContainer
				container
				spacing={6}
				justifyContent="center"
				alignItems="center"
				justify="center"
			>
				<GridItem xs={11} sm={8} md={3}>
					<Card>
						<CardHeader color="custom">
							Organizing Global events
						</CardHeader>
						<CardBody align="justify">
							Organized and hosted 2 Global long contest with
							5000+ participant combined, one of the largest
							Woman’s Coding Contest and offline ICPC styled
							contest.
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={3}>
					<Card>
						<CardHeader color="custom">
							Main Speaker for events
						</CardHeader>
						<CardBody align="justify">
							Keynote Speaker for Algo Talks. Principal speaker
							and organizer for various small size events for the
							club too.
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
