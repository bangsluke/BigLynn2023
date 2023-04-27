import "@inovua/reactdatagrid-community/index.css";
import { Grid } from "@mui/material";
import PlayerPointsChartCard from "components/features/stats/Players/PlayersSubSection/PlayerPointsChartCard";

export default function PlayerSubSection(props: { playerName: any }) {
	const { playerName } = props; // Destructure props

	return (
		<>
			<h1>{playerName}</h1>

			{/* Hold the main data table section card */}
			<Grid item lg={12} md={12} sm={12} xs={12}>
				{/* <h1>{playerName}</h1> */}
				<PlayerPointsChartCard />
			</Grid>
		</>
	);
}
