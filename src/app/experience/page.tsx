import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { experiences } from "@/data/experience";
import {
	ArrowLeft,
	Briefcase,
	Calendar,
	CheckCircle,
	MapPin,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Experience | Full Stack Developer Portfolio",
	description:
		"My professional experience and career journey as a Full Stack Developer",
};

export default function ExperiencePage() {
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
					Work Experience
				</h1>
				<p className="mt-4 text-muted-foreground">
					My professional journey and the companies I've worked with.
					Each role has contributed to my growth as a developer and
					problem solver.
				</p>
			</div>

			<div className="space-y-8">
				{experiences.map((experience) => (
					<Card key={experience.id}>
						<CardHeader>
							<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
								<div>
									<CardTitle className="flex items-center">
										<Briefcase className="mr-2 h-5 w-5 text-primary" />
										{experience.role}
									</CardTitle>
									<CardDescription className="flex items-center mt-1">
										{experience.company}
									</CardDescription>
								</div>
								<Badge variant="outline" className="w-fit">
									{experience.startDate} -{" "}
									{experience.endDate}
								</Badge>
							</div>
						</CardHeader>
						<CardContent>
							<div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
								{experience.location && (
									<div className="flex items-center">
										<MapPin className="mr-1 h-4 w-4" />
										{experience.location}
									</div>
								)}
								<div className="flex items-center">
									<Calendar className="mr-1 h-4 w-4" />
									{experience.startDate} -{" "}
									{experience.endDate}
								</div>
							</div>

							<p className="mb-6 text-muted-foreground">
								{experience.description}
							</p>

							{experience.achievements &&
								experience.achievements.length > 0 && (
									<div className="mb-6">
										<h4 className="mb-3 text-lg font-medium">
											Key Achievements
										</h4>
										<ul className="space-y-3">
											{experience.achievements.map(
												(achievement, i) => (
													<li
														key={i}
														className="flex items-start"
													>
														<CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
														<span className="text-muted-foreground">
															{achievement}
														</span>
													</li>
												)
											)}
										</ul>
									</div>
								)}

							<div>
								<h4 className="mb-3 text-lg font-medium">
									Technologies Used
								</h4>
								<div className="flex flex-wrap gap-2">
									{experience.technologies.map((tech) => (
										<Badge key={tech} variant="secondary">
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
