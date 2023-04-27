import "@inovua/reactdatagrid-community/index.css";
import { Grid } from "@mui/material";
import PlayerPointsChartCard from "components/features/stats/Players/PlayersSubSection/PlayerPointsChartCard";

export default function YearSubSection(props: { yearNumber: string }) {
	const { yearNumber } = props; // Destructure props

	return (
		<>
			<h1>{yearNumber}</h1>

			{/* Hold the main data table section card */}
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<PlayerPointsChartCard />
			</Grid>
		</>
	);
}
