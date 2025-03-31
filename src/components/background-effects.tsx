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
								? "rgba(var(--primary-rgb), 0.15)"
								: "rgba(var(--primary-rgb), 0.08)"
						},
						transparent 40%
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
				className="pointer-events-none fixed inset-0 z-30 transition-all duration-500"
				style={{ background: "transparent" }}
			/>
			<div className="pointer-events-none fixed inset-0 z-20 bg-grid-pattern opacity-[0.02] dark:opacity-[0.04]" />
		</>
	);
};

export default BackgroundEffects;
