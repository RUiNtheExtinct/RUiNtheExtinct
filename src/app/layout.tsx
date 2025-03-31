import BackgroundEffects from "@/components/shared/background-effects"; // New component for bg effects
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { ThemeProvider } from "@/components/shared/theme-provider";
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
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
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
