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
			<AccordionTrigger className="text-left hover:no-underline py-2 md:py-3">
				<span className="flex items-center text-sm md:text-base font-medium">
					<Briefcase className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary flex-shrink-0" />
					{role}
				</span>
			</AccordionTrigger>
			<AccordionContent className="pt-3 md:pt-4 pb-2 pl-5 md:pl-8">
				{projectsInRole.map((project, projIndex) => (
					<div
						key={`${project.id}-${projIndex}`}
						className={`space-y-3 md:space-y-4 ${
							projIndex > 0
								? "mt-3 pt-3 md:mt-4 md:pt-4 border-t border-border/30"
								: ""
						}`}
					>
						{project.name && (
							<h5 className="flex items-center text-xs md:text-sm font-semibold text-foreground">
								<FileText className="mr-1 md:mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4 text-primary/70 flex-shrink-0" />
								{project.name}
							</h5>
						)}

						<p className="text-xs md:text-sm text-muted-foreground">
							{project.description}
						</p>

						{project.achievements &&
							project.achievements.length > 0 && (
								<div className="space-y-1.5 md:space-y-2">
									<h5 className="text-xs md:text-sm font-medium text-muted-foreground">
										Achievements:
									</h5>
									<ul className="space-y-1 md:space-y-1.5 pl-2 md:pl-4">
										{project.achievements.map(
											(achievement, i) => (
												<li
													key={i}
													className="flex items-start"
												>
													<CheckCircle className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0 text-purple-600 dark:text-green-500" />
													<span className="text-xs md:text-xs text-muted-foreground">
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
								<div className="space-y-1.5 md:space-y-2">
									<h5 className="text-xs md:text-sm font-medium text-muted-foreground">
										Technologies:
									</h5>
									<div className="flex flex-wrap gap-1 md:gap-1.5">
										{project.technologies.map((tech) => (
											<Badge
												key={tech}
												variant="secondary"
												className="text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-0.5"
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
