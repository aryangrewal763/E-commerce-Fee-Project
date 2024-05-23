import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className=" mx-auto w-full px-4 py-8 mt-40 pb-20  bg-black text-white">
      <h1 className="text-3xl font-semibold mb-10 ml-16">About Flipzone</h1>
      <div className='flex gap-3 w-[70%] mx-auto'>
        <div className='border-r-2 border-white w-[65%]'>
          <p className="mb-4">
            Flipzone is your one-stop destination for all your shopping needs. From electronics to fashion,
            home decor to accessories, we've got it all. Our mission is to provide high-quality products
            at affordable prices, delivered with exceptional customer service.
          </p>
        </div>
        <div className='flex justify-between w-[35%]'>
          <div className='flex flex-col justify-evenly border-r-2 border-white px-10'>
            <a href="#"  rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Facebook
            </a>
            <a href="#"  rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Twitter
            </a>
            <a href="#"  rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Instagram
            </a>
          </div>
          <div className='flex flex-col justify-evenly px-10 border-r-2 border-white'>
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
            <Link to="/shop" className="text-blue-500 hover:text-blue-700">
              Shop
            </Link>
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

