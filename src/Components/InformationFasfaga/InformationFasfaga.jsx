import React from "react";

import "./InformationFasfaga.css";

const InformationFasfaga = ({ icon, user }) => {
  return (
    <div className="container-fluid fasfagaInfo-container">
      <h1 className="center">
        <i className={`zmdi zmdi-${icon} zmdi-hc-fw`} /> Usuarios{" "}
        <span>{user}</span>
      </h1>
      <p className="center">Puede añadir más {user} en este apartado</p>
    </div>
  );
};

export default InformationFasfaga;
