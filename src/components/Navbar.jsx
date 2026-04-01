import React from "react";

const Navbar = ({ cartCount, setView }) => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-50 py-3 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <a className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] inline-block text-transparent bg-clip-text">
            DigiTools
          </a>
        </div>
        <ul className="hidden md:flex gap-8 text-[#101727] font-medium text-sm">
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Feature</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Testimonials</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>
        <div className="flex items-center gap-2 md:gap-3">
          <div
            onClick={() => setView("cart")}
            className="btn btn-ghost btn-circle text-gray-900 hover:text-white cursor-pointer"
          >
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 
                  13l-2.293 2.293c-.63.63-.184 1.707.707 
                  1.707H17m0 0a2 2 0 100 4 2 2 0 
                  000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartCount}
              </span>
            </div>
          </div>
          <button className="hidden sm:block btn btn-ghost rounded-full text-[#101727] hover:text-white">
            Login
          </button>
          <button className="hidden sm:block rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-2 px-4">
            Get Started
          </button>
          {/* Mobile*/}
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow text-gray-900 bg-white rounded-box w-52"
            >
              <li><a>Products</a></li>
              <li><a>Feature</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
              <li><a>Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;