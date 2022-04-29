import React from "react";

import "./styles/History.css";

import docenteAlumno from "../images/historypage/docente-alumno.jpg";
import joseMariaVelaz from "../images/historypage/josemariavelaz.png";
import alumnos from "../images/historypage/alumnos.jpg";

const History = () => {
  return (
    <main className="history">
      <div className="layout-background"></div>
      <h2 className="big-title__red">Historia</h2>
      <div className="row">
        <div className="col s12 l8">
          <div className="pastoral__container-info">
            <h3 className="small-title__red">
              Fe y Alegría: 65 años al servicio del pueblo venezolano
            </h3>
            <p>
              Fe y Alegría es un{" "}
              <strong>
                Movimiento de Educación Popular y Promoción Social
              </strong>{" "}
              , nacido el <strong>5 de marzo de 1955</strong> en el 23 de Enero
              de Caracas, Venezuela. Hoy está presente en 22 países de América
              Latina, África y Europa: Argentina, Bolivia, Brasil, Colombia,
              Costa Rica, Chad, Chile, Ecuador, El Salvador, España, Italia,
              Guatemala, Haití, Honduras, Madagascar, Nicaragua, Panamá,
              Paraguay, Perú, República Dominicana, Uruguay y Venezuela. Allí
              atiende a más de 1.500.000 niños,niñas, jóvenes y adultos de
              sectores urbanos, rurales e indígenas con una gran variedad de
              programas educativos, comunitarios y de capacitación humana y
              laboral.
            </p>
          </div>
        </div>
        <div className="col s12 l4 history__container-img">
          <img src={docenteAlumno} alt="Foto Docente con su alumno" />
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4 history__container-img">
          <img src={joseMariaVelaz} alt="Fundador de Fe y Alegría" />
        </div>
        <div className="col s12 l8">
          <div className="pastoral__container-info">
            <h3 className="small-title__red">
              Fe y Alegría nació de un acto de generosidad
            </h3>
            <p>
              Cuando el Padre Jesuita José María Vélaz, fundador de Fe y
              Alegría, terminó su rectorado de seis años en el Colegio San José
              de Mérida, le encargaron de la atención espiritual de los jóvenes
              de la recién fundada Universidad Católica de Caracas. Como la
              mayoría de los estudiantes pertenecían a familias acomodadas, el
              Padre Vélaz quería que conocieran la otra Venezuela donde apenas
              sobrevivían penosamente millones de hermanos para que, al contacto
              con la miseria, fraguaran una profunda sensibilidad social que les
              llevara a comprometer su fe y sus vidas en el servicio a los más
              necesitados.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4 history__container-img">
          <img src={alumnos} alt="Alumnos en Clase"/>
        </div>
        <div className="col s12 l8">
          <div className="pastoral__container-info">
            <h3 className="small-title__red">
              Fe y Alegría de la "chispa" al "incendio"
            </h3>
            <p>
              <strong>
                <i>“Escuela: Se admiten niños varones”</i>
              </strong>
              , decía el tosco cartel que pusieron al día siguiente en la puerta
              del rancho de Abrahán. Y empezaron a llegar ríos de niños. Las
              clases comenzaron sin pupitres, sin pizarrones, sin mesas, con
              cien niños y adolescentes sentados en el piso. Como eran muchos
              para una sola maestra, dividieron la sala con unas tablas en dos
              aulas. Diana y Carmen, dos muchachas del barrio de apenas quince
              años y con sólo el sexto grado de primaria, fueron las primeras
              maestras. No sabían cuándo ni cuánto les iban a pagar. Así nació
              Fe y Alegría. Era el cinco de marzo de 1955.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="s12 l6 center">
          <h2 className="center medium-title__red">
            ”Fe y Alegría comienza donde termina el asfalto”… más de 60 años de
            pasión por la educación.
          </h2>
          <iframe
            height="350"
            width="580"
            src="https://www.youtube.com/embed/hJKzwtPQNQw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ali
          ></iframe>
          {/* <video controls preoload="auto">
            <source src="./video.m4v#t=10,60" />
            <source src="./video.mp4#t=10,60" />
            <source src="./video.gif" />
          </video> */}
        </div>
      </div>
    </main>
  );
};

export default History;
