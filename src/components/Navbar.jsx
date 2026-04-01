import React from 'react';

const Navbar = ({ cartCount, setView }) => {
  return (
    <div className="min-w-full px-50 py-2 bg-white shadow-sm">
      <div className='flex justify-between items-center'>

        {/* Logo */}
        <div>
          <a className="text-3xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] inline-block text-transparent bg-clip-text">
            DigiTools
          </a>
        </div>

        {/* Menu */}
        <ul className='flex gap-10 text-[#101727] font-500 text-sm'>
          <li>Products</li>
          <li>Feature</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>

        {/* Right Side */}
        <div className="flex space-x-3">

          {/* Cart Icon */}
          <div 
            onClick={() => setView("cart")}
            className="btn btn-ghost btn-circle text-gray-700 hover:text-white cursor-pointer"
          >
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                  2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 
                  100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>

              <span className="badge badge-sm indicator-item">
                {cartCount}
              </span>
            </div>
          </div>

          <button className='btn btn-ghost rounded-full text-[#101727] hover:text-white'>
            Login
          </button>

          <button className='rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-2 px-4'>
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;