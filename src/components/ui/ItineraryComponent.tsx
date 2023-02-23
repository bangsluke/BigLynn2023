import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FadeInWhenVisible from "components/ui/Animation";
import Avatar from "components/ui/Avatar";
import useIcons from "hooks/useIcons";

const ItineraryComponent = (props: { id: number; time: string; iconName: string; title: string; url: string }) => {
	const { iconName, time, title, url } = props; // Destructure props
	const theme = useTheme();

	const MUIIcon = useIcons(iconName); // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783

	const ItineraryComponentStyle = {
		// Styles go here
		backgroundColor: "white",
		// BackgroundColor: "red",
		width: "100%",
		height: "3rem",
		borderRadius: "1.5rem",
		marginBottom: "1.5rem",
		timeSection: {
			backgroundColor: theme.palette.grey[700],
			color: "white",
			fontSize: "1rem",
			borderRadius: "1.5rem",
			width: "5rem",
			height: "3rem",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		iconSection: {
			// BackgroundColor: "orange",
			width: "5rem",
			height: "3rem",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		titleSection: {
			// BackgroundColor: "blue",
			fontSize: "1rem",
			width: "100%",
			height: "3rem",
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-start",
		},
	};

	return (
		<FadeInWhenVisible>
			{/* Wrap the contents in a link */}
			<a target='_blank' href={url} rel='noopener noreferrer' style={{ textDecoration: "none" }}>
				<Grid container direction='row' style={ItineraryComponentStyle}>
					{/* Hold the time along the left side */}
					<Grid item xs={1} style={ItineraryComponentStyle.timeSection}>
						{time}
					</Grid>
					{/* Hold the MUI icon */}
					<Grid item xs={1} style={ItineraryComponentStyle.iconSection}>
						<Avatar
							size='sm'
							variant='rounded'
							sx={{
								background: theme.palette.primary.light,
								color: theme.palette.primary.main,
							}}>
							<MUIIcon fontSize='small' />
						</Avatar>
					</Grid>
					{/* Hold the title and details along the right side */}
					<Grid item xs={10} style={ItineraryComponentStyle.titleSection}>
						{title}
					</Grid>
				</Grid>
			</a>
		</FadeInWhenVisible>
	);
};

export default ItineraryComponent;
