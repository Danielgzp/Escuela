import React, { useState } from "react";
import { useEffect } from "react";

import M from "materialize-css";

const SectionAndPeriod = ({ grades, data, setData, teacher }) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    grade: [],
    period: [],
  });
  useEffect(() => {
    

    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const data = await fetch("http://localhost/escuela/api/showSections");
        const data2 = await fetch("http://localhost/escuela/api/showPeriods");
        const gradeData = await data.json();
        const periodData = await data2.json();
        // setGrade(gradeData);
        setState({
          ...state,
          grade: gradeData,
          period: periodData,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    fetchData();

    // var elems = document.querySelectorAll("select");
    // var instances = M.FormSelect.init(elems, {});
  }, []);

  return (
    <div className="row">
      <form onSubmit={""} action="" className="col s12 l6 collapsible">
        <li>
          <div className="collapsible-header">
            {teacher ? (
              <h3 className="collapsible-title">
                <i className="material-icons icon-red">arrow_drop_down</i>
                Asignar curso o grade que imparte
              </h3>
            ) : (
              <h3 className="collapsible-title">
                <i className="material-icons icon-red">arrow_drop_down</i>
                Agregar curso o fase que cursa
              </h3>
            )}
          </div>
          <div className="collapsible-body">
            <div className="inputField">
              <label>Grado que cursa</label>
              <select
                // name="sectionsStudent"
                onChange={(e) => setData({ ...data, section: e.target.value })}
              >
                <option value="undefined" disabled="disabled">
                  Selecciona el grado o fase
                </option>
                {/* I had the same error and solved it by first asking if the array existed. */}
                {state.grade?.map((sect) => (
                  <option key={sect.id} value={sect.id}>
                    {sect.name}
                  </option>
                ))}
                {/* {grades === "primaria" ? (
                  <React.Fragment>
                    {ey.map((sect) => (
                      <option value={sect.name}>{sect.name}a</option>
                    ))}
                    {/* <optgroup label="1°">
                      <option value="1">1er Grado A</option>
                      <option value="2">1er Grado B</option>
                    </optgroup>
                    <optgroup label="2°">
                      <option value="3">2do Grado A</option>
                      <option value="4">2do Grado B</option>
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
                    <option value="7">2da Fase</option>
                    <option value="8">3ra Fase</option>
                  </React.Fragment>
                )} */}
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
              <select
                name="scholarchipPeriod"
                onChange={(e) => setData({ ...data, period: e.target.value })}
              >
                <option value="undefined" disabled="disabled">
                  Selecciona el período
                </option>
                {state.period?.map((period) => (
                  <option key={period.id} value={period.id}>
                    {period.name}
                  </option>
                ))}
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
