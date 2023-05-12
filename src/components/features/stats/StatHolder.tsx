import { Grid } from "@mui/material";

interface StatHolderProps {
	headerText: string;
	value: string;
	xsWidth: number;
}

export default function StatHolder(props: StatHolderProps) {
	const { headerText, value, xsWidth } = props; // Destructure props
	return (
		<Grid item xs={xsWidth} style={{ backgroundColor: "none", textAlign: "center" }}>
			<p style={{ fontWeight: "lighter", fontSize: "20px", textTransform: "uppercase" }}>{headerText}</p>
			<h3 style={{ fontWeight: "bolder", fontSize: "40px" }}>{value}</h3>
		</Grid>
	);
}
