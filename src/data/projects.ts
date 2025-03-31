import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics Dashboard",
    description: "A real-time analytics dashboard with AI-driven insights for business intelligence.",
    longDescription:
      "This project leverages machine learning algorithms to analyze business data and provide actionable insights through an intuitive dashboard. It features real-time data processing, customizable visualizations, and automated reporting capabilities. The system uses natural language processing to allow users to query data using plain English and get instant visualizations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Python", "FastAPI", "TensorFlow", "PostgreSQL", "Docker"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/ai-analytics",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment processing and inventory management.",
    longDescription:
      "A comprehensive e-commerce solution built with Next.js and Node.js. Features include product catalog management, shopping cart functionality, secure payment processing with Stripe, order tracking, inventory management, and customer accounts. The platform is fully responsive and optimized for performance across all devices.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Suite",
    description: "A suite of tools for automating CI/CD pipelines and infrastructure management.",
    longDescription:
      "This project provides a comprehensive set of tools for automating software delivery pipelines and infrastructure management. It includes modules for continuous integration, continuous deployment, infrastructure as code, monitoring, and alerting. The suite integrates with popular cloud providers and container orchestration platforms to provide a seamless DevOps experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Terraform", "Docker", "Kubernetes", "GitHub Actions", "AWS", "Python"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/devops-automation",
    featured: true,
  },
  {
    id: "computer-vision-app",
    title: "Computer Vision Application",
    description: "An application that uses computer vision to analyze and process images in real-time.",
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
    description: "A secure platform for trading digital assets using blockchain technology.",
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
    description: "A system for monitoring and managing IoT devices across multiple locations.",
    longDescription:
      "This IoT monitoring system collects, processes, and visualizes data from connected devices across multiple locations. It provides real-time dashboards, alerts, and automation capabilities. The system is built with a scalable architecture that can handle thousands of devices and millions of data points.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "MQTT", "InfluxDB", "Grafana", "React", "AWS IoT"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/iot-monitoring",
  },
]

