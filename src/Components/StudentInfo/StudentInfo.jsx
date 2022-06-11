import React from 'react'

import './StudentInfo.css'

import avatar from '../../images/avatar.jpg'

const StudentInfo = () => {
  return (
    <section className="studentInfo">
      <div className="studentInfo-header">
        <figure>
          <img src={avatar} alt="Foto Estudiante" />
        </figure>
        <h2>Datos Personales del Estudiante</h2>
      </div>
      <div className="studentInfo-container">
        <div className="row">
          <div className="input-field col s12 l4">
            <label htmlFor="">Nombres</label>
            <input type="text" disabled value={"Javier Pepito"} />
          </div>
          <div className="input-field col s12 l4">
            <label htmlFor="">Apellidos</label>
            <input type="text" disabled value={"Gonzalez Perez"} />
          </div>
          <div className="input-field col s12 l3">
            <label htmlFor="">Fecha de Nacimiento</label>
            <input type="text" disabled value="date" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 l6">
            <label htmlFor="">Lugar de Nacimiento</label>
            <input
              type="text"
              disabled
              value={"Av Los Leones, Clinica Con un Nombre"}
            />
          </div>
          <div className="input-field col s12 l4">
            <label htmlFor="">Cédula de Identidad Escolar</label>
            <input type="text" disabled value="28585670" />
          </div>
          <div className="input-field col s12 l2">
            <label htmlFor="sex">Sexo</label>
            <p>
              <label htmlFor="masculine">
                <input name="group1" id="masculine" type="radio" disabled />
                <span>Masculino</span>
              </label>
            </p>
            <p>
              <label htmlFor="femenine">
                <input name="group1" type="radio" id="femenine" disabled />
                <span>Femenino</span>
              </label>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 l6">
            <label htmlFor="address">Direccion</label>
            <textarea
              id="address"
              className="materialize-textarea"
              disabled
            ></textarea>
          </div>
          <div className="input-field col s12 l4">
            <label htmlFor="email">Correo</label>
            <input id="email" className="validate" type="email" disabled value={"amanciocrack123@gmail.com"}/>
          </div>
          <div className="input-field col s12 l2">
            <label htmlFor="living">Condición de vivienda</label>
            <input id="living" className="validate" type="text" disable value={"Propia"}/>
          </div>
        </div>
        <div className="row">
          <h3 className="field-title">Informacion Del Representante</h3>
          <div className="input-field col s12 l4">
            <label htmlFor="representerName">Nombre del Representante</label>
            <input
              id="representerName"
              className="validate z-depth-1"
              type="text"
              disabled
              value={"Amancio Ortega"}
            />
          </div>
          <div className="input-field col s12 l3">
            <label htmlFor="representative_dni">Cedula del representante</label>
            <input
              id="representative_dni"
              className="validate"
              type="text"
              disabled
              value={"8765421"}
            />
          </div>

          <div className="input-field phones col s12 l5">
            <label htmlFor="telephone" className="center">
              Telefonos
            </label>
            <input
              id="telephone"
              type="tel"
              className="validate "
              disabled
              value={"0424323232"}
            />
            <input
              id="telephone2"
              type="tel"
              aria-disabled
              value={"04245759867"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentInfo