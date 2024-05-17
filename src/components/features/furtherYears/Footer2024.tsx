import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ThemingS from "services/ThemingS";

// Style
const FooterWrapper = styled("div")(({ theme }) => ({
	marginTop: "20px",
	padding: "20px 0",
	borderRadius: "8px",
	color: "#fff",
	background: theme.palette.secondary.dark,
	[theme.breakpoints.down("md")]: {
		textAlign: "center",
	},
}));

const InfoPageFooter = () => {
	return (
		<>
			<FooterWrapper>
				<Container>
					<Grid container alignItems='center' spacing={ThemingS.themeConfig.gridSpacing}>
						<Grid item xs={4}></Grid>
						<Grid item xs={4}>
							<Typography variant='h5' component='div' color='inherit' sx={{ textAlign: "center" }}>
								&#169; bangsluke
							</Typography>
						</Grid>
						<Grid item xs={4}></Grid>
					</Grid>
				</Container>
			</FooterWrapper>
		</>
	);
};

export default InfoPageFooter;
