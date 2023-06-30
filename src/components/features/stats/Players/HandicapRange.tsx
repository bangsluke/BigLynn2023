import { Box, Grid, Slider } from "@mui/material";
import { getHandicapMarks } from "./getHandicapMarks";

export interface HandicapProps {
	lowestHandicap: number;
	highestHandicap: number;
	currentHandicap: number;
	handicapScaleHeight?: number;
}

export interface Marks {
	value: number;
	label: string;
}

export default function HandicapRange(props: HandicapProps) {
	const { lowestHandicap, highestHandicap, currentHandicap, handicapScaleHeight } = props; // Destructure props

	// Define the minimum and maximum values for the slider and the normalise function
	const MIN = 0; // MIN = Minimum expected value
	let MAX = 36; // MAX = Maximum expected value
	if (highestHandicap > MAX) {
		MAX = highestHandicap;
	}
	const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN); // Function to normalise the values (MIN / MAX could be integrated)

	const marks: Marks[] = getHandicapMarks({ lowestHandicap, highestHandicap, currentHandicap });

	return (
		<Grid container spacing={0} justifyContent='center' alignItems='center' sx={{ backgroundColor: "null", margin: 0, padding: 0 }}>
			<Grid item xs={12} style={{ backgroundColor: "null", textAlign: "center", margin: 0, padding: 0 }}>
				<p
					style={{
						fontWeight: "lighter",
						fontSize: "20px",
						textTransform: "uppercase",
						lineHeight: "2rem",
					}}>
					Handicap
				</p>
			</Grid>
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
					/>
				</Box>
			</Grid>
		</Grid>
	);
}
