<?php 

namespace Core;

class Cors
{
	private $method;
	public function __construct()
	{
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
		header("Allow: GET, POST, OPTIONS, PUT, DELETE");
		$this->method = $_SERVER['REQUEST_METHOD'];
		if($this->method == "OPTIONS") {
			die();
		}
		
		// return true;
	}
}