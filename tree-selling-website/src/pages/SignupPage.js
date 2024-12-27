



import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, formData);
   
      navigate('/login'); 
      alert('registration  successful');
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
       
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || 'Signup failed!');
    }
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-4 rounded-md mb-4 text-center">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="bg-green-100 text-green-600 p-4 rounded-md mb-4 text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../config';
// import { useNavigate } from 'react-router-dom';

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [formErrors, setFormErrors] = useState({});
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   // Validation logic
//   const validateInputs = () => {
//     const errors = {};

//     if (!formData.fullName.trim()) {
//       errors.fullName = 'Full name is required.';
//     }

//     if (!formData.email.trim()) {
//       errors.email = 'Email is required.';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = 'Invalid email format.';
//     }

//     if (!formData.password.trim()) {
//       errors.password = 'Password is required.';
//     } else if (formData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters.';
//     } else if (!/[A-Z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
//       errors.password = 'Password must include at least one uppercase letter and one number.';
//     }

//     if (!formData.confirmPassword.trim()) {
//       errors.confirmPassword = 'Confirm password is required.';
//     } else if (formData.password !== formData.confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match.';
//     }

//     return errors;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const errors = validateInputs();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     setFormErrors({});
//     setErrorMessage('');
//     setIsSubmitting(true);

//     try {
//       const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, formData);
     
//       setSuccessMessage('Registration successful! Please login.');
    
//       setFormData({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//       });
      
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'Signup failed! Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>

//         {errorMessage && (
//           <div className="bg-red-100 text-red-600 p-4 rounded-md mb-4 text-center">
//             {errorMessage}
//           </div>
//         )}

//         {successMessage && (
//           <div className="bg-green-100 text-green-600 p-4 rounded-md mb-4 text-center">
//             {successMessage}
//           </div>
//         )}

//         <form onSubmit={handleSignup}>
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className={`w-full border ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300`}
//               placeholder="Enter your full name"
//               required
//             />
//             {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300`}
//               placeholder="Enter your email"
//               required
//             />
//             {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={`w-full border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300`}
//               placeholder="Create a password"
//               required
//             />
//             {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
//           </div>

//           <div className="mb-6">
//             <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className={`w-full border ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300`}
//               placeholder="Confirm your password"
//               required
//             />
//             {formErrors.confirmPassword && <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>}
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}
//           >
//             {isSubmitting ? 'Signing Up...' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
