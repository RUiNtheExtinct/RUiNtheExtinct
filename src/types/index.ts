import type { LucideIcon } from "lucide-react";
import { MDXProps } from "mdx/types";
import type { StaticImageData } from "next/image";
import { JSX } from "react";
import { IconType } from "react-icons";

// Personal Info Types
export interface PersonalInfo {
	name: string;
	title: string;
	bio: string;
	email: string;
	phone: string;
	location: string;
	dp: string | StaticImageData;
	avatar: string | StaticImageData;
	resumeUrl: string;
}

export interface Stat {
	icon: LucideIcon;
	value: string;
	label: string;
	color: string;
}

// Social Links Types
export interface SocialLink {
	name: string;
	url: string;
	icon: LucideIcon;
}

// Skills Types
export interface SkillCategory {
	name: string;
	icon: LucideIcon;
	skills: Skill[];
}

export interface Skill {
	name: string;
	icon: IconType;
	category:
		| "frontend"
		| "backend"
		| "devops"
		| "design"
		| "testing"
		| "database";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	description: string;
	relatedTech: string[];
}

// Project Types
export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription?: string;
	image: string | StaticImageData;
	tags: string[];
	demoUrl?: string;
	repoUrl?: string;
	featured?: boolean;
	category: string;
	date: string;
	status: string;
}

// Experience Types
// Represents a specific role or project within a company tenure
export interface ProjectExperience {
	id: string;
	role: string;
	name?: string;
	description: string;
	achievements?: string[];
	technologies: string[];
}

// Represents a continuous tenure at a single company
export interface Experience {
	id: string; // Unique ID for the tenure
	company: string;
	companyLogo?: string | StaticImageData;
	location?: string;
	startDate: string;
	endDate: string | "Present";
	// Overall achievements/tech used during the entire tenure
	achievements?: string[];
	technologies?: string[];
	// Array of specific roles/projects held during this tenure
	projects: ProjectExperience[];
}

// Education Types
export interface Education {
	id: string;
	degree: string;
	field: string;
	institution: string;
	institutionLogo?: string | StaticImageData;
	location?: string;
	startDate: string;
	endDate: string | "Present";
	description?: string;
	achievements?: string[];
	gpa?: string;
}

// Testimonial Types
export interface Testimonial {
	id: string;
	name: string;
	role: string;
	company: string;
	avatar?: string | StaticImageData;
	testimonial: string;
}

// Certificate Types
export interface Certificate {
	id: string;
	name: string;
	issuer: string;
	issuerLogo?: string | StaticImageData;
	date: string;
	url?: string;
	description?: string;
}

// Blog Post Types
export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	author: string;
	readingTime: string;
	coverImage: string;
	content?: (props: MDXProps) => JSX.Element;
	tags: string[];
	isExternal?: boolean;
	externalUrl?: string;
}
