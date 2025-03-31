import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
	{
		id: "aws-cloud-practitioner-essentials",
		name: "AWS Cloud Practitioner Essentials",
		issuer: "Amazon Web Services",
		date: "September 2022",
		url: "/certificates/aws-cloud-practitioner-essentials.pdf",
		description:
			"Validates advanced technical skills and experience in designing distributed applications and systems on the AWS platform.",
	},
	{
		id: "google-cloud-digital-leader",
		name: "Google Cloud Digital Leader",
		issuer: "Google Cloud",
		date: "February 2023",
		url: "/certificates/google-cloud-digital-leader.pdf",
		description:
			"Demonstrates ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives in GCP.",
	},
];
