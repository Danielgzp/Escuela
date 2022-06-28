import React from 'react'

import "./StudentInfo.css";
import avatar from "../../images/avatar.jpg";

const StudentInfoEdit = ({student}) => {
  return (
    <form className="studentInfo" onSubmit={""}>
      <div className="studentInfo-header">
        <img src={avatar} alt="Foto Estudiante" />
        <div>
          <h2 className="center">Editar Datos Personales del Estudiante</h2>
        </div>
      </div>
      <div className="studentInfo-container">
        <div className="row">
          <div className="input-field col s12 m5 l4">
            <label htmlFor="">Nombres</label>
            <input type="text"  defaultValue={student.name} />
          </div>
          <div className="input-field col m4 s12 l4">
            <label htmlFor="">Apellidos</label>
            {/* <input type="text" defaultValue={student.surname} /> */}
          </div>
          <div className="input-field col s12 m3 l3">
            <label htmlFor="">Fecha de Nacimiento</label>
            {/* <input type="text" defaultValue={student.birth_date} /> */}
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6 l6">
            <label htmlFor="">Lugar de Nacimiento</label>
            <textarea
              type="text"
              className="materialize-textarea"
            //   defaultValue={student.birth_place}
                          />
          </div>
          <div className="input-field col s12 m3 l4">
            <label htmlFor="">Cédula de Identidad Escolar</label>
            <input type="text" defaultValue={student.id} />
          </div>
          <div className="input-field col s12 m3 l2">
            <label htmlFor="sex">Sexo</label>
            <p>
              <label htmlFor="masculine">
                <input name="group1" id="masculine" type="radio" />
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
        </div>
        <div className="row">
          <div className="input-field col s12 m7 l6">
            <label htmlFor="address">Direccion</label>
            <input
              id="address"
              className="materialize-textarea"
                            // defaultValue={student.address}
            />
          </div>
          <div className="input-field col s12 m5 l4">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              className="validate"
              type="email"
                            // defaultValue={student.email}
            />
          </div>
          <div className="input-field col s12 m4 l2">
            <label htmlFor="living">Condición de vivienda</label>
            <input
              id="living"
              className="validate"
              type="text"
              defaultValue={"Propia"}
            />
          </div>
        </div>
        <div className="row">
          <h3 className="field-title">Informacion Del Representante</h3>
          <div className="input-field col s12 m6 l4">
            <label htmlFor="representerName">Nombre del Representante</label>
            <input
              id="representerName"
              className="validate z-depth-1"
              type="text"
                            defaultValue={"Amancio Ortega"}
            />
          </div>
          <div className="input-field col s12 m6 l3">
            <label htmlFor="representative_dni">Cedula del representante</label>
            <input
              id="representative_dni"
              className="validate"
              type="text"
                            defaultValue={"8765421"}
            />
          </div>

          <div className="input-field phones2 col s12 m6 l5 center">
            <label htmlFor="telephone" className="center">
              Telefonos
            </label>
            <input
              id="telephone"
              type="tel"
              className="validate "
                            defaultValue={"0424323232"}
            />
            <input
              id="telephone2"
              type="tel"
              aria-              defaultValue={"04245759867"}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default StudentInfoEdit