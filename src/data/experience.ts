import type { Experience } from "@/types";

export const experiences: Experience[] = [
	{
		id: "tech-innovations-present",
		company: "Tech Innovations Inc.",
		location: "San Francisco, CA",
		startDate: "Jan 2021",
		endDate: "Present",
		achievements: [
			"Contributed to a 50% growth in the engineering team.",
			"Played a key role in securing Series B funding through technical presentations.",
			"Consistently recognized for strong leadership and mentorship.",
		],
		technologies: [
			"Leadership",
			"Mentorship",
			"System Architecture",
			"Cloud Infrastructure (AWS)",
			"CI/CD",
			"Agile Methodologies",
		],
		projects: [
			{
				id: "ti-lead-dev",
				role: "Lead Full Stack Developer",
				name: "Project Phoenix (Flagship Suite Overhaul)",
				description:
					"Leading architecture design and development for flagship product suite. Mentoring senior and mid-level engineers, defining technical roadmap, and collaborating with product management.",
				achievements: [
					"Spearheaded migration to a serverless architecture, reducing infrastructure costs by 30% while improving scalability.",
					"Established company-wide coding standards and best practices for Next.js and Python development.",
					"Led the successful launch of three major product features, resulting in a 25% increase in ARR.",
				],
				technologies: [
					"Next.js",
					"TypeScript",
					"Python",
					"FastAPI",
					"AWS Lambda",
					"Serverless Framework",
					"Terraform",
					"PostgreSQL",
					"System Design",
				],
			},
			{
				id: "ti-senior-dev",
				role: "Senior Full Stack Developer",
				name: "Enterprise Dashboard V2",
				description:
					"Developed key features for enterprise-scale applications using Next.js, Python, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
				achievements: [
					"Led a team of 5 developers to deliver a major product update that increased user engagement by 35%",
					"Implemented microservices architecture that improved system scalability and reduced deployment time by 40%",
					"Designed and implemented a CI/CD pipeline using GitHub Actions that reduced deployment errors by 60%",
					"Mentored 3 junior developers who were promoted to mid-level positions",
				],
				technologies: [
					"Next.js",
					"Python",
					"AWS (EC2, S3, RDS)",
					"Terraform",
					"PostgreSQL",
					"Docker",
					"Kubernetes",
					"GitHub Actions",
				],
			},
		],
	},
	{
		id: "ai-solutions-ml",
		company: "AI Solutions Ltd.",
		location: "Boston, MA",
		startDate: "Mar 2019",
		endDate: "Dec 2020",
		achievements: [
			"Presented research findings at internal tech talks.",
			"Contributed to open-source ML libraries used by the team.",
		],
		technologies: [
			"Machine Learning",
			"Deep Learning",
			"API Development",
			"Data Analysis",
		],
		projects: [
			{
				id: "ais-ml-engineer",
				role: "Machine Learning Engineer",
				description:
					"Developed computer vision algorithms (defect detection) and generative AI models (content creation). Built and deployed scalable APIs for model integration.",
				achievements: [
					"Developed a computer vision system improving defect detection accuracy by 25%.",
					"Created a generative AI model automating content creation, saving 20 hours/week.",
					"Built a scalable FastAPI API for ML model deployment handling 1M+ requests/day.",
					"Collaborated with product team to integrate AI features increasing user retention by 15%.",
				],
				technologies: [
					"Python",
					"TensorFlow",
					"PyTorch",
					"FastAPI",
					"Docker",
					"AWS SageMaker",
					"OpenCV",
					"Scikit-learn",
				],
			},
		],
	},
	{
		id: "data-systems-backend",
		company: "Data Systems Corp.",
		location: "Seattle, WA",
		startDate: "Jun 2017",
		endDate: "Feb 2019",
		achievements: [
			"Improved overall system reliability by implementing robust monitoring.",
			"Participated in cross-functional teams for feature planning.",
		],
		technologies: [
			"Backend Development",
			"Database Design",
			"Distributed Systems",
			"Performance Tuning",
		],
		projects: [
			{
				id: "dsc-backend",
				role: "Backend Developer",
				description:
					"Designed and implemented scalable microservices architecture using Java and Spring Boot. Optimized database performance (MongoDB) and built robust RESTful APIs.",
				achievements: [
					"Redesigned MongoDB schema improving query performance by 50%.",
					"Implemented Redis caching strategy reducing API response time by 70%.",
					"Developed microservices handling a 10x increase in traffic without performance degradation.",
					"Created comprehensive API documentation reducing developer onboarding time.",
				],
				technologies: [
					"Java",
					"Spring Boot",
					"Microservices",
					"MongoDB",
					"Kafka",
					"Kubernetes",
					"Redis",
					"Elasticsearch",
					"REST APIs",
				],
			},
		],
	},
	{
		id: "web-creations-frontend",
		company: "Web Creations",
		location: "Austin, TX",
		startDate: "Aug 2015",
		endDate: "May 2017",
		achievements: [
			"Contributed to establishing frontend development best practices.",
			"Successfully delivered projects for multiple high-profile clients.",
		],
		technologies: [
			"Frontend Development",
			"UI/UX Implementation",
			"Responsive Design",
			"State Management",
		],
		projects: [
			{
				id: "wc-frontend-ecom",
				role: "Frontend Developer",
				description:
					"Developed responsive user interfaces for e-commerce platforms using React and Redux. Focused on performance optimization and cross-browser compatibility.",
				achievements: [
					"Built responsive UI components improving mobile UX, increasing mobile traffic by 40%.",
					"Implemented Redux state management simplifying data flow and reducing bugs by 30%.",
					"Optimized frontend performance (code splitting, lazy loading), improving page load time by 60%.",
				],
				technologies: [
					"React",
					"JavaScript (ES6+)",
					"Redux",
					"HTML5",
					"CSS3",
					"Sass",
					"Webpack",
					"Jest",
				],
			},
			{
				id: "wc-frontend-cms",
				role: "Frontend Developer",
				description:
					"Created interactive components and custom themes for a content management system. Ensured accessibility standards were met.",
				achievements: [
					"Developed a reusable component library accelerating feature development.",
					"Ensured WCAG 2.1 AA compliance for all developed components.",
				],
				technologies: [
					"JavaScript",
					"jQuery",
					"HTML5",
					"CSS3",
					"PHP (Templating)",
					"Accessibility (WCAG)",
				],
			},
		],
	},
	{
		id: "ai-solutions-consultant",
		company: "AI Solutions Ltd.",
		location: "Boston, MA (Remote)",
		startDate: "Jun 2022",
		endDate: "Dec 2022",
		achievements: ["Delivered strategic MLOps recommendations."],
		technologies: ["Consulting", "MLOps Strategy", "Cloud Architecture"],
		projects: [
			{
				id: "ais-consulting",
				role: "Senior AI Consultant (Contract)",
				description:
					"Provided consulting services on MLOps best practices and advised on scaling existing AI infrastructure.",
				achievements: [
					"Developed an MLOps strategy document adopted by the engineering team.",
					"Identified bottlenecks in the model deployment pipeline and proposed solutions.",
				],
				technologies: ["MLOps", "Kubeflow", "AWS", "Docker", "Python"],
			},
		],
	},
];
