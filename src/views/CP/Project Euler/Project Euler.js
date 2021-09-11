import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";

// import IconButton from "@material-ui/core/IconButton";
// import { GitHub } from "@material-ui/icons";

// import Box from "@material-ui/core/Box";

import ApexChart from "views/CP/Project Euler/ApexChart";
import Button from "components/CustomButtons/Button";

// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function ProjectEuler(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			{/* <div style={{ padding: 20, marginBottom: 20 }}>
				<a
					href=" https://github.com/RUiNtheExtinct/project-euler"
					target="_blank"
					rel="noreferrer"
				>
					<Button color="primary" round>
						My Solutions(Till 100)
					</Button>
				</a>
			</div> */}
			<ApexChart />
		</div>
	);
}
