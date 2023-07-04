import { AppBar, Container, Grid, Link, Tab, Tabs, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Animation from "components/ui/Animation";
import SectionHeader from "components/ui/SectionHeader";
import Image from "next/image";
import { useState } from "react";
import ThemingS from "services/ThemingS";

// Styles
const MapBoxWrapper = styled("section")({
	position: "relative",
	// Height: "600px",
	// Width: "100%",
	borderRadius: "16px",
	// MarginBottom: "30px",
	border: "1px solid var(--jet)",
	overflow: "hidden",
});

// Define the styles for the other facilities section
const OtherFacilitiesStyles = {
	height: "200px",
};

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

const GainsboroughDetails = () => {
	return (
		<Animation transitionDuration={0.2} transitionFromDirection={"right"}>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ backgroundColor: "null" }}>
				{/* Hold the course description */}
				<Grid item xs={12}>
					<Typography variant='h4' style={{ margin: "0.5rem 0.5rem" }}>
						Description
					</Typography>
					<Typography variant='body1' style={{ margin: "0.5rem 0.5rem" }}>
						The Gainsborough course measures over 7,000 yards with a Par of 71. The undulating terrain and four substantial lakes challenge
						the skills of golfers of all abilities. The 10th requires a drive and second shot over the same lake, when played from the back
						tee, and has been voted one of the most outstanding holes in East Anglia by the Professional Golf Association (PGA).
					</Typography>
				</Grid>
				{/* Hold the course image */}
				<Grid item xs={12} md={4} lg={2} sx={{ textAlign: "center" }}>
					<Link
						style={{ textDecoration: "none" }}
						target='_blank'
						href='https://stokebynayland.com/wp-content/uploads/2020/08/Gainsborough-course-guide.pdf?_ga=2.168750881.1606001850.1678297032-2118266097.1678297032'>
						<Image src='/images/GainsboroughCourseImage.png' alt='Gainsborough Course Image' layout='fixed' width='121.45' height='200' />
					</Link>
				</Grid>
				{/* Hold the course facts */}
				<Grid item xs={12} md={8} lg={10}>
					<Typography variant='h4' style={{ margin: "0.5rem 0rem" }}>
						Course Facts
					</Typography>
					<Typography variant='body1' style={{ margin: "0rem 0.5rem" }}>
						- The amateur course record from the white tees is 63
					</Typography>
					<Typography variant='body1' style={{ margin: "0rem 0.5rem" }}>
						- In competitions during 2017, the 10th hole has only recorded 4 birdies
					</Typography>
					<Typography variant='body1' style={{ margin: "0rem 0.5rem" }}>
						- The 10th hole is the hardest on the course, with an average score score 5.77 for men and 6.64 for ladies
					</Typography>
					<Typography variant='body1' style={{ margin: "0rem 0.5rem" }}>
						- The Gainsborough is 7,098 yards from the black tees and 6,321 yards from the white tees
					</Typography>
				</Grid>
			</Grid>
		</Animation>
	);
};

const ConstableDetails = () => {
	return (
		<Animation transitionDuration={0.2} transitionFromDirection={"left"}>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ backgroundColor: "null" }}>
				{/* Hold the course description */}
				<Grid item xs={12}>
					<Typography variant='h4' style={{ margin: "0.5rem 0.5rem" }}>
						Description
					</Typography>
					<Typography variant='body1' style={{ margin: "0.5rem 0.5rem" }}>
						The Constable course is also set amongst wooded plantations with several natural water hazards in peaceful countryside. It
						measures 6,544 yards with a Par of 72, and, as with the Gainsborough, the final hole presents a formidable drive over one of the
						large lakes, to a plateau green with the Sports Bar beckoning beyond.
					</Typography>
				</Grid>
				{/* Hold the course image */}
				<Grid item xs={12} md={4} lg={2} sx={{ textAlign: "center" }}>
					<Link
						style={{ textDecoration: "none" }}
						target='_blank'
						href='https://stokebynayland.com/wp-content/uploads/2020/08/Constable-course-guide.pdf?_ga=2.161777596.1606001850.1678297032-2118266097.1678297032'>
						<Image src='/images/ConstableCourseImage.png' alt='Constable Course Image' layout='fixed' width='121.45' height='200' />
					</Link>
				</Grid>
				{/* Hold the course facts */}
				<Grid item xs={12} md={8} lg={10}>
					<Typography variant='h4' style={{ margin: "0.5rem 0rem" }}>
						Course Facts
					</Typography>
					<Typography variant='body1' style={{ margin: "0rem 0.5rem" }}>
						- The amateur course record from the white tees is 70
					</Typography>
					<Typography variant='body1' style={{ margin: "0rem 0.5rem" }}>
						- In competitions during 2017, the 18th hole has only recorded 3 birdies
					</Typography>
					<Typography variant='body1' style={{ margin: "0rem 0.5rem" }}>
						- The 14th hole is the hardest for men with average score 5.27, and the 3rd hole is the hardest for ladies with an average score
						of 6.14
					</Typography>
					<Typography variant='body1' style={{ margin: "0rem 0.5rem" }}>
						- The Constable course is 6,477 yards from the white tees
					</Typography>
				</Grid>
			</Grid>
		</Animation>
	);
};

export default function EventDetailsSection() {
	// Define the state and a handle change function for the tab value
	const [tabValue, setTabValue] = useState(0);
	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	// Define the state and a handle change function for the other facilities toggle value
	const [facilitiesView, setFacilitiesView] = useState("Spa");
	const handleToggleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
		setFacilitiesView(nextView);
	};

	// Grab the itinerary info from the data file based on the selected tab
	let selectedCourse;
	if (tabValue === 0) {
		selectedCourse = <GainsboroughDetails />;
	} else if (tabValue === 1) {
		selectedCourse = <ConstableDetails />;
	} else {
		selectedCourse = <GainsboroughDetails />;
	}

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ height: "max-content" }}>
				{/* Hold the section header text */}
				<SectionHeader
					header='Event Details'
					subheader='Big Lynn 2023'
					description='Everything you need to know about the competitions 27th year...'
				/>

				{/* Hold the body information */}
				<Grid item xs={12} sx={{ height: "max-content", mb: 0 }}>
					<Grid container spacing={2}>
						{/* Map and Directions */}
						<Grid item xs={12} sx={{ height: "max-content", display: "flex", flexDirection: "column", mb: 3 }}>
							<Typography variant='h3' color='primary' style={{ marginTop: "0.5rem" }}>
								Stoke By Nayland
							</Typography>
							<Typography variant='body1' style={{ marginTop: "1rem" }}>
								Idyllically located in the Dedham Vale Area of Outstanding Natural Beauty, this award-winning, family-owned spa hotel is in
								the countryside on the Essex/Suffolk border (perfect location isn&apos;t that right Hoj!)
							</Typography>
							<a
								href='https://www.google.com/maps/dir/?api=1&destination=Stoke+by+Nayland+Resort&origin=Current+Location&travelmode=driving'
								target='_blank'
								rel='noreferrer'
								style={{ textAlign: "center" }}>
								<Typography variant='body1' style={{ marginTop: "1rem" }}>
									Get Directions - Stoke by Nayland Resort, Keepers Lane, Leavenheath, Colchester, Essex, CO6 4PZ
								</Typography>
							</a>
							{/* Add an iframe holding a map to Stoke By Nayland. */}
							<MapBoxWrapper
								data-mapbox
								sx={{
									backgroundColor: "null",
									width: { xs: "95%", sm: "90%", md: "80%" },
									height: { xs: "15rem", sm: "25rem", md: "30rem" },
									margin: "1rem auto 0 auto",
									left: "0",
								}}>
								<figure style={{ height: "100%", width: "100%", margin: 0, padding: 0 }}>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.5011337624255!2d0.8636819159960039!3d51.997745682552775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d900b5862e7357%3A0xad04129065912290!2sStoke%20by%20Nayland%20Resort!5e0!3m2!1sen!2suk!4v1665517714971!5m2!1sen!2suk'
										allowFullScreen={true}
										referrerPolicy='no-referrer-when-downgrade'
										width='900'
										height='600'
										loading='lazy'
										style={{ width: "100%", height: "100%", border: "none", filter: "grayscale(1) invert(1)" }}></iframe>
								</figure>
							</MapBoxWrapper>
						</Grid>

						{/* Course Information */}
						<Grid item xs={12} sx={{ height: "max-content", mb: 3 }}>
							<Typography variant='h3' color='primary' style={{ marginTop: "0.5rem" }}>
								Golf Course Details
							</Typography>
							<Typography variant='body1' component='div' style={{ marginTop: "1rem" }}>
								Created in the early 70s both the Gainsborough and Constable golf courses are well-established amongst lakes and mature
								trees. The designs skilfully incorporate the inherent natural beauty of the land.
							</Typography>

							<Grid item xs={12} sx={{ width: "100%", marginTop: "1rem" }}>
								{/* <Box sx={{ bgcolor: "background.paper", width: "100%", marginTop: "1rem" }}> */}
								<AppBar position='static'>
									<Tabs
										value={tabValue}
										onChange={handleTabChange}
										indicatorColor='secondary'
										textColor='inherit'
										variant='fullWidth'
										aria-label='full width tabs example'>
										<Tab label='Gainsborough' {...a11yProps(0)} />
										<Tab label='Constable' {...a11yProps(1)} />
									</Tabs>
								</AppBar>
							</Grid>

							<Grid item xs={12} sx={{ width: "100%", marginTop: "1rem", minHeight: "5rem" }}>
								<>{selectedCourse}</>
							</Grid>
						</Grid>

						{/* Other Facilities */}
						<Grid item xs={12} sx={{ height: "max-content" }}>
							{/* Hold the Other Facilities header text */}
							<Typography variant='h3' color='primary' style={{ margin: "0.5rem 0" }}>
								Other Facilities
							</Typography>

							{/* Hold the Other Facilities option buttons, text and images in various layouts for different screen sizes */}
							<Grid container spacing={0} sx={{ backgroundColor: "null" }}>
								{/* Hold the facility options */}
								<Grid
									item
									xs={3}
									sm={2}
									md={1}
									sx={{ backgroundColor: "null", paddingTop: "0.5rem", height: OtherFacilitiesStyles.height }}>
									{/* Add a toggle button group to allow the user to change the view of the facility options */}
									<ToggleButtonGroup orientation='vertical' value={facilitiesView} exclusive onChange={handleToggleChange}>
										<ToggleButton value='spa' aria-label='spa'>
											Spa
										</ToggleButton>
										<ToggleButton value='gym' aria-label='gym'>
											Gym
										</ToggleButton>
										<ToggleButton value='dining' aria-label='dining'>
											Dining
										</ToggleButton>
									</ToggleButtonGroup>
								</Grid>
								{/* Hold the content for the selected facilities */}
								<Grid
									item
									xs={9}
									sm={4}
									md={6}
									sx={{
										display: "flex",
										flexDirection: "column",
										mb: 3,
										padding: "0.5rem",
										backgroundColor: "null",
										height: OtherFacilitiesStyles.height,
									}}>
									{facilitiesView === "spa" && (
										<Typography variant='body1' style={{ marginTop: "1rem" }}>
											There is the{" "}
											<a href='https://www.stokebynayland.com/spa/peake-spa/' target='_blank' rel='noreferrer'>
												Peake Spa
											</a>{" "}
											with a pool, steam room, sanarium (a weaker version of a sauna), a jacuzzi and a concept shower (whatever that is). It
											is open from 07:30-19:30, but we will just need to book 2 hours in advance.
										</Typography>
									)}
									{facilitiesView === "gym" && (
										<Typography variant='body1' style={{ marginTop: "1rem" }}>
											There is{" "}
											<a href='https://www.stokebynayland.com/hotel/hotel-facilities/peake-fitness/' target='_blank' rel='noreferrer'>
												Peake Fitness
											</a>{" "}
											equipped with Technogym equipment and over 90 different classes on offer. We have complimentary access to all of this.
											Open 07:30-19:30.
										</Typography>
									)}
									{facilitiesView === "dining" && (
										<Typography variant='body1' style={{ marginTop: "1rem" }}>
											There are two main dining options,{" "}
											<a href='https://www.stokebynayland.com/dining/lakes-restaurant/' target='_blank' rel='noreferrer'>
												Lakes Restaurant
											</a>{" "}
											and the{" "}
											<a href='https://www.stokebynayland.com/dining/sports-bar/' target='_blank' rel='noreferrer'>
												Sports Bar
											</a>
											. More links such as menus and room service details can be found in the <a href='#usefulLinks'>Useful Links</a>{" "}
											section.
										</Typography>
									)}
								</Grid>
								{/* Hold the facility image(s) */}
								<Grid
									item
									xs={12}
									sm={4}
									md={5}
									sx={{
										backgroundColor: "null",
										height: OtherFacilitiesStyles.height,
										textAlign: "center",
										marginTop: { xs: "-3rem", sm: "0rem" },
									}}>
									{facilitiesView === "spa" && (
										<Image src='/images/PeakeSpa.jpg' alt='Peake Spa Image' layout='fixed' width='253' height='200' />
									)}
									{facilitiesView === "gym" && (
										<Image src='/images/PeakeFitness.jpg' alt='Peake Fitness Image' layout='fixed' width='300' height='200' />
									)}
									{facilitiesView === "dining" && (
										<Image src='/images/LakesRestaurant.png' alt='Lakes Restaurant Image' layout='fixed' width='308' height='200' />
									)}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
