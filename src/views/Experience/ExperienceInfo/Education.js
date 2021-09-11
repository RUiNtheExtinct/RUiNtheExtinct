import React from "react";

// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

// import styles from "assets/jss/material-kit-react/views/profilePage.js";

// const useStyles = makeStyles(styles);
export default function Education(props) {
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
				<GridItem xs={11} sm={8} md={3}>
					<Card>
						<CardHeader color="primary">Engineering</CardHeader>
						<CardBody align="justify">
							<li>
								I am currently in my last year of B. Tech. in
								Information Technology{" "}
							</li>
							<li>
								My average CGPA for last 6 semesters is 9.16.
							</li>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={3}>
					<Card>
						<CardHeader color="primary">12th Standard</CardHeader>
						<CardBody align="justify">
							<li>Studied in CBSE. </li>
							<li>
								Scored 91.8% in my 12th Standard Board Exams.
							</li>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={3}>
					<Card>
						<CardHeader color="primary">10th Standard</CardHeader>
						<CardBody align="justify">
							<li>Studied in CBSE.</li>
							<li>
								Scored 87.8% in my 10th Standard Board Exams.
							</li>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
