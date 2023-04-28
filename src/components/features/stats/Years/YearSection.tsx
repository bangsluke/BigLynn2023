import "@inovua/reactdatagrid-community/index.css";
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import AllYearsSubSection from "components/features/stats/Years/YearsSubSection/AllYearsSubSection";
import YearSubSection from "components/features/stats/Years/YearsSubSection/YearSubSection";
import { useState } from "react";
import ThemingS from "services/ThemingS";

// Define a common minimum width for the dropdowns
const MinDropdownWidth = 140; // TODO: Extract to a common file

export default function YearSection(yearData: any) {
	// Set the state for the year shown
	const [yearOption, setYearOption] = useState("2022");

	// Define the change handler for the year option
	const yearChange = (event: any) => {
		// Console.log("yearChange: event.target.value: ", event.target.value);
		setYearOption(event.target.value);
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
					{/* {yearData.map((year: any) => {
						return (
							<MenuItem key={year.Year} value={year.Year}>
								{year.Year}
							</MenuItem>
						);
					})} */}
					<MenuItem value='2019'>2019</MenuItem>
					<MenuItem value='All Years'>All Years</MenuItem>
				</Select>
			</FormControl>
		);
	};

	return (
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
					{yearOption === "All Years" ? <AllYearsSubSection yearData={yearData} /> : <YearSubSection yearNumber={yearOption} />}
				</Grid>
			</Grid>
		</Container>
	);
}
