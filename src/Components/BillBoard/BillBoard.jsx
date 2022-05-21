import React, { useEffect, useState } from "react";

import "./styles.css";
import M from "materialize-css";

import regresoAClases from "../../images/regresoaclases.jpg";
import semanaSanta from "../../images/semanasanta.jpg";
import profeMusica from "../../images/joropo.JPG";
import vacaciones from "../../images/vacaciones.jpg";
import CarouselArticle from "../CarouselArticle/CarouselArticle";

import "./styles.css";

const BillBoard = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelector(".carousel");
    var instances = M.Carousel.init(elems, {
      duration: 600,
      indicators: true,
    });
  });

  return (
    <section id="billboard">
      {/* <div id="cincopa_d0220b">...</div> */}
      <div className="carousel carousel-slider center">
        <div className="carousel-background"></div>
        <CarouselArticle
          img="https://mediacdn.cincopa.com/v2/1137895/99!chxFAwtRuDw8PC/1/joropo.JPG"
          title="Solicitamos profesor de musica"
          description="El colegio San Francisco tiene las puertas abiertas a todo aquel
                docente con habilidades musicales en distintos instrumentos y
                que además cuente con el dinamismo de realizar actividades
                culturales con los alumnos de nuestra institución."
          link="#"
        />
        <CarouselArticle
          img="https://mediacdn.cincopa.com/v2/1137895/102!chxFAwtRuDAmOA/1/psicopedagoga.jpg"
          title="Abrimos la Biblioteca"
          description="Ya esta abierta la nueva Biblioteca con miles de libros para los
                estudiantes"
          link="#"
        />
        <CarouselArticle
          img="https://mediacdn.cincopa.com/v2/1137895/98!chxFAwtRuDgasB/1/computacion.jpg"
          title="Computación"
          description="La escuela ha puesto a disposicion de sus estudiantes el laboratorio
          de comptuacion"
          link="#"
        />
        <ul className="indicators"></ul>
      </div>
    </section>
  );
};

export default BillBoard;

/* <div className="carousel carousel-slider center slick-track">
        <div className="carousel-item center">
          <a className="ze_box ze-swipebox" >
            <span className="ico" />
            <div id className="ze_item">
              {" "}
              <img
                src="https://mediacdn.cincopa.com/v2/1137895/99!chxFAwtRuDw8PC/1/joropo.JPG"
                data-poster="true"
                title
                alt=""
              />
            </div>
            <div className="ze_slick_info">
              <h3>Solicitamos profesor de musica</h3>
              <p className>
                El colegio San Francisco tiene las puertas abiertas a todo aquel
                docente con habilidades musicales en distintos instrumentos y
                que además cuente con el dinamismo de realizar actividades
                culturales con los alumnos de nuestra institución.
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item white-text" href="#one!">
          <a className="ze_box ze-swipebox" >
            <span className="ico" />{" "}
            <div id className="ze_item">
              {" "}
              <img
                src="https://mediacdn.cincopa.com/v2/1137895/102!chxFAwtRuDAmOA/1/psicopedagoga.jpg"
                
                data-poster="true"
                title
                alt=""
              />
            </div>
            <div className="ze_slick_info">
              <h3>¡No pares de aprender!</h3>
              <p className>
                Durante las vacaciones, no frenes tu aprendizaje. Continua
                siendo curioso, continua indigando y leyendo sobre lo que más te
                asombran.
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item white-text" href="#two!">
          <a
            className="ze_box ze-swipebox"
            data-id="cincopa_4cf462"
            
            data-position={1}
            tabIndex={0}
          >
            <span className="ico" />{" "}
            <div
              id="cincopa_4cf462_0_thumbsplash"
              className="ze_item"
              
            >
              {" "}
              <img
                src="https://mediacdn.cincopa.com/v2/1137895/100!chxFAwtRuDQt0D/1/JoseMaria.png"
                
                data-poster="true"
                title
                alt=""
              />
            </div>
            <div className="ze_slick_info">
              <h3>Jose Maria Velza</h3>
              <p className>Fundador de Fe y Alegria</p>
            </div>
          </a>
        </div>
        <div className="carousel-item white-text" href="#three!">
          <a
            className="ze_box ze-swipebox"
            data-id="cincopa_4cf462"
            
            
          >
            <span className="ico" />{" "}
            <div
              id="cincopa_4cf462_1_thumbsplash"
              className="ze_item"
              
            >
              {" "}
              <img
                src="https://mediacdn.cincopa.com/v2/1137895/97!chxFAwtRuDw5gD/1/biblioteca.jpg"
                
                data-poster="true"
                title
                alt=""
              />
            </div>
            <div className="ze_slick_info">
              <h3>Abrimos la Biblioteca</h3>
              <p className>
                Ya esta abierta la nueva Biblioteca con miles de libros para los
                estudiantes
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item white-text" href="#three!">
          <a
            className="ze_box ze-swipebox"
            data-id="cincopa_4cf462"
            
            
          >
            <span className="ico" />{" "}
            <div
              id="cincopa_4cf462_2_thumbsplash"
              className="ze_item"
              
            >
              {" "}
              <img
                src="https://mediacdn.cincopa.com/v2/1137895/101!chxFAwtRuDQfQD/1/mantenimiento.jpg"
               
                data-poster="true"
                title
                alt=""
              />
            </div>
            <div className="ze_slick_info">
              <h3>Mantenimiento de la institución</h3>
              <p className>
                La unidad directiva del Colegio San Francisco informa a los
                padres y representates que se realizará un cobro extra en el
                pago de la mensualidad del mes de Abril a razón del
                mantenimiento de las aulas de la institución
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item white-text" href="#three!">
          <a
            className="ze_box ze-swipebox"
            data-id="cincopa_4cf462"
            
            
          >
            <span className="ico" />{" "}
            <div
              id="cincopa_4cf462_3_thumbsplash"
              className="ze_item"
              
            >
              {" "}
              <img
                src="https://mediacdn.cincopa.com/v2/1137895/98!chxFAwtRuDgasB/1/computacion.jpg"
                
                data-poster="true"
                title
                alt=""
              />
            </div>
            <div className="ze_slick_info">
              <h3>Computación</h3>
              <p className>
                La escuela ha puesto a disposicion de sus estudiantes el
                laboratorio de comptuacion
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item white-text" href="#three!">
          <a
            className="ze_box ze-swipebox"
            data-id="cincopa_4cf462"
            
          >
            <span className="ico" />{" "}
            <div id="cincopa_4cf462_4_thumbsplash" className="ze_item">
              {" "}
              <img
                src="https://mediacdn.cincopa.com/v2/1137895/99!chxFAwtRuDw8PC/1/joropo.JPG"
                data-poster="true"
                title
                alt=""
              />
            </div>
            <div className="ze_slick_info">
              <h3>Solicitamos profesor de musica</h3>
              <p className>
                El colegio San Francisco tiene las puertas abiertas a todo aquel
                docente con habilidades musicales en distintos instrumentos y
                que además cuente con el dinamismo de realizar actividades
                culturales con los alumnos de nuestra institución.
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item white-text" href="#four!">
          <h2>Fourth Panel</h2>
          <p className="white-text">This is your fourth panel</p>
        </div>
        {/* <ul className="ze_slides slick-initialized slick-slide carousel carousel-slider slick-dotted">
          <div
            aria-live="polite"
            className="slick-list draggable"
            style={{ padding: "0px" }}
          >
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: "30000px",
              }}
              role="listbox"
            ></div>
          </div>
        </ul>{" "} 
        <ul className="indicators"></ul>
      </div>*/
