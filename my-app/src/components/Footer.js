import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
  <>
  <div className="row">
  <div className="col-md-4 col-12"></div>

  <div className="col-md-4 col-12">
  <div className="footer">
  <div className="footer_content">
    <div className="row">
    <div className="col-md-2 col-2">
      <div className="footer_icon">
      <Link to="/recharge"><i class="fa fa-bolt" aria-hidden="true"></i>
       <p className="text-white">Recharge</p></Link>
      </div>
    </div>
    <div className="col-md-2 col-2">
      <div className="footer_icon">
      <Link to="/referearn"><i class="fa fa-share-alt" aria-hidden="true"></i>
      <p className="text-white">Refer</p></Link>
      </div>
    </div>
    <div className="col-md-2 col-2">
      <div className="footer_icon">
      <Link to="/home"><i class="fa fa-home" aria-hidden="true"></i>
      <p className="text-white">Home </p></Link>
      </div>
    </div>
    <div className="col-md-2 col-2">
      <div className="footer_icon">
      <Link to="/index"><i class="fa fa-database" aria-hidden="true"></i>
      <p className="text-white">Earn</p></Link>
     
      </div>
    </div>
    <div className="col-md-2 col-2">
      <div className="footer_icon">
      <Link to="/enquiry"><i class="fa fa-phone" aria-hidden="true"></i>
      <p className="text-white">Enquiry</p></Link>
      </div>
    </div>
    <div className="col-md-2 col-2">
      <div className="footer_icon">
      <Link to="/account">
        <i class="fa fa-user" aria-hidden="true"></i>
        <p className="text-white">Account</p>
      </Link>
      </div>
    </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-4 col-12"></div>
</div>
  </>

  )
}
