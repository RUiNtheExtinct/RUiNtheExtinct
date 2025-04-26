"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

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
	const ringWidth = 10; // Width of the glowing ring in pixels

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
			{/* Actual rotating RGB ring - appears outside the image */}
			<motion.div
				className="absolute rounded-full pointer-events-none z-0"
				style={{
					top: -ringWidth,
					left: -ringWidth,
					right: -ringWidth,
					bottom: -ringWidth,
					backgroundImage:
						"conic-gradient(#ff0080, #ff00ff, #8000ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff8000, #ff0000, #ff0080)",
					opacity: isHovered ? 1 : 0,
					filter: "blur(8px)",
				}}
				animate={{
					rotate: isHovered ? 360 : 0,
				}}
				transition={{
					opacity: { duration: 0.3 },
					rotate: { duration: 8, repeat: Infinity, ease: "linear" },
				}}
			/>

			{/* Outer glow for the ring */}
			<motion.div
				className="absolute rounded-full pointer-events-none"
				style={{
					top: -ringWidth * 2,
					left: -ringWidth * 2,
					right: -ringWidth * 2,
					bottom: -ringWidth * 2,
					opacity: isHovered ? 0.6 : 0,
					boxShadow:
						"0 0 20px 10px rgba(255, 0, 255, 0.5), 0 0 40px 20px rgba(0, 255, 255, 0.3)",
					filter: "blur(15px)",
				}}
				animate={{
					opacity: isHovered ? [0.6, 0.8, 0.6] : 0,
				}}
				transition={{
					opacity: { duration: 2, repeat: Infinity },
				}}
			/>

			{/* Profile image container - now with a white background to create clean separation */}
			<div className="relative rounded-full overflow-hidden aspect-square z-10 bg-white h-full w-full">
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="object-cover"
					priority
				/>
			</div>
		</div>
	);
};

export default ProfileImageEffect;
