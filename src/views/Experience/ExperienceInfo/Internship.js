import React from "react";

// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";

// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import { Row, Col } from "react-bootstrap";

import ProjectCard from "components/Projects/ProjectCards";
import blood from "assets/img/blood1.jpeg";
import stdw from "assets/img/stdw.png";

// import IconButton from "@material-ui/core/IconButton";
// import { GitHub } from "@material-ui/icons";

// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";

// import styles from "assets/jss/material-kit-react/views/profilePage.js";

// const useStyles = makeStyles(styles);
export default function Sat(props) {
	// const classes = useStyles();
	// const { ...rest } = props;
	// const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
			<Col md={4} className="project-card">
				<ProjectCard
					imgPath={blood}
					isBlog={false}
					title="EYuva Technologies"
					description="An Android Development Internship. Made an Android App to do the following. Show nearby bloodbanks. Allow people to register themselves for blood donation drives at their nearby bloodbanks online. Sort people by blood type. Allow people in need of a particular blood type to contact nearest bloodbank with that type available. Allow people in need of a particular blood type to contact registered donors directly in case of emergencies. Allow people who need blood but not so ugently to be put on waiting lists."
					link="https://github.com/RUiNtheExtinct/BloodBank"
				/>
			</Col>
			<Col md={4} className="project-card">
				<ProjectCard
					imgPath={stdw}
					isBlog={false}
					title="Standard Wings Technologies"
					description="Developed the company website from scratch. Used Django for backend development. Developed the frontend using React."
					// link="https://github.com/RUiNtheExtinct/BloodBank"
				/>
			</Col>
		</Row>
	);
}
