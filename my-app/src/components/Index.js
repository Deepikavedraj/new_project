import React from 'react'
import slideone from '../images/color.png';
import rupee1 from '../images/rupee.png';
import crown1 from '../images/crown.png';
import watch1 from '../images/watch.png';
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
   <>
   <div className="col-md-4 col-12">
    <div className="nav_header">
      <h5>{props.headerhead}</h5>
      <p>Prediction Game</p>
    </div>
    <div className="slider">
      <img src={slideone} alt="slider" />
    </div>

    <div className="content_bottom_part">
    <div className="row">
      <div className="col-md-7 col-7 p-0 m-0">
        <div className="row align-items-center">
           <div className="col-md-4 col-4 p-0 m-0">
            <img src={rupee1} alt="" className="rupee_img" />
           </div>
           <div className="col-md-6 col-6 p-0 m-0">
             <div className="balance">
                <h5>Available Balance</h5>
                  <h4>Rs 5000</h4>
             </div>
           </div>
        </div>
      </div>
      <div className="col-md-5 col-5">
       <Link to="/recharge"><button className="btn main_btn">Recharge</button></Link>
      <p className="text-center"><a href="/"><span>Rules</span></a></p>
      </div>
    </div>

    
{/* parity record  */}

<div className="parity_record">
  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li className="nav-item" role="presentation">
      <p className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Parity</p>
    </li>
    <li className="nav-item" role="presentation">
      <p className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" aria-selected="false">Fast Parity</p>
    </li>
  </ul>
</div>

{/* prediction number  */}

{/* period section */}

<div className="row">
  <div className="col-md-6 col-6">
    <div className="row align-items-center">
      <div className="col-md-2 col-4 p-0 m-0">
      <img src={crown1} alt=""  className="w-100" />
      </div>
      <div className="col-md-10 col-8 p-0 m-0">
        <div className="">
        <p className="m-0 fw-bold">Period</p>
      </div>
        
      </div>
    </div>
  </div>
  <div className="col-md-6 col-6">
      <div className="row align-items-center">
      <div className="col-md-2 col-4 p-0 m-0">
         <img src={watch1} alt=""  className="w-100 watch" />
      </div>
      <div className="col-md-10 col-8 p-0 m-0">
        <div className="">
        <p className="fw-bold float-end me-2 m-0">Count Down</p>
      </div>
        
      </div>
    </div>
  </div>
</div>

<div className="outer_box">
<div className="row">
  <div className="col-md-6 col-6">
     <p className="m-0 fw-bold fw_20">2895678789</p>
  </div>
  <div className="col-md-6 col-6">
      <span className="m-0 fw-bold fw_20 text-danger float-end">2:00</span>
  </div>
 </div>
</div>
{/* period section */}


{/* prediction number  */}
<div className="row">
  <div className="col-md-4 col-4">
    <button className="btn join_green" data-bs-toggle="modal" data-bs-target="#green">Join Green</button>
  </div>
  <div className="col-md-4 col-4">
    <button className="btn join_red" data-bs-toggle="modal" data-bs-target="#green">Join Red</button>
  </div>
  <div className="col-md-4 col-4">
    <button className="btn join_violet" data-bs-toggle="modal" data-bs-target="#green">Join Violet</button>
  </div>

</div>

<div className="row mt-2 justify-content-between">
<div className="col-md-2 col-2">
    <button className="btn num23">0</button>
  </div>
  <div className="col-md-2 col-2">
    <button className="btn num1">1</button>
  </div>
  <div className="col-md-2 col-2">
    <button className="btn num2">2</button>
  </div>
  <div className="col-md-2 col-2">
    <button className="btn num1">3</button>
  </div>
  <div className="col-md-2 col-2">
    <button className="btn num2">4</button>
  </div>
</div>
  <div className="row mt-2 justify-content-between">
  <div className="col-md-2 col-2">
    <button className="btn num12">5</button>
  </div>
  
  <div className="col-md-2 col-2">
    <button className="btn num2">6</button>
  </div>
  <div className="col-md-2 col-2">
    <button className="btn num1">7</button>
  </div>
  <div className="col-md-2 col-2">
    <button className="btn num2">8</button>
  </div>
  <div className="col-md-2 col-2">
    <button className="btn num1">9</button>
  </div>
  </div>
  
{/* prediction number  */}



{/* parity record content */}

  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="row mt-4">
        <div className="col-md-6 col-6">
          <p className="fw-bold primary">Parity Records</p>
        </div>
        <div className="col-md-6 col-6">
          <p className="fw-bold float-end">View more</p>
        </div>
      </div>
      <div className="grey_background">
        <div className="row pt-2">
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">Period</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">Price</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">Result</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">Number</p>
          </div>
        </div>
      </div>

      <div className="row pt-2">
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
           <div className="voilet_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
           <div className="red_box"></div>
          

          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
           <div className="voilet_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
           <div className="red_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
        </div>

      <hr></hr>
          <div className="row mt-4">
            <div className="col-md-12 col-12">
              <p className="fw-bold primary p-0 m-0">My Parity Records</p>
            </div>
        </div>
      <hr></hr>

{/* Contract money section  */}
      <div className="row mt-4">
            <div className="col-md-12 col-12">
              <p className="fw-bold p-0 m-0">Contract Money</p>
              <h6 className="fw_20 primary fw-bolder">Rs 100</h6>
            </div>
        </div>
      <hr className="border"></hr>

{/* first content */}
      <div className="row">
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Period : 225896528965 </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Select : Orange </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Status : <span className="primary">Warning</span> </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Result : Waiting </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Open Time : 15:25:25</p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Fee : 10 </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Pre Pay : 90 </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Amount : 0</p>
        </div>
        
      </div>
      <p>Create Time : 26-05-22 | 1500 PM</p>

      <hr className="primary"></hr>
{/* first content */}

{/* second content */}
      <div className="row">
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Period : 225896528965 </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Select : Orange </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Status : <span className="danger">Loss</span> </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Result : Waiting </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Open Time : 15:25:25</p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Fee : 10 </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Pre Pay : 90 </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Amount : 0</p>
        </div>
        
      </div>
      <p>Create Time : 26-05-22 | 1500 PM</p>
{/* second content */}


{/* Contract money section  */}

    </div>
    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <div className="row mt-4">
        <div className="col-md-6 col-6">
          <p className="fw-bold primary">Fast Parity Records</p>
        </div>
        <div className="col-md-6 col-6">
          <p className="fw-bold float-end">View more</p>
        </div>
      </div>
      <div className="grey_background">
        <div className="row pt-2">
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">Period</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">Price</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">Result</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">Number</p>
          </div>
        </div>
      </div>

      <div className="row pt-2">
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box">
           {/* <div className="red_box"></div> */}
           </div>
          

          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">250378963258</p>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">32500</p>
          </div>
          <div className="col-md-3 col-3">
           <div className="green_box"></div>
          </div>
          <div className="col-md-3 col-3">
            <p className="fw-bold text-center m-0 p-2">2</p>
          </div>
        </div>

      <hr></hr>
          <div className="row mt-4">
            <div className="col-md-12 col-12">
              <p className="fw-bold primary p-0 m-0">My Parity Records</p>
            </div>
        </div>
      <hr></hr>

{/* Contract money section  */}
      <div className="row mt-4">
            <div className="col-md-12 col-12">
              <p className="fw-bold p-0 m-0">Contract Money</p>
              <h6 className="fw_20 primary fw-bolder">Rs 100</h6>
            </div>
        </div>
      <hr className="border"></hr>

{/* first content */}
      <div className="row">
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Period : 225896528965 </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Select : Orange </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Status : <span className="primary">Warning</span> </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Result : Waiting </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Open Time : 15:25:25</p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Fee : 10 </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Pre Pay : 90 </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Amount : 0</p>
        </div>
        
      </div>
      <p>Create Time : 26-05-22 | 1500 PM</p>

      <hr className="primary"></hr>
{/* first content */}

{/* second content */}
      <div className="row">
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Period : 225896528965 </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Select : Orange </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Status : <span className="danger">Loss</span> </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Result : Waiting </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Open Time : 15:25:25</p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Fee : 10 </p>
        </div>
        <div className="col-md-7 col-6">
          <p className="fw-bold p-0 m-0">Pre Pay : 90 </p>
        </div>
        <div className="col-md-5 col-6">
          <p className="fw-bold p-0 m-0">Amount : 0</p>
        </div>
        
      </div>
      <p>Create Time : 26-05-22 | 1500 PM</p>
{/* second content */}


{/* Contract money section  */}
    </div>
  </div>

{/* parity record content end*/}

{/* parity record  */}


    </div>


    </div>

{/* Join green modal */}

<div className="modal fade" id="green" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mg-dialog">
    <div className="modal-content">
      <div className="modal-header mg_head">
        <h5 className="modal-title" id="exampleModalLabel">Join Green</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h5 className="text-start">Contract Money</h5>

        <div className="labelContainer">
                <label className="radio-inline">
                    <input data-bet_amount_calculation="" type="radio" name="optradio" value="10" checked="" />
                    <span>₹ 10</span>
                </label>

                <label className="radio-inline">
                    <input data-bet_amount_calculation="" type="radio" name="optradio" value="100" />
                    <span>₹ 100</span>
                </label>
                <label className="radio-inline">
                    <input type="radio" data-bet_amount_calculation="" name="optradio" value="1000" />
                    <span>₹ 1000</span>
                </label>
                <label className="radio-inline">
                    <input type="radio" data-bet_amount_calculation="" name="optradio" value="10000" />
                    <span>₹ 10000</span>
                </label>
            </div>
            <p className="fw_15 fw-bold">Total contract money is: 10</p>
            <h5 className="multi text-start">Multiples</h5>
            <div className="d-md-block d-lg-block d-sm-none d-none content">
                <input type="number" className="form-control" name="multiples" value="1" min="1" max="999" />
            </div>
      </div>
      <div className="modal_footer">
        <div className="row">
          <div className="col-md-6">
          <button type="button" className="btn danger_btn" data-bs-dismiss="modal">Close</button>
          </div>
          <div className="col-md-6">
          <button className="btn main_btn fw_15">Save Changes</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>


   </>
  )
}
