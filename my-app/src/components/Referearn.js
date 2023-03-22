import React from 'react'
import { Link } from "react-router-dom";

export default function Referearn(props) {
  return (
    <>
     <div className="col-md-4 col-12">
        <div className="nav_header">
        <Link to="/account"> <h5><i class="fa fa-angle-left" aria-hidden="true"></i> {props.headerhead}</h5></Link>
        </div>

        <div className="content_bottom_part pt-5">
        <div className="refer_content primary">
         <div className="row mt-5">
            <div className="col-md-6 col-6">
                <p>Referral Bonus</p>
                <h5>Rs 100</h5>
            </div>
            <div className="col-md-6 col-6">
                <p>Total Active Refers</p>
                <h5>0</h5>
            </div>
            <button className="btn main_btn profile_btn">Apply Bonus</button>
            </div>

            <div className="col-md-12 col-12">
            <div className="refer_level">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Level 1</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Level 2</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Level 3</button>
                </li>
            </ul>
            </div>
                    <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row mt-3">
                                <div className="col-md-6 col-6">
                                    <p className="text-dark fs-4">Total People</p>
                                    <h5 className="text-dark fs-4">0</h5>
                                </div>
                                <div className="col-md-6 col-6">
                                    <p className="text-dark fs-4">Contribution</p>
                                    <h5 className="text-dark fs-4">Rs 0</h5>
                                </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row mt-3">
                                <div className="col-md-6 col-6">
                                    <p className="text-dark fs-4">Total People</p>
                                    <h5 className="text-dark fs-4">0</h5>
                                </div>
                                <div className="col-md-6 col-6">
                                    <p className="text-dark fs-4">Contribution</p>
                                    <h5 className="text-dark fs-4">Rs 0</h5>
                                </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="row mt-3">
                                <div className="col-md-6 col-6">
                                    <p className="text-dark fs-4">Total People</p>
                                    <h5 className="text-dark fs-4">0</h5>
                                </div>
                                <div className="col-md-6 col-6">
                                    <p className="text-dark fs-4">Contribution</p>
                                    <h5 className="text-dark fs-4">Rs 0</h5>
                                </div>
                                </div>
                    </div>
                    </div>
            </div>

            <div className="col-md-12 col-12">
                <div className="refer_copy mt-5">
                    <h5>Refer your friends and earn money.</h5>
                    <p>Just copy the below link with referal code and share it with your friends.</p>
                </div>
            </div>

        <div class="col-md-12 col-12 mt-5">
            <div className="content">
            <div class="refer_copy">
                    <h5>Your Referal Code</h5>
                    <input class="form-control" type="text" value="//bigwin.anshuwap.com" id="myInput" readonly="readonly" />
                    <button className="btn main_btn w-25">COPY LINK</button>
                </div>
            </div>
        </div>
    
  
         </div>
        </div>
    </div>
    </>
  )
}
