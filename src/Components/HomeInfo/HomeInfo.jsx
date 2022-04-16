import React from "react";

import "./styles.css"

import pastoral from "../../images/pastoral240x130.jpg";
import biblioteca from "../../images/biblioteca240x130.jpg";

const HomeInfo = () => {
  return (
    <section className="section home-info">
      <h3 className="center">Bienvenidos a la pagina de nuestra escuela</h3>
      <div className="pastoral-container">
        <h4 className="center title-info">Pastoral</h4>
        <div class="center">
          <img src={pastoral} alt="" className="center" />
        </div>
        <p className="center">
          “Yo he venido para que tengan vida y la tengan en abundancia. Yo soy
          el buen pastor. El buen pastor da su vida por las ovejas. Yo las
          conozco y ellas me conocen a mí. ( jn. 10, 10-11.14)
        </p>
        <p>
          Sigue esta post y conoce todas las ultimas noticias de la Pastoral del
          colegio San Francisco
        </p>
        <div className="right-align">
          <a href="#">Ver más </a>
        </div>
      </div>
      <div className="biblioteca-container">
        <h4 className="center title-info">Biblioteca </h4>
        <div class="imgholder center">
          <img src={biblioteca} alt="" />
        </div>
        <p>
          Todos el personal directivo, alumnos, docentes y representas estan
          invitados a donar libros a la biblioteca de la escuela para el uso de
          todo aquel con sed de conocimiento.
        </p>
        <p>
          Sigue este post para conocer todos los libros disponibles en nuestra
          biblioteca.
        </p>
        <div className="right-align">
          <a href="#" className="right-align">
            Ver más 
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
