import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const LoginForm = () => {

  let history = useHistory()
  
  return (
    <section className="login">
      <div className="login-container">
        <h2>Ingresa tus datos</h2>
        <div id="respuesta"></div>
        <form id="form" onSubmit={() => {
          history.push('/') 
        }}>
          <div id="user-form">
            <label for="user">
              <i className="material-icons icon-white">account_circle</i>
              Nombre de usuario
              <input type="text" placeholder="Tu usuario" id="user" />
            </label>
          </div>
          <div id="password-form">
            <label for="password">
              <i className="material-icons icon-white">https</i> Contraseña
              <input
                type="password"
                placeholder="Tu contraseña"
                id="password"
              />
            </label>
          </div>
          <label for="sesion">
            <input
              type="submit"
              name="sesion"
              className="sesion-button"
              value="Iniciar Sesión"
              id="send"
            />
          </label>
        </form>
      </div>
      {/* <div className="registrar">
              <p>Aun no tienes cuenta?</p>
              <div className="registrar-div">
                <Link to="/iniciar-sesion/crear-cuenta/">
                  <button className="registrar-button">
                    <span>Registrate</span>
                  </button>
                </Link>
              </div>
            </div> */}
    </section>
  );
};

export default LoginForm;
