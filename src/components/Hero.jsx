import React from 'react';
import banner from '../assets/banner.png'; 
import playIcon from '../assets/Play.png';


const Hero = () => {
    return (
        <div>
            <div className="min-w-full px-50 pt-40 pb-10 bg-white shadow-sm">
                <div className="flex justify-between items-center">
                    
                    <div className='w-3/5'>
                        <div className='w-fit flex items-center gap-2 bg-[#e1e7ff] py-2 px-4 rounded-full'>
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-5 h-5 bg-purple-400 rounded-full opacity-40 animate-ping"></div>
                                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                            </div>
                            <span className='font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text'>
                                New: AI-Powered Tools Available
                            </span>
                        </div>                      

                        <h1 className="text-8xl font-bold text-[#4f39f6] pt-5">
                            Supercharge Your Digital Workflow
                        </h1>

                        <p className="text-[#627382] py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today.
                        </p>

                        <div className='flex gap-3'>
                            <button className='rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6] text-white font-bold py-2 px-4 transition-all duration-300'>
                                Explore Products
                            </button>
                            <div className='w-fit btn bg-white py-2 px-4 rounded-full shadow-none border-2 border-[#9514fa]'>
                                <img src={playIcon} alt="play" /> 
                                <a className='font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] inline-block text-transparent bg-clip-text'>
                                    Watch Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <img className='w-125' src={banner} alt="banner" />
                    </div>

                </div>
            </div>  
        </div>
    );
};

export default Hero;