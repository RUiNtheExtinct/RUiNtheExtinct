import type { SkillCategory } from "@/types"
import { Code, Server, Database, Brain, Cloud, Smartphone, Layers, Workflow } from "lucide-react"

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 5 },
      { name: "HTML", level: 5 },
      { name: "CSS", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Redux", level: 4 },
      { name: "React Query", level: 4 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Python", level: 4 },
      { name: "FastAPI", level: 4 },
      { name: "Flask", level: 3 },
      { name: "Express", level: 5 },
      { name: "Spring Boot", level: 3 },
      { name: "Java", level: 3 },
      { name: "C++", level: 3 },
      { name: "REST APIs", level: 5 },
      { name: "GraphQL", level: 4 },
    ],
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 4 },
      { name: "MongoDB", level: 5 },
      { name: "MySQL", level: 4 },
      { name: "Redis", level: 3 },
      { name: "Elasticsearch", level: 3 },
      { name: "DynamoDB", level: 3 },
    ],
  },
  {
    name: "AI & ML",
    icon: Brain,
    skills: [
      { name: "Generative AI", level: 4 },
      { name: "Computer Vision", level: 3 },
      { name: "Machine Learning", level: 3 },
      { name: "TensorFlow", level: 3 },
      { name: "PyTorch", level: 3 },
      { name: "NLP", level: 4 },
      { name: "LLMs", level: 4 },
    ],
  },
  {
    name: "DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 4 },
      { name: "Azure", level: 3 },
      { name: "GCP", level: 3 },
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "Terraform", level: 4 },
      { name: "CI/CD", level: 4 },
      { name: "GitHub Actions", level: 4 },
      { name: "Jenkins", level: 3 },
      { name: "Monitoring", level: 3 },
    ],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 3 },
      { name: "Flutter", level: 2 },
      { name: "iOS", level: 2 },
      { name: "Android", level: 2 },
    ],
  },
  {
    name: "Architecture",
    icon: Layers,
    skills: [
      { name: "Microservices", level: 4 },
      { name: "Serverless", level: 4 },
      { name: "System Design", level: 4 },
      { name: "API Design", level: 5 },
      { name: "Event-Driven", level: 4 },
    ],
  },
  {
    name: "Project Management",
    icon: Workflow,
    skills: [
      { name: "Agile", level: 4 },
      { name: "Scrum", level: 4 },
      { name: "Kanban", level: 4 },
      { name: "JIRA", level: 4 },
      { name: "Git", level: 5 },
    ],
  },
]

