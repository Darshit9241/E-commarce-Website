import React, { useState } from "react";
import Header from "../header/Header";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
 
export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <>
      <Header
        onCartClick={handleOpenCart}
        cartItemCount={cartItems.length}  
      />
      <Navbar />
      <Banner />
      <Product setCartItems={setCartItems} onCartOpen={handleOpenCart} />
      <Cart
        isOpen={isCartOpen}
        closeSidebar={handleCloseCart}
        cartItems={cartItems}
        removeItem={removeItem}
      />
    </>
  );
}
