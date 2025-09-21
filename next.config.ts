import withMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	/* config options here */
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
		return config;
	},
};

export default withMDX()(nextConfig);
