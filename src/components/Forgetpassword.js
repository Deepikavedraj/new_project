import React from 'react'
import {Link} from "react-router-dom";

export default function Forgetpassword(props) {
  return (
   <>
   <div className="col-md-4 col-lg-4 col-12">
              <div className="card m_background">
                <div className="login_title">
                  <h1>{props.forgethead}</h1>
                  <h5>{props.paraforget}</h5>
               </div>
               <div className="content">
                  <input type="text" id="" class="form-control mb-4" placeholder={props.mobile_forget} />

               </div>
               <div className="content_bottom_part">
                   
                
                       <a href="/" className="btn main_btn" data-bs-toggle="modal" data-bs-target="#forget">Submit</a>

                       <p class="text-center mt-4 fw-bold">Back to login ? <Link to="/login"><span>Login</span></Link></p>
                 
               </div>
             </div>
          </div>


          {/* OTP Verifaction Modal*/}

<div className="modal fade" id="forget" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
          <Link to="/" className="btn main_btn">Submit</Link>
          <h5>Resend</h5>
          </form>
      </div>
   
    </div>
  </div>
</div>
   </>
  )
}
