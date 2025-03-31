import type { Experience } from "@/types";

export const experiences: Experience[] = [
	{
		id: "senior-dev",
		role: "Senior Full Stack Developer",
		company: "Tech Innovations Inc.",
		location: "San Francisco, CA",
		startDate: "Jan 2021",
		endDate: "Present",
		description:
			"Leading development of enterprise-scale applications using Next.js, Python, and AWS. Implementing CI/CD pipelines and mentoring junior developers.",
		achievements: [
			"Led a team of 5 developers to deliver a major product update that increased user engagement by 35%",
			"Implemented microservices architecture that improved system scalability and reduced deployment time by 40%",
			"Designed and implemented a CI/CD pipeline that reduced deployment errors by 60%",
			"Mentored 3 junior developers who were promoted to mid-level positions",
		],
		technologies: [
			"Next.js",
			"Python",
			"AWS",
			"Terraform",
			"PostgreSQL",
			"Docker",
			"Kubernetes",
		],
	},
	{
		id: "ml-engineer",
		role: "Machine Learning Engineer",
		company: "AI Solutions Ltd.",
		location: "Boston, MA",
		startDate: "Mar 2019",
		endDate: "Dec 2020",
		description:
			"Developed computer vision algorithms and generative AI models. Built APIs for model deployment and integration with web applications.",
		achievements: [
			"Developed a computer vision system that improved product defect detection accuracy by 25%",
			"Created a generative AI model that automated content creation, saving 20 hours per week",
			"Built a scalable API for ML model deployment that handled 1M+ requests per day",
			"Collaborated with product team to integrate AI features that increased user retention by 15%",
		],
		technologies: [
			"Python",
			"TensorFlow",
			"PyTorch",
			"FastAPI",
			"Docker",
			"AWS SageMaker",
			"OpenCV",
		],
	},
	{
		id: "backend-dev",
		role: "Backend Developer",
		company: "Data Systems Corp.",
		location: "Seattle, WA",
		startDate: "Jun 2017",
		endDate: "Feb 2019",
		description:
			"Designed and implemented scalable microservices architecture. Optimized database performance and built RESTful APIs.",
		achievements: [
			"Redesigned database schema that improved query performance by 50%",
			"Implemented caching strategy that reduced API response time by 70%",
			"Developed microservices that handled 10x increase in traffic without performance degradation",
			"Created comprehensive API documentation that reduced onboarding time for new developers",
		],
		technologies: [
			"Java",
			"Spring Boot",
			"MongoDB",
			"Kafka",
			"Kubernetes",
			"Redis",
			"Elasticsearch",
		],
	},
	{
		id: "frontend-dev",
		role: "Frontend Developer",
		company: "Web Creations",
		location: "Austin, TX",
		startDate: "Aug 2015",
		endDate: "May 2017",
		description:
			"Developed responsive web applications with modern JavaScript frameworks. Implemented state management and optimized performance.",
		achievements: [
			"Built responsive UI components that improved mobile user experience, increasing mobile traffic by 40%",
			"Implemented state management solution that simplified data flow and reduced bugs by 30%",
			"Optimized frontend performance, improving page load time by 60%",
			"Created reusable component library that accelerated development of new features",
		],
		technologies: [
			"React",
			"JavaScript",
			"Redux",
			"HTML/CSS",
			"Webpack",
			"Jest",
			"Cypress",
		],
	},
];
