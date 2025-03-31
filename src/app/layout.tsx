import BackgroundEffects from "@/components/background-effects"; // New component for bg effects
import Footer from "@/components/footer";
import Header from "@/components/header"; // Assuming you have/create a Header component
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					// disableTransitionOnChange
				>
					<BackgroundEffects />
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
