import React from "react";

import { useHistory, Link } from "react-router-dom";

import "./styles.css";

const LoginForm = () => {
  let history = useHistory();

  return (
    <section className="login-background">
      <form
        action="/"
        method=""
        autocomplete="off"
        className="full-box logInForm"
      >
        <p className="text-center text-muted">
          <i className="zmdi zmdi-account-circle zmdi-hc-5x"></i>
        </p>
        <p className="text-center text-muted text-uppercase">
          Inicia sesión con tu cuenta
        </p>
        <div className="form-group label-floating">
          <label className="control-label" for="UserEmail">
            E-mail
          </label>
          <input className="form-control" id="UserEmail" type="email" />
          <p className="help-block">Escribe tú E-mail</p>
        </div>
        <div className="form-group label-floating">
          <label className="control-label" for="UserPass">
            Contraseña
          </label>
          <input className="form-control" id="UserPass" type="text" />
          <p className="help-block">Escribe tú contraseña</p>
        </div>
        <div className="form-group text-center">
          <input
            type="submit"
            value="Iniciar sesión"
            className="btn btn-raised btn-danger"
          />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
