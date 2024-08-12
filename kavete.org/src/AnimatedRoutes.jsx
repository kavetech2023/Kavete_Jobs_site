import React from 'react'
import Job from "./Pages/Job/Job";
import Home from "./Pages/Home/Home";
import Features from "./Pages/Features/Features";
import Pricing from "./Pages/Pricing/Pricing";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Transition from "./Components/Transition/Transition";
import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job/:jobId" element={<Job />} />
        </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes