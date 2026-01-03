import withMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	webpack: (config) => {
		// Silence benign MDX loader cache warnings from @next/mdx
		// https://github.com/vercel/next.js/issues/61287
		config.ignoreWarnings = [
			...(config.ignoreWarnings || []),
			{
				module: /@next[\\/]+mdx[\\/]+mdx-js-loader\.js/,
				message:
					/Build dependencies behind this expression are ignored/,
			},
		];

		// Also suppress Webpack infrastructure warnings from the cache strategy
		// that originate from dynamic requires inside @next/mdx loader.
		config.infrastructureLogging = {
			...(config.infrastructureLogging || {}),
			level: "error",
		};
		return config;
	},
};

export default withMDX()(nextConfig);
