// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./f.css";

// function Fourbooking() {
//   const [apartments, setApartments] = useState([]);

//   useEffect(() => {
//     const fetchApartments = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost/houserentbackend/controllers/api/User/Get/villaimg.php"
//         );
//         setApartments(response.data);
//       } catch (error) {
//         console.error("Error fetching apartment data:", error);
//       }
//     };
//     fetchApartments();
//   }, []);

//   return (
//     <div className="main-book">
//       {/* Navbar */}
//       <div className="navbar">
//         <h1>🏠 Villa Booking</h1>
//       </div>

//       {/* Apartments Listing */}
//       <div className="two-card">
//         {apartments.length > 0 ? (
//           apartments.map((apartment) => (
//             <div className="apartment-card" key={apartment.id}>
//               {/* Apartment Image */}
//               <img
//                 src={`http://localhost/houserentbackend/controllers/api/User/upload/${apartment.file}`}
//                 alt={apartment.title}
//                 className="apartment-image"
//               />

//               {/* Apartment Details */}
//               <div className="apartment-details">
//                 <h2 className="apartment-name">{apartment.title}</h2>
//                 <p className="apartment-price">₹{apartment.price}</p>
//                 <p className="apartment-description">{apartment.description}</p>

//                 {/* Book Now Button */}
//                 <Link
//                   to={{
//                     pathname: `/bookform/${apartment.id}`,
//                     state: {
//                       price: apartment.price,
//                       apartment_name: apartment.title,
//                       apartment_description: apartment.description,
//                       apartment_image: `http://localhost/houserentbackend/controllers/api/User/upload/${apartment.file}`,
//                     },
//                   }}
//                 >
//                   <button className="view-button">Book Now</button>
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="loading-text">Loading apartments...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Fourbooking;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./f.css";

function Fourbooking() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost/houserentbackend/controllers/api/User/Get/villaimg.php"
        );
        setApartments(response.data);
      } catch (error) {
        console.error("Error fetching apartment data:", error);
      }
    };
    fetchApartments();
  }, []);

  return (
    <div className="main-book">
      {/* Navbar */}
      <div className="navbar">
        <h1>🏠 Villa Booking</h1>
      </div>

      {/* Apartments Listing */}
      <div className="two-card">
        {apartments.length > 0 ? (
          apartments.map((apartment) => (
            <div className="apartment-card" key={apartment.id}>
              {/* Apartment Image */}
              <img
                src={`http://localhost/houserentbackend/controllers/api/User/upload/${apartment.file}`}
                alt={apartment.title}
                className="apartment-image"
              />

              {/* Apartment Details */}
              <div className="apartment-details">
                <h2 className="apartment-name">{apartment.title}</h2>
                <p className="apartment-price">₹{apartment.price}</p>
                <p className="apartment-description">{apartment.description}</p>

                {/* Book Now Button */}
                <Link
                  to={`/fourbook/${apartment.id}`}
                  state={{
                    price: apartment.price,
                    apartment_name: apartment.title,
                    apartment_description: apartment.description,
                    apartment_image: `http://localhost/houserentbackend/controllers/api/User/upload/${apartment.file}`,
                  }}
                >
                  <button className="view-button">Book Now</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="loading-text">Loading apartments...</p>
        )}
      </div>
    </div>
  );
}

export default Fourbooking;
