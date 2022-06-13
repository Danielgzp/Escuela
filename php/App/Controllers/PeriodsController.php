<?php
namespace App\Controllers;

use App\Model\PeriodsModel;

class PeriodsController extends PeriodsModel
{

	public function newPeriodController()
	{

		$start = $_POST['start'];
		$end = $_POST['end'];

		if(empty($start) || empty($end)){

			$alert = "Ningún campo puede estar vacío";

		}else{

			$data = [
				"start" => $start,
				"end" => $end
			];

			$save = PeriodsModel::newPeriodModel($data);

			if($save->rowCount() > 0){

				$alert = true;

			}else{

				$alert = "Ha ocurrido un error guardando la información";

			}

		}

		return $alert;

	}

	public function showPeriodsController()
	{
		$get = PeriodsModel::showPeriodsModel();

		$array = [];

		foreach ($get as $data) {

			$start = explode('-', $data->start);
			$end = explode('-', $data->end);

			$content = "Período ".$start[0]."-".$end[0];

			$array2 = [
				"id" => $data->id,
				"name" => $content,
				"inicio" => $data->start,
				"finalización" => $data->end
			];
			array_push($array, $array2);
		}

		return $array;
	}
}