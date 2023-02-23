import { Container, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ItineraryComponent from "components/ui/ItineraryComponent";
import ItineraryInfo from "data/ItineraryInfo";
import useIcons from "hooks/useIcons";
import { useEffect } from "react";
import "react-vertical-timeline-component/style.min.css";
import ThemingS from "services/ThemingS";
import { ItineraryItem } from "../../types";

export default function ItinerarySection() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
		AOS.refresh();
	}, []);

	// Sort the itinerary items by the datetime property - https://www.w3schools.com/jsref/jsref_sort.asp & https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
	const sortedItinerary: ItineraryItem[] = ItineraryInfo.sort(function (a, b) {
		return a.datetime - b.datetime;
	});

	// Map over the itinerary info to create all itinerary items
	const itineraryElements = sortedItinerary.map((item) => {
		return <ItineraryComponent id={item.id} key={item.id} iconName={item.iconName} time={item.time} title={item.title} url={item.url} />;
	});

	const MUIIcon = useIcons("MapIcon"); // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
				{/* Hold the section header text */}
				<Grid item xs={12} lg={5} md={10}>
					<Grid container spacing={2} sx={{ mb: 0 }}>
						<Grid item xs={12}>
							<Grid container spacing={1}>
								<Grid item>
									<Typography variant='h5' color='primary'>
										Itinerary
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='h2' component='div'>
								What? When? Where?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='body2'>The planned rounds of golf and key timings</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					{itineraryElements}
				</Grid>
			</Grid>
		</Container>
	);
}
