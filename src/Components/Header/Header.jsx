import React from "react";

import { HeaderStyle, burgerContainer } from "./styles";
import "./styles.css";

import logo from "../../images/logocolegio.png"

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo del colegio" className="logo"/>
      </div>
      <div className="burger-container">
        <i className="material-icons">menu</i>
      </div>
    </header>
  );
};

export default Header;
