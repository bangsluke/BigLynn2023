// Import Animation from "components/ui/Animation";
// Import "../../../scss/animations.scss";
import { motion, useAnimation } from "framer-motion";
import useOnScreen from "hooks/useOnScreen";
import React, { useEffect, useRef } from "react";

interface QuestionProps {
	children: React.ReactElement;
}

export default function Question(props: QuestionProps) {
	const { children } = props;

	const controls = useAnimation();
	const rootRef = useRef();
	const onScreen = useOnScreen(rootRef);

	const Styles = {
		QuestionStyle: {
			fontWeight: 600,
			fontSize: "1.2rem",
			lineHeight: "1rem",
			textAlign: "left" as "left",
			minHeight: "2rem",
			maxWidth: "100%",
			width: "max-content",
			// BorderRadius: "20px",
			backgroundColor: "#49B9FB",
			padding: "4px 16px",
			borderRadius: "8px",
			color: "white",
			// MarginBottom: "50px",
		},
	};

	useEffect(() => {
		if (onScreen) {
			controls.start({
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.5,
					ease: "easeOut",
				},
			});
		}
	}, [onScreen, controls]);
	return (
		<motion.div style={Styles.QuestionStyle} ref={rootRef} initial={{ opacity: 0, x: -100 }} animate={controls}>
			{children}
		</motion.div>
	);
}
