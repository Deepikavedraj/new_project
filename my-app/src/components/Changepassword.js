import React from 'react'
import {Link} from "react-router-dom";

export default function Changepassword(props) {
  return (
   <>
   <div className="col-md-4 col-lg-4 col-12">
              <div className="card m_background">
                <div className="login_title">
                  <h1>{props.changepasshead}</h1>
                  <h5>{props.changepasspara}</h5>
               </div>
               <div className="content">
                  <input type="text" id="" class="form-control mb-4" placeholder={props.pass_changepass} />

                  <input type="text" id="" class="form-control mb-4" placeholder={props.conpass_changepass} />

               </div>
               <div className="content_bottom_part">
                   
                
                       <a href="/" className="btn main_btn">Submit</a>

                       <p class="text-center mt-4 fw-bold">Back to login ? <Link to="/login"><span>Login</span></Link></p>
                 
               </div>
             </div>
          </div>
   </>
  )
}
