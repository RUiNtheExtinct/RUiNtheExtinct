"use client";

import { Badge } from "@/components/ui/badge";
import { allBlogs } from "@/data/blogs";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useEffect, useMemo } from "react";

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export default function BlogPostPage(props: BlogPostPageProps) {
	const params = use(props.params);
	const slug = params.slug;

	const post = useMemo(
		() => allBlogs.find((post) => post.slug === slug),
		[slug]
	);

	useEffect(() => {
		hljs.highlightAll();
	}, [post]);

	if (!post || post.isExternal) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-12">
			<Link
				href="/blog"
				className="mb-8 flex items-center text-sm text-muted-foreground hover:text-primary"
			>
				<ArrowLeft className="mr-2 h-4 w-4" />
				Back to all posts
			</Link>

			<article className="prose prose-sm dark:prose-invert lg:prose-lg mx-auto max-w-4xl">
				{post.coverImage && (
					<div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover"
							priority
						/>
					</div>
				)}

				<h1 className="mb-4 text-3xl font-bold md:text-4xl">
					{post.title}
				</h1>

				<div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
					<span className="flex items-center">
						<Calendar className="mr-1 h-4 w-4" />
						{post.date}
					</span>
					{post.readingTime && (
						<span className="flex items-center">
							<Clock className="mr-1 h-4 w-4" />
							{post.readingTime}
						</span>
					)}
					<div className="flex flex-wrap gap-2">
						{post.tags.map((tag) => (
							<Badge
								key={tag}
								variant="secondary"
								className="text-xs"
							>
								{tag}
							</Badge>
						))}
					</div>
				</div>
				{post.content && <post.content />}
			</article>
		</div>
	);
}
