"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

interface LogoProps {
	className?: string;
}

const drawVariant = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (delay = 0) => ({
		pathLength: 1,
		opacity: 1,
		transition: {
			duration: 1.1,
			ease: "easeInOut",
			delay,
		},
	}),
};

const CENTER_X = 50;
const CENTER_Y = 56;
const HOUR_BASE_ANGLE = -90; // subtle spine accent
const MINUTE_BASE_ANGLE = 58; // aligns with original upper K stroke
const SECOND_BASE_ANGLE = 130; // aligns with original lower K stroke
const HOUR_HAND_LENGTH = 28;
const HOUR_TRAIL_LENGTH = 34;
const MINUTE_HAND_LENGTH = 45;
const SECOND_HAND_LENGTH = 50;
const MINUTE_TRAIL_LENGTH = 58;
const SECOND_TRAIL_LENGTH = 66;
const SECOND_DEG_PER_SECOND = 6;
const MINUTE_DEG_PER_MINUTE = 6;
const MINUTE_DEG_PER_SECOND = MINUTE_DEG_PER_MINUTE / 60;
const HOUR_DEG_PER_HOUR = 30;
const HOUR_DEG_PER_MINUTE = HOUR_DEG_PER_HOUR / 60;
const HOUR_DEG_PER_SECOND = HOUR_DEG_PER_MINUTE / 60;
const CLOCK_TICK_MS = 1000;

const polarPoint = (angleDeg: number, length: number) => {
	const radians = ((angleDeg - 90) * Math.PI) / 180;
	return {
		x: Number((CENTER_X + length * Math.cos(radians)).toFixed(3)),
		y: Number((CENTER_Y + length * Math.sin(radians)).toFixed(3)),
	};
};

const pathFromCenter = (point: { x: number; y: number }) =>
	`M ${CENTER_X} ${CENTER_Y} L ${point.x} ${point.y}`;

const getClockAngles = () => {
	const now = new Date();
	const seconds = now.getSeconds() + now.getMilliseconds() / CLOCK_TICK_MS;
	const minutes = now.getMinutes();
	const hours = now.getHours() % 12;
	const minuteAngle =
		minutes * MINUTE_DEG_PER_MINUTE + seconds * MINUTE_DEG_PER_SECOND;
	const secondAngle = seconds * SECOND_DEG_PER_SECOND;
	const hourAngle =
		hours * HOUR_DEG_PER_HOUR +
		minutes * HOUR_DEG_PER_MINUTE +
		seconds * HOUR_DEG_PER_SECOND;
	return { minuteAngle, secondAngle, hourAngle };
};

export const Logo = ({ className }: LogoProps) => {
	const [key, setKey] = useState(0);
	const strokeGradientId = useId();
	const fillGradientId = `${strokeGradientId}-fill`;
	const portalFillId = `${strokeGradientId}-portal`;
	const [isHovered, setIsHovered] = useState(false);
	const [hourAngle, setHourAngle] = useState(HOUR_BASE_ANGLE);
	const [minuteAngle, setMinuteAngle] = useState(MINUTE_BASE_ANGLE);
	const [secondAngle, setSecondAngle] = useState(SECOND_BASE_ANGLE);
	const clockIntervalRef = useRef<number | null>(null);

	const stopClock = () => {
		if (clockIntervalRef.current !== null) {
			window.clearInterval(clockIntervalRef.current);
			clockIntervalRef.current = null;
		}
	};

	const startClock = () => {
		stopClock();
		const {
			minuteAngle: minuteNow,
			secondAngle: secondNow,
			hourAngle: hourNow,
		} = getClockAngles();
		setMinuteAngle(minuteNow);
		setSecondAngle(secondNow);
		setHourAngle(hourNow);
		clockIntervalRef.current = window.setInterval(() => {
			setSecondAngle((prev) => (prev + SECOND_DEG_PER_SECOND) % 360);
			setMinuteAngle((prev) => (prev + MINUTE_DEG_PER_SECOND) % 360);
			setHourAngle((prev) => (prev + HOUR_DEG_PER_SECOND) % 360);
		}, CLOCK_TICK_MS);
	};

	useEffect(() => {
		return () => {
			stopClock();
		};
	}, []);

	const hourTip = polarPoint(hourAngle, HOUR_HAND_LENGTH);
	const minuteTip = polarPoint(minuteAngle, MINUTE_HAND_LENGTH);
	const secondTip = polarPoint(secondAngle, SECOND_HAND_LENGTH);
	const hourTrailTip = polarPoint(hourAngle, HOUR_TRAIL_LENGTH);
	const minuteTrailTip = polarPoint(minuteAngle, MINUTE_TRAIL_LENGTH);
	const secondTrailTip = polarPoint(secondAngle, SECOND_TRAIL_LENGTH);

	const hourPath = pathFromCenter(hourTip);
	const minutePath = pathFromCenter(minuteTip);
	const secondPath = pathFromCenter(secondTip);
	const hourTrailPath = pathFromCenter(hourTrailTip);
	const minuteTrailPath = pathFromCenter(minuteTrailTip);
	const secondTrailPath = pathFromCenter(secondTrailTip);

	const handleHoverStart = () => {
		if (isHovered) return;
		setIsHovered(true);
		startClock();
	};

	const handleHoverEnd = () => {
		if (!isHovered) return;
		setIsHovered(false);
		stopClock();
		setMinuteAngle(MINUTE_BASE_ANGLE);
		setSecondAngle(SECOND_BASE_ANGLE);
		setHourAngle(HOUR_BASE_ANGLE);
	};

	return (
		<motion.svg
			key={key}
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("w-10 h-10 cursor-pointer", className)}
			onClick={() => setKey((prev) => prev + 1)}
			onHoverStart={handleHoverStart}
			onHoverEnd={handleHoverEnd}
			whileHover={{ scale: 1.08, rotate: 2 }}
			whileTap={{ scale: 0.9 }}
		>
			<defs>
				<linearGradient
					id={strokeGradientId}
					x1="18"
					y1="72"
					x2="92"
					y2="24"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="hsl(var(--foreground))" />
					<stop offset="45%" stopColor="hsl(var(--accent))" />
					<stop offset="100%" stopColor="hsl(var(--foreground))" />
				</linearGradient>
				<linearGradient
					id={fillGradientId}
					x1="40"
					y1="26"
					x2="66"
					y2="86"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="hsl(var(--accent))" />
					<stop offset="100%" stopColor="hsl(var(--foreground))" />
				</linearGradient>
				<radialGradient id={portalFillId} cx="50%" cy="40%" r="65%">
					<stop
						offset="0%"
						stopColor="hsl(var(--accent))"
						stopOpacity="0.22"
					/>
					<stop
						offset="60%"
						stopColor="hsl(var(--accent))"
						stopOpacity="0.08"
					/>
					<stop
						offset="100%"
						stopColor="hsl(var(--background))"
						stopOpacity="0"
					/>
				</radialGradient>
			</defs>

			{/* Soft fill to bind the shape together */}
			<motion.path
				d="M22 68 C 22 42 44 18 70 20 C 88 24 94 44 86 66 C 78 86 56 96 38 88 C 26 82 22 76 22 68 Z"
				fill={`url(#${portalFillId})`}
				initial={{ opacity: 0, scale: 0.92 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
			/>

			{/* Portal envelope describing the portfolio's spectrum */}
			<motion.path
				d="M22 68 C 22 42 44 18 70 20 C 88 24 94 44 86 66 C 78 86 56 96 38 88 C 26 82 22 76 22 68 Z"
				stroke={`url(#${strokeGradientId})`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
				initial="hidden"
				animate={drawVariant.visible(0)}
			/>

			{/* Data seam */}
			<motion.path
				d="M28 64 C 30 46 48 34 66 34 C 80 34 90 44 90 56 C 90 72 72 84 56 86 C 44 88 34 78 28 70"
				stroke="hsl(var(--accent))"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="6 8"
				initial="hidden"
				animate={drawVariant.visible(0.15)}
			/>

			{/* Ascender wedge (abstract A core) */}
			<motion.path
				d="M36 82 L50 26 L64 82 L58 82 L50 52 L42 82 Z"
				fill={`url(#${fillGradientId})`}
				stroke="hsl(var(--foreground))"
				strokeWidth="1.5"
				initial={{ opacity: 0, scale: 0.9, translateY: 6 }}
				animate={{ opacity: 1, scale: 1, translateY: 0 }}
				transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
			/>

			{/* K signal limbs */}
			<motion.path
				d={hourPath}
				stroke="hsl(var(--foreground))"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ d: hourPath, pathLength: 1, opacity: 0.9 }}
				transition={{
					duration: isHovered ? 0.4 : 0.35,
					ease: "linear",
				}}
			/>
			<motion.path
				d={minutePath}
				stroke="hsl(var(--accent))"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ d: minutePath, pathLength: 1, opacity: 1 }}
				transition={{
					duration: isHovered ? 0.35 : 0.4,
					ease: "linear",
				}}
			/>
			<motion.path
				d={secondPath}
				stroke="hsl(var(--accent))"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ d: secondPath, pathLength: 1, opacity: 1 }}
				transition={{
					duration: isHovered ? 0.12 : 0.25,
					ease: "linear",
				}}
			/>

			{/* Code brackets hint */}
			<motion.path
				d="M26 54 L34 54 Q30 60 34 66 L26 66"
				stroke="hsl(var(--foreground))"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ pathLength: 1, opacity: 0.6 }}
				transition={{ duration: 0.9, delay: 0.55, ease: "easeInOut" }}
			/>
			<motion.path
				d="M94 46 L86 46 Q90 52 86 58 L94 58"
				stroke="hsl(var(--foreground))"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ pathLength: 1, opacity: 0.6 }}
				transition={{ duration: 0.9, delay: 0.55, ease: "easeInOut" }}
			/>

			{/* Orbit */}
			<motion.path
				d="M24 72 C 40 94 82 96 90 54"
				stroke="hsl(var(--accent))"
				strokeWidth="2.2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="3 10"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ pathLength: 1, opacity: 0.7 }}
				transition={{ duration: 1.4, delay: 0.65, ease: "easeInOut" }}
			/>

			{/* Node cores */}
			<motion.circle
				cx="50"
				cy="56"
				r="5"
				fill="hsl(var(--accent))"
				stroke="hsl(var(--foreground))"
				strokeWidth="2"
				initial={{ scale: 0, rotate: -20 }}
				animate={
					isHovered
						? {
								scale: [1, 1.1, 1],
								rotate: 0,
						  }
						: { scale: 1, rotate: 0 }
				}
				transition={
					isHovered
						? {
								delay: 0.55,
								duration: 1.1,
								repeat: Infinity,
								repeatType: "loop",
								ease: "easeInOut",
						  }
						: {
								delay: 0.55,
								type: "spring",
								stiffness: 200,
								damping: 12,
						  }
				}
			/>
			<motion.circle
				cx="72"
				cy="38"
				r="2.8"
				fill="hsl(var(--accent))"
				initial={{ scale: 0 }}
				animate={
					isHovered
						? { scale: [1, 1.2, 1], y: [0, -2, 0] }
						: { scale: 1, y: 0 }
				}
				transition={
					isHovered
						? {
								delay: 0.75,
								duration: 1.2,
								repeat: Infinity,
								ease: "easeInOut",
						  }
						: {
								delay: 0.75,
								type: "spring",
								stiffness: 220,
								damping: 10,
						  }
				}
			/>
			<motion.circle
				cx="36"
				cy="70"
				r="2.4"
				fill="hsl(var(--foreground))"
				initial={{ scale: 0, opacity: 0 }}
				animate={
					isHovered
						? {
								scale: [1, 1.15, 1],
								opacity: [0.6, 1, 0.6],
								y: [0, -1, 0],
						  }
						: { scale: 1, opacity: 0.6, y: 0 }
				}
				transition={
					isHovered
						? {
								delay: 0.8,
								duration: 1.4,
								repeat: Infinity,
								ease: "easeInOut",
						  }
						: {
								delay: 0.8,
								type: "spring",
								stiffness: 220,
								damping: 10,
						  }
				}
			/>

			{/* Hover-only motion overlays */}
			<motion.path
				d="M28 64 C 30 46 48 34 66 34 C 80 34 90 44 90 56 C 90 72 72 84 56 86 C 44 88 34 78 28 70"
				stroke="hsl(var(--accent))"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="14 18"
				animate={
					isHovered
						? { opacity: 0.45, strokeDashoffset: -140 }
						: { opacity: 0, strokeDashoffset: 0 }
				}
				transition={
					isHovered
						? { duration: 1.6, ease: "linear", repeat: Infinity }
						: { duration: 0.2 }
				}
			/>
			<motion.path
				d="M24 72 C 40 94 82 96 90 54"
				stroke="hsl(var(--accent))"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="6 14"
				animate={
					isHovered
						? { opacity: 0.5, strokeDashoffset: -120 }
						: { opacity: 0, strokeDashoffset: 0 }
				}
				transition={
					isHovered
						? { duration: 1.4, ease: "linear", repeat: Infinity }
						: { duration: 0.2 }
				}
			/>
			<motion.path
				d={hourTrailPath}
				stroke="hsl(var(--foreground))"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="3 9"
				animate={
					isHovered
						? { opacity: 0.5, strokeDashoffset: -60 }
						: { opacity: 0, strokeDashoffset: 0 }
				}
				transition={
					isHovered
						? { duration: 1.6, ease: "linear", repeat: Infinity }
						: { duration: 0.2 }
				}
			/>
			<motion.path
				d={minuteTrailPath}
				stroke="hsl(var(--accent))"
				strokeWidth="1.4"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="2 6"
				animate={
					isHovered
						? { opacity: 0.7, strokeDashoffset: -50 }
						: { opacity: 0, strokeDashoffset: 0 }
				}
				transition={
					isHovered
						? { duration: 1.1, ease: "linear", repeat: Infinity }
						: { duration: 0.2 }
				}
			/>
			<motion.path
				d={secondTrailPath}
				stroke="hsl(var(--accent))"
				strokeWidth="1.4"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="2 6"
				animate={
					isHovered
						? { opacity: 0.7, strokeDashoffset: -50 }
						: { opacity: 0, strokeDashoffset: 0 }
				}
				transition={
					isHovered
						? {
								duration: 1.1,
								delay: 0.2,
								ease: "linear",
								repeat: Infinity,
						  }
						: { duration: 0.2 }
				}
			/>
			<motion.circle
				cx="50"
				cy="56"
				r="8"
				fill="none"
				stroke="hsl(var(--accent))"
				strokeWidth="1"
				animate={
					isHovered
						? { opacity: [0.4, 0], r: [8, 34] }
						: { opacity: 0, r: 8 }
				}
				transition={
					isHovered
						? { duration: 1.4, repeat: Infinity, ease: "easeOut" }
						: { duration: 0.2 }
				}
			/>
			<motion.circle
				cx="50"
				cy="56"
				r="12"
				fill="none"
				stroke="hsl(var(--accent))"
				strokeWidth="0.8"
				animate={
					isHovered
						? { opacity: [0.25, 0], r: [12, 44] }
						: { opacity: 0, r: 12 }
				}
				transition={
					isHovered
						? {
								duration: 1.8,
								delay: 0.2,
								repeat: Infinity,
								ease: "easeOut",
						  }
						: { duration: 0.2 }
				}
			/>
		</motion.svg>
	);
};

export default Logo;
