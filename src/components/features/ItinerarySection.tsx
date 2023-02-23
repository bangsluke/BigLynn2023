import { Container, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ItineraryComponent from "components/ui/ItineraryComponent";
import ItineraryInfo from "data/ItineraryInfo";
import useIcons from "hooks/useIcons";
import { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
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
					{/* https://www.npmjs.com/package/react-vertical-timeline-component */}
					<VerticalTimeline>
						<VerticalTimelineElement
							className='vertical-timeline-element--work'
							contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
							date='2011 - present'
							iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							icon={<MUIIcon fontSize='small' />}>
							<h3 className='vertical-timeline-element-title'>Creative Director</h3>
							<h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
							<p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--work'
							date='2010 - 2011'
							iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							icon={<MUIIcon fontSize='small' />}>
							<h3 className='vertical-timeline-element-title'>Art Director</h3>
							<h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
							<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--work'
							date='2008 - 2010'
							iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							icon={<MUIIcon fontSize='small' />}>
							<h3 className='vertical-timeline-element-title'>Web Designer</h3>
							<h4 className='vertical-timeline-element-subtitle'>Los Angeles, CA</h4>
							<p>User Experience, Visual Design</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--work'
							date='2006 - 2008'
							iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
							icon={<MUIIcon fontSize='small' />}>
							<h3 className='vertical-timeline-element-title'>Web Designer</h3>
							<h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
							<p>User Experience, Visual Design</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='April 2013'
							iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
							icon={<MUIIcon fontSize='small' />}>
							<h3 className='vertical-timeline-element-title'>Content Marketing for Web, Mobile and Social Media</h3>
							<h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
							<p>Strategy, Social Media</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='November 2012'
							iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
							icon={<MUIIcon fontSize='small' />}>
							<h3 className='vertical-timeline-element-title'>Agile Development Scrum Master</h3>
							<h4 className='vertical-timeline-element-subtitle'>Certification</h4>
							<p>Creative Direction, User Experience, Visual Design</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2002 - 2006'
							iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
							icon={<MUIIcon fontSize='small' />}>
							<h3 className='vertical-timeline-element-title'>Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
							<h4 className='vertical-timeline-element-subtitle'>Bachelor Degree</h4>
							<p>Creative Direction, Visual Design</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<MUIIcon fontSize='small' />} />
					</VerticalTimeline>
				</Grid>
			</Grid>
		</Container>
	);
}
