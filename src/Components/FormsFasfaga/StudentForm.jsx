import React, { useEffect } from "react";

import "./styles/FormsFasfaga.css";
import M from "materialize-css";
import SectionAndPeriod from "./Student/SectionAndPeriod";

const StudentForm = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});

    var elems2 = document.querySelectorAll(".collapsible");
    var instances2 = M.Collapsible.init(elems2, {});

    var elems3 = document.querySelectorAll(".tabs");
    var instance3 = M.Tabs.init(elems3, {});
  }, []);

  return (
    <div id="formsTabs" class="">
      <ul className="tabs">
        <li className="tab">
          <a href="#primaria" className="active">
            Primaria
          </a>
        </li>
        <li className="tab">
          <a href="#preescolar">PreEscolar</a>
        </li>
      </ul>

      <div id="primaria">
        <div className="formTitle">
          <h2>Agregar Datos Estudiante de Primaria</h2>
        </div>

        <form
          onSubmit={() => ""}
          id="primaria-form"
          action=""
          className="form-container"
        >
          {/*-----------------Informacion Personal------------------*/}
          {/* <h4>Informacion personal</h4> */}

          <div className="inputField">
            <label htmlFor="names">Nombres</label>
            <input id="names" type="text" required />
          </div>
          <div className="inputField">
            <label htmlFor="last_name">Apellidos</label>
            <input id="last_name" className="validate" type="text" required />
          </div>
          <div className="inputField">
            <label htmlFor="date">Fecha de nacimiento</label>
            <input id="date" type="date" className="validate" required />
          </div>
          <div className="inputField">
            <label htmlFor="birthplace">Lugar de Nacimiento</label>
            <input id="birthplace" className="validate" type="text" required />
          </div>
          <div className="inputField">
            <label htmlFor="dni">Cédula de identidad escolar</label>
            {/* <select>
              <option value=""></option>
              <option value="Venezolana">V</option>
              <option value="Extranjera">E</option>
            </select> */}
            <input id="dni" className="validate" type="number" />
          </div>
          <div className="inputField">
            <label htmlFor="sex">Sexo</label>
            <p>
              <label htmlFor="masculine">
                <input name="group1" id="masculine" type="radio" required />
                <span>Masculino</span>
              </label>
            </p>
            <p>
              <label htmlFor="femenine">
                <input name="group1" type="radio" id="femenine" />
                <span>Femenino</span>
              </label>
            </p>
          </div>
          <div className="inputField">
            <label htmlFor="address">Direccion</label>
            <textarea
              id="address"
              className="materialize-textarea"
              required
            ></textarea>
          </div>
          {/*-----------------Informacion Familiar------------------*/}
          <div className="inputField">
            <label htmlFor="representerName">Nombre del Representante</label>
            <input
              id="representerName"
              className="validate z-depth-1"
              type="text"
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="representative_dni">Cedula del representante</label>
            <input
              id="representative_dni"
              className="validate"
              type="text"
              required
            />
          </div>

          <div className="inputField phones">
            <label htmlFor="telephone" className="center">
              Telefonos
            </label>
            <input id="telephone" type="tel" className="validate " />
            <input id="telephone2" type="tel" />
          </div>

          <div className="inputField">
            <label htmlFor="email">Correo</label>
            <input id="email" className="validate" type="email" />
          </div>
          <div className="inputField">
            <label htmlFor="living">Condición de vivienda</label>
            <input id="living" className="validate" type="text" />
          </div>

          {/*-----------------Informacion Academica------------------*/}

          {/* <h4 className="center">Informacion academica</h4> */}

          <div className="file-field input-field">
            <div className="btn red">
              <span>File</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <button className="btn red waves-effect" type="submit" name="action">
            Guardar
            <i className="material-icons right">save</i>
          </button>
        </form>

        <SectionAndPeriod grades={"primaria"} />
      </div>

      {/*-------------------------------------------- Estudiante Preescolar ----------------------*/}
      <div id="preescolar">
        <div className="formTitle">
          <h2>Agregar Datos Estudiante de Pre-Escolar</h2>
        </div>
        <form
          onSubmit={() => ""}
          id="preescolar-Form"
          action=""
          className="form-container"
        >
          {/*-----------------Informacion Personal------------------*/}
          {/* <h4>Informacion personal</h4> */}

          <div className="inputField">
            <label htmlFor="names">Nombres</label>
            <input id="names" type="text" required />
          </div>
          <div className="inputField">
            <label htmlFor="last_name">Apellidos</label>
            <input id="last_name" className="validate" type="text" required />
          </div>
          <div className="inputField">
            <label htmlFor="date">Fecha de nacimiento</label>
            <input id="date" type="date" className="validate" required />
          </div>
          <div className="inputField">
            <label htmlFor="birthplace">Lugar de Nacimiento</label>
            <input id="birthplace" className="validate" type="text" required />
          </div>
          <div className="inputField">
            <label htmlFor="dni">Cédula de identidad escolar</label>
            {/* <select>
              <option value=""></option>
              <option value="Venezolana">V</option>
              <option value="Extranjera">E</option>
            </select> */}
            <input id="dni" className="validate" type="number" />
          </div>
          <div className="input-field">
            <label htmlFor="sex">Sexo</label>
            <p>
              <label htmlFor="masculine">
                <input name="group1" id="masculine" type="radio" required />
                <span>Masculino</span>
              </label>
            </p>
            <p>
              <label htmlFor="femenine">
                <input name="group1" type="radio" id="femenine" />
                <span>Femenino</span>
              </label>
            </p>
          </div>
          <div className="input-field">
            <label htmlFor="address">Direccion</label>
            <textarea
              id="address"
              className="materialize-textarea"
              required
            ></textarea>
          </div>
          {/*-----------------Informacion Familiar------------------*/}
          <div className="inputField">
            <label htmlFor="representerName">Nombre del Representante</label>
            <input
              id="representerName"
              className="validate z-depth-1"
              type="text"
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="representative_dni">Cedula del representante</label>
            <input
              id="representative_dni"
              className="validate"
              type="text"
              required
            />
          </div>

          <div className="inputField phones">
            <label htmlFor="telephone" className="center">
              Telefonos
            </label>
            <input id="telephone" type="tel" className="validate " />
            <input id="telephone2" type="tel" />
          </div>

          <div className="inputField">
            <label htmlFor="email">Correo</label>
            <input id="email" className="validate" type="email" />
          </div>
          <div className="inputField">
            <label htmlFor="living">Condición de vivienda</label>
            <input id="living" className="validate" type="text" />
          </div>

          {/*-----------------Informacion Academica------------------*/}

          {/* <h4 className="center">Informacion academica</h4> */}

          <div className="file-field input-field">
            <div className="btn red">
              <span>File</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <button className="btn red waves-effect" type="submit" name="action">
            Guardar
            <i className="material-icons right">save</i>
          </button>
        </form>

        <SectionAndPeriod />
        {/* ----------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default StudentForm;
