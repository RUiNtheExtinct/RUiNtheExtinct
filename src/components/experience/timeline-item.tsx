import { cn } from "@/lib/utils"; // Import cn utility
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface TimelineItemProps {
	children: ReactNode;
	isActive?: boolean; // Based on card hover state from parent
}

const TimelineItem: React.FC<TimelineItemProps> = ({
	children,
	isActive = false,
}) => {
	return (
		<div className="relative pl-10 md:pl-12">
			<motion.div
				className={cn(
					"absolute left-0 top-[0.2rem] h-5 w-5 rounded-full border-[3px] border-background md:left-4 z-10 transition-all duration-300 ease-in-out",
					isActive
						? "bg-primary scale-105 shadow-md shadow-primary/30"
						: "bg-border scale-100",
					"-translate-x-1/2" // Center the dot on the line axis
				)}
				layoutId="timeline-dot" // Keep for potential shared layout animations
			/>

			<div
				className={cn(
					"absolute left-0 top-6 h-full w-1 bg-gradient-to-b from-border via-border/80 to-border/0 md:left-4", // Thicker line with gradient fade
					"-translate-x-1/2" // Center the line
				)}
			/>

			{/* Content */}
			<div className="ml-4 md:ml-6 pb-10">{children}</div>
		</div>
	);
};

export default TimelineItem;
