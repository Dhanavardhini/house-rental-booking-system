import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./bookform.css";

function BookForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract apartment name and price from the previous page
  const { apartment_name = "", price = 0 } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stay_duration: 1, // Default 1 day
    no_of_guests: 1, // Default 1 guest
    payment: "",
    apartment_name, // Pre-filled from previous page
    price, // Pre-filled from previous page
    status:""
  });

  useEffect(() => {
    if (formData.stay_duration && price) {
      const updatedPrice = Number(formData.stay_duration) * price;
      setFormData((prevData) => ({
        ...prevData,
        price: updatedPrice,
      }));
    }
  }, [formData.stay_duration, price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/houserentbackend/controllers/api/User/post/apartbook.php",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data.message);
      alert("Apartment Booking Successful!");
      navigate("/booktwo");
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <div className="vr-body">
      <div className="vr-container">
        <h1 className="vr-title">Apartment Booking Form</h1>
        <form className="vr-form" onSubmit={handleSubmit}>
          <div className="vr-form-group">
            <label className="vr-label">Apartment Name:</label>
            <input
              className="vr-input"
              type="text"
              name="apartment_name"
              value={formData.apartment_name}
              readOnly
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Name:</label>
            <input
              className="vr-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Email:</label>
            <input
              className="vr-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Phone Number:</label>
            <input
              className="vr-input"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Stay Duration (Days):</label>
            <input
              className="vr-input"
              type="number"
              name="stay_duration"
              value={formData.stay_duration}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Number of Guests:</label>
            <input
              className="vr-input"
              type="number"
              name="no_of_guests"
              value={formData.no_of_guests}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Payment Method:</label>
            <input
              className="vr-input"
              type="text"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Total Price:</label>
            <input
              className="vr-input"
              type="text"
              value={formData.price || "N/A"}
              readOnly
            />
          </div>
          <button className="vr-submit-btn" type="submit">
            Book Apartment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
