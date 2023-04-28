import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { Grid } from "@mui/material";

const columns = [
	{ name: "name", header: "Player", minWidth: 100, defaultFlex: 1 },
	{ name: "apps", header: "Apps", maxWidth: 100, defaultFlex: 1 },
	{ name: "totalPoints", header: "Total Points", maxWidth: 100, defaultFlex: 1 },
	{ name: "wins", header: "Wins", maxWidth: 100, defaultFlex: 1 },
	{ name: "win%", header: "Win %", maxWidth: 100, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 }; // TODO: Extract to a common file

export default function AllYearsSubSection(props: { yearData: any }) {
	const { yearData } = props; // Destructure props
	console.log("yearData from AllYearsSubSection: ", yearData);

	return (
		<>
			{/* Hold the main data table section card */}
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<ReactDataGrid idProperty='id' theme='default-light' columns={columns} dataSource={yearData} style={gridStyle} />
			</Grid>
		</>
	);
}
