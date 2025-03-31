"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "A real-time analytics dashboard with AI-driven insights for business intelligence.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Python", "FastAPI", "TensorFlow", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment processing and inventory management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "DevOps Automation Suite",
    description: "A suite of tools for automating CI/CD pipelines and infrastructure management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Terraform", "Docker", "Kubernetes", "GitHub Actions", "AWS"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Computer Vision Application",
    description: "An application that uses computer vision to analyze and process images in real-time.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "OpenCV", "PyTorch", "Flask", "React"],
    demoUrl: "#",
    repoUrl: "#",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            A selection of my recent work across various technologies and domains.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

