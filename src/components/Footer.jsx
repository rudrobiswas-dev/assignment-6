import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='bg-[#101727] px-50 pt-30 pb-8  text-gray-400'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-white text-3xl font-bold pb-4'>DiGiTools</h1>
                    <p>Premium digital tools for creators,<br /> professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</p>
                </div>
                <ul className='flex-row space-y-3'>
                    <li className='text-white font-bold text-xl'>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                </ul>
                <ul className='flex-row space-y-3'>
                    <li className='text-white font-bold text-xl'>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
                <ul className='flex-row space-y-3'>
                    <li className='text-white font-bold text-xl'>Resources</li>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>
                <div className='flex-row space-y-3 space-x-1'>
                    <h1 className='text-white font-bold text-xl pb-2'>Social Links</h1>
                    <a href="#" className="bg-white p-2 rounded-full hover:text-blue-600 transition-colors">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full hover:text-pink-600 transition-colors">
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </a>
                        <a href="#" className=" bg-white p-2 rounded-full hover:text-black transition-colors ">
                            <FontAwesomeIcon icon={faSquareXTwitter} />
                        </a>
                </div>
            </div>

            <div className="divider"></div>
            <div className='flex justify-between'>
                <div><a href="#">© 2026 Digi tools. All rights reserved.</a></div>
                <ul className='flex space-x-4'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;






