import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am{" "}
						<span className="purple">Arghyadeep Karmakar </span>
						from <span className="purple"> Mumbai, India.</span>
						<br />I am pursuing B. Tech. in Information Technology
						in K. J. Somaiya.
						<br />
						<br />
						Apart from coding, some other activities that I love to
						do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing MultiPlayer games.
						</li>
						<li className="about-activity">
							<ImPointRight /> Reading (Especially fanfiction).
						</li>
						<li className="about-activity">
							<ImPointRight /> Cooking.
						</li>
					</ul>

					<p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
						"Veni, vidi, flevi."{" "}
					</p>
					<footer className="blockquote-footer">
						RUiNtheExtinct
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
