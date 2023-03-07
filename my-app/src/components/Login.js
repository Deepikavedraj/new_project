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
                  <input type="text" id="" class="form-control mb-4" placeholder={props.mobile} />

                  <input type="password" id="" class="form-control" placeholder={props.password} />  

               </div>
               <div className="content_bottom_part">
                   <div className="row justify-content-between">
                    <div className="col-md-8 col-8">
                    <div class="form-check ps-5">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                      <p>I agree to the <span>Terms & Conditions</span></p>
                      </label>
                    </div>
                       
                    </div>
                      <div className="col-md-4 col-4">
                      <div className="forgetpass">
                        <a href="/"><p>Forgot Password ?</p></a>
                      </div>
                    </div>
                       <a href="/" className="btn main_btn">{props.topheading}</a>

                       <p class="text-center mt-4 fw-bold">New Member? <Link to="/signin"><span>Register</span></Link></p>
                   </div>
               </div>
             </div>
          </div>
   </>
  )
}
