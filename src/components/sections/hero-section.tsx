"use client";

import ProfileImageEffect from "@/components/hero/ProfileImageEffect";
import { track } from "@/components/shared/AnalyticsProvider";
import Reveal from "@/components/shared/Reveal";
import ScrambleText from "@/components/typography/ScrambleText";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { Electrolize } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroFont = Electrolize({
	weight: "400",
	subsets: ["latin"],
});

const HeroBackground = dynamic(
	() => import("@/components/hero/HeroBackground"),
	{ ssr: false }
);

const HeroSection = () => {
	const [showBg, setShowBg] = useState(false);

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

	return (
		<section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_60%)]"></div>
			{showBg ? <HeroBackground /> : null}
			<div className="container px-4 md:px-6">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35 }}
						className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4"
					>
						<Reveal>
							<div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
								{personalInfo.title}
							</div>
						</Reveal>
						<Reveal delay={0.06}>
							<h1
								className={`${heroFont.className} text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl`}
							>
								Hi, I'm {personalInfo.name.split(" ")[0]}{" "}
								<ScrambleText
									text={personalInfo.name.split(" ")[1]}
									className="text-brand-gradient animate-brand-gradient"
									duration={720}
									chance={1}
								/>
								<span className="ml-2 inline-block h-[1em] w-[2px] align-[-0.1em] bg-foreground/80 animate-[caret-blink_1.2s_steps(1)_infinite]" />
							</h1>
						</Reveal>
						<Reveal delay={0.12}>
							<p
								className={`${heroFont.className} max-w-[600px] text-muted-foreground sm:text-lg md:text-xl`}
							>
								{personalInfo.bio}
							</p>
						</Reveal>

						<div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
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
							<Button
								variant="outline"
								size="lg"
								asChild
								className="w-full sm:w-auto"
							>
								<Link
									href={personalInfo.resumeUrl || "#"}
									target="_blank"
									rel="noopener noreferrer"
								>
									<ArrowRight className="mr-2 h-4 w-4" /> View
									Resume
								</Link>
							</Button>
						</div>

						<Reveal delay={0.24}>
							<div className="flex space-x-4 pt-4 justify-center lg:justify-start">
								{socialLinks.map((link) => (
									<Link
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground transition-colors hover:text-primary"
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
						</Reveal>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, delay: 0.15 }}
						className="flex justify-center mt-6 lg:mt-0"
					>
						<ProfileImageEffect
							imageSrc={
								personalInfo.dp || "/placeholder-avatar.jpg"
							}
							imageAlt={`${personalInfo.name}'s Profile Picture`}
							className="w-[280px] sm:w-[340px] md:w-[380px] lg:w-full lg:max-w-[420px]"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
