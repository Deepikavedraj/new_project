import React from 'react'
import recharge from '../images/recharge_back.png'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export default function Profile(props) {
  return (
    <>
     <div className="col-md-4 col-12">
        <div className="nav_header">
            <h5><i class="fa fa-angle-left" aria-hidden="true"></i> {props.headerhead}</h5>
        </div>

        <div className="slider">
         <img src={recharge} alt="slider" className="recharge_img" />
             <h5 className="rupee">5,000</h5>
             <h5 className="client">Client Id : AdBe74h8949</h5>
        </div>

<div className="content_bottom_part">
        <div className="content">
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Your Name" variant="standard" />

      <TextField id="filled-basic" label="Phone Number" variant="filled" />

      <Link to="/changepassword"><button className="btn main_outline">Changepassword</button></Link> 
      
    
    </Box>
    <button className="btn main_btn profile_btn">Proceed</button>
          </div>

         

          </div>
    </div>
    </>
  )
}
