"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ScrambleTextProps = {
	text: string;
	className?: string;
	/** ms */
	duration?: number;
	/** Trigger scramble on hover/focus (default). If false, call scramble() manually via ref. */
	hover?: boolean;
	/** If provided, called when the scramble completes */
	onComplete?: () => void;
	/** Probability [0..1] to trigger on hover/focus. Default: 0.4 */
	chance?: number;
};

const CHARS =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$%&".split(
		""
	);

export default function ScrambleText({
	text,
	className,
	duration = 720,
	hover = true,
	onComplete,
	chance = 0.5,
}: ScrambleTextProps) {
	const [display, setDisplay] = useState<string>(text);
	const animRef = useRef<number | null>(null);
	const startRef = useRef<number>(0);
	const lastRunRef = useRef<number>(0);
	const isRunningRef = useRef(false);
	const textRef = useRef(text);
	const seedRef = useRef(Math.random() * 1000);

	useEffect(() => {
		textRef.current = text;
		setDisplay(text);
	}, [text]);

	const scramble = useCallback(() => {
		if (isRunningRef.current) return;
		const now = performance.now();
		if (now - lastRunRef.current < 400) return; // cooldown to avoid spam
		lastRunRef.current = now;
		isRunningRef.current = true;
		startRef.current = now;
		seedRef.current = Math.random() * 1000; // new pattern each run

		const target = textRef.current;
		const len = target.length;
		const jitter = 0.18; // small per-character jitter to avoid harsh left-to-right
		// stable delays for this run, mostly left-to-right with slight randomness
		const delays: number[] = Array.from({ length: len }, (_, i) => {
			if (target[i] === " ") return 0;
			const base = len > 1 ? i / (len - 1) : 0;
			const r = Math.abs(
				Math.sin((i + 1) * 7.13 + seedRef.current * 1.23)
			);
			const v = base + (r - 0.5) * jitter;
			return Math.max(0, Math.min(1, v));
		});

		const shuffleMs = 80; // update scrambled glyphs at discrete steps for smoother feel

		const run = () => {
			const elapsed = performance.now() - startRef.current;
			const p = Math.min(1, elapsed / duration);
			const eased = 0.5 - 0.5 * Math.cos(Math.PI * p); // easeInOutSine for smoother flow
			const tick = Math.floor(elapsed / shuffleMs);

			let out = "";
			for (let i = 0; i < len; i++) {
				const ch = target[i];
				if (ch === " ") {
					out += ch;
					continue;
				}
				if (eased >= delays[i]) {
					out += ch;
				} else {
					// seeded pseudo-random glyph, changes at discrete ticks
					const u = Math.abs(
						Math.sin(
							(i + 1) * 134.97 +
								(tick + 1) * 19.17 +
								seedRef.current * 0.123
						)
					);
					out += CHARS[Math.floor(u * CHARS.length) % CHARS.length];
				}
			}
			setDisplay(out);

			if (p < 1) {
				animRef.current = requestAnimationFrame(run);
			} else {
				isRunningRef.current = false;
				setDisplay(target);
				onComplete?.();
			}
		};

		animRef.current = requestAnimationFrame(run);
	}, [duration, onComplete]);

	useEffect(
		() => () => {
			if (animRef.current) cancelAnimationFrame(animRef.current);
		},
		[]
	);

	const maybeScramble = useCallback(() => {
		if (Math.random() <= chance) scramble();
	}, [chance, scramble]);

	return (
		<span
			className={className}
			onMouseEnter={hover ? maybeScramble : undefined}
			onFocus={hover ? maybeScramble : undefined}
		>
			{display}
		</span>
	);
}
