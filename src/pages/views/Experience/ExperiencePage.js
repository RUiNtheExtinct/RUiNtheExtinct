import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
import { IoMdInfinite } from "react-icons/io";
import { GiSpaceSuit, GiBookshelf } from "react-icons/gi";

// IoMdInfinite
// core components
import Header from "../../components/Header/Header.js";

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/img/faces/vedant1.jpg";

import CodeCell from "./ExperienceInfo/CodeCell";
import Sat from "./ExperienceInfo/Sat";
import Education from "./ExperienceInfo/Education";
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ExperiencePage(props) {
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
							<GridItem xs={12} sm={12} md={100} lg={100}>
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

						<GridContainer justify="center" algin="center">
							<GridItem
								xs={12}
								sm={12}
								md={12}
								className={classes.navWrapper}
							>
								<NavPills
									alignCenter
									color="custom"
									tabs={[
										{
											tabButton: "Code Cell",
											tabIcon: IoMdInfinite,
											tabContent: <CodeCell />,
										},
										{
											tabButton: "Space Program",
											tabIcon: GiSpaceSuit,
											tabContent: <Sat />,
										},
										{
											tabButton: "Education",
											tabIcon: GiBookshelf,
											tabContent: <Education />,
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
