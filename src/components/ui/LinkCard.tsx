import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FadeInWhenVisible from "components/ui/Animation";
import Avatar from "components/ui/Avatar";
import SubCard from "components/ui/SubCard";
import useIcons from "hooks/useIcons";

const LinkCard = (props: { id: number; iconName: string; title: string; description: string; linkURL: string }) => {
	const { iconName, title, description, linkURL } = props; // Destructure props
	const theme = useTheme();

	// Console.log(linkURL);

	const MUIIcon = useIcons(iconName); // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783

	return (
		<Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
			<FadeInWhenVisible>
				<a target='_blank' href={linkURL} rel='noopener noreferrer' style={{ textDecoration: "none" }}>
					<SubCard sx={{ height: { md: "11rem" } }}>
						<Grid container justifyContent='center' spacing={1}>
							{/* Link icon */}
							<Grid item>
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
							{/* Link title */}
							<Grid item xs={12}>
								<Typography variant='h4' sx={{ textDecoration: "underline" }}>
									{title}
								</Typography>
							</Grid>
							{/* Link description */}
							<Grid item xs={12}>
								<Typography variant='body2' sx={{ fontSize: { xs: "0.7rem", lg: "0.9rem" } }}>
									{description}
								</Typography>
							</Grid>
						</Grid>
					</SubCard>
				</a>
			</FadeInWhenVisible>
		</Grid>
	);
};

export default LinkCard;
