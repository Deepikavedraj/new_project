import React from 'react'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'


export default function Recharge(props) {
  return (
    <>
     <div className="col-md-4 col-12">
     <div className="nav_header">
      <h5>{props.headerhead}</h5>
      <p>Prediction Game</p>
    </div>

        <div className="slider pt-5">
         <img src={seven} alt="slider" className="recharge_img" />
             <h5 className="rupee">0</h5>
        </div>

           <div className="content_bottom_part">
              <div className="row">
                <div className="col-md-6 col-6 mt-3">
                    <div className="card shadow p-2">
                       <img src={one} className="w-100 h-100" alt="" />
                       <p className="fw_15">Redmi Note 12 Pro+ 5G.</p>
                       <h5 className="primary text-start">Rs 18,000</h5>
                    </div>                   
                </div>
                <div className="col-md-6 col-6 mt-3">
                <div className="card shadow p-2">
                    <img src={four} className="w-100 h-100" alt="" />
                    <p className="fw_15">Top Gear's top electric cars</p>
                    <h5 className="primary text-start">Rs 15,0000</h5>
                    </div>
                </div>
                <div className="col-md-6 col-6 mt-3">
                <div className="card shadow p-2">
                    <img src={six} className="w-100 h-100" alt="" />
                    <p className="fw_15">Quess Care Extended Warranty Plan for 2 Year.</p>
                    <h5 className="primary text-start">12,000</h5>
                    </div>
                </div>
                <div className="col-md-6 col-6 mt-3">
                <div className="card shadow p-2">
                    <img src={two} className="w-100 h-100" alt="" />
                    <p className="fw_15">Vivo Y75 (Dancing Waves, 8GB RAM, 128GB ROM)</p>
                    <h5 className="primary text-start">10,000</h5>
                    </div>
                </div>
                <div className="col-md-6 col-6 mt-3">
                <div className="card shadow p-2">
                    <img src={three} className="w-100 h-100" alt="" />
                    <p className="fw_15">BROWSE BIG BOY TOYZ DATABASE OF NEW LUXURY CARS IN INDIA</p>
                    <h5 className="primary text-start">10,0000</h5>
                  </div>
                </div>
                <div className="col-md-6 col-6 mt-3">
                <div className="card shadow p-2">
                    <img src={five} className="w-100 h-100" alt="" />
                    <p className="fw_15">Samsung 80 cm (32 Inches) Wondertainment Series HD.</p>
                    <h5 className="primary text-start">19,000</h5>
                    </div>
                </div>
              </div>
          </div>
    </div>
    </>
  )
}
