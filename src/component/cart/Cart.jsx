import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Cart = ({ isOpen, closeSidebar, cartItems = [], removeItem }) => {
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const updateQuantities = () => {
    setQuantities(cartItems.map(() => 1));
  };

  const handleQuantityChange = (index, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + delta);
      return newQuantities;
    });
  };

  const handleRemoveItem = (index) => {
    if (removeItem) {
      removeItem(index);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item, index) => total + item.price * quantities[index], 0)
      .toFixed(2);
  };

  React.useEffect(() => {
    updateQuantities();
  }, [cartItems]);

  return (
    <div
      className={`fixed right-0 top-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-full md:w-[350px] flex flex-col`}
    >
      <div className="flex justify-between p-5">
        <h1 className="font-bold text-xl">Cart</h1>
        <button onClick={closeSidebar} className="text-black">
          <MdOutlineClose className="size-6 text-[#FF7004]" />
        </button>
      </div>
      <hr />

      <div className="flex-grow overflow-y-auto">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-around p-5">
            <div className="flex">
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="w-[100px] h-[130px] mb-4"
              />
              <div className="flex flex-col ml-3">
                <h1 className="pt-1">{item.name}</h1>
                <h2 className="pt-1">s / purple / Metal</h2>
                <h3 className="pt-1">
                  {quantities[index]} X{" "}
                  <span className="text-[#FF7004]">
                    ${item.price.toFixed(2)}
                  </span>
                </h3>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="border border-gray-600 px-3 py-1 bg-slate-400 text-white rounded-lg hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                  >
                    -
                  </button>
                  <div className="mx-4">{quantities[index]}</div>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="border border-gray-600 px-3 py-1 bg-slate-400 text-white rounded-lg hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <button onClick={() => handleRemoveItem(index)}>
                <MdOutlineClose className="size-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FF7004] text-white font-bold py-2 px-5 fixed bottom-0 left-0 w-full md:w-[350px] rounded-t-md">
        <div className="flex justify-between">
          <div className="py-2">View Cart</div>
          <div className="py-2 bg-white text-black px-3 rounded-sm">
            ${calculateTotalPrice()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
