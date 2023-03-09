import { Container, Grid } from "@mui/material";
import LinkCard from "components/ui/LinkCard";
import SectionHeader from "components/ui/SectionHeader";
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
				key={link.key}
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
				<SectionHeader
					header='Useful Links'
					subheader='Links to other places'
					description="For further reading if this site still hasn't given you everything you could ever need"
				/>

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
