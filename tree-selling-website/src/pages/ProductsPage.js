



import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const productsData = [
  { id: 1, name: 'Oak Tree', description: 'Strong and majestic oak tree.', price: 50, category: 'Trees', image: 'https://5.imimg.com/data5/TT/QE/MY-13800260/silver-oak-tree-500x500.jpg' },
  { id: 2, name: 'Pine Tree', description: 'Evergreen and fragrant pine tree.', price: 30, category: 'Trees', image: 'https://rukminim2.flixcart.com/image/850/1000/kzsqykw0/plant-seed/r/x/z/1-himalayan-longleaf-pine-150-grams-xetomos-original-imagbqbmbqtuperk.jpeg?q=20&crop=false' },
  { id: 3, name: 'Maple Tree', description: 'Beautiful maple tree with vibrant leaves.', price: 40, category: 'Trees', image: 'https://5.imimg.com/data5/YM/FR/VI/SELLER-28581992/71nonrbjyil-sl1500--500x500.jpg' },
  { id: 4, name: 'Cherry Blossom', description: 'Gorgeous flowering cherry tree.', price: 70, category: 'Flowers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4tTiZ-vjKiNbt60HjB6fmZLqGkYYvNyyfA&sy' },
  { id: 5, name: 'Cactus', description: 'Low-maintenance desert cactus.', price: 25, category: 'Plants', image: 'https://m.media-amazon.com/images/I/613-c5VifIL._AC_UF1000,1000_QL80_.jpg' },
  { id: 6, name: 'Bamboo', description: 'Fast-growing and versatile bamboo.', price: 35, category: 'Plants', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SIGDD9OuBXn5nGtbASlyZ4xdhvKrmRSsPA&s' },
  { id: 7, name: 'Palm Tree', description: 'Perfect for tropical vibes.', price: 90, category: 'Trees', image: 'https://5.imimg.com/data5/NJ/FK/MY-27346989/small-artificial-palm-tree-500x500.jpg' },
  { id: 8, name: 'Apple Tree', description: 'Fruit-bearing apple tree.', price: 60, category: 'Fruits', image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/LQ/KL/ZZ/63677441/safeimagekit-resized-imgpng-2022-12-13t141023-129-500x500.png' },
  { id: 9, name: 'Willow Tree', description: 'Graceful and elegant willow.', price: 55, category: 'Trees', image: 'https://m.media-amazon.com/images/I/51jkHWW0cnL._AC_.jpg' },
  { id: 10, name: 'Cedar Tree', description: 'Durable and fragrant cedar.', price: 80, category: 'Trees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbT9Dz_-3n0Uh6xFLEfF3QEKPaewBCmaaMw&s' },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [filter, setFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const filteredProducts = productsData.filter((product) => {
    return (
      (filter === '' || product.category.toLowerCase().includes(filter.toLowerCase())) &&
      (minPrice === '' || product.price >= Number(minPrice)) &&
      (maxPrice === '' || product.price <= Number(maxPrice))
    );
  });

  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-center text-3xl font-bold mb-6 text-green-700">Our Products</h2>
      
      
      <div className="flex justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by category (e.g., Trees, Plants)"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      
      {/* Products Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-green-600 font-semibold mt-2">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Products;
