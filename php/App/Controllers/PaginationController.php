<?php

namespace App\Controllers;
use App\Model\PaginationModel;

class PaginationController extends PaginationModel
{
		public function pagination($page, $type)
		{
			$array = [];
			$next = '';
			$prev = '';

			//COMPROBAR SI SE REQUIEREN LOS DATOS DE LOS ESTUDIANTES O USUARIOS
			switch ($type){

				case "users":
					
					$num_total_rows = paginationModel::users_num_rows();

				break;

				case "students":

					$num_total_rows = paginationModel::students_num_rows();

				break;

			}

			
			//UNA FÓRMULA PARA LA PAGINACIÓN TODA LOCA QUE NI YO MISMA ENTENDÍ, PERO FUNCIONA
			$num_items_by_page = 20;

			if($page == 1){
				
				$start = 0;
				$page = 1;
				
			}else{
				
				$start = ($page - 1) * $num_items_by_page;
				
			}

			$total_pages = ceil($num_total_rows / $num_items_by_page);

			if($page > $total_pages){

				return "Ya ha pasado el limite de páginas";

			}else{
				
				//COMPROBAR SI SE REQUIEREN LOS DATOS DE LOS ESTUDIANTES O USUARIOS
				switch ($type){

					case "users":
						
						$show = paginationModel::showUsers($start, $num_items_by_page);

					break;

					case "students":

						$show = paginationModel::showStudents($start, $num_items_by_page);

					break;

				}

				$array2 = $show;

				if($total_pages > 1){
					
					if($page != 1){
						$prev = "http://localhost/backend/books/page/".($page - 1);
					}else{
						$prev = null;
					}

					if($page != $total_pages){
						$next = "http://localhost/backend/books/page/".($page + 1);
					}

					if($page == $total_pages){
						$next = null;
					}
				}

				$array = [
					"info" => [
						"count" => $num_total_rows,
						"pages" => $total_pages,
						"next" => $next,
						"prev" => $prev
					],
					"results" => []

				];

				$array['results'] = $array2;

				return $array;
			}
		}
}