"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const BackgroundEffects = () => {
	const spotlightRef = useRef<HTMLDivElement>(null);
	const { theme } = useTheme();

	useEffect(() => {
		const isCoarse = window.matchMedia("(pointer: coarse)").matches;
		const isLight = theme === "light";

		if (isCoarse) {
			// Static subtle glow for touch devices
			if (spotlightRef.current) {
				spotlightRef.current.style.background = `
					radial-gradient(
						600px circle at 50% 30%,
						${
							isLight
								? "rgba(var(--primary-rgb), 0.04)"
								: "rgba(var(--primary-rgb), 0.08)"
						},
						transparent 40%
					),
					radial-gradient(
						180px circle at 55% 34%,
						hsl(var(--accent) / ${isLight ? "0.05" : "0.08"}),
						transparent 35%
					)
				`;
			}
			return;
		}

		const handleMouseMove = (event: MouseEvent) => {
			if (spotlightRef.current) {
				spotlightRef.current.style.background = `
					radial-gradient(
						800px circle at ${event.clientX}px ${event.clientY}px,
						${
							isLight
								? "rgba(var(--primary-rgb), 0.05)"
								: "rgba(var(--primary-rgb), 0.10)"
						},
						transparent 40%
					),
					radial-gradient(
						200px circle at ${event.clientX}px ${event.clientY}px,
						hsl(var(--accent) / ${isLight ? "0.06" : "0.10"}),
						transparent 35%
					)
				`;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [theme]);

	return (
		<>
			<div
				ref={spotlightRef}
				className="pointer-events-none fixed inset-0 z-30 transition-all duration-300"
				style={{ background: "transparent" }}
			/>
			{/* Animated soft gradient background */}
			<div
				className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06] dark:opacity-[0.08] animate-gradient-x"
				style={{
					backgroundImage:
						"radial-gradient(60% 80% at 20% 10%, hsl(var(--primary)/.6), transparent),radial-gradient(50% 60% at 80% 30%, hsl(var(--accent)/.6), transparent),radial-gradient(40% 60% at 50% 70%, hsl(var(--secondary)/.6), transparent)",
					backgroundSize: "200% 200%",
				}}
			/>
			<div className="pointer-events-none fixed inset-0 z-20 bg-grid-pattern opacity-[0.02] dark:opacity-[0.04]" />
		</>
	);
};

export default BackgroundEffects;
