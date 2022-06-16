<?php 

namespace App\Model;

use Core\Model;

class PeriodsModel extends Model
{
	protected function newPeriodModel($data){
		$query = 'INSERT INTO `period` (`start`, `end`) VALUES (:start, :end)';
		$sql = $this->db->prepare($query);
		$sql->bindParam(':start', $data['start']);
		$sql->bindParam(':end', $data['end']);
		$sql->execute();
		return $sql;
		$sql->close();
		$sql = null;
	}

	protected function showPeriodsModel(){
		$query = 'SELECT * FROM period ORDER BY start DESC';
		$sql = $this->db->prepare($query);
		$sql->execute();
		return $sql = $sql->fetchAll();
	}
}