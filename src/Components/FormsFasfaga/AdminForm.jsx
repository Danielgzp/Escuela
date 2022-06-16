import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import Axios from 'axios';

import "./styles/FormsFasfaga.css";

import M from "materialize-css";

const AdminForm = () => {

	// OBJETO DONDE SE ALMACENARÁN LAS ENTRADAS DEL USUARIO
	const [data, setData] = useState();
	
	// ENVIAR DATOS AL ENDPOINT
	const sendInfo = (e) => {
		
		e.preventDefault();
		
		// FORMDATA PARA PODER MANDAR ARCHIVOS AL ENDPOINT
		const formData = new FormData();

		formData.append('username', data.username);
		formData.append('name', data.name);
		formData.append('surname', data.surname);
		formData.append('birth_date', data.birth_date);
		formData.append('ci', data.ci);
		formData.append('gender', data.gender);
		formData.append('address', data.address);
		formData.append('personal_phone', data.personal_phone);
		formData.append('email', data.email);
		formData.append('pass', data.pass);
		formData.append('group', data.group);
		formData.append('photo', data.photo);
		
		// USO AXIOS PQ ASÍ ES MÁS FÁCIL
		Axios.post("http://localhost/escuela/api/newUser", formData,{
			headers: {
                "Content-Type": "multipart/form-data"
            }
		})
		.then((payload) => {
			
			if(payload.data === true){
				
				Swal.fire('Felicidades!', 'Se ha registrado correctamente', 'success');
			
			}else{
				
				Swal.fire('Oops!', payload.data, 'error');
			
			}
			
		})
		.catch((error) => {
			
			Swal.fire('Oops!', error.response.data.messages, 'error');
		
		});
	}
	
  useEffect(() => {
    var instances = M.updateTextFields();
  }, []);

  return (
    <React.Fragment>
      <form action="a" id="newAdmin-form" onSubmit={sendInfo}>
        {/* <h4 className="center">Informacion personal</h4> */}
        <div className="form-container">
          <div className="inputField">
            <label htmlFor="namesAdmin">Nombres</label>
            <input
              id="namesAdmin"
              className="validate"
              type="text"
              placeholder="name"
              required
			  onChange={(e) => setData({...data, name: e.target.value})}
            />
          </div>

          <div className="inputField">
            <label htmlFor="last_nameAdmin">Apellidos</label>
            <input
              id="last_nameAdmin"
              placeholder="nickname"
              className="validate"
              type="text"
              required
			  onChange={(e) => setData({...data, surname: e.target.value})}
            />
          </div>

          <div className="inputField">
            {/* <select id="dniAdmin">
                    <option value=""></option>
                    <option value="V">V</option>
                    <option value="E">E</option>
                  </select> */}
            <label htmlFor="dniNumberAdmin">Cédula</label>
            <input
              id="dniNumberAdmin"
              className="validate"
              type="number"
              placeholder="0000000"
			  onChange={(e) => setData({...data, ci: e.target.value})}
            />
          </div>
		  
		  <div className="inputField">
            <label htmlFor="user">Nombre de usuario</label>
            <input id="user" type="text" required 
			onChange={(e) => setData({...data, username: e.target.value})}/>
          </div>
		  <div className="inputField">
            <label htmlFor="pass">Contraseña</label>
            <input id="pass" type="password" required 
			onChange={(e) => setData({...data, pass: e.target.value})}/>
          </div>

          <div className="input-field">
            <label htmlFor="dateAdmin">Fecha de nacimiento</label>
            <input
              id="dateAdmin"
              type="date"
              className="validate"
              required
              placeholder=" "
			  onChange={(e) => setData({...data, birth_date: e.target.value})}
            />
          </div>

          <div className="inputField">
            <label htmlFor="addressAdmin">Direccion</label>
            <textarea
              id="addressAdmin"
              placeholder="address"
              required
			  onChange={(e) => setData({...data, address: e.target.value})}
            ></textarea>
          </div>

          <div className="inputField">
            <label htmlFor="emailAdmin">Correo</label>
            <input
              id="emailAdmin"
              className="validate"
              type="email"
              placeholder="example@example.com"
			  onChange={(e) => setData({...data, email: e.target.value})}
            />
          </div>

          <div className="inputField">
            <label htmlFor="telephoneAdmin">Telefono</label>
            <input
              id="telephoneAdmin"
              type="tel"
              className="validate"
              placeholder="+##########"
			  onChange={(e) => setData({...data, personal_phone: e.target.value})}
            />
          </div>

          <div>
            <h6 htmlFor="sex">Sexo</h6>
            <p>
              <label htmlFor="masculineAdmin">
                <input
                  name="group1"
                  id="masculineAdmin"
                  type="radio"
                  required
				  value="Masculino"
				  onChange={(e) => setData({...data, gender: e.target.value})}
                />
                <span>Masculino</span>
              </label>
            </p>
            <p>
              <label htmlFor="femenineAdmin">
                <input name="group1" type="radio" id="femenineAdmin" value="Femenino"
				onChange={(e) => setData({...data, gender: e.target.value})}/>
                <span>Femenino</span>
              </label>
            </p>
          </div>

          <div className="inputField">
            <label htmlFor="adminFunction">Cargo del administrador</label>
            <input
              id="adminFunction"
              className="validate"
              type="text"
              placeholder="Director Example"
			  onChange={(e) => setData({...data, group: e.target.value})}
            />
          </div>

          <div className="file-field input-field">
            <div className="btn red">
              <span>File</span>
              <input type="file" 
			  onChange={(e) => setData({...data, photo: e.target.files[0]})}/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <button
            className="btn red waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AdminForm;
