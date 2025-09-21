"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

type Props = {
	slug: string;
	label?: string;
	className?: string;
	floating?: boolean;
	heightPx?: number;
	opacity?: number; // 0-100 initial opacity to be less intrusive
};

export default function BuyMeACoffeeImageButton({
	slug,
	label = "Buy me a coffee",
	className,
	floating = false,
	heightPx = 40,
	opacity = 70,
}: Props) {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const imageSrc = useMemo(() => {
		// Use BMC-provided button images and switch for theme
		const base = "https://cdn.buymeacoffee.com/buttons/v2";
		if (resolvedTheme === "dark") return `${base}/default-white.png`;
		if (resolvedTheme === "light") return `${base}/default-black.png`;
		return `${base}/default-yellow.png`;
	}, [resolvedTheme]);

	const containerClasses = cn(
		floating ? "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50" : "",
		"transition-all duration-200",
		// Subtle by default, fully visible on hover or focus
		"opacity-70 hover:opacity-100 focus-within:opacity-100",
		className
	);

	return (
		<a
			href={`https://www.buymeacoffee.com/${slug}`}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			className={containerClasses}
		>
			{/* Avoid theme mismatch until mounted */}
			<img
				src={
					mounted
						? imageSrc
						: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
				}
				alt={label}
				style={{ height: `${heightPx}px`, width: "auto" }}
			/>
		</a>
	);
}
