import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div>
						<h3 className="mb-4 text-lg font-semibold">
							Made with ❤️ by {personalInfo.name}
						</h3>
					</div>

					<div>
						<h3 className="mb-4 text-lg font-semibold">
							Quick Links
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/#about"
									className="text-muted-foreground hover:text-foreground"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/#projects"
									className="text-muted-foreground hover:text-foreground"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/#work-experience"
									className="text-muted-foreground hover:text-foreground"
								>
									Experience
								</Link>
							</li>
							<li>
								<Link
									href="/#contact-me-name"
									className="text-muted-foreground hover:text-foreground"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-lg font-semibold">Contact</h3>
						<ul className="space-y-2 text-sm">
							<li className="text-muted-foreground">
								{personalInfo.email}
							</li>
							<li className="text-muted-foreground">
								{personalInfo.phone}
							</li>
							<li className="text-muted-foreground">
								{personalInfo.location}
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
					<p className="mb-4 text-sm text-muted-foreground md:mb-0">
						&copy; {currentYear} {personalInfo.name}. All rights
						reserved.
					</p>

					<div className="flex space-x-4">
						{socialLinks.map((link) => (
							<Link
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground"
							>
								<link.icon className="h-5 w-5" />
								<span className="sr-only">{link.name}</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
