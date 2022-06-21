import React from "react";

import './Loader.css'
import pacman from "../../images/pacman.gif";
const Loader = () => {
  return (
    <div className="loader">
      <img src={pacman} alt="" />
    </div>
  );
};

export default Loader;
