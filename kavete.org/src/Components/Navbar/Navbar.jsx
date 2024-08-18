import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/kavete_logo.png";
import { JobContext } from "../../Context/JobContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { TiContacts } from "react-icons/ti";



const Navbar = ({notification}) => {
  const [sidebar, setSidebar] = useState(false);
  const [text, setText] = useState("Menu");


  const toggleSidebar = () => {
    sidebar ? setSidebar(false)  : setSidebar(true);
    sidebar ? setText("Menu") : setText("Close Menu");
  }


  return (
    <>
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/editcv"}>
          <li>My CV</li>
        </Link>
        <Link to={"/pricing"}>
          <li>My Cover Letter</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact us</li>
        </Link>
      </ul>
      <div className="nav-right">
            <Link to={"/auth"} className="user-profile">
              <div className="dropdown">
                <div className="notification">{notification}</div>
              <img src="https://via.placeholder.com/150" alt="" />
              
              <div className="google-button">
                
              </div>
              </div>   
            </Link>


          <button className="country-button">Donate</button>
          <button className="menu-button" onClick={toggleSidebar}>{text}</button>
          
      </div>
    </div>

    <div className={`sidebar ${sidebar?"sidebar-show":" "}`}>
    
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="user">
       
        <ul>
            <li>
                <Link to={"/"} onClick={toggleSidebar}>
                <span><FaHome /></span>
                <span>Home</span>
            </Link>
            </li>

            <li>
                <Link to={"/editcv"} onClick={toggleSidebar}>
                <span><MdModeEdit /></span>
                <span>My Cv</span>
            </Link>
            </li> 
            
            <li>
            <Link to={"/pricing"} onClick={toggleSidebar}>
            <span><IoIosPricetags /></span>
            <span>My cover letter</span>
            </Link>
            </li> 
            
            <li><Link to={"/about"} onClick={toggleSidebar}>
            <span><SiAboutdotme /></span>
                <span>About</span>
            </Link>
            </li> 
            <li><Link to={"/contact"} onClick={toggleSidebar}>
            <span><TiContacts /></span>
                <span>Contact us</span>
            </Link>
            </li>
            
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
