import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

function createData(
	firstPlayerName: string,
	firstPlayerNewHandicap: number,
	blank: string,
	secondPlayerName: string,
	secondPlayerNewHandicap: number
) {
	return { firstPlayerName, firstPlayerNewHandicap, blank, secondPlayerName, secondPlayerNewHandicap };
}

const rows = [
	createData("Andy", 18, "", "Keith", 29),
	createData("Ben", 7, "", "Luke", 18),
	createData("Dan C", 23, "", "Mark", 36),
	createData("Danny B", 27, "", "Martin", 12),
	createData("Dave", 16, "", "Rich", 14),
	//@ts-ignore
	createData("Ross", 22, "", "Alex", 36),
];

export default function Handicaps2023Table() {
	const Styles = {
		tableContainer: {
			width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" },
			margin: "0px auto 20px",
		},
		tableCell: {
			fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
			padding: { xs: "0.5rem", sm: "0.6rem", md: "0.4rem", lg: "0.5rem" },
		},
	};

	return (
		<TableContainer component={Paper} sx={Styles.tableContainer}>
			<Table sx={{ width: "100%" }} size='small' aria-label='a dense table'>
				{/* <TableHead>
					<TableRow>
						<TableCell sx={Styles.tableCell}>Daily finishing position</TableCell>
						<TableCell align='right' sx={Styles.tableCell}>
							Handicap adjustment for following day
						</TableCell>
					</TableRow>
				</TableHead> */}
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.firstPlayerName} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component='th' scope='row' sx={Styles.tableCell}>
								{row.firstPlayerName}
							</TableCell>
							<TableCell align='right' sx={Styles.tableCell}>
								{row.firstPlayerNewHandicap}
							</TableCell>
							<TableCell align='right' sx={Styles.tableCell}>
								{row.blank}
							</TableCell>
							<TableCell component='th' scope='row' sx={Styles.tableCell}>
								{row.secondPlayerName}
							</TableCell>
							<TableCell align='right' sx={Styles.tableCell}>
								{row.secondPlayerNewHandicap}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
