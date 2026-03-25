import withMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	webpack: (config) => {
		config.ignoreWarnings = [
			...(config.ignoreWarnings || []),
			{
				module: /@next[\\/]+mdx[\\/]+mdx-js-loader\.js/,
				message:
					/Build dependencies behind this expression are ignored/,
			},
		];
		config.infrastructureLogging = {
			...(config.infrastructureLogging || {}),
			level: "error",
		};
		return config;
	},
};

// withMDX() writes turbopack config to the deprecated top-level `turbopack`
// key, but Next.js 15.2 expects it under `experimental.turbo`. Remap it.
const mdxConfig = withMDX()(nextConfig) as NextConfig & {
	turbopack?: Record<string, unknown>;
};

if (mdxConfig.turbopack) {
	mdxConfig.experimental = {
		...mdxConfig.experimental,
		turbo: mdxConfig.turbopack as NextConfig["experimental"] extends {
			turbo?: infer T;
		}
			? T
			: never,
	};
	delete mdxConfig.turbopack;
}

export default mdxConfig;
