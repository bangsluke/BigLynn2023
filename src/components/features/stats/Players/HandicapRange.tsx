import { Box, Grid, Slider } from "@mui/material";

import ThemingS from "services/ThemingS";

interface HandicapProps {
	lowestHandicap: number;
	highestHandicap: number;
	currentHandicap: number;
}

const MIN = 0; // MIN = Minimum expected value
const MAX = 36; // MAX = Maximum expected value
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

const marks = [
	{
		value: 0,
		label: "0",
	},
	{
		value: 100,
		label: "36",
	},
];

export default function HandicapRange(props: HandicapProps) {
	const { lowestHandicap, highestHandicap, currentHandicap } = props;

	return (
		<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center'>
			<Grid item xs={12} style={{ backgroundColor: "null", textAlign: "center", margin: 0, padding: 20 }}>
				<h2>Handicap</h2>
			</Grid>
			<Grid item xs={6} style={{ backgroundColor: "null", textAlign: "center", margin: 0, padding: 20 }}>
				<Box sx={{ width: "100%", height: 150, backgroundColor: "null" }}>
					<Slider
						value={[Math.round(normalise(highestHandicap)), Math.round(normalise(currentHandicap)), Math.round(normalise(lowestHandicap))]}
						marks={marks}
						valueLabelDisplay='off'
						orientation='vertical'
					/>
				</Box>
			</Grid>
			<Grid item xs={6} style={{ backgroundColor: "null" }}>
				<p>Highest: {highestHandicap}</p>
				<p>Current: {currentHandicap}</p>
				<p>Lowest: {lowestHandicap}</p>
			</Grid>
		</Grid>
	);
}
