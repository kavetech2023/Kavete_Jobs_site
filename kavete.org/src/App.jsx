import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Job from "./Pages/Job/Job";
import Home from "./Pages/Home/Home";
import Features from "./Pages/Features/Features";
import Pricing from "./Pages/Pricing/Pricing";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job/:jobId" element={<Job />} />
      </Routes>
    </div>
  );
};

export default App;
