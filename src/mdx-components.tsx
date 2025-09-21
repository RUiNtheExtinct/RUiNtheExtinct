import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: ({ href, ...props }: ComponentProps<"a">) => {
			const isExternal =
				typeof href === "string" && /^https?:\/\//.test(href);
			if (isExternal) {
				return (
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						{...props}
					/>
				);
			}
			return <a href={href} {...props} />;
		},
		...components,
	};
}
