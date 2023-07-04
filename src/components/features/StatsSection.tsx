import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PlayerSection from "components/features/stats/Players/PlayerSection";
import YearSection from "components/features/stats/Years/YearSection";
import SectionHeader from "components/ui/SectionHeader";
import { useState } from "react";
import ThemingS from "services/ThemingS";

// Define some common styles for the stats sub sections
const CommonStatsStyles = {
	AllStatsSectionHeight: "25rem", // Define a common height for the all stats sections
	MinDropdownWidth: 140, // Define a common minimum width for the dropdowns
	GridStyle: { minHeight: 550 }, // Define the grid style for the stats table sections
};

// Define the possible data methods can be selected
export enum DataMethods {
	savedData = "savedData",
	GoogleSheetsAPI = "GoogleSheetsAPI",
	sheetDBio = "sheetDBio", // https://sheetdb.io/
}
// To switch from savedData to an API call, change the value of the dataMethod variable to dataMethods.sheetDBio below.
// Then save the returnedData object into the data folder into file "savedDataResponse.js" and change the dataMethod variable back to dataMethods.savedData.

// Define which method should be used to retrieve the data. This is passed down to the PlayerSection and YearSection components
const dataMethod: DataMethods = DataMethods.GoogleSheetsAPI;

const StatsSection = () => {
	const theme = useTheme(); // Return the theme for use in the stats section styling

	const [viewOption, setViewOption] = useState<string>("Player Stats"); // Define the data needed for the view option (player stats or year stats), initially set to player stats

	// Define the change handler for the view option
	const viewChange = (event: any) => {
		// Console.log("viewChange: event.target.value: ", event.target.value);
		setViewOption(event.target.value);
	};

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ backgroundColor: "null" }}>
				{/* Hold the section header text*/}
				<SectionHeader
					header='Statistics'
					subheader='The Martin Bangs Collection'
					description='All the Big Lynn scores and stats since the birth of the competition'
				/>

				{/* Hold the dropdown selectors and stats data */}
				<Grid item xs={12} sx={{ backgroundColor: "null" }}>
					<Grid container alignItems='center' justifyContent='space-between' spacing={ThemingS.themeConfig.gridSpacing}>
						{/* Hold the dropdown selectors */}
						<Grid item xs={12} sx={{ marginBottom: "1.5rem", backgroundColor: "null" }}>
							{/* View Option Dropdown */}
							<FormControl sx={{ m: 0, minWidth: CommonStatsStyles.MinDropdownWidth, width: "90%" }} color='primary'>
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
						<Grid
							item
							xs={12}
							sx={{
								marginBottom: "0.5rem",
								backgroundColor: theme.palette.primary[100],
								borderRadius: "8px",
								minWidth: { xs: "105%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
								padding: "1rem",
							}}>
							{/* Add a ternary operator to decide what section to display */}
							{viewOption === "Player Stats" ? (
								<PlayerSection dataMethod={dataMethod} commonStatsStyles={CommonStatsStyles} />
							) : (
								<YearSection dataMethod={dataMethod} commonStatsStyles={CommonStatsStyles} />
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default StatsSection;
