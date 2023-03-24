
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
  mobile: number,
  name: string,
  creatd:number,
 
) {

  return { srno, mobile, name, creatd};
}

const rows = [
createData(1, 9898989898, 'Abhisekh', 15/4/2023),
createData(2, 9898989898, 'Deepika', 16/5/2023),
createData(3, 9797979797, 'Kavita', 17/7/2023),

];

export default function Fundhistory(props) {
 
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
          <TableCell align="center">Mobile</TableCell>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Created Date</TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell>{row.srno}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.creatd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* <div className="main_div">
  <div className="center_div">
    <h4>0</h4>
    <div className="btn_div">
      <button>Increm</button>
      <button>Increm</button>
    </div>
  </div>
</div> */}


    </div>
  );
}