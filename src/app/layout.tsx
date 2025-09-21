import AccentProvider from "@/components/shared/AccentProvider";
import AnalyticsProvider from "@/components/shared/AnalyticsProvider";
import BackgroundEffects from "@/components/shared/background-effects"; // New component for bg effects
import BuyMeACoffeeEmbed from "@/components/shared/buy-me-a-coffee";
import Footer from "@/components/shared/footer";
import LenisProvider from "@/components/shared/LenisProvider";
import Navbar from "@/components/shared/navbar";
import PageTransition from "@/components/shared/PageTransition";
import RouteAnalytics from "@/components/shared/RouteAnalytics";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Nova_Square } from "next/font/google";
import "./globals.css";

const mainFont = Nova_Square({
	subsets: ["latin"],
	weight: "400",
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans",
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
			<body className={`${inter.variable} ${mainFont.className}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				>
					<BackgroundEffects />
					<PageTransition />
					<AccentProvider>
						<LenisProvider>
							<Navbar />
							<BuyMeACoffeeEmbed slug="ruintheextinct" floating />
							<main>{children}</main>
							<SpeedInsights />
							<AnalyticsProvider />
							<RouteAnalytics />
							<Footer />
						</LenisProvider>
					</AccentProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
