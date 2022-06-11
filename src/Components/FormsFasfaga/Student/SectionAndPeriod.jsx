import React from "react";

const SectionAndPeriod = ({ grades }) => {
  return (
    <div className="row">
      <form onSubmit={""} action="" className="col s12 l6 collapsible">
        <li>
          <div className="collapsible-header">
            <h3 className="collapsible-title">
              <i className="material-icons icon-red">arrow_drop_down</i>
              Agregar grado o fase que cursa
            </h3>
          </div>
          <div className="collapsible-body">
            <div className="inputField">
              <label>Grado que cursa</label>
              <select name="sectionsStudent">
                {grades === "primaria" ? (
                  <React.Fragment>
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
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <option value="2da Fase">2da Fase</option>
                    <option value="3ra Fase">3ra Fase</option>
                  </React.Fragment>
                )}
                <option>Selecciona el grado o fase</option>
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
              <label htmlFor="scholarchipPeriod">Agregar Período Escolar</label>
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
  );
};

export default SectionAndPeriod;
