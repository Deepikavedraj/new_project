import React from 'react'
import { Link } from "react-router-dom";

export default function Profile(props) {
  return (
    <>
     <div className="col-md-4 col-12">
        <div className="nav_header">
            <h5>{props.headerhead}</h5>
            <p>Prediction Game</p>
        </div>

         <div className="content_bottom_part">
            <div className="margin_top">
                <div className="row">
                    <div className="col-12">
                        <Link to="/profile"><p className="text-dark ms-3">
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i> PROFILE</p></Link>
                    </div>
                </div>
                <hr></hr>
                <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <Link to="/recharge"><p className="text-dark"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> RECHARGE</p></Link>
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                     <Link to="/recharge"><p className="text-dark ms-3">RECHARGE</p></Link>
                    </div>
                </div>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                     <Link to="/rechargehistory"><p className="text-dark ms-3">RECHARGE HISTORY</p></Link>
                    </div>
                </div>
            </div>
     
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <Link to="/withdraw"><p className="text-dark"><i class="fa fa-cc-diners-club" aria-hidden="true"></i> WITHDRAWAL</p></Link>
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> 
                   <Link to="/withdraw"><p className="text-dark ms-3">WITHDRAWAL</p></Link>
                </div>
                </div>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> 
                   <Link to="/withdrawhistory"><p className="text-dark ms-3">WITHDRAWAL HISTORY</p></Link>
                </div>
                </div>
            </div>
            </div>
       <hr></hr>
            <div className="row">
                    <div className="col-12">
                        <Link to="/transaction"><p className="text-dark ms-3"><i class="fa fa-folder-open" aria-hidden="true"></i> TRANSACTION</p></Link>
                    </div>
                </div>
                <hr></hr>
                <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                <Link to="/referearn"><p className="text-dark"><i class="fa fa-share-alt" aria-hidden="true"></i> REFER & EARN</p></Link>
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> 
                  <Link to="/referearn"><p className="text-dark">REFER & EARN</p></Link>
                </div>
                </div>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> 
                  <Link to="/referlist"><p className="text-dark">REFER LIST</p></Link>
                </div>
                </div>
                {/* <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> 
                  <a href="/"><p className="text-dark">APPLY BONUS</p></a>
                </div>
                </div>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> 
                  <a href="/"><p className="text-dark">BONUS RECORDS</p></a>
                </div>
                </div> */}
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <a href="/"><p className="text-dark"><i class="fa fa-file-text" aria-hidden="true"></i> FUND TRANSFER</p></a>
                </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                   <div class="accordion-body">
                    <Link to="/fundtransfer"><p className="text-dark"> FUND TRANSFER</p></Link>
                    </div>
                </div>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                   <div class="accordion-body">
                    <Link to="/fundhistory"><p className="text-dark"> FUND TRANSFER HISTORY</p></Link>
                    </div>
                </div>
            </div>
            </div>
            <hr></hr>
            <div className="row">
                    <div className="col-12">
                        <Link to="/bankcard"><p className="text-dark ms-3 p-2"><i class="fa fa-address-card" aria-hidden="true"></i> BANK CARD</p></Link>
                    </div>
                    <hr></hr>
                    <div className="col-12">
                        <a href="/"><p className="text-dark ms-3 p-2"><i class="fa fa-file-text" aria-hidden="true"></i> TERMS & CONDITIONS</p></a>
                    </div>
                    <hr></hr>
                    <div className="col-12">
                        <a href="/"><p className="text-dark ms-3 p-2"><i class="fa fa-universal-access" aria-hidden="true"></i> PRIVACY POLICY</p></a>
                    </div>
                    <hr></hr>
                    <div className="col-12">
                        <Link to="/login"><p className="text-dark ms-3 p-2"><i class="fa fa-sign-out" aria-hidden="true"></i> SIGN OUT</p></Link>
                    </div>
                </div>

            </div>
        </div>

    </div>
    </>
  )
}
