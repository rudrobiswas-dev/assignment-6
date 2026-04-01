import React from 'react';

const hero = () => {
    return (
        <div>
            <div className="min-w-full px-50 pt-40 pb-10 bg-white shadow-sm">
                <div className="flex justify-between items-center">
                    
                        <div className='w-3/5'>
                            <div className='w-fit btn bg-[#e1e7ff] py-2 px-4 rounded-full shadow-none border-none '>
                            <a className='font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] inline-block text-transparent bg-clip-text '>  New: AI-Powered Tools Available</a>
                            </div>                      
                            <h1 className="text-8xl font-bold text-[#4f39f6] pt-5">Supercharge Your Digital Workflow</h1>
                            <p className=" text-[#627382] py-6">Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today.Explore Products</p>
                            <div className='flex gap-3'>
                                <button className='rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6] text-white font-bold py-2 px-4 transition-all duration-300'>Explore Products</button>
                                <div className='w-fit btn bg-white py-2 px-4 rounded-full shadow-none border-2 border-[#9514fa]'>
                                <a className='font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] inline-block text-transparent bg-clip-text'>Watch Demo</a>
                                </div>
                            </div>
                        </div>

                        <div className=''><img className='w-125 ' src='../assets/banner.png' /></div>
                </div>
            </div>  
        </div>
    );
};

export default hero;