import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Projects | Full Stack Developer Portfolio",
	description: "Explore my projects and work as a Full Stack Developer",
};

export default function ProjectsPage() {
	return (
		<div className="container mx-auto px-4 py-12">
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
					<Card key={project.id} className="h-full overflow-hidden">
						<div className="aspect-video overflow-hidden">
							<Image
								src={project.image || "/placeholder.svg"}
								alt={project.title}
								width={600}
								height={400}
								className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
							/>
						</div>
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>
								{project.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="mb-4 text-sm text-muted-foreground">
								{project.longDescription || project.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<Badge
										key={tag}
										variant="secondary"
										className="text-xs"
									>
										{tag}
									</Badge>
								))}
							</div>
						</CardContent>
						<CardFooter className="flex justify-between">
							{project.repoUrl && (
								<Button variant="outline" size="sm" asChild>
									<Link
										href={project.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
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
										rel="noopener noreferrer"
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										Demo
									</Link>
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
