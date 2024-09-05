import React, { useState, useEffect, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header({ onCartClick, cartItemCount }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setIsProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignInClick = () => {
    navigate('/sign-up'); 
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white py-4 px-32 z-10 shadow-md">
      <div className="flex justify-between items-center">
        {/* <div className="text-2xl font-bold text-[#FF7004]">Darshit</div> */}
        <div className="flex space-x-5 relative">
          <IoSearch className="text-2xl cursor-pointer" />
          <div className="relative" ref={profileMenuRef}>
            <CgProfile
              className="text-2xl cursor-pointer"
              onClick={toggleProfileMenu}
            />
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl z-50">
                <div
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  onClick={handleSignInClick}
                >
                  Sign Up
                </div>
                <div
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  onClick={handleLogInClick} 
                >
                  Log In
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <FaShoppingBag
              className="text-2xl cursor-pointer"
              onClick={onCartClick}
            />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
        <div className="text-2xl font-bold text-[#FF7004]">Darshit</div>
      </div>
    </div>
  );
}
