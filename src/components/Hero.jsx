import React from "react";
import banner from "../assets/banner.png";
import playIcon from "../assets/Play.png";

const Hero = () => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-50 pt-20 md:pt-32 pb-12 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2">
          <div className="w-fit flex items-center gap-2 bg-[#e1e7ff] py-2 px-4 rounded-full">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-5 h-5 bg-purple-400 rounded-full opacity-40 animate-ping"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <span className="font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text text-sm md:text-base">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#4f39f6] pt-6 leading-tight">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-[#627382] py-6 text-sm sm:text-base">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6] text-white font-bold py-3 px-6 transition-all duration-300">
              Explore Products
            </button>
            <div className="w-fit flex items-center gap-2 btn bg-white py-3 px-6 rounded-full shadow-none border-2 border-[#9514fa]">
              <img src={playIcon} alt="play" className="w-4 h-4"/>
              <span className="font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">
                Watch Demo
              </span>
            </div>

          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-md lg:max-w-xl"
            src={banner}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;