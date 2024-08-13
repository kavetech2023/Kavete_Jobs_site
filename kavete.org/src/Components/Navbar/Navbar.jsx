import React, { useContext, useState } from "react";
import "./Navbar.css";
import { JobContext } from "../../Context/JobContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { TiContacts } from "react-icons/ti";



const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    sidebar ? setSidebar(false) : setSidebar(true);
  }


  return (
    <>
    <div className="navbar">
      <Link to={"/"}>
        <img src="" alt="Logo" className="logo" />
      </Link>

      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/editcv"}>
          <li>Edit Cv - AI</li>
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
          <button className="country-button">Country</button>
          <button className="menu-button" onClick={toggleSidebar}>Menu</button>
      </div>
    </div>

    <div className={`sidebar ${sidebar?"sidebar-show":""}`}>
    
      <div className="top">
        <div className="logo">
          <span className="h-menu">H</span>
          <span>logo</span>
        </div>
        <span>Hm</span>
      </div>

      <div className="user">
        <img src="https://randomuser.me/api/portraits" />
        <div>
          <p className="bold"></p>
          <p>Username</p>
        </div>
        <ul>
            <li>
                <Link to={"/"}>
                <span><FaHome /></span>
                <span>Home</span>
            </Link>
            <span className="tooltip"></span>
            </li>

            <li>
                <Link to={"/editcv"}>
                <span><MdModeEdit /></span>
                <span>Edit Cv</span>
            </Link>
            <span className="tooltip"></span>
            </li> 
            
            <li>
            <Link to={"/pricing"}>
            <span><IoIosPricetags /></span>
            <span>Pricing</span>
            </Link>
            <span className="tooltip"></span>
            </li> 
            
            <li><Link to={"/about"}>
            <span><SiAboutdotme /></span>
                <span>About</span>
            </Link>
            <span className="tooltip"></span>
            </li> 
            <li><Link to={"/contact"}>
            <span><TiContacts /></span>
                <span>Contact us</span>
            </Link>
            <span className="tooltip"></span>
            </li>
            
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
