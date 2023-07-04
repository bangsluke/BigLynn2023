import { AppBar, Container, Grid, Tab, Tabs } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ItineraryComponent from "components/features/itinerary/ItineraryComponent";
import SectionHeader from "components/ui/SectionHeader";
import ItineraryInfo from "data/ItineraryInfo";
import { useEffect, useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ThemingS from "services/ThemingS";
import { ItineraryItem } from "types/types";

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default function ItinerarySection() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
		AOS.refresh();
	}, []);

	const [value, setValue] = useState(0); // Define the state and a handle change function for the tab value
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	// Grab the itinerary info from the data file based on the selected tab
	let selectedItinerary: ItineraryItem[] = [];
	if (value === 0) {
		selectedItinerary = ItineraryInfo.Saturday;
	} else if (value === 1) {
		selectedItinerary = ItineraryInfo.Sunday;
	} else if (value === 2) {
		selectedItinerary = ItineraryInfo.Monday;
	} else {
		selectedItinerary = ItineraryInfo.Saturday;
	}

	// Sort the itinerary items by the datetime property - https://www.w3schools.com/jsref/jsref_sort.asp & https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
	let sortedItinerary: ItineraryItem[] = selectedItinerary.sort(function (a, b) {
		return a.datetime - b.datetime;
	});

	// Map over the itinerary info to create all itinerary items
	const itineraryElements = sortedItinerary.map((item) => {
		return (
			<ItineraryComponent
				id={item.id}
				key={item.id}
				datetime={item.datetime}
				time={item.time}
				title={item.title}
				subtitle={item.subtitle}
				description={item.description}
				url={item.url}
				position={item.position}
				backgroundColor={item.backgroundColor}
				iconName={item.iconName}
			/>
		);
	});

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
				{/* Hold the section header text */}
				<SectionHeader header='Itinerary' subheader='What? When? Where?' description='The planned rounds of golf and key timings' />

				{/* Hold the itinerary tabs and the itinerary items */}
				<Grid item xs={12}>
					<AppBar position='static' color='transparent' sx={{ backgroundColor: "null" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							centered
							indicatorColor='primary'
							textColor='inherit'
							variant='fullWidth'
							aria-label='full width tabs example'>
							<Tab label='Saturday' {...a11yProps(0)} />
							<Tab label='Sunday' {...a11yProps(1)} />
							<Tab label='Monday' {...a11yProps(2)} />
						</Tabs>
					</AppBar>
					<VerticalTimeline
						animate={true} // Add the appear on scroll animation
						layout={"2-columns"}
						lineColor={"white"}>
						{itineraryElements}
					</VerticalTimeline>
				</Grid>
			</Grid>
		</Container>
	);
}
