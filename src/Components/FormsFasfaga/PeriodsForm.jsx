import React from "react";
import SectionAndPeriod from "./Student/SectionAndPeriod";

const PeriodsForm = () => {
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
      >
        {/*-----------------Informacion Personal------------------*/}
        {/* <h4>Informacion personal</h4> */}
        <div className="inputField">
          <label htmlFor="names">Nombre del Período Escolar</label>
          <input
            id="periodName"
            type="text"
            required
            // onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="inputField">
          <label htmlFor="names">Fecha de inicio del Período Escolar</label>
          <input
            id="initialDate"
            type="date"
            required
            // onChange={(e) => setData({ ...data, name: e.target.value })}
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
            // onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <button
          className="btn red waves-effect"
          type="submit"
          name="action"
          // onClick={(e) => setData({ ...data, group: "Primaria" })}
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
