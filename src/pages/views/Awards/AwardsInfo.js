import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import IconButton from "@material-ui/core/IconButton";

import { AiFillGoogleCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";

import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function AwardInfo(props) {
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
						<CardHeader color="custom">
							AIR 273 in Google Hash Code 2021
						</CardHeader>
						<CardBody align="justify">
							Google Hash Code is Google’s prestigious annual team
							contest. World’s best coders compete here. More Info
							<IconButton>
								<AiFillGoogleCircle
									color="#00bcd4"
									onClick={() =>
										window.open(
											"https://codingcompetitions.withgoogle.com/hashcode/about"
										)
									}
								/>{" "}
							</IconButton>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom">
							1st Rank and best UI in Code Adventure 3.0
						</CardHeader>
						<CardBody align="justify">
							Code Adventure is national 1 month long Hackathon.
							This year’s theme was fintech. More Info.
							<IconButton>
								<AiOutlineInfoCircle
									color="#00bcd4"
									onClick={() =>
										window.open(
											"https://www.linkedin.com/in/vcet-hackathon/?originalSubdomain=in"
										)
									}
								/>
							</IconButton>
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
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom">
							3rd Rank in VCET Hackathon 2021
						</CardHeader>
						<CardBody align="justify">
							VCET’s prestigious 24 hour Hackathon. We were free
							to choose any topic for the hackathon.
							<IconButton>
								<AiOutlineInfoCircle
									color="#00bcd4"
									onClick={() =>
										window.open(
											"https://riidl.org/programs/code_adventure"
										)
									}
								/>
							</IconButton>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom">
							Top 99.4 percentile on Project Euler
						</CardHeader>
						<CardBody align="justify">
							Project Euler is a website dedicated to a series of
							computational problems intended to be solved with
							computer programs. Over 1 million people have solved
							at least one problem over there.
							<IconButton>
								<AiOutlineInfoCircle
									color="#00bcd4"
									onClick={() =>
										window.open("https://projecteuler.net/")
									}
								/>
							</IconButton>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
			<GridContainer
				container
				spacing={6}
				justifyContent="primary"
				alignItems="center"
				justify="center"
			>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom">
							Global rank 273 May Cook-Off 2020 Division 2
						</CardHeader>
						<CardBody align="justify">
							CodeChef is CP platform. It has monthly contests
							which see around 10-12K participants.
							<IconButton>
								<SiCodechef
									color="#00bcd4"
									onClick={() =>
										window.open(
											"https://www.codechef.com/users/vedant_k07"
										)
									}
								/>
							</IconButton>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom">
							Global rank 274 June Challenge 2020 Division 2
						</CardHeader>
						<CardBody align="justify">
							CodeChef is CP platform. It has monthly contests
							which see around 10-12K participants.
							<IconButton>
								<SiCodechef
									color="#00bcd4"
									onClick={() =>
										window.open(
											"https://www.codechef.com/users/vedant_k07"
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
