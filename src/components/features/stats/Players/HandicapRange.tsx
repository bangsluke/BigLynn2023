import { Box, Grid, Slider } from "@mui/material";
import { getHandicapMarks } from "./getHandicapMarks";

export interface HandicapProps {
	lowestHandicap: number;
	highestHandicap: number;
	currentHandicap: number;
	handicapMinimumYear?: number;
	handicapMaximumYear?: number;
	handicapScaleHeight?: number;
}

export interface Marks {
	value: number;
	label: string;
}

export default function HandicapRange(props: HandicapProps) {
	const { lowestHandicap, highestHandicap, currentHandicap, handicapMinimumYear, handicapMaximumYear, handicapScaleHeight } = props; // Destructure props

	// Define the minimum and maximum values for the slider and the normalise function
	const MIN = 0; // MIN = Minimum expected value
	let MAX = 36; // MAX = Maximum expected value
	if (highestHandicap > MAX) {
		MAX = highestHandicap;
	}
	const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN); // Function to normalise the values (MIN / MAX could be integrated)

	const marks: Marks[] = getHandicapMarks({ lowestHandicap, highestHandicap, currentHandicap });

	return (
		<Grid container spacing={0} justifyContent='center' alignItems='center' sx={{ backgroundColor: "null", padding: 0, margin: 0 }}>
			{/* Hold the text above the handicap slider */}
			<Grid item xs={12} style={{ backgroundColor: "null", textAlign: "center", margin: "0 0 1rem 0", padding: 0, width: "100%" }}>
				<p
					style={{
						fontWeight: "lighter",
						fontSize: "20px",
						textTransform: "uppercase",
						lineHeight: "2rem",
						margin: 0,
						padding: 0,
					}}>
					Handicap
				</p>
				<p
					style={{
						fontWeight: "lighter",
						fontSize: "12px",
						textTransform: "uppercase",
						lineHeight: "0.5rem",
					}}>
					Lowest: {handicapMinimumYear}
				</p>
				<p
					style={{
						fontWeight: "lighter",
						fontSize: "12px",
						textTransform: "uppercase",
						lineHeight: "0.5rem",
					}}>
					Highest: {handicapMaximumYear}
				</p>
			</Grid>
			{/* Hold the handicap slider */}
			<Grid item xs={12} style={{ backgroundColor: "null", height: handicapScaleHeight, margin: 0, padding: 0 }}>
				<Box
					sx={{
						width: "100%",
						height: "90%",
						backgroundColor: "null",
						textAlign: { xs: "left", md: "center" },
						paddingLeft: { xs: 1, md: 0 },
					}}>
					<Slider
						value={[Math.round(normalise(highestHandicap)), Math.round(normalise(currentHandicap)), Math.round(normalise(lowestHandicap))]}
						marks={marks}
						valueLabelDisplay='off'
						orientation='vertical'
						sx={{
							margin: 0,
							padding: 0,
						}}
						// disabled={true}
					/>
				</Box>
			</Grid>
		</Grid>
	);
}
