import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function createData(position: string, Saturday: number, Sunday: number, Monday: number) {
	return { position, Saturday, Sunday, Monday };
}

const rows = [
	createData("1st", 20, 30, 40),
	createData("2nd", 18, 25, 33),
	createData("3rd", 16, 22, 28),
	createData("4th", 14, 19, 24),
	createData("5th", 12, 16, 20),
	createData("6th", 10, 13, 16),
	createData("7th", 8, 10, 13),
	createData("8th", 6, 8, 10),
	createData("9th", 4, 6, 7),
	createData("10th", 2, 4, 5),
];

export default function ScoresTable() {
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
			<Table size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell align='right' sx={Styles.tableCell}>
							Saturday
						</TableCell>
						<TableCell align='right' sx={Styles.tableCell}>
							Sunday
						</TableCell>
						<TableCell align='right' sx={Styles.tableCell}>
							Monday
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.position} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component='th' scope='row' sx={Styles.tableCell}>
								{row.position}
							</TableCell>
							<TableCell align='right' size='small' sx={Styles.tableCell}>
								{row.Saturday}
							</TableCell>
							<TableCell align='right' sx={Styles.tableCell}>
								{row.Sunday}
							</TableCell>
							<TableCell align='right' sx={Styles.tableCell}>
								{row.Monday}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
