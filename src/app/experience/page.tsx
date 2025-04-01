"use client";

import ProjectSection from "@/components/experience/project-section";
import TimelineItem from "@/components/experience/timeline-item";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { experiences } from "@/data/experience";
import type { ProjectExperience } from "@/types";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Sparkles, Tags } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const groupProjectsByRole = (projects: ProjectExperience[]) => {
	return projects.reduce<Record<string, ProjectExperience[]>>(
		(acc, project) => {
			if (!acc[project.role]) {
				acc[project.role] = [];
			}
			acc[project.role].push(project);
			return acc;
		},
		{}
	);
};

export default function ExperiencePage() {
	const [activeItemId, setActiveItemId] = useState<string | null>(null);
	const [mouseY, setMouseY] = useState<number | null>(null);
	const timelineContainerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (timelineContainerRef.current) {
			const rect = timelineContainerRef.current.getBoundingClientRect();
			setMouseY(event.clientY - rect.top);
		}
	};

	const handleMouseLeave = () => {
		setMouseY(null);
	};

	return (
		<div className="container mx-auto px-4 py-8 md:py-20">
			<div className="mb-6 md:mb-8">
				<Link
					href="/#work-experience"
					className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
				>
					<ArrowLeft className="mr-1 h-4 w-4" />
					Back to Portfolio
				</Link>
			</div>

			<div className="mb-8 md:mb-12 max-w-3xl">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tight">
					Work Experience
				</h1>
				<p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
					A detailed timeline of my professional journey, roles, and
					key contributions at each company.
				</p>
			</div>

			<div
				ref={timelineContainerRef}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				className="relative space-y-0"
			>
				<motion.div
					className="absolute left-0 md:left-4 w-8 md:w-12 h-24 md:h-32 rounded-full bg-primary/30 dark:bg-primary/20 blur-2xl pointer-events-none -translate-x-1/2"
					animate={{
						top: mouseY !== null ? mouseY - 64 : -200,
						opacity: mouseY !== null ? 1 : 0,
					}}
					transition={{
						type: "tween",
						ease: "backOut",
						duration: 0.5,
					}}
				/>

				{experiences.map((experience, index) => {
					const groupedProjects = groupProjectsByRole(
						experience.projects
					);

					return (
						<TimelineItem
							key={experience.id}
							isActive={activeItemId === experience.id}
						>
							<div
								onMouseEnter={() =>
									setActiveItemId(experience.id)
								}
								onMouseLeave={() => setActiveItemId(null)}
							>
								<Card className="shadow-sm bg-card/90 backdrop-blur-sm transition-shadow duration-300 hover:shadow-md">
									<CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
										<div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
											<div>
												<CardTitle className="text-lg md:text-xl">
													{experience.company}
												</CardTitle>
												<CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs sm:text-sm">
													{experience.location && (
														<span className="flex items-center">
															<MapPin className="mr-1 h-3 w-3" />
															{
																experience.location
															}
														</span>
													)}
													<span className="flex items-center">
														<Calendar className="mr-1 h-3 w-3" />
														{experience.startDate} -{" "}
														{experience.endDate}
													</span>
												</CardDescription>
											</div>
										</div>
									</CardHeader>
									<CardContent className="space-y-4 md:space-y-6 px-4 sm:px-6 pb-4 sm:pb-6">
										{experience.achievements &&
											experience.achievements.length >
												0 && (
												<div className="space-y-2 rounded-lg border border-dashed border-border/50 p-3 md:p-4">
													<h4 className="flex items-center font-medium text-muted-foreground text-sm md:text-base">
														<Sparkles className="mr-2 h-4 w-4 text-primary/80 flex-shrink-0" />
														Overall Contributions
													</h4>
													<ul className="space-y-1.5 pl-4 md:pl-6 list-disc list-outside">
														{experience.achievements.map(
															(
																achievement,
																i
															) => (
																<li
																	key={i}
																	className="text-xs md:text-sm text-muted-foreground"
																>
																	{
																		achievement
																	}
																</li>
															)
														)}
													</ul>
												</div>
											)}

										{(experience.achievements ||
											experience.technologies) &&
											experience.projects.length > 0 && (
												<hr className="border-border/50" />
											)}

										{experience.projects.length > 0 && (
											<div>
												<h4 className="mb-2 md:mb-3 text-base md:text-lg font-semibold">
													Roles & Projects
												</h4>
												<Accordion
													type="multiple"
													className="w-full"
												>
													{Object.entries(
														groupedProjects
													).map(
														([
															role,
															projectsInRole,
														]) => (
															<ProjectSection
																key={role}
																role={role}
																projectsInRole={
																	projectsInRole
																}
															/>
														)
													)}
												</Accordion>
											</div>
										)}

										{experience.technologies &&
											experience.technologies.length >
												0 && (
												<div>
													<div className="space-y-2">
														<h4 className="flex items-center font-medium text-muted-foreground text-sm md:text-base">
															<Tags className="mr-2 h-4 w-4 text-primary/80 flex-shrink-0" />
															Key Skills Applied
															(Overall)
														</h4>
														<div className="flex flex-wrap gap-1.5 md:gap-2">
															{experience.technologies.map(
																(tech) => (
																	<Badge
																		key={
																			tech
																		}
																		variant="outline"
																		className="text-xs"
																	>
																		{tech}
																	</Badge>
																)
															)}
														</div>
													</div>
												</div>
											)}
									</CardContent>
								</Card>
							</div>
						</TimelineItem>
					);
				})}
			</div>
		</div>
	);
}
