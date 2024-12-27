import React from 'react';

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
   

      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-16 px-8 w-[1200] h-[500px]">
        <div className="max-w-4xl mx-auto text-center m-11">
          <h1 className="text-4xl font-bold mb-4">Welcome to TreeShop</h1>
          <p className="text-lg mb-6">
            Your one-stop shop for the finest plants and trees, delivered with care to your doorstep!
          </p>
          
          <button className="bg-white text-black text-bold font-semibold py-2 px-4 rounded shadow hover:bg-green-100">
            Explore Products
          </button>
          <Link to="/products">
            <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition font-bold">
              Go to Products
            </button>
          </Link>
          
        </div>
        <img
          src="https://media.istockphoto.com/id/1126962479/photo/hand-watering-young-plants-in-growing.jpg?s=612x612&w=0&k=20&c=FSep2mD1PAtnsVHv3xQ1OGmTR0NLiqcmKK18Xw2iAj8=" // Replace with a beautiful tree-related image
          alt="Hero Banner"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        />
      </section>

      {/* About Section */}
      <section className="py-12 bg-gray-50 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600">
            At TreeShop, we are passionate about making nature accessible to everyone. Whether you're
            a seasoned gardener or just starting, we provide a wide range of plants and trees that
            will add beauty and freshness to your life.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-8 bg-green-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-green-600">Healthy Plants</h3>
            <p className="text-gray-600">
              Our plants are carefully grown and nurtured to ensure the highest quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-600">Fast Delivery</h3>
            <p className="text-gray-600">
              We deliver your plants quickly and safely to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-600">Expert Support</h3>
            <p className="text-gray-600">
              Our team of gardening experts is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 1, name: 'Oak Tree', price: '$50', image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/383884922/NS/WF/VM/117246671/oak-tree-plant-500x500.png' },
              { id: 2, name: 'Pine Tree', price: '$30', image: 'https://nurserylive.com/cdn/shop/products/nurserylive-pine-tree-plant-1_525x700.jpg?v=1634226158' },
              { id: 3, name: 'Maple Tree', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPxXMc_ksPar29Q6A-qfpl5mIbCzx48DYmQ&s' },
            ].map((product) => (
              <div key={product.id} className="bg-white p-4 border shadow text-center">
                <img src={product.image} alt={product.name} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-green-600 font-bold">{product.price}</p>
                <Link to ="/products">
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Add to Cart
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">© 2024 TreeShop. All rights reserved.</p>
          <p>
            Follow us on{' '}
            <a href="#" className="underline hover:text-gray-300">
              Facebook
            </a>{' '}
            |{' '}
            <a href="#" className="underline hover:text-gray-300">
              Instagram
            </a>
          </p>
          <p>Email: support@treeshop.com | Phone: +1 234 567 890</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
