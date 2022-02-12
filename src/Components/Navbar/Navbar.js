import React from "react";
import logo from "../../images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-container">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
            <ul className="nav-links">
              <li className="nav-items">
                <a href="#features">Features</a>
              </li>
              <li className="nav-items">
                <a href="#teams">Team</a>
              </li>
              <li className="nav-items">
                <a href="/">Sign In</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
