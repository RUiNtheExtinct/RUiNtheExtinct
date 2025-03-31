"use client";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle, MapPin } from "lucide-react";

const ExperienceSection = () => {
	return (
		<section id="experience" className="py-16 md:py-24 bg-muted/30">
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
						My professional journey and the companies I've worked
						with. Each role has contributed to my growth as a
						developer and problem solver.
					</p>
				</motion.div>

				<div className="relative space-y-8">
					{/* Timeline line */}
					<div className="absolute left-0 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block"></div>

					{experiences.map((experience, index) => (
						<motion.div
							key={experience.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative md:flex"
						>
							{/* Timeline dot */}
							<div className="absolute left-0 top-0 hidden h-4 w-4 -translate-x-1.5 rounded-full border-4 border-background bg-primary md:left-1/2 md:block"></div>

							{/* Content positioning */}
							<div
								className={`md:w-1/2 ${
									index % 2 === 0
										? "md:pr-12"
										: "md:pl-12 md:ml-auto"
								}`}
							>
								<Card>
									<CardHeader>
										<div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
											<div>
												<CardTitle className="flex items-center">
													<Briefcase className="mr-2 h-5 w-5 text-primary" />
													{experience.role}
												</CardTitle>
												<CardDescription className="flex items-center mt-1">
													{experience.company}
												</CardDescription>
											</div>
										</div>
									</CardHeader>
									<CardContent>
										<div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
											<div className="flex items-center">
												<Calendar className="mr-1 h-4 w-4" />
												{experience.startDate} -{" "}
												{experience.endDate}
											</div>
											{experience.location && (
												<div className="flex items-center">
													<MapPin className="mr-1 h-4 w-4" />
													{experience.location}
												</div>
											)}
										</div>

										<p className="mb-4 text-muted-foreground">
											{experience.description}
										</p>

										{experience.achievements &&
											experience.achievements.length >
												0 && (
												<div className="mb-4">
													<h4 className="mb-2 font-medium">
														Key Achievements
													</h4>
													<ul className="space-y-2">
														{experience.achievements.map(
															(
																achievement,
																i
															) => (
																<li
																	key={i}
																	className="flex items-start"
																>
																	<CheckCircle className="mr-2 h-4 w-4 text-primary mt-1" />
																	<span className="text-sm text-muted-foreground">
																		{
																			achievement
																		}
																	</span>
																</li>
															)
														)}
													</ul>
												</div>
											)}

										<div className="flex flex-wrap gap-2">
											{experience.technologies.map(
												(tech) => (
													<Badge
														key={tech}
														variant="secondary"
														className="text-xs"
													>
														{tech}
													</Badge>
												)
											)}
										</div>
									</CardContent>
								</Card>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
