"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux", "React Query"],
  backend: ["Node.js", "Python", "FastAPI", "Flask", "Express", "Spring Boot", "Java", "C++", "REST APIs", "GraphQL"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"],
  ai: ["Generative AI", "Computer Vision", "Machine Learning", "TensorFlow", "PyTorch", "NLP", "LLMs"],
  devops: [
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
    "Monitoring",
  ],
}

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            I'm a passionate full stack developer with expertise in building scalable applications using modern
            technologies. With a strong foundation in both frontend and backend development, I create robust solutions
            that deliver exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="database">Database</TabsTrigger>
                  <TabsTrigger value="ai">AI/ML</TabsTrigger>
                  <TabsTrigger value="devops">DevOps</TabsTrigger>
                </TabsList>

                {Object.entries(skills).map(([category, skillList]) => (
                  <TabsContent key={category} value={category} className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

