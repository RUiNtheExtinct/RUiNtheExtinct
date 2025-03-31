import GettingStartedWithNextjs from "@/content/blog/getting-started-with-nextjs.mdx";
import TypeScriptBestPractices from "@/content/blog/typescript-best-practices.mdx";
import type { BlogPost } from "@/types";

export const externalBlogs: BlogPost[] = [
	{
		slug: "nextjs-performance-optimization",
		title: "Performance Optimization Techniques for Next.js Applications",
		date: "2024-03-15",
		excerpt:
			"Learn advanced techniques to optimize your Next.js applications for maximum performance and better user experience.",
		author: "John Doe",
		readingTime: "12 min read",
		coverImage: "/images/blog/nextjs-performance.jpg",
		tags: ["Next.js", "Performance", "Web Development"],
		isExternal: true,
		externalUrl:
			"https://medium.com/@yourusername/performance-optimization-nextjs",
	},
	{
		slug: "react-server-components",
		title: "Understanding React Server Components",
		date: "2024-02-20",
		excerpt:
			"A deep dive into React Server Components and how they change the way we build React applications.",
		author: "John Doe",
		readingTime: "15 min read",
		coverImage: "/images/blog/server-components.jpg",
		tags: ["React", "Server Components", "Next.js"],
		isExternal: true,
		externalUrl:
			"https://dev.to/yourusername/understanding-react-server-components",
	},
];

export const internalBlogs: BlogPost[] = [
	{
		slug: "getting-started-with-nextjs",
		title: "Getting Started with Next.js",
		date: "2024-03-15",
		excerpt:
			"Learn how to get started with Next.js and build your first application.",
		author: "John Doe",
		readingTime: "12 min read",
		coverImage: "/images/blog/nextjs-performance.jpg",
		tags: ["Next.js", "Performance", "Web Development"],
		isExternal: false,
		externalUrl: "",
		content: GettingStartedWithNextjs,
	},
	{
		slug: "typescript-best-practices",
		title: "TypeScript Best Practices for 2024",
		date: "2024-02-25",
		excerpt: "Improve your TypeScript code with these modern best practices",
		author: "John Doe",
		readingTime: "15 min read",
		coverImage: "/images/blog/typescript.jpg",
		tags: ["TypeScript", "Programming", "Best Practices"],
		isExternal: false,
		externalUrl: "",
		content: TypeScriptBestPractices,
	},
];

export const allBlogs = [...externalBlogs, ...internalBlogs].sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
