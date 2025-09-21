"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";

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

function coerceBrand(input: string | null | undefined): Brand {
	const allowed: Brand[] = [
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
	if (!input) return "blue";
	const lower = input.toLowerCase();
	return (allowed as string[]).includes(lower) ? (lower as Brand) : "blue";
}

export default function AccentProvider({ children }: { children: ReactNode }) {
	const [brand, setBrand] = useState<Brand>("blue");
	const brands = useMemo<Brand[]>(
		() => [
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
		],
		[]
	);

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
			brands[Math.floor(Math.random() * brands.length)];
		const initial = fromUrl || saved || randomPick;
		setBrand(initial);
		document.documentElement.dataset.brand = initial;
		document.documentElement.dataset.accent = initial; // backward compat
		window.localStorage.setItem("brand", initial);

		// expose simple toggles
		(window as any).setBrandTheme = (value: string) => {
			const next = coerceBrand(value);
			window.localStorage.setItem("brand", next);
			document.documentElement.dataset.brand = next;
			document.documentElement.dataset.accent = next;
			setBrand(next);
		};
		(window as any).setAccentTheme = (value: string) =>
			(window as any).setBrandTheme(value);
	}, []);

	return <>{children}</>;
}
