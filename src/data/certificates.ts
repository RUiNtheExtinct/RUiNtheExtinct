import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
	{
		id: "aws-solutions-architect-associate",
		name: "AWS Solutions Architect Associate",
		issuer: "Amazon Web Services",
		date: "2023",
		url: "/certificates/aws-cloud-practitioner-essentials.pdf",
		description:
			"Validates ability to design distributed systems and architectures on the AWS platform, including compute, networking, storage, and database services.",
	},
	{
		id: "gcp-cloud-digital-leader",
		name: "GCP Cloud Digital Leader",
		issuer: "Google Cloud",
		date: "February 2023",
		url: "/certificates/google-cloud-digital-leader.pdf",
		description:
			"Demonstrates ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives in GCP.",
	},
	{
		id: "azure-fundamentals",
		name: "Azure Fundamentals",
		issuer: "Microsoft Azure",
		date: "2023",
		description:
			"Validates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
	},
	{
		id: "deep-learning-specialization",
		name: "Deep Learning Specialization",
		issuer: "Coursera (deeplearning.ai)",
		date: "2023",
		description:
			"Comprehensive specialization covering neural networks, deep learning, structuring ML projects, CNNs, and sequence models.",
	},
	{
		id: "cka",
		name: "Certified Kubernetes Administrator (CKA)",
		issuer: "Cloud Native Computing Foundation",
		date: "In Progress",
		description:
			"Validates skills in Kubernetes cluster administration, including installation, configuration, networking, and troubleshooting.",
	},
];
