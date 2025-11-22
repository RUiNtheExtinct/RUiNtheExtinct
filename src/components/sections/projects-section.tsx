"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../projects/project-card";

const ProjectsSection = () => {
	return (
		<section id="projects" className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4 md:px-6 flex flex-col items-center justify-center">
				<ScrollReveal className="mb-12 text-center" variant="slideUp">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Featured Projects
					</h2>
					<div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
					<p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
						Showcase of my best work and personal projects
					</p>
				</ScrollReveal>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects
						.filter((project) => project.featured)
						.map((project, index) => (
							<ScrollReveal
								key={project.id}
								width="100%"
								delay={index * 0.1}
								variant="scaleUp"
								className="h-full"
							>
								<ProjectCard
									project={project}
									variant="section"
									index={index}
								/>
							</ScrollReveal>
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
