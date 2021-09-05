/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {
	Apps,
	LinkedIn,
	Instagram,
	GitHub,
	MailOutline,
} from "@material-ui/icons";

// core components
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			{/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Pages"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Home
            </Link>,
            <Link to="/project-page" className={classes.dropdownLink}>
              Projects
            </Link>,
            <Link to="/awards-page" className={classes.dropdownLink}>
              Awards
            </Link>,
            <Link to="/experience-page" className={classes.dropdownLink}>
              Experience
            </Link>,
            <Link to="/cp" className={classes.dropdownLink}>
              Competitive Programming
            </Link>,
            ,
          ]}
        />
      </ListItem> */}
			<ListItem className={classes.listItem}>
				<Link to="/">
					<Button color="rose">Home</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/project-page">
					<Button color="rose">Projects</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/awards-page">
					<Button color="rose">Awards</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/experience-page">
					<Button color="rose">Experience</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/cp">
					<Button color="rose">Competitive Programming</Button>
				</Link>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-tooltip"
					title="Follow me on instagram"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<IconButton
						color="secondary"
						size="medium"
						component="span"
					>
						<Instagram
							onClick={() =>
								window.open(
									"https://www.instagram.com/vedant_kokate/"
								)
							}
						/>
					</IconButton>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="linkedin-tooltip"
					title="Connect with me on Linkdin"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<IconButton
						color="secondary"
						size="medium"
						component="span"
					>
						<LinkedIn
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/vedant-kokate-723030182/"
								)
							}
						/>
					</IconButton>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="github-tooltip"
					title="Check out on my Github"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<IconButton
						color="secondary"
						size="medium"
						component="span"
					>
						<GitHub
							onClick={() =>
								window.open("https://github.com/vedantkokate07")
							}
						/>
					</IconButton>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="mail-tooltip"
					title="write me at"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<IconButton
						color="secondary"
						size="medium"
						component="span"
					>
						<MailOutline
							onClick={() =>
								window.open("mailto:vedant.kokate@somaiya.com")
							}
						/>
					</IconButton>
				</Tooltip>
			</ListItem>
		</List>
	);
}
