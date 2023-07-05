import { Container, Grid, Typography } from "@mui/material";
import HandicapAdjustmentTable from "components/features/rules/HandicapAdjustmentTable";
import Handicaps2023Table from "components/features/rules/Handicaps2023Table";
import ScoresTable from "components/features/rules/ScoresTable";
import SectionHeader from "components/ui/SectionHeader";
import { AnchorOffset } from "pages/info";
import { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ThemingS from "services/ThemingS";

export default function RulesSection() {
	const appScrollComponent = useRef(null);

	// Get the current screen width
	const [screenWidth, setScreenWidth] = useState(0); // Previously window.innerWidth
	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		// Cleanup the event listener when the component is unmounted
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Define a boolean to determine if the screen is mobile or not
	let MobileScreenTypeBoolean = () => {
		if (screenWidth < 600) {
			return true;
		} else {
			return false;
		}
	};
	// console.log("RulesSection: MobileScreenTypeBoolean: ", MobileScreenTypeBoolean());

	const RuleSectionHeight = () => {
		if (screenWidth < 600) {
			return "Max content";
		} else {
			return "600px";
		}
	};

	const Styles = {
		mainRulesSection: {
			overflowY: "none",
			height: RuleSectionHeight,
		},
		sectionHeader: {
			paddingBottom: 2,
		},
		sectionText: {
			paddingBottom: 2,
		},
		unorderedList: {
			// listStyleType: "circle",
			// Color: "blue",
			fontWeight: "normal",
			margin: "0.3rem 0.5rem",
			padding: "0 1rem",
			display: "listItem",
		},
	};

	// Extract each of the sections into their own components to allow customisation of layouts based upon screen size
	const PrincipalCompetitionPointsSection = () => {
		return (
			<Grid container direction='row' spacing={2}>
				<Grid item xs={12} lg={6}>
					<AnchorOffset id='competitionPoints' className='offset'>
						<Typography variant='h4' component='div' className='offset' sx={Styles.sectionHeader}>
							Principal competition points
						</Typography>
					</AnchorOffset>
					<Typography variant='body1' component='div' sx={Styles.sectionText}>
						As the trophy returned to the Bangs clan last year, it makes complete sense to keep points arrangements and the like the same
						for 2023, so no tinkering this time around.
					</Typography>
					<Typography variant='body1' component='div' sx={Styles.sectionText}>
						Points will be scored each day based upon the following table*, depending upon your Stableford points score, which takes into
						account the relative handicaps:
					</Typography>
				</Grid>
				<Grid item xs={12} lg={6} sx={{ pl: 2, pr: 2 }}>
					<ScoresTable />
				</Grid>
				<Grid item xs={12} lg={6} sx={{ ml: "1rem" }}>
					<details style={{ cursor: "pointer" }}>
						<summary style={{ fontSize: "0.8rem", fontWeight: "normal" }}>* 11th player note</summary>
						<Typography variant='body1' sx={{ paddingTop: "1rem" }}>
							If we have an 11th player for any round, they will score half of that of 10th place. This would be rounded up to the nearest
							whole number.
						</Typography>
					</details>
				</Grid>
			</Grid>
		);
	};

	const BonusPointsSection = () => {
		return (
			<>
				<AnchorOffset id='bonusPoints' className='offset'>
					<Typography variant='h4' component='div' className='offset' sx={Styles.sectionHeader}>
						Bonus points
					</Typography>
				</AnchorOffset>
				<Typography variant='body1' component='div' sx={Styles.sectionText}>
					Three bonus points will be available on each of two holes on all of Saturday, Sunday and Monday, as drawn randomly – these are
					called “bullet holes” and everyone who equals the best net scores on those holes will receive the three points.
				</Typography>
			</>
		);
	};

	const HandicapAdjustmentsSection = () => {
		return (
			<Grid container direction='row' spacing={2} sx={{ mb: 0, width: "100%" }}>
				<Grid item xs={12} lg={6}>
					<AnchorOffset id='handicapAdjustments' className='offset'>
						<Typography variant='h4' component='div' className='offset' sx={Styles.sectionHeader}>
							Handicap Adjustments
						</Typography>
					</AnchorOffset>
					<Typography variant='body1' component='div' sx={Styles.sectionText}>
						In a change of practice, it appears that we decided to amend the starting handicaps for 2023 based upon adjusting the final day
						handicaps in 2022. Therefore the starting handicaps for 2023 are as follows:
					</Typography>

					<Grid item xs={12} lg={12} sx={{ pl: 2, pr: 2 }}>
						<Handicaps2023Table />
					</Grid>

					<Typography variant='body1' component='div' sx={Styles.sectionText}>
						Handicap changes for day 2 and day 3 will as always be based upon the performance from the previous day. With 10 competitors,
						the following matrix is to be applied based upon your finishing score.
					</Typography>
					<Typography variant='body1' component='div' sx={Styles.sectionText}>
						Where there are positional ties, all competitors will be adjusted as if they had finished in the tied position - i.e. if two
						players are tied for 2nd on a day, they will both be adjusted as if they finished 2nd by themselves.
					</Typography>
				</Grid>
				<Grid item xs={12} lg={6} sx={{ pl: 2, pr: 2 }}>
					<HandicapAdjustmentTable />
				</Grid>
				<Grid item xs={12} lg={6} sx={{ ml: "1rem" }}>
					<details style={{ cursor: "pointer" }}>
						<summary style={{ fontSize: "0.8rem", fontWeight: "normal" }}>* 11th player note</summary>
						<Typography variant='body1' sx={{ paddingTop: "1rem" }}>
							If we have an 11th player for any round, all of the above positions from 7th downwards will be adjusted up by 1 place, ie. 7th
							will have no adjustment and the 11th place will be adjusted by +2.
						</Typography>
					</details>
				</Grid>
			</Grid>
		);
	};

	const SpecialSHITRulesSection = () => {
		return (
			<>
				<AnchorOffset id='SHITRules' className='offset'>
					<Typography variant='h4' component='div' className='offset' sx={Styles.sectionHeader}>
						Special SHIT Rules (“Angel Poo”)
					</Typography>
				</AnchorOffset>
				<Typography variant='body1' component='div' sx={Styles.sectionText}>
					On all golfing days, the following special rules will apply:
					<ul style={Styles.unorderedList}>
						<li>Mulligan or Reverse Mulligan (1 per round per player, cannot be carried over)</li>
						<li>Fairway Robbery (1 per round per player) [NB. There are no reverse Fairway Robbery]</li>
						<li>Big Gimmee (1 per round per player)</li>
						<li>Joker (1 per round per player) to be called before playing tee shot on any hole for double points on that hole</li>
						<li>String Theory (Sunday only) - 7 to 1 foot lengths of string drawn at random</li>
						<li>Big Girl&#39;s Blouse (1 per round per player)</li>
					</ul>
				</Typography>
				<Typography variant='body1' component='div' sx={Styles.sectionText}>
					Dave Rose (Official Golf Nerd) to hold casting vote any real “Rules of Golf” issues.
				</Typography>
			</>
		);
	};

	const PrizesSection = () => {
		return (
			<>
				<AnchorOffset id='possiblePrizes' className='offset'>
					<Typography variant='h4' component='div' className='offset' sx={Styles.sectionHeader}>
						Prizes
					</Typography>
				</AnchorOffset>
				<Typography variant='body1' component='div' sx={Styles.sectionText}>
					Prizes may be available for the following categories:
					<ul style={Styles.unorderedList}>
						<li>Overall competition winner (may include trophy)</li>
						<li>Longest drive (Sunday)</li>
						<li>Nearest the pin any hole (Sunday)</li>
						<li>Longest drive (Monday)</li>
						<li>Nearest the pin any hole (Monday)</li>
					</ul>
				</Typography>
			</>
		);
	};

	// Define the two possible layouts for the page
	const MobileRulesSection = () => {
		return (
			<Grid container spacing={2} sx={{ mb: 0 }}>
				{/* Points Scoring - Principal competition points */}
				<Grid item xs={12} sx={{ height: "max-content", mb: 2, mr: 2 }}>
					<PrincipalCompetitionPointsSection />
				</Grid>

				{/* Bonus Points */}
				<Grid item xs={12} sx={{ height: "max-content", mb: 2 }}>
					<BonusPointsSection />
				</Grid>

				{/* Handicap Adjustments */}
				<Grid item xs={12} sx={{ height: "max-content", mb: 2 }}>
					<HandicapAdjustmentsSection />
				</Grid>

				{/* Special SHIT Rules */}
				<Grid item xs={12} sx={{ height: "max-content", mb: 2 }}>
					<SpecialSHITRulesSection />
				</Grid>

				{/* Prizes */}
				<Grid item xs={12} sx={{ height: "max-content", mb: 0 }}>
					<PrizesSection />
				</Grid>
			</Grid>
		);
	};

	const DesktopRulesSection = () => {
		return (
			<PerfectScrollbar
				id='appScrollComponent'
				component='div'
				style={{
					height: "600px",
					paddingLeft: "0px",
					paddingRight: "0px",
				}}
				ref={appScrollComponent}>
				<Grid container spacing={2} sx={{ mb: 0 }}>
					{/* Points Scoring - Principal competition points */}
					<Grid item xs={12} sx={{ height: "max-content", mb: 2, mr: 2 }}>
						<PrincipalCompetitionPointsSection />
					</Grid>

					{/* Bonus Points */}
					<Grid item xs={12} sx={{ height: "max-content", mb: 2 }}>
						<BonusPointsSection />
					</Grid>

					{/* Handicap Adjustments */}
					<Grid item xs={12} sx={{ height: "max-content", mb: 2 }}>
						<HandicapAdjustmentsSection />
					</Grid>

					{/* Special SHIT Rules */}
					<Grid item xs={12} sx={{ height: "max-content", mb: 2 }}>
						<SpecialSHITRulesSection />
					</Grid>

					{/* Prizes */}
					<Grid item xs={12} sx={{ height: "max-content", mb: 0 }}>
						<PrizesSection />
					</Grid>
				</Grid>
			</PerfectScrollbar>
		);
	};

	const DisplayRulesSection = () => {
		if (MobileScreenTypeBoolean() === true) {
			return <MobileRulesSection />;
		} else {
			return <DesktopRulesSection />;
		}
	};

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ minHeight: RuleSectionHeight, backgroundColor: "null" }}>
				{/* Hold the section header text */}
				<SectionHeader
					header='Rules'
					subheader='Big Bastard'
					description='The official rules and absurdities this group uses to play &#39;golf&#39; provided by the Big Bastard himself - Mr. Martin Bangs'
				/>

				{/* Hold the contents section and body section alongside one another */}
				<Grid item xs={12} sx={{ mb: 4, backgroundColor: "null" }}>
					<Grid container direction='row' spacing={ThemingS.themeConfig.gridSpacing}>
						{/* Hold the contents information on the left side */}
						<Grid item xs={12} sm={4} md={3} lg={3} xl={3} sx={{ mb: 0, backgroundColor: "null" }}>
							<Typography variant='h4' component='div'>
								Contents
							</Typography>
							<Typography variant='body1' component='div'>
								<p>
									<a href='#competitionPoints'>Principal competition points</a>
								</p>
								<p>
									<a href='#bonusPoints'>Bonus points</a>
								</p>
								<p>
									<a href='#handicapAdjustments'>Handicap Adjustments</a>
								</p>
								<p>
									<a href='#SHITRules'>Special SHIT Rules</a>
								</p>
								<p>
									<a href='#possiblePrizes'>Prizes</a>
								</p>
							</Typography>
						</Grid>

						{/* Hold the body information */}
						<Grid item xs={12} sm={8} md={9} lg={9} xl={9} sx={Styles.mainRulesSection}>
							<DisplayRulesSection />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
