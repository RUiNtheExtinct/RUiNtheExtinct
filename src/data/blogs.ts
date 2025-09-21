import ComfyUISaveFileExtendedPost from "@/content/blog/comfyui-save-file-extended.mdx";
import GettingStartedWithNextjs from "@/content/blog/getting-started-with-nextjs.mdx";
import NpmClientPackageTemplatePost from "@/content/blog/npm-client-package-template.mdx";
import PortfolioConfiguration from "@/content/blog/portfolio-configuration.mdx";
import TypeScriptBestPractices from "@/content/blog/typescript-best-practices.mdx";
import ZustandDevToolsPost from "@/content/blog/zustand-dev-tools.mdx";
import type { BlogPost } from "@/types";

export const externalBlogs: BlogPost[] = [
	{
		slug: "yolo-models-objective-comparison",
		title: "YOLO Models — An objective comparison",
		date: "23-05-2023",
		excerpt:
			"A comprehensive comparison of YOLO models with a focus on objective metrics such as mAP, FPS, and inference time.",
		author: "Arghyadeep Karmakar",
		readingTime: "8 min read",
		coverImage:
			"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*q0ZEDHa6UrIwG70s.png",
		tags: ["YOLO", "Object Detection", "Computer Vision"],
		isExternal: true,
		externalUrl:
			"https://medium.com/@ruintheextinct/yolo-models-an-objective-comparison-1566e6b6dcb7",
	},
	{
		slug: "yolo-world-real-time-open-vocabulary-object-detection",
		title: "YOLO-World: Real-Time, Open-Vocabulary Object Detection",
		date: "20-05-2024",
		excerpt:
			"A deep dive into YOLO-World, a real-time, open-vocabulary object detection model that outperforms all existing object detection models in terms of speed and accuracy.",
		author: "Arghyadeep Karmakar",
		readingTime: "5 min read",
		coverImage:
			"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kixBi-_Gb-X8N_4faeL0BQ.png",
		tags: ["YOLO", "Object Detection", "Computer Vision", "YOLO-World"],
		isExternal: true,
		externalUrl:
			"https://medium.com/@ruintheextinct/yolo-world-real-time-open-vocabulary-object-detection-4d5f71b90c24",
	},
	{
		slug: "autogpt-the-heart-of-the-open-source-agent-ecosystem",
		title: "AutoGPT: The heart of the open-source Agent Ecosystem",
		date: "04-12-2023",
		excerpt: "AutoGPT, the heart of the open-source Agent Ecosystem.",
		author: "Arghyadeep Karmakar",
		readingTime: "5 min read",
		coverImage:
			"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*qQ-Wb0ecJHJpSvUN.png",
		tags: ["AutoGPT", "Agent Ecosystem", "Open-Source"],
		isExternal: true,
		externalUrl:
			"https://medium.com/@ruintheextinct/autogpt-the-heart-of-the-open-source-agent-ecosystem-75297897d94a",
	},
	{
		slug: "autogen-paving-the-way-for-llm-agents-with-multi-agent-chats",
		title: "AutoGen: Paving the Way for LLM Agents with Multi-Agent Chats",
		date: "27-11-2023",
		excerpt: "AutoGen, paving the way for LLM Agents with Multi-Agent Chats.",
		author: "Arghyadeep Karmakar",
		readingTime: "7 min read",
		coverImage:
			"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4h0C-T3egj6RzWOdWrfOng.png",
		tags: ["AutoGen", "Agent Ecosystem", "Open-Source"],
		isExternal: true,
		externalUrl:
			"https://medium.com/@ruintheextinct/autogen-paving-the-way-for-llm-agents-with-multi-agent-chats-544f575df28a",
	},
	{
		slug: "an-objective-comparison-of-llm-agents",
		title: "An objective comparison of LLM Agents",
		date: "5-11-2023",
		excerpt: "An objective comparison of LLM Agents.",
		author: "Arghyadeep Karmakar",
		readingTime: "10 min read",
		coverImage:
			"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TcQ7Cz4yjocybOfqHMVt6w.png",
		tags: ["AutoGen", "AutoGPT", "BabyAGI", "Open-Source"],
		isExternal: true,
		externalUrl:
			"https://medium.com/@ruintheextinct/an-objective-comparison-of-llm-agents-1584acfd2682",
	},
	{
		slug: "gorilla-llm-redefining-language-models",
		title: "Gorilla LLM: Redefining Language Models",
		date: "20-10-2023",
		excerpt: "Gorilla LLM: Redefining Language Models.",
		author: "Arghyadeep Karmakar",
		readingTime: "11 min read",
		coverImage:
			"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KWod6IRZkNqnbxwmpof-rw.png",
		tags: ["Gorilla LLM", "Language Models", "Open-Source"],
		isExternal: true,
		externalUrl:
			"https://medium.com/@ruintheextinct/gorilla-llm-redefining-language-models-004da8101a9c",
	},
	{
		slug: "building-the-unreal-metaverse-crafting-virtual-realities-with-unreal-engine",
		title:
			"Building the Unreal Metaverse: Crafting Virtual Realities with Unreal Engine",
		date: "20-10-2023",
		excerpt:
			"Building the Unreal Metaverse: Crafting Virtual Realities with Unreal Engine.",
		author: "Arghyadeep Karmakar",
		readingTime: "11 min read",
		coverImage:
			"https://dropinblog.net/34244460/files/featured/How-to-Use-Unreal-Engine-5-Header.webp",
		tags: ["Unreal Engine", "Metaverse", "Virtual Reality"],
		isExternal: true,
		externalUrl:
			"https://medium.com/@ruintheextinct/building-the-unreal-metaverse-crafting-virtual-realities-with-unreal-engine-3598e37e31",
	},
];

export const internalBlogs: BlogPost[] = [
	{
		slug: "comfyui-save-file-extended",
		title: "ComfyUI Save File Extended — Cloud-friendly save/load & previews",
		date: "2025-09-21",
		excerpt:
			"Extend ComfyUI's save/preview with cloud storage support, polished UI, and progress.",
		author: "Arghyadeep Karmakar",
		readingTime: "8 min read",
		coverImage: "/projects/save-file-extended.webp",
		tags: ["ComfyUI", "Nodes", "Cloud Storage", "Computer Vision"],
		isExternal: false,
		externalUrl: "",
		content: ComfyUISaveFileExtendedPost,
	},
	{
		slug: "npm-client-package-template",
		title: "NPM Client Package Template — TypeScript, multi-framework",
		date: "2025-09-21",
		excerpt:
			"Production-ready monorepo template for React/Next/Vue/Solid libraries with CI & types.",
		author: "Arghyadeep Karmakar",
		readingTime: "7 min read",
		coverImage: "/projects/npm-client-package-template.webp",
		tags: ["TypeScript", "Monorepo", "npm", "CI/CD", "Libraries"],
		isExternal: false,
		externalUrl: "",
		content: NpmClientPackageTemplatePost,
	},
	{
		slug: "zustand-dev-tools",
		title: "Zustand Dev Tools — Debug Zustand stores with a visual UI",
		date: "2025-09-21",
		excerpt:
			"A graphical debugger for Zustand: inspect state, track updates, and improve DX.",
		author: "Arghyadeep Karmakar",
		readingTime: "6 min read",
		tags: ["Zustand", "DevTools", "State Management", "React", "Next.js"],
		coverImage: "/projects/zustand-dev-tools.webp",
		isExternal: false,
		externalUrl: "",
		content: ZustandDevToolsPost,
	},
	{
		slug: "using-this-template-to-build-your-portfolio",
		title: "Using this portfolio as a template to build your own",
		date: "01-04-2025",
		excerpt: "Using this template to build your portfolio.",
		author: "Arghyadeep Karmakar",
		readingTime: "5 min read",
		coverImage: "/blog/portfolio-configuration.webp",
		tags: ["Portfolio", "Template", "Build"],
		isExternal: false,
		externalUrl: "",
		content: PortfolioConfiguration,
	},
	{
		slug: "getting-started-with-nextjs",
		title: "Getting Started with Next.js",
		date: "15-03-2024",
		excerpt:
			"Learn how to get started with Next.js and build your first application.",
		author: "Arghyadeep Karmakar",
		readingTime: "12 min read",
		tags: ["Next.js", "Performance", "Web Development"],
		coverImage: "/blog/getting-started-with-nextjs.webp",
		isExternal: false,
		externalUrl: "",
		content: GettingStartedWithNextjs,
	},
	{
		slug: "typescript-best-practices",
		title: "TypeScript Best Practices for 2024",
		date: "2024-02-25",
		excerpt: "Improve your TypeScript code with these modern best practices",
		author: "Arghyadeep Karmakar",
		readingTime: "15 min read",
		tags: ["TypeScript", "Programming", "Best Practices"],
		coverImage: "/blog/typescript-best-practices.webp",
		isExternal: false,
		externalUrl: "",
		content: TypeScriptBestPractices,
	},
];

export const allBlogs = [...internalBlogs, ...externalBlogs].sort(
	(a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
);
