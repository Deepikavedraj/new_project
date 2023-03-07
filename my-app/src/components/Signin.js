import React from 'react'

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
                     
                       <a href="/" className="btn main_btn">{props.tophead}</a>

                       <p class="text-center mt-4 fw-bold">Already a member? <a href="/"><span>Login</span></a></p>
                   </div>
               </div>
             </div>
          </div>

    </>
  )
}
