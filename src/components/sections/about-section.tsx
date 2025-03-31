"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/personal-info"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Briefcase, GraduationCap, Award } from "lucide-react"

const stats = [
  {
    icon: Code,
    value: "5+",
    label: "Years of Experience",
  },
  {
    icon: Briefcase,
    value: "20+",
    label: "Projects Completed",
  },
  {
    icon: GraduationCap,
    value: "2",
    label: "Degrees",
  },
  {
    icon: Award,
    value: "10+",
    label: "Certifications",
  },
]

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
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-2xl font-bold">Who I Am</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a passionate full stack developer with a strong foundation in both frontend and backend
                technologies. My journey in software development began during my computer science studies, and I've been
                building digital solutions ever since.
              </p>
              <p className="text-muted-foreground">
                I specialize in creating scalable, user-friendly applications that solve real-world problems. My
                approach combines technical expertise with a deep understanding of user needs and business goals.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-2xl font-bold">Personal Info</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium">Name</p>
                <p className="text-muted-foreground">{personalInfo.name}</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">{personalInfo.phone}</p>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
              <div>
                <p className="font-medium">Availability</p>
                <p className="text-muted-foreground">Full-time</p>
              </div>
              <div>
                <p className="font-medium">Experience</p>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 rounded-full bg-primary/10 p-3">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-3xl font-bold">{stat.value}</h4>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

