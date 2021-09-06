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
// import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import NavPills from "components/NavPills/NavPills.js";
// import Parallax from "components/Parallax/Parallax.js";
// import IconButton from "@material-ui/core/IconButton";
import { Apps, LinkedIn, Instagram, GitHub } from "@material-ui/icons";
// import profile from "assets/img/faces/vedant.jpeg";
import Box from "@material-ui/core/Box";

import D1 from "../../../assets/img/drl.jpg";

import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";

import styles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function DRL(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<GridContainer container spacing={6} justify="center">
				<GridItem xs={12} sm={8} md={3}>
					<Box borderColor="grey.300" borderRadius="5%" border={1}>
						<img alt="..." src={D1} className={navImageClasses} />
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
							We plan to analyse voice patterns for various kinds
							of emotions, which would include rudeness, satire,
							confidence, happiness, sadness and many more. We
							plan to test Deep Reinforcement learning in this
							field. We would create the dataset(as no dataset is
							currently available). We plan to use this to train
							individuals in their speaking skills.
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom"> My work</CardHeader>
						<CardBody align="justify">
							This is my Final year project along with{" "}
							<a href="https://www.linkedin.com/in/mustansir-kapasi-43a521168/">
								Mustansir
							</a>{" "}
							and{" "}
							<a href="https://www.linkedin.com/in/arghyadeep-k-14b06b15a/">
								Arghyadeep
							</a>
							. We are currently in research phase. I would be
							working on the Model and dataset creation.
							{/* <IconButton>
                <GitHub
                  color="primary"
                  onClick={() =>
                    window.open("https://github.com/NewLeapKjsieit/BeliefSat")
                  }
                />
              </IconButton> */}
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
