import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import mobile from './img/mobile.jpg'
import dth from './img/dth.png'
import ott from './img/ott.jpg'
import gas from './img/gas.webp'
import electricity from './img/electricity.webp'
import water from './img/water.jpg'
import broardband from './img/broardband.jpg'
import landline from './img/landline.png'
import apartment from './img/apartment.png'
import credit from './img/credit.webp'
import loan from './img/loan.png'
import lic from './img/lic.png'
import donation from './img/donation.webp'
import devotion from './img/devotion.jpg'
import gift from './img/gift.webp'
















function Dashboard() {
  return (
    <div class="container" >

      <h3 class="head mt-4"  >Recharges</h3>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col">
            
              <Link to={"/portal/mobile"} href="#" class="btn">
              <img alt="" src={mobile} />
            <div class="card-body">
              <h6 class="card-title mt-2">Mobile Recharge</h6>
              </div>
              </Link>
         
          </div>

          <div class="col">
          <Link  href="#" class="btn">
            <img alt="" src={dth} />
            <div class="card-body">
              <h6 class="card-title mt-2">DTH Recharge</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>
          
          </div>

          <div class="col">
          <Link  href="#" class="btn">

            <img alt="" src={ott} />
            <div class="card-body">
              <h6 class="card-title mt-2">OTT Recharge</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>
          </div>
        </div>
      </div>

      <h3 class="head mt-3" >Home Bills</h3>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col">
          <Link to={"/portal/gas"} href="#" class="btn">
              <img alt="" src={gas} />
            <div class="card-body">
              <h6 class="card-title mt-2">Gas Cylinder</h6>
              </div>
              </Link> 
          
          </div>

          <div class="col">
          <Link  href="#" class="btn">
            <img alt="" src={electricity}/>
            <div class="card-body">
              <h6 class="card-title mt-2">Electricity</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>
          </div>

          <div class="col">
          <Link  href="#" class="btn">
            <img alt="" src={water}/>
            <div class="card-body">
              <h6 class="card-title mt-2">Water Bill</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>
          </div>
        </div>
      </div>

      <h3 class="head mt-3" >Apartment Bills</h3>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col">  
          <Link to={"/portal/broadband"} href="#" class="btn">
              <img alt="" src={broardband} />
            <div class="card-body">
              <h6 class="card-title mt-2">Broadband Recharge</h6>
              </div>
              </Link>   
            
          </div>

          <div class="col">
          <Link  href="#" class="btn">
            <img alt="" src={landline} />
            <div class="card-body">
              <h6 class="card-title mt-2">Landline Recharge</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>
          </div>

          <div class="col">
          <Link  href="#" class="btn">
            <img alt="" src={apartment} />
            <div class="card-body">
              <h6 class="card-title mt-2">Apartment Rent</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>
          </div>
        </div>
      </div>

      <h3 class="head mt-3" >Financial</h3>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col">
          <Link to={"/portal/financial"} href="#" class="btn">
              <img alt="" src={credit} />
            <div class="card-body">
              <h6 class="card-title mt-2">Creditcard Payment</h6>
              </div>
              </Link>
            
          </div>

          <div class="col">
          <Link  href="#" class="btn">
            <img alt="" src={loan} />
            <div class="card-body">
              <h6 class="card-title mt-2">Pay Loan</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>

          </div>

          <div class="col">
          <Link  href="#" class="btn">
            <img alt="" src={lic} />
            <div class="card-body">
              <h6 class="card-title mt-2">LIC/Insurance</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>
          </div>
        </div>
      </div>

      <h3 class="head mt-3" >Other Services</h3>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col">
          <Link to={"/portal/others"} href="#" class="btn">
              <img alt="" src={donation} />
            <div class="card-body">
              <h6 class="card-title mt-2">Donation</h6>
              </div>
              </Link>
            
          </div>

          <div class="col">
          <Link  href="#" class="btn">
            <img alt="" src={devotion} />
            <div class="card-body">
              <h6 class="card-title mt-2">Devotion</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
            </div>
            </Link>
          </div>

          <div class="col">
          <Link  href="#" class="btn">            
            <img alt="" src={gift} />
            <div class="card-body">
              <h6 class="card-title mt-2">Gift Cards</h6>
              {/* <Link to={"/users"} href="#" class="btn btn-primary mt-3">Go </Link> */}
              
            </div>
            </Link>
          </div>
          
        </div>
      </div>





  </div>

  )
}

export default Dashboard