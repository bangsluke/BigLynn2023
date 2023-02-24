import { Container, Grid, Typography } from "@mui/material";
import LinkCard from "components/ui/LinkCard";
import LinksData from "data/LinksData";
import ThemingS from "services/ThemingS";
import { LinkData } from "types/types";

export default function UsefulLinksSection() {
	// Sort the links by the id property - https://www.w3schools.com/jsref/jsref_sort.asp & https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
	const sortedLinks: LinkData[] = LinksData.sort(function (a, b) {
		return a.id - b.id;
	});

	// Map over the links info to create all link cards.
	const linkElements = sortedLinks.map((link) => {
		return (
			<LinkCard
				id={link.id}
				key={link.id}
				iconName={link.iconName}
				title={link.title}
				description={link.description}
				linkURL={link.linkURL}
			/>
		);
	});

	return (
		<Container>
			<Grid container spacing={ThemingS.themeConfig.gridSpacing}>
				{/* Hold the section header text */}
				<Grid item xs={12} lg={5} md={10}>
					<Grid container spacing={2} sx={{ mb: 0 }}>
						<Grid item xs={12}>
							<Grid container spacing={1}>
								<Grid item>
									<Typography variant='h5' color='primary'>
										Useful Links
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='h2' component='div'>
								Links to other places
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='body2'>
								For further reading if this site still hasn&#39;t given you everything you could ever need
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				{/* Hold the body information */}
				<Grid item xs={12} sx={{ mb: { xs: 1, lg: 3 } }}>
					<Grid container justifyContent='center' spacing={ThemingS.themeConfig.gridSpacing} sx={{ textAlign: "center" }}>
						{linkElements}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
