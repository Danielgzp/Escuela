import React from "react";

import "./styles.css";

import bienestar from "../../images/bienestar80x80.png";
import tapabocas from "../../images/tapabocas80x80.jpg";
import nuevoIngreso from "../../images/nuevoingreso80x80.jpg";
import reinscripciones from "../../images/reinscripciones80x80.jpg";

const LastNews = () => {
  return (
    <section className="lastNews-container">
      <h4 className="title-info center">Ultimas noticias</h4>
      <ul className="news-list">
        <li>
          <div className="imgholder valign-wrapper">
            <a href="#">
              <img src={bienestar} alt="" href="#" />
            </a>
          </div>
          <div>
            <a href="#">Bienestar estudiantil</a>

            <p> ¡Nos preocupamos por ti!</p>
            <p>
              Recuerda que si presentas cualquier problema que presentes en la
              institucion, por favor dirigite a nuestras oficinas.
            </p>
          </div>
        </li>
        <li>
          <div className="imgholder valign-wrapper">
            <a href="#">
              <img src={tapabocas} alt="" />
            </a>
          </div>
          <div>
            <a href="#">Medidas de prevención</a>

            <p>
              Todos los miembros del personal administrativo, docentes y alumnos
              deben portar con las medidas de prevención contra COVID-19
              necesarias para el ingreso a la institución.
            </p>
          </div>
        </li>
        <li>
          <div className="imgholder valign-wrapper">
            <a href="#">
              <img src={nuevoIngreso} alt="" />
            </a>
          </div>
          <div>
            <a href="#">Estudiantes nuevo ingreso</a>

            <p>
              Si quieres participar en nuestra jornada de nuevo ingreso por
              favor dirigite a nuestra institucion y solicita la entrevista para
              tu representado.
            </p>
          </div>
        </li>
        <li className="last">
          <div className="imgholder valign-wrapper">
            <a href="#">
              <img src={reinscripciones} alt="" />
            </a>
          </div>
          <div>
            <a href="#">Reinscripciones</a>

            <p>
              Las reinscripciones para el año academico 2021-2022 serán a partir
              de septiembre 23 en nuestras instituciones academicas
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default LastNews;
