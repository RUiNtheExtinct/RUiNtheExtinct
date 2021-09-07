import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"Competitive Programmer",
					"AI Enthusiast",
					"Deep Learning Engineer",
					"Django Adept",
					"Avid Bookworm",
					"MERN Stack Developer",
					"Android Developer",
					"Open Source Contributor",
				],
				delay: 35,
				autoStart: true,
				loop: true,
				deleteSpeed: 35,
			}}
		/>
	);
}

export default Type;
