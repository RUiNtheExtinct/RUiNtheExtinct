import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { personalInfo } from "@/data/personal-info";
import { Download, ExternalLink, FileText, Printer } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Resume | RUiNtheExtinct",
	description: "View and download my resume (PDF)",
	openGraph: {
		title: "Resume | RUiNtheExtinct",
		description: "View and download my resume (PDF)",
		type: "article",
		url: "/resume",
	},
};

export default function ResumePage() {
	const pdfUrl = "/personal/resume.pdf";

	return (
		<div className="container mx-auto px-4 py-10 md:py-16">
			<div className="mb-6 md:mb-10">
				<Link
					href="/"
					className="text-sm md:text-base text-muted-foreground hover:text-foreground"
				>
					← Back to Home
				</Link>
			</div>

			{/* Header */}
			<div className="mb-6 md:mb-8">
				<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
					<div>
						<h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
							<FileText className="h-7 w-7 text-primary" />
							Resume
						</h1>
						<p className="mt-2 text-muted-foreground">
							Latest curriculum vitae for {personalInfo.name}
						</p>
					</div>
					<div className="flex flex-col gap-2 sm:flex-row">
						<Button asChild className="w-full sm:w-auto">
							<Link
								href={pdfUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ExternalLink className="mr-2 h-4 w-4" /> Open
								in New Tab
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							className="w-full sm:w-auto"
						>
							<a href={pdfUrl} download>
								<Download className="mr-2 h-4 w-4" /> Download
								PDF
							</a>
						</Button>
						<Button
							asChild
							variant="secondary"
							className="w-full sm:w-auto"
						>
							<Link
								href={pdfUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Printer className="mr-2 h-4 w-4" /> Print
							</Link>
						</Button>
					</div>
				</div>
			</div>

			{/* Viewer */}
			<Card className="relative overflow-hidden border bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-xl">
				<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.10),transparent_60%)]" />
				<CardHeader className="pb-2">
					<CardDescription className="text-xs">
						Tip: For maximum clarity, use the Open in New Tab or
						Download actions above.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="rounded-lg border bg-background ring-1 ring-border/50 overflow-hidden shadow-inner">
						<div className="h-[72vh] md:h-[85vh] w-full overscroll-contain">
							<object
								data={`${pdfUrl}#view=FitH`}
								type="application/pdf"
								className="h-full w-full"
							>
								<iframe
									src={`${pdfUrl}#toolbar=0&navpanes=0`}
									className="h-full w-full"
								/>
								<div className="p-6 text-center text-sm text-muted-foreground">
									Your browser doesn&apos;t support embedded
									PDFs. You can{" "}
									<a
										href={pdfUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary underline"
									>
										open the resume in a new tab
									</a>{" "}
									or download it.
								</div>
							</object>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
