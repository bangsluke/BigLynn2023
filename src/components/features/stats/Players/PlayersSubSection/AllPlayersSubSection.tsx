import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Grid } from "@mui/material";

const columns = [
	{ name: "fullName", header: "Player", minWidth: 100, defaultFlex: 1 },
	{ name: "apps", header: "Apps", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsFinish", header: "Points Finish", minWidth: 100, defaultFlex: 1 },
	{ name: "wins", header: "Wins", minWidth: 100, defaultFlex: 1 },
	{ name: "winPercentage", header: "Win %", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsTotal", header: "Total Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsAverage", header: "Average Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsMax", header: "Maximum Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsMaxYear", header: "Maximum Year", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsMin", header: "Minimum Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsMinYear", header: "Minimum Year", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsLatest", header: "2022 Points", minWidth: 100, defaultFlex: 1 },
	{ name: "pointsExpected2023Points", header: "Predicted 2023 Points", minWidth: 100, defaultFlex: 1 },
	{ name: "handicapLatest", header: "2023 Handicap", minWidth: 100, defaultFlex: 1 },
	{ name: "handicapMinimum", header: "Lowest Handicap", minWidth: 100, defaultFlex: 1 },
	{ name: "handicapMaximum", header: "Highest Handicap", minWidth: 100, defaultFlex: 1 },
	{ name: "handicapExpected", header: "Predicted 2024 Handicap", minWidth: 100, defaultFlex: 1 },
	{ name: "positionAverage", header: "Average Position", minWidth: 100, defaultFlex: 1 },
	{ name: "positionBestFinish", header: "Best Finish", minWidth: 100, defaultFlex: 1 },
	{ name: "positionWorstFinish", header: "Worst Finish", minWidth: 100, defaultFlex: 1 },
	{ name: "positionPredicted", header: "Predicted 2023 Finish", minWidth: 100, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 }; // TODO: Extract to a common file

export default function AllPlayersSubSection(props: { playerData: any }) {
	const { playerData } = props; // Destructure props
	console.log("playerData from AllPlayersSubSection: ", playerData);

	return (
		<>
			{/* Hold the main data table section card */}
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<ReactDataGrid idProperty='id' theme='default-light' columns={columns} dataSource={playerData} style={gridStyle} />
			</Grid>
		</>
	);
}
