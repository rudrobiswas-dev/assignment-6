import React from "react";

const Active = () => {
  return (
    <div className="text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-16 md:py-20 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              50k+
            </h1>
            <h5 className="text-gray-200 text-sm md:text-lg">
              Active Users
            </h5>
          </div>
          <div className="sm:border-l sm:border-r border-gray-400">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              200+
            </h1>
            <h5 className="text-gray-200 text-sm md:text-lg">
              Premium Tools
            </h5>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              4.9
            </h1>
            <h5 className="text-gray-200 text-sm md:text-lg">
              Rating
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Active;