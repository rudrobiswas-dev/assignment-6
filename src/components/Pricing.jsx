import React from 'react';

const Pricing = () => {
    return (
        <div>
            <section className='flex flex-col items-center py-16 md:py-20 px-4 bg-white'>
                <div className='mb-12 md:mb-16 text-center max-w-2xl'>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-[#101727] mb-4'>
                        Simple, Transparent Pricing
                    </h1>
                    <p className='text-base sm:text-lg text-gray-400'>
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>   
                    {/* 1st */}
                    <div className="card w-full bg-gray-50 text-black shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Starter</h2>
                            <p className='text-gray-400'>Perfect for getting started</p>
                            <h2 className="text-3xl font-bold">
                                $0 <span className='text-sm text-gray-500 font-light'>/month</span>
                            </h2>
                            <ul className="mt-6 flex flex-col gap-2 text-sm">
                                <li>✔️ Access to 10 free tools</li>
                                <li>✔️ Basic templates</li>
                                <li>✔️ Community support</li>
                                <li>✔️ 1 project per month</li>
                            </ul>

                            <div className="mt-6">
                                <button className='w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-2 px-4'>
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="card relative w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-xl scale-100 lg:scale-105">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-warning rounded-full">
                            Most Popular
                        </span>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <p className='text-gray-200'>Best for professionals</p>
                            <h2 className="text-3xl font-bold">
                                $29 <span className='text-sm text-gray-300 font-light'>/month</span>
                            </h2>

                            <ul className="mt-6 flex flex-col gap-2 text-sm">
                                <li>✔️ Unlimited templates</li>
                                <li>✔️ Premium tools</li>
                                <li>✔️ Unlimited projects</li>
                                <li>✔️ AI enhancements</li>
                                <li>✔️ Batch processing</li>
                            </ul>

                            <div className="mt-6">
                                <button className="btn w-full rounded-full bg-white text-purple-900 border-none">
                                    Start Pro Trial
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="card w-full bg-gray-50 text-black shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Enterprise</h2>
                            <p className='text-gray-400'>For teams and businesses</p>
                            <h2 className="text-3xl font-bold">
                                $99 <span className='text-sm text-gray-500 font-light'>/month</span>
                            </h2>

                            <ul className="mt-6 flex flex-col gap-2 text-sm">
                                <li>✔️ Everything in Pro</li>
                                <li>✔️ Team collaboration</li>
                                <li>✔️ Custom integrations</li>
                                <li>✔️ Dedicated support</li>
                                <li>✔️ SLA guarantee</li>
                            </ul>
                            <div className="mt-6">
                                <button className='w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-2 px-4'>
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Pricing;