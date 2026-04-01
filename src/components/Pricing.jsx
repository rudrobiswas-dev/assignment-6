import React from 'react';

const Pricing = () => {
    return (
        <div>
            <section className='flex flex-col items-center py-20 px-4 text-start bg-white'>
                <div className='mb-16 text-center'>
                        <h1 className='text-5xl md:text-7xl font-bold text-[#101727] mb-5'>
                            Simple, Transparent Pricing
                        </h1>
                        <p className='text-xl font-normal text-gray-400'>
                            Choose the plan that fits your needs. Upgrade or downgrade anytime.
                        </p>
                    </div>

                    <div className='flex justify-between space-x-10'>
                        {/* 1st */}
                        <div className="card w-96 bg-gray-50 text-black shadow-xl/30">
                            <div className="card-body">
                                <div className="flex">
                                    <div>
                                        <h2 className="text-2xl font-bold">Starter</h2>
                                        <p className='text-xl text-gray-400'>Perfect for getting started</p>
                                        <h2 className="text-3xl font-bold">$0<span className='text-sm text-gray-500 font-light'>/month</span></h2>
                                    </div>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>
                                </ul>
                                <div className="mt-6">
                                <button className='w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6] text-white font-bold py-2 px-4 transition-all duration-300'>Get Started Free</button>
                                </div>
                            </div>
                        </div>
                        {/*2nd  */}
                        <div className="card relative w-96 bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-xl/30">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-md badge-warning rounded-full shadow-md">
                                Most Popular
                            </span>
                            <div className="card-body">
                                <div className="flex">
                                    <div>
                                        <h2 className="text-2xl font-bold">Pro</h2>
                                        <p className='text-xl text-gray-400'>Best for professionals</p>
                                        <h2 className="text-3xl font-bold">$29
                                            <span className='text-sm text-gray-300 font-light'>/month</span>
                                        </h2>
                                    </div>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>✔️ Unlimited templates</li>
                                    <li>✔️ Access to all premium tools</li>
                                    <li>✔️ Unlimited projects</li>
                                    <li>✔️ AI-driven image enhancements</li>
                                    <li>✔️ Batch processing capabilities</li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block rounded-full border-none bg-white text-purple-900">
                                        Start Pro Trial
                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* 3rd */}
                        <div className="card w-96 bg-gray-50 text-black shadow-xl/30">
                            <div className="card-body">
                                <div className="flex">
                                    <div>
                                        <h2 className="text-2xl font-bold">Enterprise</h2>
                                        <p className='text-xl text-gray-400'>For teams and businesses</p>
                                        <h2 className="text-3xl font-bold">$99 <span className='text-sm text-gray-500 font-light'>/month</span></h2>
                                    </div>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Sla guarantee</span>
                                </li>
                                </ul>
                                <div className="mt-6">
                                <button className='w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6] text-white font-bold py-2 px-4 transition-all duration-300'>Get Started Free</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default Pricing;