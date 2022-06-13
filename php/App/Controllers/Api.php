<?php 

namespace App\Controllers;

use Core\View;
use App\Controllers\Error;
use App\Controllers\PaginationController;
use App\Controllers\UsersController;
use App\Controllers\StudentsController;
use App\Controllers\PeriodsController;
use App\Controllers\SectionsController;


class Api
{
	public function login()
	{
		$data = json_decode(file_get_contents("php://input"));
		$get = new usersController();
		$get = $get->loginController($data);
		echo json_encode($get);
	}
	public function newUser()
	{	
		if(isset($_POST['ci'])){

			//Comprobar si el formulario es el del estudiante
			if($_POST['group'] == 'Preescolar' || $_POST['group'] == 'Primaria'){

				$student = new StudentsController();
				$student = $student->newStudentController();
				echo json_encode($student);

			}else{
				
				$user = new UsersController();
				$user = $user->newUserController();
				echo json_encode($user);
			
			}
			
		}else{
			$error = new Error();
			$error->pageNotFound();
		}
	}

	//ACTUALIZAR USUARIOS
	public function updateUser()
	{
		if(isset($_POST['ci'])){

			//Comprobar si el formulario es el del estudiante
			if($_POST['group'] == 'Prescolar' || $_POST['group'] == 'Primaria'){

				$student = new StudentsController();
				$student = $student->updateStudentController();
				echo json_encode($student);

			}else{
				
				$user = new UsersController();
				$user = $user->updateUserController();
				echo json_encode($user);
			
			}
			
		}else{
			$error = new Error();
			$error->pageNotFound();
		}
	}


	//MOSTRAR LOS USUARIOS SIN INCLUIR ESTUDIANTES CON PAGINACIÓN
	public function showUsers($page = 1)
	{
		$show = new PaginationController();
		$show = $show->pagination($page, 'users');
		echo $show = json_encode($show, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
	}

	//ELIMINAR USUARIOS
	public function deleteUser($ci = NULL)
	{
		if($ci != NULL){
		
			$delete = new UsersController();
			$delete = $delete->deleteUserController($ci);
			echo json_encode($delete);

		}else{
			
			$error = new Error();
			$error->pageNotFound();

		}

	}

	//ELIMINAR ESTUDIANTES
	public function deleteStudent($ci = NULL)
	{
		if($ci != NULL){
		
			$delete = new StudentsController();
			$delete = $delete->deleteStudentController($ci);
			echo json_encode($delete);

		}else{
			
			$error = new Error();
			$error->pageNotFound();

		}

	}

	//MOSTRAR SOLO LOS ESTUDIANTES CON PAGINACIÓN
	public function showStudents($page = 1)
	{
		$show = new PaginationController();
		$show = $show->pagination($page, 'students');
		echo $show = json_encode($show, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
	}

	//AGREGAR PERÍODO ESCOLAR
	public function newPeriod()
	{	
		//Comprobar si se ha enviado el formulario
		if(isset($_POST['start']) && isset($_POST['end'])){
			
			$period = new PeriodsController();
			$period = $period->newPeriodController();
			echo json_encode($period);
		

		//Si no se ha enviado el formulario saldrá la página de error
		}else{
			
			$error = new Error();
			$error->pageNotFound();
			
		}
	}

	//MOSTRAR LOS PERÍODOS ESCOLARES
	public function showPeriods()
	{
		$show = new PeriodsController();
		$show = $show->showPeriodsController();
		echo $show = json_encode($show, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
	}

	//AGREGAR SECCIONES
	public function newSection()
	{
		if(isset($_POST['section'])){

			$add = new SectionsController();
			$add = $add->newSectionController();
			echo json_encode($add);

		}else{

			$error = new Error();
			$error->pageNotFound();	

		}
		
	}

	//MOSTRAR LAS SECCIONES
	public function showSections()
	{
		$show = new SectionsController();
		$show = $show->showSectionsController();
		echo $show = json_encode($show, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
	}
}