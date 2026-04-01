import React from "react";

// IMPORT IMAGES
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const Steps = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-10 lg:px-20 text-center bg-white">

      {/* Heading */}
      <div className="mb-14">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#101727] mb-4">
          Get Started in 3 Steps
        </h1>

        <p className="text-gray-400 text-sm sm:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* STEP 1 */}
        <div className="relative flex flex-col items-center p-8 rounded-2xl shadow-lg border border-gray-50">

          <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white">
            <span className="font-bold">01</span>
          </div>

          <div className="bg-fuchsia-50 p-6 rounded-full mb-6 mt-12">
            <img className="h-16 w-16 object-contain" src={userImg} alt="Create Account"/>
          </div>

          <h2 className="text-xl font-bold text-[#101727] mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="relative flex flex-col items-center p-8 rounded-2xl shadow-lg border border-gray-50">

          <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white">
            <span className="font-bold">02</span>
          </div>

          <div className="bg-fuchsia-50 p-6 rounded-full mb-6 mt-12">
            <img className="h-16 w-16 object-contain" src={packageImg} alt="Choose Products"/>
          </div>

          <h2 className="text-xl font-bold text-[#101727] mb-2">
            Choose Products
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="relative flex flex-col items-center p-8 rounded-2xl shadow-lg border border-gray-50">

          <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white">
            <span className="font-bold">03</span>
          </div>

          <div className="bg-fuchsia-50 p-6 rounded-full mb-6 mt-12">
            <img className="h-16 w-16 object-contain" src={rocketImg} alt="Start Creating"/>
          </div>

          <h2 className="text-xl font-bold text-[#101727] mb-2">
            Start Creating
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Steps;