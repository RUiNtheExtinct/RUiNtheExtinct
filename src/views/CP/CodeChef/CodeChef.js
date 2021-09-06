import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Button from "../../../components/CustomButtons/Button";
// core components

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

// import IconButton from "@material-ui/core/IconButton";
// import { GitHub } from "@material-ui/icons";

// import Box from "@material-ui/core/Box";

import ApexChart from "../../../views/CP/CodeChef/ApexChart";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";

import styles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function CodeChef(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<div style={{ padding: 20, marginBottom: 20 }}>
				<a
					href="https://www.codechef.com/users/vedant_k07"
					target="_blank"
				>
					<Button color="info" round>
						CodeChef profile
					</Button>
				</a>
			</div>
			<GridContainer container spacing={6} justify="center">
				<GridItem xs={5} sm={3} md={8}>
					<ApexChart />
				</GridItem>
			</GridContainer>

			<GridContainer
				container
				spacing={6}
				justifyContent="center"
				alignItems="center"
				justify="center"
			>
				{/* <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="custom"> Project description</CardHeader>
            <CardBody align="justify">
              Agripool is a cross-platform native application. This is an app
              that connects the farmers to the transporters. The aim was to make
              sure that a transporter’s truck never leaves half filled from the
              village when going to the wholesale market. This ensures
              significant gains for the transporters and reduced transportation
              expenses for the farmers. In simple terms, it is uberpool for
              farmers.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="custom"> My work</CardHeader>
            <CardBody align="justify">
              My team used flutter to build this application. I worked on
              multiple pages. Most of the work done here was on front-end. I,
              along with my teammates (
              <a href="https://www.linkedin.com/in/mohil-khare/">Mohil</a>,
              <a href="https://www.linkedin.com/in/jaideep-more-a9733015a/">
                {" "}
                Jaideep
              </a>
              ,
              <a href="https://www.linkedin.com/in/keshav-mishra-912728173/">
                {" "}
                Keshav
              </a>{" "}
              ) took part in VCET hackathon with this project. We were the 2nd
              runner-up. Refer the github for more info.
              <IconButton>
                <GitHub
                  color="primary"
                  onClick={() =>
                    window.open("https://github.com/Phoenix009/AgriPool")
                  }
                  href="https://material-ui.com/api/icon/"
                />
              </IconButton>
            </CardBody>
          </Card>
        </GridItem> */}
			</GridContainer>
		</div>
	);
}
