"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Leading development of enterprise-scale applications using Next.js, Python, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["Next.js", "Python", "AWS", "Terraform", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Machine Learning Engineer",
    company: "AI Solutions Ltd.",
    period: "2019 - 2021",
    description:
      "Developed computer vision algorithms and generative AI models. Built APIs for model deployment and integration with web applications.",
    technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI", "Docker"],
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "Data Systems Corp.",
    period: "2017 - 2019",
    description:
      "Designed and implemented scalable microservices architecture. Optimized database performance and built RESTful APIs.",
    technologies: ["Java", "Spring Boot", "MongoDB", "Kafka", "Kubernetes"],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Web Creations",
    period: "2015 - 2017",
    description:
      "Developed responsive web applications with modern JavaScript frameworks. Implemented state management and optimized performance.",
    technologies: ["React", "JavaScript", "Redux", "HTML/CSS", "Webpack"],
  },
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Work Experience</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <CardTitle>{experience.role}</CardTitle>
                      <CardDescription>{experience.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

