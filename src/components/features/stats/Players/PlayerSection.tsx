import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { DataMethods } from "components/features/StatsSection";
import { getPlayerData } from "components/features/stats/GoogleSheetsAPI/getPlayerData";
import HandicapRange from "components/features/stats/Players/HandicapRange";
import StatHolder from "components/features/stats/StatHolder";
import useScreenSize from "hooks/useMediaQuery";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import ThemingS from "services/ThemingS";
import { PlayerData } from "types/types";

// Define columns for the all player stats table
const columns = [
	{ name: "fullName", header: "Player", minWidth: 140, defaultFlex: 1 },
	{ name: "apps", header: "Apps", minWidth: 80, defaultFlex: 1 },
	{ name: "pointsFinishes", header: "Points Finish", minWidth: 130, defaultFlex: 1 },
	{ name: "wins", header: "Wins", minWidth: 80, defaultFlex: 1 },
	{ name: "winPercentage", header: "Win %", minWidth: 90, defaultFlex: 1 },
	{ name: "pointsTotal", header: "Total Points", minWidth: 120, defaultFlex: 1 },
	{ name: "pointsAverage", header: "Average Points", minWidth: 130, defaultFlex: 1 },
	{ name: "pointsMax", header: "Maximum Points", minWidth: 150, defaultFlex: 1 },
	{ name: "pointsMaxYear", header: "Maximum Year", minWidth: 140, defaultFlex: 1 },
	{ name: "pointsMin", header: "Minimum Points", minWidth: 150, defaultFlex: 1 },
	{ name: "pointsMinYear", header: "Minimum Year", minWidth: 140, defaultFlex: 1 },
	{ name: "pointsLatest", header: "2022 Points", minWidth: 120, defaultFlex: 1 },
	{ name: "pointsExpected2023Points", header: "Predicted 2023 Points", minWidth: 140, defaultFlex: 1 },
	{ name: "handicapLatest", header: "2023 Handicap", minWidth: 140, defaultFlex: 1 },
	{ name: "handicapMinimum", header: "Lowest Handicap", minWidth: 140, defaultFlex: 1 },
	{ name: "handicapMinimumYear", header: "Lowest Handicap Year", minWidth: 170, defaultFlex: 1 },
	{ name: "handicapMaximum", header: "Highest Handicap", minWidth: 140, defaultFlex: 1 },
	{ name: "handicapMaximumYear", header: "Highest Handicap Year", minWidth: 170, defaultFlex: 1 },
	{ name: "handicapExpected", header: "Predicted 2024 Handicap", minWidth: 140, defaultFlex: 1 },
	{ name: "positionAverage", header: "Average Position", minWidth: 120, defaultFlex: 1 },
	{ name: "positionBestFinish", header: "Best Finish", minWidth: 120, defaultFlex: 1 },
	{ name: "positionWorstFinish", header: "Worst Finish", minWidth: 120, defaultFlex: 1 },
	{ name: "positionPredicted", header: "Predicted 2023 Finish", minWidth: 170, defaultFlex: 1 },
];

// Define an example player data object for before the data is loaded
const ExamplePlayerData: PlayerData = {
	id: 0,
	fullName: "AndyBrown",
	firstName: "Andy",
	secondName: "Brown",
	apps: 20,
	pointsFinishes: 18,
	wins: 7,
	winPercentage: "35.0%",
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
	handicapMinimumYear: 2018,
	handicapMaximumYear: 2000,
	positionAverage: 2.9,
	positionBestFinish: 1,
	positionWorstFinish: 11,
	positionPredicted: 4,
};

export default function PlayerSection(props: { dataMethod: DataMethods; commonStatsStyles: any }) {
	const { dataMethod, commonStatsStyles } = props; // Destructure props

	// Define the states for the data
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
					getPlayerData()
						.then((response) => {
							// console.log("response", response);
							setAllPlayerData(response);
							setIsLoaded(true);
						})
						.catch((error) => {
							setIsLoaded(false);
							console.log("Error in fetchData (PlayerSection.tsx):", error);
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
				playerData = savedDataResponse.playerData;
				break;
			default:
				// Default to the saved data
				//@ts-ignore
				playerData = savedDataResponse.playerData;
				break;
		}
	}, [dataMethod]);

	// Get the screen size to define sizes
	const screenSize = useScreenSize();
	// Initialise the sizes for mobile and tablet
	let ProfileImageDimensions = 120; // The dimensions of the profile image
	let PlayerSectionTopBoxHeight = "16rem"; // The height of the top box sections
	let PlayerHeaderFontSize = "1.2rem"; // The font size of the player name
	let StatHolderHeaderFontSize = "0.9rem"; // The font size of the stat holder headers
	let StatHolderValuesFontSize = "2rem"; // The font size of the stat holder values
	// Update the sizes for desktop and larger
	if (screenSize === "md") {
		ProfileImageDimensions = 250;
		PlayerSectionTopBoxHeight = "22rem";
		PlayerHeaderFontSize = "2.5rem";
		StatHolderHeaderFontSize = "1.5rem";
		StatHolderValuesFontSize = "2rem";
	} else if (screenSize === "lg" || screenSize === "xl") {
		ProfileImageDimensions = 250;
		PlayerSectionTopBoxHeight = "22rem";
		PlayerHeaderFontSize = "3rem";
		StatHolderHeaderFontSize = "1.5rem";
		StatHolderValuesFontSize = "3rem";
	}

	// Define the style for the top box section holder
	const TopSectionBoxesStyle = {
		width: "100%",
		padding: "0 0 0 0",
		margin: "0 auto 1rem 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		backgroundColor: "null",
		borderBottom: "2px solid #7cadea",
	};

	// Define the style for the top box sections
	const PlayerSectionTopBoxesStyle = {
		height: PlayerSectionTopBoxHeight,
		padding: "0 0 0 0.2rem",
		marginBottom: "1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		textAlign: "center",
		backgroundColor: "null",
	};

	// Define the style for the other stat sections
	const StatSectionBoxesStyle = {
		height: "100%",
		width: "100%",
		padding: "0 0 1rem 0",
		margin: "0 auto 1rem auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		backgroundColor: "null",
		borderBottom: "2px solid #7cadea",
	};

	// Define the change handler for the player option
	const playerChange = (event: any) => {
		// console.log("allPlayerData: ", allPlayerData);
		// console.log("playerChange: event.target.value: ", event.target.value);
		setSelectedPlayerID(event.target.value);
		if (event.target.value === "All Players") {
			// Deal with the All Players option and add some basic example
			setSelectedPlayerData(ExamplePlayerData); // Set the selected player data to the example data (to stop errors)
			setAllPlayersSelectedBoolean(true); // Switch to show all players section
		} else {
			// Otherwise set the selected player data to the selected player ID
			setSelectedPlayerData(allPlayerData[event.target.value]); // Set the selected player data to the selected player ID
			setAllPlayersSelectedBoolean(false); // Switch to show individual player section
		}
	};

	// Player Selection Dropdown
	const PlayerNameSelection = () => {
		return (
			<FormControl sx={{ margin: "1rem auto 0 auto", minWidth: commonStatsStyles.MinDropdownWidth, width: "100%" }} color='primary'>
				<InputLabel id='demo-simple-select-autowidth-label'>Player Selection</InputLabel>
				<Select
					labelId='demo-simple-select-autowidth-label'
					id='demo-simple-select-autowidth'
					value={selectedPlayerID}
					onChange={playerChange}
					autoWidth
					label='Select option...'
					name='View Option Select'>
					<MenuItem key='All Players' value='All Players'>
						All Players
					</MenuItem>
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
				<Grid item lg={12} md={12} sm={12} xs={12} sx={{ backgroundColor: "null", m: 0, p: 0 }}>
					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={TopSectionBoxesStyle}>
						{/* Hold the player name and image */}
						<Grid item xs={6} md={6} sx={PlayerSectionTopBoxesStyle}>
							{/* Hold the player name */}
							<h2
								style={{
									backgroundColor: "null",
									fontSize: PlayerHeaderFontSize,
									lineHeight: "2rem",
									textAlign: "center",
									textTransform: "uppercase",
									padding: "0",
									margin: "0 auto 1rem auto",
								}}>
								{selectedPlayerData.firstName} {selectedPlayerData.secondName}
							</h2>
							{/* Hold the player image */}
							<div
								style={{
									position: "relative",
									width: `${ProfileImageDimensions}px`,
									height: `${ProfileImageDimensions}px`,
									// backgroundColor: "blue",
									margin: "0 auto",
									padding: "0",
								}}>
								<Image
									src={`/images/players/${selectedPlayerData.firstName}.webp`}
									alt='Player Image'
									layout='fill'
									style={{
										borderRadius: `${ProfileImageDimensions}px`,
									}}
									priority
								/>
							</div>
						</Grid>
						{/* Hold the player handicap information */}
						<Grid item xs={6} md={6} sx={PlayerSectionTopBoxesStyle}>
							<HandicapRange
								lowestHandicap={selectedPlayerData.handicapMinimum}
								highestHandicap={selectedPlayerData.handicapMaximum}
								currentHandicap={selectedPlayerData.handicapLatest}
								handicapMinimumYear={selectedPlayerData.handicapMinimumYear}
								handicapMaximumYear={selectedPlayerData.handicapMaximumYear}
								handicapScaleHeight={ProfileImageDimensions}
							/>
						</Grid>
					</Grid>

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<StatHolder
							headerText='Appearances'
							value={selectedPlayerData.apps.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Points Finishes'
							value={selectedPlayerData.pointsFinishes.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<StatHolder
							headerText='Wins'
							value={selectedPlayerData.wins.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Win %'
							value={selectedPlayerData.winPercentage.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<StatHolder
							headerText='Total Championship Points'
							value={selectedPlayerData.pointsTotal.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Average Championship Points'
							value={selectedPlayerData.pointsAverage.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<StatHolder
							headerText='Maximum Points'
							value={`${selectedPlayerData.pointsMax.toString()}`}
							subValue={` in ${selectedPlayerData.pointsMaxYear.toString()}`}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Minimum Points'
							value={`${selectedPlayerData.pointsMin.toString()}`}
							subValue={` in ${selectedPlayerData.pointsMinYear.toString()}`}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<StatHolder
							headerText='Best Position'
							value={selectedPlayerData.positionBestFinish.toString()}
							xsWidth={4}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Worst Position'
							value={selectedPlayerData.positionWorstFinish.toString()}
							xsWidth={4}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Average Position'
							value={selectedPlayerData.positionAverage.toString()}
							xsWidth={4}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>

					<h2>Predictions</h2>
					<h5>Based on data trends</h5>
					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<StatHolder
							headerText='2022 Points'
							value={selectedPlayerData.pointsLatest.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Predicted 2023 Points'
							value={selectedPlayerData.pointsExpected2023Points.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>
					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<StatHolder
							headerText='Predicted 2023 Position'
							value={selectedPlayerData.positionPredicted.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Predicted 2024 Handicap'
							value={selectedPlayerData.handicapExpected.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>
				</Grid>
				{/* Hold the main data table section card */}
				{/* <Grid item lg={12} md={12} sm={12} xs={12}>
					<PlayerPointsChartCard />
				</Grid> */}
			</>
		);
	};

	// AllPlayersSection - Shown only when 'All Players' is selected
	const AllPlayersSection = () => {
		return (
			<>
				{/* Hold the main data table section card */}
				<Grid item lg={12} md={12} sm={12} xs={12} sx={{ minHeight: commonStatsStyles.AllStatsSectionHeight }}>
					<ReactDataGrid
						idProperty='id'
						theme='default-light'
						columns={columns}
						dataSource={allPlayerData}
						style={commonStatsStyles.GridStyle}
					/>
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
						<Grid
							item
							xs={12}
							sx={{
								textAlign: "center",
								minHeight: "250px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
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
