import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Projects | Full Stack Developer Portfolio",
	description: "Explore my projects and work as a Full Stack Developer",
};

export default function ProjectsPage() {
	return (
		<div className="container min-h-svh h-full mx-auto px-4 py-12">
			<div className="mb-8">
				<Link
					href="/"
					className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
				>
					<ArrowLeft className="mr-1 h-4 w-4" />
					Back to Home
				</Link>
			</div>

			<div className="mb-12">
				<h1 className="text-4xl font-bold tracking-tight">
					My Projects
				</h1>
				<p className="mt-4 text-muted-foreground">
					A comprehensive collection of my work across various
					technologies and domains. Each project demonstrates
					different skills and approaches to solving problems.
				</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						variant="page"
					/>
				))}
			</div>
		</div>
	);
}
