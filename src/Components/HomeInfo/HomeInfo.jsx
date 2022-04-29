import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import pastoral from "../../images/pastoral.jpg";
import biblioteca from "../../images/biblioteca.jpg";
import psicopedagogia from "../../images/psicopedagoga.jpg";
import computacion from "../../images/computacion.jpg";

const HomeInfo = () => {
  return (
    <section className="section home-info">
      {/* <div className="pastoral-container">
        <h4 className="center title-info">Pastoral</h4>
        <div className="center">
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
        <div className="center">
          <Link className="btn white waves-effect z-depth-3">Ver más </Link>
        </div>
      </div>
      <div className="biblioteca-container">
        <h4 className="center title-info">Biblioteca </h4>
        <div className="imgholder center">
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
        <div className="center">
          <Link href="#" className="btn white waves-effect z-depth-3">
            Ver más
          </Link>
        </div>
      </div> */}
      <div className="row">
        <div className="col s12 m6 l6">
          <div className="card z-depth-3">
            <div className="card-image">
              <img src={pastoral} />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <span className="big-title__red">Pastoral</span>
              <p className="pastoral-text">
                “Yo he venido para que tengan vida y la tengan en abundancia. Yo
                soy el buen pastor. El buen pastor da su vida por las ovejas. Yo
                las conozco y ellas me conocen a mí.“{" "}
                <span>( jn. 10, 10-11.14)</span>
              </p>
              <br />
              <p>
                Sigue este post y conoce todas las ultimas noticias de la
                Pastoral del colegio San Francisco
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l6">
          <div className="card z-depth-3">
            <div className="card-image">
              <img src={biblioteca} />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <span className="big-title__red">Biblioteca</span>
              <p>
                Todos el personal directivo, alumnos, docentes y representas
                estan invitados a donar libros a la biblioteca de la escuela
                para el uso de todo aquel con sed de conocimiento.
              </p>
              <br />
              <p>
                Sigue este post para conocer todos los libros disponibles en
                nuestra biblioteca.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6 l6">
          <div className="card z-depth-3">
            <div className="card-image">
              <img src={psicopedagogia} />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <span className="big-title__red">Psicopedagogia</span>
              <p>
                Todos el personal directivo, alumnos, docentes y representas
                estan invitados a donar libros a la biblioteca de la escuela
                para el uso de todo aquel con sed de conocimiento.
              </p>
              <p>
                Sigue este post y conoce todas las ultimas noticias de la
                Pastoral del colegio San Francisco
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l6">
          <div className="card z-depth-3">
            <div className="card-image">
              <img src={computacion} />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <span className="big-title__red">Computacion</span>
              <p>
                Todos el personal directivo, alumnos, docentes y representas
                estan invitados a donar libros a la biblioteca de la escuela
                para el uso de todo aquel con sed de conocimiento.
              </p>
              <br />
              <p>
                Sigue este post y conoce todas las ultimas noticias de la
                Pastoral del colegio San Francisco
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
