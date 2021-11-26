<?php
require_once("DAO.php");
require_once("../Objects/Partidas.php");

class PartidaDAO extends DAO{
    private static $instance;

    private function __construct(){
        DAO::getConnection();
        DAO::createTable();
    }

    public static function getInstance(){
        return isset(self::$instance) ? self::$instance : self::$instance = new PartidaDAO();
    }

    public function insertNewPartida($idUser, $gridCol, $gridLin, $bombas, $data, $modalidade, $tempo, $pontuacao, $resultado){
        try{
            $stmt = DAO::getConnection()->prepare("INSERT INTO Partidas (Id_user, Grid_Col, Grid_Lin, Bombas, Data, Modalidade, Tempo, Pontuacao, Resultado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute(array($idUser, $gridCol, $gridLin, $bombas, $data, $modalidade, $tempo, $pontuacao, $resultado));
        }
        catch(PDOException $e){
            die("Insert Into Table Partidas Failed: {$e->getMessage()}");
        }
        return $this->retrieveById(DAO::lastId("Partidas", "Id_partida"));
    }

    private function buildObject($rs){
        $partida = null;
        try{
            $partida = new Partida($rs["Id_user"], $rs["Id_partida"], $rs["Grid_Col"], $rs["Grid_Lin"], $rs["Bombas"], $rs["Data"], $rs["Modalidade"], $rs["Tempo"], $rs["Pontuacao"], $rs["Resultado"]);
        }
        catch(PDOException $e){
            die("Build Object Failed: {$e->getMessage()}");
        }
        return $partida;
    }

    private function retrieveByQuery($query){
        $partidas = array();
        try{
            $rs = DAO::getResultSet($query);
            while($row = $rs->fetch(PDO::FETCH_ASSOC)){
                array_push($partidas, $this->buildObject($row));
            }
        }
        catch(PDOException $e){
            die("Retrieve From Table Partidas Failed: {$e->getMessage()}");
        }
        return $partidas;
    }

    public function retrieveByIdUser($idUser){
        $query = "SELECT * FROM Partidas WHERE Id_user = $idUser";
        $partidas = $this->retrieveByQuery($query);
        return (is_null($partidas) ? null : $partidas);
    }


    public function retrieveById($idPartida){
        $query = "SELECT * FROM Partidas WHERE Id_partida = $idPartida";
        $partida = $this->retrieveByQuery($query);
        return (is_null($partida) ? null : $partida[0]);
    }

    public function updatePartida($Partida){
        try{
            $stmt = DAO::getConnection()->prepare("UPDATE Partidas SET Id_user=?, Grid_Col=?, Grid_Lin=?, Bombas=?, Data=?, Modalidade=?, Tempo=?, Pontuacao=?, Resultado=?");
            $stmt->execute(array($Partida->getIdUser(), $Partida->getGridCol(), $Partida->getGridLin(), $Partida->getBombas(), $Partida->getData(), $Partida->getModalidade(), $Partida->getTempo(), $Partida->getPontuacao(), $Partida->getResultado()));
        }
        catch(PDOException $e){
            die("Update On Table User Failed: {$e->getMessage()}");
        }
    }
}
?>