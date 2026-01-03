"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

interface ParallaxProps {
	children: ReactNode;
	offset?: number;
	className?: string;
}

function ParallaxMotion({
	children,
	offset,
	className,
}: Required<Pick<ParallaxProps, "children" | "offset" | "className">>) {
	const ref = useRef<HTMLDivElement | null>(null);
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
}

const Parallax = ({ children, offset = 50, className = "" }: ParallaxProps) => {
	const prefersReducedMotion = useReducedMotion();
	const [isCoarse, setIsCoarse] = useState<boolean>(() => {
		if (typeof window === "undefined") return false;
		return window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
	});

	useEffect(() => {
		if (typeof window === "undefined") return;
		const mq = window.matchMedia?.("(pointer: coarse)");
		if (!mq) return;
		const update = () => setIsCoarse(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	const disabled = useMemo(
		() => Boolean(prefersReducedMotion || isCoarse),
		[prefersReducedMotion, isCoarse]
	);

	if (disabled) {
		return <div className={className}>{children}</div>;
	}

	return (
		<ParallaxMotion className={className} offset={offset}>
			{children}
		</ParallaxMotion>
	);
};

export default Parallax;
