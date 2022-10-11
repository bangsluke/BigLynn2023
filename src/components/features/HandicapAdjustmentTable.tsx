import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(dailyFinishingPosition: string, handicapAdjustment: string) {
  return { dailyFinishingPosition, handicapAdjustment };
}

const rows = [
  createData('1st/2nd', '-2'),
  createData('3rd/4th', '-1'),
  createData('5th/6th', 'No adjustment'),
  createData('7th/8th', '+1'),
  createData('9th/10th', '+2')
];

export default function HandicapAdjustmentTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Daily finishing position</TableCell>
            <TableCell align="right">Handicap adjustment for following day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.dailyFinishingPosition} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.dailyFinishingPosition}
              </TableCell>
              <TableCell align="right">{row.handicapAdjustment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
