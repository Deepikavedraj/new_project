import React from 'react'
import recharge from '../images/recharge_back.png'
// import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Fundtransfer(props) {
  return (
  
    <>
     <div className="col-md-4 col-12">
        <div className="nav_header">
        <Link to="/account"> <h5><i class="fa fa-angle-left" aria-hidden="true"></i> {props.headerhead}</h5></Link>
        </div>

        <div className="slider">
         <img src={recharge} alt="slider" className="" />
             <h5 className="rupee">5,000</h5>
        </div>

<div className="content_bottom_part">
        <div className="content">

        <p className="fw-bold">Enter Amount for Fund Transfer</p>
          <form>
          <input type="text" id="" className="form-control mb-4" placeholder="*Rs | Enter amount" />

            <input type="text" id="" className="form-control mb-4" placeholder="*Mobile Number" />

            <textarea type="text" id="" className="form-control mb-4" rows="5" placeholder="Description" />

            <button className="btn main_btn">Proceed</button>

            {/* <Button variant="contained">Contained</Button> */}

            </form>
          </div>


          </div>
    </div>
    </>
  )
}
