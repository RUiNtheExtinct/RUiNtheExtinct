"use client";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden py-20 md:py-28">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>
			<div className="container px-4 md:px-6">
				<div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col items-start space-y-4"
					>
						<div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
							{personalInfo.title}
						</div>
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
							Hi, I'm {personalInfo.name.split(" ")[0]}{" "}
							<span className="text-primary">
								{personalInfo.name.split(" ")[1]}
							</span>
						</h1>
						<p className="max-w-[600px] text-muted-foreground md:text-xl">
							{personalInfo.bio}
						</p>

						<div className="flex flex-wrap gap-3">
							<Button asChild size="lg">
								<Link href="#contact">
									Contact Me{" "}
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button variant="outline" size="lg">
								<Download className="mr-2 h-4 w-4" /> Download
								Resume
							</Button>
						</div>

						<div className="mt-6 flex items-center space-x-4">
							{socialLinks.map((link) => (
								<Button
									key={link.name}
									variant="ghost"
									size="icon"
									asChild
								>
									<Link
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<link.icon className="h-5 w-5" />
										<span className="sr-only">
											{link.name}
										</span>
									</Link>
								</Button>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex justify-center lg:justify-end"
					>
						<div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-primary/20 sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]">
							<Image
								src={personalInfo.avatar || "/placeholder.svg"}
								alt={personalInfo.name}
								fill
								className="object-cover"
								priority
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
