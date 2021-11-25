<?php
include("DAO.php");

class UserDAO extends DAO{
    private static $instance;

    function __construct(){
        DAO::getConnection();
        DAO::createTable();
    }

    public static function getInstance(){
        return isset(self::$instance) ? self::$instance : self::$instance = new UserDAO();
    }

    public function create($nome, $cpf, $dtNasc, $tel, $email, $username, $password){
        try{
            $stmt = DAO::getConnection()->prepare("INSERT INTO User VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute(array($nome, $cpf, $dtNasc, $tel, $email, $username, $password));
        }
        catch(PDOException $e){
            die("Insert Into Table User Failed: {$e->getMessage()}");
        }
        //return self::retrieveById(DAO::lastId("User", "Id_user"))
    }

    public function buildObject($rs){
        $user = null;
        try{
            //$user = new User($rs["User_id"]);
        }
        catch(PDOException $e){
            die("Build Object Failed: {$e->getMessage()}");
        }
    }

    public function retrieve($query){
        $arr = array();
        try{
            $rs = DAO::getResultSet($query);

            while($rs->fetch(PDO::FETCH_ASSOC)){
                //$arr->array_push(self::buildObject($rs->fetch(PDO::FETCH_ASSOC)));
            }
        }
        catch(PDOException $e){
            die("Retrieve From Table User Failed: {$e->getMessage()}");
        }
    }

}

/*
package Model;

public List retrieve(String query) {
    List<Exame> exames = new ArrayList();
    ResultSet rs = getResultSet(query);
    try {
        while (rs.next()) {
            exames.add(buildObject(rs));
        }
    } catch (SQLException e) {
        System.err.println("Exception: " + e.getMessage());
    }
    return exames;
}

    private Exame buildObject(ResultSet rs) {
        Exame exame = null;
        try {
            exame = new Exame(rs.getInt("id"), rs.getString("nome"), rs.getInt("id_consulta"));
        } catch (SQLException e) {
            System.err.println("Exception: " + e.getMessage());
        }
        return exame;
    }

    // Generic Retriever
    
    // RetrieveAll
    public List retrieveAll() {
        return this.retrieve("SELECT * FROM exame");
    }
    
    // RetrieveLast
    public List retrieveLast(){
        return this.retrieve("SELECT * FROM exame WHERE id = " + lastId("exame","id"));
    }

    // RetrieveById
    public Exame retrieveById(int id) {
        List<Exame> exames = this.retrieve("SELECT * FROM exame WHERE id = " + id);
        return (exames.isEmpty()?null:exames.get(0));
    }

    // RetrieveBySimilarName
    public List retrieveBySimilarName(String nome) {
        return this.retrieve("SELECT * FROM exame WHERE nome LIKE '%" + nome + "%'");
    }    
    
    public List retrieveByIdConsulta(int id){
        return this.retrieve("SELECT * FROM exame WHERE id_consulta = " + id);
    }
    
    // Update
    public void update(Exame exame) {
        try {
            PreparedStatement stmt;
            stmt = DAO.getConnection().prepareStatement("UPDATE exame SET nome=?, id_consulta=? WHERE id=?");
            stmt.setString(1, exame.getNome());
            stmt.setInt(2, exame.getIdConsulta());
            stmt.setInt(3, exame.getId());
            executeUpdate(stmt);
        } catch (SQLException e) {
            System.err.println("Exception: " + e.getMessage());
        }
    }
    // Delete   
    public void delete(int id) {
        PreparedStatement stmt;
        try {
            stmt = DAO.getConnection().prepareStatement("DELETE FROM exame WHERE id = ?");
            stmt.setInt(1, id);
            executeUpdate(stmt);
        } catch (SQLException e) {
            System.err.println("Exception: " + e.getMessage());
        }
    }
}

    */
?>