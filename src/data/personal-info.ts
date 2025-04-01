import type { PersonalInfo, Stat } from "@/types";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

export const personalInfo: PersonalInfo = {
	name: "Arghyadeep Karmakar",
	title: "Full Stack Developer",
	bio: "Full stack developer with expertise in building scalable applications using modern technologies such as generative AI, LLMs, and cloud services. With a strong foundation in both frontend and backend development, I create robust solutions that deliver exceptional user experiences.",
	email: "deepkarma001@gmail.com",
	phone: "+918983936295",
	location: "Mumbai, Maharashtra",
	dp: "/personal/dp.webp",
	avatar: "/personal/avatar.webp",
	resumeUrl: "/personal/resume.pdf",
};

export const aboutMeMessage = [
	"Driven by a passion for crafting elegant and efficient solutions, I specialize in building full-stack applications with a focus on clean code, user experience, and scalability.",
	"I thrive in collaborative environments and enjoy tackling complex challenges to deliver high-quality software that makes a real impact.",
];

export const stats: Stat[] = [
	{
		icon: Code,
		value: "3+",
		label: "Years of Experience",
		color: "bg-blue-500/10 text-blue-500",
	},
	{
		icon: Briefcase,
		value: "10+",
		label: "Projects Completed",
		color: "bg-purple-500/10 text-purple-500",
	},
	{
		icon: GraduationCap,
		value: "2",
		label: "Degrees",
		color: "bg-green-500/10 text-green-500",
	},
	{
		icon: Award,
		value: "5+",
		label: "Certifications",
		color: "bg-amber-500/10 text-amber-500",
	},
];
