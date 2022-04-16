import React from "react";

import "./styles.css";

import regresoAClases from "../../images/regresoaclases.jpg";

const BillBoard = () => {
  return (
    <section className="cartelera-section">
      <div className="cartelera">
        <div className="cartelera-container__image">
          <img src={regresoAClases} alt="" className="" />
        </div>

        <div className="cartelera-container">
          <div className="background"></div>
          <h4 className="center white-text">
            ¿Listos para el regreso a Clases?
          </h4>
          <p className="center white-text">
            ¡Pronto nos reencontraremos en las aulas! Estar atentos a nuestra
            página de noticias para más información sobre las reinscripciones de
            1er a 6to grado.
          </p>
          <span className="red-text right">Continuar leyendo  </span>
        </div>
        {/* <div className="b">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div> */}
      </div>
      <div className="slide-container">
        <ul className="center">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default BillBoard;
