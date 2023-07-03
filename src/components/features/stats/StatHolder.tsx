import { Grid } from "@mui/material";

interface StatHolderProps {
	headerText: string;
	value: string;
	subValue?: string;
	xsWidth: number;
	StatHolderHeaderFontSize: string;
	StatHolderValuesFontSize: string;
}

export default function StatHolder(props: StatHolderProps) {
	const { headerText, value, subValue, xsWidth, StatHolderHeaderFontSize, StatHolderValuesFontSize } = props; // Destructure props
	return (
		<Grid item xs={xsWidth} style={{ backgroundColor: "null", textAlign: "center", padding: "0.5rem", margin: "0" }}>
			<p
				style={{
					fontWeight: "lighter",
					fontSize: StatHolderHeaderFontSize,
					textTransform: "uppercase",
					lineHeight: StatHolderHeaderFontSize,
					backgroundColor: "null",
					padding: 0,
					margin: "0 0 0.5rem 0",
				}}>
				{headerText}
			</p>
			<h3
				style={{
					fontWeight: "bolder",
					fontSize: StatHolderValuesFontSize,
					lineHeight: StatHolderValuesFontSize,
					backgroundColor: "null",
					padding: 0,
					margin: 0,
				}}>
				{value}
			</h3>
			<h4
				style={{
					fontWeight: "light",
					fontSize: StatHolderHeaderFontSize,
					lineHeight: StatHolderHeaderFontSize,
					backgroundColor: "null",
					padding: 0,
					margin: 0,
				}}>
				{subValue}
			</h4>
		</Grid>
	);
}
