import type { Project } from "@/types";

export const projects: Project[] = [
	{
		id: "portfolio-website",
		title: "Personal Portfolio Website",
		description: "Modern portfolio website built with Next.js and TailwindCSS",
		longDescription:
			"A responsive and performant portfolio website showcasing my work and skills. Features dark mode, animations, and a clean design focused on user experience.",
		image: "/images/projects/portfolio.png",
		tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
		demoUrl: "https://yourportfolio.com",
		repoUrl: "https://github.com/yourusername/portfolio",
		featured: true,
		category: "web",
		date: "2024",
		status: "completed",
	},
	{
		id: "ecommerce-platform",
		title: "E-Commerce Platform",
		description: "Full-stack e-commerce solution with advanced features",
		longDescription:
			"A comprehensive e-commerce platform with product management, cart functionality, payment integration, and admin dashboard.",
		image: "/images/projects/ecommerce.png",
		tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
		demoUrl: "https://yourecommerce.com",
		repoUrl: "https://github.com/yourusername/ecommerce",
		featured: true,
		category: "fullstack",
		date: "2023",
		status: "completed",
	},
	{
		id: "task-management",
		title: "Task Management System",
		description: "Collaborative task management application for teams",
		longDescription:
			"A real-time task management system with team collaboration features, notifications, and progress tracking.",
		image: "/images/projects/taskmanager.png",
		tags: ["React", "Firebase", "Material-UI", "Redux"],
		demoUrl: "https://yourtaskmanager.com",
		repoUrl: "https://github.com/yourusername/task-manager",
		featured: true,
		category: "web",
		date: "2023",
		status: "completed",
	},
	{
		id: "chat-application",
		title: "Real-time Chat Application",
		description: "Modern chat application with real-time messaging",
		longDescription:
			"A feature-rich chat application supporting real-time messaging, file sharing, and video calls.",
		image: "/images/projects/chat.png",
		tags: ["React", "Socket.io", "WebRTC", "Express", "MongoDB"],
		demoUrl: "https://yourchatapp.com",
		repoUrl: "https://github.com/yourusername/chat-app",
		featured: true,
		category: "fullstack",
		date: "2023",
		status: "completed",
	},
	{
		id: "ai-image-generator",
		title: "AI Image Generator",
		description: "Web application for generating AI art using stable diffusion",
		longDescription:
			"An AI-powered image generation platform using stable diffusion models with custom controls and sharing capabilities.",
		image: "/images/projects/ai-generator.png",
		tags: ["Python", "FastAPI", "React", "TensorFlow", "Docker"],
		demoUrl: "https://youraigenerator.com",
		repoUrl: "https://github.com/yourusername/ai-image-generator",
		featured: true,
		category: "fullstack",
		date: "2024",
		status: "in-progress",
	},
	{
		id: "fitness-tracker",
		title: "Fitness Tracking App",
		description: "Mobile-first fitness tracking application",
		longDescription:
			"A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.",
		image: "/images/projects/fitness.png",
		tags: ["React Native", "Node.js", "PostgreSQL", "Redux"],
		demoUrl: "https://example.com/demo",
		repoUrl: "https://github.com/yourusername/fitness-tracker",
		featured: true,
		category: "mobile",
		date: "2024",
		status: "planned",
	},
];

export const projectCategories = [
	{
		name: "All",
		value: "all",
	},
	{
		name: "Web Applications",
		id: "computer-vision-app",
		title: "Computer Vision Application",
		description:
			"An application that uses computer vision to analyze and process images in real-time.",
		longDescription:
			"This application leverages state-of-the-art computer vision algorithms to analyze and process images in real-time. It can detect objects, recognize faces, track movement, and perform image segmentation. The system is built with a Flask backend that serves a React frontend, providing an intuitive interface for users to interact with the computer vision capabilities.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["Python", "OpenCV", "PyTorch", "Flask", "React", "WebSockets"],
		demoUrl: "https://example.com/demo",
		repoUrl: "https://github.com/yourusername/computer-vision",
		featured: true,
	},
	{
		id: "blockchain-platform",
		title: "Blockchain Trading Platform",
		description:
			"A secure platform for trading digital assets using blockchain technology.",
		longDescription:
			"A decentralized trading platform built on blockchain technology that allows users to securely trade digital assets. The platform features wallet integration, real-time market data, order matching engine, and transaction history. Smart contracts ensure the security and transparency of all transactions.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["Ethereum", "Solidity", "Web3.js", "React", "Node.js", "MongoDB"],
		demoUrl: "https://example.com/demo",
		repoUrl: "https://github.com/yourusername/blockchain-trading",
	},
	{
		id: "iot-monitoring",
		title: "IoT Monitoring System",
		description:
			"A system for monitoring and managing IoT devices across multiple locations.",
		longDescription:
			"This IoT monitoring system collects, processes, and visualizes data from connected devices across multiple locations. It provides real-time dashboards, alerts, and automation capabilities. The system is built with a scalable architecture that can handle thousands of devices and millions of data points.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["Node.js", "MQTT", "InfluxDB", "Grafana", "React", "AWS IoT"],
		demoUrl: "https://example.com/demo",
		repoUrl: "https://github.com/yourusername/iot-monitoring",
	},
];
