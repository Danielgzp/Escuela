import React, { useEffect, useState } from "react";
import SectionAndPeriod from "./Student/SectionAndPeriod";

import Swal from "sweetalert2";
import Axios from "axios";

const PeriodsForm = () => {
	
	// OBJETO DONDE SE ALMACENARÁN LAS ENTRADAS DEL USUARIO
  const [data, setData] = useState();

  // ENVIAR DATOS AL ENDPOINT
  const sendInfo = (e) => {
    e.preventDefault();

    // FORMDATA PARA PODER MANDAR ARCHIVOS AL ENDPOINT
    const formData = new FormData();

    formData.append("start", data.start);
    formData.append("end", data.end);

    // USO AXIOS PQ ASÍ ES MÁS FÁCIL
    Axios.post("http://localhost/escuela/api/newPeriod", formData)
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
	
	
  return (
    <div id="period">
      <div className="formTitle">
        <h2>Agregar Período Escolar</h2>
      </div>

      <form
        // onSubmit={sendInfo}
        id="periods-form"
        action=""
        className="form-container"
		onSubmit={sendInfo}
      >
        {/*-----------------Informacion Personal------------------*/}
        {/* <h4>Informacion personal</h4> */}
			{/*EL NOMBRE NO ES NECESARIO */}
		{/*<div className="inputField">
          <label htmlFor="names">Nombre del Período Escolar</label>
          <input
            id="periodName"
            type="text"
            required
            // onChange={(e) => setData({ ...data, name: e.target.value })}
          />
		</div>*/}
        <div className="inputField">
          <label htmlFor="names">Fecha de inicio del Período Escolar</label>
          <input
            id="initialDate"
            type="date"
            required
            onChange={(e) => setData({ ...data, start: e.target.value })}
          />
        </div>
        <div className="inputField">
          <label htmlFor="names">
            Fecha de culminacion del Período Escolar
          </label>
          <input
            id="finalDate"
            type="date"
            required
            onChange={(e) => setData({ ...data, end: e.target.value })}
          />
        </div>
        <button
          className="btn red waves-effect"
          type="submit"
          name="action"
        >
          Guardar
          <i className="material-icons right">save</i>
        </button>
      </form>

      {/* <SectionAndPeriod grades={"primaria"} /> */}
    </div>
  );
};

export default PeriodsForm;
