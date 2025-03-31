import { personalInfo } from "@/data/personal-info";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
			<div className="container flex h-16 items-center space-x-4 px-4 md:px-6">
				<Link href="/" className="mr-6 flex items-center space-x-2">
					{/* Optional: Add a logo or initials */}
					<span className="font-bold">
						{personalInfo.name.split(" ")[0]}
					</span>
				</Link>
				<nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
					<Link
						href="#about"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						About
					</Link>
					<Link
						href="#skills"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Skills
					</Link>
					<Link
						href="#projects"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Projects
					</Link>
					<Link
						href="#experience"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Experience
					</Link>
					<Link
						href="#contact"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						Contact
					</Link>
				</nav>
				<div className="flex flex-1 items-center justify-end space-x-4">
					{/* Add Theme Toggle Button */}
					<ThemeToggle />
					{/* Optional: Add other buttons like social links or resume */}
				</div>
				{/* Add Mobile Menu Toggle here if needed */}
			</div>
		</header>
	);
};

export default Header;
