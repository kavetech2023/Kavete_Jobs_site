import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="" alt="Logo" className="logo"/>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="En">English</option>
          <option value="Swh">Swahili</option>
        </select>
        <button>Sign up <span>+</span></button>
      </div>
    </div>
  );
};

export default Navbar;
