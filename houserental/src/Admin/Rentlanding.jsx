import React from 'react'
import './Rent.css'
import { Link } from 'react-router-dom'
function Rentlanding() {
  return (
    <>
    <div className="rentmain">
        <div className="hero">
    <div className="hero-content12">
          
            <h1 className='y'>Your home, your haven!</h1>
            <p className="tagline">Your dream home is just a lease away</p>
            <div className="btn-container2">
                <Link to={"/ad"}><a href="#" className="btn1 ">Admin Login</a></Link>
                <Link to={"/userlogin"}><a href="#" className="btn1 ">User Login</a></Link>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Rentlanding