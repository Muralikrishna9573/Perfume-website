import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProductDetails from "./Pages/Productdetails";
import Login from "./Pages/Login";   // Ensure these files exist
import Register from "./Pages/Register"; // Ensure these files exist


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
    </BrowserRouter>
    
  );
};

export default App;
