import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import AllPlayersSubSection from "components/features/stats/Players/PlayersSubSection/AllPlayersSubSection";
import PlayerSubSection from "components/features/stats/Players/PlayersSubSection/PlayerSubSection";
import { useState } from "react";
import ThemingS from "services/ThemingS";

// Define a common minimum width for the dropdowns
const MinDropdownWidth = 140; // TODO: Extract to a common file

export default function PlayerSection(props: { playerData: any }) {
	const { playerData } = props; // Destructure props

	console.log("playerData from PlayerSection", playerData);

	// Set the state for the player shown
	const [playerOption, setPlayerOption] = useState("BenJoseph");

	// Define the change handler for the player option
	const playerChange = (event: any) => {
		console.log("playerChange: event.target.value: ", event.target.value);
		setPlayerOption(event.target.value);
	};

	// Player Selection Dropdown
	const PlayerNameSelection = () => {
		return (
			<FormControl sx={{ mt: 2, minWidth: MinDropdownWidth, width: "90%" }} color='primary'>
				<InputLabel id='demo-simple-select-autowidth-label'>Player Selection</InputLabel>
				<Select
					labelId='demo-simple-select-autowidth-label'
					id='demo-simple-select-autowidth'
					value={playerOption}
					onChange={playerChange}
					autoWidth
					label='Select option...'
					name='View Option Select'>
					{/* {playerData?.map((player: any) => {
						return (
							<MenuItem key={player.player} value={player.player}>
								{player.player}
							</MenuItem>
						);
					})} */}
					<MenuItem value='Hello'>Hello</MenuItem>
					<MenuItem value='World'>World</MenuItem>
					<MenuItem value='AndyBrown'>Andy</MenuItem>
					<MenuItem value='BenJoseph'>Ben</MenuItem>
					<MenuItem value='All Players'>All Players</MenuItem>
				</Select>
			</FormControl>
		);
	};

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
				{/* Hold the contents of the section */}
				<Grid item xs={12} sx={{ mb: { xs: 1, lg: 3 } }}>
					{/* Show the player selection drop down */}
					<PlayerNameSelection />
				</Grid>

				{/* Hold the contents of the Player Section */}
				<Grid item lg={12} md={12} sm={12} xs={12}>
					{/* Add a ternary operator to decide what section to display */}
					{playerOption === "All Players" ? (
						<AllPlayersSubSection playerData={playerData} />
					) : (
						<PlayerSubSection playerName={playerOption} playerData={playerData} />
					)}
				</Grid>
			</Grid>
		</Container>
	);
}
