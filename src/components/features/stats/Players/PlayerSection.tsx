import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { DataMethods } from "components/features/StatsSection";
import { getPlayers } from "components/features/stats/GoogleSheetsAPI/getPlayers";
import PlayerPointsChartCard from "components/features/stats/Players/PlayersSubSection/PlayerPointsChartCard";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import ThemingS from "services/ThemingS";
import { PlayerData } from "types/types";
import StatHolder from "../StatHolder";

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

export default function PlayerSection(props: { dataMethod: DataMethods }) {
	const { dataMethod } = props; // Destructure props

	const [isLoaded, setIsLoaded] = useState<boolean>(false); // Define a loaded state for the data
	const [allPlayersSelectedBoolean, setAllPlayersSelectedBoolean] = useState<boolean>(false); // Define a state for whether all players are selected or not
	const [allPlayerData, setAllPlayerData] = useState<PlayerData[]>([]); // Define all the player data state
	const [selectedPlayerID, setSelectedPlayerID] = useState<number>(0); // Set the state for the ID of the selected player
	const [selectedPlayerData, setSelectedPlayerData] = useState<PlayerData>(ExamplePlayerData); // Set the state for the data of the player selected

	// Add a useEffect that returns the data based on the dataMethod
	useEffect(() => {
		switch (dataMethod) {
			case DataMethods.GoogleSheetsAPI:
				// Player Data from Google Sheets API
				const fetchData = async () => {
					// https://blog.logrocket.com/async-rendering-react-suspense/
					getPlayers()
						.then((response) => {
							// console.log("response", response);
							setAllPlayerData(response);
							setIsLoaded(true);
						})
						.catch((error) => {
							setIsLoaded(false);
							console.log("error", error);
						});
				};
				fetchData(); // Call the function
				break;
			case DataMethods.sheetDBio:
				// Get the player data from the sheetdb.io API
				axios.get("https://sheetdb.io/api/v1/rk65krxr1m5a9?sheet=PlayerData").then((response) => {
					console.log("playerData", response.data);
					setAllPlayerData(response.data);
				});
				break;
			case DataMethods.savedData:
				// Get the player data from the saved data
				//@ts-ignore
				playerData = savedDataResponse.playerData; // TODO: Fix this
				break;
			default:
				// Default to the saved data
				//@ts-ignore
				playerData = savedDataResponse.playerData;
				break;
		}
	}, [dataMethod]);

	// Define the change handler for the player option
	const playerChange = (event: any) => {
		// console.log("allPlayerData: ", allPlayerData);
		// console.log("playerChange: event.target.value: ", event.target.value);
		setSelectedPlayerID(event.target.value);
		if (event.target.value === 100) {
			// Deal with the All Players option and add some basic example
			setAllPlayersSelectedBoolean(true);
			setSelectedPlayerData(ExamplePlayerData);
		} else {
			// Otherwise set the selected player data to the selected player ID
			setAllPlayersSelectedBoolean(false);
			setSelectedPlayerData(allPlayerData[event.target.value]);
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
					value={selectedPlayerID}
					onChange={playerChange}
					autoWidth
					label='Select option...'
					name='View Option Select'>
					<MenuItem value='100'>All Players</MenuItem>
					{allPlayerData?.map((player: PlayerData) => {
						return (
							<MenuItem key={player.fullName} value={player.id}>
								{player.firstName}
							</MenuItem>
						);
					})}
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
					<hr style={{ marginBottom: "20px" }} />
					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center'>
						<StatHolder headerText='Appearances' value={selectedPlayerData.apps.toString()} xsWidth={6} />
						<StatHolder headerText='Points Finishes' value={selectedPlayerData.pointsFinishes.toString()} xsWidth={6} />
					</Grid>
					<hr style={{ marginBottom: "20px" }} />
					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center'>
						<StatHolder headerText='Wins' value={selectedPlayerData.wins.toString()} xsWidth={6} />
						<StatHolder headerText='Win %' value={selectedPlayerData.winPercentage.toString()} xsWidth={6} />
					</Grid>

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
					<ReactDataGrid idProperty='id' theme='default-light' columns={columns} dataSource={allPlayerData} style={gridStyle} />
				</Grid>
			</>
		);
	};

	// If not loaded, show a loading spinner
	if (!isLoaded) {
		return (
			<Container>
				<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
					<Grid container direction='row' justifyContent='center' alignItems='center'>
						<Grid item xs={12} sx={{ textAlign: "center" }}>
							{/* TODO: Center align the spinner */}
							<FadeLoader color='#b7eae0' />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		);
	}

	// Once loaded, show the full Player Section
	return (
		isLoaded && (
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
						{allPlayersSelectedBoolean ? <AllPlayersSection /> : <IndividualPlayerSection />}
					</Grid>
				</Grid>
			</Container>
		)
	);
}
