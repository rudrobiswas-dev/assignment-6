import React from 'react';

const Active = () => {
    return (
        <div className='text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-20 shadow-xl/30'>
            <div className='flex justify-around px-50'>
                <div>
                    <h1 className='text-6xl font-extrabold'>50k+</h1>
                    <h5 className='text-gray-400 text-2xl font-normal' >Active User</h5>
                </div>
                <div class="divider divider-horizontal before:bg-gray-600 after:bg-gray-600"></div>
                <div>
                    <h1 className='text-6xl font-extrabold'>200+</h1>
                    <h5 className='text-gray-400 text-2xl font-normal'>Premium tools</h5>
                </div> 
                <div class="divider divider-horizontal before:bg-gray-600 after:bg-gray-600"></div>
                <div>
                    <h1 className='text-6xl font-extrabold'>4.9</h1>
                    <h5 className='text-gray-400 text-2xl font-normal'>Rating</h5>
                </div>
            </div>
        </div>
    );
};

export default Active;  