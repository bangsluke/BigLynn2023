import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(position: string, Saturday: number, Sunday: number, Monday: number) {
	return { position, Saturday, Sunday, Monday };
}

const rows = [
	createData('1st', 20, 30, 40),
	createData('2nd', 18, 25, 33),
	createData('3rd', 16, 22, 28),
	createData('4th', 14, 19, 24),
	createData('5th', 12, 16, 20),
	createData('6th', 10, 13, 16),
	createData('7th', 8, 10, 13),
	createData('8th', 6, 8, 10),
	createData('9th', 4, 6, 7),
	createData('10th', 2, 4, 5)
];

export default function ScoresTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ width: '100%' }} size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell align='right'>Saturday</TableCell>
						<TableCell align='right'>Sunday</TableCell>
						<TableCell align='right'>Monday</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.position} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component='th' scope='row'>
								{row.position}
							</TableCell>
							<TableCell align='right'>{row.Saturday}</TableCell>
							<TableCell align='right'>{row.Sunday}</TableCell>
							<TableCell align='right'>{row.Monday}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
