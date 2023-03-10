import Animation from "components/ui/Animation";

interface MessageProps {
	children: React.ReactElement;
	type: "question" | "answer";
}

export default function Message(props: MessageProps) {
	const { children, type } = props;

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

	const style = type === "question" ? Styles.QuestionStyle : Styles.AnswerStyle;
	const transitionDirection = type === "question" ? "left" : "right";

	return (
		<Animation transitionDuration={0.8} transitionFromDirection={transitionDirection}>
			<div style={style}>{children}</div>
		</Animation>
	);
}
