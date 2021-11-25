<?php
abstract class DAO{

    public static $serverName = "localhost";
    public static $userName = "root";
    public static $pwd = "";
    public static $dbname = "campoMinado";

    private static $conn;

    public static function getConnection(){
        if(self::$conn == null){
            try{
                $serverName = self::$serverName;
                $userName = self::$userName;
                $dbname = self::$dbname;
                $pwd = self::$pwd;

                self::$conn = new PDO("mysql:host=$serverName; dbname=$dbname", $userName, $pwd);
            }
            catch(PDOException $e){
                die("Connection Failed: {$e->getMessage()}");
            }
        }
        return self::$conn;    
    }

    protected function getResultSet($query){
        try{
            $rs = self::getConnection()->query($query);
        }
        catch(PDOException $e){
            die("Connection Failed: {$e->getMessage()}");
        }
        return $rs;
    }
    protected function lastId($table, $primaryKey){
        $lastId = -1;
        try{
            $rs = self::getConnection()->query("SELECT MAX ($primaryKey) AS id FROM $table");
            $lastId = $rs[0]; 
        }
        catch(PDOException $e){
            die("Connection Failed: {$e->getMessage()}");
        }
        return $lastId;
    }

    protected function executeUpdate($query){
        $update = self::getConnection()->exec($query);
        return $update;
    }

    protected final function createTable(){
        try{
            $query = "CREATE TABLE IF NOT EXISTS User(
                Id_user INT NOT NULL AUTO_INCREMENT,
                Nome VARCHAR(120) NOT NULL,
                Cpf INT NOT NULL,
                Data_nascimento VARCHAR(10) NOT NULL,
                Telefone INT NOT NULL,
                Email VARCHAR(70) NOT NULL,
                Username VARCHAR(120) NOT NULL,
                Password VARCHAR(120) NOT NULL,
                UNIQUE (Cpf),
                UNIQUE (Username),
                PRIMARY KEY(Id_user)
            )";
            self::executeUpdate($query);
            $query = "CREATE TABLE IF NOT EXISTS Partidas(
                Id_user INT NOT NULL,
                Id_partida INT NOT NULL AUTO_INCREMENT,
                Grid_Col INT NOT NULL,
                Grid_Lin INT NOT NULL,
                Bombas INT NOT NULL,
                Data VARCHAR(10) NOT NULL,
                Modalidade VARCHAR(8),
                Tempo INT NOT NULL,
                Pontuacao INT NOT NULL,
                Resultado BOOLEAN NOT NULL,
                FOREIGN KEY (Id_user) REFERENCES User(Id_user),
                PRIMARY KEY (Id_partida)
            )";
            self::executeUpdate($query);
        }
        catch(PDOException $e){
            die("Connection Failed: {$e->getMessage()}");
        }
    }
}
?>