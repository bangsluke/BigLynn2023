import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function createData(dailyFinishingPosition11: string, dailyFinishingPosition10: string, handicapAdjustment: string) {
	return { dailyFinishingPosition11, dailyFinishingPosition10, handicapAdjustment };
}

const rows = [
	createData("1st/2nd", "1st/2nd", "-2"),
	createData("3rd/4th", "3rd/4th", "-1"),
	createData("5th/6th/7th", "5th/6th", "No adjustment"),
	createData("8th/9th", "7th/8th", "+1"),
	createData("10th/11th", "9th/10th", "+2"),
];

export default function HandicapAdjustmentTable() {
	const Styles = {
		tableContainer: {
			width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" },
			margin: "0px auto",
		},
		tableCell: {
			fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
			padding: { xs: "0.5rem", sm: "0.6rem", md: "0.4rem", lg: "0.5rem" },
		},
	};

	return (
		<TableContainer component={Paper} sx={Styles.tableContainer}>
			<Table sx={{ width: "100%" }} size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell sx={Styles.tableCell}>Daily finishing position (after a day with 11 golfers)</TableCell>
						<TableCell sx={Styles.tableCell}>Daily finishing position (after a day with 10 golfers)</TableCell>
						<TableCell align='right' sx={Styles.tableCell}>
							Handicap adjustment for following day
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.dailyFinishingPosition11} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component='th' scope='row' sx={Styles.tableCell}>
								{row.dailyFinishingPosition11}
							</TableCell>
							<TableCell component='th' scope='row' sx={Styles.tableCell}>
								{row.dailyFinishingPosition10}
							</TableCell>
							<TableCell align='right' sx={Styles.tableCell}>
								{row.handicapAdjustment}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
