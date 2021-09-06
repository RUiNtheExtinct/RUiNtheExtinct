import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button";

// import IconButton from "@material-ui/core/IconButton";
// import { GitHub } from "@material-ui/icons";

// import Box from "@material-ui/core/Box";

import c1 from "../../../assets/img/Hackerrank/c1.png";
import c2 from "../../../assets/img/Hackerrank/c2.png";
import c3 from "../../../assets/img/Hackerrank/c3.png";

import b1 from "../../../assets/img/Hackerrank/b1.jpeg";
import b2 from "../../../assets/img/Hackerrank/b2.jpeg";
import b3 from "../../../assets/img/Hackerrank/b3.jpeg";
import b4 from "../../../assets/img/Hackerrank/b4.jpeg";
import b5 from "../../../assets/img/Hackerrank/b5.jpeg";
import b6 from "../../../assets/img/Hackerrank/b6.png";

import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";

import styles from "../../../assets/jss/material-kit-react/views/profilePage.js";
// import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);
export default function Hackerrank(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<div style={{ padding: 20, marginBottom: 20 }}>
				<a
					href="https://www.hackerrank.com/vedant_kokat07"
					target="_blank"
				>
					<Button color="info" round>
						Hackerrank profile
					</Button>
				</a>
			</div>
			<div style={{ outline: 2, outlineColor: "white" }}> </div>

			<GridContainer
				container
				spacing={6}
				justifyContent="center"
				alignItems="center"
				justify="center"
			>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom"> Verified Skills</CardHeader>
						<CardBody align="justify">
							<GridContainer
								container
								spacing={6}
								justify="center"
							>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={c1}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={c2}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={c3}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
							</GridContainer>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom">Badges</CardHeader>
						<CardBody align="justify">
							<GridContainer
								container
								spacing={6}
								justify="center"
							>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={b1}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={b2}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={b3}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={b4}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={b5}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
								<GridItem xs={5} sm={3} md={4}>
									<a
										href="https://www.hackerrank.com/certificates/2fcbbad3fc32"
										target="_blank"
									>
										<img
											alt="..."
											src={b6}
											className={navImageClasses}
										/>
									</a>
								</GridItem>
							</GridContainer>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
