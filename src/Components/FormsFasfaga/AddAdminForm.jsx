import React from "react";

import "./AddAdminForm.css";

import M from "materialize-css";

const AddAdminForm = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var instances = M.updateTextFields();
  });

  return (
    <div className="row">
      <div className="col s12">
        <div class="newAdmin-form__container">
          <form action id="newAdmin-form">
            <div className="personal">
              <h4 className="center">Informacion personal</h4>

              <div className="col s12 l6 m6">
                <div className="input-field">
                  <label for="namesAdmin">Nombres</label>
                  <input
                    id="namesAdmin"
                    className="validate"
                    type="text"
                    placeholder="name"
                    required
                  />
                </div>
              </div>
              <div className="col s12 l6 m6">
                <div className="input-field">
                  <label for="last_nameAdmin">Apellidos</label>
                  <input
                    id="last_nameAdmin"
                    placeholder="nickname"
                    className="validate"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col s12 l6 m6">
                <div className="input-field">
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
              </div>
              <div className="col s12 l4 m6">
                <div class="input-field center">
                  <input
                    id="dateAdmin"
                    type="date"
                    className="validate"
                    required
                  />
                  <label for="dateAdmin">Fecha de nacimiento</label>
                </div>
              </div>
              <div className="col s12 l8 m10">
                <div className="input-field">
                  <textarea
                    id="addressAdmin"
                    class="materialize-textarea"
                    placeholder="address"
                    required
                  ></textarea>
                  
                  <label for="addressAdmin">Direccion</label>
                </div>
              </div>
              <div className="col s12 l6 m6">
                <div className="input-field">
                  <label for="emailAdmin">Correo</label>
                  <input
                    id="emailAdmin"
                    className="validate"
                    type="email"
                    placeholder="example@example.com"
                  />
                </div>
              </div>
              <div className="col s12 l6 m6">
                <div className="input-field">
                  <label for="telephoneAdmin">Telefono</label>
                  <input
                    id="telephoneAdmin"
                    type="tel"
                    class="validate"
                    placeholder="+##########"
                  />
                </div>
              </div>
              <div className="col s12 l4 m5">
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
              </div>
              <div className="col s12 l8 m7">
                <div className="input-field">
                  <label for="adminFunction">Cargo del administrador</label>
                  <input id="adminFunction" className="validate" type="text" placeholder="Director Example" />
                </div>
              </div>
              <div className="col s12 l6 m8">
                <div className="input-field">
                  <label for="pictureAdmin">Foto</label>
                  <div>
                    <input type="text" readOnly />
                    <input id="pictureAdmin" className="validate" type="file" placeholder="Choose a picture"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 l6 m8">
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdminForm;
