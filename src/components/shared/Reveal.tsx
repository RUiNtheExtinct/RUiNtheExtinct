"use client";

import { ensureGsapRegistered, gsap } from "@/lib/gsap";
import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";

type RevealProps = {
	children: ReactNode;
	/** Delay in seconds */
	delay?: number;
	/** Offset trigger start, e.g. "top 85%" */
	start?: string;
	/** One-time animation (default: true) */
	once?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Reveal({
	children,
	delay = 0,
	start = "top 85%",
	once = true,
	className,
	...rest
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ensureGsapRegistered();

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		if (prefersReducedMotion) return;

		if (!ref.current) return;

		const element = ref.current;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				element,
				{ y: 24, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					ease: "power3.out",
					delay,
					scrollTrigger: {
						trigger: element,
						start,
						once,
						toggleActions: "play none none reverse",
					},
				}
			);
		}, element);

		return () => ctx.revert();
	}, [delay, once, start]);

	return (
		<div ref={ref} className={className} {...rest}>
			{children}
		</div>
	);
}
