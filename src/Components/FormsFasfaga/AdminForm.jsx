import React, { useEffect } from "react";

//import "./AdminForm.css";

import M from "materialize-css";

const AdminForm = () => {
  useEffect(() => {
    var instances = M.updateTextFields();
  }, []);

  return (
    <section className="section">
      <form action id="newAdmin-form">
        <div className="personalInfo">
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

          <div class="input-field center">
            <input id="dateAdmin" type="date" className="validate" required />
            <label for="dateAdmin">Fecha de nacimiento</label>
          </div>

          <div className="inputField">
            <label for="addressAdmin">Direccion</label>
            <textarea
              id="addressAdmin"
              class="materialize-textarea"
              placeholder="address"
              required
            ></textarea>
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

          <div className="inputField">
            <label for="pictureAdmin">Foto</label>
            <div>
              <input type="text" readOnly />
              <input
                id="pictureAdmin"
                className="validate"
                type="file"
                placeholder="Choose a picture"
              />
            </div>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </section>
  );
};

export default AdminForm;
