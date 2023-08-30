// Path: src/Header.js

import React from "react";
import "./css/Header.css";
import logo1 from "./images/logo-1.png";
import logo2 from "./images/logo-2.png";


function Header() {
  return (
    <div className="site-header">
      <img className="site-header_logo--left" src={logo1} alt="logo1" />
      <h1 className="site-header_title">Choice Aged Care</h1>
      <img className="site-header_logo--right" src={logo1} alt="logo1" />
    </div>
  );
}

export default Header;
