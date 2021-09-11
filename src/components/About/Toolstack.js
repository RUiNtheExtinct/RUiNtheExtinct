import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub } from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<a
					href="https://code.visualstudio.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
						alt="vscode"
						width="70"
						height="70"
					/>
				</a>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<a
					href="https://www.linux.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
						alt="linux"
						width="70"
						height="70"
					/>
				</a>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<a
					href="https://jupyter.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg"
						alt="jupyter_nb"
						width="70"
						height="70"
					/>
				</a>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<a
					href="https://www.heroku.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg"
						alt="heroku"
						width="70"
						height="70"
					/>
				</a>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<a
					href="https://developer.android.com/studio/intro"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg"
						alt="android_studios"
						width="70"
						height="70"
					/>
				</a>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<a
					href="https://aws.amazon.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
						alt="aws"
						width="80"
						height="80"
					/>
				</a>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<a
					href="https://github.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiGithub />
				</a>
			</Col>
		</Row>
	);
}

export default Toolstack;
