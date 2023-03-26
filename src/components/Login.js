import React from 'react'
import { Link } from "react-router-dom";

export default function Login(props) {
  return (
   <>
           <div className="col-md-4 col-lg-4 col-12">
              <div className="card m_background">
                <div className="login_title">
                  <h1>{props.topheading}</h1>
                  <h5>{props.para}</h5>
               </div>
               <div className="content">
                  <input type="text" id="" className="form-control mb-4" placeholder={props.mobile} />

                  <input type="password" id="" className="form-control" placeholder={props.password} />  

               </div>
               <div className="content_bottom_part">
                   <div className="row justify-content-between">
                    <div className="col-md-8 col-8">
                    <div className="form-check ps-5">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">
                      <p>I agree to the <span>Terms & Conditions</span></p>
                      </label>
                    </div>
                       
                    </div>
                      <div className="col-md-4 col-4">
                      <div className="forgetpass">
                        <Link to="/forgetpassword"><p>Forgot Password ?</p></Link>
                      </div>
                    </div>
                       <button className="btn main_btn" data-bs-toggle="modal" data-bs-target="#login">{props.topheading}</button>

                       <p className="text-center mt-4 fw-bold">New Member? <Link to="/signin"><span>Register</span></Link></p>
                   </div>
               </div>
             </div>
          </div>

{/* OTP Verifaction Modal*/}

<div className="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content modal_content">
      <div className="modal-header modal_head">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body modal_title">
      <h1>OTP Verifaction</h1>
      <p>Please enter the 4 digit verification code
          we just sent you on your device</p>
          <form>
          <div class="content">
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter OTP" />
              <p>Time left : <span>00 : 40</span></p>
          </div>
          <Link to="/index" className="btn main_btn">Submit</Link>
              <h5>Resend</h5>
          </form>
      </div>
   
    </div>
  </div>
</div>
   </>
  )
}
