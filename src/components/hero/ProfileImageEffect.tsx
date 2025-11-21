"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

interface ProfileImageEffectProps {
	imageSrc: string | StaticImageData;
	imageAlt: string;
	className?: string;
	size?: number;
}

const ProfileImageEffect = ({
	imageSrc,
	imageAlt,
	className,
	size = 420,
}: ProfileImageEffectProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const ringWidth = 10;
	const orbitDots = useMemo(() => [0, 120, 240], []);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [containerSize, setContainerSize] = useState<number>(0);
	const [isCoarse, setIsCoarse] = useState<boolean>(false);

	useEffect(() => {
		// Track pointer type for touch devices
		const mq = window.matchMedia("(pointer: coarse)");
		const updatePointer = () => setIsCoarse(mq.matches);
		updatePointer();
		mq.addEventListener("change", updatePointer);

		// Observe container for responsive orbit radius
		const el = containerRef.current;
		if (el) {
			const ro = new ResizeObserver((entries) => {
				for (const entry of entries) {
					const w = entry.contentRect.width;
					setContainerSize(w);
				}
			});
			ro.observe(el);
			return () => {
				mq.removeEventListener("change", updatePointer);
				ro.disconnect();
			};
		}

		return () => mq.removeEventListener("change", updatePointer);
	}, []);

	const orbitRadiusPx = Math.max(0, (containerSize || size) / 2 - 12);

	return (
		<div
			ref={containerRef}
			className={`group relative mx-auto w-full max-w-[420px] select-none ${
				className || ""
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				aspectRatio: "1/1",
			}}
		>
			{/* Brand aurora halo */}
			<motion.div
				className="absolute inset-0 -z-10 rounded-full blur-2xl"
				style={{
					background:
						"radial-gradient(60% 60% at 50% 50%, hsl(var(--accent)/.25), transparent 70%), conic-gradient(from 0deg, hsl(var(--accent)/.25), transparent 40%, hsl(var(--accent)/.25))",
					opacity: isHovered ? 0.9 : isCoarse ? 0.4 : 0.5,
				}}
				animate={{ rotate: isHovered ? 360 : 0 }}
				transition={{
					rotate: { duration: 18, repeat: Infinity, ease: "linear" },
					opacity: { duration: 0.3 },
				}}
			/>

			{/* Actual rotating RGB ring - appears outside the image */}
			<motion.div
				className="absolute rounded-full pointer-events-none z-0"
				style={{
					top: -ringWidth,
					left: -ringWidth,
					right: -ringWidth,
					bottom: -ringWidth,
					backgroundImage:
						"conic-gradient(hsl(var(--accent)), transparent 25%, hsl(var(--accent)), transparent 50%, hsl(var(--accent)))",
					opacity: isHovered ? 1 : isCoarse ? 0.3 : 0.4,
					filter: "blur(10px)",
				}}
				animate={{
					rotate: isHovered ? 360 : 0,
				}}
				transition={{
					opacity: { duration: 0.3 },
					rotate: { duration: 14, repeat: Infinity, ease: "linear" },
				}}
			/>

			{/* Orbiting glow dots */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{ display: isCoarse ? "none" : undefined }}
			>
				<div className="absolute inset-0 origin-center animate-[spin_12s_linear_infinite]">
					{orbitDots.map((deg) => (
						<span
							key={deg}
							className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
							style={{
								transform: `rotate(${deg}deg) translateX(${orbitRadiusPx}px)`,
								background: "hsl(var(--accent))",
								boxShadow: "0 0 12px hsl(var(--accent)/.8)",
								opacity: isHovered ? 1 : 0.7,
							}}
						/>
					))}
				</div>
			</div>

			{/* Outer glow for the ring */}
			<motion.div
				className="absolute rounded-full pointer-events-none"
				style={{
					top: -ringWidth * 2,
					left: -ringWidth * 2,
					right: -ringWidth * 2,
					bottom: -ringWidth * 2,
					opacity: isHovered ? 0.6 : isCoarse ? 0.15 : 0.2,
					boxShadow:
						"0 0 24px 12px hsl(var(--accent)/.45), 0 0 60px 30px hsl(var(--accent)/.20)",
					filter: "blur(16px)",
				}}
				animate={{
					opacity: isHovered ? [0.6, 0.8, 0.6] : [0.2, 0.3, 0.2],
				}}
				transition={{
					opacity: { duration: 3, repeat: Infinity },
				}}
			/>

			<div className="pointer-events-none absolute inset-0 rounded-full border border-white/20 opacity-80 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100" />
			<div className="pointer-events-none absolute inset-0 rounded-full opacity-25 mix-blend-soft-light bg-[linear-gradient(180deg,rgba(255,255,255,0.6),transparent)]" />
			<div className="pointer-events-none absolute inset-0 rounded-full opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:100%_8px]" />

			{/* Profile image container */}
			<div className="relative z-10 h-full w-full select-none overflow-hidden rounded-full bg-white/90 ring-1 ring-border/60 backdrop-blur-xl">
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="object-cover select-none"
					priority
					sizes="(max-width: 639px) 280px, (max-width: 767px) 340px, (max-width: 1023px) 380px, 420px"
					draggable={false}
				/>
			</div>
		</div>
	);
};

export default ProfileImageEffect;
