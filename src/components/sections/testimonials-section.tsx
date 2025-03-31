"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"
import { Quote } from "lucide-react"

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Testimonials</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            What people say about working with me. I'm proud to have collaborated with amazing professionals who value
            my contributions.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Quote className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="mb-6 text-center text-muted-foreground">"{testimonial.testimonial}"</p>
                  <div className="flex items-center justify-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
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

export default TestimonialsSection

