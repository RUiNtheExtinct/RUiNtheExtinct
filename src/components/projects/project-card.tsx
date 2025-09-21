"use client";

import { track } from "@/components/shared/AnalyticsProvider";
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
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export type ProjectCardVariant = "section" | "page";

interface ProjectCardProps {
	project: Project;
	variant: ProjectCardVariant;
	index?: number;
}

export const ProjectCard = ({
	project,
	variant,
	index = 0,
}: ProjectCardProps) => {
	const isSectionVariant = variant === "section";

	const containerRef = useRef<HTMLDivElement | null>(null);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const isCoarseRef = useRef(false);

	useEffect(() => {
		const mq = window.matchMedia("(pointer: coarse)");
		const update = () => (isCoarseRef.current = mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (isCoarseRef.current) return;
			if (!containerRef.current || !cardRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const midX = rect.width / 2;
			const midY = rect.height / 2;
			const factor = 3; // max degrees
			const rawY = ((x - midX) / midX) * factor;
			const rawX = ((midY - y) / midY) * factor;
			const clamp = (v: number, min: number, max: number) =>
				Math.max(min, Math.min(max, v));
			const rotateY = clamp(rawY, -factor, factor);
			const rotateX = clamp(rawX, -factor, factor);
			cardRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
		},
		[]
	);

	const handleMouseLeave = useCallback(() => {
		if (!cardRef.current) return;
		cardRef.current.style.transform =
			"perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
	}, []);

	// Animation properties based on variant
	const animationProps = isSectionVariant
		? {
				initial: { opacity: 0, y: 20 },
				whileInView: { opacity: 1, y: 0 },
				viewport: { once: true },
				transition: { duration: 0.5, delay: index * 0.1 },
		  }
		: {
				initial: { opacity: 0, y: 10 },
				animate: { opacity: 1, y: 0 },
				transition: { duration: 0.3 },
		  };

	const statusColor = (status: string) => {
		switch (status) {
			case "completed":
				return "bg-green-500 text-white";
			case "in-progress":
				return "bg-blue-500 text-white";
			case "cancelled":
				return "bg-red-500 text-white";
			case "on-hold":
				return "bg-yellow-500 text-gray-800";
			case "planned":
				return "bg-gray-300 text-gray-800";
			default:
				return "bg-gray-300 text-gray-800";
		}
	};

	// Create card content based on variant
	if (isSectionVariant) {
		return (
			<motion.div
				{...animationProps}
				ref={containerRef}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				<Card
					ref={cardRef}
					className="group h-full overflow-hidden flex flex-col justify-between will-change-transform transition-transform duration-150"
				>
					<div className="relative aspect-video overflow-hidden">
						<Badge
							className={cn(
								statusColor(project.status),
								"absolute top-2 right-2 z-10"
							)}
						>
							{project.status}
						</Badge>
						{project.image ? (
							<div className="relative h-64 w-full overflow-hidden">
								<Image
									src={project.image as string}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									priority={false}
								/>
							</div>
						) : (
							<div className="relative h-64 w-full bg-muted/50 flex items-center justify-center">
								<div className="text-muted-foreground text-sm h-full w-full flex items-center justify-center">
									No cover image available
								</div>
							</div>
						)}
					</div>
					<CardContent className="p-6">
						<h3 className="text-xl font-semibold">
							{project.title}
						</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							{project.description}
						</p>
					</CardContent>
					<CardFooter className="p-6 pt-0 flex flex-col gap-4 items-start">
						<div className="mt-4 flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<Badge key={tag} variant="secondary">
									{tag}
								</Badge>
							))}
						</div>
						<div className="flex gap-4">
							{project.repoUrl && (
								<Button variant="outline" size="sm" asChild>
									<Link
										href={project.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
										onClick={() =>
											track("project_repo_click", {
												id: project.id,
												title: project.title,
											})
										}
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
										onClick={() =>
											track("project_demo_click", {
												id: project.id,
												title: project.title,
											})
										}
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
		);
	}

	// Page variant
	return (
		<motion.div
			{...animationProps}
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<Card
				ref={cardRef}
				className="h-full overflow-hidden flex flex-col justify-between will-change-transform transition-transform duration-150"
			>
				<>
					<div className="aspect-video overflow-hidden relative">
						<Badge
							className={cn(
								statusColor(project.status),
								"absolute top-2 right-2 z-10"
							)}
						>
							{project.status}
						</Badge>
						{project.image ? (
							<div className="relative h-64 w-full overflow-hidden">
								<Image
									src={project.image as string}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						) : (
							<div className="relative h-64 w-full bg-muted/50 flex items-center justify-center">
								<div className="text-muted-foreground text-sm h-full w-full flex items-center justify-center">
									No cover image available
								</div>
							</div>
						)}
					</div>
					<CardHeader>
						<CardTitle>{project.title}</CardTitle>
						<CardDescription>{project.description}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="mb-4 text-sm text-muted-foreground">
							{project.longDescription || project.description}
						</p>
					</CardContent>
				</>
				<CardFooter className="flex flex-col gap-4 items-start">
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
					<div className="flex flex-row gap-4 w-full">
						{project.repoUrl && (
							<Button variant="outline" size="sm" asChild>
								<Link
									href={project.repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() =>
										track("project_repo_click", {
											id: project.id,
											title: project.title,
										})
									}
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
									onClick={() =>
										track("project_demo_click", {
											id: project.id,
											title: project.title,
										})
									}
								>
									<ExternalLink className="mr-2 h-4 w-4" />
									Demo
								</Link>
							</Button>
						)}
						{!project.repoUrl && !project.demoUrl && <div></div>}
					</div>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export default ProjectCard;
