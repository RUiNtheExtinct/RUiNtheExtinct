import type { Education } from "@/types"

export const education: Education[] = [
  {
    id: "masters",
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    startDate: "Sep 2013",
    endDate: "Jun 2015",
    description: "Specialized in Artificial Intelligence and Machine Learning",
    achievements: [
      "Graduated with Distinction",
      "Published research paper on deep learning algorithms",
      "Teaching Assistant for Advanced Algorithms course",
      "Recipient of the Computer Science Department Scholarship",
    ],
    gpa: "3.9/4.0",
  },
  {
    id: "bachelors",
    degree: "Bachelor of Science",
    field: "Computer Engineering",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    startDate: "Sep 2009",
    endDate: "Jun 2013",
    description: "Focus on Software Engineering and Computer Architecture",
    achievements: [
      "Dean's List all semesters",
      "Senior project: Developed a real-time traffic monitoring system",
      "Vice President of Computer Science Club",
      "Participated in ACM Programming Contest",
    ],
    gpa: "3.8/4.0",
  },
  {
    id: "certification",
    degree: "Professional Certification",
    field: "Cloud Architecture",
    institution: "AWS Training and Certification",
    startDate: "Jan 2018",
    endDate: "Apr 2018",
    description: "Comprehensive training in AWS cloud services and architecture",
    achievements: ["AWS Certified Solutions Architect - Professional", "AWS Certified DevOps Engineer - Professional"],
  },
]

