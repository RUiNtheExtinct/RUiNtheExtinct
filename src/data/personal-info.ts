import type { PersonalInfo, Stat } from "@/types";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

export const personalInfo: PersonalInfo = {
	name: "Arghyadeep Karmakar",
	title: "Full-Stack & AI Engineer",
	bio: "Full-Stack & AI Engineer with 4+ years shipping production SaaS across recruitment tech, real-time trading, and e-commerce. Proficient across the entire stack: React/Next.js frontends, Node.js/Python/Golang backends, LLM-powered services (LangChain, RAG, agentic AI), and cloud-native DevOps (AWS, GCP, Azure, Kubernetes). Track record of cutting infra costs by $500K+, boosting system performance by 40–50%, and leading architecture from zero to production.",
	email: "deepkarma001@gmail.com",
	phone: "+918983936295",
	location: "Pune, India",
	dp: "/personal/dp.webp",
	avatar: "/personal/avatar.webp",
	resumeUrl: "/personal/resume.pdf",
};

export const aboutMeMessage = [
	"I ship production SaaS end-to-end — from React/Next.js frontends to Node.js/Python/Golang backends, LLM-powered microservices, and cloud-native infrastructure on AWS, GCP, and Azure. My work spans recruitment tech, real-time trading platforms, e-commerce, and AI-driven products.",
	"I've cut cloud costs by $500K+, architected systems handling 50K+ concurrent users at sub-100ms latency, and built AI services processing thousands of requests daily at 95%+ accuracy. I'm a core contributor to open-source projects used by 50K+ developers.",
];

export const stats: Stat[] = [
	{
		icon: Code,
		value: "4+",
		label: "Years of Experience",
		color: "bg-blue-500/10 text-blue-500",
	},
	{
		icon: Briefcase,
		value: "10+",
		label: "Product Launches",
		color: "bg-purple-500/10 text-purple-500",
	},
	{
		icon: GraduationCap,
		value: "1",
		label: "B.Tech (9.3 GPA)",
		color: "bg-green-500/10 text-green-500",
	},
	{
		icon: Award,
		value: "5+",
		label: "Certifications",
		color: "bg-amber-500/10 text-amber-500",
	},
];
