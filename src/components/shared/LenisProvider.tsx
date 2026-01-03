"use client";

import Lenis from "lenis";
import { usePathname, useSearchParams } from "next/navigation";
import {
	Suspense,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useSyncExternalStore,
	type ReactNode,
} from "react";

type LenisProviderProps = {
	children: ReactNode;
};

export type LenisScrollSnapshot = {
	scroll: number;
	progress: number;
	velocity: number;
	direction: 1 | -1 | 0;
};

type LenisScrollContextValue = {
	subscribe: (listener: () => void) => () => void;
	getSnapshot: () => LenisScrollSnapshot;
	getServerSnapshot: () => LenisScrollSnapshot;
};

const DEFAULT_SNAPSHOT: LenisScrollSnapshot = {
	scroll: 0,
	progress: 0,
	velocity: 0,
	direction: 0,
};

const LenisScrollContext = createContext<LenisScrollContextValue | null>(null);

export const useLenisScroll = (): LenisScrollSnapshot => {
	const context = useContext(LenisScrollContext);
	if (!context) {
		throw new Error("useLenisScroll must be used within LenisProvider");
	}
	return useSyncExternalStore(
		context.subscribe,
		context.getSnapshot,
		context.getServerSnapshot
	);
};

function LenisProviderInner({ children }: LenisProviderProps) {
	const lenisRef = useRef<Lenis | null>(null);
	const pathname = usePathname();
	const search = useSearchParams();

	const snapshotRef = useRef<LenisScrollSnapshot>(DEFAULT_SNAPSHOT);
	const listenersRef = useRef(new Set<() => void>());

	const notify = useCallback(() => {
		listenersRef.current.forEach((listener) => listener());
	}, []);

	const updateSnapshot = useCallback(
		(next: LenisScrollSnapshot) => {
			snapshotRef.current = next;
			notify();
		},
		[notify]
	);

	const subscribe = useCallback((listener: () => void) => {
		listenersRef.current.add(listener);
		return () => {
			listenersRef.current.delete(listener);
		};
	}, []);

	const getSnapshot = useCallback(() => snapshotRef.current, []);

	const contextValue = useMemo<LenisScrollContextValue>(
		() => ({
			subscribe,
			getSnapshot,
			getServerSnapshot: getSnapshot,
		}),
		[subscribe, getSnapshot]
	);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const prefersReducedMotionQuery = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		);
		const isTouch = window.matchMedia("(pointer: coarse)").matches;

		if (prefersReducedMotionQuery.matches || isTouch) {
			const handleWindowScroll = () => {
				const scroll = window.scrollY;
				const docHeight =
					document.documentElement.scrollHeight -
						window.innerHeight || 1;
				updateSnapshot({
					scroll,
					progress: Math.min(Math.max(scroll / docHeight, 0), 1),
					velocity: 0,
					direction: 1,
				});
			};

			handleWindowScroll();
			window.addEventListener("scroll", handleWindowScroll, {
				passive: true,
			});
			return () =>
				window.removeEventListener("scroll", handleWindowScroll);
		}

		const prefersCompactScroll =
			window.matchMedia("(max-width: 768px)").matches;
		const lenis = new Lenis({
			// Snappier settings to avoid "sticky" / lag-behind scroll feel.
			lerp: prefersCompactScroll ? 0.28 : 0.2,
			duration: prefersCompactScroll ? 0.45 : 0.55,
			easing: (t) => t,
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: prefersCompactScroll ? 1 : 1.05,
			touchMultiplier: prefersCompactScroll ? 1.1 : 1.25,
			syncTouch: false,
		});

		lenisRef.current = lenis;

		const handleLenisScroll = (instance: Lenis) => {
			updateSnapshot({
				scroll: instance.scroll,
				progress: instance.progress,
				velocity: instance.velocity,
				direction: instance.direction ?? 0,
			});
		};

		lenis.on("scroll", handleLenisScroll);

		let rafId: number;

		const raf = (time: number) => {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		};

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

		if (window.location.hash) {
			setTimeout(() => scrollToHash(window.location.hash), 100);
		}

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
			lenis.off("scroll", handleLenisScroll);
			lenis.destroy();
			lenisRef.current = null;
			cancelAnimationFrame(rafId);
			document.removeEventListener("click", handleClick, true);
			window.removeEventListener("hashchange", onHashChange);
		};
	}, [updateSnapshot]);

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

	return (
		<LenisScrollContext.Provider value={contextValue}>
			{children}
		</LenisScrollContext.Provider>
	);
}

export default function LenisProvider({ children }: LenisProviderProps) {
	return (
		<Suspense fallback={null}>
			<LenisProviderInner>{children}</LenisProviderInner>
		</Suspense>
	);
}
