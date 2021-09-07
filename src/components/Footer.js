// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col
					md="4"
					className="footer-copywright mt-2"
					as={Link}
					to="/cred"
				>
					<h3>
						<u>Credits</u>
					</h3>
				</Col>
				<Col md="4" className="footer-copywright mt-2">
					<h3>Copyright © {year} RTE</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="home-social-icons mr-2">
							<a
								href="https://github.com/RUiNtheExtinct"
								style={{ color: "black" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillGithub />
							</a>
						</li>
						<li className="home-social-icons mr-2">
							<a
								href="https://twitter.com/fallacy69"
								style={{ color: "light-blue" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineTwitter />
							</a>
						</li>
						<li className="home-social-icons mr-2">
							<a
								href="https://www.linkedin.com/in/arghyadeep-k-14b06b15a/"
								style={{ color: "blue" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className="home-social-icons mr-2">
							<a
								href="https://www.instagram.com/ruin_the_extinct/"
								style={{ color: "red" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
