<?php
include("DAO.php");

class UserDAO extends DAO{

    function __construct(){
        DAO::getConnection();
        DAO::createTable();
    }

    public function create($id, $nome, $cpf, $dtNasc, $tel, $email, $username, $password){
        //$stmt = DAO::getConnection()->prepare("INSERT INTO User (Id_user, Nome, Cpf, Data_nascimento, Telefone, Email, Username, Password) VALUES (?, ?, ?, ?, ?, ?, ?)");
        //$stmt->exec(array($nome, $cpf, $dtNasc, $tel, $email, $username, $password));
        //DAO::executeUpdate($stmt);


      
        
        $stmt = DAO::getConnection()->prepare("INSERT INTO User VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute(array($id, $nome, $cpf, $dtNasc, $tel, $email, $username, $password));
        //DAO::executeUpdate($stmt);
        

    }
}

    $user = new UserDAO();

    //$user->create(1,"Nome",4002,"26/01/2002",999991,"email","username","password");
?>