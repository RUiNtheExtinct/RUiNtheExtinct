"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const BackgroundEffects = () => {
	const spotlightRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);
	const gridGlowRef = useRef<HTMLDivElement>(null);
	const auroraRef = useRef<HTMLDivElement>(null);
	const { theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const themeMode = resolvedTheme ?? theme ?? "dark";
	const isLightTheme = themeMode === "light";
	const gridVisualLight = mounted ? isLightTheme : false;

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const pointerMedia = window.matchMedia("(pointer: coarse)");
		const reduceMotionMedia = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		);
		const isCoarse = pointerMedia.matches;
		const prefersReducedMotion = reduceMotionMedia.matches;
		const isLight = themeMode === "light";

		const setStaticLayers = () => {
			if (spotlightRef.current) {
				spotlightRef.current.style.background = `
					radial-gradient(
						600px circle at 50% 30%,
						${
							isLight
								? "rgba(var(--primary-rgb), 0.04)"
								: "rgba(var(--primary-rgb), 0.08)"
						},
						transparent 45%
					),
					radial-gradient(
						180px circle at 55% 34%,
						hsl(var(--accent) / ${isLight ? "0.06" : "0.1"}),
						transparent 32%
					)
				`;
			}

			if (gridGlowRef.current) {
				gridGlowRef.current.style.background = `radial-gradient(
					220px circle at 50% 35%,
					${
						isLight
							? "rgba(var(--primary-rgb), 0.12)"
							: "rgba(var(--primary-rgb), 0.28)"
					},
					transparent 70%
				)`;
				gridGlowRef.current.style.opacity = "0.35";
			}

			if (auroraRef.current) {
				auroraRef.current.style.setProperty("--aurora-x", "0px");
				auroraRef.current.style.setProperty("--aurora-y", "0px");
				auroraRef.current.style.setProperty("--aurora-hue", "0deg");
			}
		};

		if (isCoarse || prefersReducedMotion) {
			setStaticLayers();
			return;
		}

		const pointer = {
			x: window.innerWidth / 2,
			y: window.innerHeight * 0.35,
		};
		const target = { ...pointer };
		const viewport = {
			w: window.innerWidth,
			h: window.innerHeight,
		};

		let rafId: number;

		const updateLayers = (time: number) => {
			const lagX = pointer.x;
			const lagY = pointer.y;
			const currentX = target.x;
			const currentY = target.y;
			const normX = viewport.w ? currentX / viewport.w : 0.5;
			const normY = viewport.h ? currentY / viewport.h : 0.35;
			const influence = Math.min(
				(Math.hypot(target.x - lagX, target.y - lagY) /
					Math.max(viewport.w, 1)) *
					3,
				0.95
			);

			if (spotlightRef.current) {
				spotlightRef.current.style.background = `
					radial-gradient(
						${800 + influence * 200}px circle at ${currentX}px ${currentY}px,
						${
							isLight
								? "rgba(var(--primary-rgb), 0.05)"
								: "rgba(var(--primary-rgb), 0.12)"
						},
						transparent 42%
					),
					radial-gradient(
						${250 + influence * 120}px circle at ${currentX}px ${currentY}px,
						hsl(var(--accent) / ${isLight ? "0.08" : "0.14"}),
						transparent 35%
					)
				`;
			}

			if (gridRef.current) {
				const radius =
					240 +
					Math.sin(time * 0.0015 + normX * 6) * 40 +
					influence * 120;
				const mask = `radial-gradient(${radius}px circle at ${currentX}px ${currentY}px, rgba(255,255,255,${
					isLight ? 0.85 : 0.65 + influence * 0.2
				}), transparent 70%)`;

				gridRef.current.style.setProperty("--grid-mask", mask);
				gridRef.current.style.setProperty(
					"--grid-offset-x",
					`${(normX - 0.5) * 24}px`
				);
				gridRef.current.style.setProperty(
					"--grid-offset-y",
					`${(normY - 0.35) * 20}px`
				);
				gridRef.current.style.setProperty(
					"--grid-tilt-x",
					`${(normX - 0.5) * 8}deg`
				);
				gridRef.current.style.setProperty(
					"--grid-tilt-y",
					`${(normY - 0.35) * -6}deg`
				);
			}

			if (gridGlowRef.current) {
				const glowRadius = 180 + influence * 90;
				gridGlowRef.current.style.background = `radial-gradient(${glowRadius}px circle at ${currentX}px ${currentY}px, ${
					isLight
						? "rgba(var(--primary-rgb), 0.15)"
						: "rgba(var(--primary-rgb), 0.35)"
				}, transparent 65%)`;
				gridGlowRef.current.style.opacity = `${
					0.16 + influence * 0.32
				}`;
				gridGlowRef.current.style.transform = `translate3d(${
					(normX - 0.5) * 10
				}px, ${(normY - 0.35) * 10}px, 0) scale(${
					0.95 + influence * 0.04
				})`;
			}

			if (auroraRef.current) {
				auroraRef.current.style.setProperty(
					"--aurora-x",
					`${(normX - 0.5) * 45}px`
				);
				auroraRef.current.style.setProperty(
					"--aurora-y",
					`${(normY - 0.4) * 40}px`
				);
				auroraRef.current.style.setProperty(
					"--aurora-hue",
					`${(normX - 0.5) * 30}deg`
				);
			}
		};

		const handleMouseMove = (event: MouseEvent) => {
			target.x = event.clientX;
			target.y = event.clientY;
		};

		const handleResize = () => {
			viewport.w = window.innerWidth;
			viewport.h = window.innerHeight;
		};

		const animate = () => {
			pointer.x += (target.x - pointer.x) * 0.18;
			pointer.y += (target.y - pointer.y) * 0.18;
			updateLayers(performance.now());
			rafId = requestAnimationFrame(animate);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", handleResize);
		updateLayers(performance.now());
		animate();

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, [themeMode]);

	return (
		<>
			<div
				ref={spotlightRef}
				className="pointer-events-none fixed inset-0 z-30 transition-[background] duration-300 ease-out"
				style={{ background: "transparent" }}
			/>
			<div
				ref={gridRef}
				className="pointer-events-none fixed inset-0 z-20 animate-grid-flow transition-[transform,opacity] duration-700 ease-out"
				style={
					{
						backgroundImage:
							"linear-gradient(transparent 97%, rgba(var(--primary-rgb),0.15) 100%), linear-gradient(90deg, transparent 97%, rgba(var(--primary-rgb),0.15) 100%)",
						backgroundSize: "36px 36px",
						opacity: gridVisualLight ? 0.04 : 0.08,
						mixBlendMode: gridVisualLight ? "multiply" : "screen",
						maskImage: "var(--grid-mask)",
						WebkitMaskImage: "var(--grid-mask)",
						transform:
							"perspective(1400px) rotateX(var(--grid-tilt-y)) rotateY(var(--grid-tilt-x)) translate3d(var(--grid-offset-x), var(--grid-offset-y), 0)",
						"--grid-mask":
							"radial-gradient(260px circle at 50% 35%, rgba(255,255,255,0.85), transparent 70%)",
						"--grid-offset-x": "0px",
						"--grid-offset-y": "0px",
						"--grid-tilt-x": "0deg",
						"--grid-tilt-y": "0deg",
					} as CSSProperties
				}
			/>
			<div
				ref={gridGlowRef}
				className="pointer-events-none fixed inset-0 z-[15] mix-blend-screen opacity-30 blur-3xl transition-all duration-500"
				style={{
					background:
						"radial-gradient(220px circle at 50% 35%, rgba(var(--primary-rgb),0.2), transparent 60%)",
				}}
			/>
			<div
				ref={auroraRef}
				className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07] dark:opacity-[0.12] animate-gradient-x"
				style={{
					backgroundImage:
						"radial-gradient(60% 80% at 20% 10%, hsl(var(--primary)/.65), transparent),radial-gradient(50% 60% at 80% 30%, hsl(var(--accent)/.7), transparent),radial-gradient(40% 60% at 50% 70%, hsl(var(--secondary)/.65), transparent)",
					backgroundSize: "200% 200%",
					transform:
						"translate3d(var(--aurora-x, 0px), var(--aurora-y, 0px), 0)",
					filter: "saturate(1.1) hue-rotate(var(--aurora-hue, 0deg))",
				}}
			/>
		</>
	);
};

export default BackgroundEffects;
