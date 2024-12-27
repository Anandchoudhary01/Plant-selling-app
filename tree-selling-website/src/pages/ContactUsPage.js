// import React from 'react';


// function ContactUsPage() {
//   return (
//     <div>
   

//       {/* Hero Section */}
//       <section className="relative">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLZH6srY1sgsZ3eaGGFDsBooP95VZ1Lqr3A&s" // Replace with a tree-themed image
//           alt="Contact Us Banner"
//           className="w-full fit h-64 object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold">Contact Us</h1>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-12 px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
//           <p className="text-gray-600 mb-6">
//             We're here to help! Contact us via email, phone, or visit us at our location.
//           </p>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-xl font-bold text-green-600">Email</h3>
//               <p className="text-gray-600">support@treeshop.com</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-green-600">Phone</h3>
//               <p className="text-gray-600">+1 234 567 890</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-green-600">Address</h3>
//               <p className="text-gray-600">123 Green Lane, TreeTown, Earth</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-12 px-8">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Send Us a Message</h2>
//           <form className="grid grid-cols-1 gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-green-600 text-white font-bold py-3 px-6 rounded hover:bg-green-700"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-green-600 text-white py-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="mb-4">© 2024 TreeShop. All rights reserved.</p>
//           <p>
//             Follow us on{' '}
//             <a href="#" className="underline hover:text-gray-300">
//               Facebook
//             </a>{' '}
//             |{' '}
//             <a href="#" className="underline hover:text-gray-300">
//               Instagram
//             </a>
//           </p>
//           <p>Email: support@treeshop.com | Phone: +1 234 567 890</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default ContactUsPage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../config';

// const ContactUsPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleContact = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${API_BASE_URL}/api/contact`, formData);
//       alert(response.data.message);
//     } catch (error) {
//       console.error(error);
//       alert('Failed to send message!');
//     }
//   };

//   return (
//     <form onSubmit={handleContact}>
//       <input name="name" placeholder="Name" onChange={handleChange} />
//       <input name="email" placeholder="Email" onChange={handleChange} />
//       <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactUsPage;

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Failed to send message!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <form onSubmit={handleContact} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
