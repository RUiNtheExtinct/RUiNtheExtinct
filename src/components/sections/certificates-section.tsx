"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { certificates } from "@/data/certificates"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Certifications</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Professional certifications that validate my expertise in various technologies and domains.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="line-clamp-2">{certificate.name}</CardTitle>
                  <CardDescription>{certificate.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {certificate.date}
                  </div>

                  {certificate.description && (
                    <p className="mb-4 text-sm text-muted-foreground">{certificate.description}</p>
                  )}

                  {certificate.url && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={certificate.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection

