import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { GiFarmTractor } from "react-icons/gi";
import { SiProbot } from "react-icons/si";
import { FaSatellite } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

// core components
import Header from "../../components/Header/Header.js";

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/img/faces/vedant1.jpg";

// import Agripool from "../../../../junk/Agripool";
import CMS from "./ProjectInfo/CMS";
// import PredictQ from "./ProjectInfo/PredictQ";
import Sat from "./ProjectInfo/Sat";
import DRL from "./ProjectInfo/DRL";
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProjectPage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div style={{ backgroundColor: "black" }}>
			<Header
				color="transparent"
				brand=""
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 200,
					color: "white",
				}}
				{...rest}
			/>
			<Parallax
				small
				filter
				image={require("../../assets/img/backround/i13.png").default}
			/>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div>
						<GridContainer justify="center">
							<GridItem xs={12} sm={11} md={12}>
								<div className={classes.profile}>
									<div>
										<img
											src={profile}
											width="102"
											height="42"
											className={imageClasses}
										/>
									</div>
									<div className={classes.name}>
										<h3 className={classes.title}>
											Vedant Kokate
										</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classes.description}>
							<p>
								I have worked on various projects, here is the
								details of my previous projects as well as my
								current projects.
							</p>
						</div>
						<GridContainer justify="center" algin="center">
							<GridItem
								xs={12}
								sm={12}
								md={10}
								className={classes.navWrapper}
							>
								<NavPills
									alignCenter
									color="custom"
									tabs={[
										// {
										// 	tabButton: "AgriPool",
										// 	tabIcon: GiFarmTractor,
										// 	tabContent: <Agripool />,
										// },
										{
											tabButton: "CMS",
											tabIcon: AttachMoneyIcon,
											tabContent: <CMS />,
										},
										{
											tabButton:
												"Auditory Analysis Using DRL",
											tabIcon: SiProbot,
											tabContent: <DRL />,
										},

										// {
										// 	tabButton: "PredictQ",
										// 	tabIcon: BiTime,
										// 	tabContent: <PredictQ />,
										// },
										{
											tabButton:
												"Firmware for Student Sat",
											tabIcon: FaSatellite,
											tabContent: <Sat />,
										},
									]}
								/>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		</div>
	);
}
