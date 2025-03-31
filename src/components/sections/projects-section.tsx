"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const featuredProjects = projects.filter((project) => project.featured)
  const displayedProjects = showAll ? projects : featuredProjects

  const selectedProjectData = projects.find((project) => project.id === selectedProject)

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
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Projects</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            A selection of my recent work across various technologies and domains. Each project demonstrates different
            skills and approaches to solving problems.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
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
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.repoUrl || "#"} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" onClick={() => setSelectedProject(project.id)}>
                    Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > featuredProjects.length && (
          <div className="mt-10 flex justify-center">
            <Button onClick={() => setShowAll(true)} variant="outline" size="lg">
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[700px]">
            {selectedProjectData && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProjectData.title}</DialogTitle>
                  <DialogDescription>{selectedProjectData.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 overflow-hidden rounded-lg">
                  <Image
                    src={selectedProjectData.image || "/placeholder.svg"}
                    alt={selectedProjectData.title}
                    width={700}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="mb-2 font-semibold">About this project</h4>
                  <p className="text-muted-foreground">
                    {selectedProjectData.longDescription || selectedProjectData.description}
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="mb-2 font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  {selectedProjectData.repoUrl && (
                    <Button variant="outline" asChild>
                      <Link href={selectedProjectData.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  )}
                  {selectedProjectData.demoUrl && (
                    <Button asChild>
                      <Link href={selectedProjectData.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default ProjectsSection

