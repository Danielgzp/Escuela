import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import Axios from "axios";

import SectionAndPeriod from "./Student/SectionAndPeriod";
import "./styles/FormsFasfaga.css";

import M from "materialize-css";

const TeacherForm = () => {
	// OBJETO DONDE SE ALMACENARÁN LAS ENTRADAS DEL USUARIO
  const [data, setData] = useState();

  // ENVIAR DATOS AL ENDPOINT
  const sendInfo = (e) => {
    e.preventDefault();

    // FORMDATA PARA PODER MANDAR ARCHIVOS AL ENDPOINT
    const formData = new FormData();

    formData.append("username", data.username);
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("birth_date", data.birth_date);
    formData.append("ci", data.ci);
    formData.append("gender", data.gender);
    formData.append("address", data.address);
    formData.append("personal_phone", data.personal_phone);
    formData.append("local_phone", data.local_phone);
    formData.append("email", data.email);
    formData.append("pass", data.pass);
    formData.append("group", data.group);
    formData.append("section", data.section);
    formData.append("period", data.period);
    formData.append("photo", data.photo);

    // USO AXIOS PQ ASÍ ES MÁS FÁCIL
    Axios.post("http://localhost/escuela/api/newUser", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((payload) => {
        if (payload.data === true) {
          Swal.fire(
            "Felicidades!",
            "Se ha registrado correctamente",
            "success"
          );
        } else {
          Swal.fire("Oops!", payload.data, "error");
        }
      })
      .catch((error) => {
        Swal.fire("Oops!", error.response.data.messages, "error");
      });
  };
	
	
  useEffect(() => {
    var elems2 = document.querySelectorAll(".collapsible");
    var instances2 = M.Collapsible.init(elems2, {});
  }, []);
  return (
    <div id="teacher">
      <div className="formTitle">
        <h2>Agregar Docente</h2>
      </div>

      <form
        // onSubmit={sendInfo}
        id="teacher-form"
        action=""
        className="form-container"
		onSubmit={sendInfo}
      >
        {/*-----------------Informacion Personal------------------*/}
        {/* <h4>Informacion personal</h4> */}

        <div className="inputField">
          <label htmlFor="names">Nombres</label>
          <input
            id="names"
            type="text"
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="inputField">
          <label htmlFor="last_name">Apellidos</label>
          <input
            id="last_name"
            className="validate"
            type="text"
            required
            onChange={(e) => setData({ ...data, surname: e.target.value })}
          />
        </div>
        <div className="inputField">
          <label htmlFor="user">Nombre de Usuario</label>
          <input
            id="user"
            type="text"
            required
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="inputField">
          <label htmlFor="pass">Contraseña</label>
          <input
            id="pass"
            type="password"
            required
            onChange={(e) => setData({ ...data, pass: e.target.value })}
          />
        </div>
        <div className="inputField">
          <label htmlFor="date">Fecha de nacimiento</label>
          <input
            id="date"
            type="date"
            className="validate"
            required
            onChange={(e) => setData({ ...data, birth_date: e.target.value })}
          />
        </div>
        {/*<div className="inputField">
          <label htmlFor="birthplace">Lugar de Nacimiento</label>
          <input
            id="birthplace"
            className="validate"
            type="text"
            required
            // onChange={(e) => setData({ ...data, birth_place: e.target.value })}
          />
        </div>*/}
        <div className="inputField">
          <label htmlFor="dni">Cédula de identidad</label>
          {/* <select>
              <option value=""></option>
              <option value="Venezolana">V</option>
              <option value="Extranjera">E</option>
            </select> */}
          <input
            id="dni"
            className="validate"
            type="text"
            onChange={(e) => setData({ ...data, ci: e.target.value })}
          />
        </div>
        <div className="inputField">
          <label htmlFor="sex">Sexo</label>
          <p>
            <label htmlFor="masculine">
              <input
                name="group1"
                id="masculine"
                type="radio"
                required
                value="Masculino"
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              />
              <span>Masculino</span>
            </label>
          </p>
          <p>
            <label htmlFor="femenine">
              <input
                name="group1"
                type="radio"
                id="femenine"
                value="Femenino"
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              />
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
            onChange={(e) => setData({ ...data, address: e.target.value })}
          ></textarea>
        </div>
        <div className="inputField phones">
          <label htmlFor="telephone" className="center">
            Telefonos
          </label>
          <input
            id="telephone"
            type="tel"
            className="validate"
            onChange={(e) => setData({ ...data, personal_phone: e.target.value })}
          />
          <input
            id="telephone2"
            type="tel"
            onChange={(e) => setData({ ...data, local_phone: e.target.value })}
          />
        </div>

        <div className="inputField">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            className="validate"
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        {/*<div className="inputField">
          <label htmlFor="living">Condición de vivienda</label>
          <input
            id="living"
            className="validate"
            type="text"
            // onChange={(e) => setData({ ...data, condition: e.target.value })}
          />
        </div>*/}

        {/*-----------------Informacion Academica------------------*/}

        {/* <h4 className="center">Informacion academica</h4> */}

        <div className="file-field input-field">
          <div className="btn red">
            <span>File</span>
            <input
              type="file"
              onChange={(e) => setData({ ...data, photo: e.target.files[0] })}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>

        <button
          className="btn red waves-effect"
          type="submit"
          name="action"
          onClick={(e) => setData({ ...data, group: "Docente" })}
        >
          Guardar
          <i className="material-icons right">save</i>
        </button>
      </form>

      <SectionAndPeriod grades={"primaria"} teacher={true} data={data} setData={setData} />
    </div>
  );
};

export default TeacherForm;
