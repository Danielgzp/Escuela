import React from "react";

import "./styles.css";

import logo from "../../images/logofeyalegria 2.png"

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo del colegio" className="logo" />
        <h4 className="white-text">U.E.C Fe y Alegría San Francisco </h4>
      </div>
      <div className="menu-container">
        <i className="material-icons icon-white">menu</i>
      </div>
      <script src="./burger.js"></script>
    </header>
  );
};

export default Header;
