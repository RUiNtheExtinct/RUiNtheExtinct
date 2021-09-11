import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "components/Particle";

import drl from "assets/img/drl.jpg";
import sat from "assets/img/sat.jpg";
import emotion from "assets/Projects/emotion.jpeg";
// import editor from "assets/Projects/codeEditor.png";
import cms from "assets/img/CMS/vendors.png";
import suicide from "assets/Projects/suicide.png";
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
							imgPath={drl}
							isBlog={false}
							title="Auditory Analysis using DRL"
							description="We plan to analyse voice patterns for various kinds of emotions, which would include rudeness, satire, confidence, happiness, sadness, and many more. We plan to test Deep Reinforcement learning in this field. The next step would be to implement NLP so as to get a sense of context from the speech. We plan to use this for various audio applications such as to train individuals in their speaking skills, to try and introduce emotions in the voice of NLP models like Google Assistant, Alexa, etc., to read e-books outloud with a sense of context and emotions attached to it, etc. (WIP)"
							link=""
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
							imgPath={suicide}
							isBlog={false}
							title="Ai For Social Good"
							description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
							link="https://github.com/soumyajit4419/AI_For_Social_Good"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={emotion}
							isBlog={false}
							title="Face Recognition and Emotion Detection"
							description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                                        Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
							link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
