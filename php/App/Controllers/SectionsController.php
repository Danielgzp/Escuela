<?php

namespace App\Controllers;

use Core\Util;
use App\Model\SectionsModel;

class SectionsController extends SectionsModel
{

	public function newSectionController()
	{
		$util = new Util();

    	$section = $util->clean_string($_POST['section']);


		if(empty($section)){
		
			$alert = "Ningún campo puede estar vacío";
		
		}else{

			if(strlen($section) > 25){
			
				$alert = "La sección no puede tener más de 25 carácteres";
			 
			}else{

				//PERMITIR SOLO LETRAS 
				if(!preg_match("/^[a-zA-ZÀ-ÿ\s]{1,40}$/", $section )){
					
					$alert = "Sólo se permiten letras para la sección";

		    	}else{
		    		/*AQUI IRIA LA INSERCIÓN A LA BASE DE DATOS*/

		    		$save = SectionsModel::newSectionModel($section);

		    		if($save->rowCount() > 0){

		    			$alert = true;
		    		
		    		}else{

		    			$alert = "Ha ocurrido un error al guardar en la base de datos";

		    		}

		    		
		    	}
		    }
		
	    }

		return $alert;
	}

	public function showSectionsController()
	{
		$get = SectionsModel::showSectionsModel();

		return $get;
	}

}