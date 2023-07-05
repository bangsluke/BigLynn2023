import "aos/dist/aos.css"; // You can also use <link> for styles
import useIcons from "hooks/useIcons";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ItineraryItem } from "types/types";

// Create the itinerary component from https://www.npmjs.com/package/react-vertical-timeline-component
const ItineraryComponent = (props: ItineraryItem) => {
	const { iconName, time, title, subtitle, description, url, position, backgroundColor } = props; // Destructure props

	const MUIIcon = useIcons(iconName); // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783

	const HyperlinkedElement = () => {
		return (
			<a target='_blank' href={url} rel='noopener noreferrer' style={{ textDecoration: "none" }}>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: backgroundColor, color: "#000", marginBottom: "1rem" }} // Controls the text color of all of the content
					contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
					date={time} // The time of the event
					// DateClassName='timelineDateStyle' // Doesn't work
					icon={<MUIIcon fontSize='medium' />}
					iconStyle={{ background: backgroundColor, color: "#fff" }}
					position={position}
					style={{ backgroundColor: "null" }}>
					<h3 className='vertical-timeline-element-title itinerary-title'>{title}</h3>
					<h4 className='vertical-timeline-element-subtitle itinerary-subtitle'>{subtitle}</h4>
					<p className='itinerary-description'>{description}</p>
				</VerticalTimelineElement>
			</a>
		);
	};

	const NonHyperlinkedElement = () => {
		return (
			<VerticalTimelineElement
				className='vertical-timeline-element--work'
				contentStyle={{ background: backgroundColor, color: "#000", marginBottom: "1rem" }} // Controls the text color of all of the content
				contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
				date={time} // The time of the event
				// DateClassName='timelineDateStyle' // Doesn't work
				icon={<MUIIcon fontSize='medium' />}
				iconStyle={{ background: backgroundColor, color: "#fff" }}
				position={position}
				style={{ backgroundColor: "null", margin: "0rem" }}>
				<h3 className='vertical-timeline-element-title itinerary-title'>{title}</h3>
				<h4 className='vertical-timeline-element-subtitle itinerary-subtitle'>{subtitle}</h4>
				<p className='itinerary-description'>{description}</p>
			</VerticalTimelineElement>
		);
	};

	return (
		<>
			{/* Wrap the contents in a link (if it exists) */}
			{url === "" ? <NonHyperlinkedElement /> : <HyperlinkedElement />}
		</>
	);
};

export default ItineraryComponent;
