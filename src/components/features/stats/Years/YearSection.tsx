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
	{ name: "numberPlayers", header: "Number of Players", minWidth: 156, defaultFlex: 1 },
	{ name: "totalYearScore", header: "Total Year Score", minWidth: 156, defaultFlex: 1 },
	{ name: "first", header: "1st", minWidth: 120, defaultFlex: 1 },
	{ name: "second", header: "2nd", minWidth: 120, defaultFlex: 1 },
	{ name: "third", header: "3rd", minWidth: 120, defaultFlex: 1 },
	{ name: "fourth", header: "4th", minWidth: 120, defaultFlex: 1 },
	{ name: "fifth", header: "5th", minWidth: 120, defaultFlex: 1 },
	{ name: "sixth", header: "6th", minWidth: 120, defaultFlex: 1 },
	{ name: "seventh", header: "7th", minWidth: 120, defaultFlex: 1 },
	{ name: "eighth", header: "8th", minWidth: 120, defaultFlex: 1 },
	{ name: "ninth", header: "9th", minWidth: 120, defaultFlex: 1 },
	{ name: "tenth", header: "10th", minWidth: 120, defaultFlex: 1 },
	{ name: "eleventh", header: "11th", minWidth: 120, defaultFlex: 1 },
];

// Define an example year data object for before the data is loaded
const ExampleYearData: YearDataType = {
	columnLetter: "A",
	year: "2023",
	numberPlayers: "11",
	totalYearScore: 501,
	first: "Ross Bangs",
	second: "Martin Bangs",
	third: "Dan Carew-Jones",
	fourth: "Andy Brown",
	fifth: "Luke Bangs",
	sixth: "Dave Rose",
	seventh: "Danny Brown",
	eighth: "Ben Joseph",
	ninth: "Mark Haywood",
	tenth: "Keith Joseph",
	eleventh: "Alex Edwards",
	firstScore: 75,
	secondScore: 68,
	thirdScore: 63,
	fourthScore: 61,
	fifthScore: 61,
	sixthScore: 48,
	seventhScore: 35,
	eighthScore: 33,
	ninthScore: 27,
	tenthScore: 24,
	eleventhScore: 6,
};

export default function YearSection(props: { dataMethod: DataMethods; commonStatsStyles: any }) {
	const { dataMethod, commonStatsStyles } = props; // Destructure props

	// Define the states for the data
	const [isLoaded, setIsLoaded] = useState<boolean>(false); // Define a loaded state for the data
	const [allYearData, setAllYearData] = useState<YearDataType[]>([]); // Define all the year data state
	const [yearOption, setYearOption] = useState("2023"); // Set the state for the year shown
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
							console.log("response", response);
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
				yearData = savedDataResponse.yearData;
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
			<FormControl sx={{ margin: "1rem 0 0 0", minWidth: commonStatsStyles.MinDropdownWidth, width: "100%" }} color='primary'>
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
					</MenuItem>
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

					{selectedYearData.totalYearScore == 0 ? (
						<h3 style={{ textAlign: "center", lineHeight: "2rem" }}>Incomplete stats but past email chains confirm just the winner</h3>
					) : null}

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						<RankHolder
							rankText='2nd'
							name={selectedYearData.second !== undefined ? selectedYearData.second.toString() : "N/A"}
							score={selectedYearData.secondScore !== undefined ? selectedYearData.secondScore : 0}
							xsWidth={4}
							fontSize={StatHolderHeaderFontSize}
						/>
						<RankHolder
							rankText='3rd'
							name={selectedYearData.third !== undefined ? selectedYearData.third.toString() : "N/A"}
							score={selectedYearData.thirdScore !== undefined ? selectedYearData.thirdScore : 0}
							xsWidth={4}
							fontSize={StatHolderHeaderFontSize}
						/>
					</Grid>

					<Grid container spacing={ThemingS.themeConfig.gridSpacing} justifyContent='center' alignItems='center' sx={StatSectionBoxesStyle}>
						{selectedYearData.fourth && (
							<RankHolder
								rankText='4th'
								name={selectedYearData.fourth !== undefined ? selectedYearData.fourth.toString() : "N/A"}
								score={selectedYearData.fourthScore !== undefined ? selectedYearData.fourthScore : 0}
								xsWidth={4}
								fontSize={StatHolderHeaderFontSize}
							/>
						)}
						{selectedYearData.fifth && (
							<RankHolder
								rankText='5th'
								name={selectedYearData.fifth !== undefined ? selectedYearData.fifth.toString() : "N/A"}
								score={selectedYearData.fifthScore !== undefined ? selectedYearData.fifthScore : 0}
								xsWidth={4}
								fontSize={StatHolderHeaderFontSize}
							/>
						)}
						{selectedYearData.sixth && (
							<RankHolder
								rankText='6th'
								name={selectedYearData.sixth !== undefined ? selectedYearData.sixth.toString() : "N/A"}
								score={selectedYearData.sixthScore !== undefined ? selectedYearData.sixthScore : 0}
								xsWidth={4}
								fontSize={StatHolderHeaderFontSize}
							/>
						)}
						{selectedYearData.seventh && (
							<RankHolder
								rankText='7th'
								name={selectedYearData.seventh !== undefined ? selectedYearData.seventh.toString() : "N/A"}
								score={selectedYearData.seventhScore !== undefined ? selectedYearData.seventhScore : 0}
								xsWidth={4}
								fontSize={StatHolderHeaderFontSize}
							/>
						)}
						{selectedYearData.eighth && (
							<RankHolder
								rankText='8th'
								name={selectedYearData.eighth !== undefined ? selectedYearData.eighth.toString() : "N/A"}
								score={selectedYearData.eighthScore !== undefined ? selectedYearData.eighthScore : 0}
								xsWidth={4}
								fontSize={StatHolderHeaderFontSize}
							/>
						)}
						{selectedYearData.ninth && (
							<RankHolder
								rankText='9th'
								name={selectedYearData.ninth !== undefined ? selectedYearData.ninth.toString() : "N/A"}
								score={selectedYearData.ninthScore !== undefined ? selectedYearData.ninthScore : 0}
								xsWidth={4}
								fontSize={StatHolderHeaderFontSize}
							/>
						)}
						{selectedYearData.tenth && (
							<RankHolder
								rankText='10th'
								name={selectedYearData.tenth !== undefined ? selectedYearData.tenth.toString() : "N/A"}
								score={selectedYearData.tenthScore !== undefined ? selectedYearData.tenthScore : 0}
								xsWidth={4}
								fontSize={StatHolderHeaderFontSize}
							/>
						)}
						{selectedYearData.eleventh && (
							<RankHolder
								rankText='11th'
								name={selectedYearData.eleventh !== undefined ? selectedYearData.eleventh.toString() : "N/A"}
								score={selectedYearData.eleventhScore !== undefined ? selectedYearData.eleventhScore : 0}
								xsWidth={4}
								fontSize={StatHolderHeaderFontSize}
							/>
						)}
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
				<Grid item lg={12} md={12} sm={12} xs={12} sx={{ minHeight: commonStatsStyles.AllStatsSectionHeight }}>
					<ReactDataGrid
						idProperty='id'
						theme='default-light'
						columns={allYearsColumns}
						dataSource={allYearData}
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
