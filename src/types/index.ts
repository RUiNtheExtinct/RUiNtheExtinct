import type { StaticImageData } from "next/image"
import type { LucideIcon } from "lucide-react"

// Personal Info Types
export interface PersonalInfo {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  avatar: string | StaticImageData
}

// Social Links Types
export interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
}

// Skills Types
export interface SkillCategory {
  name: string
  icon: LucideIcon
  skills: Skill[]
}

export interface Skill {
  name: string
  icon?: LucideIcon
  level?: number // 1-5
}

// Project Types
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string | StaticImageData
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
}

// Experience Types
export interface Experience {
  id: string
  role: string
  company: string
  companyLogo?: string | StaticImageData
  location?: string
  startDate: string
  endDate: string | "Present"
  description: string
  achievements?: string[]
  technologies: string[]
}

// Education Types
export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  institutionLogo?: string | StaticImageData
  location?: string
  startDate: string
  endDate: string | "Present"
  description?: string
  achievements?: string[]
  gpa?: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar?: string | StaticImageData
  testimonial: string
}

// Certificate Types
export interface Certificate {
  id: string
  name: string
  issuer: string
  issuerLogo?: string | StaticImageData
  date: string
  url?: string
  description?: string
}

