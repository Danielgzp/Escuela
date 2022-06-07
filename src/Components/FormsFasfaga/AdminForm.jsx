import React, { useEffect } from "react";

import "./styles/FormsFasfaga.css";

import M from "materialize-css";

const AdminForm = () => {
  useEffect(() => {
    var instances = M.updateTextFields();
  }, []);

  return (
    <React.Fragment>
      <form action="a" id="newAdmin-form">
        {/* <h4 className="center">Informacion personal</h4> */}
        <div className="form-container">
          <div className="inputField">
            <label htmlFor="namesAdmin">Nombres</label>
            <input
              id="namesAdmin"
              className="validate"
              type="text"
              placeholder="name"
              required
            />
          </div>

          <div className="inputField">
            <label htmlFor="last_nameAdmin">Apellidos</label>
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
            <label htmlFor="dniNumberAdmin">Cédula</label>
            <input
              id="dniNumberAdmin"
              className="validate"
              type="number"
              placeholder="0000000"
            />
          </div>

          <div className="input-field">
            <label htmlFor="dateAdmin">Fecha de nacimiento</label>
            <input
              id="dateAdmin"
              type="date"
              className="validate"
              required
              placeholder=" "
            />
          </div>

          <div className="inputField">
            <label htmlFor="addressAdmin">Direccion</label>
            <textarea
              id="addressAdmin"
              placeholder="address"
              required
            ></textarea>
          </div>

          <div className="inputField">
            <label htmlFor="emailAdmin">Correo</label>
            <input
              id="emailAdmin"
              className="validate"
              type="email"
              placeholder="example@example.com"
            />
          </div>

          <div className="inputField">
            <label htmlFor="telephoneAdmin">Telefono</label>
            <input
              id="telephoneAdmin"
              type="tel"
              className="validate"
              placeholder="+##########"
            />
          </div>

          <div>
            <h6 htmlFor="sex">Sexo</h6>
            <p>
              <label htmlFor="masculineAdmin">
                <input
                  name="group1"
                  id="masculineAdmin"
                  type="radio"
                  required
                />
                <span>Masculino</span>
              </label>
            </p>
            <p>
              <label htmlFor="femenineAdmin">
                <input name="group1" type="radio" id="femenineAdmin" />
                <span>Femenino</span>
              </label>
            </p>
          </div>

          <div className="inputField">
            <label htmlFor="adminFunction">Cargo del administrador</label>
            <input
              id="adminFunction"
              className="validate"
              type="text"
              placeholder="Director Example"
            />
          </div>

          <div className="file-field input-field">
            <div className="btn red">
              <span>File</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <button
            className="btn red waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AdminForm;
