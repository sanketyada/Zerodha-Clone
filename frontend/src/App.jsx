import React from "react";
import HomePage from "./LandingPages/Home/HomePage";
import SignUp from "./LandingPages/Signup/SignUp";
import About from "./LandingPages/About/AboutPage";
import Products from "./LandingPages/Products/ProductPage";
import Priceing from "./LandingPages/Priceing/PriceingPage";
import Support from "./LandingPages/Support/SupportPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./LandingPages/Navbar";
import Footer from "./LandingPages/Footer";
import NotFound from "./LandingPages/NotFound";
function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/priceing" element={<Priceing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
