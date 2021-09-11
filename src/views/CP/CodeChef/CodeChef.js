import React from "react";

// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Button from "components/CustomButtons/Button";
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// import IconButton from "@material-ui/core/IconButton";
// import { GitHub } from "@material-ui/icons";

// import Box from "@material-ui/core/Box";

import ApexChart from "views/CP/CodeChef/ApexChart";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";

// import styles from "assets/jss/material-kit-react/views/profilePage.js";

// const useStyles = makeStyles(styles);
export default function CodeChef(props) {
	// const classes = useStyles();
	// const { ...rest } = props;
	// const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<div style={{ padding: 20, marginBottom: 20 }}>
				<a
					href="https://www.codechef.com/users/fallacy69"
					target="_blank"
					rel="noreferrer"
				>
					<Button color="primary" round>
						CodeChef profile
					</Button>
				</a>
			</div>
			<ApexChart />
		</div>
	);
}
