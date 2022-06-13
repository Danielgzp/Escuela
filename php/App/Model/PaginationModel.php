<?php

namespace App\Model;
use Core\Model;

class PaginationModel extends Model
{
	protected function num_rows($table)
	{
		$query = 'SELECT COUNT(*) as num_rows FROM '.$table;
		$sql = $this->db->prepare($query);
		$sql->execute();
		$sql = $sql->fetch();
		return $sql->num_rows;
	}

	protected function users_num_rows()
	{
		$query = 'SELECT COUNT(*) as num_rows FROM users WHERE `group` != "Primaria" AND `group` != "Preescolar"';
		$sql = $this->db->prepare($query);
		$sql->execute();
		$sql = $sql->fetch();
		return $sql->num_rows;
	}
	
	protected function showUsers($start, $items)
	{
		$query = 'SELECT ci, name, surname, email, password, address, personal_phone, local_phone, birth_date, gender, `group`, admission_date FROM users WHERE `group` != "Primaria" AND `group` != "Preescolar" ORDER BY name DESC LIMIT '.$start.', '.$items;
		$sql = $this->db->prepare($query);
		$sql->execute();
		return $sql = $sql->fetchAll();
	}

	protected function students_num_rows()
	{
		$query = 'SELECT COUNT(*) as num_rows FROM users WHERE `group` = "Primaria" OR `group` = "Preescolar"';
		$sql = $this->db->prepare($query);
		$sql->execute();
		$sql = $sql->fetch();
		return $sql->num_rows;
	}
	
	protected function showStudents($start, $items)
	{
		$query = 'SELECT u.ci, u.name, u.surname, email, password, address, personal_phone, local_phone, birth_date, gender, `group`, admission_date, r.ci as r_ci, r.name as r_name, r.surname as r_surname FROM users u INNER JOIN extra_info e ON e.student = u.ci INNER JOIN representant r ON r.ci = e.representant WHERE `group` = "Primaria" OR `group` = "Preescolar" ORDER BY name DESC LIMIT '.$start.', '.$items;
		$sql = $this->db->prepare($query);
		$sql->execute();
		return $sql = $sql->fetchAll();
	}
	
}