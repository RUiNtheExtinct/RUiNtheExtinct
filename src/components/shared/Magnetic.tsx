"use client";

import { motion } from "framer-motion";
import { ReactElement, useRef, useState } from "react";

interface MagneticProps {
	children: ReactElement;
	strength?: number; // How strong the magnetic pull is (default: 30)
}

const Magnetic = ({ children, strength = 30 }: MagneticProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = e;
		const { height, width, left, top } =
			ref.current?.getBoundingClientRect() || {
				height: 0,
				width: 0,
				left: 0,
				top: 0,
			};

		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);

		setPosition({ x: middleX * 0.5, y: middleY * 0.5 });
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			animate={{ x, y }}
			transition={{
				type: "spring",
				stiffness: 150,
				damping: 15,
				mass: 0.1,
			}}
		>
			{children}
		</motion.div>
	);
};

export default Magnetic;
