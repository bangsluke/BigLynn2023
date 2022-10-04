import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import FadeInWhenVisible from "fe/components/ui/Animation";
import SubCard from "fe/components/ui/SubCard";
import Avatar from "fe/components/ui/Avatar";
import useIcons from "fe/hooks/useIcons";

const FeatureCard = (props: { id: number; iconName: string; title: string; description: string }) => {
	const { iconName, title, description } = props; // Destructure props
	const theme = useTheme();

	// Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783
	const MUIIcon = useIcons(iconName);
	// console.log(MUIIcon);

	return (
		<Grid item md={4} sm={6}>
			<FadeInWhenVisible>
				<SubCard sx={{ minHeight: "16rem" }}>
					<Grid container justifyContent='center' spacing={2}>
						{/* Feature icon */}
						<Grid item>
							<Avatar
								size='xl'
								variant='rounded'
								sx={{
									background: theme.palette.primary.light,
									color: theme.palette.primary.main,
								}}>
								<MUIIcon fontSize='large' />
							</Avatar>
						</Grid>
						{/* Feature title */}
						<Grid item xs={12}>
							<Typography variant='h3'>{title}</Typography>
						</Grid>
						{/* Feature description */}
						<Grid item xs={12}>
							<Typography variant='body2'>{description}</Typography>
						</Grid>
					</Grid>
				</SubCard>
			</FadeInWhenVisible>
		</Grid>
	);
};

export default FeatureCard;
