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
import IconButton from "@material-ui/core/IconButton";
import { Apps, LinkedIn, Instagram, GitHub } from "@material-ui/icons";
// import profile from "assets/img/faces/vedant.jpeg";
import Box from "@material-ui/core/Box";

import CMS1 from "../../../assets/img/CMS/admin.png";
import CMS2 from "../../../assets/img/CMS/attendance.png";
import CMS3 from "../../../assets/img/CMS/vendors.png";

import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";

import styles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function CMS(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<GridContainer container spacing={6} justify="center">
				<GridItem xs={12} sm={6} md={6}>
					<Box borderColor="grey.300" borderRadius="5%" border={1}>
						<img alt="..." src={CMS1} className={navImageClasses} />
					</Box>
				</GridItem>

				<GridItem xs={12} sm={6} md={6}>
					<Box borderColor="grey.300" borderRadius="5%" border={1}>
						<img alt="..." src={CMS3} className={navImageClasses} />
					</Box>
				</GridItem>
				<GridItem xs={8} sm={3} md={3}>
					<Box borderColor="grey.300" borderRadius="5%" border={1}>
						<img alt="..." src={CMS2} className={navImageClasses} />
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
							This Application helps automate attendance, and
							billing required by CMS, for the gunmen they hire.
							CMS hires gunmen when transporting money to an ATM.
							This app takes biometric id of the gunmen (instead
							signing in a register) when starting a trip. This
							gets registered in the system. At the end of the
							month, attendance and bill is sent to vendors of the
							gunmen.
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={11} sm={8} md={4}>
					<Card>
						<CardHeader color="custom"> My work</CardHeader>
						<CardBody align="justify">
							I worked with react on the frontend of the
							application. I worked on almost all the pages. This
							was problem set 2 for Code Adventure 3.0 (a one
							month long hackathon). We were the received BEST UI
							and First Prize for this hackathon.
							<IconButton>
								<GitHub
									color="primary"
									onClick={() =>
										window.open(
											"https://github.com/mustankap/CMS"
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
