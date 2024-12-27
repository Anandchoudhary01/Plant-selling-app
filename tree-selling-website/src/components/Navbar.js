

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaLeaf,    FaUserPlus } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <FaLeaf className="text-yellow-300" />
          <span>TreeShop</span>
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-300">Products</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
          <li>
             <Link to="/signup" className="flex justify-center items-center space-x-1 hover:text-yellow-300">
               <FaUserPlus />
               <span>Signup</span>
             </Link>
          </li>
        </ul>
        <div className="relative">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







