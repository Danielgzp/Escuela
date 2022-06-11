import React from "react";

import "./styles/Pastoral.css";

import childrens from "../images/pastoralpage/childrens-2.jpg";

const Pastoral = () => {
  return (
    <main className="section pastoral">
      <div className="layout-pastoral"></div>
      <h2 className="big-title__red">Pastoral</h2>
      <h3 className="medium-title__red">
        Fe y Alegria una obra educativa evangelizadora
      </h3>
      <div className="row">
        <div className="pastoral__container">
          <div className="col s12 m8 l9">
            <div className="information__container-info">
              <h4 className="small-title__red">
                Un movimiento nacido de la experiencia y compromiso de fe
              </h4>
              <p>
                Fe y Alegría se define a sí misma como un Movimiento de
                Educación Popular Integral y Promoción Social, nacido de la
                experiencia y compromiso de fe del Padre José María Vélaz, un
                hombre que, interpelado por la realidad de injusticia y
                exclusión, decide sumar esfuerzos por transformar y humanizar
                dicha realidad, y para ello, convoca y anima a otros a
                comprometerse en un proyecto de educación y de evangelización.
              </p>
              <p>
                Fe y Alegría desde sus inicios agrupó a personas de fe,
                religiosos(as) y laicos(as), quienes concibieron su acción
                educativa como compromiso cristiano de transformación de las
                estructuras de exclusión socioeducativas, para construir un
                mundo más justo y más humano. Este hecho le llevará a Vélaz a
                afirmar que{" "}
                <span>
                  “…el motor que ha impulsado a tantas personas a comprometerse
                  con amor y sacrificio en Fe y Alegría ha sido el espíritu
                  cristiano”
                </span>
              </p>
            </div>
          </div>
          <div className="col s12 m5 l3 childrens__container center">
            <img src={childrens} alt="" className="responsive-img" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="mision-vision__container">
            <div>
              <h4 className="center">MISIÓN</h4>
              <p>
                La pastoral es la acción organizada, con intencionalidad
                formadora y evangelizadora de Fe y Alegría que, desde el
                seguimiento a Jesús de Nazaret, acompaña a todos los miembros
                que conforman el Movimiento, para construir el Reino de Dios,
                desde la transformación personal, comunitaria y social.
              </p>
            </div>
            <div>
              <h4 className="center">VISIÓN</h4>
              <p>
                La Pastoral de Fe y Alegría tiene una propuesta Evangelizadora
                con identidad definida, inculturada, católica y ecuménica,
                impulsada por equipos consolidados de animadores pastorales, que
                pertenecen a los diversos programas del Movimiento, responsables
                de acompañar la formación de personas cristianas, críticas y
                comprometidas con la transformación de su entorno y con la
                construcción del Reino de Dios.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="pastoral-caracteristics">
            <p>Por lo tanto es una pastoral que:</p>
            <ul>
              <li>
                <i className="material-icons icon-red">build</i>
                Forma parte fundamental de la identidad de Fe y Alegría y es
                asumida por todo el personal que labora en los distintos
                programas
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Está centrada en la personas de Jesús, en su seguimiento y
                fidelidad al Reinado de Dios.
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Apuesta por la persona, trabajando por su dignificación como
                hijo de Dios, su crecimiento espiritual y su constante
                conversión.
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Presenta propuestas de formación y evangelización para todos los
                que hacen vida en el Movimiento.
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Ilumina, desde los valores del evangelio, las distintas
                dimensiones y áreas de acción del Movimiento.
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Tiene una organización y gestión que responde a la realidad y
                finalidad de los programas.
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Promueve y fortalece la conformación de comunidades cristianas,
                como espacios para la vivencia de la fe dentro de los distintos
                programas.
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Promueve, en los diversos programas, la conformación de
                organizaciones que favorezcan la constitución de sujetos
                autónomos. .
              </li>
              <li>
                <i className="material-icons icon-red">build</i>Está en
                constante reflexión y revisión de su propuesta.
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Está vinculada a la acción pastoral de Iglesia venezolana.
              </li>
              <li>
                <i className="material-icons icon-red">build</i>
                Coopera e intercambia con otras instituciones y agrupaciones.
              </li>
            </ul>
            <p className="center">
              Para conocer más de la pastoral que promovemos en Fe y Alegría, te
              invitamos a consultar el documento que contempla y define nuestras
              líneas de trabajo en este campo.
              <br />
              <strong>Marco pastoral en Fe y Alegría Venezuela</strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pastoral;
