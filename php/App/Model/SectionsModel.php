<?php

namespace App\Model;

use Core\Model;

class SectionsModel extends Model{

	// AQUÍ VA LA CONEXIÓN CON LA BASE DE DATOS
	protected function newSectionModel($section)
	{
		$query = 'INSERT INTO section (name) VALUES (:name)';
		$sql = $this->db->prepare($query);
		$sql->bindParam(':name', $section);
		$sql->execute();
		return $sql;
		$sql->close();
		$sql = null;
	}

	//MOSTRAR SECCIONES 
	protected function showSectionsModel(){
		$query = 'SELECT * FROM section';
		$sql = $this->db->prepare($query);
		$sql->execute();
		return $sql = $sql->fetchAll();
	}

}