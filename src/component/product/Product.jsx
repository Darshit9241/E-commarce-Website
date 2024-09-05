import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import products from "../ProductData";

export default function Product({ setCartItems, onCartOpen }) {
  const [favoriteStates, setFavoriteStates] = useState(
    Array(products.length).fill(false)
  );
  const navigate = useNavigate();

  const handleFavoriteClick = (index) => {
    const newFavoriteStates = [...favoriteStates];
    newFavoriteStates[index] = !newFavoriteStates[index];
    setFavoriteStates(newFavoriteStates);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);  
    onCartOpen();
  };

  return (
    <>
      <div className="py-10">
        <div className="flex flex-col justify-center items-center py-5">
          <h1 className="text-3xl font-bold text-center">Our Product</h1>
          <p className="pt-2 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do{" "}
            <br className="hidden sm:block" /> eiusmo tempor incididunt ut
            labore
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-10 md:px-20 lg:px-40">
          {products.map((product, index) => (
            <div key={product.id} className="relative group">
              <div className="relative cursor-pointer">
                <div onClick={() => navigate(`/product/${product.id}`)}>
                  <img
                    src={product.imgSrc}
                    className="w-full h-auto mb-4"
                    alt={product.alt}
                  />
                </div>
                <div
                  onClick={() => handleFavoriteClick(index)}
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  {favoriteStates[index] ? (
                    <FaHeart className="text-red-500 text-xl size-6" />
                  ) : (
                    <FaRegHeart className="text-gray-500 text-xl size-6" />
                  )}
                </div>
                <div className="absolute top-10 right-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <HiOutlineViewGrid className="text-gray-500 text-xl size-6" />
                </div>
                <div className="absolute top-20 right-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaCodeCompare className="text-gray-500 text-xl size-6" />
                </div>
                <button
                  className="absolute bottom-2 left-2 right-2 bg-white text-black font-semibold rounded py-2 hover:bg-white-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleAddToCart(product)} // Add to cart
                >
                  Add to Cart
                </button>
                <div className="bg-red-700 px-2 rounded absolute top-5 left-2 text-white">
                  {product?.discount}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <div className="flex text-lg">
                  <h1 className="line-through">
                    ${product.oldPrice.toFixed(1)}
                  </h1>
                  <h1 className="ml-5">${product.price.toFixed(1)}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
