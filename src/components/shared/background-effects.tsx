"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const BackgroundEffects = () => {
	const spotlightRef = useRef<HTMLDivElement>(null);
	const { theme } = useTheme();

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (spotlightRef.current) {
				const isLight = theme === "light";
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
