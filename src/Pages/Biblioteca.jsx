import React from "react";

import "./styles/Biblioteca.css";

import biblioteca from "../images/bibliotecapage/fyabiblio.jpg";
import cuestion from "../images/bibliotecapage/cuestion.png";
import childrens from "../images/bibliotecapage/childresBooks.png";
import title from "../images/bibliotecapage/title.png";

const Biblioteca = () => {
  return (
    <main>
      <div className="layout-biblioteca"></div>
      <section className="biblioteca">
        {/* <img src={title} alt="" className="title-biblioteca" /> */}

        <h2 className="center">BIBLIOTECA FE Y ALEGRIA SAN FRANCISCO</h2>

        <div className="row">
          <div className="col s12 l7 biblioteca-container">
            <h3 className="center">¿Qué servicios prestamos?</h3>
            <ul>
              <li>
                <i className="material-icons">check</i> Préstamo para Docentes
              </li>
              <li>
                <i className="material-icons">check</i>Estudiantes
              </li>
              <li>
                <i className="material-icons">check</i>exalumnos y personal en
                general
              </li>
              <li>
                <i className="material-icons">check</i>exalumnos y personal
              </li>
              <li>
                <i className="material-icons">check</i>Caja Viajera
              </li>
              <li>
                <i className="material-icons">check</i>
                Sala Audio Visual
              </li>
              <li>
                <i className="material-icons">check</i>Espacio para Formaciones
              </li>
            </ul>
          </div>
          <div className="col s12 l5 biblioteca-container">
            <h4 className="center">
              También contamos con:{" "}
              <strong>Sala de consultas bibliográfica</strong> y{" "}
              <strong> préstamo de material didáctico</strong>
            </h4>
            <img
              src={biblioteca}
              alt="Imagen de la Biblioteca"
              className="picture-biblio"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Biblioteca;
