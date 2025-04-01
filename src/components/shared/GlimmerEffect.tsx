import React from "react";

/**
 * Adds a left-to-right glimmer effect to the children of its parent container on hover.
 * The parent container MUST have the `group` class applied for the hover effect to work.
 * Place this component as the last child within the parent container for correct visual layering.
 */
const GlimmerEffect: React.FC = () => {
	return (
		<div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
			<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
		</div>
	);
};

export default GlimmerEffect;
