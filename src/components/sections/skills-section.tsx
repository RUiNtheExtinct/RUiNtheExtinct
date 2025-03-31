"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { skillCategories } from "@/data/skills"

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].name.toLowerCase())

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Skills</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            I've developed expertise in various technologies and domains throughout my career. Here's a comprehensive
            overview of my technical skills.
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
              <Tabs defaultValue={skillCategories[0].name.toLowerCase()} onValueChange={setSelectedCategory}>
                <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                  {skillCategories.map((category) => (
                    <TabsTrigger
                      key={category.name}
                      value={category.name.toLowerCase()}
                      className="flex items-center gap-2"
                    >
                      <category.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {skillCategories.map((category) => (
                  <TabsContent key={category.name} value={category.name.toLowerCase()}>
                    <div className="grid gap-6 md:grid-cols-2">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level ? `${skill.level * 20}%` : ""}
                            </span>
                          </div>
                          <Progress value={skill.level ? skill.level * 20 : 100} className="h-2" />
                        </motion.div>
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

export default SkillsSection

