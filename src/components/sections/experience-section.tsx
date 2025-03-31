"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { experiences } from "@/data/experience";
import { ProjectExperience } from "@/types";
import { motion } from "framer-motion";
import {
	Calendar,
	CheckCircle,
	ExternalLink,
	Layers,
	MapPin,
} from "lucide-react";
import Link from "next/link";

const MAX_EXPERIENCES_SHOWN = 3;

const ExperienceSection = () => {
	const displayedExperiences = experiences.slice(0, MAX_EXPERIENCES_SHOWN);

	const getUniqueRoles = (projects: ProjectExperience[]): string[] => {
		const roles = projects.map((p) => p.role);
		return Array.from(new Set(roles));
	};

	return (
		<section id="work-experience" className="py-16 md:py-24">
			<div className="container px-4 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Work Experience
					</h2>
					<div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
					<p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
						Highlights of my professional journey and key roles.
					</p>
				</motion.div>

				<div className="relative space-y-8">
					<div className="absolute left-0 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-0.5"></div>

					{displayedExperiences.map((experience, index) => {
						const uniqueRoles = getUniqueRoles(experience.projects);
						return (
							<motion.div
								key={experience.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className="relative md:flex"
							>
								<div className="absolute left-0 top-4 hidden h-4 w-4 -translate-x-[7px] rounded-full border-4 border-background bg-primary md:left-1/2 md:block"></div>

								<div
									className={`md:w-1/2 ${
										index % 2 === 0
											? "md:pr-8"
											: "md:pl-8 md:ml-auto"
									}`}
								>
									<Card className="shadow-md transition-shadow hover:shadow-lg bg-card/80 backdrop-blur-sm">
										<CardHeader>
											<div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
												<div>
													<CardTitle className="flex items-center">
														{experience.company}
													</CardTitle>
													<CardDescription className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs">
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
															{
																experience.startDate
															}{" "}
															-{" "}
															{experience.endDate}
														</span>
													</CardDescription>
												</div>
												{uniqueRoles.length > 0 && (
													<Badge
														variant="secondary"
														className="w-fit flex-shrink-0 whitespace-nowrap"
													>
														<Layers className="mr-1 h-3 w-3" />
														{uniqueRoles.length > 1
															? `${uniqueRoles.length} Roles`
															: uniqueRoles[0]}
													</Badge>
												)}
											</div>
										</CardHeader>
										<CardContent className="space-y-4">
											{experience.achievements &&
												experience.achievements.length >
													0 && (
													<div className="space-y-1">
														{experience.achievements
															.slice(0, 2)
															.map(
																(
																	ach,
																	achIndex
																) => (
																	<p
																		key={
																			achIndex
																		}
																		className="flex items-start text-xs text-muted-foreground"
																	>
																		<CheckCircle className="mr-1.5 h-3 w-3 mt-0.5 flex-shrink-0 text-primary/80" />
																		{ach}
																	</p>
																)
															)}
													</div>
												)}

											{experience.technologies &&
												experience.technologies.length >
													0 && (
													<div className="flex flex-wrap gap-1">
														{experience.technologies
															.slice(0, 6)
															.map((tech) => (
																<Badge
																	key={tech}
																	variant="outline"
																	className="text-xs px-1.5 py-0.5"
																>
																	{tech}
																</Badge>
															))}
														{experience.technologies
															.length > 6 && (
															<Badge
																variant="outline"
																className="text-xs px-1.5 py-0.5"
															>
																+
																{experience
																	.technologies
																	.length - 6}
															</Badge>
														)}
													</div>
												)}
										</CardContent>
									</Card>
								</div>
							</motion.div>
						);
					})}
				</div>

				<div className="mt-12 text-center">
					<Button asChild variant="outline">
						<Link href="/experience">
							View Full Experience History
							<ExternalLink className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
