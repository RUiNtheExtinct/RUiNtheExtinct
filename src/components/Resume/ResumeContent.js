import React from "react";

function ResumeContent(props) {
	return (
		<div className="resume-item">
			{props.link ? (
				<a href={props.link}>
					<h5
						className={
							props.title ? "resume-title" : "resume-no-title"
						}
						style={{ color: "white" }}
					>
						{props.title}
					</h5>
				</a>
			) : (
				<h5
					className={props.title ? "resume-title" : "resume-no-title"}
				>
					{props.title}
				</h5>
			)}
			{/* <h5 className={props.title ? "resume-title" : "resume-no-title"}>
				{props.title}
			</h5> */}
			<p>
				<em>{props.date}</em>
			</p>
			<ul>
				{props.content.map((value, index) => (
					<li key={index}> ‣ {value}</li>
				))}
			</ul>
		</div>
	);
}

export default ResumeContent;
