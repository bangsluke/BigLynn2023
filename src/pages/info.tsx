import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import EventDetailsSection from "components/features/EventDetailsSection";
import FAQSection from "components/features/FAQSection";
import Footer from "components/features/Footer";
import HeroSection from "components/features/HeroSection";
import ItinerarySection from "components/features/ItinerarySection";
import QuotesSection from "components/features/QuotesSection";
import RulesSection from "components/features/RulesSection";
import StatsSection from "components/features/StatsSection";
import UsefulLinksSection from "components/features/UsefulLinksSection";
import AppBar from "components/ui/AppBar";
import { useEffect } from "react";

// Define which sections to display. Useful for testing
const displayedSection = {
	hero: true,
	eventDetails: true,
	itinerary: true,
	quotes: true,
	rules: true,
	stats: true,
	faq: true,
	usefulLinks: true,
};

// Define the padding for each section
const SectionPadding = {
	desktopTop: 50,
	desktopBottom: 30,
	tabletTop: 30,
	tabletBottom: 10,
	mobileTop: 10,
	mobileBottom: 2,
};

// Define the vertical margin for each section
const SectionMargin = {
	desktop: 50,
	tablet: 30,
	mobile: 15,
};

// Define the width and overflow for each section
const SectionWidth = {
	maxWidth: "94vw",
	overflow: "hidden",
};

const HeaderWrapper = styled("div")(({ theme }) => ({
	// BackgroundColor: "#FFF",
	borderRadius: "8px",
	overflowX: "hidden",
	overflowY: "clip",
	[theme.breakpoints.down("md")]: {
		paddingTop: 2,
	},
}));

const SecondWrapper = styled("div")(({ theme }) => ({
	borderRadius: "8px",
	paddingTop: SectionPadding.desktopTop, // Padding for the largest screens
	paddingBottom: SectionPadding.desktopBottom, // Padding for the largest screens
	marginBottom: SectionMargin.desktop, // Margin for the largest screens
	[theme.breakpoints.down("xl")]: {
		paddingTop: SectionPadding.tabletTop, // Padding for the larger screens
		paddingBottom: SectionPadding.tabletBottom, // Padding for the larger screens
		marginBottom: SectionMargin.tablet, // Margin for the larger screens
	},
	[theme.breakpoints.down("md")]: {
		paddingTop: SectionPadding.mobileTop, // Padding for the smaller screens
		paddingBottom: SectionPadding.mobileBottom, // Padding for the smaller screens
		marginBottom: SectionMargin.mobile, // Margin for the smaller screens
	},
}));

const ThirdWrapper = styled("div")(({ theme }) => ({
	backgroundColor: "#FFF",
	borderRadius: "8px",
	paddingTop: SectionPadding.desktopTop, // Padding for the largest screens
	paddingBottom: SectionPadding.desktopBottom, // Padding for the largest screens
	marginBottom: SectionMargin.desktop, // Margin for the largest screens
	[theme.breakpoints.down("xl")]: {
		paddingTop: SectionPadding.tabletTop, // Padding for the larger screens
		paddingBottom: SectionPadding.tabletBottom, // Padding for the larger screens
		marginBottom: SectionMargin.tablet, // Margin for the larger screens
	},
	[theme.breakpoints.down("md")]: {
		paddingTop: SectionPadding.mobileTop, // Padding for the smaller screens
		paddingBottom: SectionPadding.mobileBottom, // Padding for the smaller screens
		marginBottom: SectionMargin.mobile, // Margin for the smaller screens
	},
}));

const FourthWrapper = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.secondary.light,
	borderRadius: "8px",
	paddingTop: SectionPadding.desktopTop, // Padding for the largest screens
	paddingBottom: SectionPadding.desktopBottom, // Padding for the largest screens
	marginBottom: SectionMargin.desktop, // Margin for the largest screens
	[theme.breakpoints.down("xl")]: {
		paddingTop: SectionPadding.tabletTop, // Padding for the larger screens
		paddingBottom: SectionPadding.tabletBottom, // Padding for the larger screens
		marginBottom: SectionMargin.tablet, // Margin for the larger screens
	},
	[theme.breakpoints.down("md")]: {
		paddingTop: SectionPadding.mobileTop, // Padding for the smaller screens
		paddingBottom: SectionPadding.mobileBottom, // Padding for the smaller screens
		marginBottom: SectionMargin.mobile, // Margin for the smaller screens
	},
}));

// Add an anchor offset to the top of each section to account for the fixed navbar
const AnchorOffset = styled("h2")({
	"&:before": {
		display: "block",
		content: '""',
		height: "5rem" /* Give height of your fixed element */,
		marginTop: "-5rem" /* Give negative margin of your fixed element */,
		visibility: "hidden" /* Hide the element */,
		// width: "1px",
	},
	// backgroundColor: "yellow",
});

export default function Info() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
		AOS.refresh();
	}, []);

	return (
		<>
			<HeaderWrapper
				id='home'
				style={{ display: displayedSection.hero ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='top' className='offset'>
					<AppBar />
					<HeroSection />
				</AnchorOffset>
			</HeaderWrapper>

			<ThirdWrapper
				style={{
					display: displayedSection.eventDetails ? "block" : "none",
					width: SectionWidth.maxWidth,
					overflow: SectionWidth.overflow,
				}}>
				<AnchorOffset id='eventDetails' className='offset'>
					<EventDetailsSection data-aos='fade-right' data-aos-duration='3000' />
				</AnchorOffset>
			</ThirdWrapper>

			<FourthWrapper
				style={{ display: displayedSection.itinerary ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='itinerary' className='offset'>
					<ItinerarySection data-aos='fade-left' data-aos-duration='3000' />
				</AnchorOffset>
			</FourthWrapper>

			<SecondWrapper
				style={{ display: displayedSection.quotes ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='quotes' className='offset'>
					<QuotesSection data-aos='fade-left' data-aos-duration='3000' />
				</AnchorOffset>
			</SecondWrapper>

			<ThirdWrapper
				style={{ display: displayedSection.rules ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='rules' className='offset'>
					<RulesSection data-aos='fade-right' data-aos-duration='3000' />
				</AnchorOffset>
			</ThirdWrapper>

			<SecondWrapper
				style={{ display: displayedSection.stats ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='statistics' className='offset'>
					<StatsSection data-aos='fade-left' data-aos-duration='3000' />
				</AnchorOffset>
			</SecondWrapper>

			<FourthWrapper
				style={{ display: displayedSection.faq ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='FAQ' className='offset'>
					<FAQSection data-aos='fade-right' data-aos-duration='3000' />
				</AnchorOffset>
			</FourthWrapper>

			<ThirdWrapper
				style={{ display: displayedSection.usefulLinks ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='usefulLinks' className='offset'>
					<UsefulLinksSection data-aos='fade-left' data-aos-duration='3000' />
				</AnchorOffset>
			</ThirdWrapper>

			<Footer />
		</>
	);
}
