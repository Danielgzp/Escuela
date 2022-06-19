<?php

namespace App\Controllers;

use Core\Util;
use App\Model\TeacherModel;

class TeacherController extends TeacherModel
{

	public function newTeacherController()
	{
		$util = new Util();

		$ci = $util->clean_string($_POST['ci']);
		$name = $util->clean_string($_POST['name']);
		$surname = $util->clean_string($_POST['surname']);
		$email = $util->clean_string($_POST['email']);
		$username = $util->clean_string($_POST['username']);
		$password = $util->clean_string($_POST['pass']);
		$address = $util->clean_string($_POST['address']);
		$personal_phone = $util->clean_string($_POST['personal_phone']);
		(isset($_POST['local_phone']) && !empty($_POST['local_phone']))
		?$local_phone = $util->clean_string($_POST['local_phone'])
		:$local_phone = null;
		$birth_date = $util->clean_string($_POST['birth_date']);
		$gender = $util->clean_string($_POST['gender']);
		$group = $util->clean_string($_POST['group']);
		$section = $util->clean_string($_POST['section']);
		$period = $util->clean_string($_POST['period']);
		$admission_date = date('Y-m-d');
		(isset($_FILES['photo']))
		?$photo = $_FILES['photo']['name']
		:$photo = null;
		
		//CHEQUEAR SI EL NOMBRE DE USUARIO SE ENCUENTRA REGISTRADO O NO
		$check_username = parent::data_query('users', 'username', $username);

		//SALDRÁ ERROR SI UNA VARIABLE ESTÁ VACÍA
		if(empty($ci) || empty($username) || empty($name) || empty($surname) || empty($email) || empty($password) || empty($address) || empty($personal_phone) || empty($birth_date) || empty($gender) || empty($group) || $section == 'undefined' || $period == 'undefined'){

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
						if(strlen($ci) < 7 || strlen($ci) > 8){
							
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
											
											$alert = 'La cédula del estudiante ya se encuentra registrada';
										
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

										//GUARDAR DATOS DEL ESTUDIANTE
										$save = TeacherModel::newTeacherModel($data);
										
										//COMPROBAR SI SE GUARDARON LOS DATOS Y MOVER LA FOTO AL SERVIDOR
										if($save->rowCount() > 0 && move_uploaded_file($temp, './img/'.$photo)){

											chmod('./img/'.$photo, 0777);

											$data = [
												"ci" => $ci,
												"section" => $section,
												"period" => $period
											]; 

											//GUARDAR INFORMACIÓN DEL DOCENTE
											$save_info = TeacherModel::newInfoModel($data);

											//CHEQUEAR
											if($save_info->rowCount() > 0){
												
												$alert = true;

											}else{

												$alert = "Ha ocurrido un error guardando la información";
												parent::delete('users', 'ci', $ci);

											}									
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