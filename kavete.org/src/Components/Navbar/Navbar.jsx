import React, { useContext } from "react";
import "./Navbar.css";
import { JobContext } from "../../Context/JobContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setlanguage } = useContext(JobContext);

  const languageChange = (e) => {
    switch (e.target.value) {
      case "En":
        setlanguage({
          languages: "English",
          languageCode: "en",
        });
        break;
      case "Swh":
        setlanguage({
          languages: "Swahili",
          languageCode: "swh",
        });
        break;
      default:
        setlanguage({
          languages: "English",
          languageCode: "en",
        });
        break;
    }
  };
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
        <select onChange={languageChange}>
          <option value="En">English</option>
          <option value="Swh">Swahili</option>
        </select>
        <button>
          Sign up <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
