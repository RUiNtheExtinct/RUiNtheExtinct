import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function CreditCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, This is{" "}
						<span className="purple">RUiNtheExtinct </span>.
						<br />
						<br />
						This teeny section here is to give credits all the
						things that helped me make this portfolio.
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight />{" "}
							<a
								href="https://github.com/soumyajit4419"
								target="_blank"
								style={{ color: "white" }}
								rel="noopener noreferrer"
							>
								soumyajit4419.
							</a>
						</li>
						<li className="about-activity">
							<ImPointRight />{" "}
							<a
								href="https://www.designevo.com/logo-maker/"
								target="_blank"
								style={{ color: "white" }}
								rel="noopener noreferrer"
							>
								DesignEvo - Helped make my logo, so kudos.
							</a>
						</li>
						<li className="about-activity">
							<ImPointRight />{" "}
							<a
								href="https://github.com/vedantkokate07"
								target="_blank"
								style={{ color: "white" }}
								rel="noopener noreferrer"
							>
								vedantkokate07.
							</a>
						</li>
						<li className="about-activity">
							<ImPointRight />{" "}
							<a
								href="https://stackoverflow.com/"
								target="_blank"
								style={{ color: "white" }}
								rel="noopener noreferrer"
							>
								Stack OverFlow obviously.
							</a>
						</li>
						<li className="about-activity">
							<ImPointRight />{" "}
							<a
								href="https://devicon.dev/"
								target="_blank"
								style={{ color: "white" }}
								rel="noopener noreferrer"
							>
								Devicons - They got so many cool icons.
							</a>
						</li>
						<li className="about-activity">
							<ImPointRight />{" "}
							<a
								href="https://www.canva.com/"
								target="_blank"
								style={{ color: "white" }}
								rel="noopener noreferrer"
							>
								Canva - It has cool resume templates.
							</a>
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default CreditCard;
