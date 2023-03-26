
import * as React from 'react';
import { Link } from "react-router-dom";


export default function Transaction(props) {
  return (

     <div className="col-md-4 col-12">
        <div className="nav_header">
           <Link to="/account"> <h5><i class="fa fa-angle-left" aria-hidden="true"></i> {props.headerhead}</h5></Link>
        </div>

          <div className="content mt-5">
            <div className="row mt-5">
               <div className="col-md-6 col-6">
                  <p className="fw-bold fw_15">Bank Name</p>
               </div>
               <div className="col-md-6 col-6">
                 <input type="text" id="" class="form-control mb-4" placeholder="Full Name" />
               </div>
               <div className="col-md-6 col-6">
                  <p className="fw-bold fw_15">IFSC </p>
               </div>
               <div className="col-md-6 col-6">
                 <input type="text" id="" class="form-control mb-4" placeholder="IFSC" />
               </div>
               <div className="col-md-6 col-6">
                  <p className="fw-bold fw_15">Bank Account No</p>
               </div>
               <div className="col-md-6 col-6">
                 <input type="text" id="" class="form-control mb-4" placeholder="Bank Account No" />
               </div>
               <div className="col-md-6 col-6">
                  <p className="fw-bold fw_15">Mobile Number</p>
               </div>
               <div className="col-md-6 col-6">
                 <input type="text" id="" class="form-control mb-4" placeholder="Mobile Number" />
               </div>
               <div className="col-md-6 col-6">
                  <p className="fw-bold fw_15">Email.Id</p>
               </div>
               <div className="col-md-6 col-6">
                 <input type="text" id="" class="form-control mb-4" placeholder="Email.Id" />
               </div>

               <button className="btn main_btn">Submit</button>
            </div>
            </div>
    </div>
  );
}