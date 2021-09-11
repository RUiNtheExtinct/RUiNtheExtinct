// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "assets/resume_v2.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
	// const uri =
	// 	"https://www.hackerrank.com/results/projecteuler/RUiNtheExtinct";
	// // const [spojRank, upadteSpojRank] = useState(0);
	// const [hackerrank, updateHackerank] = useState("");
	// // const [sem, upadateSem] = useState(0);
	// // const [cgpa, upadteCgpa] = useState(0);

	// useEffect(() => {
	// 	axios
	// 		.get(uri)
	// 		.then((res) => {
	// 			// upadteSpojRank(res.data.message[0].spojRank);
	// 			updateHackerank(res.data);
	// 			console.log(res);
	// 			// upadteCgpa(res.data.message[2].cgpa);
	// 			// upadateSem(res.data.message[3].sem);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<Container fluid className="resume-section">
			<Particle />
			<Container>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
				<Row className="resume">
					<Col md={6} className="resume-left">
						<h3 className="resume-title">Experience</h3>
						<Resumecontent
							title="Android Developer [ EYuva Technologies ]"
							date="December 2019 - January 2020"
							content={[
								" Develop an Android App that allows blood donors and recipients to connect.",
								" Show nearby blood banks and filter them by required blood types.",
								" Set up Firebase Support for the app.",
							]}
						/>
						<Resumecontent
							title="Full Stack Web Developer [ Standard Wing Technologies ]"
							date="June 2021 - July 2021"
							content={[
								" Develop the company website from scratch.",
								" Use Django for backend development.",
								" Develop the frontend using React.",
							]}
						/>
						<h3 className="resume-title">
							Extracurricular Activities
						</h3>
						<Resumecontent
							title="Project Code 1.0 [ CodeChef ]"
							link="https://www.codechef.com/PCO12020?itm_campaign=contest_listing"
							content={[
								"As a core member of Infinite Loop, I have helped organise and manage the online international Project Code 1.0 on CodeChef.",
								"The contest had participation of over 1500+ from 25+ countries.",
							]}
						/>
						<Resumecontent
							title="Project Code 2.0 [ CodeChef ]"
							link="https://www.codechef.com/PROC2020?itm_campaign=contest_listing"
							content={[
								"I have also helped organise and manage Project Code 2.0 on CodeChef.",
								"The contest had 2000+ participants from 20+ countries.",
							]}
						/>
						<Resumecontent
							title="Project Her 1.0 [ CodeChef ]"
							link="https://www.codechef.com/GWC2021?itm_campaign=contest_listing"
							content={[
								"Helped in problem setting and editing in the contest Project Her 1.0.",
								"It is an all female coding contest, with 1000+ participants.",
							]}
						/>
					</Col>
					<Col md={6} className="resume-right">
						<h3 className="resume-title">Education</h3>
						<Resumecontent
							title="B. Tech in IT [ KJSIEIT ]"
							date="2018 - Present"
							content={[`CGPA: 9.16 (Till 6th Sem)`]}
						/>
						<Resumecontent
							title="12TH BOARD [Reliance Foundation School, Nagothane]"
							date="2018"
							content={["Precentage: 91.8%"]}
						/>
						<Resumecontent
							title="10TH BOARD [Reliance Foundation School, Nagothane] "
							date="2016"
							content={["Precentage: 87.8%"]}
						/>
						<h3 className="resume-title">Ranks and Achivements</h3>
						<Resumecontent
							title=""
							content={[
								"Winner of FinTech Hackathon - Code Adventure 3.0 organized by Riidl.",
								"Hackticks Hackathon - Top 10.",
								"KJSCE Hack 5.0 - Special Mention",
								"Project Euler (HackerRank) Global Rank - 2393",
							]}
						/>
						<h3 className="resume-title">Specializations</h3>
						<Resumecontent
							title=""
							content={[
								"Languages - C++, Python, JavaScript, Dart, Java.",
								"Competitive Coding.",
								"Web Development (Django-React, MongoDB).",
								"Android Development (Android Studios, DartFlutter).",
								"Starting with ML and AI.",
							]}
						/>
					</Col>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</Container>
	);
}

export default Resume;
