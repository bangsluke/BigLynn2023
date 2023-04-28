import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { DataMethods } from "components/features/StatsSection";
import { getPlayers } from "components/features/stats/GoogleSheetsAPI/getPlayers";
import PlayerPointsChartCard from "components/features/stats/Players/PlayersSubSection/PlayerPointsChartCard";
import savedDataResponse from "data/savedDataResponse";
import { useEffect, useState } from "react";
import ThemingS from "services/ThemingS";
import { PlayerData } from "types/types";

const columns = [
	{ name: "fullName", header: "Player", minWidth: 100, defaultFlex: 1 },
	{ name: "apps", header: "Apps", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsFinishes", header: "Points Finish", minWidth: 100, defaultFlex: 1 },
	{ name: "wins", header: "Wins", minWidth: 100, defaultFlex: 1 },
	{ name: "winPercentage", header: "Win %", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsTotal", header: "Total Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsAverage", header: "Average Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsMax", header: "Maximum Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsMaxYear", header: "Maximum Year", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsMin", header: "Minimum Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsMinYear", header: "Minimum Year", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsLatest", header: "2022 Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsExpected2023Points", header: "Predicted 2023 Points", minWidth: 100, defaultFlex: 1 },
	{ name: "handicapLatest", header: "2023 Handicap", minWidth: 100, defaultFlex: 1 },
	{ name: "handicapMinimum", header: "Lowest Handicap", minWidth: 100, defaultFlex: 1 },
	{ name: "handicapMaximum", header: "Highest Handicap", minWidth: 100, defaultFlex: 1 },
	{ name: "handicapExpected", header: "Predicted 2024 Handicap", minWidth: 100, defaultFlex: 1 },
	{ name: "positionAverage", header: "Average Position", minWidth: 100, defaultFlex: 1 },
	{ name: "positionBestFinish", header: "Best Finish", minWidth: 100, defaultFlex: 1 },
	{ name: "positionWorstFinish", header: "Worst Finish", minWidth: 100, defaultFlex: 1 },
	{ name: "positionPredicted", header: "Predicted 2023 Finish", minWidth: 100, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 }; // TODO: Extract to a common file

// Define an example player data object for before the data is loaded
const ExamplePlayerData: PlayerData = {
	id: 0,
	fullName: "AndyBrown",
	firstName: "Andy",
	secondName: "Brown",
	apps: 19,
	pointsFinishes: 18,
	wins: 6,
	winPercentage: "31.6%",
	pointsTotal: 981,
	pointsAverage: 55,
	pointsMin: 16,
	pointsMax: 85.5,
	pointsMinYear: 2022,
	pointsMaxYear: 2008,
	pointsLatest: 16,
	pointsExpected2023Points: 50.3,
	handicapLatest: 18,
	handicapMinimum: 11,
	handicapMaximum: 34,
	handicapExpected: 12,
	positionAverage: 3.0,
	positionBestFinish: 1,
	positionWorstFinish: 10,
	positionPredicted: 4,
};

// Define a common minimum width for the dropdowns
const MinDropdownWidth = 140; // TODO: Extract to a common file

// Create an async function to get the data from the Google Sheets API
let playerData: PlayerData[]; // Define the playerData variable outside of the function scope

export default function PlayerSection(props: { dataMethod: DataMethods }) {
	const { dataMethod } = props; // Destructure props

	// Add a useEffect that returns the data from the Google Sheets API
	useEffect(() => {
		// Call the function to get the data from the Google Sheets API
		async function getPlayerStatsData() {
			// Have a switch case statement to determine which method to use to get the data
			switch (dataMethod) {
				case DataMethods.GoogleSheetsAPI:
					// Player Data
					playerData = await getPlayers(); // Add an await to the function call to wait for the data to be returned
					console.log("2. playerData from PlayerSection", playerData);
					break;
				case DataMethods.sheetDBio:
					// Get the player data from the sheetdb.io API
					axios.get("https://sheetdb.io/api/v1/rk65krxr1m5a9?sheet=PlayerData").then((response) => {
						console.log("playerData", response.data);
						playerData = response.data;
					});
					break;
				case DataMethods.savedData:
					//@ts-ignore
					playerData = savedDataResponse.playerData; // TODO: Fix this
					break;
				default:
					//@ts-ignore
					playerData = savedDataResponse.playerData;
					break;
			}
		}
		getPlayerStatsData(); // Call the function to get the data from the Google Sheets API
	});

	console.log("3. playerData from PlayerSection outside useEffect", playerData);

	const [playerOption, setPlayerOption] = useState(0); // Set the state for the ID of the player shown
	const [selectedPlayerData, setSelectedPlayerData] = useState<PlayerData>(ExamplePlayerData); // Set the state for the data of the player selected

	// Define the change handler for the player option
	const playerChange = (event: any) => {
		console.log("playerChange: event.target.value: ", event.target.value);
		setPlayerOption(event.target.value);
		if (event.target.value === 100) {
			// Deal with the All Players option
			setSelectedPlayerData(ExamplePlayerData);
		} else {
			setSelectedPlayerData(playerData[event.target.value]);
		}
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
					<MenuItem value='0'>Andy</MenuItem>
					<MenuItem value='1'>Ben</MenuItem>
					<MenuItem value='100'>All Players</MenuItem>
				</Select>
			</FormControl>
		);
	};

	// IndividualPlayerSection - Shown when any player is selected
	const IndividualPlayerSection = () => {
		return (
			<>
				{/* Hold the selected player information */}
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<h3>{selectedPlayerData.firstName}</h3>
					<h3>{selectedPlayerData.secondName}</h3>
					<p>Appearances: {selectedPlayerData.apps}</p>
					<p>Points Finishes: {selectedPlayerData.pointsFinishes}</p>
					<p>Wins: {selectedPlayerData.wins}</p>
					<p>Win %: {selectedPlayerData.winPercentage}</p>
					<p>Total Championship Points: {selectedPlayerData.pointsTotal}</p>
					<p>Average Championship Points: {selectedPlayerData.pointsAverage}</p>
					<p>Maximum Points: {selectedPlayerData.pointsMax}</p>
					<p>Maximum Points Year: {selectedPlayerData.pointsMaxYear}</p>
					<p>Minimum Points: {selectedPlayerData.pointsMin}</p>
					<p>Minimum Points Year: {selectedPlayerData.pointsMinYear}</p>
					<p>2022 Points: {selectedPlayerData.pointsLatest}</p>
					<p>Predicted 2023 Points: {selectedPlayerData.pointsExpected2023Points}</p>
					<p>Current Handicap: {selectedPlayerData.handicapLatest}</p>
					<p>Lowest Handicap: {selectedPlayerData.handicapMinimum}</p>
					<p>Highest Handicap: {selectedPlayerData.handicapMaximum}</p>
					{/* // TODO: Add the years of the highest and lowest handicaps? */}
					<p>Predicted 2024 Handicap: {selectedPlayerData.handicapExpected}</p>
					<p>Average Position: {selectedPlayerData.positionAverage}</p>
					<p>Best Position: {selectedPlayerData.positionBestFinish}</p>
					<p>Worst Position: {selectedPlayerData.positionWorstFinish}</p>
					<p>Predicted 2023 Position: {selectedPlayerData.positionPredicted}</p>
				</Grid>

				{/* Hold the main data table section card */}
				<Grid item lg={12} md={12} sm={12} xs={12}>
					{/* <h1>{playerName}</h1> */}
					<PlayerPointsChartCard />
				</Grid>
			</>
		);
	};

	// AllPlayersSection - Shown only when 'All Players' is selected
	const AllPlayersSection = () => {
		return (
			<>
				{/* Hold the main data table section card */}
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<ReactDataGrid idProperty='id' theme='default-light' columns={columns} dataSource={playerData} style={gridStyle} />
				</Grid>
			</>
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
				<Grid item lg={12} md={12} sm={12} xs={12} sx={{ mb: { xs: 1, lg: 3 } }}>
					{/* Add a ternary operator to decide what section to display */}
					{playerOption === 100 ? <AllPlayersSection /> : <IndividualPlayerSection />}
				</Grid>
			</Grid>
		</Container>
	);
}
