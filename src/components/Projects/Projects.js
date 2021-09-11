import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "components/Particle";

import drl from "assets/img/drl.jpg";
import sat from "assets/img/sat.jpg";
import blood from "assets/img/blood1.jpeg";
// import editor from "assets/Projects/codeEditor.png";
import cms from "assets/img/vendors.png";
// import suicide from "assets/Projects/suicide.png";
import srtvis from "assets/img/srt_vis.gif";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={cms}
							isBlog={false}
							title="CMS"
							description="This Application helps automate attendance, and billing required by CMS, a fintech company, for the gunmen they hire. CMS hires gunmen when transporting money to ATMs all over India. This app takes the biometric ID of the gunmen when starting a trip. This gets registered in the system. At the end of the month, attendance and bill is sent to vendors of the gunmen. This is the project that won us a hackathon :)."
							link="https://github.com/mustankap/CMS"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sat}
							isBlog={false}
							title="Firmware for Student Satellite"
							description="BeliefSat is a 2p-PocketQube standard student nano-satellite being developed by the undergraduate students of K.J.Somaiya Institute of Engineering and Information Technology, Sion, Mumbai. The satellite itself is a sub-part of team’s proposal under PS4-Orbital platform program of ISRO, wherein, team aims to demonstrate indegenously developed technologies for PocketQube standard nano-satellites. As a part of this demonstration, BeliefSat will be launched out of SomaiyaPod which is a Pocketqube standard deployer being indegenously developed at the institute. The unique construction technique, combination of COTS components for communication, on-board computer and power sub-systems , together constitute of SomaiyaPQBus, around which the satellite is being made, is also one of the technologies that the team wants to demonstrate and open-source to enable use by future missions."
							link="https://github.com/NewLeapKjsieit/BeliefSat"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath="https://media.giphy.com/media/amoTKV7qZuBB0TmEK2/giphy.gif"
							isBlog={false}
							title="Ray Casting from point light source"
							description="A basic javascript implementation of dynamic raycasting. It implements the p5.js library for the 2D graphics. It has a point light source that casts light in the form of linear rays. The walls can be randomly drawn to act as obstables. This projects shows how lighting is implemented in games. The next phase would be to implement reflection of light from the obstacles."
							link="https://github.com/RUiNtheExtinct/RayCasting"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={srtvis}
							isBlog={false}
							title="Sorting Visualizer"
							description="This is, as the title suggests, a Sorting Visualizer. Made using React.js, it helps visualise how different types of sorts actually happens, how the numbers are shuffled, how the elements are swapped, etc. To get a clearer picture of the sorting method being used, there is the functionality to choose the number of elements to be sorted and speed at which the elements are being sorted. As of now, I have added most of the sorting methods here. Methods yet to be added are Merge Sort, Bucket Sort, etc."
							link="https://github.com/RUiNtheExtinct/SortingVisualizer"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={blood}
							isBlog={false}
							title="BloodBank Online"
							description="An Android App to do the following. Show nearby bloodbanks. Allow people to register themselves for blood donation drives at their nearby bloodbanks online. Sort people by blood type. Allow people in need of a particular blood type to contact nearest bloodbank with that type available. Allow people in need of a particular blood type to contact registered donors directly in case of emergencies. Allow people who need blood but not so ugently to be put on waiting lists."
							link="https://github.com/RUiNtheExtinct/BloodBank"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={drl}
							isBlog={false}
							title="Auditory Analysis using DRL"
							description="We plan to analyse voice patterns for various kinds of emotions, which would include rudeness, satire, confidence, happiness, sadness, and many more. We plan to test Deep Reinforcement learning in this field. The next step would be to implement NLP so as to get a sense of context from the speech. We plan to use this for various audio applications such as to train individuals in their speaking skills, to try and introduce emotions in the voice of NLP models like Google Assistant, Alexa, etc., to read e-books outloud with a sense of context and emotions attached to it, etc. (WIP)"
							link=""
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
