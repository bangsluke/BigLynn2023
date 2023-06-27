import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import useScreenSize from "hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";
import ThemingS from "services/ThemingS";

// Styles

// Style the background golf course image
const HeaderImage = styled("img")(({ theme }) => ({
	maxWidth: "100%",
	borderRadius: "20px",
	// Filter: 'drop-shadow(0px 0px 50px rgb(194 76 46 / 30%))',
	transform: "scale(1.6) translate(260px, -30px)",
	transformOrigin: theme.direction === "rtl" ? "100% 50%" : "0 50%",
	[theme.breakpoints.down("lg")]: {
		transform: "scale(0.7)",
	},
}));

// Style the image of the group in front
const HeaderAnimationImage = styled("img")(({ theme }) => ({
	maxWidth: "100%",
	borderRadius: "20px",
	filter: "drop-shadow(0px 0px 50px rgb(194 76 46 / 30%))",
	transform: "scale(1) translate(20px, -40px)",
	transformOrigin: theme.direction === "rtl" ? "100% 50%" : "0 50%",
	[theme.breakpoints.down("lg")]: {
		transform: "scale(0.6) translate(20px, -40px)",
	},
	[theme.breakpoints.down("md")]: {
		transform: "scale(0.6) translate(20px, -40px)",
	},
}));

const HeroSection = () => {
	const theme = useTheme();
	const [fullScreenBoolean, setFullScreenBoolean] = useState<boolean>(false);
	const screenSize = useScreenSize();

	// Share handler - https://dev.to/ruppysuppy/7-javascript-web-apis-to-build-futuristic-websites-you-didnt-know-38bc
	async function shareHandler() {
		navigator.share({
			title: "Big Lynn 2023",
			text: "Check out my Big Lynn Stats",
			url: "https://biglynn2023.netlify.app/info",
		});
	}

	// Fullscreen toggle handler
	async function toggleFullscreen() {
		if (fullScreenBoolean) {
			await document.exitFullscreen();
			setFullScreenBoolean(false);
		} else {
			await document.documentElement.requestFullscreen();
			setFullScreenBoolean(true);
		}
	}

	// Get the button size based on the screen size
	interface ButtonSize {
		size: "small" | "medium" | "large" | undefined;
	}
	let buttonSize: ButtonSize = { size: "small" };
	let buttonHeight: string = "2rem";
	if (screenSize === "lg" || screenSize === "xl") {
		buttonSize = { size: "large" };
		buttonHeight = "3rem";
	} else {
		buttonSize = { size: "small" };
		buttonHeight = "2rem";
	}

	// Define the styles for the buttons and containers
	const Styles = {
		ButtonContainers: {
			backgroundColor: "null",
			padding: "0px",
			margin: "0px",
			textAlign: "center",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		ButtonStyle: {
			height: buttonHeight,
			width: "max-content",
		},
	};

	// Console.log("buttonSize", buttonSize);
	// Console.log("buttonSize.size", buttonSize.size);

	return (
		<Container>
			<Grid
				container
				alignItems='center'
				justifyContent='space-between'
				spacing={ThemingS.themeConfig.gridSpacing}
				sx={{ mt: { xs: 0, sm: 1, md: 6, lg: 10 }, mb: { xs: 0, md: 6, lg: 10 }, backgroundColor: "null" }}>
				{/* Hold the header text and images for mobile */}
				<Grid item xs={12} lg={5} sx={{ backgroundColor: "null" }}>
					<Grid
						container
						spacing={ThemingS.themeConfig.gridSpacing}
						sx={{ pr: 10, [theme.breakpoints.down("lg")]: { pr: 0, textAlign: "center" } }}>
						{/* Hold the main bold text */}
						<Grid item xs={12}>
							<motion.div
								initial={{ opacity: 0, translateY: 550 }}
								animate={{ opacity: 1, translateY: 0 }}
								transition={{
									type: "spring",
									stiffness: 150,
									damping: 30,
								}}>
								<Typography
									variant='h1'
									sx={{
										fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
										fontWeight: 900,
										lineHeight: 1.2,
										textAlign: "left",
									}}>
									Welcome to the official website of the
									<Box component='span' sx={{ ml: 2, color: theme.palette.primary.main }}>
										Big Lynn 2023
									</Box>
								</Typography>
							</motion.div>
						</Grid>

						{/* Hold the header images for mobile */}
						<Grid item xs={12} sx={{ display: { lg: "none", md: "flex" }, textAlign: "center" }}>
							{/* <Box sx={{ position: 'relative', mt: 8.75 }}> */}
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 150,
									damping: 30,
									delay: 0.6,
								}}>
								<Image src='/images/2022-Lineup-No-Background.png' alt='2022 Lineup' layout='fixed' width='400' height='280' priority />
							</motion.div>
							{/* </Box> */}
						</Grid>

						{/* Hold the summary text */}
						<Grid item xs={12}>
							<motion.div
								initial={{ opacity: 0, translateY: 550 }}
								animate={{ opacity: 1, translateY: 0 }}
								transition={{
									type: "spring",
									stiffness: 150,
									damping: 30,
									delay: 0.2,
								}}>
								<Typography
									variant='h4'
									component='div'
									color='inherit'
									sx={{
										fontSize: { xs: "1rem", md: "1.125rem" },
										fontWeight: 400,
										lineHeight: 1.4,
										textAlign: "left",
									}}>
									Providing you with all the details you need to have a fantastic but overly confusing golf competition
								</Typography>
							</motion.div>
						</Grid>

						{/* Hold the two option buttons below the text */}
						<Grid item xs={12} sx={{ my: 3.25 }}>
							<motion.div
								initial={{ opacity: 0, translateY: 550 }}
								animate={{ opacity: 1, translateY: 0 }}
								transition={{
									type: "spring",
									stiffness: 150,
									damping: 30,
									delay: 0.4,
								}}>
								<Grid container spacing={2} sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
									{/* Hold the begin browsing button */}
									<Grid item xs={6} sm={4} md={6} sx={Styles.ButtonContainers}>
										<Button
											component={Link}
											href='#eventDetails'
											size={buttonSize.size}
											variant='contained'
											color='primary'
											sx={Styles.ButtonStyle}>
											Begin Browsing
										</Button>
									</Grid>
									{/* Hold the share button */}
									<Grid item xs={6} sm={4} md={6} sx={Styles.ButtonContainers}>
										<div onClick={shareHandler}>
											<Button component={Link} href='' size={buttonSize.size} variant='contained' color='secondary' sx={Styles.ButtonStyle}>
												Share this page
											</Button>
										</div>
									</Grid>
									{/* Hold the toggle fullscreen button */}
									<Grid item xs={6} sm={4} md={6} sx={{ ...Styles.ButtonContainers, display: { xs: "none", md: "block" } }}>
										<div onClick={toggleFullscreen}>
											<Button component={Link} size={buttonSize.size} variant='contained' color='secondary' sx={Styles.ButtonStyle}>
												{fullScreenBoolean ? "Exit Full Screen" : "Enter Full Screen"}
											</Button>
										</div>
									</Grid>
									{/* Hold the contact organiser text */}
									<Grid item xs={12} md={6} sx={Styles.ButtonContainers}>
										<Button
											component={Link}
											href='mailto:bangsluke@gmail.com?subject=Fuck me this site is awesome'
											target='_blank'
											size={buttonSize.size}
											variant='text'>
											Contact Your Organiser
										</Button>
									</Grid>
								</Grid>
							</motion.div>
						</Grid>
					</Grid>
				</Grid>
				{/* Hold the header images for desktop */}
				<Grid item xs={12} lg={7} sx={{ display: { xs: "none", lg: "flex" } }}>
					{/* Hold the golf course image behind */}
					<Box sx={{ position: "relative", mt: 8.75 }}>
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 150,
								damping: 30,
								delay: 0.6,
							}}>
							<HeaderImage src={"/images/Gainsborough-Course.jpg"} alt='Gainsborough Course' />
						</motion.div>
					</Box>
					{/* Hold the movable image of the people lineup */}
					<Box
						sx={{
							position: "absolute",
							animation: "10s slideY linear infinite",
							// BackgroundColor: 'red'
						}}>
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 150,
								damping: 30,
								delay: 0.8,
							}}>
							<HeaderAnimationImage src={"/images/2022-Lineup-No-Background.png"} alt='2022 Lineup' />
						</motion.div>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HeroSection;
