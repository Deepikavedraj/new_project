import React from 'react'
import {Link} from "react-router-dom";

export default function Signin(props) {
  return (
    <>
  

    <div className="col-md-4 col-lg-4 col-12">
              <div className="card m_background">
                <div className="login_title">
                  <h1>{props.tophead}</h1>
                  <h5>{props.parasign}</h5>
               </div>
               <div className="content">
                  <input type="text" id="" class="form-control mb-4" placeholder={props.mobilesign} />

                  <input type="email" id="" class="form-control mb-4" placeholder={props.emailsign} />
                  <input type="password" id="" class="form-control mb-4" placeholder={props.pass} />

                  <input type="password" id="" class="form-control mb-4" placeholder={props.conpass} />
                  <input type="text" id="" class="form-control mb-4" placeholder={props.sponsor} />

               </div>
               <div className="content_bottom_part">
                   <div className="row justify-content-between">
                    <div className="col-md-8 col-8">
                    <div class="form-check ps-5">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                      <p>I agree to the <span>Privacy Policy</span></p>
                      </label>
                    </div>
                       
                    </div>
                     
                       <a href="/" className="btn main_btn" data-bs-toggle="modal" data-bs-target="#signin">{props.tophead}</a>

                       <p class="text-center mt-4 fw-bold">Already a member? <Link to="/login"><span>Login</span></Link></p>
                   </div>
               </div>
             </div>
          </div>


{/* OTP Verifaction Modal*/}

<div className="modal fade" id="signin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
          <Link to="/index" className="btn main_btn" data-bs-toggle="modal" data-bs-target="#congrates">Submit</Link>
            <h5>Resend</h5>
          </form>
      </div>
   
    </div>
  </div>
</div>


{/* Congrates Modal*/}

<div className="modal fade" id="congrates" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content modal_content">
      <div className="modal-header modal_head">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body modal_title">
      <h1>Congratulations</h1>
      <p>Your account has been successfully created</p>
          
      </div>
   
    </div>
  </div>
</div>
    </>
  )
}
