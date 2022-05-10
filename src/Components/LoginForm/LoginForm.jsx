import React from "react";

import { useHistory, Link } from "react-router-dom";

import "./styles.css";

const LoginForm = () => {
  let history = useHistory();

  return (
    <section className="login-background">
      <form
        action="home.html"
        method=""
        autocomplete="off"
        class="full-box logInForm"
      >
        <p class="text-center text-muted">
          <i class="zmdi zmdi-account-circle zmdi-hc-5x"></i>
        </p>
        <p class="text-center text-muted text-uppercase">
          Inicia sesión con tu cuenta
        </p>
        <div class="form-group label-floating">
          <label class="control-label" for="UserEmail">
            E-mail
          </label>
          <input class="form-control" id="UserEmail" type="email" />
          <p class="help-block">Escribe tú E-mail</p>
        </div>
        <div class="form-group label-floating">
          <label class="control-label" for="UserPass">
            Contraseña
          </label>
          <input class="form-control" id="UserPass" type="text" />
          <p class="help-block">Escribe tú contraseña</p>
        </div>
        <div class="form-group text-center">
          <input
            type="submit"
            value="Iniciar sesión"
            class="btn btn-raised btn-danger"
          />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
