import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { DataMethods } from "components/features/StatsSection";
import { getYearData } from "components/features/stats/GoogleSheetsAPI/getYearData";
import RankHolder from "components/features/stats/RankHolder";
import StatHolder from "components/features/stats/StatHolder";
import useScreenSize from "hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import ThemingS from "services/ThemingS";
import { YearDataType } from "types/types";

// Define the column details for displaying all years
const allYearsColumns = [
	{ name: "year", header: "Year", minWidth: 84, defaultFlex: 1 },
	// { name: "columnLetter", header: "Column Letter", minWidth: 100, defaultFlex: 1 },
	{ name: "numberPlayers", header: "Number of Players", minWidth: 178, defaultFlex: 1 },
	{ name: "totalYearScore", header: "Total Year Score", minWidth: 168, defaultFlex: 1 },
	{ name: "first", header: "1st", minWidth: 100, defaultFlex: 1 },
	{ name: "second", header: "2nd", minWidth: 100, defaultFlex: 1 },
	{ name: "third", header: "3rd", minWidth: 100, defaultFlex: 1 },
	{ name: "fourth", header: "4th", minWidth: 100, defaultFlex: 1 },
	{ name: "fifth", header: "5th", minWidth: 100, defaultFlex: 1 },
	{ name: "sixth", header: "6th", minWidth: 100, defaultFlex: 1 },
	{ name: "seventh", header: "7th", minWidth: 100, defaultFlex: 1 },
	{ name: "eighth", header: "8th", minWidth: 100, defaultFlex: 1 },
	{ name: "ninth", header: "9th", minWidth: 100, defaultFlex: 1 },
	{ name: "tenth", header: "10th", minWidth: 100, defaultFlex: 1 },
	{ name: "eleventh", header: "11th", minWidth: 100, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 }; // TODO: Extract to a common file

// Define a common minimum width for the dropdowns
const MinDropdownWidth = 140; // TODO: Extract to a common file

// Define an example year data object for before the data is loaded
const ExampleYearData: YearDataType = {
	year: "2022",
	columnLetter: "AE",
	numberPlayers: "11",
	totalYearScore: 375,
	first: "Luke Bangs",
	second: "Keith Joseph",
	third: "Dan Carew-Jones",
	fourth: "Ross Bangs",
	fifth: "Dave Rose",
	sixth: "Mark Haywood",
	seventh: "Richard Brown",
	eighth: "Danny Brown",
	ninth: "Ben Joseph",
	tenth: "Martin Bangs",
	eleventh: "Andy Brown",
	firstScore: 80,
	secondScore: 79,
	thirdScore: 59,
	fourthScore: 56,
	fifthScore: 54,
	sixthScore: 47,
	seventhScore: 36,
	eighthScore: 36,
	ninthScore: 35,
	tenthScore: 30,
	eleventhScore: 16,
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

	// Get the screen size to define sizes
	const screenSize = useScreenSize();
	// Initialise the sizes for mobile and tablet
	let YearSectionTopBoxStyle = "4rem"; // The height of the top box sections
	let YearHeaderFontSize = "3rem"; // The font size of the year name
	let StatHolderHeaderFontSize = "1rem"; // The font size of the stat holder headers
	let StatHolderValuesFontSize = "2rem"; // The font size of the stat holder values
	// Update the sizes for desktop and larger
	if (screenSize === "md") {
		StatHolderHeaderFontSize = "1.5rem";
		StatHolderValuesFontSize = "2rem";
	} else if (screenSize === "lg" || screenSize === "xl") {
		StatHolderHeaderFontSize = "1.5rem";
		StatHolderValuesFontSize = "3rem";
	}

	// Define the style for the top box sections
	const YearSectionTopBoxesStyle = {
		height: YearSectionTopBoxStyle,
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

	// Define the change handler for the year option
	const yearChange = (event: any) => {
		// console.log("yearChange: event.target.value: ", event.target.value);
		// console.log("allYearData", allYearData);
		const index = allYearData.findIndex((item) => item.year === event.target.value); // Find the index of the selected year
		setYearOption(event.target.value);
		if (event.target.value === "All Years") {
			// Deal with the All Years option and add some basic example
			setSelectedYearData(ExampleYearData); // Set the selected year data to the example data (to stop errors)
			setAllYearsSelectedBoolean(true); // Switch to show all years section
			// console.log("allYearData", allYearData);
			const filteredAllYearData = allYearData.filter((YearData) => YearData.year !== "Config Row").map((YearData) => YearData); // Filter out the config row
			// console.log("filteredAllYearData", filteredAllYearData);
			setAllYearData(filteredAllYearData); // Set the all year data to the filtered all year data
		} else {
			// Otherwise set the selected year data to the selected year ID
			setSelectedYearData(allYearData[index]); // Set the selected year data to the selected year ID
			setAllYearsSelectedBoolean(false); // Switch to show individual year section
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
					<MenuItem key='All Years' value='All Years'>
						All Years
					</MenuItem>{" "}
					{/* // TODO: Re-add All Years option?  */}
					{allYearData?.map((YearData: YearDataType) => {
						if (YearData.year === "Config Row") {
							return null; // Skip the config row
						}

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
						<Grid item xs={7} md={6} sx={YearSectionTopBoxesStyle}>
							{/* Hold the player name */}
							<h2
								style={{
									backgroundColor: "null",
									fontSize: YearHeaderFontSize,
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
							value={selectedYearData.numberPlayers !== undefined ? selectedYearData.numberPlayers.toString() : "N/A"}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
						<StatHolder
							headerText='Total Year Score'
							value={selectedYearData.totalYearScore !== undefined ? selectedYearData.totalYearScore.toString() : "N/A"}
							xsWidth={6}
							StatHolderHeaderFontSize={StatHolderHeaderFontSize}
							StatHolderValuesFontSize={StatHolderValuesFontSize}
						/>
					</Grid>

					<h2 style={{ fontSize: StatHolderHeaderFontSize }}>Rank</h2>
					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<RankHolder
							rankText='1st'
							name={selectedYearData.first !== undefined ? selectedYearData.first.toString() : "N/A"}
							score={selectedYearData.firstScore !== undefined ? selectedYearData.firstScore : 0}
							xsWidth={12}
							fontSize={StatHolderValuesFontSize}
							secondaryFontSize={StatHolderHeaderFontSize}
						/>
					</Grid>

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<RankHolder
							rankText='2nd'
							name={selectedYearData.second !== undefined ? selectedYearData.second.toString() : "N/A"}
							score={selectedYearData.secondScore !== undefined ? selectedYearData.secondScore : 0}
							xsWidth={4}
							fontSize={StatHolderHeaderFontSize}
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

	// AllYearsSection - Shown only when 'All Years' is selected
	const AllYearsSection = () => {
		return (
			<>
				{/* Hold the main data table section card */}
				<Grid item lg={12} md={12} sm={12} xs={12} sx={{ height: "max-content" }}>
					<ReactDataGrid idProperty='id' theme='default-light' columns={allYearsColumns} dataSource={allYearData} style={gridStyle} />
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
