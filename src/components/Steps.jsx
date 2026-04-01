import React from 'react';

const Steps = () => {
    return (
                <section className='flex flex-col items-center py-20 px-4 text-center bg-white'>
                    <div className='mb-16'>
                        <h1 className='text-5xl md:text-7xl font-bold text-[#101727] mb-5'>
                            Get Started in 3 Steps
                        </h1>
                        <p className='text-xl font-normal text-gray-400'>
                            Start using premium digital tools in minutes, not hours.
                        </p>
                    </div>

                    <div className='flex justify-between space-x-10'>

    {/* 1st */}
    <div className='relative flex flex-col items-center p-8 rounded-2xl shadow-lg border border-gray-50 max-w-sm'>
        
        <div className='absolute top-4 right-4 w-12 h-12 flex justify-center items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white shadow-md'>
            <span className='text-lg font-bold'>01</span>
        </div>

        <div className='bg-fuchsia-50 p-6 rounded-full mb-6 mt-20'>
            <img className='h-16 w-16 object-contain' src="../assets/user.png" alt="Create Account" />
        </div>

        <div>
            <h2 className='text-2xl font-bold text-[#101727] mb-3'>Create Account</h2>
            <p className='text-gray-500 leading-relaxed'>
                Sign up for free in seconds. No credit card required to get started.
            </p>
        </div>
    </div>

    {/* 2nd */}
    <div className='relative flex flex-col items-center p-8 rounded-2xl shadow-xl/30 border border-gray-50 max-w-sm'>
        
        <div className='absolute top-4 right-4 w-12 h-12 flex justify-center items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white shadow-md'>
            <span className='text-lg font-bold'>02</span>
        </div>

        <div className='bg-fuchsia-50 p-6 rounded-full mb-6 mt-20'>
            <img className='h-16 w-16 object-contain' src="../assets/package.png" alt="Choose Products" />
        </div>

        <div>
            <h2 className='text-2xl font-bold text-[#101727] mb-3'>Choose Products</h2>
            <p className='text-gray-500 leading-relaxed'>
                Browse our catalog and select the tools that fit your needs.
            </p>
        </div>
    </div>

    {/* 3rd */}
    <div className='relative flex flex-col items-center p-8 rounded-2xl shadow-xl/30 border border-gray-50 max-w-sm'>
        
        <div className='absolute top-4 right-4 w-12 h-12 flex justify-center items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white shadow-md'>
            <span className='text-lg font-bold'>03</span>
        </div>

        <div className='bg-fuchsia-50 p-6 rounded-full mb-6 mt-20'>
            <img className='h-16 w-16 object-contain' src="../assets/rocket.png" alt="Start Creating" />
        </div>

        <div>
            <h2 className='text-2xl font-bold text-[#101727] mb-3'>Start Creating</h2>
            <p className='text-gray-500 leading-relaxed'>
                Download and start using your premium tools immediately.
            </p>
        </div>
    </div>

</div>

            
        </section>


    );
};

export default Steps;