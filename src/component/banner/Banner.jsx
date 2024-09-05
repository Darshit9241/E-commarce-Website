import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#E7E7E7] flex flex-col md:flex-row items-center justify-between h-auto md:h-[670px] px-6 md:px-20 lg:px-44 py-10 md:py-0 relative">
      <div className="flex-1 flex flex-col justify-center md:pr-10 text-center md:text-left">
        <h2 className="font-medium text-gray-500 text-lg md:text-xl">
          New Product
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
          Flexible Chair
        </h1>
        <p className="text-base md:text-lg mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-6 px-4 py-2 md:py-3 lg:py-4 bg-blue-500 text-white rounded hover:bg-blue-600 w-[130px] md:w-[150px]">
          Shop Now
        </button>
      </div>

      <div className="flex-1 mt-8 md:mt-0">
        <img
          src="../../images/section1/chair.png"
          alt="Flexible Chair"
          className="w-full h-auto max-h-[400px] md:max-h-full object-cover"
        />
      </div>
    </div>
  );
}
