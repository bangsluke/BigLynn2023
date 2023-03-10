import Animation from "components/ui/Animation";

interface AnswerProps {
	children: React.ReactElement;
}

export default function Answer(props: AnswerProps) {
	const { children } = props;

	const Styles = {
		AnswerStyle: {
			fontWeight: 200,
			fontSize: "1.1rem",
			fontStyle: "italic",
			textAlign: "right" as "right",
			minHeight: "2rem",
			maxWidth: "100%",
			width: "max-content",
			float: "right" as "right",
			right: "0",
			borderRadius: "8px",
			backgroundColor: "#4FD73B",
			color: "white",
			// Display: "inline",
			padding: "8px 16px",
			// Border-radius: 8px;
			// MarginBottom: "50px",
		},
	};

	return (
		<Animation transitionDuration={0.8} transitionFromDirection='right'>
			<div style={Styles.AnswerStyle}>{children}</div>
		</Animation>
	);
}
