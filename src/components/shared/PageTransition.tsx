"use client";

import { ensureGsapRegistered, gsap } from "@/lib/gsap";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

export default function PageTransition() {
	const pathname = usePathname();
	const barRef = useRef<HTMLDivElement>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	const isReduced = useMemo(
		() =>
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches,
		[]
	);

	useEffect(() => {
		ensureGsapRegistered();
		if (!barRef.current) return;

		const bar = barRef.current;
		const tl = gsap.timeline({ paused: true });

		tl.set(bar, {
			scaleX: 0,
			transformOrigin: "0% 50%",
			opacity: 1,
			display: "block",
		})
			.to(bar, { scaleX: 1, duration: 0.35, ease: "power2.out" })
			.to(bar, {
				scaleX: 0,
				transformOrigin: "100% 50%",
				duration: 0.45,
				ease: "power2.inOut",
			});

		tlRef.current = tl;

		return () => {
			tl.kill();
			tlRef.current = null;
		};
	}, []);

	useEffect(() => {
		if (isReduced) return;
		tlRef.current?.restart();
	}, [pathname, isReduced]);

	return (
		<div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
			<div
				ref={barRef}
				className="h-[3px] w-full origin-left scale-x-0"
				style={{
					background:
						"linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--ring)) 100%)",
					display: "none",
				}}
			/>
		</div>
	);
}
