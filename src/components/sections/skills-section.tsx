"use client";

import Reveal from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories, skills } from "@/data/skills";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

	const levelColors = {
		beginner: "bg-sky-500/10 text-sky-500 border-sky-500/20",
		intermediate: "bg-amber-500/10 text-amber-500 border-amber-500/20",
		advanced: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
		expert: "bg-violet-500/10 text-violet-500 border-violet-500/20",
	};

	const filteredSkills =
		activeCategory === "all"
			? skills
			: skills.filter((skill) => skill.category === activeCategory);

	const displayedSkills = filteredSkills.slice(0, visibleItems);
	const hasMore = visibleItems < filteredSkills.length;

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -10 },
	};

	return (
		<section id="skills" className="py-16 md:py-24">
			<div className="container px-4 md:px-6">
				<Reveal className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Skills & Expertise
					</h2>
					<div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
					<p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
						My technical skills and areas of expertise in software
						development
					</p>
				</Reveal>

				<div className="mb-8 flex flex-wrap justify-center gap-2">
					<Button
						variant={activeCategory === "all" ? "default" : "ghost"}
						size="sm"
						onClick={() => {
							setActiveCategory("all");
							setVisibleItems(ITEMS_PER_PAGE);
						}}
						className="rounded-full"
					>
						All Skills
					</Button>
					{categories.map((category) => (
						<Button
							key={category.name}
							size="sm"
							variant={
								activeCategory === category.name.toLowerCase()
									? "default"
									: "ghost"
							}
							onClick={() => {
								setActiveCategory(category.name.toLowerCase());
								setVisibleItems(ITEMS_PER_PAGE);
							}}
							className="rounded-full"
						>
							{category.name}
						</Button>
					))}
				</div>

				<motion.div
					layout
					className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				>
					{displayedSkills.length === 0 ? (
						<motion.div
							className="col-span-full text-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<p className="text-sm text-muted-foreground">
								No skills available for this category.
							</p>
						</motion.div>
					) : (
						<AnimatePresence initial={false}>
							{displayedSkills.map((skill) => (
								<motion.div
									key={`${activeCategory}-${skill.name}`}
									layout
									variants={itemVariants}
									initial="hidden"
									animate="visible"
									exit="exit"
									transition={{
										duration: 0.3,
										ease: "easeInOut",
									}}
								>
									<Card className="group h-full hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm hover:scale-[1.02]">
										<CardContent className="p-5">
											<div className="flex items-center gap-3">
												<div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
													<skill.icon className="w-5 h-5 text-primary" />
												</div>
												<div>
													<h3 className="font-semibold text-sm md:text-base">
														{skill.name}
													</h3>
													<Badge
														variant="secondary"
														className={`mt-1 text-xs px-2 py-0.5 border ${
															levelColors[
																skill.level
															]
														}`}
													>
														{skill.level}
													</Badge>
												</div>
											</div>
											{skill.relatedTech && (
												<div className="mt-3 flex flex-wrap gap-1">
													{skill.relatedTech
														.slice(0, 3)
														.map((tech) => (
															<Badge
																key={tech}
																variant="outline"
																className="text-xs px-2 py-0.5"
															>
																{tech}
															</Badge>
														))}
												</div>
											)}
										</CardContent>
									</Card>
								</motion.div>
							))}
						</AnimatePresence>
					)}
				</motion.div>

				{hasMore && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="mt-8 text-center"
					>
						<Button
							variant="outline"
							onClick={() =>
								setVisibleItems((prev) => prev + ITEMS_PER_PAGE)
							}
							className="gap-2"
						>
							Show More <ChevronDown className="h-4 w-4" />
						</Button>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default SkillsSection;
