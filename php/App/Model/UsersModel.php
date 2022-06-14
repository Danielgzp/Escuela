<?php

namespace App\Model;
use Core\Model;

class UsersModel extends Model{

	// AQUÍ VA LA CONEXIÓN CON LA BASE DE DATOS
	protected function loginModel($username)
	{
		$query = 'SELECT * FROM users WHERE username = :username';
		$sql = $this->db->prepare($query);
		$sql->bindParam(':username', $username);
		$sql->execute();
		$sql = $sql->fetch();
		return $sql;
		$sql->close();
		$sql = null;
	}
	
	protected function newUserModel($data)
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

	protected function updateUserModel($data)
	{
		$query = 'UPDATE users SET name = :name, surname = :surname, email = :email, password = :password, address = :address, personal_phone = :personal_phone, local_phone = :local_phone, birth_date = :birth_date, gender = :gender, `group` = :group, admission_date = :admission_date, egress_date = :egress_date WHERE ci = :ci';
		$sql = $this->db->prepare($query);
		$sql->bindParam(':ci', $data['ci']);
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
		$sql->bindParam(':egress_date', $data['egress_date']);
		$sql->execute();
		return $sql;
		$sql->close();
		$sql = null;
	}

}