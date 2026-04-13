import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import useScreenSize from "hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";
import ThemingS from "services/ThemingS";

const HeaderImage = styled(Image)(({ theme }) => ({
	maxWidth: "100%",
	height: "auto",
	borderRadius: "20px",
	transform: "scale(1.6) translate(260px, -30px)",
	transformOrigin: theme.direction === "rtl" ? "100% 50%" : "0 50%",
	[theme.breakpoints.down("lg")]: {
		transform: "scale(0.7)",
	},
}));

const HeaderAnimationImage = styled(Image)(({ theme }) => ({
	maxWidth: "100%",
	height: "auto",
	borderRadius: "20px",
	filter: "drop-shadow(0px 0px 50px rgb(194 76 46 / 30%))",
	transform: "scale(1) translate(100px, 200px)",
	transformOrigin: theme.direction === "rtl" ? "100% 50%" : "0 50%",
	[theme.breakpoints.down("lg")]: {
		transform: "scale(0.6) translate(20px, -40px)",
	},
	[theme.breakpoints.down("md")]: {
		transform: "scale(0.6) translate(20px, -40px)",
	},
}));

const HeroSectionHome = () => {
	const theme = useTheme();
	const [fullScreenBoolean, setFullScreenBoolean] = useState<boolean>(false);
	const screenSize = useScreenSize();

	async function shareHandler() {
		navigator.share({
			title: "Big Lynn",
			text: "Check out Big Lynn Stats",
			url: "https://biglynn2023.netlify.app/",
		});
	}

	async function toggleFullscreen() {
		if (fullScreenBoolean) {
			await document.exitFullscreen();
			setFullScreenBoolean(false);
		} else {
			await document.documentElement.requestFullscreen();
			setFullScreenBoolean(true);
		}
	}

	interface ButtonSize {
		size: "small" | "medium" | "large" | undefined;
	}
	let buttonSize: ButtonSize = { size: "small" };
	let buttonHeight: string = "2rem";
	if (screenSize === "lg" || screenSize === "xl") {
		buttonSize = { size: "large" };
		buttonHeight = "3rem";
	}

	const Styles = {
		ButtonContainers: {
			padding: "0.5rem",
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

	return (
		<Container>
			<Grid
				container
				alignItems='center'
				justifyContent='space-between'
				spacing={ThemingS.themeConfig.gridSpacing}
				sx={{ mt: { xs: 0, sm: 1, md: 6, lg: 10 }, mb: { xs: 0, md: 6, lg: 10 } }}>
				<Grid item xs={12} lg={5}>
					<Grid container sx={{ pr: 10, [theme.breakpoints.down("lg")]: { pr: 0, textAlign: "center" } }}>
						<Grid item xs={12}>
							<motion.div initial={{ opacity: 0, translateY: 550 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: "spring", stiffness: 150, damping: 30 }}>
								<Typography variant='h1' sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, fontWeight: 900, lineHeight: 1.2, textAlign: "left" }}>
									Welcome to the official website of the
									<Box component='span' sx={{ ml: 1, color: theme.palette.primary.main }}>
										Big Lynn
									</Box>
								</Typography>
							</motion.div>
						</Grid>

						<Grid item xs={12} sx={{ display: { md: "block", lg: "none" }, textAlign: "center", margin: "1rem auto" }}>
							<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 150, damping: 30, delay: 0.6 }} style={{ padding: 0 }}>
								<Grid container spacing={0} sx={{ textAlign: "center" }}>
									<Grid item xs={12} sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
										<Image src='/images/2022-Lineup-No-Background.webp' alt='2022 Lineup' width={314} height={280} style={{ width: "auto", height: "auto" }} priority />
									</Grid>
									<Grid item xs={12} sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
										<Image src='/images/2022-Lineup-No-Background.webp' alt='2022 Lineup' width={314} height={280} style={{ width: "auto", height: "auto" }} priority />
									</Grid>
									<Grid item xs={12} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
										<Image src='/images/2022-Lineup-No-Background.webp' alt='2022 Lineup' width={314} height={280} style={{ width: "auto", height: "auto" }} priority />
									</Grid>
								</Grid>
							</motion.div>
						</Grid>

						<Grid item xs={12}>
							<motion.div initial={{ opacity: 0, translateY: 550 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: "spring", stiffness: 150, damping: 30, delay: 0.2 }}>
								<Typography variant='h4' component='div' color='inherit' sx={{ fontSize: { xs: "1rem", md: "1.125rem" }, fontWeight: 400, lineHeight: 1.4, textAlign: "left" }}>
									Providing you with all the details you need to have a fantastic but overly confusing golf competition
								</Typography>
							</motion.div>
						</Grid>

						<Grid item xs={12} sx={{ my: 3.25 }}>
							<motion.div initial={{ opacity: 0, translateY: 550 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: "spring", stiffness: 150, damping: 30, delay: 0.4 }}>
								<Grid container sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
									<Grid item xs={6} sm={4} md={6} sx={Styles.ButtonContainers}>
										<Button component={Link} href='#rules' size={buttonSize.size} variant='contained' color='primary' sx={Styles.ButtonStyle}>
											Begin Browsing
										</Button>
									</Grid>
									<Grid item xs={6} sm={4} md={6} sx={Styles.ButtonContainers}>
										<div onClick={shareHandler}>
											<Button component={Link} href='' size={buttonSize.size} variant='contained' color='secondary' sx={Styles.ButtonStyle}>
												Share this page
											</Button>
										</div>
									</Grid>
									<Grid item xs={6} sm={4} md={6} sx={Styles.ButtonContainers}>
										<Button component={Link} href='/2023' size={buttonSize.size} variant='contained' color='secondary' sx={Styles.ButtonStyle}>
											Go to 2023
										</Button>
									</Grid>
									<Grid item xs={6} sm={4} md={6} sx={Styles.ButtonContainers}>
										<Button component={Link} href='/2024' size={buttonSize.size} variant='contained' color='primary' sx={Styles.ButtonStyle}>
											Go to 2024
										</Button>
									</Grid>
									<Grid item xs={6} sm={4} md={6} sx={{ ...Styles.ButtonContainers, display: { xs: "none", md: "block" } }}>
										<div onClick={toggleFullscreen}>
											<Button component={Link} size={buttonSize.size} variant='text'>
												{fullScreenBoolean ? "Exit Full Screen" : "Enter Full Screen"}
											</Button>
										</div>
									</Grid>
								</Grid>
							</motion.div>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} lg={7} sx={{ display: { xs: "none", lg: "flex" } }}>
					<Box sx={{ position: "relative", mt: 8.75 }}>
						<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 150, damping: 30, delay: 0.6 }}>
							<HeaderImage src={"/images/Gainsborough-Course.webp"} alt='Gainsborough Course' width={800} height={600} loading='eager' unoptimized />
						</motion.div>
					</Box>
					<Box sx={{ position: "absolute", animation: "10s slideY linear infinite" }}>
						<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 150, damping: 30, delay: 0.8 }}>
							<HeaderAnimationImage src={"/images/2022-Lineup-No-Background.webp"} alt='2022 Lineup' width={480} height={400} style={{ width: "60%", height: "auto" }} loading='eager' unoptimized />
						</motion.div>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HeroSectionHome;
