import React, { useEffect } from "react";

import "./styles/FormsFasfaga.css";
import M from "materialize-css";

const StudentForm = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});

    var elems2 = document.querySelectorAll(".collapsible");
    var instances2 = M.Collapsible.init(elems2, {});
  }, []);

  return (
    <React.Fragment>
      <div className="formTitle">
        <h2>Datos del Estudiante</h2>
      </div>

      <form onSubmit={() => ""} id="newStudent-form" action="">
        {/*-----------------Informacion Personal------------------*/}
        {/* <h4>Informacion personal</h4> */}
        <div className="form-container">
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
        </div>
      </form>

      <div className="row">
        <form onSubmit={""} action="" className="col s12 l6 collapsible">
          <li>
            <div className="collapsible-header">
              <h3 className="collapsible-title">
                <i className="material-icons icon-red">arrow_drop_down</i>
                Agregar grado que cursa
              </h3>
            </div>
            <div className="collapsible-body">
              <div className="inputField">
                <label>Grado que cursa?</label>
                <select name="sectionsStudent">
                  <option>Selecciona el grado o fase</option>
                  <option value="2da Fase">2da Fase</option>
                  <option value="3ra Fase">3ra Fase</option>
                  <optgroup label="1°">
                    <option value="1er Grado A">1er Grado A</option>
                    <option value="1er Grado B">1er Grado B</option>
                  </optgroup>
                  <optgroup label="2°">
                    <option value="2do Grado A">2do Grado A</option>
                    <option value="2do Grado B">2do Grado B</option>
                  </optgroup>
                  <optgroup label="3°">
                    <option value="3er Grado A">3er Grado A</option>
                    <option value="3er Grado B">3er Grado B</option>
                  </optgroup>
                  <optgroup label="4°">
                    <option value="4to Grado A">4to Grado A</option>
                    <option value="4to Grado B">4to Grado B</option>
                  </optgroup>
                  <optgroup label="5°">
                    <option value="5to Grado A">5to Grado A</option>
                    <option value="5to Grado B">5to Grado B</option>
                  </optgroup>
                  <optgroup label="6°">
                    <option value="6to Grado A">6to Grado A</option>
                    <option value="6to Grado B">6to Grado B</option>
                  </optgroup>
                </select>
              </div>

              <button
                className="btn red waves-effect right collapsible-button"
                type="submit"
              >
                Save
              </button>
            </div>
          </li>
        </form>
        <form onSubmit={""} action="" className="col s12 l6 collapsible">
          <li>
            <div className="collapsible-header">
              <h3 className="collapsible-title">
                <i className="material-icons icon-red">arrow_drop_down</i>
                Agregar o modificar período escolar
              </h3>
            </div>
            <div className="collapsible-body">
              <div className="inputField">
                <label htmlFor="scholarchipPeriod">
                  Agregar Período Escolar
                </label>
                <select name="scholarchipPeriod">
                  <option value="2019-2020">Período Escolar 2019-2020</option>
                  <option value="2020-2021">Período Escolar 2020-2021</option>
                  <option value="2021-2022">Período Escolar 2021-2022</option>
                  <option value="2022-2023">Período Escolar 2022-2023</option>
                  <option value="2023-2024">Período Escolar 2023-2024</option>
                </select>
              </div>
              <button
                className="btn red waves-effect right collapsible-button"
                type="submit"
              >
                Save
              </button>
            </div>
          </li>
        </form>
      </div>
    </React.Fragment>
  );
};

export default StudentForm;

{
  /*-----------------Informacion Familiar------------------*/
}
/*<div>
  <h4>Informacion familiar o del representante</h4>
  <div className="inputField">
    <label htmlFor="representative_name">Nombre del representante</label>
    <input id="representative_name" className="validate" type="text" required />
  </div>
  <div className="inputField">
    <label htmlFor="representative_dni">Cedula del representante</label>
    <input id="representative_dni" className="validate" type="text" required />
  </div>
  <div className="inputField">
    <label htmlFor="representative_dni">Telefono</label>
    <input id="representative_dni" className="validate" type="text" required />
  </div>

  <div className="inputField">
    <label htmlFor="representative_email">Correo</label>
    <input
      id="representative_email"
      className="validate"
      type="email"
      required
    />
  </div>
  <div className="inputField">
    <span>Parentesco</span>
    <select required>
      <option disabled selected>
        Elige...
      </option>
      <option value="1">Padre/Madre</option>
      <option value="2">Hermano/Hermana</option>
      <option value="3">Tío/Tía</option>
      <option value="4">Abuelo/Abuela</option>
      <option value="5">Primo/Prima</option>
      <option value="6">Otro</option>
    </select>
  </div>
  <div>
    <h6>Con quién vive?</h6>
    <p>
      <label htmlFor="parents">
        <input id="parents" className="validate" type="checkbox" />
        <span>Padres</span>
      </label>
    </p>
    <p>
      <label htmlFor="brothers">
        <input id="brothers" className="validate" type="checkbox" />
        <span>Hermanos</span>
      </label>
    </p>
    <p>
      <label htmlFor="uncles">
        <input
          id="uncles"
          className="validate"
          type="checkbox"
          className="filled-in"
        />
        <span>Tíos</span>
      </label>
    </p>
    <p>
      <label htmlFor="grandparents">
        <input id="grandparents" type="checkbox" />
        <span>Abuelos</span>
      </label>
    </p>
    <p>
      <label htmlFor="others">
        <input id="others" className="validate" type="checkbox" />
        <span>Otros</span>
      </label>
    </p>
  </div>
</div>;*/
{
  /*-----------------Informacion de Salud------------------*/
}
// <div className="healthy">
//   <h4>Informacion de Salud</h4>
//   <p>
//     <label htmlFor="Esquizofrenia">
//       <input id="Esquizofrenia" className="validate" type="checkbox" />
//       <span>Esquizofrenia*</span>
//     </label>
//   </p>
//   <p>
//     <label htmlFor="bipolaridad">
//       <input id="bipolaridad" className="validate" type="checkbox" />
//       <span>Bipolaridad</span>
//     </label>
//   </p>
//   <p>
//     <label htmlFor="Nervios">
//       <input
//         id="Nervios"
//         className="validate"
//         type="checkbox"
//         className="filled-in"
//       />
//       <span>Nervios</span>
//     </label>
//   </p>
//   <p>
//     <label htmlFor="Alergias">
//       <input id="Alergias" type="checkbox" />
//       <span>Alergias*</span>
//     </label>
//   </p>
//   <p>
//     <label htmlFor="Diabetes">
//       <input id="Diabetes" className="validate" type="checkbox" />
//       <span>Diabetes*</span>
//     </label>
//   </p>
//   <p>
//     <label htmlFor="Migrañas">
//       <input id="Migrañas" className="validate" type="checkbox" />
//       <span>Migrañas</span>
//     </label>
//   </p>
//   <p>
//     <label htmlFor="Asma">
//       <input id="Asma" className="validate" type="checkbox" />
//       <span>Asma</span>
//     </label>
//   </p>
//   <p>
//     <label htmlFor="Rinitis">
//       <input id="Rinitis" className="validate" type="checkbox" />
//       <span>Rinitis*</span>
//     </label>
//   </p>
//   <div>
//     <h5>Presenta alguna condicion</h5>
//     <p>
//       <label>
//         <input className="with-gap" name="conditionGroup" type="radio" />
//         <span>Si</span>
//       </label>
//     </p>
//     <p>
//       <label>
//         <input className="with-gap" name="conditionGroup" type="radio" />
//         <span>No</span>
//       </label>
//     </p>
//   </div>
//   <div className="inputField">
//     <textarea
//       id="condition"
//       name="conditionGroup"
//       className="materialize-textarea"
//     />
//     <label htmlFor="condition">Que tipo de condicion presenta:</label>
//   </div>
// </div>
