import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FadeInWhenVisible from "components/ui/Animation";
import Avatar from "components/ui/Avatar";
import useIcons from "hooks/useIcons";

const ItineraryComponentStyle = {
	// Styles go here
	backgroundColor: "white",
	width: "100%",
	height: "4rem",
	borderRadius: "0.5rem",
	marginBottom: "1rem",
};

const ItineraryComponent = (props: { id: number; time: string; iconName: string; title: string; url: string }) => {
	const { iconName, time, title, url } = props; // Destructure props
	const theme = useTheme();

	const MUIIcon = useIcons(iconName); // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783

	return (
		<FadeInWhenVisible>
			<Grid container direction='column' style={ItineraryComponentStyle}>
				{/* Wrap the contents in a link */}
				<a target='_blank' href={url} rel='noopener noreferrer' style={{ textDecoration: "none" }}>
					{/* Hold the time along the left side */}
					<Grid item xs={4}>
						<Typography variant='h2' sx={{ textDecoration: "underline" }}>
							{time}
						</Typography>
					</Grid>
					{/* Hold the MUI icon */}
					<Grid item xs={4}>
						<Avatar
							size='md'
							variant='rounded'
							sx={{
								background: theme.palette.primary.light,
								color: theme.palette.primary.main,
							}}>
							<MUIIcon fontSize='large' />
						</Avatar>
					</Grid>
					{/* Hold the title and details along the right side */}
					<Grid item xs={4}>
						<Typography variant='h2' sx={{ textDecoration: "underline" }}>
							{title}
						</Typography>
					</Grid>
				</a>
			</Grid>
		</FadeInWhenVisible>
	);
};

export default ItineraryComponent;
