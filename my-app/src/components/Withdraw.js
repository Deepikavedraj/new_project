import React from 'react'
import recharge from '../images/recharge_back.png'

export default function Recharge(props) {
  return (
    <>
     <div className="col-md-4 col-12">
        <div className="nav_header">
            <h5><i class="fa fa-angle-left" aria-hidden="true"></i> {props.headerhead}</h5>
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

           <div className="row">
          <div className="col-md-12 col-12 ms-4">
              <p className="">*Minimum withdraw amount Rs.230</p>

              <p className="">*Single withdraw amount limit Rs.50000</p>

              <p className="">*Daily withdrawal limit 3 times</p>

            </div>
            </div>
          <div className="row">
            <div className="col-md-12 ms-4 mt-3">
              <h4>Select Method</h4>
            </div>
            <div className="col-md-12 mt-2 ms-5">
            <div class="form-check">
               <h5><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/></h5>
               <label class="form-check-label" for="flexRadioDefault2">
                 <p className="text-dark fw-bold fw_15">Bank</p> 
                </label>
                
            </div>

            <div class="form-check">
               <h5><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked /></h5>
               <label class="form-check-label" for="flexRadioDefault2">
                 <p className="text-dark fw-bold fw_15">UPI</p> 
                </label>
                
            </div>

            </div>


            <button className="btn main_btn">Proceed</button>
          </div>

          </div>
    </div>
    </>
  )
}
