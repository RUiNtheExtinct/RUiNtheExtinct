import { createTimeline, stagger, type AnimationParams } from "animejs";
import { useEffect, type RefObject } from "react";

type HeroSequence =
	| "signal"
	| "title"
	| "body"
	| "cta"
	| "stat"
	| "social"
	| "portrait";

const selector = (name: HeroSequence) => `[data-hero-seq='${name}']`;

export const useHeroIntroMotion = (
	rootRef: RefObject<HTMLElement | null>
): void => {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		);
		if (prefersReducedMotion.matches) return;

		const root = rootRef.current;
		if (!root) return;

		const tl = createTimeline({
			autoplay: true,
		});

		const addStep = (
			name: HeroSequence,
			definition: AnimationParams,
			offset?: string | number
		) => {
			const nodes = Array.from(root.querySelectorAll(selector(name)));
			if (!nodes.length) return;

			tl.add(nodes, {
				duration: 460,
				opacity: [0, 1],
				translateY: [18, 0],
				delay: stagger(60),
				...definition,
			}, offset);
		};

		addStep("signal", { duration: 380, translateY: [12, 0] }, 0);
		addStep(
			"title",
			{
				duration: 520,
				translateY: [24, 0],
				ease: "easeOutExpo",
			},
			120
		);
		addStep(
			"body",
			{
				duration: 420,
				translateY: [18, 0],
				opacity: [0, 0.9],
			},
			"-=260"
		);
		addStep(
			"cta",
			{
				duration: 360,
				translateY: [12, 0],
				delay: stagger(80),
			},
			"-=380"
		);

		addStep(
			"stat",
			{
				duration: 480,
				translateY: [26, 0],
				delay: stagger(70),
			},
			"-=340"
		);

		addStep(
			"social",
			{
				duration: 380,
				scale: [0.95, 1],
				opacity: [0, 0.95],
			},
			"-=260"
		);

		addStep(
			"portrait",
			{
				duration: 620,
				scale: [0.92, 1],
				translateY: [30, 0],
				ease: "easeOutExpo",
			},
			"-=420"
		);

		return () => {
			tl.revert();
		};
	}, [rootRef]);
};

