import "@inovua/reactdatagrid-community/index.css";
import { Grid } from "@mui/material";
import PlayerPointsChartCard from "components/features/stats/Players/PlayersSubSection/PlayerPointsChartCard";

export default function PlayerSubSection(props: { playerName: string; playerData: any }) {
	const { playerName, playerData } = props; // Destructure props

	console.log("playerData from PlayerSubSection: ", playerData);
	console.log("playerName", playerName);
	// console.log("playerData[0] ", playerData[0]);

	return (
		<>
			{/* Hold the selected player information */}
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<h1>{playerName}</h1>
				{/* <h2>{playerData[playerNumber].lastName}</h2> */}
			</Grid>

			{/* Hold the main data table section card */}
			<Grid item lg={12} md={12} sm={12} xs={12}>
				{/* <h1>{playerName}</h1> */}
				<PlayerPointsChartCard />
			</Grid>
		</>
	);
}
