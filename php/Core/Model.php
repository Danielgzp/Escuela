<?php

namespace Core;

use PDO;
use Dotenv;

class Model
{
    public $db = null;

    public function __construct()
    {
        try {
            self::openDatabaseConnection();
        } catch (\PDOException $e) {
            exit('No se puede establecer la conexión con la base de datos.');
        }
    }

    private function openDatabaseConnection()
    {
        $dotenv = Dotenv\Dotenv::createImmutable('../');
        $dotenv->load();

        $dsn = sprintf("mysql:host=%s:%s;dbname=%s;charset=%s", $_ENV['DB_HOST'], $_ENV['DB_PORT'], $_ENV['DB_NAME'], $_ENV['DB_CHARSET']);
        $options  = [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ, 
            PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
        ];
        $this->db = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASSWORD'], $options);
    }
	
	protected function data_query($table, $field, $data)
    {
        $query = 'SELECT * FROM ' . $table . ' WHERE ' . $field . ' = :data';
        $sql = $this->db->prepare($query);
        $sql->bindParam(':data', $data);
        $sql->execute();
		return $sql;
		$sql->close();
		$sql = null;
    }

    protected function delete($table, $field, $data)
    {
        $query = 'DELETE FROM ' . $table . ' WHERE ' . $field . ' = :data';
        $sql = $this->db->prepare($query);
        $sql->bindParam(':data', $data);
        $sql->execute();
        return $sql;
        $sql->close();
        $sql = null;
    }
}
