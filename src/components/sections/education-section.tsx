"use client";

import Reveal from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { education } from "@/data/education";
import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => {
	return (
		<section id="education" className="py-16 md:py-24">
			<div className="container px-4 md:px-6">
				<Reveal className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Education
					</h2>
					<div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
					<p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
						My academic background and professional certifications
						that have shaped my knowledge and skills.
					</p>
				</Reveal>

				<div className="space-y-8">
					{education.map((edu, index) => (
						<motion.div
							key={edu.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.35, delay: index * 0.08 }}
						>
							<Card>
								<CardHeader>
									<div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
										<div>
											<CardTitle className="flex items-center">
												<GraduationCap className="mr-2 h-5 w-5 text-primary" />
												{edu.degree} in {edu.field}
											</CardTitle>
											<CardDescription className="flex items-center mt-1">
												{edu.institution}
											</CardDescription>
										</div>
										<Badge
											variant="outline"
											className="w-fit"
										>
											{edu.startDate} - {edu.endDate}
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
										{edu.location && (
											<div className="flex items-center">
												<MapPin className="mr-1 h-4 w-4" />
												{edu.location}
											</div>
										)}
										{edu.gpa && (
											<div className="flex items-center">
												<Award className="mr-1 h-4 w-4" />
												GPA: {edu.gpa}
											</div>
										)}
									</div>

									{edu.description && (
										<p className="mb-4 text-muted-foreground">
											{edu.description}
										</p>
									)}

									{edu.achievements &&
										edu.achievements.length > 0 && (
											<div className="mb-4">
												<h4 className="mb-2 font-medium">
													Achievements & Activities
												</h4>
												<ul className="space-y-1">
													{edu.achievements.map(
														(achievement, i) => (
															<li
																key={i}
																className="flex items-start"
															>
																<span className="mr-2 text-primary">
																	•
																</span>
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
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EducationSection;
