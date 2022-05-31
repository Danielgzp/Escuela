import React, { useEffect } from "react";

import "./InformationFasfaga.css";

import background from "../../images/parallax1.jpg";

import M from "materialize-css";

const InformationFasfaga = ({ icon, user }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(elems, {});
  }, []);

  return (
    <div>
      <div class="parallax-container">
        <div className="fasfagaInfo-container">
          <h1 className="center">
            <i className={`zmdi zmdi-${icon} zmdi-hc-fw`} /> Usuarios{" "}
            <span>{user}</span>
          </h1>
          <p className="center">Puede añadir más {user} en este apartado</p>
        </div>
        <div class="parallax">
          <img src={background} />
        </div>
      </div>
    </div>
  );
};

export default InformationFasfaga;
