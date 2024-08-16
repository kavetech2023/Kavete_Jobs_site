import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Job from "./Pages/Job/Job";
import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";
import Pricing from "./Pages/Pricing/Pricing";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { Routes, Route} from "react-router-dom";
import Donate from "./Pages/Donate/Donate";



const App = () => {
const [notification, setNotification] = useState(0);
  
  return (
    <div className="app">
      <Navbar notification={notification}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editcv" element={<Edit />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/job/:jobId" element={<Job setNotification={setNotification} />} />
        </Routes>
      <Footer />
    
    </div>
  );
};

export default App;
