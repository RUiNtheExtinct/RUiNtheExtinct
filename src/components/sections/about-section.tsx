"use client";

import { track } from "@/components/shared/AnalyticsProvider";
import Parallax from "@/components/shared/Parallax";
import Reveal from "@/components/shared/Reveal";
import ScrambleText from "@/components/typography/ScrambleText";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMeMessage, personalInfo, stats } from "@/data/personal-info";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, MapPin, Phone, Quote } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
	return (
		<section id="about" className="py-16 md:py-24">
			<div className="container px-4 md:px-6">
				<Reveal className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						<ScrambleText
							text="About Me"
							className="text-brand-gradient animate-brand-gradient"
							duration={640}
						/>
					</h2>
					<div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
				</Reveal>

				<div className="grid gap-8 lg:grid-cols-5">
					{/* Left Column - Professional Summary */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.35 }}
						className="lg:col-span-3"
					>
						<Card className="h-full bg-card/50 backdrop-blur-sm">
							<CardContent className="p-6 flex flex-col justify-between">
								<div className="mb-6 flex items-start space-x-4">
									<div className="rounded-full bg-primary/10 p-3">
										<Quote className="h-6 w-6 text-primary" />
									</div>
									<div className="space-y-4">
										{aboutMeMessage.map(
											(message, index) => (
												<p
													key={index}
													className="text-lg leading-relaxed text-muted-foreground"
												>
													{message}
												</p>
											)
										)}
									</div>
								</div>

								{/* Stats Grid */}
								<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
									{stats.map((stat, index) => (
										<Reveal
											key={index}
											delay={index * 0.06}
										>
											<Card className="border-none bg-transparent">
												<CardContent className="p-4">
													<div
														className={`rounded-full p-2 w-fit ${stat.color}`}
													>
														<stat.icon className="h-5 w-5" />
													</div>
													<p className="mt-4 text-2xl font-bold">
														{stat.value}
													</p>
													<p className="text-sm text-muted-foreground">
														{stat.label}
													</p>
												</CardContent>
											</Card>
										</Reveal>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Right Column - Contact Info */}
					<Parallax offset={40} className="lg:col-span-2">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.35, delay: 0.15 }}
						>
							<Card className="h-full bg-card/50 backdrop-blur-sm">
								<CardContent className="p-6">
									<h3 className="mb-4 text-lg font-semibold">
										Contact Information
									</h3>
									<div className="space-y-4">
										{[
											{
												icon: Mail,
												label: "Email",
												value: personalInfo.email,
												href: `mailto:${personalInfo.email}`,
											},
											{
												icon: Phone,
												label: "Phone",
												value: personalInfo.phone,
												href: `tel:${personalInfo.phone}`,
											},
											{
												icon: MapPin,
												label: "Location",
												value: personalInfo.location,
											},
											{
												icon: Calendar,
												label: "Availability",
												value: "Full-time",
											},
										].map((item, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0, x: 20 }}
												whileInView={{
													opacity: 1,
													x: 0,
												}}
												viewport={{ once: true }}
												transition={{
													duration: 0.5,
													delay: index * 0.1,
												}}
												className="flex items-center space-x-3 rounded-lg border p-4 transition-all hover:shadow-md hover:bg-card/80"
											>
												<div className="rounded-full bg-primary/10 p-2">
													<item.icon className="h-4 w-4 text-primary" />
												</div>
												<div>
													<p className="text-sm text-muted-foreground">
														{item.label}
													</p>
													{item.href ? (
														<Link
															href={item.href}
															className="font-medium hover:text-primary transition-colors"
															onClick={() =>
																item.href &&
																track(
																	"contact_link_click",
																	{
																		type: item.label,
																	}
																)
															}
														>
															{item.value}
														</Link>
													) : (
														<p className="font-medium">
															{item.value}
														</p>
													)}
												</div>
											</motion.div>
										))}
									</div>

									{/* CTA Button */}
									<div className="mt-6">
										<Button
											asChild
											size="lg"
											className="w-full"
										>
											<Link
												href="/#contact-me-name"
												onClick={() =>
													track("cta_click", {
														cta: "get_in_touch",
													})
												}
											>
												Get in Touch
												<ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</Parallax>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
