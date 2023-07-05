import Animation from "components/ui/Animation";

interface MessageProps {
	children: React.ReactElement;
	type: "question" | "answer";
}

export default function Message(props: MessageProps) {
	const { children, type } = props;

	// Define the common styles for the question and answer detailed below
	const CommonStyles = {
		BorderRadius: "30px",
		FontWeight: "400",
		FontSize: "1rem",
		MinHeight: "2rem",
		MaxWidth: "80%",
		Width: "max-content",
		Padding: "0px 20px",
		Margin: "6px 0px",
		TextColour: "white",
		LineHeight: "1rem",
		Display: "inline-block",
	};

	// Define the styles for the question and answer
	const Styles = {
		QuestionStyle: {
			fontWeight: CommonStyles.FontWeight,
			fontSize: CommonStyles.FontSize,
			minHeight: CommonStyles.MinHeight,
			maxWidth: CommonStyles.MaxWidth,
			width: CommonStyles.Width,
			borderRadius: CommonStyles.BorderRadius,
			padding: CommonStyles.Padding,
			margin: CommonStyles.Margin,
			color: CommonStyles.TextColour,
			lineHeight: CommonStyles.LineHeight,
			display: CommonStyles.Display,
			textAlign: "left" as "left",
			backgroundColor: "#49B9FB",
		},
		AnswerStyle: {
			fontWeight: CommonStyles.FontWeight,
			fontSize: CommonStyles.FontSize,
			minHeight: CommonStyles.MinHeight,
			maxWidth: CommonStyles.MaxWidth,
			width: CommonStyles.Width,
			borderRadius: CommonStyles.BorderRadius,
			padding: CommonStyles.Padding,
			margin: CommonStyles.Margin,
			color: CommonStyles.TextColour,
			lineHeight: CommonStyles.LineHeight,
			display: CommonStyles.Display,
			fontStyle: "italic",
			textAlign: "right" as "right",
			float: "right" as "right",
			right: "0",
			backgroundColor: "#4FD73B",
		},
	};

	const style = type === "question" ? Styles.QuestionStyle : Styles.AnswerStyle;
	const transitionDirection = type === "question" ? "left" : "right";

	return (
		<Animation transitionDuration={1} transitionFromDirection={transitionDirection}>
			<div style={{ display: "inline-block", width: "100%", backgroundColor: "null" }}>
				<div style={style}>{children}</div>
			</div>
		</Animation>
	);
}
