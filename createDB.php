<?php 

$serverName = "localhost";
$userName = "root";
$pwd = "";
$dbname = "campoMinado";

try {
  // Código da página W3C

  $conn = new mysqli($serverName, $userName, $pwd);

  // Criar DB
  $sql = "CREATE DATABASE IF NOT EXISTS $dbname";
  $conn->query($sql);
  $conn = null;

  $PDO = new PDO("mysql:host=$serverName; dbname=$dbname", $userName, $pwd);

  $query = "CREATE TABLE IF NOT EXISTS User(
            Id_user INT NOT NULL,
            Nome VARCHAR(120) NOT NULL,
            Cpf INT NOT NULL,
            Data_nascimento DATE NOT NULL,
            Telefone INT NOT NULL,
            Email VARCHAR(70) NOT NULL,
            Username VARCHAR(120) NOT NULL,
            Password VARCHAR(120) NOT NULL,
            UNIQUE (Cpf),
            UNIQUE (Username),
            PRIMARY KEY(Id_user))";

  //Cria tabela User
  $PDO->exec($query);

} catch (Exception $e) {
  echo "Connection Failed: {$e->getMessage()}";
}
?>