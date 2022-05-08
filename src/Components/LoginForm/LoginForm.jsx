import React from "react";

import { useHistory, Link } from "react-router-dom";

import "./styles.css";

const LoginForm = () => {
  let history = useHistory();

  return (
    <section className="login">
      <div className="login-container">
        <h2>Ingresa tus datos</h2>
        <div id="respuesta"></div>
        <form
          id="form"
          onSubmit={() => {
            history.push("/");
          }}
        >
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
        <div className="registrar">
          <p className="white-text center">No conoces los datos de tu cuenta?</p>
          <Link
            to="/iniciar-sesion/crear-cuenta/"
            className="btn red white-text center"
          >
            Obten información
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
