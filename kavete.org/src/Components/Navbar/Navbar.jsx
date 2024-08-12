import React, { useContext } from "react";
import "./Navbar.css";
import { JobContext } from "../../Context/JobContext";
import { Link } from "react-router-dom";
import axios from 'axios';



const Navbar = () => {

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src="" alt="Logo" className="logo" />
      </Link>

      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/features"}>
          <li>Features</li>
        </Link>
        <Link to={"/pricing"}>
          <li>Pricing</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact us</li>
        </Link>
      </ul>
      <div className="nav-right">
          <button>Share Job</button>
      </div>
    </div>
  );
};

export default Navbar;
