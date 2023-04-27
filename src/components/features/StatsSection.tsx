import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Tab, Tabs } from "@mui/material";
import axios from "axios";
import { getPlayers } from "components/features/stats/GoogleSheetsAPI/getPlayers";
import PlayerPointsChartCard from "components/features/stats/PlayerPointsChartCard";
import SectionHeader from "components/ui/SectionHeader";
import { SyntheticEvent, useState } from "react";
import ThemingS from "services/ThemingS";
import savedDataResponse from "../../data/savedDataResponse";
import { PlayerData, TabPanelProps, YearData } from "../../types/types";

// Define the TabPanelComponent - https://mui.com/material-ui/react-tabs/
function TabPanel(props: TabPanelProps) {
	const { children, value, backgroundColor, index, ...other } = props;
	return (
		<div
			style={{ height: "71vh", width: "100%", padding: "0", margin: "0", backgroundColor: "null" }}
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ pt: 1, backgroundColor, width: "100%", height: "100%" }}>{children}</Box>}
		</div>
	);
}

// Return tab props - https://mui.com/material-ui/react-tabs/
function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const columns = [
	{ name: "player", header: "Player", minWidth: 100, defaultFlex: 1 },
	{ name: "apps", header: "Apps", maxWidth: 100, defaultFlex: 1 },
	{ name: "totalPoints", header: "Total Points", maxWidth: 100, defaultFlex: 1 },
	{ name: "wins", header: "Wins", maxWidth: 100, defaultFlex: 1 },
	{ name: "win%", header: "Win %", maxWidth: 100, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 };

// Define a common minimum width for the dropdowns
const MinDropdownWidth = 140;

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

// Have a switch case statement to determine which method to use to get the data
let playerData: PlayerData[], yearData: YearData[];
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
		// @ts-ignore
		const players: PlayerData = getPlayers();
		console.log("players: ", players);
		// @ts-ignore
		playerData = players;
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

const StatsSection = () => {
	// Define the data needed for the view option (player stats or year stats), initially set to player stats
	const [viewOption, setViewOption] = useState("Player Stats");
	const [playerOption, setPlayerOption] = useState("Andy");
	const [yearOption, setYearOption] = useState("2022");

	// Define the change handler for the view option
	const viewChange = (event: any) => {
		// Console.log("viewChange: event.target.value: ", event.target.value);
		setViewOption(event.target.value);
	};

	// Define the change handler for the player option
	const playerChange = (event: any) => {
		// Console.log("playerChange: event.target.value: ", event.target.value);
		setPlayerOption(event.target.value);
	};

	// Define the change handler for the year option
	const yearChange = (event: any) => {
		// Console.log("yearChange: event.target.value: ", event.target.value);
		setYearOption(event.target.value);
	};

	// Pick which dropdown to display based on the view option
	const SecondFilter = () => {
		// Player Selection Dropdown
		const PlayerNameSelection = () => {
			return (
				<FormControl sx={{ m: 0, minWidth: MinDropdownWidth, width: "90%" }} color='primary'>
					<InputLabel id='demo-simple-select-autowidth-label'>Player Selection</InputLabel>
					<Select
						labelId='demo-simple-select-autowidth-label'
						id='demo-simple-select-autowidth'
						value={playerOption}
						onChange={playerChange}
						autoWidth
						label='Select option...'
						name='View Option Select'>
						Test
						{/* {playerData.map((player: any) => {
							return (
								<MenuItem key={player.player} value={player.player}>
									{player.player}
								</MenuItem>
							);
						})} */}
						{/* <MenuItem>Hello</MenuItem>
								<MenuItem>World</MenuItem> */}
					</Select>
				</FormControl>
			);
		};

		// Year Selection Dropdown
		const YearSelection = () => {
			return (
				<FormControl sx={{ m: 0, minWidth: MinDropdownWidth, width: "90%" }} color='primary'>
					<InputLabel id='demo-simple-select-autowidth-label'>Year Selection</InputLabel>
					<Select
						labelId='demo-simple-select-autowidth-label'
						id='demo-simple-select-autowidth'
						value={yearOption}
						onChange={yearChange}
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
			);
		};

		if (viewOption === "Player Stats") {
			return <PlayerNameSelection />;
		} else {
			return <YearSelection />;
		}
	};

	// Create a state for the tab that is being viewed. 0 is Stats Summary, 1 is Full Stats Details
	const [tabViewIndex, setTabViewIndex] = useState(0);

	// Create a function to handle the tab view change
	const handleTabsViewChange = (event: SyntheticEvent, newValue: number) => {
		setTabViewIndex(newValue);
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
							<Grid container direction='row' spacing={1}>
								<Grid item xs={6} sx={{ backgroundColor: "null" }}>
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
								<Grid item xs={6} sx={{ backgroundColor: "null" }}>
									{/* Player Name/Year Selection Dropdown */}
									<SecondFilter />
								</Grid>
							</Grid>
						</Grid>
						{/* Add a box that holds the tabs */}
						<Box sx={{ color: "white", borderBottom: 1, borderColor: "divider", width: "100%", backgroundColor: "null" }}>
							<Tabs value={tabViewIndex} onChange={handleTabsViewChange} aria-label='basic tabs example' centered>
								<Tab sx={{ color: "white" }} label='Charts' {...a11yProps(0)} />
								<Tab sx={{ color: "white" }} label='Table' {...a11yProps(1)} />
							</Tabs>
						</Box>
						{/* TabPanel 0 - Charts */}
						<TabPanel value={tabViewIndex} index={0} backgroundColor={"null"}>
							{/* Hold the Player Scores Chart section card */}
							<Grid item lg={12} md={12} sm={12} xs={12}>
								<PlayerPointsChartCard />
							</Grid>
						</TabPanel>
						{/* TabPanel 1 - Table */}
						<TabPanel value={tabViewIndex} index={1} backgroundColor={"null"}>
							{/* Hold the main data table section card */}
							<Grid item lg={12} md={12} sm={12} xs={12}>
								<ReactDataGrid idProperty='id' theme='default-light' columns={columns} dataSource={playerData} style={gridStyle} />
							</Grid>
						</TabPanel>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default StatsSection;
