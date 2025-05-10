import React from 'react';
import "./userlanding.css";
import { Link } from 'react-router-dom';

function Userlanding() {
  return (
    <>
    <div className="user1-main">
        <nav className="navbar-user">
            <div className="navbar-container">
                <div className="logo">HOUSE RENTAL BOOKING SYSTEM</div>
                <ul className="nav-links">
                   <li><a href="#">Home</a></li>
                    <Link to={"/mybooking"}><li><a href="#">My Bookings</a></li></Link>
                    <Link to={"/userlogin"}><li><a href="#">Logout</a></li></Link>
                </ul>
            </div>
        </nav>

        {/* Main Flex Section */}
        <div className="flex-container">
            <div className="flex-item">
                <h1>Find Your Perfect Home</h1>
                <p>Explore a variety of rental properties that suit your lifestyle and budget.</p>
                <Link to={"/booktwo"}><a href="#" class="cta-button">Explore Apartments</a></Link>
                <Link to={"/bookfour"}><a href="#" class="cta-button">Browse Villas</a></Link>
            </div>

            <div className="flex-item">
                <h2>Featured Properties</h2>
                <div className="property-list">
                    <div className="property-card">
                        <h3>Luxury Apartment</h3>
                        <p>Modern apartments in prime locations.</p>
                        <Link to={"/booktwo"}><a href="#" class="btnu">Book Now</a></Link>
                    </div>
                    <div className="property-card">
                        <h3>Cozy Villa</h3>
                        <p>Spacious villas for your family vacations.</p>
                        <Link to={"/bookfour"}><a href="#" class="btnu">Book Now</a></Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2025 House Rental Booking System. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </footer>
    </div>
    </>
  );
}

export default Userlanding;
