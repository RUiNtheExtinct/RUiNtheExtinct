import BackgroundEffects from "@/components/shared/background-effects"; // New component for bg effects
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Nova_Square } from "next/font/google";
import "./globals.css";

const mainFont = Nova_Square({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Portfolio | RUiNtheExtinct",
	description: "Developer Portfolio",
	icons: {
		icon: "/icon.ico",
		shortcut: "/icon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/icon.ico" type="image/ico" />
			</head>
			<body className={mainFont.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				>
					<BackgroundEffects />
					<Navbar />
					<main>{children}</main>
					<SpeedInsights />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
