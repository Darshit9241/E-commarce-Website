import React from "react";
import Home from "./component/home/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./component/signup/SignUp";
import Login from "./component/login/Login";
import ProductDetail from "./component/productdetail/ProductDetail";

export default function App() {

  return (
    <>
      <Routes>
        <Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route >
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}
