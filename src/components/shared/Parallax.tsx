"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxProps {
	children: ReactNode;
	offset?: number;
	className?: string;
}

const Parallax = ({ children, offset = 50, className = "" }: ParallaxProps) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

	return (
		<div ref={ref} className={className}>
			<motion.div style={{ y }}>{children}</motion.div>
		</div>
	);
};

export default Parallax;
