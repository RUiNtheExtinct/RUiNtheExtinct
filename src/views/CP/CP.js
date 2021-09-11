import React from "react";

// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
import FunctionsIcon from "@material-ui/icons/Functions";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
import { SiCodechef, SiCodeforces } from "react-icons/si";

// core components
// import Header from "components/Header/Header.js";

// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
// import Parallax from "components/Parallax/Parallax.js";

// import profile from "assets/img/faces/vedant1.jpg";

import CodeChef from "./CodeChef/CodeChef";
import Card from "react-bootstrap/Card";

import ProjectEuler from "./Project Euler/Project Euler";
// import Hackerrank from "./Hackerrank/Hackerrank";
import CodeForces from "./CodeForces/CodeForces";
// import styles from "assets/jss/material-kit-react/views/profilePage.js";

// const useStyles = makeStyles(styles);

export default function CP(props) {
	// const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<div>
				<div>
					<div>
						<Card className="quote-card-view">
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p style={{ textAlign: "center" }}>
										My Competitive Coding backround
									</p>
								</blockquote>
								<NavPills
									alignCenter
									color="custom"
									tabs={[
										{
											tabButton: "CodeChef",
											tabIcon: SiCodechef,
											tabContent: <CodeChef />,
										},
										{
											tabButton: "Project Euler",
											tabIcon: FunctionsIcon,
											tabContent: <ProjectEuler />,
										},
										{
											tabButton: "CodeForces",
											tabIcon: SiCodeforces,
											tabContent: <CodeForces />,
										},
									]}
								/>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
