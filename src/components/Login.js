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
              
               <div className="content_bottom_part mt-5">
                   <div className="row">
                  <Link to="/index">
                       <button className="btn google_btn"><i class="fa fa-google" aria-hidden="true"></i>{props.headinggoogle}</button> 
                       </Link>
                      <Link to="/index">
                        <button className="btn facebook_btn"><i class="fa fa-facebook" aria-hidden="true"></i>{props.headingfacebook}</button> 
                       </Link>
                   </div>
             </div>
          </div>
          </div>


   </>
  )
}
