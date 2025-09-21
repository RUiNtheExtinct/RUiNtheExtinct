"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useMemo, useState } from "react";

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

	return (
		<div
			className={`relative ${
				className || ""
			} w-full max-w-[420px] mx-auto ease-in-out duration-300`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				aspectRatio: "1/1",
				marginBottom: isHovered ? ringWidth : 0,
			}}
		>
			{/* Brand aurora halo */}
			<motion.div
				className="absolute inset-0 -z-10 rounded-full blur-2xl"
				style={{
					background:
						"radial-gradient(60% 60% at 50% 50%, hsl(var(--accent)/.25), transparent 70%), conic-gradient(from 0deg, hsl(var(--accent)/.25), transparent 40%, hsl(var(--accent)/.25))",
					opacity: isHovered ? 0.9 : 0.5,
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
					opacity: isHovered ? 1 : 0.4,
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
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 origin-center animate-[spin_12s_linear_infinite]">
					{orbitDots.map((deg) => (
						<span
							key={deg}
							className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
							style={{
								transform: `rotate(${deg}deg) translateX(${
									size / 2 - 12
								}px)`,
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
					opacity: isHovered ? 0.6 : 0.2,
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

			{/* Profile image container - now with a white background to create clean separation */}
			<div className="relative rounded-full overflow-hidden aspect-square z-10 bg-white h-full w-full ring-1 ring-border/60">
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="object-cover"
					priority
					sizes="(max-width: 639px) 280px, (max-width: 767px) 340px, (max-width: 1023px) 380px, 420px"
				/>
			</div>
		</div>
	);
};

export default ProfileImageEffect;
