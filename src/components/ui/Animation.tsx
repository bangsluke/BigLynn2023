import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimationProps {
	children: React.ReactElement;
	transitionDuration: number;
	transitionFromDirection: "top" | "bottom" | "left" | "right";
}

interface OpacityAndTranslate {
	opacity: number;
	translateX?: number;
	translateY?: number;
}

interface TransitionVariant {
	top: { visible: OpacityAndTranslate; hidden: OpacityAndTranslate };
	bottom: { visible: OpacityAndTranslate; hidden: OpacityAndTranslate };
	left: { visible: OpacityAndTranslate; hidden: OpacityAndTranslate };
	right: { visible: OpacityAndTranslate; hidden: OpacityAndTranslate };
}

function Animation(props: AnimationProps) {
	const { children, transitionDuration, transitionFromDirection } = props; // Destructure the props

	const controls = useAnimation();
	const [ref, inView] = useInView();

	// Define the animation variants
	const transitionVariant: TransitionVariant = {
		top: { visible: { opacity: 1, translateY: 0 }, hidden: { opacity: 0, translateY: -275 } },
		bottom: { visible: { opacity: 1, translateY: 0 }, hidden: { opacity: 0, translateY: 275 } },
		left: { visible: { opacity: 1, translateX: 0 }, hidden: { opacity: 0, translateX: -275 } },
		right: { visible: { opacity: 1, translateX: 0 }, hidden: { opacity: 0, translateX: 275 } },
	};

	// When the element is in view, start the animation
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial='hidden'
			transition={{ duration: transitionDuration }}
			variants={transitionVariant[transitionFromDirection]}>
			{children}
		</motion.div>
	);
}

export default Animation;
