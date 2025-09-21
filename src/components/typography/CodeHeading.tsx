"use client";

import { ReactNode } from "react";

type CodeHeadingProps = {
	as?: "h1" | "h2" | "h3" | "div";
	children: ReactNode;
	className?: string;
};

export default function CodeHeading({
	as = "h1",
	children,
	className,
}: CodeHeadingProps) {
	const Tag: any = as;
	return (
		<Tag className={`font-mono tracking-tight ${className || ""}`}>
			<span className="text-[0.9em] text-foreground/60">&lt;</span>
			<span className="text-brand-gradient animate-brand-gradient">
				dev
			</span>
			<span className="text-[0.9em] text-foreground/60">&gt;</span>
			<span className="mx-2">{children}</span>
			<span className="text-[0.9em] text-foreground/60">&lt;/</span>
			<span className="text-brand-gradient animate-brand-gradient">
				dev
			</span>
			<span className="text-[0.9em] text-foreground/60">&gt;</span>
			<span className="ml-2 inline-block h-[1em] w-[1px] align-[-0.1em] bg-foreground/70 animate-[caret-blink_1.2s_steps(1)_infinite]" />
		</Tag>
	);
}
