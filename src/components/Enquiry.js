import React from 'react'
import enquiry from '../images/Rectangle.jpg'

export default function Enquiry(props) {
  return (
  
    <>
     <div className="col-md-4 col-12">
        <div className="nav_header">
            <h5><i class="fa fa-angle-left" aria-hidden="true"></i> {props.headerhead}</h5>
        </div>

        <div className="slider">
         <img src={enquiry} alt="slider" className="" />
        </div>

<div className="content_bottom_part">
        <div className="content">

        <p className="fw-bold">Provide some details</p>
          <form>
            <input type="text" id="" class="form-control mb-4" placeholder="*Mobile Number" />

            <input type="text" id="" class="form-control mb-4" placeholder="Client ID" />
{/* 
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" />
                <option selected>Enquiry Type</option>
                <option value="1">Suggestion</option>
                <option value="2">Consult</option>
                <option value="3">Recharge Issue</option>
                <option value="4">Consult</option>
                <option value="5">Recharge Issue</option>
            </select> */}

            <textarea type="text" id="" class="form-control mb-4" rows="5" placeholder="Description" />


            <button className="btn main_btn">Proceed</button>

            </form>
          </div>


          </div>
    </div>
    </>
  )
}
