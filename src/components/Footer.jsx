import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-400 pt-16 pb-8 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-white text-3xl font-bold pb-4">DiGiTools</h1>
          <p className="text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <ul className="space-y-3">
          <li className="text-white font-bold text-lg">Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Templates</li>
          <li>Integrations</li>
        </ul>

        {/* Company */}
        <ul className="space-y-3">
          <li className="text-white font-bold text-lg">Company</li>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>

        {/* Resources */}
        <ul className="space-y-3">
          <li className="text-white font-bold text-lg">Resources</li>
          <li>Documentation</li>
          <li>Help Center</li>
          <li>Community</li>
          <li>Contact</li>
        </ul>

        {/* Social */}
        <div>
          <h1 className="text-white font-bold text-lg pb-3">Social Links</h1>

          <div className="flex gap-3">

            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:text-blue-600 transition"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:text-pink-600 transition"
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>

            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:text-black transition"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>

          </div>
        </div>
      </div>
      <div className="divider my-10"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div>
          © 2026 Digi Tools. All rights reserved.
        </div>
        <ul className="flex gap-4">
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">Terms of Service</li>
          <li className="hover:text-white cursor-pointer">Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;