
// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './twowheel.css';

// function Addfourwheel() {
 
//   const [formData, setFormData] = useState({
//     title: '',  // Ensure title is included in formData
//     description: '',
//     price: '',
//     file: null,
//   });

//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'file' ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = new FormData();
//     payload.append('title', formData.title); 
//     payload.append('description', formData.description);
//     payload.append('price', formData.price);
//     payload.append('file', formData.file);

//     try {
//       const response = await axios.post(
//         'http://localhost/houserentbackend/controllers/api/User/post/villaimg.php',
//         payload,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       console.log('Response:', response.data);
//       alert('Rental Listing added successfully!');
//       setFormData({
//         title: '',
//         description: '',
//         price: '',
//         file: null,
//       });

//       if (fileInputRef.current) {
//         fileInputRef.current.value = '';
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to add Rental Listing. Please try again.');
//     }
//   };

//   return (
//     <div className="main-2">
//       <div className="twomain">
//         <div className="container-two">
//           <h1>Add Rental Listing</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label htmlFor="title">Rental Type:</label>
//                 <select
//                   id="title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   style={{ backgroundColor: 'black' }}
//                 >
//                   <option value="">Select Type</option>
//                   <option value="Apartment">Apartment</option>
//                   <option value="Villa">Villa</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="description">Description:</label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="price">Price:</label>
//                 <input
//                   type="number"
//                   id="price"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   min="0"
//                   step="0.01"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="image">Image:</label>
//                 <input
//                   type="file"
//                   id="image"
//                   name="file"
//                   className="file-input"
//                   accept="image/*"
//                   onChange={handleChange}
//                   ref={fileInputRef}
//                   required
//                 />
//               </div>
//             </div>

//             <button type="submit" className="submit-btn">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



// export default Addfourwheel;

import React, { useState, useRef } from 'react';
import axios from 'axios';
import './twowheel.css';

function Addfourwheel() {
 
  const [formData, setFormData] = useState({
    title: '',  // Ensure title is included in formData
    description: '',
    price: '',
    file: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append('title', formData.title); 
    payload.append('description', formData.description);
    payload.append('price', formData.price);
    payload.append('file', formData.file);

    try {
      const response = await axios.post(
        'http://localhost/houserentbackend/controllers/api/User/post/villaimg.php',
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response:', response.data);
      alert('Rental Listing added successfully!');
      setFormData({
        title: '',
        description: '',
        price: '',
        file: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add Rental Listing. Please try again.');
    }
  };

  return (
    <div className="main-2">
      <div className="twomain">
        <div className="container-two">
          <h1>Add Rental Listing</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="title">villa Name:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  name="file"
                  className="file-input"
                  accept="image/*"
                  onChange={handleChange}
                  ref={fileInputRef}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addfourwheel;
