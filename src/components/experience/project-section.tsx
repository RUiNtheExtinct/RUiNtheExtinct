import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ProjectExperience } from "@/types";
import { Briefcase, CheckCircle, FileText } from "lucide-react";

const ProjectSection = ({
	role,
	projectsInRole,
}: {
	role: string;
	projectsInRole: ProjectExperience[];
}) => {
	return (
		<AccordionItem
			key={role}
			value={role}
			className="border-b border-border/50"
		>
			<AccordionTrigger className="text-left hover:no-underline py-3">
				<span className="flex items-center text-base font-medium">
					<Briefcase className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
					{role}
				</span>
			</AccordionTrigger>
			<AccordionContent className="pt-4 pb-2 pl-8">
				{projectsInRole.map((project, projIndex) => (
					<div
						key={`${project.id}-${projIndex}`}
						className={`space-y-4 ${
							projIndex > 0
								? "mt-4 pt-4 border-t border-border/30"
								: ""
						}`}
					>
						{project.name && (
							<h5 className="flex items-center text-sm font-semibold text-foreground">
								<FileText className="mr-1.5 h-4 w-4 text-primary/70 flex-shrink-0" />
								{project.name}
							</h5>
						)}

						<p className="text-sm text-muted-foreground">
							{project.description}
						</p>

						{project.achievements &&
							project.achievements.length > 0 && (
								<div className="space-y-2">
									<h5 className="text-sm font-medium text-muted-foreground">
										Achievements:
									</h5>
									<ul className="space-y-1.5 pl-4">
										{project.achievements.map(
											(achievement, i) => (
												<li
													key={i}
													className="flex items-start"
												>
													<CheckCircle className="mr-2 h-4 w-4 text-primary mt-1 flex-shrink-0 text-purple-600 dark:text-green-500" />
													<span className="text-xs text-muted-foreground">
														{achievement}
													</span>
												</li>
											)
										)}
									</ul>
								</div>
							)}

						{project.technologies &&
							project.technologies.length > 0 && (
								<div className="space-y-2">
									<h5 className="text-sm font-medium text-muted-foreground">
										Technologies:
									</h5>
									<div className="flex flex-wrap gap-1.5">
										{project.technologies.map((tech) => (
											<Badge
												key={tech}
												variant="secondary"
												className="text-xs"
											>
												{tech}
											</Badge>
										))}
									</div>
								</div>
							)}
					</div>
				))}
			</AccordionContent>
		</AccordionItem>
	);
};

export default ProjectSection;
