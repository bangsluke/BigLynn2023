import { useTheme } from "@mui/material/styles";
import "aos/dist/aos.css"; // You can also use <link> for styles
import useIcons from "hooks/useIcons";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ItineraryComponent = (props: { id: number; time: string; iconName: string; title: string; url: string }) => {
	const { iconName, time, title, url } = props; // Destructure props
	const theme = useTheme();

	const MUIIcon = useIcons(iconName); // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783

	return (
		<>
			{/* Wrap the contents in a link */}
			<a target='_blank' href={url} rel='noopener noreferrer' style={{ textDecoration: "none" }}>
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
			</a>
		</>
	);
};

export default ItineraryComponent;
