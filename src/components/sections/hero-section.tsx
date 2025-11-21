"use client";

import ProfileImageEffect from "@/components/hero/ProfileImageEffect";
import { track } from "@/components/shared/AnalyticsProvider";
import { useLenisScroll } from "@/components/shared/LenisProvider";
import Magnetic from "@/components/shared/Magnetic";
import ScrambleText from "@/components/typography/ScrambleText";
import { Button } from "@/components/ui/button";
import { personalInfo, stats } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";
import { useHeroIntroMotion } from "@/hooks/useHeroIntroMotion";
import { cn } from "@/lib/utils";
import {
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import { ArrowRight, Radio } from "lucide-react";
import dynamic from "next/dynamic";
import { Electrolize } from "next/font/google";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const heroFont = Electrolize({
	weight: "400",
	subsets: ["latin"],
});

const ThreeBackground = dynamic(
	() => import("@/components/hero/ThreeBackground"),
	{ ssr: false }
);

const heroHighlights = stats.slice(0, 2);
const contactDetails = [
	{ label: "Role", value: personalInfo.title },
	{ label: "Location", value: personalInfo.location },
	{
		label: "Email",
		value: personalInfo.email,
		href: `mailto:${personalInfo.email}`,
	},
];

const HeroSection = () => {
	const [showBg, setShowBg] = useState(false);
	const sectionRef = useRef<HTMLElement | null>(null);
	const lenisState = useLenisScroll();

	useEffect(() => {
		if (typeof window === "undefined") return;
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		if (prefersReducedMotion) return;
		const enable = () => setShowBg(true);
		if ("requestIdleCallback" in window) {
			(window as any).requestIdleCallback(enable);
		} else {
			setTimeout(enable, 1200);
		}
	}, []);

	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 520], [0, -250]);
	const y2 = useTransform(scrollY, [0, 520], [0, -140]);
	const lenisProgress = lenisState.progress ?? 0;
	const lenisSignedVelocity =
		(lenisState.velocity ?? 0) * (lenisState.direction ?? 1);

	const progressValue = useMotionValue(lenisProgress);

	useEffect(() => {
		progressValue.set(lenisProgress);
	}, [lenisProgress, progressValue]);

	const smoothProgress = useSpring(progressValue, {
		stiffness: 55,
		damping: 20,
		mass: 0.4,
	});

	const backgroundLift = useTransform(
		smoothProgress,
		(value) => (value - 0.5) * 120
	);
	const gridDrift = useTransform(smoothProgress, (value) => value * -90);
	const glowDrift = useTransform(smoothProgress, (value) => value * 140);
	const portraitParallax = useTransform(
		smoothProgress,
		(value) => (value - 0.5) * 80
	);

	const [firstName, lastName] = useMemo(() => {
		const parts = personalInfo.name.split(" ");
		return [parts[0], parts.slice(1).join(" ")];
	}, []);

	useHeroIntroMotion(sectionRef);

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden py-16 sm:py-20 md:py-28 min-h-[90vh] flex items-center select-none"
		>
			<motion.div
				className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(var(--primary-rgb),0.08),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.8),_transparent_70%)]"
				aria-hidden="true"
				style={{ y: backgroundLift }}
			/>
			<motion.div
				className="absolute inset-0 -z-10 opacity-70 mix-blend-screen bg-[linear-gradient(120deg,rgba(var(--primary-rgb),0.12),transparent_45%),linear-gradient(-120deg,rgba(255,255,255,0.08),transparent_40%)]"
				aria-hidden="true"
				style={{ y: gridDrift }}
			/>
			<motion.div
				className="absolute inset-0 -z-10 pointer-events-none"
				aria-hidden="true"
				style={{ y: glowDrift }}
			>
				<div className="hero-grid-overlay" />
				<div className="hero-noise-overlay" />
			</motion.div>
			{showBg ? (
				<ThreeBackground
					scrollProgress={lenisProgress}
					velocity={lenisSignedVelocity}
				/>
			) : null}
			<div className="container px-4 md:px-6 relative z-10 select-none">
				<div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_minmax(0,0.9fr)]">
					<motion.div
						style={{ y: y1 }}
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						className="flex flex-col justify-center space-y-8 text-center lg:text-left"
					>
						<div
							className="flex flex-col gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
							data-hero-seq="signal"
						>
							<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-4 py-1 text-[0.65rem] font-semibold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/80">
								<Radio className="h-3.5 w-3.5 text-emerald-400" />
								Available for select product teams
							</div>
							<p className="text-[0.65rem] tracking-[0.35em]">
								Based in {personalInfo.location} • Remote-first
							</p>
						</div>

						<div className="space-y-6">
							<h1
								className={cn(
									heroFont.className,
									"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
								)}
								data-hero-seq="title"
							>
								<span className="text-muted-foreground">
									Hi, I'm{" "}
								</span>
								{firstName}{" "}
								<ScrambleText
									text={lastName}
									className="text-brand-gradient animate-brand-gradient"
									duration={840}
									chance={1}
								/>
								<span className="ml-2 inline-block h-[1em] w-[2px] align-[-0.1em] bg-foreground/80 animate-[caret-blink_1.2s_steps(1)_infinite]" />
							</h1>
							<p
								className={cn(
									heroFont.className,
									"max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground/90"
								)}
								data-hero-seq="body"
							>
								{personalInfo.bio}
							</p>
						</div>

						<div className="space-y-5">
							<div
								className="flex flex-wrap items-center gap-3"
								data-hero-seq="cta"
							>
								<Magnetic>
									<Button
										asChild
										size="lg"
										className="w-full sm:w-auto"
									>
										<Link
											href="/#contact-me-name"
											onClick={() =>
												track("cta_click", {
													cta: "get_in_touch",
												})
											}
										>
											Contact Me{" "}
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</Magnetic>
								<Magnetic>
									<Button
										variant="outline"
										size="lg"
										asChild
										className="w-full border-border/60 bg-background/30 sm:w-auto"
										data-hero-seq="cta"
									>
										<Link
											href={personalInfo.resumeUrl || "#"}
											target="_blank"
											rel="noopener noreferrer"
										>
											View Resume
										</Link>
									</Button>
								</Magnetic>
							</div>

							<div
								className="grid gap-4 text-left sm:grid-cols-2"
								data-hero-seq="stat"
							>
								{heroHighlights.map((stat) => (
									<div
										key={stat.label}
										className="rounded-2xl border border-border/40 bg-background/80 p-4 backdrop-blur"
									>
										<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
											{stat.label}
										</p>
										<p className="text-3xl font-semibold">
											{stat.value}
										</p>
									</div>
								))}
							</div>
						</div>

						<div
							className="flex flex-wrap items-center gap-4 text-muted-foreground"
							data-hero-seq="social"
						>
							<span className="text-xs uppercase tracking-[0.3em]">
								Connect
							</span>
							{socialLinks.map((link) => (
								<Link
									key={link.name}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground/80 transition-colors hover:text-primary"
									onClick={() =>
										track("social_click", {
											name: link.name,
										})
									}
									aria-label={link.name}
								>
									<link.icon className="h-5 w-5 sm:h-6 sm:w-6" />
								</Link>
							))}
						</div>
					</motion.div>

					<motion.div
						style={{ y: y2 }}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.6,
							delay: 0.15,
							ease: "easeOut",
						}}
						className="relative flex h-full items-center justify-center"
					>
						<motion.div
							className="relative w-full max-w-[480px]"
							data-hero-seq="portrait"
							style={{ y: portraitParallax }}
						>
							<div className="absolute inset-0 rounded-[32px] border border-white/20 bg-gradient-to-br from-white/15 to-transparent blur-2xl" />
							<div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(var(--primary-rgb),0.25),_transparent_70%)] blur-3xl" />
							<div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-background/60 to-background/20 p-6 backdrop-blur-2xl dark:border-white/5 dark:from-white/5 dark:to-white/0">
								<ProfileImageEffect
									imageSrc={
										personalInfo.dp ||
										"/placeholder-avatar.jpg"
									}
									imageAlt={`${personalInfo.name}'s Profile Picture`}
									className="w-full max-w-[420px]"
								/>
								<div className="mt-6 space-y-4 text-left">
									<dl className="space-y-3 text-sm">
										{contactDetails.map((detail) => (
											<div
												key={detail.label}
												className="flex items-center justify-between gap-4 border-b border-border/40 pb-2"
											>
												<dt className="text-xs uppercase tracking-[0.35em] text-muted-foreground/80">
													{detail.label}
												</dt>
												<dd className="text-foreground font-medium">
													{detail.href ? (
														<Link
															href={detail.href}
															className="hover:text-primary"
														>
															{detail.value}
														</Link>
													) : (
														detail.value
													)}
												</dd>
											</div>
										))}
									</dl>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
