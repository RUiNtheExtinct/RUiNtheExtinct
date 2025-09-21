"use client";

import { track } from "@/components/shared/AnalyticsProvider";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

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

export default function BrandToggle() {
	const [brand, setBrand] = useState<Brand>("blue");
	const brands: Brand[] = useMemo(
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
		const current =
			(document.documentElement.dataset.brand as Brand) ||
			(window.localStorage.getItem("brand") as Brand | null) ||
			"blue";
		setBrand(current);
	}, []);

	const applyBrand = (next: Brand) => {
		if (typeof (window as any).setBrandTheme === "function") {
			(window as any).setBrandTheme(next);
		} else {
			window.localStorage.setItem("brand", next);
			document.documentElement.dataset.brand = next;
			document.documentElement.dataset.accent = next;
		}
		setBrand(next);
		track("brand_select", { brand: next });
	};

	const swatchClass = (b: Brand) =>
		((
			{
				blue: "bg-sky-500",
				green: "bg-emerald-500",
				violet: "bg-violet-500",
				amber: "bg-amber-500",
				pink: "bg-pink-500",
				cyan: "bg-cyan-500",
				indigo: "bg-indigo-500",
				teal: "bg-teal-500",
				rose: "bg-rose-500",
				lime: "bg-lime-500",
				orange: "bg-orange-500",
				fuchsia: "bg-fuchsia-500",
			} as Record<Brand, string>
		)[b]);

	// Compact spinner logic
	const [spinning, setSpinning] = useState(false);
	const [previewBrand, setPreviewBrand] = useState<Brand | null>(null);
	const spinTimeoutRef = useRef<number | null>(null);
	const [hovered, setHovered] = useState(false);
	const [paletteOpen, setPaletteOpen] = useState(false);
	const allowOpenRef = useRef(false);

	const stopAllTimers = () => {
		if (spinTimeoutRef.current) {
			window.clearTimeout(spinTimeoutRef.current);
			spinTimeoutRef.current = null;
		}
	};

	const spin = () => {
		if (spinning) return;
		track("brand_spin_start", { brand });
		setSpinning(true);
		const total = 12 + Math.floor(Math.random() * 9); // 12-20 steps
		let step = 0;
		let idx = Math.max(0, brands.indexOf(brand));
		const start = performance.now();

		const tick = () => {
			const progress = step / total;
			const delay = 35 + progress * 85; // slower flicker, gentle ease-out
			idx = (idx + 1) % brands.length;
			const b = brands[idx];
			setPreviewBrand(b);
			step += 1;
			if (step <= total) {
				spinTimeoutRef.current = window.setTimeout(
					tick,
					delay
				) as unknown as number;
			} else {
				setSpinning(false);
				setPreviewBrand(null);
				applyBrand(b);
				track("brand_spin_stop", {
					brand: b,
					durationMs: Math.round(performance.now() - start),
					steps: total,
				});
			}
		};

		tick();
	};

	return (
		<Popover
			open={paletteOpen}
			onOpenChange={(v) => {
				if (v && !allowOpenRef.current) {
					setPaletteOpen(false);
					return;
				}
				setPaletteOpen(v);
				if (v) track("brand_palette_open");
				allowOpenRef.current = false;
			}}
		>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					aria-label={`Switch brand (current: ${brand})`}
					className="relative h-8 w-8 p-0 grid place-items-center hover:bg-transparent"
					onClick={() => {
						if (!paletteOpen) spin();
					}}
					onContextMenu={(e) => {
						e.preventDefault();
						allowOpenRef.current = true;
						setPaletteOpen(true);
						track("brand_palette_open_context");
					}}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<span className="sr-only">Spin brand</span>
					{/* spinning ring tinted on hover */}
					<span
						className={`absolute inset-0 rounded-full border-t-2 ${
							spinning
								? "animate-spin"
								: hovered
								? "animate-[spin_4s_linear_infinite]"
								: ""
						}`}
						style={{
							borderTopColor: "hsl(var(--foreground) / 0.35)",
						}}
					/>
					{/* inner puck shows preview/current brand color */}
					<span
						aria-hidden
						className={`h-4 w-4 rounded-full ${swatchClass(
							previewBrand || brand
						)} ${spinning ? "scale-110" : ""} transition-transform`}
					/>
					{!spinning && (
						<Sparkles className="absolute -bottom-1 right-0 h-3 w-3 text-foreground/40" />
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent align="center" className="w-56">
				<div className="grid grid-cols-4 gap-3 place-items-center">
					{brands.slice(0, 12).map((b) => (
						<button
							key={b}
							onClick={() => {
								applyBrand(b);
								setPaletteOpen(false);
								track("brand_palette_pick", { brand: b });
							}}
							title={b}
							className={`h-6 w-6 rounded-full ${swatchClass(
								b
							)} ${
								brand === b ? "ring-2 ring-foreground/40" : ""
							}`}
						/>
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
}
