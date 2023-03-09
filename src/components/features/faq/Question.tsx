import Animation from "components/ui/Animation";

interface QuestionProps {
	children: React.ReactElement;
}

export default function Question(props: QuestionProps) {
	const { children } = props;

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

	return (
		<Animation transitionDuration={0.8} transitionFromDirection='left'>
			<div style={Styles.QuestionStyle}>{children}</div>
		</Animation>
	);
}
