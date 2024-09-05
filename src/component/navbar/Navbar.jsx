import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="bg-[#292b2c] text-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-6 gap-2">
          <li className="hover:text-gray-400">Home</li>
          <li className="hover:text-gray-400">About</li>
          
          {/* Home Furniture Dropdown */}
          <li className="relative group">
            <div className="flex justify-center items-center cursor-pointer">
              <button className="hover:text-gray-400">Home Furniture</button>
              <IoIosArrowDropdown className="ml-1 pt-[2px]" />
            </div>
            <ul className="w-[150px] absolute left-0 bg-white text-black mt-2 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Bedroom</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Dining</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Living</li>
            </ul>
          </li>

          {/* Office Furniture Dropdown */}
          <li className="relative group">
            <div className="flex justify-center items-center cursor-pointer">
              <button className="hover:text-gray-400">Office Furniture</button>
              <IoIosArrowDropdown className="ml-1 pt-[2px]" />
            </div>
            <ul className="w-[150px] absolute left-0 bg-white text-black mt-2 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Lounge</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Office Chair</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Office Table</li>
            </ul>
          </li>

          {/* Hospital Furniture Dropdown */}
          <li className="relative group">
            <div className="flex justify-center items-center cursor-pointer">
              <button className="hover:text-gray-400">Hospital Furniture</button>
              <IoIosArrowDropdown className="ml-1 pt-[2px]" />
            </div>
            <ul className="w-[150px] absolute left-0 bg-white text-black mt-2 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Hospital Bed</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Hospital Utility</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Living</li>
            </ul>
          </li>

          <li className="hover:text-gray-400">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
