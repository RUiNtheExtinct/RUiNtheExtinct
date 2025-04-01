import type { SocialLink } from "@/types";
import {
	Github,
	Globe,
	Instagram,
	Linkedin,
	Mail,
	Twitter,
} from "lucide-react";

export const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		url: "https://github.com/RUiNtheExtinct",
		icon: Github,
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/ruintheextinct",
		icon: Linkedin,
	},
	{
		name: "Twitter",
		url: "https://twitter.com/fallacy69",
		icon: Twitter,
	},
	{
		name: "Email",
		url: "mailto:deepkarma001@gmail.com",
		icon: Mail,
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/ruin_the_extinct",
		icon: Instagram,
	},
	{
		name: "Website",
		url: "https://rte-portfolio.vercel.app",
		icon: Globe,
	},
];
