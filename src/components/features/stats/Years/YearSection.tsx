import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { DataMethods } from "components/features/StatsSection";
import { getYearData } from "components/features/stats/GoogleSheetsAPI/getYearData";
import StatHolder from "components/features/stats/StatHolder";
import useScreenSize from "hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import ThemingS from "services/ThemingS";
import { YearDataType } from "types/types";

const columns = [
	{ name: "year", header: "Year", minWidth: 100, defaultFlex: 1 },
	{ name: "columnLetter", header: "Column Letter", minWidth: 100, defaultFlex: 1 },
	{ name: "numberPlayers", header: "Number of Players", minWidth: 100, defaultFlex: 1 },
	{ name: "first", header: "First", minWidth: 100, defaultFlex: 1 },
	{ name: "second", header: "Second", minWidth: 100, defaultFlex: 1 },
	{ name: "third", header: "Third", minWidth: 100, defaultFlex: 1 },
	{ name: "fourth", header: "Fourth", minWidth: 100, defaultFlex: 1 },
	{ name: "fifth", header: "Fifth", minWidth: 100, defaultFlex: 1 },
	{ name: "sixth", header: "Sixth", minWidth: 100, defaultFlex: 1 },
	{ name: "seventh", header: "Seventh", minWidth: 100, defaultFlex: 1 },
	{ name: "eighth", header: "Eighth", minWidth: 100, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 }; // TODO: Extract to a common file

// Define a common minimum width for the dropdowns
const MinDropdownWidth = 140; // TODO: Extract to a common file

// Define an example year data object for before the data is loaded
const ExampleYearData: YearDataType = {
	year: "2022",
	columnLetter: "AE",
	numberPlayers: "11",
	first: "Luke Bangs",
	second: "Keith Joseph",
	third: "Dan Carew-Jones",
	fourth: "Ross Bangs",
	fifth: "Dave Rose",
	sixth: "Mark Haywood",
	seventh: "Danny Brown",
	eighth: "Ben Joseph",
};

export default function YearSection(props: { dataMethod: DataMethods }) {
	const { dataMethod } = props; // Destructure props

	// Define the states for the data
	const [isLoaded, setIsLoaded] = useState<boolean>(false); // Define a loaded state for the data
	const [allYearData, setAllYearData] = useState<YearDataType[]>([]); // Define all the year data state
	const [yearOption, setYearOption] = useState("2022"); // Set the state for the year shown
	const [allYearsSelectedBoolean, setAllYearsSelectedBoolean] = useState<boolean>(false); // Define a state for whether all years are selected or not
	const [selectedYearData, setSelectedYearData] = useState<YearDataType>(ExampleYearData); // Set the state for the data of the year selected

	// Add a useEffect that returns the data based on the dataMethod
	useEffect(() => {
		switch (dataMethod) {
			case DataMethods.GoogleSheetsAPI:
				// Year Data from Google Sheets API
				const fetchData = async () => {
					// https://blog.logrocket.com/async-rendering-react-suspense/
					getYearData()
						.then((response) => {
							// console.log("response", response);
							setAllYearData(response);
							setIsLoaded(true);
						})
						.catch((error) => {
							setIsLoaded(false);
							console.log("Error in fetchData (YearSection.tsx):", error);
						});
				};
				fetchData(); // Call the function

				// console.log("allYearData", allYearData);

				break;
			case DataMethods.sheetDBio:
				// Get the year data from the sheetdb.io API
				axios.get("https://sheetdb.io/api/v1/rk65krxr1m5a9?sheet=YearData").then((response) => {
					console.log("yearData", response.data);
					setAllYearData(response.data);
				});
				break;
			case DataMethods.savedData:
				// Get the year data from the saved data
				//@ts-ignore
				yearData = savedDataResponse.yearData; // TODO: Fix this
				break;
			default:
				// Default to the saved data
				//@ts-ignore
				yearData = savedDataResponse.yearData;
				break;
		}
	}, [dataMethod]);

	// TODO: Update all below styles to reference years not players down to the next TODO

	// Get the screen size to define sizes
	const screenSize = useScreenSize();
	// Initialise the sizes for mobile and tablet
	let PlayerSectionTopBoxHeight = "16rem"; // The height of the top box sections
	let PlayerHeaderFontSize = "1.3rem"; // The font size of the player name
	let StatHolderHeaderFontSize = "1rem"; // The font size of the stat holder headers
	let StatHolderValuesFontSize = "2rem"; // The font size of the stat holder values
	// Update the sizes for desktop and larger
	if (screenSize === "md") {
		PlayerSectionTopBoxHeight = "22rem";
		PlayerHeaderFontSize = "2.5rem";
		StatHolderHeaderFontSize = "1.5rem";
		StatHolderValuesFontSize = "2rem";
	} else if (screenSize === "lg" || screenSize === "xl") {
		PlayerSectionTopBoxHeight = "22rem";
		PlayerHeaderFontSize = "3rem";
		StatHolderHeaderFontSize = "1.5rem";
		StatHolderValuesFontSize = "3rem";
	}

	// Define the style for the top box sections
	const PlayerSectionTopBoxesStyle = {
		height: PlayerSectionTopBoxHeight,
		padding: "0.2rem",
		marginBottom: "1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		textAlign: "center",
		backgroundColor: "null",
	};

	// Define the style for the top box section holder
	const TopSectionBoxesStyle = {
		width: "100%",
		padding: "0 0 0 0",
		margin: "0 auto 1rem auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		backgroundColor: "null",
		borderBottom: "2px solid #7cadea",
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

	// TODO: Modify above styles

	// Define the change handler for the year option
	const yearChange = (event: any) => {
		// Console.log("yearChange: event.target.value: ", event.target.value);
		setYearOption(event.target.value);
		if (event.target.value === 100) {
			// Deal with the All Years option and add some basic example
			setAllYearsSelectedBoolean(true);
			setSelectedYearData(ExampleYearData);
		} else {
			// Otherwise set the selected year data to the selected year ID
			setAllYearsSelectedBoolean(false);
			setSelectedYearData(allYearData[event.target.value]);
		}
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
					{/* <MenuItem value='All Years'>All Years</MenuItem> // TODO: Re-add All Players option?  */}
					{allYearData?.map((YearData: YearDataType) => {
						// console.log("YearData", YearData);
						return (
							<MenuItem key={YearData.year} value={YearData.year}>
								{YearData.year}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		);
	};

	// IndividualYearSection - Shown when any year is selected
	const IndividualYearSection = () => {
		return (
			<>
				{/* Hold the selected year information */}
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={TopSectionBoxesStyle}>
						{/* Hold the player name and image */}
						<Grid item xs={7} md={6} sx={PlayerSectionTopBoxesStyle}>
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
								{selectedYearData.year}
							</h2>
						</Grid>
					</Grid>

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<StatHolder
							headerText='Number Players'
							value={selectedYearData.numberPlayers.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='First Place'
							value={selectedYearData.first.toString()}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>

					{/* <h2>Predictions</h2>
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
					</Grid> */}
				</Grid>
				{/* Hold the main data table section card */}
				{/* <Grid item lg={12} md={12} sm={12} xs={12}>
					<PlayerPointsChartCard />
				</Grid> */}
			</>
		);
	};

	// AllYearsSection - Shown only when 'All Years' is selected
	const AllYearsSection = () => {
		return (
			<>
				{/* Hold the main data table section card */}
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<ReactDataGrid idProperty='id' theme='default-light' columns={columns} dataSource={allYearData} style={gridStyle} />
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

	// Once loaded, show the full Year Section
	return (
		isLoaded && (
			<Container>
				<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
					{/* Hold the contents of the section */}
					<Grid item xs={12} sx={{ mb: { xs: 1, lg: 3 } }}>
						{/* Show the year selection drop down */}
						<YearSelection />
					</Grid>

					{/* Hold the contents of the Year Section */}
					<Grid item lg={12} md={12} sm={12} xs={12}>
						{/* Add a ternary operator to decide what section to display */}
						{allYearsSelectedBoolean ? <AllYearsSection /> : <IndividualYearSection />}
					</Grid>
				</Grid>
			</Container>
		)
	);
}
