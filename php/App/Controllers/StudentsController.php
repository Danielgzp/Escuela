<?php

namespace App\Controllers;

use Core\Util;
use App\Model\StudentsModel;

class StudentsController extends StudentsModel
{

	public function newStudentController()
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
		$birth_place = $util->clean_string($_POST['birth_place']);
		$living_conditions = $util->clean_string($_POST['condition']);
		$gender = $util->clean_string($_POST['gender']);
		$group = $util->clean_string($_POST['group']);
		$section = $util->clean_string($_POST['section']);
		$period = $util->clean_string($_POST['period']);
		(isset($_FILES['photo']))
		?$photo = $_FILES['photo']['name']
		:$photo = null;

		//REPRESENTANTE
		$r_ci = $util->clean_string($_POST['r_ci']);
		$r_name = $util->clean_string($_POST['r_name']);

		//CHEQUEAR SI EL REPRESENTANTE SE ENCUENTRA REGISTRADO O NO
		$check_representant = parent::data_query('representant', 'ci', $r_ci);
		
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
						if(strlen($ci) < 7 || strlen($ci) > 15 || strlen($r_ci) < 7 || strlen($r_ci) > 8){
							
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

										//LA FECHA DE ADMISIÓN SERÁ LA FECHA EN LA QUE INICIA EL PERIODO ESCOLAR
										$admission_date = parent::data_query('period', 'id', $period);
										$admission_date = $admission_date->fetch();
										$admission_date = $admission_date->start;

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
										$save = StudentsModel::newStudentModel($data);
										
										//COMPROBAR SI SE GUARDARON LOS DATOS Y MOVER LA FOTO AL SERVIDOR
										if($save->rowCount() > 0 && move_uploaded_file($temp, './img/'.$photo)){

											chmod('./img/'.$photo, 0777);

											$data = [
												"ci" => $ci,
												"section" => $section,
												"period" => $period
											]; 

											//GUARDAR INFORMACIÓN DEL ESTUDIANTE
											$save_info = StudentsModel::newInfoModel($data);

											//CHEQUEAR
											if($save_info->rowCount() > 0){

												$check = false;

												//SI EL REPRESENTANTE NO SE ENCUENTRA REGISTRADO GUARDAR LOS DATOS Y DEVOLVER TRUE, Y SI YA SE ENCUENTRA REGISTRADO SOLO DEVOLVER TRUE
												switch ($check_representant->rowCount()) {
													
													case 0:
													
														$data = [
															"ci" => $r_ci,
															"name" => $r_name
														];
														$save_r = StudentsModel::newRepresentantModel($data);

														if($save_r->rowCount() > 0){
														
															$check = true;
														
														}

													break;
													
													case 1:
														
														$check = true;
													
													break;
												}

												if($check){
													
													//VINCULAR EL ESTUDIANTE CON EL REPRESENTANTE
													$data = [
														"student" => $ci,
														"birth_place" => $birth_place,
														"living_conditions" => $living_conditions,
														"representant" => $r_ci
													];

													$save_extra_info = StudentsModel::newExtraInfoModel($data);

													if($save_extra_info->rowCount() > 0){
														
														//DIOSMIO DESPUÉS DE TANTO DOLOR DE CABEZA, SI TODO SALE BIEN, AQUÍ TERMINA
														$alert = true;
													
													}else{
														
														$alert = "Ha ocurrido un error guardando la información extra";
														parent::delete('users', 'ci', $ci);
													
													}
												}else{
													
													$alert = "Ha ocurrido un error guardando los datos del representante";
													parent::delete('users', 'ci', $ci);
												
												}

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

	public function deleteStudentController($ci)
	{
		//CHEQUEAR SI LA CI EXISTE
		$check = parent::data_query('users', 'ci', $ci);

		if($check->rowCount() > 0){

			$check = $check->fetch();

			if($check->group == 'Primaria' || $check->group == 'Prescolar'){

				//ESTE ES PARA EL REPRESENTANTE
				$check2 = parent::data_query('extra_info', 'student', $ci);
				$check2 = $check2->fetch();
				$r_ci = $check2->representant;

				$delete = parent::delete('users', 'ci', $ci);

				if($delete){

					$check_r = parent::data_query('extra_info', 'representant', $r_ci);

					if($check_r->rowCount() == 0){
						
						$delete_r = parent::delete('representant', 'ci', $r_ci);

					}

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

}