


import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const navigate = useNavigate();

  // Function to calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simulate Payment Process
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPaymentProcessing(true); // Start processing payment
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
    }, 3000); // Simulate 3-second payment processing delay
  };

  // Navigate to Order Tracking Page
  const handleTrackOrder = () => {
    navigate('/track-order');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
        {paymentSuccess ? 'Payment Successful!' : 'Checkout'}
      </h1>

      {paymentProcessing ? (
        // Payment Processing State
        <div className="text-center">
          <p className="text-blue-600 text-xl font-semibold mb-4">Processing Payment...</p>
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600 mx-auto"></div>
        </div>
      ) : paymentSuccess ? (
        // Payment Successful State
        <div className="text-center">
          <p className="text-green-600 text-xl font-semibold mb-4">
            Your order has been placed successfully!
          </p>
          <button
            onClick={handleTrackOrder}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-bold"
          >
            Track Your Order
          </button>
        </div>
      ) : cart.length === 0 ? (
        // Empty Cart State
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          <Link to="/products">
            <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition font-bold">
              Go to Products
            </button>
          </Link>
        </div>
      ) : (
        // Checkout Form and Order Summary
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Information Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Billing Details</h2>
            <form onSubmit={handlePlaceOrder}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full address"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-bold w-full"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Order Summary</h2>
            <ul>
              {cart.map((item) => (
               
                <li key={item.id} className="flex justify-between border-b py-2">
                  <span className="text-gray-700">{item.name} (x{item.quantity})</span>
                  <span className="text-green-600 font-semibold">
                    ${item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-green-600">${getTotalPrice()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

