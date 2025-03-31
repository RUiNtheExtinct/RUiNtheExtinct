import type { SocialLink } from "@/types"
import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react"

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
  },
  {
    name: "Email",
    url: "mailto:contact@example.com",
    icon: Mail,
  },
  {
    name: "Website",
    url: "https://yourwebsite.com",
    icon: Globe,
  },
]

