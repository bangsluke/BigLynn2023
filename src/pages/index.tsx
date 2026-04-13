import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import EventDetailsSection from "components/features/EventDetailsSection";
import FAQSection from "components/features/FAQSection";
import HeroSection from "components/features/hero/HeroSectionHome";
import ItinerarySection from "components/features/ItinerarySection";
import QuotesSection from "components/features/QuotesSection";
import RulesSection from "components/features/RulesSection";
import StatsSection from "components/features/StatsSection";
import UsefulLinksSection from "components/features/UsefulLinksSection";
import Footer from "components/features/furtherYears/Footer2024";
import AppBar from "components/ui/home/AppBarHome";
import { useEffect } from "react";

const displayedSection = {
	hero: true,
	eventDetails: false,
	itinerary: false,
	quotes: true,
	rules: true,
	stats: true,
	faq: false,
	usefulLinks: false,
};

const SectionPadding = {
	desktopTop: 50,
	desktopBottom: 30,
	tabletTop: 30,
	tabletBottom: 10,
	mobileTop: 10,
	mobileBottom: 2,
};

const SectionMargin = {
	desktop: 50,
	tablet: 30,
	mobile: 15,
};

const SectionWidth = {
	maxWidth: "94vw",
	overflow: "hidden",
};

const HeaderWrapper = styled("div")(({ theme }) => ({
	borderRadius: "8px",
	overflowX: "hidden",
	overflowY: "clip",
	[theme.breakpoints.down("md")]: {
		paddingTop: 2,
	},
}));

const SecondWrapper = styled("div")(({ theme }) => ({
	borderRadius: "8px",
	paddingTop: SectionPadding.desktopTop,
	paddingBottom: SectionPadding.desktopBottom,
	marginBottom: SectionMargin.desktop,
	[theme.breakpoints.down("xl")]: {
		paddingTop: SectionPadding.tabletTop,
		paddingBottom: SectionPadding.tabletBottom,
		marginBottom: SectionMargin.tablet,
	},
	[theme.breakpoints.down("md")]: {
		paddingTop: SectionPadding.mobileTop,
		paddingBottom: SectionPadding.mobileBottom,
		marginBottom: SectionMargin.mobile,
	},
}));

const ThirdWrapper = styled("div")(({ theme }) => ({
	backgroundColor: "#FFF",
	borderRadius: "8px",
	paddingTop: SectionPadding.desktopTop,
	paddingBottom: SectionPadding.desktopBottom,
	marginBottom: SectionMargin.desktop,
	[theme.breakpoints.down("xl")]: {
		paddingTop: SectionPadding.tabletTop,
		paddingBottom: SectionPadding.tabletBottom,
		marginBottom: SectionMargin.tablet,
	},
	[theme.breakpoints.down("md")]: {
		paddingTop: SectionPadding.mobileTop,
		paddingBottom: SectionPadding.mobileBottom,
		marginBottom: SectionMargin.mobile,
	},
}));

const FourthWrapper = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.secondary.light,
	borderRadius: "8px",
	paddingTop: SectionPadding.desktopTop,
	paddingBottom: SectionPadding.desktopBottom,
	marginBottom: SectionMargin.desktop,
	[theme.breakpoints.down("xl")]: {
		paddingTop: SectionPadding.tabletTop,
		paddingBottom: SectionPadding.tabletBottom,
		marginBottom: SectionMargin.tablet,
	},
	[theme.breakpoints.down("md")]: {
		paddingTop: SectionPadding.mobileTop,
		paddingBottom: SectionPadding.mobileBottom,
		marginBottom: SectionMargin.mobile,
	},
}));

export const AnchorOffset = styled("h2")({
	"&:before": {
		display: "block",
		content: '""',
		height: "5rem",
		marginTop: "-5rem",
		visibility: "hidden",
	},
});

export default function Home() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
		AOS.refresh();
	}, []);

	return (
		<>
			<HeaderWrapper id='home' style={{ display: displayedSection.hero ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='top' className='offset'>
					<AppBar />
					<HeroSection />
				</AnchorOffset>
			</HeaderWrapper>

			<ThirdWrapper style={{ display: displayedSection.eventDetails ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='eventDetails' className='offset'>
					<EventDetailsSection data-aos='fade-right' data-aos-duration='3000' />
				</AnchorOffset>
			</ThirdWrapper>

			<FourthWrapper style={{ display: displayedSection.itinerary ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='itinerary' className='offset'>
					<ItinerarySection data-aos='fade-left' data-aos-duration='3000' />
				</AnchorOffset>
			</FourthWrapper>

			<ThirdWrapper style={{ display: displayedSection.rules ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='rules' className='offset'>
					<RulesSection data-aos='fade-right' data-aos-duration='3000' />
				</AnchorOffset>
			</ThirdWrapper>

			<FourthWrapper style={{ display: displayedSection.quotes ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='quotes' className='offset'>
					<QuotesSection data-aos='fade-left' data-aos-duration='3000' />
				</AnchorOffset>
			</FourthWrapper>

			<SecondWrapper style={{ display: displayedSection.stats ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='statistics' className='offset'>
					<StatsSection data-aos='fade-left' data-aos-duration='3000' />
				</AnchorOffset>
			</SecondWrapper>

			<FourthWrapper style={{ display: displayedSection.faq ? "block" : "none", width: SectionWidth.maxWidth, overflow: SectionWidth.overflow }}>
				<AnchorOffset id='FAQ' className='offset'>
					<FAQSection data-aos='fade-right' data-aos-duration='3000' />
				</AnchorOffset>
			</FourthWrapper>

			<ThirdWrapper style={{ display: displayedSection.usefulLinks ? "block" : "none", width: SectionWidth.maxWidth }}>
				<AnchorOffset id='usefulLinks' className='offset'>
					<UsefulLinksSection data-aos='fade-left' data-aos-duration='3000' />
				</AnchorOffset>
			</ThirdWrapper>

			<Footer />
		</>
	);
}
