import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
	const colourTheme = {
		background: "transparent",
		text: "#ffffff",
		grade4: "#8400b8",
		grade3: "#b22ff4",
		grade2: "#b265f6",
		grade1: "#c084f5",
		grade0: "#ecd9fc",
	};
	// const colourTheme1 = {
	// 	background: "transparent",
	// 	text: "#ffffff",
	// 	grade4: "#004e00",
	// 	grade3: "#258925",
	// 	grade2: "#00ff00",
	// 	grade1: "#ace9ac",
	// 	grade0: "#cdf1cd",
	// };
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
			<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
				Days I <strong className="purple">Code</strong>
			</h1>
			<GitHubCalendar
				username="RUiNtheExtinct"
				blockSize={15}
				blockMargin={5}
				theme={colourTheme}
				fontSize={16}
			/>
		</Row>
	);
}

export default Github;
