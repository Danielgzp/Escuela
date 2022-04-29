import React, { useEffect } from "react";

import "./styles.css";
import M from "materialize-css";

import regresoAClases from "../../images/regresoaclases.jpg";
import semanaSanta from "../../images/semanasanta.jpg";
import profeMusica from "../../images/joropo.JPG";
import vacaciones from "../../images/vacaciones.jpg";

const BillBoard = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelector(".carousel");
    var instances = M.Carousel.init(elems, {
      duration: 600,
      indicators: true,
      onCycleTo: setInterval(() => {
        instances.next()
      }, 20000),
    });
    
  });

  return (
    <section className="cartelera-section">
      <div className="carousel carousel-slider center">
        <div className="carousel-item red white-text" href="#one!">
          <h2>First Panel</h2>
          <p className="white-text">This is your first panel</p>
        </div>
        <div className="carousel-item amber white-text" href="#two!">
          <h2>Second Panel</h2>
          <p className="white-text">This is your second panel</p>
        </div>
        <div className="carousel-item green white-text" href="#three!">
          <h2>Third Panel</h2>
          <p className="white-text">This is your third panel</p>
        </div>
        <div className="carousel-item blue white-text" href="#four!">
          <h2>Fourth Panel</h2>
          <p className="white-text">This is your fourth panel</p>
        </div>
        <ul className="indicators"></ul>
      </div>
      {/* <div class="carousel carousel-slider center">
        <div className="background"></div>
        <div className="cartelera carousel-item" href="#one!">
          <div className="cartelera-container__image">
            <img src={regresoAClases} alt="" className="" />
          </div>

          <div className="cartelera-container">
            <h4 className="center white-text">
              ¿Listos para el regreso a Clases?
            </h4>
            <p className="center white-text">
              ¡Pronto nos reencontraremos en las aulas! Estar atentos a nuestra
              página de noticias para más información sobre las reinscripciones
              de 1er a 6to grado.
            </p>
            <span className="red-text right">Continuar leyendo </span>
          </div>
        </div>

        <div class="cartelera carousel-item" href="#two!">
          <div className="cartelera-container__image">
            <img src={semanaSanta} alt="" />
          </div>
          <div className="cartelera-container">
            <h4 className="center white-text">¡Se aproxima semana santa!</h4>
            <p className="center white-text">
              En la última semana de la cuaresma, desde el dia el domingo 10 de
              Abril hasta el sabado 16 no habrá actividades escolares en nuestra
              institución.
            </p>
            <span className="red-text right">Continuar leyendo </span>
          </div>
        </div>

        <div class="cartelera carousel-item" href="#two!">
          <div className="cartelera-container__image">
            <img src={vacaciones} alt="" />
          </div>
          <div className="cartelera-container">
            <h4 className="center white-text">¡No pares de aprender!</h4>
            <p className="center white-text">
              Durante las vacaciones, no frenes tu aprendizaje. Continua siendo
              curioso, continua indigando y leyendo sobre lo que más te
              asombran.
            </p>
            <span className="red-text right">Continuar leyendo </span>
          </div>
        </div>
        <div class="cartelera carousel-item" href="#two!">
          <div className="cartelera-container__image">
            <img src={profeMusica} alt="" />
          </div>
          <div className="cartelera-container">
            <h4 className="center white-text">
              Solicitamos profesor de musica
            </h4>
            <p className="center white-text">
              El colegio San Francisco tiene las puertas abiertas a todo aquel
              docente con habilidades musicales en distintos instrumentos y que
              además cuente con el dinamismo de realizar actividades culturales
              con los alumnos de nuestra institución.
            </p>
            <span className="red-text right">Continuar leyendo </span>
          </div>
        </div>
        <ul class="indicators"></ul>
      </div> */}
    </section>
  );
};

export default BillBoard;
