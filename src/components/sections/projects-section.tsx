"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
	return (
		<section id="projects" className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Featured Projects
					</h2>
					<div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
					<p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
						Showcase of my best work and personal projects
					</p>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="group h-full overflow-hidden">
								<div className="relative aspect-video overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-semibold">
										{project.title}
									</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										{project.description}
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{project.tags.map((tech) => (
											<Badge
												key={tech}
												variant="secondary"
											>
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
								<CardFooter className="p-6 pt-0">
									<div className="flex gap-4">
										{project.repoUrl && (
											<Button
												variant="outline"
												size="sm"
												asChild
											>
												<Link
													href={project.repoUrl}
													target="_blank"
												>
													<Github className="mr-2 h-4 w-4" />
													Code
												</Link>
											</Button>
										)}
										{project.demoUrl && (
											<Button size="sm" asChild>
												<Link
													href={project.demoUrl}
													target="_blank"
												>
													<ExternalLink className="mr-2 h-4 w-4" />
													Live Demo
												</Link>
											</Button>
										)}
									</div>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>

				<div className="mt-12 text-center">
					<Button asChild size="lg">
						<Link href="/projects">
							View All Projects
							<ExternalLink className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
