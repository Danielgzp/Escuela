import React, {useState} from "react";

import { useHistory, Link } from "react-router-dom";

import Swal from "sweetalert2";
import Axios from 'axios';
import Cookies from 'universal-cookie';

import "./styles.css";

const LoginForm = () => {
  let history = useHistory();
  
	//OBJETO DONDE SE ALMACENARÁN LAS ENTRADAS DEL USUARIO
	const [data, setData] = useState();
	
	//ENVIAR DATOS AL ENDPOINT
	const sendInfo = (e) => {
		
		e.preventDefault();
		
		// USO AXIOS PQ ASÍ ES MÁS FÁCIL
		Axios.post("http://localhost/escuela/api/login", data)
		.then((payload) => {
			
			if(payload.data.success === true){
				
				//Aquí van las cookies
				const cookies = new Cookies();
				
				cookies.set("username", payload.data.username, { path: "/", maxAge: 604800 });
				cookies.set("name", payload.data.name, {
				  path: "/",
				  maxAge: 604800,
				});
				cookies.set("surname", payload.data.surname, {
				  path: "/",
				  maxAge: 604800,
				});
				cookies.set("email", payload.data.email, {
				  path: "/",
				  maxAge: 604800,
				});
				cookies.set("role", payload.data.role, {
				  path: "/",
				  maxAge: 604800,
				});
				
				//REDIRECCIONAR
				Swal.fire("Bienvenido/a", payload.data.name, "success").then(
				  (result) => {
					if (result.isConfirmed) {
					  window.location.href = "/admin/";
					}
				  }
				);
			
			}else{
				
				Swal.fire('Oops!', payload.data, 'error');
			
			}
			
		})
		.catch((error) => {
			
			Swal.fire('Oops!', error.response.data.messages, 'error');
		
		});
		
	}

  return (
    <section className="login-background">
      <form
        action="/"
        method=""
        autocomplete="off"
        className="full-box logInForm"
		onSubmit={sendInfo}
      >
        <p className="text-center text-muted">
          <i className="zmdi zmdi-account-circle zmdi-hc-5x"></i>
        </p>
        <p className="text-center text-muted text-uppercase">
          Inicia sesión con tu cuenta
        </p>
        <div className="form-group label-floating">
          <label className="control-label" htmlFor="Username">
            Nombre de usuario
          </label>
          <input 
		  className="form-control" 
		  id="Username" 
		  type="text" 
		  onChange={(e) => setData({...data, username: e.target.value})}
		  />
          <p className="help-block">Escribe tú nombre de usuario</p>
        </div>
        <div className="form-group label-floating">
          <label className="control-label" htmlFor="UserPass">
            Contraseña
          </label>
          <input 
		  className="form-control" 
		  id="UserPass" type="text" 
		  onChange={(e) => setData({...data, pass: e.target.value})}
		  />
          <p className="help-block">Escribe tú contraseña</p>
        </div>
        <div className="form-group text-center">
          <input
            type="submit"
            value="Iniciar sesión"
            className="btn btn-raised btn-danger"
          />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
