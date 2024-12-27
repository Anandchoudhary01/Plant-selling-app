

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const navigate = useNavigate(); // For navigation

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Navigate to Checkout Page
  const handleProceedToCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout'); // Replace '/checkout' with your actual checkout route
    } else {
      alert('Your cart is empty. Add some products before checking out!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Your Shopping Cart</h1>
      
      {/* Empty Cart Message */}
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          <Link to="/products">
            <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition font-bold">
              Go to Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 py-4"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-md mb-4 md:mb-0"
              />

              {/* Product Details */}
              <div className="text-center md:text-left flex-1 px-4">
                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-green-600 font-bold mt-2">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* Cart Total */}
          <div className="mt-6 text-right">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: <span className="text-green-600">${getTotalPrice()}</span>
            </h3>
            {/* Proceed to Checkout Button */}
            <button
              onClick={handleProceedToCheckout} // Click handler
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-bold"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

