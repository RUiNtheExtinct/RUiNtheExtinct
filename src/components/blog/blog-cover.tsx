import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BlogPost } from "@/types";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Fraunces } from "next/font/google";
import Link from "next/link";

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-fraunces",
});

const BlogCoverCard = ({ post }: { post: BlogPost }) => {
	const linkHref = post.isExternal
		? (post.externalUrl as string)
		: `/blog/view/${post.slug}`;
	const linkProps = post.isExternal
		? {
				target: "_blank",
				rel: "noopener noreferrer",
		  }
		: {};

	return (
		<Card
			key={post.slug}
			className="group rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-lg"
		>
			<Link href={linkHref} {...linkProps} className="cursor-pointer">
				{post.coverImage ? (
					<div className="relative h-52 w-full overflow-hidden flex flex-col items-center justify-center">
						<img
							src={post.coverImage}
							alt={post.title}
							className="object-cover transition-transform group-hover:scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				) : (
					<div className="relative h-52 w-full bg-muted/50 flex items-center justify-center">
						<div className="text-muted-foreground text-sm">
							No cover image available
						</div>
					</div>
				)}
				<CardHeader
					className={`pb-2 px-5 ${post.coverImage ? "pt-5" : "pt-4"}`}
				>
					<CardTitle
						className={`mt-2 line-clamp-2 text-xl hover:text-primary transition-colors ${fraunces.className}`}
					>
						{post.title}
					</CardTitle>
					<CardDescription className="flex items-center gap-4 text-sm font-medium">
						<span className="flex items-center">
							<Calendar className="mr-1 h-3.5 w-3.5" />
							{post.date}
						</span>
						{post.readingTime && (
							<span className="flex items-center">
								<Clock className="mr-1 h-3.5 w-3.5" />
								{post.readingTime}
							</span>
						)}
					</CardDescription>
				</CardHeader>
				<CardContent className="px-5 py-2">
					<p className="line-clamp-3 text-sm text-muted-foreground font-normal leading-relaxed">
						{post.excerpt}
					</p>
				</CardContent>
			</Link>
			<CardFooter className="px-5 py-4 flex flex-col items-start gap-3 border-t">
				<div className="flex flex-wrap items-start gap-1.5">
					{post.tags.slice(0, 3).map((tag) => (
						<Badge
							key={tag}
							variant="secondary"
							className="text-xs font-medium"
						>
							{tag}
						</Badge>
					))}
				</div>
				<span className="text-sm font-medium text-primary hover:underline inline-flex items-center">
					{post.isExternal ? (
						<>
							Read on External Site
							<ExternalLink className="ml-1 h-3 w-3" />
						</>
					) : (
						<Link href={linkHref} {...linkProps}>
							Read More
						</Link>
					)}
				</span>
			</CardFooter>
		</Card>
	);
};

export default BlogCoverCard;
