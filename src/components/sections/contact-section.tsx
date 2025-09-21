"use client";

import type React from "react";

import { track } from "@/components/shared/AnalyticsProvider";
import Reveal from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";
import { motion } from "framer-motion";
import {
	Loader2,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	Send,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Prepare the template parameters for EmailJS
		const templateParams = {
			name: formData.name,
			email: formData.email,
			time: new Date().toLocaleString(),
			subject: formData.subject,
			message: formData.message,
		};

		try {
			const { default: emailjs } = await import("@emailjs/browser");
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);

			setIsSubmitted(true);
			setFormData({ name: "", email: "", subject: "", message: "" });

			// Reset success message after 5 seconds
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error("Failed to send message via EmailJS:", error);
			toast.error("Failed to send message");
			// Optionally, add proper error handling here
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4 md:px-6">
				<Reveal className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Get In Touch
					</h2>
					<div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
					<p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
						Have a project in mind or want to discuss potential
						opportunities? Feel free to reach out. I'm always open
						to new challenges and collaborations.
					</p>
				</Reveal>

				<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.35 }}
					>
						<Card>
							<CardHeader>
								<CardTitle>Contact Information</CardTitle>
								<CardDescription>
									Feel free to reach out through any of these
									channels.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-primary/10 p-2">
										<Mail className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium">Email</h3>
										<p className="text-sm text-muted-foreground">
											{personalInfo.email}
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-primary/10 p-2">
										<Phone className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium">Phone</h3>
										<p className="text-sm text-muted-foreground">
											{personalInfo.phone}
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-primary/10 p-2">
										<MapPin className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium">
											Location
										</h3>
										<p className="text-sm text-muted-foreground">
											{personalInfo.location}
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-primary/10 p-2">
										<MessageSquare className="h-5 w-5 text-primary" />
									</div>
									<div className="flex flex-col gap-2">
										<h3 className="font-medium">
											Social Media
										</h3>
										<p className="text-sm text-muted-foreground flex gap-2">
											{socialLinks.map((link) => (
												<Link
													key={link.name}
													href={link.url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-foreground"
													onClick={() =>
														track("social_click", {
															name: link.name,
														})
													}
												>
													<link.icon className="h-5 w-5" />
													<span className="sr-only">
														{link.name}
													</span>
												</Link>
											))}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.35 }}
					>
						<Card>
							<CardHeader>
								<CardTitle>Send a Message</CardTitle>
								<CardDescription>
									Fill out the form below and I'll get back to
									you as soon as possible.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form
									onSubmit={handleSubmit}
									className="space-y-4"
								>
									<div className="space-y-2">
										<Input
											id="contact-me-name"
											name="name"
											placeholder="Your Name"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Input
											name="email"
											type="email"
											placeholder="Your Email"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Input
											name="subject"
											placeholder="Subject"
											value={formData.subject}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Textarea
											name="message"
											placeholder="Your Message"
											value={formData.message}
											onChange={handleChange}
											rows={4}
											required
										/>
									</div>
									<Button
										type="submit"
										className="w-full"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										) : (
											<>
												<Send className="mr-2 h-4 w-4" />{" "}
												Send Message
											</>
										)}
									</Button>

									{isSubmitted && (
										<p className="text-center text-sm text-green-500">
											Thank you! Your message has been
											sent successfully.
										</p>
									)}
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
