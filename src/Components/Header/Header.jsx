import React from "react";

import { HeaderStyle, burgerContainer } from "./styles";
import "./styles.css";

import logo from "../../images/logofeyalegria 2.png"

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo del colegio" className="logo"/>
        <h4 className="white-text">U.E.C Fe y Alegría San Francisco </h4>
      </div>
      <div className="burger-container">
        <i className="material-icons icon-white">menu</i>
      </div>
    </header>
  );
};

export default Header;
