import { Grid } from "@mui/material";

interface RankHolderProps {
	rankText: string;
	name: string;
	score: number;
	xsWidth: number;
	fontSize: string;
	secondaryFontSize?: string;
}

export default function RankHolder(props: RankHolderProps) {
	const { rankText, name, score, xsWidth, fontSize, secondaryFontSize } = props; // Destructure props

	const sideBoxesWidth = xsWidth === 12 ? 12 : 3;
	const middleBoxWidth = xsWidth === 12 ? 12 : 6;

	return (
		<Grid container item xs={12} style={{ backgroundColor: "null", textAlign: "center", padding: "0.5rem", margin: "0" }}>
			<Grid item xs={sideBoxesWidth} style={{ backgroundColor: "null", textAlign: "center", padding: "0.5rem", margin: "0" }}>
				<p
					style={{
						fontWeight: "lighter",
						fontSize: secondaryFontSize ? secondaryFontSize : fontSize,
						textTransform: "uppercase",
						lineHeight: fontSize,
						backgroundColor: "null",
						padding: 0,
						margin: "0 0 0.5rem 0",
					}}>
					{rankText}
				</p>
			</Grid>
			<Grid item xs={middleBoxWidth} style={{ backgroundColor: "null", textAlign: "center", padding: "0.5rem", margin: "0" }}>
				<h3
					style={{
						fontWeight: "bolder",
						fontSize,
						lineHeight: fontSize,
						backgroundColor: "null",
						padding: 0,
						margin: 0,
					}}>
					{name}
				</h3>
			</Grid>
			<Grid item xs={sideBoxesWidth} style={{ backgroundColor: "null", textAlign: "center", padding: "0.5rem", margin: "0" }}>
				<h3
					style={{
						fontWeight: "lighter",
						fontSize,
						lineHeight: fontSize,
						backgroundColor: "null",
						padding: 0,
						margin: 0,
					}}>
					{score}
				</h3>
			</Grid>
		</Grid>
	);
}
