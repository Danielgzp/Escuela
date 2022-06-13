<?php

namespace App\Model;

use Core\Model;

class StudentsModel extends Model{

	// AQUÍ VA LA CONEXIÓN CON LA BASE DE DATOS
	protected function newStudentModel($data)
	{
		$query = 'INSERT INTO `users` (`ci`, `username`, `name`, `surname`, `email`, `password`, `address`, `personal_phone`, `local_phone`, `birth_date`, `gender`, `group`, `admission_date`) VALUES (:ci, :username, :name, :surname, :email, :password, :address, :personal_phone, :local_phone, :birth_date, :gender, :group, :admission_date)';
		$sql = $this->db->prepare($query);
		$sql->bindParam(':ci', $data['ci']);
		$sql->bindParam(':username', $data['username']);
		$sql->bindParam(':name', $data['name']);
		$sql->bindParam(':surname', $data['surname']);
		$sql->bindParam(':email', $data['email']);
		$sql->bindParam(':password', $data['password']);
		$sql->bindParam(':address', $data['address']);
		$sql->bindParam(':personal_phone', $data['personal_phone']);
		$sql->bindParam(':local_phone', $data['local_phone']);
		$sql->bindParam(':birth_date', $data['birth_date']);
		$sql->bindParam(':gender', $data['gender']);
		$sql->bindParam(':group', $data['group']);
		$sql->bindParam(':admission_date', $data['admission_date']);
		$sql->execute();
		return $sql;
		$sql->close();
		$sql = null;
	}

	protected function newInfoModel($data)
	{
		$query = 'INSERT INTO `information` (`ci`, `section`, `period`) VALUES (:ci, :section, :period)';
		$sql = $this->db->prepare($query);
		$sql->bindParam(':ci', $data['ci']);
		// $sql->bindParam(':grade', $data['grade']);
		$sql->bindParam(':section', $data['section']);
		$sql->bindParam(':period', $data['period']);
		$sql->execute();
		return $sql;
		$sql->close();
		$sql = null;
	}

	protected function newRepresentantModel($data)
	{
		$query = 'INSERT INTO `representant` (`ci`, `name`) VALUES (:ci, :name)';
		$sql = $this->db->prepare($query);
		$sql->bindParam(':ci', $data['ci']);
		$sql->bindParam(':name', $data['name']);
		$sql->execute();
		return $sql;
		$sql->close();
		$sql = null;
	}

	protected function newExtraInfoModel($data)
	{
		$query = 'INSERT INTO `extra_info` (`student`, `birth_place`, `living_conditions`, `representant`) VALUES (:student, :birth_place, :living_conditions, :representant)';
		$sql = $this->db->prepare($query);
		$sql->bindParam(':student', $data['student']);
		$sql->bindParam(':birth_place', $data['birth_place']);
		$sql->bindParam(':living_conditions', $data['living_conditions']);
		$sql->bindParam(':representant', $data['representant']);
		$sql->execute();
		return $sql;
		$sql->close();
		$sql = null;
	}

}