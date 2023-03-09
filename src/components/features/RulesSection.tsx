import { Container, Grid, Typography } from "@mui/material";
import HandicapAdjustmentTable from "components/features/HandicapAdjustmentTable";
import ScoresTable from "components/features/ScoresTable";
import SectionHeader from "components/ui/SectionHeader";
import { useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ThemingS from "services/ThemingS";

export default function RulesSection() {
	const appScrollComponent = useRef(null);

	const RuleSectionHeight = "600px";

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing} sx={{ minHeight: RuleSectionHeight }}>
				{/* Hold the section header text */}
				<SectionHeader
					header='Rules'
					subheader='Big Bastard'
					description='The official rules and absurdities this group uses to play &#39;golf&#39;'
				/>

				{/* Hold the contents section and body section alongside one another */}
				<Grid item xs={12} sx={{ mb: 4, backgroundColor: "null" }}>
					<Grid container direction='row' spacing={ThemingS.themeConfig.gridSpacing}>
						{/* Hold the contents information */}
						<Grid item xs={12} sm={4} md={3} lg={3} xl={3} sx={{ mb: 2, backgroundColor: "null" }}>
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
									<a href='#ExtraSHITRules'>Extra Special SHIT Rules</a>
								</p>
								<p>
									<a href='#prizes'>Prizes</a>
								</p>
							</Typography>
						</Grid>

						{/* Hold the body information */}
						<Grid item xs={12} sm={8} md={9} lg={9} xl={9} sx={{ overflowY: "none", height: RuleSectionHeight, backgroundColor: "null" }}>
							<PerfectScrollbar
								id='appScrollComponent'
								component='div'
								style={{
									height: RuleSectionHeight,
									paddingLeft: "0px",
									paddingRight: "0px",
								}}
								ref={appScrollComponent}>
								<Grid container spacing={2} sx={{ mb: 0 }}>
									{/* Points Scoring */}
									<Grid item xs={12} sx={{ height: "max-content", mb: 4, mr: 2 }}>
										<Grid container direction='row' spacing={2}>
											<Grid item xs={12} lg={6}>
												<Typography variant='h4' component='div' id='competitionPoints' className='offset'>
													Principal competition points
												</Typography>
												<Typography variant='body1' component='div'>
													Extra opportunity for tinkering this year, with 10 players including our first combination player (Dan and Rich
													Brown) and one player available for 2 days only. I have kept the headline scores the same and then spread points
													from there, which means that the score difference between each position is less, thereby making it trickier to win
													the competition early.
												</Typography>
												<Typography variant='body1' component='div'>
													Points will be scored each day based upon the following table, depending upon your Stableford points score, which
													takes into account the relative handicaps:
												</Typography>
											</Grid>
											<Grid item xs={12} lg={6} sx={{ pl: 2, pr: 1 }}>
												<ScoresTable />
											</Grid>
										</Grid>
									</Grid>

									{/* Bonus Points */}
									<Grid item xs={12} sx={{ height: "max-content", mb: 4 }}>
										<Typography variant='h4' component='div' id='bonusPoints' className='offset'>
											Bonus points
										</Typography>
										<Typography variant='body1' component='div'>
											Three bonus points will be available on each of two holes on all of Saturday, Sunday and Monday, as drawn randomly –
											these are called “bullet holes” and everyone who equals the best net scores on those holes will receive the three
											points.
										</Typography>
									</Grid>

									{/* Handicap Adjustments */}
									<Grid item xs={12} sx={{ height: "max-content", mb: 4 }}>
										<Grid container direction='row' spacing={2} sx={{ mb: 0, width: "100%" }}>
											<Grid item xs={7}>
												<Typography variant='h4' component='div' id='handicapAdjustments' className='offset'>
													Handicap Adjustments
												</Typography>
												<Typography variant='body1' component='div'>
													Handicap changes for day 2 and day 3 will as always be based upon the performance from the previous day. With 10
													competitors, the following matrix is to be applied based upon your finishing score. This is less pronounced than
													usual because the score differentials are lower.
												</Typography>
												<Typography variant='body1' component='div'>
													Where there are positional ties, all competitors will be adjusted as if they had finished in the tied position –
													i.e. if two players are tied for 2nd on a day, they will both be adjusted as if they finished 2nd by themselves.
												</Typography>
											</Grid>
											<Grid item xs={5}>
												<HandicapAdjustmentTable />
											</Grid>
										</Grid>
									</Grid>

									{/* SHIT Rules */}
									<Grid item xs={12} sx={{ height: "max-content", mb: 4 }}>
										<Typography variant='h4' component='div' id='SHITRules' className='offset'>
											Special SHIT Rules (“Angel Poo”)
										</Typography>
										<Typography variant='body1' component='div'>
											On all golfing days, the following special rules will apply:
											<ul>Mulligan or Reverse Mulligan (1 per round per player, cannot be carried over)</ul>
											<ul>Fairway Robbery (1 per round per player) [NB. There are no reverse Fairway Robbery]</ul>
											<ul>Big Gimmee (1 per round per player)</ul>
											<ul>Joker to be called before playing tee shot on any hole for double points on that hole</ul>
											<ul>String Theory (Sunday only) - 7 to 1 foot lengths of string drawn at random</ul>
											<ul>Big Girl&#39;s Blouse (1 per round per player)</ul>
										</Typography>
										<Typography variant='body1' component='div'>
											Dave Rose (Official Golf Nerd) to hold casting vote any real “Rules of Golf” issues.
										</Typography>
									</Grid>

									{/* Extra Rules */}
									<Grid item xs={12} sx={{ height: "max-content", mb: 4 }}>
										<Typography variant='h4' component='div' id='extraSHITRules' className='offset'>
											Extra Special SHIT Rules (2022 only)
										</Typography>
										<Typography variant='body1' component='div'>
											The <b>Chuckle Brothers</b> – for the first time we have a two person competitor and this enjoyably adds another thing
											to argue about. To be clear, Rich’s handicap will be adjusted by the above table based upon Dan B&#39;s finishing
											position on Saturday. However, there is a freshness factor to add in to the mix, as Rich will not have had the day one
											rigours of competition/booze that the rest of us suffer. I suggest that we consider on Saturday lunchtime and decide
											if there needs to be some sort of impact assessment.
										</Typography>
										<Typography variant='body1' component='div'>
											The <b>Ben Bonanza</b> – having offered a Ben Bonus last year, I would like to offer another one this, this time
											potentially beneficial to Ben instead. If Ben wins the first two days of competition, he will have accumulated at
											least 50 points, plus any extra bullets. I propose that – to reflect his achievement – he has the chance to receive an
											additional 15 points, based upon selecting the correct envelope out of three before he leaves on Sunday. This envelope
											will then be opened after the scoring for those competing on Monday have been totted up and (hopefully) may
											potentially change the destination of the trophy.
										</Typography>
									</Grid>

									{/* Prizes */}
									<Grid item xs={12} sx={{ height: "max-content", mb: 4 }}>
										<Typography variant='h4' component='div' id='prizes' className='offset'>
											Prizes may be available for the following categories:
										</Typography>
										<Typography variant='body1' component='div'>
											<ul>Overall competition winner (may include trophy)</ul>
											<ul>Longest drive (Sunday)</ul>
											<ul>Nearest the pin any hole (Sunday)</ul>
											<ul>Longest drive (Monday)</ul>
											<ul>Nearest the pin any hole (Monday)</ul>
										</Typography>
									</Grid>
								</Grid>
							</PerfectScrollbar>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
