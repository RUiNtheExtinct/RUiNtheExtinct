"use client";

import { ReactNode, useEffect, useRef } from "react";

type Brand =
	| "blue"
	| "green"
	| "violet"
	| "amber"
	| "pink"
	| "cyan"
	| "indigo"
	| "teal"
	| "rose"
	| "lime"
	| "orange"
	| "fuchsia";

const BRANDS: Brand[] = [
	"blue",
	"green",
	"violet",
	"amber",
	"pink",
	"cyan",
	"indigo",
	"teal",
	"rose",
	"lime",
	"orange",
	"fuchsia",
];

function coerceBrand(input: string | null | undefined): Brand {
	if (!input) return "blue";
	const lower = input.toLowerCase();
	return BRANDS.includes(lower as Brand) ? (lower as Brand) : "blue";
}

export default function AccentProvider({ children }: { children: ReactNode }) {
	// Use ref instead of state to avoid re-rendering children
	const brandRef = useRef<Brand>("blue");

	useEffect(() => {
		const saved = coerceBrand(
			typeof window !== "undefined"
				? (window.localStorage.getItem("brand") as Brand | null) ||
						(window.localStorage.getItem("accent") as Brand | null)
				: null
		);

		const url = new URL(window.location.href);
		const urlParam =
			url.searchParams.get("brand") || url.searchParams.get("accent");
		const fromUrl =
			urlParam && urlParam !== "random" ? coerceBrand(urlParam) : null;

		const randomPick: Brand =
			BRANDS[Math.floor(Math.random() * BRANDS.length)];
		const initial = fromUrl || saved || randomPick;
		brandRef.current = initial;
		document.documentElement.dataset.brand = initial;
		document.documentElement.dataset.accent = initial; // backward compat
		window.localStorage.setItem("brand", initial);

		// expose simple toggles (updates DOM directly, no re-render)
		(window as any).setBrandTheme = (value: string) => {
			const next = coerceBrand(value);
			window.localStorage.setItem("brand", next);
			document.documentElement.dataset.brand = next;
			document.documentElement.dataset.accent = next;
			brandRef.current = next;
		};
		(window as any).setAccentTheme = (value: string) =>
			(window as any).setBrandTheme(value);
	}, []);

	return <>{children}</>;
}
