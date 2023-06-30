import { Box, Grid, Slider } from "@mui/material";

interface HandicapProps {
	lowestHandicap: number;
	highestHandicap: number;
	currentHandicap: number;
	handicapScaleHeight: number;
}

const MIN = 0; // MIN = Minimum expected value
const MAX = 36; // MAX = Maximum expected value
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

export default function HandicapRange(props: HandicapProps) {
	const { lowestHandicap, highestHandicap, currentHandicap, handicapScaleHeight } = props;

	const marks = [
		{
			value: 0,
			label: "0",
		},
		{
			value: (highestHandicap / 36) * 100,
			label: `${highestHandicap} - Highest`,
		},
		{
			value: (currentHandicap / 36) * 100,
			label: `${currentHandicap} - Current`,
		},
		{
			value: (lowestHandicap / 36) * 100,
			label: `${lowestHandicap} - Lowest`,
		},
		{
			value: 100,
			label: "36",
		},
	];

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
