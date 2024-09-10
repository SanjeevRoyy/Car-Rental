import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Vehicles from "./pages/vehicles/Vehicles";
import OurApp from "./pages/faq/OurApp";
import Testimonials from "./pages/testimonials/Testimonials";

const Router = () => {
  return (
    <>
      {/* <Navbar/>
    <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/faq" element={<OurApp />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </>
  );
};

export default Router;
