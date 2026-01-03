"use client";

import {
	motion,
	useAnimation,
	useInView,
	useReducedMotion,
	Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
	children: React.ReactNode;
	width?: "fit-content" | "100%";
	delay?: number;
	variant?: "fadeIn" | "slideUp" | "scaleUp";
	className?: string;
}

const ScrollReveal = ({
	children,
	width = "fit-content",
	delay = 0,
	variant = "slideUp",
	className = "",
}: ScrollRevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });
	const mainControls = useAnimation();
	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) return;
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls, prefersReducedMotion]);

	const variants: Record<string, Variants> = {
		fadeIn: {
			hidden: { opacity: 0 },
			visible: { opacity: 1, transition: { duration: 0.5, delay } },
		},
		slideUp: {
			hidden: { opacity: 0, y: 75 },
			visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
		},
		scaleUp: {
			hidden: { opacity: 0, scale: 0.8 },
			visible: {
				opacity: 1,
				scale: 1,
				transition: { duration: 0.5, delay },
			},
		},
	};

	return (
		<div
			ref={ref}
			style={{ position: "relative", width, overflow: "hidden" }}
			className={className}
		>
			{prefersReducedMotion ? (
				<>{children}</>
			) : (
				<motion.div
					variants={variants[variant]}
					initial="hidden"
					animate={mainControls}
				>
					{children}
				</motion.div>
			)}
		</div>
	);
};

export default ScrollReveal;
