import React, { useEffect } from "react";

import "./AdminForm.css";

import M from "materialize-css";

const AdminForm = () => {
  useEffect(() => {
    var instances = M.updateTextFields();
  }, []);

  return (
    <React.Fragment>
      <form action id="newAdmin-form">
        <h4 className="center">Informacion personal</h4>
        <div className="inputField">
          <label for="namesAdmin">Nombres</label>
          <input
            id="namesAdmin"
            className="validate"
            type="text"
            placeholder="name"
            required
          />
        </div>

        <div className="inputField">
          <label for="last_nameAdmin">Apellidos</label>
          <input
            id="last_nameAdmin"
            placeholder="nickname"
            className="validate"
            type="text"
            required
          />
        </div>

        <div className="inputField">
          {/* <select id="dniAdmin">
                    <option value=""></option>
                    <option value="V">V</option>
                    <option value="E">E</option>
                  </select> */}
          <label for="dniNumberAdmin">Cédula</label>
          <input
            id="dniNumberAdmin"
            className="validate"
            type="number"
            placeholder="0000000"
          />
        </div>

        <div class="input-field">
          <label for="dateAdmin">Fecha de nacimiento</label>
          <input
            id="dateAdmin"
            type="date"
            className="validate"
            required
            placeholder=" "
          />
        </div>

        <div className="inputField">
          <label for="addressAdmin">Direccion</label>
          <textarea id="addressAdmin" placeholder="address" required></textarea>
        </div>

        <div className="inputField">
          <label for="emailAdmin">Correo</label>
          <input
            id="emailAdmin"
            className="validate"
            type="email"
            placeholder="example@example.com"
          />
        </div>

        <div className="inputField">
          <label for="telephoneAdmin">Telefono</label>
          <input
            id="telephoneAdmin"
            type="tel"
            class="validate"
            placeholder="+##########"
          />
        </div>

        <div>
          <h6 for="sex">Sexo</h6>
          <p>
            <label for="masculineAdmin">
              <input name="group1" id="masculineAdmin" type="radio" required />
              <span>Masculino</span>
            </label>
          </p>
          <p>
            <label for="femenineAdmin">
              <input name="group1" type="radio" id="femenineAdmin" />
              <span>Femenino</span>
            </label>
          </p>
        </div>

        <div className="inputField">
          <label for="adminFunction">Cargo del administrador</label>
          <input
            id="adminFunction"
            className="validate"
            type="text"
            placeholder="Director Example"
          />
        </div>

        <div class="file-field input-field">
          <div class="btn red">
            <span>File</span>
            <input type="file" />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>

        <button
          class="btn green waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </React.Fragment>
  );
};

export default AdminForm;
