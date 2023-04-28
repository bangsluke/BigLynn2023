import "@inovua/reactdatagrid-community/index.css";
import { Grid } from "@mui/material";
import PlayerPointsChartCard from "components/features/stats/Players/PlayersSubSection/PlayerPointsChartCard";

export default function PlayerSubSection(props: { playerNumber: any; playerData: any }) {
	const { playerNumber, playerData } = props; // Destructure props

	console.log("playerData from PlayerSubSection: ", playerData);
	console.log("playerNumber", playerNumber);
	console.log("playerData[0] ", playerData[0]);

	return (
		<>
			{/* Hold the selected player information */}
			<Grid item lg={12} md={12} sm={12} xs={12}>
				{/* <h1>{playerData[playerNumber].firstName}</h1> */}
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
