"use client";

import Reveal from "@/components/shared/Reveal";
import ScrambleText from "@/components/typography/ScrambleText";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Linkedin, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TestimonialsSection = () => {
	return (
		<section id="testimonials" className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4 md:px-6">
				<Reveal className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						<ScrambleText
							text="Testimonials"
							className="text-brand-gradient animate-brand-gradient"
							duration={640}
						/>
					</h2>
					<div className="mx-auto mt-4 h-1 w-12 rounded bg-primary"></div>
					<p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
						What people say about working with me. I'm proud to have
						collaborated with amazing professionals who value my
						contributions.
					</p>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2">
					{testimonials.map((testimonial, index) => (
						<Reveal key={testimonial.id} delay={index * 0.06}>
							<Card className="h-full">
								<CardContent className="p-6">
									<div className="mb-4 flex justify-center">
										<div className="rounded-full bg-primary/10 p-2">
											<Quote className="h-6 w-6 text-primary" />
										</div>
									</div>
									<p className="mb-6 text-center text-muted-foreground">
										"{testimonial.testimonial}"
									</p>
									<div className="flex items-center justify-center">
										<div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
											<Image
												src={
													testimonial.avatar ||
													"/placeholder.svg"
												}
												alt={testimonial.name}
												width={48}
												height={48}
												className="h-full w-full object-cover"
											/>
										</div>
										<div>
											<h4 className="font-medium flex items-center">
												<Link
													href={
														testimonial.linkedInUrl ||
														"#"
													}
													target="_blank"
													rel="noopener noreferrer"
													className="hover:text-primary m-0"
												>
													{testimonial.name}
												</Link>
												<span className="mx-2">|</span>
												{testimonial.linkedInUrl && (
													<Link
														href={
															testimonial.linkedInUrl
														}
														target="_blank"
														rel="noopener noreferrer"
														className="hover:text-primary m-0"
													>
														<Linkedin className="h-4 w-4" />
													</Link>
												)}
											</h4>
											<p className="text-sm text-muted-foreground">
												{testimonial.role},{" "}
												{testimonial.company}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
