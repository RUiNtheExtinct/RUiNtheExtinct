"use client";

import { track } from "@/components/shared/AnalyticsProvider";
import Logo from "@/components/shared/Logo";
import Magnetic from "@/components/shared/Magnetic";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BrandToggle from "./brand-toggle";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
	{ href: "/#about", label: "About" },
	{ href: "/#work-experience", label: "Experience" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/#projects", label: "Projects" },
	{ href: "/#education", label: "Education" },
	{ href: "/#testimonials", label: "Testimonials" },
	{ href: "/#certificates", label: "Certificates" },
	{ href: "/blog", label: "Blog" },
	{ href: "/#contact", label: "Contact" },
];

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("");

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Close on Escape and prevent background scroll when open
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsMenuOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		if (isMenuOpen) {
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "";
		}
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			document.documentElement.style.overflow = "";
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const observerCallback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id;
					setActiveSection(id);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);

		// Observe all sections
		navLinks.forEach((link) => {
			const id = link.href.split("#")[1];
			if (id) {
				const element = document.getElementById(id);
				if (element) {
					observer.observe(element);
				}
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const doc = document.documentElement;

		const applyScrollbarTheme = () => {
			const styles = getComputedStyle(doc);
			const getValue = (prop: string, fallback: string) => {
				const value = styles.getPropertyValue(prop).trim();
				return value.length ? value : fallback;
			};

			const background = getValue("--background", "0 0% 100%");
			const accent = getValue("--accent", "217 91% 60%");

			doc.style.setProperty("--scrollbar-track-color", `hsl(${background})`);
			doc.style.setProperty(
				"--scrollbar-thumb-color",
				`hsl(${accent} / 0.6)`
			);
			doc.style.setProperty(
				"--scrollbar-thumb-hover-color",
				`hsl(${accent} / 0.85)`
			);
			doc.style.setProperty("--scrollbar-thumb-outline", `hsl(${background})`);
		};

		applyScrollbarTheme();

		const observer = new MutationObserver(applyScrollbarTheme);
		observer.observe(doc, {
			attributes: true,
			attributeFilter: ["class", "data-brand", "data-accent"],
		});

		const onStorage = () => applyScrollbarTheme();
		window.addEventListener("storage", onStorage);

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const supportsEventListener = typeof media.addEventListener === "function";
		if (supportsEventListener) {
			media.addEventListener("change", applyScrollbarTheme);
		} else if (typeof media.addListener === "function") {
			media.addListener(applyScrollbarTheme);
		}

		return () => {
			observer.disconnect();
			window.removeEventListener("storage", onStorage);
			if (supportsEventListener) {
				media.removeEventListener("change", applyScrollbarTheme);
			} else if (typeof media.removeListener === "function") {
				media.removeListener(applyScrollbarTheme);
			}
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 z-40 w-full transition-all duration-300",
				scrolled
					? "border-b bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/20 py-2 shadow-sm"
					: "bg-transparent py-4"
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<Link
						href="/"
						className="flex items-center space-x-2 relative group"
					>
						<Logo className="h-8 w-8" />
						<span className="text-lg font-semibold">
							{personalInfo.name}
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex md:items-center md:space-x-8">
						{navLinks.map((link) => {
							const id = link.href.split("#")[1];
							const isActive = id === activeSection;
							return (
								<Magnetic key={link.href} strength={20}>
									<Link
										href={link.href}
										className={cn(
											"text-sm font-medium transition-colors",
											isActive
												? "text-primary"
												: "text-muted-foreground hover:text-primary"
										)}
										onClick={() => {
											track("nav_click", {
												link: link.href,
											});
										}}
									>
										{link.label}
									</Link>
								</Magnetic>
							);
						})}
						<BrandToggle />
						<ModeToggle />
					</nav>

					{/* Mobile Navigation Toggle */}
					<div className="flex md:hidden">
						<BrandToggle />
						<ModeToggle />
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleMenu}
							className="ml-2"
							aria-label="Toggle navigation"
						>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation Menu (overlay) */}
				{isMenuOpen && (
					<>
						{/* scrim */}
						<button
							className="md:hidden fixed inset-0 z-30 bg-background/20 backdrop-blur supports-[backdrop-filter]:bg-background/40"
							aria-label="Close menu"
							onClick={() => setIsMenuOpen(false)}
						/>
						{/* panel */}
						<div className="md:hidden absolute left-0 right-0 top-full z-40">
							<div className="container mx-auto px-4">
								<nav className="rounded-md border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md p-4 flex flex-col space-y-2">
									{navLinks.map((link) => {
										const id = link.href.split("#")[1];
										const isActive = id === activeSection;
										return (
											<Link
												key={link.href}
												href={link.href}
												className={cn(
													"py-2 text-sm font-medium transition-colors",
													isActive
														? "text-primary"
														: "text-muted-foreground hover:text-primary"
												)}
												onClick={() =>
													setIsMenuOpen(false)
												}
											>
												{link.label}
											</Link>
										);
									})}
								</nav>
							</div>
						</div>
					</>
				)}
			</div>
		</header>
	);
};

export default Navigation;
