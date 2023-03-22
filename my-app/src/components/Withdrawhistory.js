
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function createData(
  srno: Number,
  date: number,
  particular: string,
  amount:number,
 
) {

  return { srno, date, particular, amount};
}

const rows = [
createData(1, 12/3/2023, 'Total particular', 1000),
createData(2, 15/4/2023, 'Total number', 2000),
createData(3, 16/7/2023, 'Total data', 2000),

];

export default function Withdrawhistory(props) {
  return (

     <div className="col-md-4 col-12">
        <div className="nav_header">
           <Link to="/account"> <h5><i class="fa fa-angle-left" aria-hidden="true"></i> {props.headerhead}</h5></Link>
        </div>

    <TableContainer component={Paper} className="table_top">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Sr.No</TableCell>
          <TableCell align="center">Date</TableCell>
          <TableCell align="center">Particular</TableCell>
          <TableCell align="center">Amount</TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell>{row.srno}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.particular}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}