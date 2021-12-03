<?php
require_once("DAO.php");
require_once("User.php");

class UserDAO extends DAO{
    private static $instance;

    private function __construct(){
        DAO::getConnection();
        DAO::createTable();
    }

    public static function getInstance(){
        return isset(self::$instance) ? self::$instance : self::$instance = new UserDAO();
    }

    public function insertNewUser($nome, $cpf, $dtNasc, $tel, $email, $username, $password){
        try{
            $stmt = DAO::getConnection()->prepare("INSERT INTO User (Nome, Cpf, Data_nascimento, Telefone, Email, Username, Password) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute(array($nome, $cpf, $dtNasc, $tel, $email, $username, $password));
        }
        catch(PDOException $e){
            die("Insert Into Table User Failed: {$e->getMessage()}");
        }
        return $this->retrieveById(DAO::lastId("User", "Id_user"));
    }

    private function buildObject($rs){
        $user = null;
        try{
            $user = new User($rs["Id_user"], $rs["Nome"], $rs["Cpf"], $rs["Data_nascimento"], $rs["Telefone"], $rs["Email"], $rs["Username"], $rs["Password"]);
        }
        catch(PDOException $e){
            die("Build Object Failed: {$e->getMessage()}");
        }
        return $user;
    }

    private function retrieveByQuery($query){
        $users = array();
        try{
            $rs = DAO::getResultSet($query);
            while($row = $rs->fetch(PDO::FETCH_ASSOC)){
                array_push($users, $this->buildObject($row));
            }
        }
        catch(PDOException $e){
            die("Retrieve From Table User Failed: {$e->getMessage()}");
        }
        return $users;
    }

    public function retrieveById($id){
        $query = "SELECT * FROM User WHERE Id_user = $id";
        $user = $this->retrieveByQuery($query);
        return (empty($user) ? NULL : $user[0]);
    }

    public function retrieveByUsername($username){
        $query = "SELECT * FROM User WHERE Username LIKE '" . $username . "'";
        $user = $this->retrieveByQuery($query);
        return (empty($user) ? null : $user[0]);
    }

    public function retrieveIdByUsername($username){
        $query = "SELECT Id_user FROM User WHERE Username LIKE '" . $username . "'";
        $user = $this->retrieveByQuery($query);
        return (empty($user) ? null : $user[0]);
    }

    public function updateUser($User){
        try{
            $stmt = DAO::getConnection()->prepare("UPDATE User SET Nome=?, Cpf=?, Data_nascimento=?, Telefone=?, Email=?, Username=?, Password=?");
            $stmt->execute(array($User->getNome(), $User->getCpf(), $User->getDtNasc(), $User->getTelefone(), $User->getEmail(), $User->getUsername(), $User->getPassword()));
        }
        catch(PDOException $e){
            die("Update On Table User Failed: {$e->getMessage()}");
        }
    }
}
?>