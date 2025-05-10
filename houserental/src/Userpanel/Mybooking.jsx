import React, { useEffect, useState } from 'react';
import './mybook.css';

function Mybooking() {
  const [apartmentBookings, setApartmentBookings] = useState([]);
  const [villaBookings, setVillaBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const [apartmentResponse, villaResponse] = await Promise.all([
          fetch('http://localhost/houserentbackend/controllers/api/admin/get/apartbook.php'),
          fetch('http://localhost/houserentbackend/controllers/api/admin/get/villabook.php'),
        ]);

        const apartmentData = await apartmentResponse.json();
        const villaData = await villaResponse.json();

        setApartmentBookings(apartmentData);
        setVillaBookings(villaData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const renderTableRows = (bookings) => {
    if (bookings.length === 0) {
      return (
        <tr>
          <td colSpan="9">No bookings available</td>
        </tr>
      );
    }

    return bookings.map((booking, index) => (
      <tr key={index} className="vrs-table-row">
        <td className="vrs-table-cell" data-label="Name">{booking.name}</td>
        <td className="vrs-table-cell" data-label="Email">{booking.email}</td>
        <td className="vrs-table-cell" data-label="Phone">{booking.phone}</td>
        <td className="vrs-table-cell" data-label="Stay Duration">{booking.stay_duration}</td>
        <td className="vrs-table-cell" data-label="No. of Guests">{booking.no_of_guests}</td>
        <td className="vrs-table-cell" data-label="Payment">{booking.payment}</td>
        <td className="vrs-table-cell" data-label="Apartment Name">{booking.apartment_name}</td>
        <td className="vrs-table-cell" data-label="Price">{booking.price}</td>
        <td className="vrs-table-cell" data-label="Status">{booking.status}</td>
      </tr>
    ));
  };

  return (
    <div className="main-mybook">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="vrs-container">
        <h1 className="vrs-heading">Apartment Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Email</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Stay Duration</th>
              <th className="vrs-table-cell">No. of Guests</th>
              <th className="vrs-table-cell">Payment</th>
              <th className="vrs-table-cell">Apartment Name</th>
              <th className="vrs-table-cell">Price</th>
              <th className="vrs-table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(apartmentBookings)}
          </tbody>
        </table>
      </div>

      <div className="vrs-container">
        <h1 className="vrs-heading">Villa Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Email</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Stay Duration</th>
              <th className="vrs-table-cell">No. of Guests</th>
              <th className="vrs-table-cell">Payment</th>
              <th className="vrs-table-cell">Apartment Name</th>
              <th className="vrs-table-cell">Price</th>
              <th className="vrs-table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(villaBookings)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mybooking;