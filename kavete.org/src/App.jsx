import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { GoogleLogin } from "@react-oauth/google";
import Footer from "./Components/Footer/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

const App = () => {
  return (
    <div className="app">
      <Navbar />
        <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default App;
