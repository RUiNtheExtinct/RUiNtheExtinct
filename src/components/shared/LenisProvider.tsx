"use client";

import Lenis from "lenis";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode, Suspense, useEffect, useRef } from "react";

type LenisProviderProps = {
	children: ReactNode;
};

function LenisProviderInner({ children }: LenisProviderProps) {
	const lenisRef = useRef<Lenis | null>(null);
	const pathname = usePathname();
	const search = useSearchParams();

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		const isTouch = window.matchMedia("(pointer: coarse)").matches;

		if (prefersReducedMotion || isTouch) return; // Optional: disable on touch devices if desired

		const prefersCompactScroll = window.matchMedia("(max-width: 768px)").matches;
		const lenis = new Lenis({
			lerp: prefersCompactScroll ? 0.12 : 0.09,
			duration: prefersCompactScroll ? 0.8 : 1,
			easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: prefersCompactScroll ? 0.85 : 0.95,
			smoothTouch: false,
			touchMultiplier: prefersCompactScroll ? 1.1 : 1.25,
			syncTouch: true,
		});

		lenisRef.current = lenis;

		let rafId: number;

		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}

		rafId = requestAnimationFrame(raf);

		const getHeaderOffset = () => {
			const header = document.querySelector("header");
			return header ? header.getBoundingClientRect().height + 8 : 0;
		};

		const scrollToHash = (hash: string) => {
			if (!hash) return;
			const id = hash.replace(/^#/, "");
			const el = document.getElementById(id);
			if (!el) return;
			const offset = -getHeaderOffset();
			lenis.scrollTo(el, { offset });
		};

		// Scroll on initial hash
		if (window.location.hash) {
			// Timeout to ensure content is loaded/layout is settled
			setTimeout(() => scrollToHash(window.location.hash), 100);
		}

		// Intercept same-page anchor clicks
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;
			const anchor = target.closest("a") as HTMLAnchorElement | null;
			if (!anchor) return;
			const hrefAttr = anchor.getAttribute("href") || "";
			if (!hrefAttr.includes("#")) return;

			const url = new URL(anchor.href, window.location.href);
			const samePath = url.pathname === window.location.pathname;
			const hash = url.hash;
			if (samePath && hash) {
				e.preventDefault();
				if (hash !== window.location.hash) {
					history.pushState({}, "", hash);
				}
				scrollToHash(hash);
			}
		};

		const onHashChange = () => scrollToHash(window.location.hash);

		document.addEventListener("click", handleClick, true);
		window.addEventListener("hashchange", onHashChange);

		return () => {
			lenis.destroy();
			lenisRef.current = null;
			cancelAnimationFrame(rafId);
			document.removeEventListener("click", handleClick, true);
			window.removeEventListener("hashchange", onHashChange);
		};
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const hash = window.location.hash;
		if (!hash) return;
		const id = hash.replace(/^#/, "");
		const el = document.getElementById(id);
		const header = document.querySelector("header");
		const offset = header
			? -(header.getBoundingClientRect().height + 8)
			: 0;
		if (!el) return;
		if (lenisRef.current) {
			requestAnimationFrame(() =>
				lenisRef.current!.scrollTo(el, { offset })
			);
		} else {
			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)"
			).matches;
			const y = el.getBoundingClientRect().top + window.scrollY + offset;
			window.scrollTo({
				top: y,
				behavior: prefersReducedMotion ? "auto" : "smooth",
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, search]);

	return <>{children}</>;
}

export default function LenisProvider({ children }: LenisProviderProps) {
	return (
		<Suspense fallback={null}>
			<LenisProviderInner>{children}</LenisProviderInner>
		</Suspense>
	);
}
