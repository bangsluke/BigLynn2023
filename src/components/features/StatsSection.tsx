import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import { getData } from "components/features/stats/GoogleSheetsAPI/getData";
import { getPlayers } from "components/features/stats/GoogleSheetsAPI/getPlayers";
import PlayerPointsChartCard from "components/features/stats/PlayerPointsChartCard";
import { useState } from "react";
import ThemingS from "services/ThemingS";
import { PlayerData, YearData } from "../../types";
import savedDataResponse from "./stats/SheetDBio/data/savedDataResponse";

const columns = [
	{ name: "player", header: "Player", minWidth: 100, defaultFlex: 1 },
	{ name: "apps", header: "Apps", maxWidth: 100, defaultFlex: 1 },
	{ name: "totalPoints", header: "Total Points", maxWidth: 100, defaultFlex: 1 },
	{ name: "wins", header: "Wins", maxWidth: 100, defaultFlex: 1 },
	{ name: "win%", header: "Win %", maxWidth: 100, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 };

// Define the possible data methods can be selected
enum DataMethods {
	savedData = "savedData",
	GoogleSheetsAPI = "GoogleSheetsAPI",
	sheetDBio = "sheetDBio", // https://sheetdb.io/
}
// To switch from savedData to an API call, change the value of the dataMethod variable to dataMethods.sheetDBio below.
// Then save the returnedData object into the data folder into file "savedDataResponse.js" and change the dataMethod variable back to dataMethods.savedData.

// Define which method should be used to retrieve the data
const dataMethod: DataMethods = DataMethods.savedData;

// Have a switch case statement to determine which method to use to get the data
let playerData: PlayerData[], yearData: YearData[];
switch (dataMethod) {
	case DataMethods.savedData:
		playerData = savedDataResponse.playerData;
		yearData = savedDataResponse.yearData;
		break;
	case DataMethods.GoogleSheetsAPI:
		// Get the data from the Google Sheets API
		const sheetTitle = getData();
		console.log("sheetTitle: ", sheetTitle);
		const players = getPlayers();
		console.log("players: ", players);
		playerData = players;
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

const StatsSection = () => {
	console.log("playerData: ", playerData);
	console.log("yearData: ", yearData);

	// Const dataSource = playerData;

	// Define the data needed for the view option (player stats or year stats), initially set to player stats
	const [viewOption, setViewOption] = useState("Player Stats");

	// Define the change handler for the view option
	const viewChange = (event: any) => {
		setViewOption(event.target.value);
	};

	const SecondFilter = () => {
		// Player Selection Dropdown
		const PlayerNameSelection = () => {
			return (
				<Tooltip title="Select the player who's stats you wish to view" placement='right'>
					<>
						{/* Added <> fragment to avoid https://mui.com/material-ui/react-tooltip/#custom-child-element issue */}
						<FormControl sx={{ m: 1, minWidth: 200 }} color='primary'>
							<InputLabel id='demo-simple-select-autowidth-label'>Player Selection</InputLabel>
							<Select
								labelId='demo-simple-select-autowidth-label'
								id='demo-simple-select-autowidth'
								value={viewOption}
								onChange={viewChange}
								autoWidth
								label='Select option...'
								name='View Option Select'>
								{playerData.map((player: any) => {
									return (
										<MenuItem key={player.Player} value={player.Player}>
											{player.Player}
										</MenuItem>
									);
								})}
								{/* <MenuItem>Hello</MenuItem>
								<MenuItem>World</MenuItem> */}
							</Select>
						</FormControl>
					</>
				</Tooltip>
			);
		};

		// Year Selection Dropdown
		const YearSelection = () => {
			return (
				<Tooltip title='Select the year stats you wish to view' placement='right'>
					<>
						{/* Added <> fragment to avoid https://mui.com/material-ui/react-tooltip/#custom-child-element issue */}
						<FormControl sx={{ m: 1, minWidth: 200 }} color='primary'>
							<InputLabel id='demo-simple-select-autowidth-label'>Year Selection</InputLabel>
							<Select
								labelId='demo-simple-select-autowidth-label'
								id='demo-simple-select-autowidth'
								value={viewOption}
								onChange={viewChange}
								autoWidth
								label='Select option...'
								name='View Option Select'>
								{yearData.map((year: any) => {
									return (
										<MenuItem key={year.Year} value={year.Year}>
											{year.Year}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</>
				</Tooltip>
			);
		};

		if (viewOption === "Player Stats") {
			return <PlayerNameSelection />;
		} else {
			return <YearSelection />;
		}
	};

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
				{/* Hold the section header text*/}
				<Grid item xs={12} lg={5} md={10}>
					<Grid container spacing={2} sx={{ mb: 0 }}>
						<Grid item xs={12}>
							<Grid container spacing={1}>
								<Grid item>
									<Typography variant='h5' color='primary'>
										Statistics
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='h2' component='div'>
								The Martin Bangs Collection
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='body2'>All the Big Lynn scores and stats since the birth of the competition</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container alignItems='center' justifyContent='space-between' spacing={ThemingS.themeConfig.gridSpacing}>
						{/* Hold the dropdown selectors */}
						<Grid item lg={6} md={6} sm={12} xs={12}>
							{/* View Option Dropdown */}
							<Tooltip title='Select the company to work with' placement='right'>
								<>
									{/* Added <> fragment to avoid https://mui.com/material-ui/react-tooltip/#custom-child-element issue */}
									<FormControl sx={{ m: 1, minWidth: 200 }} color='primary'>
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
								</>
							</Tooltip>
							<SecondFilter />
						</Grid>
						{/* Hold the Project Constraints, Bodystyle and Calculation Iterations cards */}
						<Grid item lg={6} md={6} sm={6} xs={12}>
							<Grid container direction='column' spacing={ThemingS.themeConfig.gridSpacing}>
								<Grid item lg={12} md={12} sm={12} xs={12}>
									{/* <TotalLineChartCard /> */}
								</Grid>
								<Grid item lg={12} md={12} sm={12} xs={12}>
									{/* <BodystyleCard inputData={inputData} setInputData={setInputData} /> */}
								</Grid>
								<Grid item lg={12} md={12} sm={12} xs={12}>
									{/* <CalculationIterationsCard /> */}
								</Grid>
							</Grid>
						</Grid>
						{/* Hold the Player Scores Chart section card */}
						<Grid item lg={12} md={12} sm={12} xs={12}>
							<PlayerPointsChartCard />
						</Grid>
						{/* Hold the main data table section card */}
						<Grid item lg={12} md={12} sm={12} xs={12}>
							<ReactDataGrid idProperty='id' theme='default-light' columns={columns} dataSource={playerData} style={gridStyle} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default StatsSection;
