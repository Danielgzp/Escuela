<?php

namespace App\Controllers;

use Core\Util;
use App\Model\UsersModel;

class UsersController extends UsersModel
{
	public function loginController($data)
	{
		$util = new Util();
		
		$username = $util->clean_string($data->username);
		$password = $util->clean_string($data->pass);
		
		//COMPRABAR QUE NO ESTÉ VACÍO
		if(empty($username) || empty($password)){
			
			$alert = "Ningún campo puede estar vacío";
			
		}
		
		//COMPROBAR QUE EL USUARIO EXISTA
		$user = UsersModel::loginModel($username);
		
		if($user){
			
			if($user->password != $password){
				
				$alert = "La contraseña es incorrecta";
				
			}else{
				
				$alert = [
					"success" => true,
					"username" => $user->username,
					"name" => $user->name,
					"email" => $user->email,
					"surname" => $user->surname,
					"role" => $user->group
				];
				
			}
			
		}else{
			
			$alert = "El usuario no existe";
			
		}
		
		return $alert;
		
	}
	public function newUserController()
	{
		$util = new Util();

		$ci = $util->clean_string($_POST['ci']);
		$username = $util->clean_string($_POST['username']);
		$name = $util->clean_string($_POST['name']);
		$surname = $util->clean_string($_POST['surname']);
		$email = $util->clean_string($_POST['email']);
		$password = $util->clean_string($_POST['pass']);
		$address = $util->clean_string($_POST['address']);
		$personal_phone = $util->clean_string($_POST['personal_phone']);
		(isset($_POST['local_phone']) && !empty($_POST['local_phone']))
		?$local_phone = $util->clean_string($_POST['local_phone'])
		:$local_phone = null;
		$birth_date = $util->clean_string($_POST['birth_date']);
		$gender = $util->clean_string($_POST['gender']);
		$group = $util->clean_string($_POST['group']);
		$admission_date = date('Y-m-d');
		(isset($_FILES['photo']))
		?$photo = $_FILES['photo']['name']
		:$photo = null;

		//SALDRÁ ERROR SI UNA VARIABLE ESTÁ VACÍA
		if(empty($ci) || empty($username) || empty($name) || empty($surname) || empty($email) || empty($password) || empty($address) || empty($personal_phone) || empty($birth_date) || empty($gender) || empty($group)){

			$alert = "Ningún campo puede estar vacío";

		}else{
			
			//PERMITIR SOLAMENTE LETRAS Y ACENTOS
			if(!preg_match("/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/", $name) || !preg_match("/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/", $surname)){

				$alert = "Los campos nombre y apellido sólo pueden tener letras";

			}else{

				//PERMITIR SOLAMENTE NÚMEROS
				if(!is_numeric($personal_phone)){

					$alert = "El número de teléfono solo pueden contener números";

				}else{
					
					//COMPROBAR LOS DÍGITOS PERMITIDOS PARA EL TELÉFONO
					if(strlen($personal_phone) > 11 || strlen($personal_phone) < 11){
						
						$alert = "El número de teléfono solo puede tener 11 dígitos";
						
					}else{
						
						//COMPROBAR LOS DÍGITOS PERMITIDOS PARA LA CÉDULA
						if(strlen($ci) < 7 || strlen($ci) > 15){
							
							$alert = "Introduce una cédula válida";
						
						}else{
						
							//COMPROBAR SI EXISTE UNA FOTO
							if(!isset($photo) || $photo == '' || $photo == null){

								$alert = "Por favor agrega una foto";

							}else{

								$type = $_FILES['photo']['type'];
						     	$size = $_FILES['photo']['size'];
						    	$temp = $_FILES['photo']['tmp_name'];

								//LOS FORMATOS QUE SE PERMITIRÁN Y EL TAMAÑO DE LA FOTO
						    	if(!((strpos($type, "gif") || strpos($type, "jpeg") || strpos($type, "jpg") || strpos($type, "png")) && ($size < 20000000))){

						    		$alert = "Se permiten archivos .gif, .jpg, .png. y de 2mb como máximo";

						    	}else{
						    		
									//CHEQUEAR SI LA CÉDULA PROPORCIONADA YA SE ENCUENTRA REGISTRADA	
						    		if(parent::data_query('users', 'ci', $ci)->rowCount() > 0 || parent::data_query('users', 'username', $username)->rowCount() > 0){
										
										if(parent::data_query('users', 'ci', $ci)->rowCount() > 0){
											
											$alert = 'La cédula ya se encuentra registrada';
										
										}else{
											
											$alert = 'El nombre de usuario ya se encuentra registrado';
										
										}
										
									}else{


										$data = [
											"ci" => $ci,
											"username" => $username,
											"name" => $name,
											"surname" => $surname,
											"email" => $email,
											"password" => $password,
											"address" => $address,
											"personal_phone" => $personal_phone,
											"local_phone" => $local_phone,
											"birth_date" => $birth_date,
											"gender" => $gender,
											"group" => $group,
											"admission_date" => $admission_date
										];
												
										$save = UsersModel::newUserModel($data);
										
										//COMPROBAR SI SE GUARDARON LOS DATOS Y MOVER LA FOTO AL SERVIDOR
										if($save->rowCount() > 0 && move_uploaded_file($temp, './img/'.$photo)){
					    					
					    					chmod('./img/'.$photo, 0777);
											
											$alert = true;
											
										}else{
											
											$alert = 'Ha ocurrido un error guardando los datos';
											
										}
						    		}
						    	}
							}
						}
					}
				}
			}
		}
		return $alert;
	}

	public function deleteUserController($ci)
	{
		//CHEQUEAR SI LA CI EXISTE
		$check = parent::data_query('users', 'ci', $ci);

		if($check->rowCount() > 0){

			$check = $check->fetch();
			
			if($check->group != 'Primaria' && $check->group != 'Preescolar'){

				$delete = parent::delete('users', 'ci', $ci);

				if($delete){

					$alert = true;

				}else{

					$alert = "Ha ocurrido un error al eliminar el usuario";

				}
			}else{

				$alert = "No se puede eliminar este usuario";

			}

		}else{

			$alert = "La cédula no existe";

		}

		return $alert;
	}

	public function updateUserController()
	{

		$util = new Util();

		$ci = $util->clean_string($_POST['ci']);
		$username = $util->clean_string($_POST['username']);
		$name = $util->clean_string($_POST['name']);
		$surname = $util->clean_string($_POST['surname']);
		$email = $util->clean_string($_POST['email']);
		$password = $util->clean_string($_POST['pass']);
		$address = $util->clean_string($_POST['address']);
		$personal_phone = $util->clean_string($_POST['personal_phone']);
		(isset($_POST['local_phone']) && !empty($_POST['local_phone']))
		?$local_phone = $util->clean_string($_POST['local_phone'])
		:$local_phone = null;
		$birth_date = $util->clean_string($_POST['birth_date']);
		$gender = $util->clean_string($_POST['gender']);
		$group = $util->clean_string($_POST['group']);
		$admission_date = $_POST['admission_date'];
		$egress_date = $_POST['egress_date'];
		(isset($_FILES['photo']))
		?$photo = $_FILES['photo']['name']
		:$photo = null;

		//SALDRÁ ERROR SI UNA VARIABLE ESTÁ VACÍA
		if(empty($ci) || empty($name) || empty($surname) || empty($email) || empty($password) || empty($address) || empty($personal_phone) || empty($birth_date) || empty($gender) || empty($group)){

			$alert = "Ningún campo puede estar vacío";

		}else{
			
			//PERMITIR SOLAMENTE LETRAS Y ACENTOS
			if(!preg_match("/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/", $name) || !preg_match("/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/", $surname)){

				$alert = "Los campos nombre y apellido sólo pueden tener letras";

			}else{

				//PERMITIR SOLAMENTE NÚMEROS
				if(!is_numeric($personal_phone)){

					$alert = "El número de teléfono solo pueden contener números";

				}else{
					
					//COMPROBAR LOS DÍGITOS PERMITIDOS PARA EL TELÉFONO
					if(strlen($personal_phone) > 11 || strlen($personal_phone) < 11){
						
						$alert = "El número de teléfono solo puede tener 11 dígitos";
						
					}else{
						
						//COMPROBAR LOS DÍGITOS PERMITIDOS PARA LA CÉDULA
						if(strlen($ci) < 7 || strlen($ci) > 15){
							
							$alert = "Introduce una cédula válida";
						
						}else{
						
							//COMPROBAR SI EXISTE UNA FOTO
							if(!isset($photo) || $photo == '' || $photo == null){

								$alert = "Por favor agrega una foto";

							}else{

								$type = $_FILES['photo']['type'];
						     	$size = $_FILES['photo']['size'];
						    	$temp = $_FILES['photo']['tmp_name'];

								//LOS FORMATOS QUE SE PERMITIRÁN Y EL TAMAÑO DE LA FOTO
						    	if(!((strpos($type, "gif") || strpos($type, "jpeg") || strpos($type, "jpg") || strpos($type, "png")) && ($size < 20000000))){

						    		$alert = "Se permiten archivos .gif, .jpg, .png. y de 2mb como máximo";

						    	}else{
						    		
									//CHEQUEAR SI LA CÉDULA PROPORCIONADA YA SE ENCUENTRA REGISTRADA	
						    		if(parent::data_query('users', 'ci', $ci)->rowCount() == 0){
										
										$alert = 'La cédula proporcionada no se encuentra registrada';
										
									}else{


										$data = [
											"ci" => $ci,
											"username" => $username,
											"name" => $name,
											"surname" => $surname,
											"email" => $email,
											"password" => $password,
											"address" => $address,
											"personal_phone" => $personal_phone,
											"local_phone" => $local_phone,
											"birth_date" => $birth_date,
											"gender" => $gender,
											"group" => $group,
											"admission_date" => $admission_date,
											"egress_date" => $egress_date
										];
												
										$save = UsersModel::updateUserModel($data);
										
										//COMPROBAR SI SE GUARDARON LOS DATOS Y MOVER LA FOTO AL SERVIDOR
										if($save->rowCount() > 0 && move_uploaded_file($temp, './img/'.$photo)){
					    					
					    					chmod('./img/'.$photo, 0777);
											
											$alert = true;
											
										}else{
											
											$alert = 'Ha ocurrido un error guardando los datos';
											
										}
						    		}
						    	}
							}
						}
					}
				}
			}
		}
		return $alert;
	}

}