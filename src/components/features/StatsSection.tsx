import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { getPlayers } from "components/features/stats/GoogleSheetsAPI/getPlayers";
import { getYears } from "components/features/stats/GoogleSheetsAPI/getYears";
import PlayerSection from "components/features/stats/Players/PlayerSection";
import YearSection from "components/features/stats/Years/YearSection";
import SectionHeader from "components/ui/SectionHeader";
import { useEffect, useState } from "react";
import ThemingS from "services/ThemingS";
import savedDataResponse from "../../data/savedDataResponse";
import { PlayerData, YearData } from "../../types/types";

// Define a common minimum width for the dropdowns
const MinDropdownWidth = 140; // TODO: Extract to a common file

// Define the possible data methods can be selected
enum DataMethods {
	savedData = "savedData",
	GoogleSheetsAPI = "GoogleSheetsAPI",
	sheetDBio = "sheetDBio", // https://sheetdb.io/
}
// To switch from savedData to an API call, change the value of the dataMethod variable to dataMethods.sheetDBio below.
// Then save the returnedData object into the data folder into file "savedDataResponse.js" and change the dataMethod variable back to dataMethods.savedData.

// Define which method should be used to retrieve the data
const dataMethod: DataMethods = DataMethods.GoogleSheetsAPI;

// Create an async function to get the data from the Google Sheets API
let playerData: PlayerData[], yearData: YearData[]; // Define the playerData and yearData variables outside of the function scope
async function getAllStatsData() {
	// Have a switch case statement to determine which method to use to get the data
	switch (dataMethod) {
		// @ts-ignore
		case DataMethods.savedData:
			playerData = savedDataResponse.playerData;
			yearData = savedDataResponse.yearData;
			break;
		// @ts-ignore
		case DataMethods.GoogleSheetsAPI:
			// Get the data from the Google Sheets API
			// const sheetTitle = getData();
			// console.log("sheetTitle: ", sheetTitle);

			// Player Data
			playerData = await getPlayers(); // Add an await to the function call to wait for the data to be returned
			console.log("playerData", playerData);

			// Year Data
			yearData = await getYears(); // Add an await to the function call to wait for the data to be returned
			console.log("yearData", yearData);
			break;
		// @ts-ignore
		case DataMethods.sheetDBio:
			// Get the player data from the sheetdb.io API
			axios.get("https://sheetdb.io/api/v1/rk65krxr1m5a9?sheet=PlayerData").then((response) => {
				console.log("playerData", response.data);
				playerData = response.data;
			});
			// Get the year data from the sheetdb.io API
			axios.get("https://sheetdb.io/api/v1/rk65krxr1m5a9?sheet=YearData").then((response) => {
				console.log("yearData", response.data);
				yearData = response.data;
			});
			break;
		default:
			playerData = savedDataResponse.playerData;
			yearData = savedDataResponse.yearData;
			break;
	}
}

const StatsSection = () => {
	const theme = useTheme(); // Return the theme for use in the stats section styling

	const [viewOption, setViewOption] = useState("Player Stats"); // Define the data needed for the view option (player stats or year stats), initially set to player stats

	useEffect(() => {
		// Call the function to get the data from the Google Sheets API
		getAllStatsData();
	}, []);

	// Define the change handler for the view option
	const viewChange = (event: any) => {
		// Console.log("viewChange: event.target.value: ", event.target.value);
		setViewOption(event.target.value);
	};

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
				{/* Hold the section header text*/}
				<SectionHeader
					header='Statistics'
					subheader='The Martin Bangs Collection'
					description='All the Big Lynn scores and stats since the birth of the competition'
				/>

				{/* Hold the dropdown selectors and stats data */}
				<Grid item xs={12}>
					<Grid container alignItems='center' justifyContent='space-between' spacing={ThemingS.themeConfig.gridSpacing}>
						{/* Hold the dropdown selectors */}
						<Grid item xs={12} sx={{ marginBottom: "0.5rem", backgroundColor: "null" }}>
							{/* View Option Dropdown */}
							<FormControl sx={{ m: 0, minWidth: MinDropdownWidth, width: "90%" }} color='primary'>
								<InputLabel id='demo-simple-select-autowidth-label'>View Option</InputLabel>
								<Select
									labelId='demo-simple-select-autowidth-label'
									id='demo-simple-select-autowidth'
									value={viewOption}
									onChange={viewChange}
									autoWidth
									label='Select option...'
									name='View Option Select'>
									<MenuItem key='1' value='Player Stats'>
										Player Stats
									</MenuItem>
									<MenuItem key='2' value='Year Stats'>
										Year Stats
									</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						{/* Hold the selected section content */}
						<Grid item xs={12} sx={{ marginBottom: "0.5rem", backgroundColor: theme.palette.primary[100], borderRadius: "8px" }}>
							{/* Add a ternary operator to decide what section to display */}
							{viewOption === "Player Stats" ? <PlayerSection playerData={playerData} /> : <YearSection data={yearData} />}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default StatsSection;
