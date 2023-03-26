import React from 'react'
import recharge from '../images/recharge_back.png'
import { Link } from "react-router-dom";

export default function Recharge(props) {
  return (
    <>
     <div className="col-md-4 col-12">
        <div className="nav_header">
        <Link to="/account"> <h5><i class="fa fa-angle-left" aria-hidden="true"></i> {props.headerhead}</h5></Link>
        </div>

        <div className="slider">
         <img src={recharge} alt="slider" className="recharge_img" />
             <h5 className="rupee">0</h5>
        </div>

<div className="content_bottom_part">
        <div className="content">
          <form>
            <input type="text" id="" class="form-control mb-4 border_b" placeholder="Rs* | Enter amount" />
            </form>
          </div>

          <div className="row px-4">
            <div className="col-md-4">
             <button className="btn main_outline">500</button>
            </div>
            <div className="col-md-4">
             <button className="btn main_outline">1000</button>
            </div>
            <div className="col-md-4">
             <button className="btn main_outline">5000</button>
            </div>
            <div className="col-md-4">
             <button className="btn main_outline">10000</button>
             <span class="inner_btn">+2%</span>
            </div>
            <div className="col-md-4">
             <button className="btn main_outline">25000</button>
            </div>
            <div className="col-md-4">
             <button className="btn main_outline">50000</button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 ms-4 mt-3">
              <h4>Choose Payment Method</h4>
            </div>
            <div className="col-md-12 mt-2 ms-5">
            <div class="form-check">
               <h5><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked /></h5>
               <label class="form-check-label" for="flexRadioDefault2">
                 <p className="text-dark fw-bold fw_15">UPI</p> 
                </label>
                
            </div>

            </div>

            <div className="col-md-12 col-12 ms-4">
              <p className="danger">Note</p>
            </div>

            <div className="col-md-12 col-12 ms-4">
              <p className="">* Minimum recharge : 200</p>
              <p className="">* Miximum recharge : 1000</p>
            </div>

            <button className="btn main_btn">Proceed</button>
          </div>

          </div>
    </div>
    </>
  )
}
