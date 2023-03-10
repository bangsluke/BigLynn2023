import { Grid, Typography } from "@mui/material";

interface SectionHeaderProps {
	header: string;
	subheader: string;
	description: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
	const { header, subheader, description } = props; // Destructure props

	return (
		<Grid item xs={12} lg={8} md={10}>
			<Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item xs={12}>
					<Grid container spacing={1}>
						<Grid item>
							<Typography variant='h5' color='primary'>
								{header}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h2' component='div'>
						{subheader}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body2'>{description}</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SectionHeader;
