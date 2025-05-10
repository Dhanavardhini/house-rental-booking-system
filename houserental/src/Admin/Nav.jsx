import React from 'react'
import './Nav.css'
import { MdDashboard, MdTwoWheeler } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'

import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import FunctionsIcon from '@mui/icons-material/Functions';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
function Navbar() {

  return (
    <>
<nav className="sidebar">
        <div className="logo"> House Rental Booking System</div>
        <div className="nav-links1">
            <Link to={"/dash"}><a href="#" ><MdDashboard /> Dashboard</a></Link>
            <Link to={"/two"}><a href="#"><ApartmentIcon/> Available Apartment</a></Link>
            <Link to={"/four"}><a href="#">< VillaIcon/> Available Villas</a>  </Link>
            <Link to={"/userd"}><a href="#">< ApartmentIcon/>Apartment Users</a></Link>
            <Link to={"/users"}><a href="#"><VillaIcon />villa Users</a></Link>
            <Link to={"/logout"}><a href="#"><GrLogout />Logout</a></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar