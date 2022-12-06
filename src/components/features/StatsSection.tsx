import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Tooltip, Typography } from "@mui/material";
import PlayerPointsChartCard from "components/features/stats/PlayerPointsChartCard";
import { useState } from "react";
import ThemingS from "services/ThemingS";

import { getData } from "getData";
import { getPlayers } from "getPlayers";

const StatsSection = () => {
	// Define the data needed for the view option
	const [viewOption, setViewOption] = useState({});

	const viewChange = (event: any) => {
		setViewOption(event.target.value);
	};

	const sheetTitle = getData();
	console.log("sheetTitle: ", sheetTitle);

	const players = getPlayers();
	console.log("players: ", players);

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
							{/* Player Selection Dropdown */}
							<Tooltip title='Select the player whos stats you wish to view' placement='right'>
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
											<MenuItem>Hello</MenuItem>
											<MenuItem>World</MenuItem>
										</Select>
									</FormControl>
								</>
							</Tooltip>
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
						{/* Hold the Player Positions Chart section card */}
						<Grid item lg={12} md={12} sm={12} xs={12}>
							{/* <PlayerPositionsChartCard /> */}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default StatsSection;
